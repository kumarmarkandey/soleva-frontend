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
    name: "Aero Flux 01",
    category: "Running",
    price: 149,
    old: 179,
    tag: "New Release",
    colorName: "Champagne Gold / Slate",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    swatches: ["#e8e5df", "#c49a45", "#111113"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.9,
    reviews: 128,
    description: "Sculpted for maximum energy return and lightweight motion. Features engineered mesh and champagne gold metallic counter stabilization."
  },
  {
    id: 2,
    name: "Shadow Core Stealth",
    category: "Street",
    price: 169,
    old: 199,
    tag: "Best Seller",
    colorName: "Matte Obsidian / Platinum",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    swatches: ["#151517", "#dfbd75", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.8,
    reviews: 94,
    description: "Sleek low-profile street silhouette built with water-resistant matte leather and multi-density foam outsoles."
  },
  {
    id: 3,
    name: "Sovereign X Pro",
    category: "Running",
    price: 189,
    old: 219,
    tag: "Trending",
    colorName: "Onyx / Brushed Amber",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    swatches: ["#222226", "#c49a45", "#68686e"],
    sizes: [8, 9, 10, 11],
    rating: 4.9,
    reviews: 210,
    description: "Elite marathon-grade performance running sneaker equipped with carbon plate transition and adaptive cushioning."
  },
  {
    id: 4,
    name: "Mono Court Heritage",
    category: "Lifestyle",
    price: 129,
    old: 149,
    tag: "Classic",
    colorName: "Alabaster / Warm Copper",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    swatches: ["#f5f4ef", "#d9825b", "#333333"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 67,
    description: "Timeless court silhouette handcrafted from full-grain Italian leather with hand-stitched rubber cupsole."
  },
  {
    id: 5,
    name: "Obsidian 90 Limited",
    category: "Street",
    price: 199,
    old: 229,
    tag: "Limited Edition",
    colorName: "Midnight / Carbon Fiber",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    swatches: ["#1c1a24", "#c084fc", "#111113"],
    sizes: [8, 9, 10, 11, 12],
    rating: 5.0,
    reviews: 312,
    description: "Numbered limited edition drop. Carbon fiber shank plate with translucent grip pattern and gold foil heel branding."
  },
  {
    id: 6,
    name: "Cloud Step Ultra",
    category: "Lifestyle",
    price: 139,
    old: 159,
    tag: "New",
    colorName: "Pure White / Electric Blue",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    swatches: ["#e9f1f7", "#38bdf8", "#111113"],
    sizes: [7, 8, 9, 10],
    rating: 4.7,
    reviews: 53,
    description: "Ultra-breathable knit lifestyle sneaker designed for all-day comfort, effortless slip-on fit, and weightless stride."
  }
];

function Sneaker3D({progress=0, compact=false, imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"}) {
  const mount = useRef(null);

  useEffect(() => {
    if (!mount.current) return;
    let frame;
    let renderer, scene, camera, shoeGroup;
    const currentMount = mount.current;

    let targetRotX = -0.1;
    let targetRotY = -0.2;
    let currentRotX = -0.1;
    let currentRotY = -0.2;

    let isDragging = false;
    let startMousePos = { x: 0, y: 0 };
    let dragRotOffset = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      if (isDragging) {
        const deltaX = (e.clientX - startMousePos.x) * 0.008;
        const deltaY = (e.clientY - startMousePos.y) * 0.008;
        dragRotOffset.y += deltaX;
        dragRotOffset.x += deltaY;
        startMousePos = { x: e.clientX, y: e.clientY };
      } else {
        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;
        targetRotY = normX * 0.75;
        targetRotX = normY * 0.35 - 0.1;
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

    window.addEventListener("pointermove", handlePointerMove);
    currentMount.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0, 5.2);

      renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(currentMount.clientWidth || 500, currentMount.clientHeight || 500);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      currentMount.appendChild(renderer.domElement);
      currentMount.style.cursor = "grab";

      shoeGroup = new THREE.Group();

      // Texture real high-resolution sneaker photography onto 3D Canvas Mesh
      const textureLoader = new THREE.TextureLoader();
      textureLoader.crossOrigin = "anonymous";
      textureLoader.load(imageUrl, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        
        // 3D Curved Mesh for realistic depth volume
        const geometry = new THREE.PlaneGeometry(3.6, 2.7, 32, 32);
        const pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const u = (pos.getX(i) + 1.8) / 3.6;
          const v = (pos.getY(i) + 1.35) / 2.7;
          const depthZ = -Math.pow(u - 0.5, 2) * 0.45 - Math.pow(v - 0.5, 2) * 0.25;
          pos.setZ(i, depthZ);
        }
        geometry.computeVertexNormals();

        const material = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          roughness: 0.35,
          metalness: 0.15,
        });

        const shoeMesh = new THREE.Mesh(geometry, material);
        shoeGroup.add(shoeMesh);

        // 3D Soft Shadow Base Plane
        const shadowGeo = new THREE.PlaneGeometry(3.8, 1.2);
        const shadowMat = new THREE.MeshBasicMaterial({
          color: 0x000000,
          transparent: true,
          opacity: 0.22,
          side: THREE.DoubleSide
        });
        const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.rotation.x = Math.PI / 2;
        shadowMesh.position.set(0, -1.3, 0);
        shoeGroup.add(shadowMesh);
      });

      scene.add(shoeGroup);

      // Studio Lighting
      scene.add(new THREE.HemisphereLight(0xffffff, 0x1f1f24, 2.8));
      const key = new THREE.DirectionalLight(0xfff9ef, 3.5);
      key.position.set(3, 5, 5);
      scene.add(key);

      const fill = new THREE.PointLight(0xc49a45, 7, 12);
      fill.position.set(-3, 1, 3);
      scene.add(fill);

      const resize = () => {
        if (!currentMount) return;
        const w = currentMount.clientWidth || 500, h = currentMount.clientHeight || 500;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", resize);

      let time = 0;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        time += 0.012;

        const scrollAngle = progress * 0.0018;
        const idleRotY = Math.sin(time) * 0.06;
        const idleRotX = Math.cos(time * 0.7) * 0.04;

        const finalTargetY = targetRotY + dragRotOffset.y + idleRotY + scrollAngle;
        const finalTargetX = targetRotX + dragRotOffset.x + idleRotX;

        currentRotY += (finalTargetY - currentRotY) * 0.065;
        currentRotX += (finalTargetX - currentRotX) * 0.065;

        if (shoeGroup) {
          shoeGroup.rotation.y = currentRotY;
          shoeGroup.rotation.x = currentRotX;
        }

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        if (frame) cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", handlePointerMove);
        currentMount.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
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
  }, [progress, imageUrl]);

  return <div ref={mount} className={"shoe3d "+(compact?"compact":"")} aria-label="Interactive real 3D sneaker — move cursor or drag to rotate"></div>;
}

function ProductCard({p, onAdd, onWish, wished, onQuickView}) {
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

        <img src={p.image} alt={p.name} className="real-sneaker-img" loading="lazy" />

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

function App(){
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [quickProduct, setQuickProduct] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, {passive:true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3200);
  };

  const filtered = useMemo(() => {
    let arr = products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase()));
    if(sort === "price-low") arr.sort((a,b) => a.price - b.price);
    if(sort === "price-high") arr.sort((a,b) => b.price - a.price);
    if(sort === "rating") arr.sort((a,b) => b.rating - a.rating);
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
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s,i) => s + i.qty, 0);

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
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> SPRING / SUMMER 2026</div>
            <h1>MOVE<br /><em>DIFFERENT.</em></h1>
            <p>Engineered sneakers for people who don't stand still. Precision comfort, sculptural design and everyday energy.</p>
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
            <div className="scroll-sneaker" style={{ transform: `translate3d(${Math.min(scroll * .08, 70)}px, ${Math.min(scroll * .11, 95)}px, 0) rotate(${Math.min(scroll * .07, 30)}deg)` }}>
              <Sneaker3D progress={scroll} imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80" />
            </div>
            <div className="floating-label label-a"><Rotate3D size={17} /><span>360°<small>DRAG TO ROTATE</small></span></div>
            <div className="floating-label label-b"><Zap size={17} /><span>REAL SNEAKER<small>INTERACTIVE</small></span></div>
          </div>
        </section>

        <section className="marquee">
          <div>ENGINEERED FOR MOTION · DESIGNED FOR NOW · ENGINEERED FOR MOTION · DESIGNED FOR NOW · </div>
        </section>

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
              {["All", "Running", "Street", "Lifestyle"].map(c => (
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
              <Sneaker3D compact progress={scroll} imageUrl="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=80" />
            </div>
            <div className="spec-label top">RESPONSIVE<br />FOAM</div>
            <div className="spec-label bottom">LIGHTWEIGHT<br />MESH</div>
          </div>
        </section>

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
          <div><b>SHOP</b><a href="#shop">All sneakers</a><a href="#shop">Running</a><a href="#shop">Street</a></div>
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
              <img src={quickProduct.image} alt={quickProduct.name} />
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
                <div><ShieldCheck size={16} /> <span>100% Genuine Italian Leather & Engineered Mesh</span></div>
                <div><Zap size={16} /> <span>Tri-Density Reactive Foam Cushioning</span></div>
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
                      <img src={i.image} alt={i.name} className="cart-item-img" />
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
