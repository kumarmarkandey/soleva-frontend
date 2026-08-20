import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Search, ShoppingBag, Heart, Menu, X, ChevronDown,
  Star, Plus, Minus, Trash2, Sparkles, Zap, ShieldCheck, Truck,
  Instagram, Facebook, Twitter, Rotate3D, SlidersHorizontal, Eye, CheckCircle2,
  Maximize2, RefreshCw, Layers
} from "lucide-react";
import * as THREE from "three";
import "./styles.css";

const colorways = [
  {
    id: "gold",
    name: "Champagne Gold",
    price: 189,
    oldPrice: 219,
    upperColor: 0xeeeade,
    soleColor: 0x121215,
    accentColor: 0xc49a45,
    hexUpper: "#eeeade",
    hexAccent: "#c49a45",
    description: "Signature Edition featuring full-grain ivory leather, champagne gold metallic counter stabilization, and carbon fiber shank plate."
  },
  {
    id: "obsidian",
    name: "Stealth Obsidian",
    price: 199,
    oldPrice: 229,
    upperColor: 0x16161a,
    soleColor: 0x0a0a0d,
    accentColor: 0xdfbd75,
    hexUpper: "#16161a",
    hexAccent: "#dfbd75",
    description: "Water-resistant matte black leather upper with stealth obsidian sole and brushed platinum eyelets."
  },
  {
    id: "platinum",
    name: "Pure Platinum",
    price: 179,
    oldPrice: 199,
    upperColor: 0xf5f4ef,
    soleColor: 0xe5e4dd,
    accentColor: 0x38bdf8,
    hexUpper: "#f5f4ef",
    hexAccent: "#38bdf8",
    description: "Ultra-clean alabaster finish with electric blue mid-sole highlight and lightweight breathable mesh."
  },
  {
    id: "amber",
    name: "Royal Amber",
    price: 189,
    oldPrice: 219,
    upperColor: 0x221f1d,
    soleColor: 0x141211,
    accentColor: 0xd9825b,
    hexUpper: "#221f1d",
    hexAccent: "#d9825b",
    description: "Deep espresso leather with warm copper accents and high-rebound responsive foam technology."
  },
  {
    id: "violet",
    name: "Cyber Violet",
    price: 199,
    oldPrice: 229,
    upperColor: 0x1c1a24,
    soleColor: 0x0f0e14,
    accentColor: 0xc084fc,
    hexUpper: "#1c1a24",
    hexAccent: "#c084fc",
    description: "Limited edition drop with deep violet carbon weave and iridescent counter highlights."
  }
];

function RealSneaker3D({ progress = 0, colorway = colorways[0], angle = "default", compact = false }) {
  const mount = useRef(null);
  const materialsRef = useRef({ upper: null, sole: null, accent: null });

  // Update 3D Materials when colorway changes
  useEffect(() => {
    if (materialsRef.current.upper) {
      materialsRef.current.upper.color.setHex(colorway.upperColor);
    }
    if (materialsRef.current.sole) {
      materialsRef.current.sole.color.setHex(colorway.soleColor);
    }
    if (materialsRef.current.accent) {
      materialsRef.current.accent.color.setHex(colorway.accentColor);
    }
  }, [colorway]);

  useEffect(() => {
    if (!mount.current) return;
    let frame;
    let renderer, scene, camera, shoeGroup;
    const currentMount = mount.current;

    let targetRotX = -0.18;
    let targetRotY = -0.28;
    let currentRotX = -0.18;
    let currentRotY = -0.28;

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
        targetRotX = normY * 0.35 - 0.18;
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
      camera.position.set(0.15, 0.45, 5.7);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(currentMount.clientWidth || 500, currentMount.clientHeight || 500);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      currentMount.appendChild(renderer.domElement);
      currentMount.style.cursor = "grab";

      shoeGroup = new THREE.Group();

      // Dynamic Materials
      const upperMat = new THREE.MeshStandardMaterial({
        color: colorway.upperColor,
        roughness: 0.4,
        metalness: 0.08
      });
      const soleMat = new THREE.MeshStandardMaterial({
        color: colorway.soleColor,
        roughness: 0.25
      });
      const accentMat = new THREE.MeshStandardMaterial({
        color: colorway.accentColor,
        roughness: 0.28,
        metalness: 0.45
      });
      const darkMat = new THREE.MeshStandardMaterial({ color: 0x1c1c20, roughness: 0.4 });
      const laceMat = new THREE.MeshStandardMaterial({ color: 0x27272c, roughness: 0.6 });

      materialsRef.current = { upper: upperMat, sole: soleMat, accent: accentMat };

      // 3D Shoe Sculpted Geometries
      const upper = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), upperMat);
      upper.scale.set(1.72, 0.52, 0.72);
      upper.position.set(0.15, 0.22, 0);
      shoeGroup.add(upper);

      const toe = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), upperMat);
      toe.scale.set(1.15, 0.46, 0.70);
      toe.position.set(1.18, 0.18, 0);
      shoeGroup.add(toe);

      const heel = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 20), darkMat);
      heel.scale.set(0.48, 0.58, 0.7);
      heel.position.set(-1.25, 0.24, 0);
      shoeGroup.add(heel);

      const sole = new THREE.Mesh(new THREE.BoxGeometry(3.55, 0.27, 1.34), soleMat);
      sole.position.set(0.05, -0.28, 0);
      sole.rotation.z = -0.025;
      shoeGroup.add(sole);

      const mid = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.16, 1.18), accentMat);
      mid.position.set(0.35, -0.12, 0);
      shoeGroup.add(mid);

      for (let i = 0; i < 5; i++) {
        const lace = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.035, 0.06), laceMat);
        lace.position.set(0.05 + i * 0.28, 0.66, 0.62);
        lace.rotation.z = -0.1;
        shoeGroup.add(lace);
      }

      const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.08, 0.11), accentMat);
      stripe.position.set(-0.38, 0.58, 0.69);
      stripe.rotation.z = -0.34;
      shoeGroup.add(stripe);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.74, 0.035, 10, 64, Math.PI * 1.25),
        accentMat
      );
      ring.rotation.y = Math.PI / 2;
      ring.rotation.z = 0.25;
      ring.position.set(-0.72, 0.34, 0.57);
      shoeGroup.add(ring);

      shoeGroup.rotation.x = -0.18;
      shoeGroup.rotation.y = -0.28;
      shoeGroup.rotation.z = 0.08;
      scene.add(shoeGroup);

      // Studio Lighting setup
      scene.add(new THREE.HemisphereLight(0xffffff, 0x1f1f24, 2.5));
      const key = new THREE.DirectionalLight(0xfff9ef, 3.5);
      key.position.set(3, 5, 5);
      scene.add(key);

      const fill = new THREE.PointLight(colorway.accentColor, 8, 12);
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

        let angleBaseY = -0.28;
        let angleBaseX = -0.18;

        if (angle === "front") { angleBaseY = 0; angleBaseX = 0; }
        if (angle === "side") { angleBaseY = -Math.PI / 2; angleBaseX = 0; }
        if (angle === "heel") { angleBaseY = Math.PI; angleBaseX = 0; }
        if (angle === "top") { angleBaseY = 0; angleBaseX = -Math.PI / 3; }

        const scrollAngle = progress * 0.0018;
        const idleRotY = Math.sin(time) * 0.06;
        const idleRotX = Math.cos(time * 0.7) * 0.04;

        const finalTargetY = angleBaseY + targetRotY + dragRotOffset.y + idleRotY + scrollAngle;
        const finalTargetX = angleBaseX + targetRotX + dragRotOffset.x + idleRotX;

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
  }, [progress, angle]);

  return <div ref={mount} className={"shoe3d " + (compact ? "compact" : "")} aria-label="Interactive 3D sneaker canvas"></div>;
}

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  // 3D Customizer State
  const [selectedColorway, setSelectedColorway] = useState(colorways[0]);
  const [selectedSize, setSelectedSize] = useState(9);
  const [selectedAngle, setSelectedAngle] = useState("default");
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3200);
  };

  const addToCart = () => {
    setCart(c => {
      const x = c.find(i => i.id === selectedColorway.id && i.selectedSize === selectedSize);
      return x
        ? c.map(i => i.id === selectedColorway.id && i.selectedSize === selectedSize ? { ...i, qty: i.qty + 1 } : i)
        : [...c, { ...selectedColorway, selectedSize, qty: 1 }];
    });
    triggerToast(`Added Soleva 3D (${selectedColorway.name} · UK ${selectedSize}) to bag!`);
  };

  const changeQty = (id, size, d) => setCart(c => c.map(i => (i.id === id && i.selectedSize === size) ? { ...i, qty: i.qty + d } : i).filter(i => i.qty > 0));
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
          <a href="#showcase" onClick={() => setMenu(false)}>3D Studio</a>
          <a href="#story" onClick={() => setMenu(false)}>Our story</a>
          <a href="#journal" onClick={() => setMenu(false)}>Journal</a>
        </nav>
        <div className="nav-actions">
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
            <div className="eyebrow"><Sparkles size={15} /> REAL 3D FOOTWEAR SHOWCASE</div>
            <h1>MOVE<br /><em>DIFFERENT.</em></h1>
            <p>Engineered sneakers for people who don't stand still. Precision comfort, sculptural 3D design and everyday energy.</p>
            <div className="hero-buttons">
              <a href="#showcase" className="primary">Launch 3D Customizer <ArrowRight /></a>
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
              <RealSneaker3D progress={scroll} colorway={selectedColorway} angle={selectedAngle} />
            </div>
            <div className="floating-label label-a"><Rotate3D size={17} /><span>360°<small>DRAG TO ROTATE</small></span></div>
            <div className="floating-label label-b"><Zap size={17} /><span>REAL 3D<small>CANVAS</small></span></div>
          </div>
        </section>

        <section className="marquee">
          <div>ENGINEERED FOR MOTION · REAL 3D FOOTWEAR · ENGINEERED FOR MOTION · REAL 3D FOOTWEAR · </div>
        </section>

        {/* 3D Showcase & Customizer Studio */}
        <section id="showcase" className="showcase-section">
          <div className="showcase-container">
            {/* 3D Stage Card */}
            <div className="stage-card">
              <div className="stage-top-bar">
                <span className="stage-badge">3D INTERACTIVE STUDIO</span>
                <div className="angle-controls">
                  <button className={"angle-btn " + (selectedAngle === "default" ? "active" : "")} onClick={() => setSelectedAngle("default")}>Preset</button>
                  <button className={"angle-btn " + (selectedAngle === "front" ? "active" : "")} onClick={() => setSelectedAngle("front")}>Front</button>
                  <button className={"angle-btn " + (selectedAngle === "side" ? "active" : "")} onClick={() => setSelectedAngle("side")}>Side</button>
                  <button className={"angle-btn " + (selectedAngle === "heel" ? "active" : "")} onClick={() => setSelectedAngle("heel")}>Heel</button>
                  <button className={"angle-btn " + (selectedAngle === "top" ? "active" : "")} onClick={() => setSelectedAngle("top")}>Top</button>
                </div>
              </div>

              <div className="stage-3d-wrapper">
                <RealSneaker3D progress={scroll} colorway={selectedColorway} angle={selectedAngle} />
              </div>

              <div className="stage-bottom-bar">
                <div className="drag-hint"><Rotate3D size={15} /> Move cursor or drag 360° to inspect</div>
                <div>100% REAL-TIME 3D SHADER</div>
              </div>
            </div>

            {/* Customizer Right Panel */}
            <div className="customizer-panel">
              <div className="customizer-header">
                <span className="eyebrow"><Sparkles size={14} /> SOLEVA 3D SILHOUETTE</span>
                <h2>{selectedColorway.name}</h2>
                <div className="customizer-price">
                  <b>${selectedColorway.price}</b>
                  <del>${selectedColorway.oldPrice}</del>
                </div>
              </div>

              <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                {selectedColorway.description}
              </p>

              {/* Colorway Selection */}
              <div className="option-group">
                <span className="option-title">Select Colorway ({colorways.length} Available)</span>
                <div className="colorway-grid">
                  {colorways.map(cw => (
                    <button
                      key={cw.id}
                      className={"colorway-btn " + (selectedColorway.id === cw.id ? "active" : "")}
                      onClick={() => setSelectedColorway(cw)}
                    >
                      <div className="colorway-swatch" style={{ background: cw.hexAccent }}></div>
                      <span>{cw.name.split(" ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="option-group">
                <span className="option-title">Select Size (UK / US)</span>
                <div className="sizes-grid">
                  {[7, 8, 9, 10, 11, 12].map(s => (
                    <button
                      key={s}
                      className={"size-btn " + (selectedSize === s ? "active" : "")}
                      onClick={() => setSelectedSize(s)}
                    >
                      UK {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs Accordion */}
              <div className="feature-accordion">
                <div className="accordion-item"><ShieldCheck /> <span>100% Full-Grain Leather & Breathable Mesh</span></div>
                <div className="accordion-item"><Zap /> <span>Tri-Density Responsive Foam Platform</span></div>
                <div className="accordion-item"><Truck /> <span>Fast Dispatch in 24 Hours · Free Returns</span></div>
              </div>

              {/* Action Buttons */}
              <div className="customizer-actions">
                <button className="primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }} onClick={addToCart}>
                  Add to bag (${selectedColorway.price}) <ArrowRight size={18} />
                </button>
              </div>
            </div>
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
              <RealSneaker3D compact progress={scroll} colorway={selectedColorway} angle={selectedAngle} />
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
          <div><b>SHOP</b><a href="#showcase">3D Customizer</a><a href="#showcase">Colorways</a><a href="#story">Our Story</a></div>
          <div><b>HELP</b><a href="#story">Shipping</a><a href="#story">Returns</a><a href="#story">Contact</a></div>
          <div>
            <b>STAY IN THE LOOP</b>
            <p>New drops, early access and stories.</p>
            <div className="subscribe"><input placeholder="Your email" /><button>→</button></div>
          </div>
        </div>
        <div className="footer-bottom">© 2026 SOLEVA. Built for motion. <span>Privacy · Terms · Accessibility</span></div>
      </footer>

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
                <p>Customize a pair and start moving.</p>
                <button className="primary" onClick={() => { setCartOpen(false); document.querySelector("#showcase")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Launch 3D Studio
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((i, idx) => (
                    <div className="cart-item" key={idx}>
                      <div className="cart-swatch" style={{ background: i.hexUpper }}>
                        <div style={{ background: i.hexAccent }}></div>
                      </div>
                      <div className="cart-meta">
                        <b>{i.name}</b>
                        <span>UK {i.selectedSize} · ${i.price}</span>
                        <div className="qty">
                          <button onClick={() => changeQty(i.id, i.selectedSize, -1)}><Minus size={14} /></button>
                          <span>{i.qty}</span>
                          <button onClick={() => changeQty(i.id, i.selectedSize, 1)}><Plus size={14} /></button>
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
