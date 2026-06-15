const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const progressBar = $(".progress-bar");
const sectionCounter = $("#sectionCounter");
const navPanel = $("#navPanel");
const bubble = $("#bubbleToggle");
const body = document.body;

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;

  const sections = $$("main section[id]");
  const active = sections.reduce((current, section) => {
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.45 ? section : current;
  }, sections[0]);
  if (active) {
    sectionCounter.textContent = active.dataset.index || "01";
    $$("[data-nav-link]").forEach((link) => {
      const isActive = link.getAttribute("href") === `#${active.id}`;
      link.classList.toggle("bg-black", isActive);
      link.classList.toggle("text-white", isActive);
      link.classList.toggle("bg-white", !isActive);
      link.classList.toggle("text-black", !isActive);
      link.setAttribute("aria-current", isActive ? "true" : "false");
    });
  }
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );
  $$(".reveal").forEach((node) => observer.observe(node));
}

function initTiltCards() {
  $$(".tilt-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
      card.style.setProperty("--ty", "-4px");
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--ty", "0");
    });
  });
}

function initScratchCards() {
  $$(".scratch-card").forEach((card) => {
    const canvas = $("canvas", card);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const state = { drawing: false, revealed: false };

    function resize() {
      const rect = card.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintCover(rect.width, rect.height);
    }

    function paintCover(width, height) {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#fff";
      ctx.font = "900 13px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let y = -20; y < height + 40; y += 38) {
        for (let x = -20; x < width + 80; x += 128) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-0.18);
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 2;
          ctx.strokeRect(-42, -12, 84, 24);
          ctx.fillText("NOTE", 0, 1);
          ctx.restore();
        }
      }
      ctx.fillStyle = "#fff";
      ctx.font = "900 18px Anton, Impact, sans-serif";
      ctx.fillText(card.dataset.cover || "GRATTE", width / 2, height / 2);
    }

    function pointerPosition(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }

    function scratch(event) {
      if (!state.drawing || state.revealed) return;
      const point = pointerPosition(event);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 25, 0, Math.PI * 2);
      ctx.fill();
      maybeReveal();
    }

    function maybeReveal() {
      const sample = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let clear = 0;
      const step = 28;
      for (let i = 3; i < sample.data.length; i += step * 4) {
        if (sample.data[i] === 0) clear += 1;
      }
      const percent = clear / (sample.data.length / (step * 4));
      if (percent > 0.48) reveal();
    }

    function reveal() {
      state.revealed = true;
      card.classList.add("is-revealed");
      const score = $(".score-pop", card);
      if (score) score.classList.add("animate-pop");
    }

    canvas.addEventListener("pointerdown", (event) => {
      state.drawing = true;
      try {
        canvas.setPointerCapture(event.pointerId);
      } catch {
        // Some synthetic tests do not create an active pointer capture target.
      }
      scratch(event);
    });
    canvas.addEventListener("pointermove", scratch);
    canvas.addEventListener("pointerup", () => {
      state.drawing = false;
    });
    canvas.addEventListener("pointercancel", () => {
      state.drawing = false;
    });

    resize();
    window.addEventListener("resize", resize);
  });
}

function initCalculator() {
  const slider = $("#apiSlider");
  const callsValue = $("#apiCalls");
  const costValue = $("#apiCost");
  if (!slider) return;

  const format = new Intl.NumberFormat("fr-FR");
  function render() {
    const calls = Number(slider.value);
    const cost = calls * 0.003;
    callsValue.textContent = format.format(calls);
    costValue.textContent = `${cost.toFixed(2)} $`;
  }
  slider.addEventListener("input", render);
  render();
}

function initChatBubble() {
  if (!bubble) return;
  bubble.addEventListener("click", () => {
    body.classList.toggle("chat-open");
    bubble.setAttribute("aria-expanded", body.classList.contains("chat-open") ? "true" : "false");
  });
}

function initKeyboardEgg() {
  const target = "mcp";
  let buffer = "";
  window.addEventListener("keydown", (event) => {
    buffer = `${buffer}${event.key.toLowerCase()}`.slice(-target.length);
    if (buffer === target) {
      body.classList.toggle("mcp-mode");
      const toast = $("#toast");
      if (toast) {
        toast.textContent = body.classList.contains("mcp-mode")
          ? "MCP détecté : les connexions brillent."
          : "Mode normal : les connexions restent propres.";
        toast.classList.remove("opacity-0", "translate-y-3");
        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(() => {
          toast.classList.add("opacity-0", "translate-y-3");
        }, 2100);
      }
    }
  });
}

function initCounters() {
  const counters = $$("[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const end = Number(node.dataset.count);
        const suffix = node.dataset.suffix || "";
        let start = 0;
        const duration = 700;
        const startTime = performance.now();
        function tick(now) {
          const progress = Math.min(1, (now - startTime) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          start = Math.round(end * eased);
          node.textContent = `${start}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(node);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((node) => observer.observe(node));
}

function initCursorHalo() {
  const halo = $(".cursor-halo");
  if (!halo || window.matchMedia("(pointer: coarse)").matches) return;
  let x = 0;
  let y = 0;
  let hx = 0;
  let hy = 0;

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
  });

  function render() {
    hx += (x - hx) * 0.18;
    hy += (y - hy) * 0.18;
    halo.style.transform = `translate(${hx - 22}px, ${hy - 22}px)`;
    requestAnimationFrame(render);
  }
  render();
}

function initNav() {
  $("#menuToggle")?.addEventListener("click", () => {
    navPanel.classList.toggle("hidden");
  });
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 900) navPanel.classList.add("hidden");
    });
  });
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
window.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initTiltCards();
  initScratchCards();
  initCalculator();
  initChatBubble();
  initKeyboardEgg();
  initCounters();
  initCursorHalo();
  updateProgress();
});
