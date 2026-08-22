import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Search, ShoppingBag, Heart, Menu, X, ChevronDown,
  Star, Plus, Minus, Trash2, Sparkles, Zap, ShieldCheck, Truck,
  Instagram, Facebook, Twitter, Rotate3D, SlidersHorizontal, Eye, CheckCircle2,
  CreditCard, Check, PackageCheck, Sliders, Palette, User, LogOut, Lock, Mail, MapPin, Calendar, Clock
} from "lucide-react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import "./styles.css";

export function formatINR(val) {
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

const products = [
  {
    id: 1,
    name: "Campus Oxyfit Cyber Glow",
    category: "High-Top Cyber",
    modelType: "high-top",
    price: 13999,
    old: 16999,
    tag: "India Edition",
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
    reviews: 412,
    description: "Campus signature high-top silhouette with full-grain leather, pulsing Neon Cyan side branding, and icy translucent blue outsole."
  },
  {
    id: 2,
    name: "Red Tape Urban Glide X",
    category: "High-Top Street",
    modelType: "low-top",
    price: 14499,
    old: 17999,
    tag: "Best Seller",
    colorName: "Matte Carbon / White / Crimson Red Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x18181c,
      swoosh: 0xff2a55,
      emissive: 0xff0033,
      sole: 0xffffff,
      outsole: 0xff2a55,
      laces: 0xff2a55
    },
    swatches: ["#ff2a55", "#18181c", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 328,
    description: "Red Tape low-cut urban street runner featuring a sleek low ankle profile, glowing Crimson lateral stripe, and lightweight flexible sole."
  },
  {
    id: 3,
    name: "HRX Surge Nitro Tech",
    category: "Performance High-Top",
    modelType: "chunky-runner",
    price: 15999,
    old: 18999,
    tag: "HRX Fitness",
    colorName: "Midnight Navy / White / Voltage Gold Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x0f172a,
      swoosh: 0xffb700,
      emissive: 0xff8800,
      sole: 0xffffff,
      outsole: 0xffb700,
      laces: 0xffb700
    },
    swatches: ["#ffb700", "#0f172a", "#ffffff"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 265,
    description: "Hrithik Roshan's HRX training shoe with an exaggerated chunky dual-density Nitro foam midsole, curved rocker toe, and Amber Gold glow."
  },
  {
    id: 4,
    name: "Bata Power Apex Volt",
    category: "Court Athletic",
    modelType: "retro-court",
    price: 12999,
    old: 15999,
    tag: "Power Series",
    colorName: "Obsidian Black / White / Emerald Green Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0x111827,
      swoosh: 0x10b981,
      emissive: 0x059669,
      sole: 0xffffff,
      outsole: 0x10b981,
      laces: 0x10b981
    },
    swatches: ["#10b981", "#111827", "#ffffff"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 198,
    description: "Bata Power court athletic sneaker with flat rubber outsole, protective toe cap bumper overlay, and vibrant Emerald Green glow."
  },
  {
    id: 5,
    name: "Woodland Apex Trail Tracker",
    category: "Rugged High-Top",
    modelType: "rugged-boot",
    price: 16499,
    old: 19999,
    tag: "Outdoor Tough",
    colorName: "Espresso Brown / Off-White / Tactical Amber Glow",
    colorConfig: {
      upper: 0xf5f5f0,
      overlay: 0x271a15,
      swoosh: 0xf59e0b,
      emissive: 0xd97706,
      sole: 0xffffff,
      outsole: 0xf59e0b,
      laces: 0xf59e0b
    },
    swatches: ["#f59e0b", "#271a15", "#f5f5f0"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 176,
    description: "Woodland rugged outdoor high-top trail boot featuring extended ankle collar height, heavy-duty lugged tread blocks, and espresso leather."
  },
  {
    id: 6,
    name: "Neeman's Re-Velocity Eco High",
    category: "Sustainable Lifestyle",
    modelType: "eco-knit",
    price: 11999,
    old: 14999,
    tag: "Eco-Friendly",
    colorName: "Pure White / Cyber Violet Glow",
    colorConfig: {
      upper: 0xffffff,
      overlay: 0xf1f5f9,
      swoosh: 0xa855f7,
      emissive: 0x9333ea,
      sole: 0xffffff,
      outsole: 0xa855f7,
      laces: 0xa855f7
    },
    swatches: ["#a855f7", "#ffffff", "#f1f5f9"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 215,
    description: "Neeman's eco-knit slip-on sneaker featuring a seamless sock-like tapered collar, rounded soft cushion heel cup, and Cyber Violet glow."
  }
];

const journalArticles = [
  {
    id: 1,
    category: "DESIGN",
    title: "Why the future of sneakers is sculptural.",
    date: "Aug 20, 2026",
    img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
    content: "Modern sneaker design is moving away from flat patterns toward dynamic 3D sculpting. By utilizing parametric 3D CAD modeling and lightweight polymer soles, high-top silhouettes achieve unprecedented ergonomic lock-in and striking aesthetic presence."
  },
  {
    id: 2,
    category: "MOVE",
    title: "The 5-minute reset for your everyday stride.",
    date: "Aug 15, 2026",
    img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    content: "Foot health dictates posture and performance. Incorporating active arch flexes, heel grounding, and targeted foam support reduces impact stress during long urban commutes and high-intensity workouts."
  },
  {
    id: 3,
    category: "MATERIALS",
    title: "Inside our recycled performance mesh.",
    date: "Aug 10, 2026",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80",
    content: "Sustainability doesn't mean compromising velocity. Our 100% recycled polymer uppers deliver superior breathability, dynamic tensile stretch, and 40% reduced carbon footprint compared to traditional synthetics."
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
  modelType = colorConfig.modelType || "high-top",
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

    // Start with SIDE PROFILE VIEW facing the user on page load
    let targetRotX = -0.05;
    let targetRotY = Math.PI / 2; // 90° Side Profile View
    let currentRotX = -0.05;
    let currentRotY = Math.PI / 2;

    let isDragging = false;
    let startMousePos = { x: 0, y: 0 };
    let dragRotOffset = { x: 0, y: 0 };

    const getClientPos = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const pos = getClientPos(e);
      const rect = currentMount.getBoundingClientRect();
      const normX = ((pos.x - rect.left) / rect.width - 0.5) * 2;
      const normY = ((pos.y - rect.top) / rect.height - 0.5) * 2;

      if (isDragging) {
        const deltaX = (pos.x - startMousePos.x) * 0.008;
        const deltaY = (pos.y - startMousePos.y) * 0.008;
        dragRotOffset.y += deltaX;
        dragRotOffset.x += deltaY;
        startMousePos = pos;
      } else {
        targetRotY = normX * 0.85 + Math.PI / 2;
        targetRotX = normY * 0.4 - 0.05;
      }
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      startMousePos = getClientPos(e);
      if (currentMount) currentMount.style.cursor = "grabbing";
    };

    const handlePointerUp = () => {
      isDragging = false;
      if (currentMount) currentMount.style.cursor = "grab";
    };

    const targetElement = interactiveHover ? currentMount : window;
    targetElement.addEventListener("pointermove", handlePointerMove, { passive: true });
    targetElement.addEventListener("touchmove", handlePointerMove, { passive: true });

    if (!compact) {
      currentMount.addEventListener("pointerdown", handlePointerDown);
      currentMount.addEventListener("touchstart", handlePointerDown, { passive: true });
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("touchend", handlePointerUp);
    }

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0.1, compact ? 5.6 : 4.8);

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

      // Async GLTF Loading + Dynamic Model Silhouette Transformations
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

          // Customize materials with colorConfig & apply distinct geometry deformations per modelType
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

              // Apply distinct 3D Geometry deformations for different shoe models
              const meshName = (child.name || "").toLowerCase();
              if (modelType === "low-top") {
                if (meshName.includes("collar") || meshName.includes("upper") || meshName.includes("ankle")) {
                  child.scale.y = 0.65;
                  child.position.y -= 0.1;
                }
              } else if (modelType === "rugged-boot") {
                if (meshName.includes("collar") || meshName.includes("ankle")) {
                  child.scale.y = 1.35;
                  child.position.y += 0.12;
                }
              } else if (modelType === "eco-knit") {
                if (meshName.includes("collar") || meshName.includes("lace")) {
                  child.scale.set(0.88, 0.72, 0.88);
                }
              }
            }
          });

          // Attach procedural 3D accent meshes to create distinct shoe silhouettes
          const accentGroup = new THREE.Group();

          if (modelType === "chunky-runner") {
            // Sculpted Chunky Dual-Density Midsole Cushion Stack
            const chunkySoleGeo = new THREE.BoxGeometry(2.4, 0.42, 1.0);
            const chunkySoleMat = new THREE.MeshStandardMaterial({
              color: soleC,
              roughness: 0.3,
              metalness: 0.1
            });
            const chunkySole = new THREE.Mesh(chunkySoleGeo, chunkySoleMat);
            chunkySole.position.set(0, -0.32, 0);
            accentGroup.add(chunkySole);

            // Curved Rocker Toe Spring
            clonedScene.rotation.z = -0.08;
            clonedScene.position.y += 0.1;
          } else if (modelType === "rugged-boot") {
            // Rugged Offroad Tread Block Outsole
            const treadGeo = new THREE.BoxGeometry(2.5, 0.18, 1.1);
            const treadMat = new THREE.MeshStandardMaterial({
              color: 0x1a1a1c,
              roughness: 0.9
            });
            const tread = new THREE.Mesh(treadGeo, treadMat);
            tread.position.set(0, -0.42, 0);
            accentGroup.add(tread);
          } else if (modelType === "retro-court") {
            // Flat Retro Court Toe Bumper Cap
            const capGeo = new THREE.CylinderGeometry(0.5, 0.52, 0.35, 16);
            const capMat = new THREE.MeshStandardMaterial({
              color: overlayC,
              roughness: 0.4
            });
            const cap = new THREE.Mesh(capGeo, capMat);
            cap.rotation.z = Math.PI / 2;
            cap.position.set(0.9, -0.22, 0);
            accentGroup.add(cap);
          } else if (modelType === "eco-knit") {
            // Smooth Rounded Cushion Heel Cup Pod
            const heelPodGeo = new THREE.SphereGeometry(0.38, 16, 16);
            const heelPodMat = new THREE.MeshStandardMaterial({
              color: swooshC,
              roughness: 0.2
            });
            const heelPod = new THREE.Mesh(heelPodGeo, heelPodMat);
            heelPod.position.set(-0.85, -0.15, 0);
            accentGroup.add(heelPod);
          }

          // Compute Bounding Box to center & scale real shoe
          const box = new THREE.Box3().setFromObject(clonedScene);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          clonedScene.position.set(-center.x, -center.y, -center.z);

          const modelContainer = new THREE.Group();
          modelContainer.add(clonedScene);
          modelContainer.add(accentGroup);

          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          const scale = (compact ? 2.5 : 2.9) / maxDim;
          modelContainer.scale.set(scale, scale, scale);

          shoeGroup.add(modelContainer);
          setLoaded(true);
        })
        .catch((e) => {
          console.warn("Error loading 3D shoe model:", e);
        });

      shoeGroup.rotation.x = -0.05;
      shoeGroup.rotation.y = Math.PI / 2;
      shoeGroup.rotation.z = 0;

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
        targetElement.removeEventListener("touchmove", handlePointerMove);
        if (!compact) {
          currentMount.removeEventListener("pointerdown", handlePointerDown);
          currentMount.removeEventListener("touchstart", handlePointerDown);
          window.removeEventListener("pointerup", handlePointerUp);
          window.removeEventListener("touchend", handlePointerUp);
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
  }, [colorConfig, modelType, compact, interactiveHover]);

  return (
    <div
      ref={mount}
      className={"shoe3d " + (compact ? "compact" : "") + (!loaded ? " loading" : "")}
      aria-label="Real 3D Sneaker Canvas"
      style={{ touchAction: "none" }}
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
            modelType={p.modelType}
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
            <b>{formatINR(p.price)}</b>
            <del>{formatINR(p.old)}</del>
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

/* User Authentication & Profile Modal Component */
function AuthProfileModal({ user, onLogin, onSignup, onLogout, onClose, orderHistory = [] }) {
  const [authTab, setAuthTab] = useState("login");
  const [profileTab, setProfileTab] = useState("orders");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  const [authErr, setAuthErr] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPass) {
      setAuthErr("Please fill in email and password.");
      return;
    }
    onLogin({
      name: loginEmail.split("@")[0].toUpperCase() || "Rahul Sharma",
      email: loginEmail,
      memberTier: "Soleva VIP Member",
      address: "Flat 402, Skyline Residency, MG Road, Mumbai 400001"
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPass) {
      setAuthErr("All fields are required.");
      return;
    }
    onSignup({
      name: signupName,
      email: signupEmail,
      memberTier: "Soleva Insider",
      address: "Select default address in profile"
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal"><X size={18} /></button>

        {user ? (
          /* LOGGED IN USER PROFILE DASHBOARD */
          <div className="profile-dashboard">
            <div className="profile-header-card">
              <div className="avatar-circle">{user.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <h2>{user.name}</h2>
                <span className="user-email"><Mail size={13} /> {user.email}</span>
                <span className="member-badge"><Sparkles size={12} /> {user.memberTier}</span>
              </div>
              <button className="logout-btn" onClick={onLogout} title="Sign Out">
                <LogOut size={16} /> Logout
              </button>
            </div>

            {/* Dashboard Sub-Tabs */}
            <div className="profile-subtabs">
              <button
                className={"subtab-btn " + (profileTab === "orders" ? "active" : "")}
                onClick={() => setProfileTab("orders")}
              >
                <PackageCheck size={16} /> My Orders ({orderHistory.length})
              </button>
              <button
                className={"subtab-btn " + (profileTab === "address" ? "active" : "")}
                onClick={() => setProfileTab("address")}
              >
                <MapPin size={16} /> Saved Address
              </button>
            </div>

            {profileTab === "orders" ? (
              <div className="orders-container">
                {orderHistory.length === 0 ? (
                  <div className="empty-orders">
                    <ShoppingBag size={36} />
                    <h4>No past orders yet.</h4>
                    <p>Your purchased sneakers will appear here with live tracking.</p>
                  </div>
                ) : (
                  <div className="order-cards-list">
                    {orderHistory.map(ord => (
                      <div className="order-card-row" key={ord.id}>
                        <div className="order-head-info">
                          <div>
                            <b>Order {ord.id}</b>
                            <span className="order-date"><Calendar size={12} /> {ord.date}</span>
                          </div>
                          <span className="status-badge delivered"><CheckCircle2 size={13} /> Delivered</span>
                        </div>
                        <div className="order-items-preview">
                          {ord.items.map((it, idx) => (
                            <div className="order-item-mini" key={idx}>
                              <div className="mini-3d-box">
                                <JordanHigh3D colorConfig={it.colorConfig} modelType={it.modelType} compact />
                              </div>
                              <div className="mini-meta">
                                <b>{it.name}</b>
                                <span>UK {it.selectedSize} × {it.qty}</span>
                              </div>
                              <b>{formatINR(it.price * it.qty)}</b>
                            </div>
                          ))}
                        </div>
                        <div className="order-total-bar">
                          <span>Total Paid:</span>
                          <b>{formatINR(ord.total)}</b>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="address-container">
                <h4>Primary Shipping Address</h4>
                <div className="address-box">
                  <MapPin size={18} />
                  <div>
                    <b>{user.name}</b>
                    <p>{user.address}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* AUTH LOGIN / SIGNUP TABS */
          <div className="auth-form-container">
            <div className="auth-tab-bar">
              <button
                className={"auth-tab " + (authTab === "login" ? "active" : "")}
                onClick={() => { setAuthTab("login"); setAuthErr(""); }}
              >
                Sign In
              </button>
              <button
                className={"auth-tab " + (authTab === "signup" ? "active" : "")}
                onClick={() => { setAuthTab("signup"); setAuthErr(""); }}
              >
                Create Account
              </button>
            </div>

            {authErr && <div className="auth-err-banner">{authErr}</div>}

            {authTab === "login" ? (
              <form onSubmit={handleLoginSubmit} className="auth-form">
                <h2>Welcome <em>Back</em></h2>
                <p>Sign in to track orders, manage wishlist, and launch 3D Studio.</p>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={loginPass}
                    onChange={e => setLoginPass(e.target.value)}
                  />
                </div>

                <button type="submit" className="primary full-btn" style={{ marginTop: "12px" }}>
                  Sign In <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} className="auth-form">
                <h2>Join <em>Soleva</em></h2>
                <p>Create an account to get early drop access and save 3D custom builds.</p>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    value={signupName}
                    onChange={e => setSignupName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul@example.com"
                    value={signupEmail}
                    onChange={e => setSignupEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Create Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={signupPass}
                    onChange={e => setSignupPass(e.target.value)}
                  />
                </div>

                <button type="submit" className="primary full-btn" style={{ marginTop: "12px" }}>
                  Create Account <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* Journal Article Modal Component */
function JournalModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="journal-article-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={18} /></button>
        <div className="article-hero-img">
          <img src={article.img} alt={article.title} />
          <span className="article-cat-tag">{article.category}</span>
        </div>
        <div className="article-body-content">
          <span className="article-date"><Calendar size={13} /> {article.date}</span>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      </div>
    </div>
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
                  <div className="cart-item-3d-thumb">
                    <JordanHigh3D colorConfig={p.colorConfig} modelType={p.modelType} compact />
                  </div>
                  <div className="cart-meta">
                    <b>{p.name}</b>
                    <span>{p.category} · {formatINR(p.price)}</span>
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
    { name: "Crimson Blaze", colors: { swoosh: "#ff2a55", emissive: "#ff0033", upper: "#ffffff", overlay: "#18181c", sole: "#ffffff", outsole: "#ff2a55", laces: "#ff2a55" } },
    { name: "Voltage Gold", colors: { swoosh: "#ffb700", emissive: "#ff8800", upper: "#ffffff", overlay: "#0f172a", sole: "#ffffff", outsole: "#ffb700", laces: "#ffb700" } },
    { name: "Ultraviolet", colors: { swoosh: "#a855f7", emissive: "#9333ea", upper: "#ffffff", overlay: "#121214", sole: "#ffffff", outsole: "#a855f7", laces: "#a855f7" } },
    { name: "Emerald Glow", colors: { swoosh: "#10b981", emissive: "#059669", upper: "#ffffff", overlay: "#111827", sole: "#ffffff", outsole: "#10b981", laces: "#10b981" } },
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
      name: "Custom 3D Studio Sneaker",
      category: "Bespoke 3D Edition",
      modelType: "high-top",
      price: 17999,
      old: 20999,
      tag: "Custom 3D Build",
      colorName: "Personalized Custom Palette",
      colorConfig: customColors,
      swatches: [customColors.swoosh, customColors.overlay, customColors.upper],
      sizes: [7, 8, 9, 10, 11, 12],
      rating: 5.0,
      reviews: 1,
      description: "Bespoke 3D high-top sneaker crafted live inside the SOLEVA 3D Interactive Studio."
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
            <h2>Design Your <em>Sneaker.</em></h2>
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
            Add Custom Pair to Bag ({formatINR(17999)}) <ArrowRight size={16} />
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
    country: "India"
  });
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvc: "" });
  const [errors, setErrors] = useState({});
  const [orderSummary, setOrderSummary] = useState(null);

  const deliveryCost = deliveryOption === "standard" ? 0 : deliveryOption === "express" ? 499 : 999;
  const grandTotal = total + deliveryCost;

  const validateStep1 = () => {
    let errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name required";
    if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Valid email required";
    if (!formData.address.trim()) errs.address = "Street address required";
    if (!formData.city.trim()) errs.city = "City required";
    if (!formData.zip.trim()) errs.zip = "PIN / Postal code required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    if (paymentMethod === "upi" || paymentMethod === "applepay") return true;
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
          date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
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
              <span className="step-label">Address</span>
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
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <span className="field-err">{errors.fullName}</span>}
              </div>
              <div className="form-group full">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <span className="field-err">{errors.email}</span>}
              </div>
              <div className="form-group full">
                <label>Street Address</label>
                <input
                  type="text"
                  placeholder="Flat 402, Skyline Residency, MG Road"
                  value={formData.address}
                  onChange={e => setFormData({ ...formData, address: e.target.value })}
                />
                {errors.address && <span className="field-err">{errors.address}</span>}
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  placeholder="Mumbai"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                />
                {errors.city && <span className="field-err">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label>PIN Code</label>
                <input
                  type="text"
                  placeholder="400001"
                  value={formData.zip}
                  onChange={e => setFormData({ ...formData, zip: e.target.value })}
                />
                {errors.zip && <span className="field-err">{errors.zip}</span>}
              </div>
            </div>

            <div className="checkout-footer">
              <span className="total-display">Total: <b>{formatINR(grandTotal)}</b></span>
              <button className="primary" onClick={handleNext}>
                Continue to Delivery <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Delivery Speed */}
        {step === 2 && (
          <div className="checkout-body">
            <h2>Select <em>Delivery Speed</em></h2>
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
                    <b>Standard Express Delivery</b>
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
                    <b>Soleva Priority Air Express</b>
                    <span className="price-tag">+{formatINR(499)}</span>
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
                    <b>Next-Day Rush Courier</b>
                    <span className="price-tag">+{formatINR(999)}</span>
                  </div>
                  <span className="muted">Guaranteed next morning delivery</span>
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
                className={"toggle-btn " + (paymentMethod === "upi" ? "active" : "")}
                onClick={() => setPaymentMethod("upi")}
              >
                <Zap size={16} /> UPI / GPay / PhonePe
              </button>
              <button
                className={"toggle-btn " + (paymentMethod === "card" ? "active" : "")}
                onClick={() => setPaymentMethod("card")}
              >
                <CreditCard size={16} /> Credit / Debit Card
              </button>
            </div>

            {paymentMethod === "upi" ? (
              <div className="apple-pay-box">
                <p>One-touch UPI Payment (Google Pay / PhonePe / Paytm / BHIM)</p>
                <div className="apple-pay-preview" style={{ background: "linear-gradient(135deg, #0f9d58, #1a73e8)" }}>
                  Pay {formatINR(grandTotal)} via UPI
                </div>
              </div>
            ) : (
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
            )}

            <div className="checkout-footer">
              <button className="text-btn" onClick={() => setStep(2)}>Back</button>
              <button className="primary" onClick={handleNext}>
                Pay {formatINR(grandTotal)} <Check size={16} />
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
              <div className="summary-items-list">
                {orderSummary.items.map((i, idx) => (
                  <div className="summary-item-row" key={idx}>
                    <div className="summary-item-3d">
                      <JordanHigh3D colorConfig={i.colorConfig} modelType={i.modelType} compact />
                    </div>
                    <div className="summary-item-info">
                      <b>{i.name}</b>
                      <span>UK {i.selectedSize} × {i.qty}</span>
                    </div>
                    <b className="summary-item-price">{formatINR(i.price * i.qty)}</b>
                  </div>
                ))}
              </div>

              <div className="summary-row" style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #e0e0db" }}>
                <span>Delivery Address</span>
                <b>{orderSummary.address.address}, {orderSummary.address.city}</b>
              </div>
              <div className="summary-row">
                <span>Estimated Arrival</span>
                <b>{deliveryOption === "overnight" ? "Tomorrow Morning" : deliveryOption === "express" ? "Within 2 Business Days" : "In 3-5 Business Days"}</b>
              </div>
              <div className="summary-row">
                <span>Total Paid</span>
                <b className="total-highlight">{formatINR(orderSummary.total)}</b>
              </div>
            </div>

            <button
              className="primary full-btn"
              onClick={() => {
                onOrderComplete(orderSummary);
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
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState({
    name: "Rahul Sharma",
    email: "rahul@example.com",
    memberTier: "Soleva VIP Member",
    address: "Flat 402, Skyline Residency, MG Road, Mumbai 400001"
  });
  const [orderHistory, setOrderHistory] = useState([
    {
      id: "SLV-894215",
      date: "Aug 18, 2026",
      items: [{ ...products[0], selectedSize: 9, qty: 1 }],
      total: 13999
    }
  ]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState(null);
  const [readingArticle, setReadingArticle] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3200);
  };

  const filtered = useMemo(() => {
    let arr = products.filter(p => (category === "All" || p.category.includes(category) || category === "High-Top") && p.name.toLowerCase().includes(query.toLowerCase()));
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

  const handleOrderComplete = (newOrder) => {
    if (newOrder) {
      setOrderHistory(prev => [newOrder, ...prev]);
    }
    setCart([]);
    triggerToast("Order placed successfully! Checked into Profile.");
  };

  const navigateTo = (pageName) => {
    setActivePage(pageName);
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        FREE EXPRESS SHIPPING ON ORDERS OVER ₹4,999 <span>·</span> EASY 30-DAY RETURNS
      </div>

      <header className="nav">
        <button className="mobile-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
        <a className="logo" onClick={() => navigateTo("home")} style={{ cursor: "pointer" }}>SOLEVA<span>®</span></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a className={activePage === "home" ? "active-link" : ""} onClick={() => navigateTo("home")}>Home</a>
          <a className={activePage === "shop" ? "active-link" : ""} onClick={() => navigateTo("shop")}>Shop</a>
          <button className="nav-btn-link" onClick={() => { setCustomizerOpen(true); setMenu(false); }}>
            <Sparkles size={14} /> 3D Studio
          </button>
          <a className={activePage === "story" ? "active-link" : ""} onClick={() => navigateTo("story")}>Our story</a>
          <a className={activePage === "journal" ? "active-link" : ""} onClick={() => navigateTo("journal")}>Journal</a>
        </nav>
        <div className="nav-actions">
          <label className="search-box">
            <Search size={18} />
            <input value={query} onChange={e => { setQuery(e.target.value); if (activePage !== "shop") navigateTo("shop"); }} placeholder="Search sneakers" />
          </label>
          <button onClick={() => setProfileOpen(true)} className="icon-btn profile-nav-btn" aria-label="Open profile">
            <User size={20} />
            {user && <span className="profile-active-dot"></span>}
          </button>
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

      <main className="page-transition-container">
        {/* HOME PAGE VIEW */}
        {activePage === "home" && (
          <div className="page-view home-page-view">
            <section className="hero">
              <div className="hero-copy">
                <div className="eyebrow"><Sparkles size={15} /> SPRING / SUMMER 2026</div>
                <h1>MOVE<br /><em>DIFFERENT.</em></h1>
                <p>Engineered Indian high-top sneakers modeled directly from 3D blueprints. Precision comfort, glowing neon cyan accents, and everyday energy.</p>
                <div className="hero-buttons">
                  <button className="primary" onClick={() => navigateTo("shop")}>Explore collection <ArrowRight /></button>
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
                  <JordanHigh3D colorConfig={products[0].colorConfig} modelType={products[0].modelType} />
                </div>
                <div className="floating-label label-a"><Rotate3D size={17} /><span>360°<small>DRAG TO ROTATE</small></span></div>
                <div className="floating-label label-b"><Zap size={17} /><span>SIDE PROFILE<small>3D VIEW</small></span></div>
              </div>
            </section>

            <section className="marquee">
              <div>REAL INDIAN BRAND SNEAKERS · CAMPUS · RED TAPE · HRX · BATA POWER · WOODLAND · NEEMAN'S · </div>
            </section>

            <section className="shop-section">
              <div className="section-head">
                <div>
                  <span className="eyebrow">THE COLLECTION</span>
                  <h2>Featured <em>Drops.</em></h2>
                </div>
                <button className="text-link-btn" onClick={() => navigateTo("shop")}>View all catalog <ArrowRight size={16} /></button>
              </div>

              <div className="product-grid">
                {products.slice(0, 3).map(p => (
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
          </div>
        )}

        {/* DEDICATED SHOP PAGE VIEW */}
        {activePage === "shop" && (
          <div className="page-view shop-page-view">
            <div className="page-banner">
              <span className="eyebrow">FULL CATALOG</span>
              <h1>INDIAN SNEAKER <em>COLLECTION</em></h1>
              <p>Explore 100% authentic high-top releases from Campus, Red Tape, HRX, Bata Power, Woodland, and Neeman's.</p>
            </div>

            <section className="shop-section" style={{ paddingTop: 0 }}>
              <div className="shop-controls show">
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
          </div>
        )}

        {/* DEDICATED OUR STORY PAGE VIEW */}
        {activePage === "story" && (
          <div className="page-view story-page-view">
            <div className="page-banner">
              <span className="eyebrow">THE SOLEVA PHILOSOPHY</span>
              <h1>CRAFTED FOR <em>MOTION.</em></h1>
              <p>Combining 3D digital precision with Indian craftsmanship for next-level ergonomic comfort.</p>
            </div>

            <section className="feature">
              <div className="feature-copy">
                <span className="eyebrow">THE THREE-LAYER SYSTEM</span>
                <h2>Comfort that <em>keeps up.</em></h2>
                <p>Every Soleva is built around a responsive three-layer platform: soft landing, stable stride, energetic lift. The result is a sneaker that feels ready before you are.</p>
                <div className="feature-points">
                  <div><ShieldCheck /><span><b>All-day support</b>Contoured heel lock + ergonomic collar</span></div>
                  <div><Zap /><span><b>Energy return</b>High-density Nitro foam beneath every step</span></div>
                  <div><Truck /><span><b>Fast, free shipping</b>Express dispatch across India</span></div>
                </div>
              </div>
              <div className="feature-visual">
                <div className="spec-ring">S<span>3</span></div>
                <div className="feature-shoe">
                  <JordanHigh3D compact colorConfig={products[1].colorConfig} modelType={products[1].modelType} />
                </div>
                <div className="spec-label top">RESPONSIVE<br />FOAM</div>
                <div className="spec-label bottom">LIGHTWEIGHT<br />MESH</div>
              </div>
            </section>
          </div>
        )}

        {/* DEDICATED JOURNAL PAGE VIEW */}
        {activePage === "journal" && (
          <div className="page-view journal-page-view">
            <div className="page-banner">
              <span className="eyebrow">THE SOLEVA JOURNAL</span>
              <h1>STORIES & <em>DESIGN.</em></h1>
              <p>Deep dives into 3D sneaker sculpting, athletic recovery, and sustainable manufacturing.</p>
            </div>

            <section className="journal" style={{ paddingTop: 0 }}>
              <div className="journal-grid">
                {journalArticles.map(art => (
                  <article className="journal-card" key={art.id} onClick={() => setReadingArticle(art)} style={{ cursor: "pointer" }}>
                    <div className="journal-img-wrapper">
                      <img src={art.img} alt={art.title} />
                    </div>
                    <div className="journal-body">
                      <span>{art.category}</span>
                      <h3>{art.title}</h3>
                      <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "6px" }}>{art.content.slice(0, 90)}...</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer>
        <div className="footer-top">
          <div>
            <a className="logo" onClick={() => navigateTo("home")} style={{ cursor: "pointer" }}>SOLEVA<span>®</span></a>
            <p>Premium sneakers for people in motion.</p>
            <div className="socials"><Instagram /><Facebook /><Twitter /></div>
          </div>
          <div>
            <b>NAVIGATION</b>
            <a onClick={() => navigateTo("home")}>Home</a>
            <a onClick={() => navigateTo("shop")}>Shop Catalog</a>
            <a onClick={() => navigateTo("story")}>Our Story</a>
            <a onClick={() => navigateTo("journal")}>Journal</a>
          </div>
          <div>
            <b>ACCOUNT & HELP</b>
            <a onClick={() => setProfileOpen(true)}>My Account</a>
            <a onClick={() => setWishlistOpen(true)}>Wishlist</a>
            <a onClick={() => setCartOpen(true)}>Cart Drawer</a>
          </div>
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
              <JordanHigh3D colorConfig={quickProduct.colorConfig} modelType={quickProduct.modelType} compact />
            </div>
            <div className="modal-details">
              <span className="tag">{quickProduct.tag}</span>
              <h2>{quickProduct.name}</h2>
              <div className="price" style={{ marginBottom: "16px" }}>
                <b>{formatINR(quickProduct.price)}</b>
                <del>{formatINR(quickProduct.old)}</del>
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
                Add to bag ({formatINR(quickProduct.price)}) <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Journal Article Reading Modal */}
      <JournalModal article={readingArticle} onClose={() => setReadingArticle(null)} />

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
                <button className="primary" onClick={() => { setCartOpen(false); navigateTo("shop"); }}>
                  Shop sneakers
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((i, idx) => (
                    <div className="cart-item" key={idx}>
                      <div className="cart-item-3d-thumb">
                        <JordanHigh3D colorConfig={i.colorConfig} modelType={i.modelType} compact />
                      </div>
                      <div className="cart-meta">
                        <b>{i.name}</b>
                        <span>UK {i.selectedSize} · {formatINR(i.price)}</span>
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
                  <div><span>Subtotal</span><b>{formatINR(total)}</b></div>
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

      {/* User Authentication & Profile Modal */}
      {profileOpen && (
        <AuthProfileModal
          user={user}
          onLogin={(u) => { setUser(u); triggerToast(`Welcome back, ${u.name}!`); }}
          onSignup={(u) => { setUser(u); triggerToast(`Account created! Welcome ${u.name}!`); }}
          onLogout={() => { setUser(null); triggerToast("Signed out."); }}
          onClose={() => setProfileOpen(false)}
          orderHistory={orderHistory}
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
