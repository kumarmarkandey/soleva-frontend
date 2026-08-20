import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Search, ShoppingBag, Heart, Menu, X, ChevronDown,
  Star, Plus, Minus, Trash2, Sparkles, Zap, ShieldCheck, Truck,
  Instagram, Facebook, Twitter, Rotate3D, SlidersHorizontal, Eye, CheckCircle2
} from "lucide-react";
import * as THREE from "three";
import "./styles.css";

const products = [
  {
    id: 1,
    name: "Air Jordan 1 Cyber Cyan",
    category: "High-Top",
    price: 219,
    old: 249,
    tag: "Reference Edition",
    colorName: "Stealth Black / White / Neon Cyan Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x121214,
      swoosh: 0x00f0ff,
      emissive: 0x00d8ff,
      sole: 0xffffff,
      outsole: 0x00d8ff
    },
    swatches: ["#00f0ff", "#121214", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 5.0,
    reviews: 342,
    description: "High-top silhouette modeled directly from 3D blueprints. Full-grain black & white leather with pulsing Neon Cyan Swoosh and translucent icy blue outsole."
  },
  {
    id: 2,
    name: "Air Jordan 1 Crimson Flame",
    category: "High-Top",
    price: 219,
    old: 249,
    tag: "Best Seller",
    colorName: "Stealth Black / White / Crimson Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x121214,
      swoosh: 0xff2a55,
      emissive: 0xff0033,
      sole: 0xffffff,
      outsole: 0xff2a55
    },
    swatches: ["#ff2a55", "#121214", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 218,
    description: "Iconic high-top profile with glowing Crimson Red lateral swoosh, metallic silver lace lock, and high-rebound cushioning."
  },
  {
    id: 3,
    name: "Air Jordan 1 Voltage Gold",
    category: "High-Top",
    price: 229,
    old: 259,
    tag: "Trending",
    colorName: "Stealth Black / White / Gold Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x121214,
      swoosh: 0xffb700,
      emissive: 0xff8800,
      sole: 0xffffff,
      outsole: 0xffb700
    },
    swatches: ["#ffb700", "#121214", "#ffffff"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 184,
    description: "Luxury amber gold glow edition. Features high-top ankle collar, Wings badge, and translucent gold tread outsole."
  },
  {
    id: 4,
    name: "Air Jordan 1 Ultraviolet",
    category: "High-Top",
    price: 229,
    old: 259,
    tag: "Limited Edition",
    colorName: "Stealth Black / White / Cyber Violet",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x121214,
      swoosh: 0xa855f7,
      emissive: 0x9333ea,
      sole: 0xffffff,
      outsole: 0xa855f7
    },
    swatches: ["#a855f7", "#121214", "#ffffff"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 145,
    description: "Deep ultraviolet glowing swoosh with matte black overlays, white Italian leather panels, and icy violet sole."
  },
  {
    id: 5,
    name: "Air Jordan 1 Emerald Glow",
    category: "High-Top",
    price: 219,
    old: 249,
    tag: "New Drop",
    colorName: "Stealth Black / White / Emerald Green",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x121214,
      swoosh: 0x10b981,
      emissive: 0x059669,
      sole: 0xffffff,
      outsole: 0x10b981
    },
    swatches: ["#10b981", "#121214", "#ffffff"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 98,
    description: "Vibrant neon emerald green accents with black leather overlays, silver lace tags, and responsive court sole."
  },
  {
    id: 6,
    name: "Air Jordan 1 Pure Ice",
    category: "High-Top",
    price: 209,
    old: 239,
    tag: "Classic",
    colorName: "Pure White / Azure Ice Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0xf0f0f5,
      swoosh: 0x38bdf8,
      emissive: 0x0284c7,
      sole: 0xffffff,
      outsole: 0x38bdf8
    },
    swatches: ["#38bdf8", "#ffffff", "#e2e8f0"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 167,
    description: "Clean triple-white leather high-top silhouette highlighted by an electric icy blue swoosh and translucent blue outsole."
  }
];

function JordanHigh3D({
  colorConfig = products[0].colorConfig,
  compact = false,
  interactiveHover = false
}) {
  const mount = useRef(null);

  useEffect(() => {
    if (!mount.current) return;
    let frame;
    let renderer, scene, camera, shoeGroup;
    const currentMount = mount.current;

    let targetRotX = -0.15;
    let targetRotY = -0.25;
    let currentRotX = -0.15;
    let currentRotY = -0.25;

    let isDragging = false;
    let startMousePos = { x: 0, y: 0 };
    let dragRotOffset = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (isDragging) {
        const deltaX = (e.clientX - startMousePos.x) * 0.008;
        const deltaY = (e.clientY - startMousePos.y) * 0.008;
        dragRotOffset.y += deltaX;
        dragRotOffset.x += deltaY;
        startMousePos = { x: e.clientX, y: e.clientY };
      } else {
        targetRotY = normX * 0.85 - 0.25;
        targetRotX = normY * 0.4 - 0.15;
      }
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      startMousePos = { x: e.clientX, y: e.clientY };
      if (currentMount) currentMount.style.cursor = "grabbing";
    };

    const handlePointerUp = () => {
      isDragging = false;
      if (currentMount) currentMount.style.cursor = "grab";
    };

    const targetElement = interactiveHover ? currentMount : window;
    targetElement.addEventListener("pointermove", handlePointerMove);
    if (!compact) {
      currentMount.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointerup", handlePointerUp);
    }

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0.1, 0.3, compact ? 6.4 : 5.8);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(currentMount.clientWidth || 300, currentMount.clientHeight || 300);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      currentMount.appendChild(renderer.domElement);
      if (!compact) currentMount.style.cursor = "grab";

      shoeGroup = new THREE.Group();

      // Materials matching the Air Jordan High Cyan Glow spec sheet
      const whiteLeather = new THREE.MeshStandardMaterial({
        color: colorConfig.upper,
        roughness: 0.35,
        metalness: 0.05
      });
      const blackOverlay = new THREE.MeshStandardMaterial({
        color: colorConfig.overlay,
        roughness: 0.45,
        metalness: 0.08
      });
      const glowSwooshMat = new THREE.MeshStandardMaterial({
        color: colorConfig.swoosh,
        emissive: colorConfig.emissive,
        emissiveIntensity: 0.75,
        roughness: 0.2,
        metalness: 0.3
      });
      const whiteSoleMat = new THREE.MeshStandardMaterial({
        color: colorConfig.sole,
        roughness: 0.3
      });
      const icyOutsoleMat = new THREE.MeshStandardMaterial({
        color: colorConfig.outsole,
        emissive: colorConfig.emissive,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.82,
        roughness: 0.15,
        metalness: 0.1
      });
      const silverMetalMat = new THREE.MeshStandardMaterial({
        color: 0xe0e0e5,
        roughness: 0.15,
        metalness: 0.85
      });
      const laceMat = new THREE.MeshStandardMaterial({
        color: 0x121215,
        roughness: 0.7
      });

      // 1. High-Top Ankle Collar (Black Leather Overlay)
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.8, 32), blackOverlay);
      collar.position.set(-0.75, 0.85, 0);
      collar.rotation.z = 0.22;
      shoeGroup.add(collar);

      // 2. White Leather Upper Body
      const upper = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), whiteLeather);
      upper.scale.set(1.68, 0.54, 0.72);
      upper.position.set(0.12, 0.26, 0);
      shoeGroup.add(upper);

      // 3. White Toe Box
      const toe = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), whiteLeather);
      toe.scale.set(1.18, 0.44, 0.68);
      toe.position.set(1.15, 0.18, 0);
      shoeGroup.add(toe);

      // 4. Black Toe Overlay (Mudguard)
      const toeOverlay = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.12, 16, 32, Math.PI), blackOverlay);
      toeOverlay.rotation.y = Math.PI / 2;
      toeOverlay.position.set(1.22, 0.14, 0);
      shoeGroup.add(toeOverlay);

      // 5. Black Heel Counter
      const heel = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 20), blackOverlay);
      heel.scale.set(0.52, 0.64, 0.72);
      heel.position.set(-1.22, 0.36, 0);
      shoeGroup.add(heel);

      // 6. White Rubber Midsole
      const midSole = new THREE.Mesh(new THREE.BoxGeometry(3.55, 0.22, 1.34), whiteSoleMat);
      midSole.position.set(0.05, -0.22, 0);
      midSole.rotation.z = -0.02;
      shoeGroup.add(midSole);

      // 7. Translucent Icy Glowing Outsole
      const outSole = new THREE.Mesh(new THREE.BoxGeometry(3.58, 0.12, 1.36), icyOutsoleMat);
      outSole.position.set(0.05, -0.37, 0);
      outSole.rotation.z = -0.02;
      shoeGroup.add(outSole);

      // 8. Glowing Electric Cyan Swoosh (Lateral Side)
      const swoosh = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.09, 0.12), glowSwooshMat);
      swoosh.position.set(-0.25, 0.54, 0.70);
      swoosh.rotation.z = -0.36;
      shoeGroup.add(swoosh);

      // Swoosh Medial Side
      const swooshMedial = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.09, 0.12), glowSwooshMat);
      swooshMedial.position.set(-0.25, 0.54, -0.70);
      swooshMedial.rotation.z = -0.36;
      shoeGroup.add(swooshMedial);

      // 9. Black Lacing System (6 Lace Bars)
      for (let i = 0; i < 6; i++) {
        const lace = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.035, 0.06), laceMat);
        lace.position.set(-0.2 + i * 0.26, 0.58 + i * 0.06, 0.62);
        lace.rotation.z = -0.15;
        shoeGroup.add(lace);
      }

      // 10. Metallic Silver Lace Lock Tag
      const laceLock = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.14), silverMetalMat);
      laceLock.position.set(0.95, 0.38, 0.62);
      shoeGroup.add(laceLock);

      // 11. Ankle Wings Logo Badge
      const wingsBadge = new THREE.Mesh(
        new THREE.TorusGeometry(0.24, 0.03, 10, 32),
        glowSwooshMat
      );
      wingsBadge.rotation.y = Math.PI / 2;
      wingsBadge.position.set(-0.78, 0.95, 0.64);
      shoeGroup.add(wingsBadge);

      // 12. Soft Ground Glow Shadow Disc
      const shadowGeo = new THREE.PlaneGeometry(3.8, 1.4);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: colorConfig.swoosh,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = Math.PI / 2;
      shadowMesh.position.set(0, -0.46, 0);
      shoeGroup.add(shadowMesh);

      shoeGroup.rotation.x = -0.15;
      shoeGroup.rotation.y = -0.25;
      shoeGroup.rotation.z = 0.06;
      scene.add(shoeGroup);

      // Cyan Electric Glow Lighting setup
      scene.add(new THREE.HemisphereLight(0xffffff, 0x111115, 2.2));
      const key = new THREE.DirectionalLight(0xffffff, 3.8);
      key.position.set(3, 5, 5);
      scene.add(key);

      const cyanGlowLight = new THREE.PointLight(colorConfig.swoosh, 10, 15);
      cyanGlowLight.position.set(0, -0.2, 1.2);
      scene.add(cyanGlowLight);

      const rimLight = new THREE.PointLight(colorConfig.swoosh, 8, 12);
      rimLight.position.set(-3, 2, -2);
      scene.add(rimLight);

      const resize = () => {
        if (!currentMount) return;
        const w = currentMount.clientWidth || 300, h = currentMount.clientHeight || 300;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", resize);

      let time = Math.random() * 10;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        time += 0.014;

        // Pulsing Neon Glow Effect
        glowSwooshMat.emissiveIntensity = 0.6 + Math.sin(time * 3) * 0.25;
        cyanGlowLight.intensity = 8 + Math.sin(time * 3) * 3;

        // Cursor-Only tilt + Mouse Drag (NO page scroll angle!)
        const idleRotY = Math.sin(time * 0.8) * 0.04;
        const idleRotX = Math.cos(time * 0.6) * 0.03;

        const finalTargetY = targetRotY + dragRotOffset.y + idleRotY;
        const finalTargetX = targetRotX + dragRotOffset.x + idleRotX;

        currentRotY += (finalTargetY - currentRotY) * 0.07;
        currentRotX += (finalTargetX - currentRotX) * 0.07;

        shoeGroup.rotation.y = currentRotY;
        shoeGroup.rotation.x = currentRotX;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        if (frame) cancelAnimationFrame(frame);
        targetElement.removeEventListener("pointermove", handlePointerMove);
        if (!compact) {
          currentMount.removeEventListener("pointerdown", handlePointerDown);
          window.removeEventListener("pointerup", handlePointerUp);
        }
        window.removeEventListener("resize", resize);
        if (renderer) {
          renderer.dispose();
          if (currentMount && renderer.domElement && currentMount.contains(renderer.domElement)) {
            currentMount.removeChild(renderer.domElement);
          }
        }
      };
    } catch (e) {
      console.warn("WebGL initialization skipped:", e);
    }
  }, [colorConfig, compact, interactiveHover]);

  return <div ref={mount} className={"shoe3d " + (compact ? "compact" : "")} aria-label="High-Top Air Jordan 3D Sneaker Canvas"></div>;
}

function ProductCard({ p, onAdd, onWish, wished, onQuickView }) {
  const [selectedSize, setSelectedSize] = useState(p.sizes[1] || p.sizes[0]);

  return (
    <article className="product-card">
      <div className="product-art" onClick={() => onQuickView(p)}>
        <span className="tag">{p.tag}</span>
        <button
          className={"wish-btn " + (wished ? "active" : "")}
          onClick={(e) => { e.stopPropagation(); onWish(p.id); }}
          aria-label="Wishlist"
        >
          <Heart size={18} fill={wished ? "currentColor" : "none"} />
        </button>

        {/* Air Jordan High 3D Canvas floating directly on the page! */}
        <div className="card-3d-wrapper">
          <JordanHigh3D
            colorConfig={p.colorConfig}
            compact
            interactiveHover
          />
        </div>

        <div className="quick-view-overlay">
          <button className="quick-view-btn">
            <Eye size={15} /> Quick View
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-info-header">
          <div>
            <span className="muted">{p.category}</span>
            <h3>{p.name}</h3>
            <span className="color-name">{p.colorName}</span>
          </div>
          <div className="price">
            <b>${p.price}</b>
            <del>${p.old}</del>
          </div>
        </div>

        <div className="swatch-list">
          {p.swatches.map((color, idx) => (
            <div key={idx} className="swatch-dot" style={{ background: color }}></div>
          ))}
        </div>

        <div className="rating">
          <Star size={14} fill="currentColor" /> {p.rating}
          <span className="rating-count">({p.reviews} reviews)</span>
        </div>

        <div className="size-selector">
          {p.sizes.map((s) => (
            <button
              key={s}
              className={"size-pill " + (selectedSize === s ? "active" : "")}
              onClick={() => setSelectedSize(s)}
            >
              UK {s}
            </button>
          ))}
        </div>

        <button className="add-btn" onClick={() => onAdd(p, selectedSize)}>
          Add to bag <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3200);
  };

  const filtered = useMemo(() => {
    let arr = products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()));
    if (sort === "price-low") arr.sort((a, b) => a.price - b.price);
    if (sort === "price-high") arr.sort((a, b) => b.price - a.price);
    if (sort === "rating") arr.sort((a, b) => b.rating - a.rating);
    return arr;
  }, [category, query, sort]);

  const add = (p, size) => {
    const sizeToUse = size || p.sizes[0];
    setCart(c => {
      const x = c.find(i => i.id === p.id && i.selectedSize === sizeToUse);
      return x
        ? c.map(i => i.id === p.id && i.selectedSize === sizeToUse ? { ...i, qty: i.qty + 1 } : i)
        : [...c, { ...p, selectedSize: sizeToUse, qty: 1 }];
    });
    triggerToast(`Added ${p.name} (UK ${sizeToUse}) to bag!`);
  };

  const toggleWish = (id) => {
    const p = products.find(x => x.id === id);
    setWishlist(w => {
      const exists = w.includes(id);
      if (!exists && p) triggerToast(`Saved ${p.name} to wishlist!`);
      return exists ? w.filter(x => x !== id) : [...w, id];
    });
  };

  const change = (id, size, d) => setCart(c => c.map(i => (i.id === id && i.selectedSize === size) ? { ...i, qty: i.qty + d } : i).filter(i => i.qty > 0));
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="app">
      {toastMsg && (
        <div className="toast">
          <CheckCircle2 size={18} />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="announcement">
        FREE EXPRESS SHIPPING ON ORDERS OVER $100 <span>·</span> EASY 30-DAY RETURNS
      </div>

      <header className="nav">
        <button className="mobile-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
        <a className="logo" href="#home">SOLEVA<span>®</span></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenu(false)}>Home</a>
          <a href="#shop" onClick={() => setMenu(false)}>Shop</a>
          <a href="#story" onClick={() => setMenu(false)}>Our story</a>
          <a href="#journal" onClick={() => setMenu(false)}>Journal</a>
        </nav>
        <div className="nav-actions">
          <label className="search-box">
            <Search size={18} />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search sneakers" />
          </label>
          <button onClick={() => setCartOpen(true)} className="icon-btn bag" aria-label="Open cart">
            <ShoppingBag />
            <b>{count}</b>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> SPRING / SUMMER 2026</div>
            <h1>MOVE<br /><em>DIFFERENT.</em></h1>
            <p>Engineered high-top sneakers modeled directly from 3D blueprints. Precision comfort, glowing neon cyan accents, and everyday energy.</p>
            <div className="hero-buttons">
              <a href="#shop" className="primary">Explore collection <ArrowRight /></a>
              <a href="#story" className="text-link">Why Soleva <ArrowRight /></a>
            </div>
            <div className="hero-stats">
              <div><strong>01</strong><span>Signature<br />silhouette</span></div>
              <div><strong>3D</strong><span>Adaptive<br />cushioning</span></div>
              <div><strong>30</strong><span>Day free<br />returns</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>
            <div className="scroll-sneaker">
              <JordanHigh3D colorConfig={products[0].colorConfig} />
            </div>
            <div className="floating-label label-a"><Rotate3D size={17} /><span>360°<small>DRAG TO ROTATE</small></span></div>
            <div className="floating-label label-b"><Zap size={17} /><span>NEON GLOW<small>3D JORDAN</small></span></div>
          </div>
        </section>

        <section className="marquee">
          <div>AIR JORDAN 1 GLOW SHOWCASE · NEON CYAN EMBEDDED 3D · AIR JORDAN 1 GLOW SHOWCASE · </div>
        </section>

        {/* Shop Grid Section with Air Jordan 1 Glow 3D Shoes (NO CARDS!) */}
        <section id="shop" className="shop-section">
          <div className="section-head">
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2>Find your <em>pair.</em></h2>
            </div>
            <button className="filter-toggle" onClick={() => setShopOpen(!shopOpen)}>
              <SlidersHorizontal size={18} /> Filters
            </button>
          </div>

          <div className={"shop-controls " + (shopOpen ? "show" : "")}>
            <div className="chips">
              {["All", "High-Top", "Running", "Street", "Lifestyle"].map(c => (
                <button className={category === c ? "selected" : ""} onClick={() => setCategory(c)} key={c}>{c}</button>
              ))}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>

          <div className="product-grid">
            {filtered.map(p => (
              <ProductCard
                key={p.id}
                p={p}
                onAdd={add}
                onWish={toggleWish}
                wished={wishlist.includes(p.id)}
                onQuickView={(prod) => setQuickProduct(prod)}
              />
            ))}
          </div>
        </section>

        {/* Feature Section */}
        <section id="story" className="feature">
          <div className="feature-copy">
            <span className="eyebrow">THE SOLEVA SYSTEM</span>
            <h2>Comfort that <em>keeps up.</em></h2>
            <p>Every Soleva is built around a responsive three-layer platform: soft landing, stable stride, energetic lift. The result is a sneaker that feels ready before you are.</p>
            <div className="feature-points">
              <div><ShieldCheck /><span><b>All-day support</b>Contoured heel + locked-in fit</span></div>
              <div><Zap /><span><b>Energy return</b>Spring foam under every step</span></div>
              <div><Truck /><span><b>Fast, free shipping</b>Dispatch in 24 hours</span></div>
            </div>
          </div>
          <div className="feature-visual">
            <div className="spec-ring">S<span>3</span></div>
            <div className="feature-shoe">
              <JordanHigh3D compact colorConfig={products[1].colorConfig} />
            </div>
            <div className="spec-label top">RESPONSIVE<br />FOAM</div>
            <div className="spec-label bottom">LIGHTWEIGHT<br />MESH</div>
          </div>
        </section>

        {/* Journal Section */}
        <section id="journal" className="journal">
          <div className="section-head">
            <div><span className="eyebrow">FROM THE JOURNAL</span><h2>More than <em>shoes.</em></h2></div>
            <a className="text-link" href="#journal">Read all <ArrowRight /></a>
          </div>
          <div className="journal-grid">
            <article className="journal-card">
              <div className="journal-img-wrapper">
                <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80" alt="Sneaker design process" />
              </div>
              <div className="journal-body">
                <span>DESIGN</span>
                <h3>Why the future of sneakers is sculptural.</h3>
              </div>
            </article>
            <article className="journal-card">
              <div className="journal-img-wrapper">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80" alt="Running exercise" />
              </div>
              <div className="journal-body">
                <span>MOVE</span>
                <h3>The 5-minute reset for your everyday stride.</h3>
              </div>
            </article>
            <article className="journal-card">
              <div className="journal-img-wrapper">
                <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80" alt="Recycled materials" />
              </div>
              <div className="journal-body">
                <span>MATERIALS</span>
                <h3>Inside our recycled performance mesh.</h3>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div>
            <a className="logo" href="#home">SOLEVA<span>®</span></a>
            <p>Premium sneakers for people in motion.</p>
            <div className="socials"><Instagram /><Facebook /><Twitter /></div>
          </div>
          <div><b>SHOP</b><a href="#shop">All sneakers</a><a href="#shop">High-Top</a><a href="#shop">Street</a></div>
          <div><b>HELP</b><a href="#story">Shipping</a><a href="#story">Returns</a><a href="#story">Contact</a></div>
          <div>
            <b>STAY IN THE LOOP</b>
            <p>New drops, early access and stories.</p>
            <div className="subscribe"><input placeholder="Your email" /><button>→</button></div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 SOLEVA. Built for motion. <span>Privacy · Terms · Accessibility</span></div>
      </footer>

      {/* Quick View Modal */}
      {quickProduct && (
        <div className="modal-backdrop" onClick={() => setQuickProduct(null)}>
          <div className="quick-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setQuickProduct(null)}><X size={18} /></button>
            <div className="modal-art">
              <JordanHigh3D colorConfig={quickProduct.colorConfig} compact />
            </div>
            <div className="modal-details">
              <span className="tag">{quickProduct.tag}</span>
              <h2>{quickProduct.name}</h2>
              <div className="price" style={{ marginBottom: "16px" }}>
                <b>${quickProduct.price}</b>
                <del>${quickProduct.old}</del>
              </div>
              <p>{quickProduct.description}</p>
              <div className="specs-list">
                <div><ShieldCheck size={16} /> <span>100% Genuine Italian Leather & High-Top Collar</span></div>
                <div><Zap size={16} /> <span>Pulsing Neon Swoosh & Translucent Icy Outsole</span></div>
                <div><Truck size={16} /> <span>Free Express Shipping & 30-Day Returns</span></div>
              </div>
              <button
                className="primary"
                onClick={() => {
                  add(quickProduct);
                  setQuickProduct(null);
                }}
              >
                Add to bag (${quickProduct.price}) <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-head">
              <h2>Your bag <span>{count} items</span></h2>
              <button onClick={() => setCartOpen(false)}><X /></button>
            </div>
            {cart.length === 0 ? (
              <div className="empty">
                <ShoppingBag size={42} />
                <h3>Your bag is empty.</h3>
                <p>Add a pair and start moving.</p>
                <button className="primary" onClick={() => { setCartOpen(false); document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Shop sneakers
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((i, idx) => (
                    <div className="cart-item" key={idx}>
                      <div className="cart-swatch" style={{ background: i.swatches[0] }}>
                        <div style={{ background: i.swatches[1] }}></div>
                      </div>
                      <div className="cart-meta">
                        <b>{i.name}</b>
                        <span>UK {i.selectedSize} · ${i.price}</span>
                        <div className="qty">
                          <button onClick={() => change(i.id, i.selectedSize, -1)}><Minus size={14} /></button>
                          <span>{i.qty}</span>
                          <button onClick={() => change(i.id, i.selectedSize, 1)}><Plus size={14} /></button>
                        </div>
                      </div>
                      <button className="trash" onClick={() => setCart(c => c.filter(x => !(x.id === i.id && x.selectedSize === i.selectedSize)))}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="checkout">
                  <div><span>Subtotal</span><b>${total.toFixed(2)}</b></div>
                  <small>Taxes and shipping calculated at checkout.</small>
                  <button className="primary">Checkout <ArrowRight /></button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
