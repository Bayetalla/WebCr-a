(() => {
  'use strict';

  /* =====================================================
     1. DONNÉES — arbre complet de la carte mentale
     ===================================================== */
  const L = (label) => ({ label });                       // feuille
  const N = (label, info, children) => ({ label, info, children });

  const DATA = N(
    'Création de site web',
    "Vue d'ensemble du cycle de vie d'un site web, de l'idée à la maintenance. Ouvrez chaque branche pour réviser les 7 grandes étapes, puis cochez les notions que vous maîtrisez.",
    [
      N('Cahier des charges & UX/UI',
        "Phase de cadrage : on définit le besoin, la structure et l'expérience utilisateur avant d'écrire la moindre ligne de code.",
        [
          N('Arborescence & Sitemap',
            "Organisation hiérarchique des pages du site. Le sitemap est la carte des contenus et des chemins de navigation.",
            [L("Cartographie de l'architecture de l'information")]),
          N('UX/UI Design',
            "UX = parcours et ergonomie ; UI = aspect visuel. On passe des wireframes (schémas) aux mockups (maquettes graphiques finales).",
            [L('Wireframes (maquettes basse fidélité)'), L('Mockups (haute fidélité) via Figma')]),
          N('Design System',
            "Référentiel commun qui garantit la cohérence visuelle et accélère le développement.",
            [L('Charte graphique'), L('Typographie'), L("Composants d'interface réutilisables")]),
          N('Spécifications techniques',
            "Décisions techniques structurantes : technologies retenues et modèle de données.",
            [L('Choix de la pile technologique (tech stack)'), L('Modélisation de la base de données (MCD/MLD, UML)')]),
        ]),

      N('Infrastructures & DNS',
        "Les briques qui rendent le site accessible sur Internet : adresse, serveur, résolution de noms et sécurisation des échanges.",
        [
          N('Nom de domaine',
            "Adresse lisible du site (ex. monsite.com), réservée auprès d'un registrar pour une durée renouvelable.",
            [L('Réservation Registrar (Gandi, OVHcloud, Cloudflare)')]),
          N('Hébergement (Hosting)',
            "Où le site est stocké et exécuté : VPS, serveur dédié ou plateforme serverless/PaaS qui gère l'infrastructure à votre place.",
            [L('Serveur virtuel privé (VPS)'), L('Serveur dédié'), L('Architecture Serverless / PaaS (Vercel, AWS, Netlify)')]),
          N('DNS',
            "L'annuaire d'Internet : il traduit un nom de domaine en adresse IP grâce à des enregistrements (A, AAAA, CNAME, MX…).",
            [L('Type A (adresse IP v4)'), L('AAAA (adresse IP v6)'), L('CNAME (alias)'), L('MX (e-mails)')]),
          N('Certificat SSL/TLS',
            "Chiffre les échanges entre le navigateur et le serveur et active HTTPS. Let's Encrypt fournit des certificats gratuits, renouvelables automatiquement.",
            [L("Déploiement HTTPS (Let's Encrypt)")]),
        ]),

      N('Développement Front-End',
        "Tout ce qui s'exécute dans le navigateur : structure, style et interactions de l'interface.",
        [
          N('Technologies',
            "HTML structure le contenu, CSS le met en forme, JavaScript ajoute le comportement. Les frameworks organisent l'interface en composants.",
            [L('HTML5, CSS3, JavaScript ES6+'), L('Frameworks: React, Vue.js, Angular, Svelte, Next.js')]),
          N('Responsive Web Design',
            "Adapter l'affichage à toutes les tailles d'écran (approche « mobile first » recommandée).",
            [L('Media Queries'), L('Flexbox ou CSS Grid')]),
          N('Pratiques',
            "Communication asynchrone avec le serveur, sans recharger la page.",
            [L('Requêtes AJAX, Fetch API, Axios')]),
        ]),

      N('Développement Back-End & BDD',
        "La logique métier côté serveur, le stockage des données et l'exposition d'une API pour le front-end.",
        [
          N('Technologies serveur',
            "Langages et frameworks côté serveur, choisis selon l'équipe, la performance et l'écosystème.",
            [L('Node.js, Python/Django, PHP/Laravel, Java/Spring Boot')]),
          N('Base de données',
            "Relationnelle (SQL) pour des données structurées et liées ; NoSQL pour la flexibilité ou la vitesse (cache).",
            [L('SGBDR: PostgreSQL, MySQL'), L('NoSQL: MongoDB, Redis (caching)')]),
          N('Architecture API',
            "Le contrat d'échange entre front et back : REST (ressources + verbes HTTP) ou GraphQL (le client choisit les données demandées).",
            [L('Interfaces API RESTful ou GraphQL')]),
          N('Sécurité',
            "Authentifier les utilisateurs, protéger les secrets et se prémunir contre les attaques web courantes (OWASP).",
            [L('JWT (JSON Web Tokens) et OAuth2'), L('Hachage des mots de passe (Bcrypt)'), L('Protection (Injections SQL, XSS, CSRF)')]),
        ]),

      N('Recette, Tests & CI/CD',
        "Valider la qualité du produit, puis automatiser la livraison.",
        [
          N('Tests',
            "Pyramide de tests : beaucoup de tests unitaires, moins d'intégration, quelques E2E sur les parcours critiques.",
            [L('Tests Unitaires (Jest, PyTest)'), L("Tests d'Intégration"), L('Tests End-to-End E2E (Cypress, Playwright)')]),
          N('Versionning',
            "Historique du code, branches et collaboration grâce à Git et à une forge logicielle.",
            [L('Git (GitHub, GitLab, Bitbucket)')]),
          N('Pipeline CI/CD',
            "Intégration continue : tests et build automatiques à chaque push. Déploiement continu : mise en ligne automatisée.",
            [L('Automatisation (GitHub Actions, GitLab CI)')]),
        ]),

      N('Mise en production',
        "Rendre le site visible, rapide et mesurable.",
        [
          N('SEO',
            "Optimiser la visibilité dans les moteurs de recherche et la qualité des partages sur les réseaux sociaux.",
            [L('Balises Open Graph et métadonnées'), L('Sitemap.xml et robots.txt')]),
          N('Web Performances',
            "Vitesse perçue et stabilité visuelle : impact direct sur l'expérience utilisateur et le référencement.",
            [L('Core Web Vitals (LCP, FID/INP, CLS)'), L('Minification et compression (WebP/AVIF)'), L("Mise en place d'un CDN")]),
          N('Analytics & Tracking',
            "Mesurer l'audience ; privilégier des outils respectueux de la vie privée (RGPD).",
            [L('Plausible, Matomo, Google Analytics')]),
        ]),

      N('Maintenance (MCO)',
        "Maintien en condition opérationnelle : le site doit rester disponible, sûr et à jour dans la durée.",
        [
          N('Monitoring',
            "Surveiller disponibilité, erreurs et métriques pour réagir avant que les utilisateurs ne s'en plaignent.",
            [L('Suivi uptime et erreurs (Sentry, Datadog, Prometheus)')]),
          N('Sauvegardes (Backups)',
            "Sauvegardes à chaud (service en marche) et à froid (service arrêté) ; pensez à tester régulièrement la restauration.",
            [L('Sauvegardes froides et chaudes de la BDD')]),
          N('Patchs de sécurité',
            "Mettre à jour dépendances et systèmes pour corriger les failles connues.",
            [L('Mises à jour des dépendances (NPM, Pip, Composer)')]),
        ]),
    ]
  );

  /* =====================================================
     2. INDEXATION & ÉTAT
     ===================================================== */
  const byId = new Map();
  (function index(node, id, parent, depth) {
    node.id = id;
    node.parent = parent;
    node.depth = depth;
    node.expanded = depth === 0;           // seule la racine est ouverte au départ
    byId.set(id, node);
    (node.children || []).forEach((c, i) => index(c, `${id}.${i + 1}`, node, depth + 1));
  })(DATA, '0', null, 0);

  const ROOT = DATA;
  const isLeaf = (n) => !n.children || n.children.length === 0;
  const leavesOf = (n) => (isLeaf(n) ? [n] : n.children.flatMap(leavesOf));
  const ALL_LEAVES = leavesOf(ROOT);
  const LEVEL2 = [...byId.values()].filter((n) => n.depth === 2);

  const STORAGE_KEY = 'webcrea-progress-v1';
  let done = new Set();
  try { done = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); } catch (e) { /* ignore */ }
  const save = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...done])); } catch (e) { /* ignore */ } };

  let selectedId = '0';
  let query = '';
  let zoom = 1;

  const progress = (n) => {
    const l = leavesOf(n);
    return l.filter((x) => done.has(x.id)).length / l.length;
  };
  const pct = (n) => Math.round(progress(n) * 100);

  /* =====================================================
     3. OUTILS DOM
     ===================================================== */
  const $ = (sel) => document.querySelector(sel);
  const h = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const nodesEl = $('#nodes');
  const svg = $('#links');
  const treeEl = $('#tree');
  const panelEl = $('#panel');
  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* =====================================================
     4. RENDU DE LA CARTE
     ===================================================== */
  function matches(n) {
    return query && norm(n.label).includes(query);
  }

  function buildBranch(n) {
    const branch = h('div', 'branch');
    const row = h('div', 'node-row');
    const leaf = isLeaf(n);

    const box = h('div', `node depth-${Math.min(n.depth, 3)}`);
    box.dataset.id = n.id;
    box.tabIndex = 0;
    box.setAttribute('role', 'button');
    if (n.id === selectedId) box.classList.add('selected');
    if (query) box.classList.add(matches(n) ? 'match' : 'dim');

    if (leaf) {
      const isDone = done.has(n.id);
      if (isDone) box.classList.add('done');
      const cb = h('button', 'check' + (isDone ? ' on' : ''), isDone ? '✓' : '');
      cb.title = 'Marquer comme maîtrisé';
      cb.setAttribute('aria-pressed', String(isDone));
      cb.addEventListener('click', (e) => { e.stopPropagation(); toggleDone(n.id); });
      box.append(cb);
    }

    box.append(h('span', 'label', n.label));

    if (!leaf && n.depth > 0) box.append(h('span', 'pct', pct(n) + '%'));

    box.addEventListener('click', () => select(n.id));
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(n.id); }
    });
    row.append(box);

    if (!leaf) {
      const t = h('button', 'toggle', n.expanded ? '<' : '>');
      t.title = n.expanded ? 'Réduire' : 'Développer';
      t.setAttribute('aria-expanded', String(n.expanded));
      t.addEventListener('click', (e) => { e.stopPropagation(); n.expanded = !n.expanded; render(); });
      row.append(t);
    }
    branch.append(row);

    if (!leaf && n.expanded) {
      const kids = h('div', 'children');
      n.children.forEach((c) => kids.append(buildBranch(c)));
      branch.append(kids);
    }
    return branch;
  }

  // Position d'un élément relative à #tree (indépendante du zoom : on utilise offsetLeft/Top)
  function pos(el) {
    let x = 0, y = 0;
    while (el && el !== treeEl) {
      x += el.offsetLeft;
      y += el.offsetTop;
      el = el.offsetParent;
    }
    return { x, y };
  }

  function drawLinks() {
    svg.setAttribute('width', treeEl.offsetWidth);
    svg.setAttribute('height', treeEl.offsetHeight);
    svg.innerHTML = '';

    nodesEl.querySelectorAll('.branch').forEach((branch) => {
      const kids = branch.querySelector(':scope > .children');
      if (!kids) return;

      const row = branch.querySelector(':scope > .node-row');
      const parentBox = row.querySelector('.node');
      const anchor = row.querySelector('.toggle') || parentBox;
      const depth = byId.get(parentBox.dataset.id).depth;

      const a = pos(anchor);
      const x1 = a.x + anchor.offsetWidth;
      const y1 = a.y + anchor.offsetHeight / 2;

      kids.querySelectorAll(':scope > .branch > .node-row > .node').forEach((child) => {
        const b = pos(child);
        const x2 = b.x;
        const y2 = b.y + child.offsetHeight / 2;
        const dx = (x2 - x1) * 0.5;

        const p = document.createElementNS(SVG_NS, 'path');
        p.setAttribute('d', `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`);
        p.setAttribute('class', `link d${Math.min(depth, 2)}`);
        svg.append(p);
      });
    });
  }

  function render() {
    nodesEl.innerHTML = '';
    nodesEl.append(buildBranch(ROOT));
    updateGlobal();
    renderPanel();
    requestAnimationFrame(drawLinks);
  }

  function updateGlobal() {
    const p = pct(ROOT);
    $('#globalBar').style.width = p + '%';
    $('#globalLabel').textContent = p + ' %';
  }

  /* =====================================================
     5. ACTIONS
     ===================================================== */
  function select(id) {
    selectedId = id;
    render();
  }

  function toggleDone(id) {
    done.has(id) ? done.delete(id) : done.add(id);
    save();
    render();
  }

  function setBranchDone(n, value) {
    leavesOf(n).forEach((l) => (value ? done.add(l.id) : done.delete(l.id)));
    save();
    render();
  }

  function setAllExpanded(value) {
    byId.forEach((n) => { if (!isLeaf(n)) n.expanded = value || n.depth === 0; });
    render();
  }

  function expandForSearch() {
    if (!query) return;
    byId.forEach((n) => {
      if (matches(n)) {
        let p = n.parent;
        while (p) { p.expanded = true; p = p.parent; }
      }
    });
  }

  /* =====================================================
     6. PANNEAU DE DÉTAIL
     ===================================================== */
  function renderPanel() {
    const n = byId.get(selectedId) || ROOT;
    panelEl.innerHTML = '';

    // Fil d'Ariane
    const crumbs = h('div', 'crumbs');
    const chain = [];
    for (let p = n; p; p = p.parent) chain.unshift(p);
    chain.forEach((c) => crumbs.append(h('span', '', c.label)));
    panelEl.append(crumbs);

    panelEl.append(h('h2', '', n.label));

    const leaf = isLeaf(n);

    if (leaf) {
      const ctx = h('div', 'context');
      const b = h('b', '', n.parent.label);
      ctx.append(b, document.createTextNode(' — ' + (n.parent.info || '')));
      panelEl.append(ctx);

      const isDone = done.has(n.id);
      const btn = h('button', 'btn ' + (isDone ? '' : 'primary'), isDone ? '✓ Maîtrisé (annuler)' : 'Marquer comme maîtrisé');
      btn.addEventListener('click', () => toggleDone(n.id));
      panelEl.append(btn);

      const siblings = n.parent.children.filter((s) => s !== n);
      if (siblings.length) {
        panelEl.append(h('div', 'list-title', 'Dans la même rubrique'));
        siblings.forEach((s) => panelEl.append(leafRow(s)));
      }
      return;
    }

    if (n.info) panelEl.append(h('p', 'info', n.info));

    // Progression de la branche
    const pp = h('div', 'panel-progress');
    const bar = h('div', 'bar');
    const fill = h('div');
    fill.style.width = pct(n) + '%';
    bar.append(fill);
    const lv = leavesOf(n);
    pp.append(bar, h('small', '', `${lv.filter((l) => done.has(l.id)).length}/${lv.length} notions`));
    panelEl.append(pp);

    panelEl.append(h('div', 'list-title', n.depth === 2 ? 'Notions à retenir' : 'Contenu de cette branche'));
    n.children.forEach((c) => panelEl.append(isLeaf(c) ? leafRow(c) : branchRow(c)));

    const actions = h('div', 'panel-actions');
    const all = h('button', 'btn primary', 'Tout marquer maîtrisé');
    all.addEventListener('click', () => setBranchDone(n, true));
    const none = h('button', 'btn', 'Remettre à zéro');
    none.addEventListener('click', () => setBranchDone(n, false));
    const tog = h('button', 'btn', n.expanded ? 'Réduire la branche' : 'Développer la branche');
    tog.addEventListener('click', () => { n.expanded = !n.expanded; render(); });
    actions.append(all, none, tog);
    panelEl.append(actions);
  }

  function leafRow(l) {
    const isDone = done.has(l.id);
    const row = h('div', 'row');
    const cb = h('button', 'check' + (isDone ? ' on' : ''), isDone ? '✓' : '');
    cb.addEventListener('click', () => toggleDone(l.id));
    const label = h('span', 'grow', l.label);
    label.style.cursor = 'pointer';
    label.addEventListener('click', () => select(l.id));
    row.append(cb, label);
    return row;
  }

  function branchRow(c) {
    const row = h('button', 'row');
    row.append(h('span', 'grow', c.label), h('span', 'tag', pct(c) + '%'));
    row.addEventListener('click', () => { c.expanded = true; select(c.id); });
    return row;
  }

  /* =====================================================
     7. QUIZ
     ===================================================== */
  const quiz = { score: 0, total: 0, answered: false };
  const quizEl = $('#quiz');

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  function nextQuestion() {
    quiz.answered = false;
    $('#quizNext').disabled = true;
    $('#quizFeedback').textContent = '';

    const leaf = ALL_LEAVES[Math.floor(Math.random() * ALL_LEAVES.length)];
    const correct = leaf.parent;
    const options = shuffle([correct, ...shuffle(LEVEL2.filter((m) => m !== correct)).slice(0, 3)]);

    const q = $('#quizQuestion');
    q.innerHTML = '';
    q.append(document.createTextNode('À quelle rubrique appartient la notion : '));
    q.append(h('b', '', `« ${leaf.label} »`), document.createTextNode(' ?'));

    const box = $('#quizOptions');
    box.innerHTML = '';
    options.forEach((opt) => {
      const b = h('button', 'opt', opt.label);
      b.addEventListener('click', () => answer(b, opt === correct, correct, leaf));
      b.dataset.correct = opt === correct ? '1' : '';
      box.append(b);
    });
  }

  function answer(btn, ok, correct, leaf) {
    if (quiz.answered) return;
    quiz.answered = true;
    quiz.total++;
    if (ok) quiz.score++;

    document.querySelectorAll('#quizOptions .opt').forEach((o) => {
      o.disabled = true;
      if (o.dataset.correct) o.classList.add('good');
    });
    if (!ok) btn.classList.add('bad');

    const step = correct.parent ? correct.parent.label : '';
    $('#quizFeedback').textContent =
      (ok ? '✅ Bonne réponse ! ' : '❌ Pas tout à fait. ') + `Étape : ${step} › ${correct.label}.`;
    $('#quizScore').textContent = `${quiz.score} / ${quiz.total}`;
    $('#quizNext').disabled = false;
  }

  function openQuiz() {
    quiz.score = 0; quiz.total = 0;
    $('#quizScore').textContent = '0 / 0';
    quizEl.classList.remove('hidden');
    nextQuestion();
  }
  const closeQuiz = () => quizEl.classList.add('hidden');

  /* =====================================================
     8. ÉVÉNEMENTS
     ===================================================== */
  $('#expandAll').addEventListener('click', () => setAllExpanded(true));
  $('#collapseAll').addEventListener('click', () => setAllExpanded(false));

  $('#search').addEventListener('input', (e) => {
    query = norm(e.target.value.trim());
    expandForSearch();
    render();
  });

  const setZoom = (z) => {
    zoom = Math.min(1.6, Math.max(0.55, z));
    treeEl.style.setProperty('--zoom', zoom);
    requestAnimationFrame(drawLinks);
  };
  $('#zoomIn').addEventListener('click', () => setZoom(zoom + 0.1));
  $('#zoomOut').addEventListener('click', () => setZoom(zoom - 0.1));

  $('#resetBtn').addEventListener('click', () => {
    if (confirm('Effacer toute votre progression ?')) {
      done.clear();
      save();
      render();
    }
  });

  $('#quizBtn').addEventListener('click', openQuiz);
  $('#quizClose').addEventListener('click', closeQuiz);
  $('#quizNext').addEventListener('click', nextQuestion);
  quizEl.addEventListener('click', (e) => { if (e.target === quizEl) closeQuiz(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeQuiz(); });

  window.addEventListener('resize', () => requestAnimationFrame(drawLinks));
  window.addEventListener('load', drawLinks);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLinks);

  /* =====================================================
     9. DÉMARRAGE
     ===================================================== */
  render();
})();