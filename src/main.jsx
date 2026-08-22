import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Search, ShoppingBag, Heart, Menu, X, ChevronDown,
  Star, Plus, Minus, Trash2, Sparkles, Zap, ShieldCheck, Truck,
  Instagram, Facebook, Twitter, Rotate3D, SlidersHorizontal, Eye, CheckCircle2,
  CreditCard, Check, PackageCheck, Sliders, Palette, User, LogOut, Lock, Mail, MapPin, Calendar, Clock
} from "lucide-react";
import "./styles.css";

export function formatINR(val) {
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

const products = [
  {
    id: 1,
    name: "Campus Oxyfit Cyber Glow",
    category: "High-Top Cyber",
    price: 13999,
    old: 16999,
    tag: "India Edition",
    colorName: "Stealth Black / Red / Cyber Glow",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    swatches: ["#ff2a55", "#121214", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 5.0,
    reviews: 412,
    description: "Campus signature high-top performance sneaker featuring genuine leather overlays, air mesh ventilation, and high-impact rubber sole."
  },
  {
    id: 2,
    name: "Red Tape Urban Glide X",
    category: "High-Top Street",
    price: 14499,
    old: 17999,
    tag: "Best Seller",
    colorName: "Matte Carbon / White / Crimson Red",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    swatches: ["#ff2a55", "#18181c", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 328,
    description: "Red Tape urban street high-top engineered with premium matte carbon leather, cushioned ankle padding, and grip outsole."
  },
  {
    id: 3,
    name: "HRX Surge Nitro Tech",
    category: "Performance Runner",
    price: 15999,
    old: 18999,
    tag: "HRX Fitness",
    colorName: "Midnight Navy / White / Voltage Amber",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    swatches: ["#ffb700", "#0f172a", "#ffffff"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 265,
    description: "Hrithik Roshan's HRX athletic runner built with Nitro foam energy return, breathable mesh upper, and high-traction sole."
  },
  {
    id: 4,
    name: "Bata Power Apex Volt",
    category: "Court Athletic",
    price: 12999,
    old: 15999,
    tag: "Power Series",
    colorName: "Obsidian Black / White / Emerald Green",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    swatches: ["#10b981", "#111827", "#ffffff"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 198,
    description: "Bata Power court athletic sneaker with reinforced rubber toe cap, high-rebound heel cushioning, and court grip plate."
  },
  {
    id: 5,
    name: "Woodland Apex Trail Tracker",
    category: "Rugged Outdoor",
    price: 16499,
    old: 19999,
    tag: "Outdoor Tough",
    colorName: "Espresso Brown / Off-White / Amber",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    swatches: ["#f59e0b", "#271a15", "#f5f5f0"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 176,
    description: "Woodland rugged outdoor high-top sneaker crafted from full-grain espresso leather with all-terrain rubber tread outsole."
  },
  {
    id: 6,
    name: "Neeman's Re-Velocity Eco High",
    category: "Sustainable Lifestyle",
    price: 11999,
    old: 14999,
    tag: "Eco-Friendly",
    colorName: "Pure White / Cyber Violet",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    swatches: ["#a855f7", "#ffffff", "#f1f5f9"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 215,
    description: "Neeman's eco-conscious sustainable high-top knit sneaker made from 100% recycled ocean plastics with ultra-soft foam sole."
  }
];

const journalArticles = [
  {
    id: 1,
    category: "DESIGN",
    title: "Why the future of sneakers is sculptural.",
    date: "Aug 20, 2026",
    img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
    content: "Modern sneaker design is moving away from flat patterns toward dynamic ergonomic sculpting. By utilizing lightweight polymer soles and anatomical leather overlays, high-top silhouettes achieve unprecedented lock-in and striking visual presence."
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

        <div className="card-image-wrapper">
          <img src={p.image} alt={p.name} className="product-real-img" />
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
                              <div className="summary-item-real-thumb">
                                <img src={it.image} alt={it.name} />
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
                <p>Sign in to track orders, manage wishlist, and launch Studio.</p>

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
                <p>Create an account to get early drop access and save custom builds.</p>

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
            <p>Save your favorite real sneakers to review or buy later.</p>
            <button className="primary" onClick={onClose}>Explore Collection</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {wishProducts.map(p => (
                <div className="cart-item" key={p.id}>
                  <div className="cart-item-real-thumb">
                    <img src={p.image} alt={p.name} />
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

/* Studio Customizer Modal Component */
function hexToHueRotate(hex) {
  if (!hex) return "none";
  if (hex === "#121214" || hex === "#000000") return "grayscale(0.95) brightness(0.6) contrast(1.4)";
  if (hex === "#ffffff") return "brightness(1.25) contrast(1.1)";
  
  let r = parseInt(hex.slice(1, 3) || "00", 16) / 255;
  let g = parseInt(hex.slice(3, 5) || "00", 16) / 255;
  let b = parseInt(hex.slice(5, 7) || "00", 16) / 255;

  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0;
  if (max !== min) {
    let d = max - min;
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else if (max === b) h = (r - g) / d + 4;
    h /= 6;
  }
  const deg = Math.round(h * 360);
  return `hue-rotate(${deg}deg) saturate(2.4) contrast(1.1)`;
}

function Studio3DCustomizer({ onClose, onAddCustomSneaker }) {
  const [activeTab, setActiveTab] = useState("swoosh");
  const [partColors, setPartColors] = useState({
    swoosh: "#00f0ff",
    upper: "#ffffff",
    sole: "#ffffff",
    laces: "#00f0ff"
  });
  const [selectedSize, setSelectedSize] = useState(9);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const currentColor = partColors[activeTab] || "#00f0ff";

  const colorThemes = [
    { name: "Neon Cyber Cyan", color: "#00f0ff" },
    { name: "Crimson Red Blaze", color: "#ff2a55" },
    { name: "Voltage Amber Gold", color: "#ffb700" },
    { name: "Ultraviolet Purple", color: "#a855f7" },
    { name: "Emerald Court Green", color: "#10b981" },
    { name: "Ice Blue Glow", color: "#38bdf8" },
    { name: "Stealth Midnight Black", color: "#121214" },
    { name: "Pure Titanium White", color: "#ffffff" }
  ];

  const updateColor = (hex) => {
    setPartColors(prev => ({
      ...prev,
      [activeTab]: hex,
      ...(activeTab === "swoosh" ? { laces: hex } : {})
    }));
  };

  const handleSave = () => {
    const customProduct = {
      id: "custom-" + Date.now(),
      name: selectedProduct.name + " (Studio Edition)",
      category: "Bespoke Edition",
      price: 17999,
      old: 20999,
      tag: "Studio Build",
      colorName: `Custom ${activeTab.toUpperCase()} (${currentColor.toUpperCase()})`,
      image: selectedProduct.image,
      swatches: [partColors.swoosh, partColors.upper, partColors.sole],
      sizes: [7, 8, 9, 10, 11, 12],
      rating: 5.0,
      reviews: 1,
      description: `Custom ${selectedProduct.name} personalized inside the SOLEVA Design Studio.`
    };
    onAddCustomSneaker(customProduct, selectedSize);
    onClose();
  };

  return (
    <div className="studio-modal-backdrop" onClick={onClose}>
      <div className="studio-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close studio"><X size={20} /></button>
        
        {/* Left Real Shoe Studio Viewport with Live Color Recoloring */}
        <div className="studio-viewport">
          <div className="studio-header-badge">
            <Sparkles size={14} /> LIVE DESIGN STUDIO
          </div>
          
          <div className="studio-real-art">
            <div className="studio-img-tint-container">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="studio-main-real-img"
                style={{
                  filter: hexToHueRotate(partColors.swoosh),
                  transition: "filter 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              />
              <div
                className="studio-tint-layer"
                style={{
                  backgroundColor: partColors.swoosh,
                  mixBlendMode: partColors.swoosh === "#121214" ? "multiply" : "color",
                  opacity: partColors.swoosh === "#121214" ? 0.8 : 0.5
                }}
              />
            </div>
            <div className="studio-theme-glow" style={{ boxShadow: `0 0 100px 30px ${partColors.swoosh}` }}></div>
          </div>

          <div className="studio-drag-hint">
            <Palette size={16} /> LIVE COLOR RECOLORING: <b style={{ color: partColors.swoosh, marginLeft: "4px" }}>{partColors.swoosh.toUpperCase()}</b>
          </div>
        </div>

        {/* Right Customization Controls Panel */}
        <div className="studio-controls">
          <div className="studio-title">
            <h2>Design Your <em>Sneaker.</em></h2>
            <p>Select your base silhouette, accent color palette, and custom fit size.</p>
          </div>

          {/* Silhouette Selector */}
          <div>
            <span className="control-label">SELECT SNEAKER SILHOUETTE</span>
            <div className="preset-chips">
              {products.map(p => (
                <button
                  key={p.id}
                  className={"preset-chip " + (selectedProduct.id === p.id ? "selected-chip" : "")}
                  onClick={() => setSelectedProduct(p)}
                >
                  {p.name.split(" ")[0]} {p.name.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Part Tabs */}
          <div className="part-tabs">
            {[
              { id: "swoosh", label: "Branding & Glow" },
              { id: "upper", label: "Upper Base" },
              { id: "sole", label: "Sole & Outsole" }
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

          {/* Color Theme Selector & Hex Input */}
          <div className="color-picker-box">
            <div className="picker-header">
              <span>ACTIVE PART: <b>{activeTab.toUpperCase()}</b></span>
              <div className="hex-input-group">
                <input
                  type="color"
                  value={currentColor}
                  onChange={e => updateColor(e.target.value)}
                  className="native-color-picker"
                />
                <input
                  type="text"
                  value={currentColor}
                  onChange={e => updateColor(e.target.value)}
                  className="hex-text-input"
                />
              </div>
            </div>

            <div className="swatch-grid">
              {colorThemes.map(t => (
                <button
                  key={t.color}
                  className={"swatch-btn " + (currentColor === t.color ? "selected" : "")}
                  style={{ background: t.color }}
                  onClick={() => updateColor(t.color)}
                  title={t.name}
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
                    <div className="summary-item-real-thumb">
                      <img src={i.image} alt={i.name} />
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
            <Sparkles size={14} /> Design Studio
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
                <p>Engineered authentic high-top sneakers from Campus, Red Tape, HRX, Bata Power, Woodland, and Neeman's. Precision comfort and everyday energy.</p>
                <div className="hero-buttons">
                  <button className="primary" onClick={() => navigateTo("shop")}>Explore collection <ArrowRight /></button>
                  <button className="secondary-studio-btn" onClick={() => setCustomizerOpen(true)}>
                    <Palette size={16} /> Open Studio
                  </button>
                </div>
                <div className="hero-stats">
                  <div><strong>01</strong><span>Signature<br />silhouette</span></div>
                  <div><strong>PRO</strong><span>Adaptive<br />cushioning</span></div>
                  <div><strong>30</strong><span>Day free<br />returns</span></div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="orbit orbit1"></div>
                <div className="orbit orbit2"></div>
                <div className="scroll-sneaker">
                  <img
                    src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80"
                    alt="Red Tape Urban Glide X High-Top"
                    className="hero-real-shoe-img"
                  />
                </div>
                <div className="floating-label label-a"><Sparkles size={17} /><span>AUTHENTIC<small>REAL PHOTOGRAPHY</small></span></div>
                <div className="floating-label label-b"><Zap size={17} /><span>SIDE PROFILE<small>LEATHER HIGH-TOP</small></span></div>
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
              <p>Combining precision engineering with authentic Indian craftsmanship for next-level ergonomic comfort.</p>
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
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                    alt="Campus Oxyfit Cyber Glow"
                    className="feature-real-img"
                  />
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
              <p>Deep dives into sneaker sculpting, athletic recovery, and sustainable manufacturing.</p>
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
              <img src={quickProduct.image} alt={quickProduct.name} className="quick-real-img" />
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
                <div><Zap size={16} /> <span>High-Rebound Sole & Translucent Outsole</span></div>
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
                      <div className="cart-item-real-thumb">
                        <img src={i.image} alt={i.name} />
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

      {/* Studio Customizer Modal */}
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
