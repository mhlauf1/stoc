/* STOC report viewer: builds the top bar + side navigation around the
   fixed-layout report document, tracks the current page, scales pages to fit
   small screens, and reports GA4 events. Expects window.STOC_REPORT config:
   { slug, title, pdfUrl, pdfName, logo, toc: [{label, page, group?}] } */
(function () {
  var cfg = window.STOC_REPORT;
  if (!cfg) return;

  /* ── GA4 (same property as the main site) ── */
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;
  var ga = document.createElement("script");
  ga.async = true;
  ga.src = "https://www.googletagmanager.com/gtag/js?id=G-FDNSZWXM62";
  document.head.appendChild(ga);
  gtag("js", new Date());
  gtag("config", "G-FDNSZWXM62");

  function track(name) {
    try {
      window.gtag("event", name, {
        report_name: cfg.slug,
        report_title: cfg.title,
      });
    } catch (e) {}
  }
  track("report_read");

  /* ── Top bar ── */
  var bar = document.createElement("div");
  bar.id = "stoc-bar";
  bar.innerHTML =
    '<button id="stoc-nav-toggle" aria-expanded="false" aria-controls="stoc-sidenav">' +
    '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
    "Contents</button>" +
    '<a class="stoc-bar-logo" href="/" aria-label="STOC Advisory home"><img src="' +
    cfg.logo +
    '" alt="STOC Advisory"></a>' +
    '<div class="stoc-bar-title">' + cfg.title + "</div>" +
    '<a class="stoc-bar-back" href="/insights">&larr; All Insights</a>' +
    '<a class="stoc-bar-download" href="' + cfg.pdfUrl + "?dl=" + encodeURIComponent(cfg.pdfName) +
    '" target="_blank" rel="noopener">Download PDF</a>';
  document.body.appendChild(bar);

  /* ── Side navigation ── */
  var pages = Array.prototype.slice.call(document.querySelectorAll(".page"));
  var nav = document.createElement("nav");
  nav.id = "stoc-sidenav";
  nav.setAttribute("aria-label", "Report contents");
  var html = '<div class="stoc-nav-heading">In this report</div>';
  var lastGroup = null;
  cfg.toc.forEach(function (item, i) {
    if (item.group && item.group !== lastGroup) {
      html += '<div class="stoc-nav-group">' + item.group + "</div>";
      lastGroup = item.group;
    }
    html +=
      '<button class="stoc-nav-item" data-idx="' + i + '" data-page="' + item.page + '">' +
      "<span>" + item.label + "</span>" +
      '<span class="stoc-nav-pg">' + item.page + "</span></button>";
  });
  nav.innerHTML = html;
  document.body.appendChild(nav);

  var backdrop = document.createElement("div");
  backdrop.id = "stoc-nav-backdrop";
  document.body.appendChild(backdrop);

  var DOCKED = window.matchMedia("(min-width: 1360px)");
  function setNav(open) {
    document.body.classList.toggle("stoc-nav-open", open);
    document.getElementById("stoc-nav-toggle").setAttribute("aria-expanded", String(open));
  }
  setNav(DOCKED.matches); // docked open by default on wide screens
  document.getElementById("stoc-nav-toggle").addEventListener("click", function () {
    setNav(!document.body.classList.contains("stoc-nav-open"));
  });
  backdrop.addEventListener("click", function () {
    setNav(false);
  });

  var items = Array.prototype.slice.call(nav.querySelectorAll(".stoc-nav-item"));
  items.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pg = pages[parseInt(btn.dataset.page, 10) - 1];
      if (pg) pg.scrollIntoView({ behavior: "smooth", block: "start" });
      if (!DOCKED.matches) setNav(false);
    });
  });

  /* Highlight the TOC entry for the page currently in view. */
  function setActive(pageNum) {
    var best = null;
    items.forEach(function (btn) {
      if (parseInt(btn.dataset.page, 10) <= pageNum) best = btn;
    });
    items.forEach(function (btn) {
      btn.classList.toggle("active", btn === best);
    });
    if (best && !best.matches(":hover")) {
      var r = best.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight - 40) {
        best.scrollIntoView({ block: "center" });
      }
    }
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) setActive(pages.indexOf(en.target) + 1);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    pages.forEach(function (p) {
      io.observe(p);
    });
  }

  /* ── Fit fixed-width (210mm ≈ 794px) pages on small screens ── */
  var PAGE_W = 794;
  function fit() {
    var pad = 16;
    var avail = document.documentElement.clientWidth - pad;
    if (DOCKED.matches && document.body.classList.contains("stoc-nav-open")) {
      avail -= 272;
    }
    var scale = avail < PAGE_W ? avail / PAGE_W : "";
    pages.forEach(function (p) {
      p.style.zoom = scale;
    });
  }
  fit();
  window.addEventListener("resize", fit);

  /* Track PDF downloads from the top bar. */
  bar.querySelector(".stoc-bar-download").addEventListener("click", function () {
    track("report_download");
  });
})();
