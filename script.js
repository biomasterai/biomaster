document.querySelectorAll("[data-tabset]").forEach((group) => {
  const tabs = [...group.querySelectorAll('[role="tab"]')];
  const select = (index, focus = false) => {
    tabs.forEach((tab, current) => {
      const active = current === index;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      if (panel) panel.hidden = !active;
      if (active && focus) tab.focus();
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(index));
    tab.addEventListener("keydown", (event) => {
      const next = event.key === "ArrowRight" ? (index + 1) % tabs.length
        : event.key === "ArrowLeft" ? (index - 1 + tabs.length) % tabs.length
        : event.key === "Home" ? 0
        : event.key === "End" ? tabs.length - 1 : -1;
      if (next < 0) return;
      event.preventDefault();
      select(next, true);
    });
  });
});

const citationToggle = document.querySelector(".citation-toggle");
const citationPanel = document.getElementById("citation-panel");
if (citationToggle && citationPanel) {
  citationToggle.addEventListener("click", () => {
    const expanded = citationToggle.getAttribute("aria-expanded") !== "true";
    citationToggle.setAttribute("aria-expanded", String(expanded));
    citationPanel.hidden = !expanded;
  });
  citationPanel.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    citationToggle.setAttribute("aria-expanded", "false");
    citationPanel.hidden = true;
    citationToggle.focus();
  });
}

document.querySelectorAll("[data-copy-citation]").forEach((button) => {
  button.addEventListener("click", async () => {
    const source = document.getElementById(button.dataset.copyCitation);
    if (!source) return;
    const citation = source.textContent.trim();
    let copied = false;
    try {
      await navigator.clipboard.writeText(citation);
      copied = true;
    } catch {
      const helper = document.createElement("textarea");
      helper.value = citation;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.append(helper);
      helper.select();
      try { copied = document.execCommand("copy"); } catch { copied = false; }
      helper.remove();
    }
    const original = button.dataset.copyLabel || button.textContent;
    button.dataset.copyLabel = original;
    button.textContent = copied ? "Copied" : "Select text to copy";
    window.setTimeout(() => { button.textContent = original; }, 2000);
  });
});

const workbenchDialog = document.getElementById("workbench-lightbox");
if (workbenchDialog) {
  const title = document.getElementById("workbench-lightbox-title");
  const image = workbenchDialog.querySelector(".workbench-lightbox-media img");
  const closeButton = workbenchDialog.querySelector(".workbench-lightbox-close");
  let opener;

  document.querySelectorAll("[data-workbench-preview]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (typeof workbenchDialog.showModal !== "function") return;
      event.preventDefault();
      if (workbenchDialog.open) return;
      const thumbnail = link.querySelector("img");
      opener = link;
      title.textContent = link.closest("article")?.querySelector("h3")?.textContent || "Workbench";
      image.src = link.href;
      image.alt = thumbnail?.alt || `${title.textContent} workbench screenshot`;
      workbenchDialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => workbenchDialog.close());
  workbenchDialog.addEventListener("click", (event) => {
    if (event.target === workbenchDialog) workbenchDialog.close();
  });
  workbenchDialog.addEventListener("close", () => {
    image.removeAttribute("src");
    opener?.focus({ preventScroll: true });
  });
}

const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
if (menu && navigation) {
  const close = () => {
    menu.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || menu.getAttribute("aria-expanded") !== "true") return;
    close();
    menu.focus();
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !navigation.contains(event.target)) close();
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", close);
}

const destinations = window.BIOMASTER_SITE || {};
document.querySelectorAll("[data-release-link]").forEach((link) => {
  const address = destinations[link.dataset.releaseLink];
  if (typeof address !== "string" || !/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+(?:[/?#][^\s]*)?$/.test(address)) return;
  link.href = address;
  link.hidden = false;
  if (link.dataset.releaseLink === "releases") {
    document.querySelectorAll("[data-release-pending]").forEach((status) => { status.hidden = true; });
    document.querySelectorAll("[data-release-available]").forEach((status) => { status.hidden = false; });
  }
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("is-pending");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("is-pending");
    observer.observe(element);
  });
}

// Keep the publisher destination usable if the local cover asset cannot load.
const cover = document.querySelector(".cover-link img");
if (cover) {
  const unavailable = () => {
    cover.hidden = true;
    document.querySelector(".cover-unavailable").hidden = false;
  };
  cover.addEventListener("error", unavailable);
  if (cover.complete && cover.naturalWidth === 0) unavailable();
}
