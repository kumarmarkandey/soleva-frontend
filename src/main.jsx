import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Search, ShoppingBag, Heart, Menu, X, ChevronDown,
  Star, Plus, Minus, Trash2, Sparkles, Zap, ShieldCheck, Truck,
  Instagram, Facebook, Twitter, Rotate3D, SlidersHorizontal, Eye, CheckCircle2,
  CreditCard, Check, PackageCheck, Sliders, Palette
} from "lucide-react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
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
      outsole: 0x00d8ff,
      laces: 0x00f0ff
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
      outsole: 0xff2a55,
      laces: 0xff2a55
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
      outsole: 0xffb700,
      laces: 0xffb700
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
      outsole: 0xa855f7,
      laces: 0xa855f7
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
      outsole: 0x10b981,
      laces: 0x10b981
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
      outsole: 0x38bdf8,
      laces: 0x38bdf8
    },
    swatches: ["#38bdf8", "#ffffff", "#e2e8f0"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 167,
    description: "Clean triple-white leather high-top silhouette highlighted by an electric icy blue swoosh and translucent blue outsole."
  }
];

let gltfCache = null;
let gltfLoadingPromise = null;

function loadShoeGLTF() {
  if (gltfCache) return Promise.resolve(gltfCache);
  if (gltfLoadingPromise) return gltfLoadingPromise;

  const loader = new GLTFLoader();
  gltfLoadingPromise = new Promise((resolve, reject) => {
    loader.load(
      "./models/shoe.glb",
      (gltf) => {
        gltfCache = gltf;
        resolve(gltf);
      },
      undefined,
      (err) => reject(err)
    );
  });
  return gltfLoadingPromise;
}

function parseThreeColor(val) {
  if (!val && val !== 0) return new THREE.Color(0xffffff);
  if (typeof val === "string") return new THREE.Color(val);
  if (typeof val === "number") return new THREE.Color(val);
  return new THREE.Color(0xffffff);
}

function JordanHigh3D({
  colorConfig = products[0].colorConfig,
  compact = false,
  interactiveHover = false
}) {
  const mount = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!mount.current) return;
    let isMounted = true;
    let frame;
    let renderer, scene, camera, shoeGroup, glowLight, shadowMesh;
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
      camera.position.set(0.1, 0.2, compact ? 5.6 : 5.0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(currentMount.clientWidth || 300, currentMount.clientHeight || 300);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      currentMount.appendChild(renderer.domElement);
      if (!compact) currentMount.style.cursor = "grab";

      shoeGroup = new THREE.Group();
      scene.add(shoeGroup);

      // Studio Lighting
      scene.add(new THREE.AmbientLight(0xffffff, 1.4));
      const key = new THREE.DirectionalLight(0xffffff, 3.2);
      key.position.set(4, 6, 5);
      scene.add(key);

      const fill = new THREE.DirectionalLight(0xffffff, 1.2);
      fill.position.set(-4, 3, -3);
      scene.add(fill);

      const glowColor = parseThreeColor(colorConfig.swoosh);
      glowLight = new THREE.PointLight(glowColor, 7, 12);
      glowLight.position.set(0, -0.4, 1.0);
      scene.add(glowLight);

      // Soft Ground Shadow Disc
      const shadowGeo = new THREE.PlaneGeometry(3.6, 1.5);
      const shadowMat = new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide
      });
      shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = Math.PI / 2;
      shadowMesh.position.set(0, -1.05, 0);
      shoeGroup.add(shadowMesh);

      // Async GLTF Loading
      loadShoeGLTF()
        .then((gltf) => {
          if (!isMounted) return;
          const clonedScene = gltf.scene.clone(true);

          const swooshC = parseThreeColor(colorConfig.swoosh);
          const emissiveC = parseThreeColor(colorConfig.emissive || colorConfig.swoosh);
          const upperC = parseThreeColor(colorConfig.upper);
          const overlayC = parseThreeColor(colorConfig.overlay);
          const soleC = parseThreeColor(colorConfig.sole);
          const lacesC = parseThreeColor(colorConfig.laces || colorConfig.swoosh);

          // Customize materials with colorConfig
          clonedScene.traverse((child) => {
            if (child.isMesh) {
              if (Array.isArray(child.material)) {
                child.material = child.material.map(m => m.clone());
              } else if (child.material) {
                child.material = child.material.clone();
              }

              const mats = Array.isArray(child.material) ? child.material : [child.material];
              mats.forEach((mat) => {
                const matName = (mat.name || child.name || "").toLowerCase();
                if (matName.includes("swoosh") || matName.includes("accent") || matName.includes("logo") || matName.includes("glow")) {
                  mat.color = swooshC;
                  if ("emissive" in mat) {
                    mat.emissive = emissiveC;
                    mat.emissiveIntensity = 0.8;
                  }
                } else if (matName.includes("upper")) {
                  mat.color = upperC;
                } else if (matName.includes("overlay")) {
                  mat.color = overlayC;
                } else if (matName.includes("sole")) {
                  mat.color = soleC;
                } else if (matName.includes("lace")) {
                  mat.color = lacesC;
                } else {
                  mat.color = swooshC;
                  if ("emissive" in mat) {
                    mat.emissive = emissiveC;
                    mat.emissiveIntensity = 0.7;
                  }
                }
              });
            }
          });

          // Compute Bounding Box to center & scale real shoe
          const box = new THREE.Box3().setFromObject(clonedScene);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          clonedScene.position.set(-center.x, -center.y, -center.z);

          const modelContainer = new THREE.Group();
          modelContainer.add(clonedScene);

          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          const scale = (compact ? 2.5 : 2.9) / maxDim;
          modelContainer.scale.set(scale, scale, scale);

          shoeGroup.add(modelContainer);
          setLoaded(true);
        })
        .catch((e) => {
          console.warn("Error loading 3D shoe model:", e);
        });

      shoeGroup.rotation.x = -0.15;
      shoeGroup.rotation.y = -0.25;
      shoeGroup.rotation.z = 0.06;

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

        if (glowLight) {
          glowLight.intensity = 6 + Math.sin(time * 3) * 2.5;
        }

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
        isMounted = false;
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

  return (
    <div
      ref={mount}
      className={"shoe3d " + (compact ? "compact" : "") + (!loaded ? " loading" : "")}
      aria-label="Real 3D Sneaker Canvas"
    ></div>
  );
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

/* Wishlist Drawer Component */
function WishlistDrawer({ wishlist, products, onClose, onMoveToCart, onRemoveWish, onMoveAllToCart }) {
  const wishProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="wishlist-drawer" onClick={e => e.stopPropagation()}>
        <div className="drawer-head">
          <h2><Heart size={20} fill="currentColor" style={{ color: "#ff2a55" }} /> Saved Sneakers <span>{wishProducts.length} items</span></h2>
          <button onClick={onClose} aria-label="Close wishlist"><X /></button>
        </div>

        {wishProducts.length === 0 ? (
          <div className="empty">
            <Heart size={44} style={{ color: "var(--muted)", opacity: 0.5 }} />
            <h3>Your wishlist is empty.</h3>
            <p>Save your favorite 3D sneakers to review or buy later.</p>
            <button className="primary" onClick={onClose}>Explore Collection</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {wishProducts.map(p => (
                <div className="cart-item" key={p.id}>
                  <div className="wishlist-card-3d">
                    <JordanHigh3D colorConfig={p.colorConfig} compact />
                  </div>
                  <div className="cart-meta">
                    <b>{p.name}</b>
                    <span>{p.category} · ${p.price}</span>
                    <button className="text-btn" onClick={() => onMoveToCart(p)}>
                      Move to bag <ArrowRight size={14} />
                    </button>
                  </div>
                  <button className="trash" onClick={() => onRemoveWish(p.id)} aria-label="Remove item">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="checkout">
              <button className="primary" onClick={onMoveAllToCart}>
                Move all items to bag ({wishProducts.length}) <ShoppingBag size={16} />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

/* Interactive 3D Studio Customizer Modal Component */
function Studio3DCustomizer({ onClose, onAddCustomSneaker }) {
  const [activeTab, setActiveTab] = useState("swoosh");
  const [customColors, setCustomColors] = useState({
    swoosh: "#00f0ff",
    emissive: "#00d8ff",
    upper: "#ffffff",
    overlay: "#121214",
    sole: "#ffffff",
    outsole: "#00d8ff",
    laces: "#00f0ff"
  });
  const [selectedSize, setSelectedSize] = useState(9);

  const presets = [
    { name: "Cyberpunk Cyan", colors: { swoosh: "#00f0ff", emissive: "#00d8ff", upper: "#ffffff", overlay: "#121214", sole: "#ffffff", outsole: "#00d8ff", laces: "#00f0ff" } },
    { name: "Crimson Blaze", colors: { swoosh: "#ff2a55", emissive: "#ff0033", upper: "#ffffff", overlay: "#121214", sole: "#ffffff", outsole: "#ff2a55", laces: "#ff2a55" } },
    { name: "Voltage Gold", colors: { swoosh: "#ffb700", emissive: "#ff8800", upper: "#ffffff", overlay: "#121214", sole: "#ffffff", outsole: "#ffb700", laces: "#ffb700" } },
    { name: "Ultraviolet", colors: { swoosh: "#a855f7", emissive: "#9333ea", upper: "#ffffff", overlay: "#121214", sole: "#ffffff", outsole: "#a855f7", laces: "#a855f7" } },
    { name: "Emerald Glow", colors: { swoosh: "#10b981", emissive: "#059669", upper: "#ffffff", overlay: "#121214", sole: "#ffffff", outsole: "#10b981", laces: "#10b981" } },
    { name: "Stealth Black", colors: { swoosh: "#ffffff", emissive: "#aaaaaa", upper: "#1a1a1e", overlay: "#0e0e11", sole: "#1a1a1e", outsole: "#2a2a30", laces: "#ffffff" } },
    { name: "Pure White", colors: { swoosh: "#38bdf8", emissive: "#0284c7", upper: "#ffffff", overlay: "#f0f0f5", sole: "#ffffff", outsole: "#38bdf8", laces: "#38bdf8" } }
  ];

  const colorSwatches = [
    "#00f0ff", "#ff2a55", "#ffb700", "#a855f7", "#10b981", "#38bdf8",
    "#ffffff", "#121214", "#ff4500", "#e11d48", "#8b5cf6", "#f59e0b"
  ];

  const updatePartColor = (part, color) => {
    setCustomColors(prev => {
      const updated = { ...prev, [part]: color };
      if (part === "swoosh") updated.emissive = color;
      return updated;
    });
  };

  const handleSave = () => {
    const customProduct = {
      id: "custom-" + Date.now(),
      name: "Air Jordan 1 Custom 3D Studio",
      category: "Custom 3D Edition",
      price: 239,
      old: 279,
      tag: "Custom 3D Build",
      colorName: "Personalized Custom Palette",
      colorConfig: customColors,
      swatches: [customColors.swoosh, customColors.overlay, customColors.upper],
      sizes: [7, 8, 9, 10, 11, 12],
      rating: 5.0,
      reviews: 1,
      description: "Bespoke Air Jordan 1 crafted live inside the SOLEVA 3D Interactive Studio."
    };
    onAddCustomSneaker(customProduct, selectedSize);
    onClose();
  };

  return (
    <div className="studio-modal-backdrop" onClick={onClose}>
      <div className="studio-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close studio"><X size={20} /></button>
        
        {/* Left 3D Viewport */}
        <div className="studio-viewport">
          <div className="studio-header-badge">
            <Sparkles size={14} /> 3D LIVE CUSTOMIZER
          </div>
          <div className="studio-canvas">
            <JordanHigh3D colorConfig={customColors} interactiveHover />
          </div>
          <div className="studio-drag-hint">
            <Rotate3D size={16} /> Drag sneaker to rotate 360°
          </div>
        </div>

        {/* Right Customization Controls Panel */}
        <div className="studio-controls">
          <div className="studio-title">
            <h2>Design Your <em>Jordan 1.</em></h2>
            <p>Customize individual materials, swoosh glow, overlays, and soles in real-time 3D.</p>
          </div>

          {/* Preset Palettes */}
          <div className="preset-section">
            <span className="control-label">PRESET PALETTES</span>
            <div className="preset-chips">
              {presets.map(p => (
                <button
                  key={p.name}
                  className="preset-chip"
                  onClick={() => setCustomColors(p.colors)}
                >
                  <span className="preset-dot" style={{ background: p.colors.swoosh }}></span>
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Part Selection Tabs */}
          <div className="part-tabs">
            {[
              { id: "swoosh", label: "Swoosh & Glow" },
              { id: "upper", label: "Upper Base" },
              { id: "overlay", label: "Overlay Leather" },
              { id: "sole", label: "Sole" },
              { id: "laces", label: "Laces" }
            ].map(t => (
              <button
                key={t.id}
                className={"part-tab " + (activeTab === t.id ? "active" : "")}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Color Picker & Swatches for Selected Part */}
          <div className="color-picker-box">
            <div className="picker-header">
              <span>ACTIVE PART: <b>{activeTab.toUpperCase()}</b></span>
              <div className="hex-input-group">
                <input
                  type="color"
                  value={customColors[activeTab] || "#00f0ff"}
                  onChange={e => updatePartColor(activeTab, e.target.value)}
                  className="native-color-picker"
                />
                <input
                  type="text"
                  value={customColors[activeTab] || "#00f0ff"}
                  onChange={e => updatePartColor(activeTab, e.target.value)}
                  className="hex-text-input"
                />
              </div>
            </div>

            <div className="swatch-grid">
              {colorSwatches.map(hex => (
                <button
                  key={hex}
                  className={"swatch-btn " + (customColors[activeTab] === hex ? "selected" : "")}
                  style={{ background: hex }}
                  onClick={() => updatePartColor(activeTab, hex)}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="studio-size-picker">
            <span className="control-label">SELECT YOUR UK SIZE</span>
            <div className="size-selector">
              {[7, 8, 9, 10, 11, 12].map(s => (
                <button
                  key={s}
                  className={"size-pill " + (selectedSize === s ? "active" : "")}
                  onClick={() => setSelectedSize(s)}
                >
                  UK {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add Custom Sneaker Button */}
          <button className="primary studio-add-btn" onClick={handleSave}>
            Add Custom Pair to Bag ($239) <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Multi-Step Checkout Modal Component */
function CheckoutModal({ cart, total, onClose, onOrderComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "United States"
  });
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvc: "" });
  const [errors, setErrors] = useState({});
  const [orderSummary, setOrderSummary] = useState(null);

  const deliveryCost = deliveryOption === "standard" ? 0 : deliveryOption === "express" ? 15 : 25;
  const grandTotal = total + deliveryCost;

  const validateStep1 = () => {
    let errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name required";
    if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Valid email required";
    if (!formData.address.trim()) errs.address = "Street address required";
    if (!formData.city.trim()) errs.city = "City required";
    if (!formData.zip.trim()) errs.zip = "ZIP/Postal code required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    if (paymentMethod === "applepay") return true;
    let errs = {};
    if (!cardData.number.trim() || cardData.number.replace(/\s/g, "").length < 12) errs.number = "Valid card number required";
    if (!cardData.expiry.trim()) errs.expiry = "MM/YY required";
    if (!cardData.cvc.trim() || cardData.cvc.length < 3) errs.cvc = "CVC required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (validateStep3()) {
        const simulatedOrder = {
          id: "SLV-" + Math.floor(100000 + Math.random() * 900000),
          date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          items: [...cart],
          total: grandTotal,
          delivery: deliveryOption,
          address: formData
        };
        setOrderSummary(simulatedOrder);
        setStep(4);
      }
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="checkout-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close checkout"><X size={18} /></button>

        {/* Stepper Progress Bar */}
        {step < 4 && (
          <div className="checkout-stepper">
            <div className={"step-node " + (step >= 1 ? "active" : "")}>
              <span className="step-num">1</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className="step-line"></div>
            <div className={"step-node " + (step >= 2 ? "active" : "")}>
              <span className="step-num">2</span>
              <span className="step-label">Delivery</span>
            </div>
            <div className="step-line"></div>
            <div className={"step-node " + (step >= 3 ? "active" : "")}>
              <span className="step-num">3</span>
              <span className="step-label">Payment</span>
            </div>
          </div>
        )}

        {/* STEP 1: Shipping Address */}
        {step === 1 && (
          <div className="checkout-body">
            <h2>Shipping <em>Address</em></h2>
            <div className="form-grid">
              <div className="form-group full">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <span className="field-err">{errors.fullName}</span>}
              </div>
              <div className="form-group full">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="field-err">{errors.email}</span>}
              </div>
              <div className="form-group full">
                <label>Street Address</label>
                <input
                  type="text"
                  placeholder="123 Motion Way, Suite 400"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                />
                {errors.address && <span className="field-err">{errors.address}</span>}
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  placeholder="New York"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                />
                {errors.city && <span className="field-err">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label>ZIP / Postal Code</label>
                <input
                  type="text"
                  placeholder="10001"
                  value={formData.zip}
                  onChange={e => setFormData({ ...formData, zip: e.target.value })}
                />
                {errors.zip && <span className="field-err">{errors.zip}</span>}
              </div>
            </div>

            <div className="checkout-footer">
              <span className="total-display">Total: <b>${grandTotal.toFixed(2)}</b></span>
              <button className="primary" onClick={handleNext}>
                Continue to Delivery <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Delivery Speed */}
        {step === 2 && (
          <div className="checkout-body">
            <h2>Select <em>Delivery Method</em></h2>
            <div className="options-stack">
              <label className={"option-card " + (deliveryOption === "standard" ? "selected" : "")}>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === "standard"}
                  onChange={() => setDeliveryOption("standard")}
                />
                <div className="option-info">
                  <div className="option-head">
                    <b>Standard Express Shipping</b>
                    <span className="price-tag">FREE</span>
                  </div>
                  <span className="muted">Delivered in 3–5 business days</span>
                </div>
              </label>

              <label className={"option-card " + (deliveryOption === "express" ? "selected" : "")}>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === "express"}
                  onChange={() => setDeliveryOption("express")}
                />
                <div className="option-info">
                  <div className="option-head">
                    <b>Soleva Priority Air</b>
                    <span className="price-tag">+$15.00</span>
                  </div>
                  <span className="muted">Delivered in 2 business days</span>
                </div>
              </label>

              <label className={"option-card " + (deliveryOption === "overnight" ? "selected" : "")}>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === "overnight"}
                  onChange={() => setDeliveryOption("overnight")}
                />
                <div className="option-info">
                  <div className="option-head">
                    <b>Overnight Rush Courier</b>
                    <span className="price-tag">+$25.00</span>
                  </div>
                  <span className="muted">Next business morning delivery</span>
                </div>
              </label>
            </div>

            <div className="checkout-footer">
              <button className="text-btn" onClick={() => setStep(1)}>Back</button>
              <button className="primary" onClick={handleNext}>
                Continue to Payment <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Payment Mock */}
        {step === 3 && (
          <div className="checkout-body">
            <h2>Payment <em>Information</em></h2>
            <div className="payment-toggle">
              <button
                className={"toggle-btn " + (paymentMethod === "card" ? "active" : "")}
                onClick={() => setPaymentMethod("card")}
              >
                <CreditCard size={16} /> Credit / Debit Card
              </button>
              <button
                className={"toggle-btn " + (paymentMethod === "applepay" ? "active" : "")}
                onClick={() => setPaymentMethod("applepay")}
              >
                 Apple Pay / One-Touch
              </button>
            </div>

            {paymentMethod === "card" ? (
              <div className="form-grid">
                <div className="form-group full">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="4532 •••• •••• 8942"
                    value={cardData.number}
                    onChange={e => setCardData({ ...cardData, number: e.target.value })}
                  />
                  {errors.number && <span className="field-err">{errors.number}</span>}
                </div>
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    value={cardData.expiry}
                    onChange={e => setCardData({ ...cardData, expiry: e.target.value })}
                  />
                  {errors.expiry && <span className="field-err">{errors.expiry}</span>}
                </div>
                <div className="form-group">
                  <label>Security Code (CVC)</label>
                  <input
                    type="password"
                    placeholder="•••"
                    maxLength={4}
                    value={cardData.cvc}
                    onChange={e => setCardData({ ...cardData, cvc: e.target.value })}
                  />
                  {errors.cvc && <span className="field-err">{errors.cvc}</span>}
                </div>
              </div>
            ) : (
              <div className="apple-pay-box">
                <p>Click below to authorize simulated Apple Pay touch checkout.</p>
                <div className="apple-pay-preview"> Pay ${grandTotal.toFixed(2)}</div>
              </div>
            )}

            <div className="checkout-footer">
              <button className="text-btn" onClick={() => setStep(2)}>Back</button>
              <button className="primary" onClick={handleNext}>
                Pay ${grandTotal.toFixed(2)} <Check size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Order Confirmation Summary */}
        {step === 4 && orderSummary && (
          <div className="checkout-body success-body">
            <div className="success-icon-badge">
              <PackageCheck size={38} />
            </div>
            <h2>Order <em>Confirmed!</em></h2>
            <p className="order-id-tag">Order Reference: <b>{orderSummary.id}</b></p>
            <p className="success-msg">Thank you for your order, {orderSummary.address.fullName}! A confirmation receipt has been sent to {orderSummary.address.email}.</p>

            <div className="summary-card">
              <div className="summary-row">
                <span>Shipping Address</span>
                <b>{orderSummary.address.address}, {orderSummary.address.city}</b>
              </div>
              <div className="summary-row">
                <span>Estimated Arrival</span>
                <b>{deliveryOption === "overnight" ? "Tomorrow by 10 AM" : deliveryOption === "express" ? "Within 2 Business Days" : "In 3-5 Business Days"}</b>
              </div>
              <div className="summary-row">
                <span>Total Paid</span>
                <b className="total-highlight">${orderSummary.total.toFixed(2)}</b>
              </div>
            </div>

            <button
              className="primary full-btn"
              onClick={() => {
                onOrderComplete();
                onClose();
              }}
            >
              Back to Soleva Shop
            </button>
          </div>
        )}
      </div>
    </div>
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
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
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

  const moveWishToCart = (p) => {
    add(p, p.sizes[0]);
    setWishlist(w => w.filter(id => id !== p.id));
  };

  const moveAllWishToCart = () => {
    products.filter(p => wishlist.includes(p.id)).forEach(p => {
      add(p, p.sizes[0]);
    });
    setWishlist([]);
    setWishlistOpen(false);
    setCartOpen(true);
  };

  const handleOrderComplete = () => {
    setCart([]);
    triggerToast("Order placed successfully! Thank you.");
  };

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
          <button className="nav-btn-link" onClick={() => { setCustomizerOpen(true); setMenu(false); }}>
            <Sparkles size={14} /> 3D Studio
          </button>
          <a href="#story" onClick={() => setMenu(false)}>Our story</a>
          <a href="#journal" onClick={() => setMenu(false)}>Journal</a>
        </nav>
        <div className="nav-actions">
          <label className="search-box">
            <Search size={18} />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search sneakers" />
          </label>
          <button onClick={() => setWishlistOpen(true)} className="icon-btn wish-nav-btn" aria-label="Open wishlist">
            <Heart size={20} />
            {wishlist.length > 0 && <b>{wishlist.length}</b>}
          </button>
          <button onClick={() => setCartOpen(true)} className="icon-btn bag" aria-label="Open cart">
            <ShoppingBag size={20} />
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
              <button className="secondary-studio-btn" onClick={() => setCustomizerOpen(true)}>
                <Palette size={16} /> Open 3D Studio
              </button>
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

        {/* Shop Grid Section */}
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
                  <button
                    className="primary"
                    onClick={() => {
                      setCartOpen(false);
                      setCheckoutOpen(true);
                    }}
                  >
                    Checkout <ArrowRight />
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Wishlist Drawer */}
      {wishlistOpen && (
        <WishlistDrawer
          wishlist={wishlist}
          products={products}
          onClose={() => setWishlistOpen(false)}
          onMoveToCart={moveWishToCart}
          onRemoveWish={toggleWish}
          onMoveAllToCart={moveAllWishToCart}
        />
      )}

      {/* 3D Interactive Studio Customizer Modal */}
      {customizerOpen && (
        <Studio3DCustomizer
          onClose={() => setCustomizerOpen(false)}
          onAddCustomSneaker={(customProd, size) => {
            add(customProd, size);
            setCartOpen(true);
          }}
        />
      )}

      {/* Multi-Step Checkout Modal */}
      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          total={total}
          onClose={() => setCheckoutOpen(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
