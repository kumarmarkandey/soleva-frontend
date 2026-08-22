import React, { useEffect, useMemo, useRef, useState } from "react";
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
    name: "PUMA Slipstream Mid Leather",
    category: "High-Top Heritage",
    price: 10999,
    old: 12999,
    tag: "PUMA Heritage",
    colorName: "PUMA White / PUMA Black / PUMA Red",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    swatches: ["#ff2a55", "#121214", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 5.0,
    reviews: 412,
    description: "Iconic 1987 PUMA high-top basketball sneaker re-issued with full leather upper, padded collar, Formstrip lateral branding, and rubber cupsole."
  },
  {
    id: 2,
    name: "NIKE NITRO™ 3",
    category: "NITRO™ Running",
    price: 11999,
    old: 13999,
    tag: "NITRO™ Tech",
    colorName: "Electric Blue Lemonade / PUMA Black",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80",
    swatches: ["#10b981", "#121214", "#ffffff"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 328,
    description: "Nike premier daily running shoe equipped with NITROFOAM™ responsive cushioning, NIKE GRIP durable rubber traction, and engineered mesh upper."
  },
  {
    id: 3,
    name: "PUMA Suede Classic XXI",
    category: "Heritage Lifestyle",
    price: 7999,
    old: 9999,
    tag: "PUMA Classic",
    colorName: "PUMA Black / PUMA White",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers",
    swatches: ["#121214", "#ffffff", "#888888"],
    sizes: [7, 8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 580,
    description: "The timeless PUMA Suede Classic featuring full suede upper, synthetic lining, iconic lateral Formstrip, and comfortable rubber midsole."
  },
  {
    id: 4,
    name: "PUMA Palermo Leather",
    category: "Terrace Court",
    price: 8999,
    old: 10999,
    tag: "Terrace Special",
    colorName: "Alpine Snow / PUMA Gold",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    swatches: ["#10b981", "#111827", "#ffffff"],
    sizes: [7, 8, 9, 10, 11],
    rating: 4.8,
    reviews: 210,
    description: "Re-issued terrace court sneaker straight from the archives with signature gum rubber outsole, foil print PUMA logo, and leather overlays."
  },
  {
    id: 5,
    name: "adidas casual",
    category: "Futuristic Streetwear",
    price: 9999,
    old: 11999,
    tag: "RS-X Edition",
    colorName: "Vapor Gray / PUMA Red",
    image: "https://img.tatacliq.com/images/i19//1348Wx2000H/MP000000023552608_1348Wx2000H_202409060344251.jpeg",
    swatches: ["#ffb700", "#0f172a", "#ffffff"],
    sizes: [8, 9, 10, 11, 12],
    rating: 4.9,
    reviews: 345,
    description: "Extremist chunky streetwear silhouette powered by PUMA Running System technology, molded TPU eyelets, and multi-texture mesh upper."
  },
  {
    id: 6,
    name: "men ubz legacy",
    category: "Marathon Elite",
    price: 14999,
    old: 16999,
    tag: "Marathon Elite",
    colorName: "Sun Stream / Sunset Glow",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHa6VIzuL9x9n915n9cqLZm704SSyHx36VEuCbG30YDA&s",
    swatches: ["#a855f7", "#ffffff", "#f1f5f9"],
    sizes: [7, 8, 9, 10, 11],
    rating: 5.0,
    reviews: 290,
    description: "PUMA's maximum performance carbon-plated marathon shoe featuring dual NITROFOAM™ Elite stack, PWRPLATE carbon fiber plate, and PUMAGRIP outsole."
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
            <Eye size={15} /> 360° Quick View
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
                <p>Sign in to track orders and manage wishlist.</p>

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
                <p>Create an account to get early drop access.</p>

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
            <p>Save your favorite sneakers to review or buy later.</p>
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

function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [angleIndex, setAngleIndex] = useState(0);
  const [autoSpin, setAutoSpin] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const dragRef = useRef(null);

  const angles = [
    { label: "Side 90°", degree: "90°", transform: "rotateY(0deg) rotate(0deg) scale(1)", desc: "Side Profile & Formstrip" },
    { label: "3/4 View 45°", degree: "45°", transform: "rotateY(-25deg) rotate(2deg) scale(1.04)", desc: "Dynamic 3/4 Perspective" },
    { label: "Front 0°", degree: "0°", transform: "rotateY(-60deg) rotate(5deg) scale(1.08)", desc: "Toe Cap & Lacing Structure" },
    { label: "Heel 180°", degree: "180°", transform: "rotateY(45deg) rotate(-4deg) scale(1.04)", desc: "Heel Counter & Cat Logo" },
    { label: "Outsole 270°", degree: "270°", transform: "rotate(45deg) scale(0.95)", desc: "High-Traction Outsole" }
  ];

  useEffect(() => {
    if (!autoSpin) return;
    const timer = setInterval(() => {
      setAngleIndex(prev => (prev + 1) % angles.length);
    }, 1400);
    return () => clearInterval(timer);
  }, [autoSpin, angles.length]);

  const handleDragScrub = (e) => {
    const isTouch = e.touches && e.touches.length > 0;
    const startX = isTouch ? e.touches[0].clientX : e.clientX;
    
    const handleMove = (moveEvt) => {
      const currentX = moveEvt.touches && moveEvt.touches.length > 0 ? moveEvt.touches[0].clientX : moveEvt.clientX;
      const diff = currentX - startX;
      if (Math.abs(diff) > 35) {
        if (diff > 0) {
          setAngleIndex(prev => (prev === 0 ? angles.length - 1 : prev - 1));
        } else {
          setAngleIndex(prev => (prev + 1) % angles.length);
        }
        window.removeEventListener("pointermove", handleMove);
        window.removeEventListener("touchmove", handleMove);
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("pointerup", () => {
      window.removeEventListener("pointermove", handleMove);
    }, { once: true });
    window.addEventListener("touchend", () => {
      window.removeEventListener("touchmove", handleMove);
    }, { once: true });
  };

  const currentAngle = angles[angleIndex];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="quick-modal quick-360-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={18} /></button>
        
        <div
          className="modal-art quick-360-art"
          ref={dragRef}
          onPointerDown={handleDragScrub}
          onTouchStart={handleDragScrub}
          style={{ cursor: "grab" }}
        >
          <div className="view-360-badge">
            <Rotate3D size={15} /> 360° VIEW · {currentAngle.degree}
          </div>

          <div className="quick-img-container">
            <img
              src={product.image}
              alt={product.name}
              className="quick-real-img interactive-360-img"
              style={{
                transform: currentAngle.transform,
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            />
          </div>

          <div className="controls-360-bar">
            <div className="angle-pills">
              {angles.map((ang, idx) => (
                <button
                  key={ang.degree}
                  className={"angle-pill " + (angleIndex === idx ? "active" : "")}
                  onClick={() => { setAngleIndex(idx); setAutoSpin(false); }}
                >
                  {ang.label}
                </button>
              ))}
            </div>

            <button
              className={"spin-toggle-btn " + (autoSpin ? "active" : "")}
              onClick={() => setAutoSpin(!autoSpin)}
              title="Auto Spin 360°"
            >
              <Rotate3D size={15} /> {autoSpin ? "Pause 360°" : "Auto 360° Spin"}
            </button>
          </div>

          <span className="drag-scrub-hint">Drag horizontally to rotate 360° · {currentAngle.desc}</span>
        </div>

        <div className="modal-details">
          <span className="tag">{product.tag}</span>
          <h2>{product.name}</h2>
          <span className="color-name" style={{ display: "block", marginBottom: "12px" }}>{product.colorName}</span>

          <div className="price" style={{ marginBottom: "16px" }}>
            <b>{formatINR(product.price)}</b>
            <del>{formatINR(product.old)}</del>
          </div>
          
          <p>{product.description}</p>

          <div className="quick-size-section" style={{ marginTop: "16px" }}>
            <span className="control-label" style={{ fontSize: "11px", fontWeight: "700", color: "var(--muted)" }}>SELECT UK SIZE</span>
            <div className="size-selector" style={{ marginTop: "6px" }}>
              {product.sizes.map(s => (
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

          <div className="specs-list" style={{ marginTop: "16px" }}>
            <div><ShieldCheck size={16} /> <span>100% Authentic Product</span></div>
            <div><Zap size={16} /> <span>Interactive 360° Inspection & High-Rebound Sole</span></div>
            <div><Truck size={16} /> <span>Free Express Shipping across India</span></div>
          </div>

          <button
            className="primary"
            style={{ marginTop: "20px" }}
            onClick={() => {
              onAddToCart(product, selectedSize);
              onClose();
            }}
          >
            Add to bag ({formatINR(product.price)}) <ArrowRight size={16} />
          </button>
        </div>
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
      total: 10999
    }
  ]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [quickProduct, setQuickProduct] = useState(null);
  const [readingArticle, setReadingArticle] = useState(null);
  const [toastMsg, setToastMsg] = useState("");

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3200);
  };

  const filtered = useMemo(() => {
    let arr = products.filter(p => (category === "All" || p.category.includes(category) || category === "High-Top" || category === "Running") && p.name.toLowerCase().includes(query.toLowerCase()));
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
                <div className="eyebrow"><Sparkles size={15} /> SPRING / SUMMER 2026 EDITION</div>
                <h1>MOVE<br /><em>DIFFERENT.</em></h1>
                <p>Engineered authentic sneakers featuring responsive cushioning, athletic performance, and iconic streetwear silhouettes.</p>
                <div className="hero-buttons">
                  <button className="primary" onClick={() => navigateTo("shop")}>Explore collection <ArrowRight /></button>
                </div>
                <div className="hero-stats">
                  <div><strong>01</strong><span>Signature<br />design</span></div>
                  <div><strong>PRO</strong><span>Adaptive<br />cushioning</span></div>
                  <div><strong>30</strong><span>Day free<br />returns</span></div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="orbit orbit1"></div>
                <div className="orbit orbit2"></div>
                <div className="scroll-sneaker">
                  <img
                    src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80"
                    alt="PUMA Slipstream Mid Leather"
                    className="hero-real-shoe-img"
                  />
                </div>
                <div className="floating-label label-a"><Sparkles size={17} /><span>AUTHENTIC<small>REAL PHOTOGRAPHY</small></span></div>
                <div className="floating-label label-b"><Zap size={17} /><span>HERITAGE<small>LEATHER HIGH-TOP</small></span></div>
              </div>
            </section>

            <section className="marquee">
              <div>AUTHENTIC SNEAKER COLLECTION · SLIPSTREAM MID · VELOCITY NITRO™ 3 · SUEDE CLASSIC XXI · PALERMO LEATHER · ADIDAS CASUAL · MEN UBZ LEGACY · </div>
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
              <span className="eyebrow">FULL STORE CATALOG</span>
              <h1>SNEAKER <em>COLLECTION</em></h1>
              <p>Explore 100% authentic releases including Slipstream Mid, Velocity NITRO™ 3, Suede Classic XXI, Palermo Leather, adidas casual, and men ubz legacy.</p>
            </div>

            <section className="shop-section" style={{ paddingTop: 0 }}>
              <div className="shop-controls show">
                <div className="chips">
                  {["All", "Heritage", "Running", "Lifestyle", "Terrace"].map(c => (
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
              <span className="eyebrow">THE SOLEVA HERITAGE</span>
              <h1>CRAFTED FOR <em>MOTION.</em></h1>
              <p>Combining precision engineering with athletic performance to empower movement and street culture.</p>
            </div>

            <section className="feature">
              <div className="feature-copy">
                <span className="eyebrow">ADVANCED CUSHIONING TECHNOLOGY</span>
                <h2>Comfort that <em>keeps up.</em></h2>
                <p>Delivering maximum energy return in an ultra-lightweight package with high-traction rubber soles for maximum grip across every surface.</p>
                <div className="feature-points">
                  <div><ShieldCheck /><span><b>Responsive Cushioning</b>Infused for lightweight energy return</span></div>
                  <div><Zap /><span><b>Engineered Platform</b>Stabilizes energy transfer for peak performance</span></div>
                  <div><Truck /><span><b>Fast, Free Shipping</b>Direct dispatch across India</span></div>
                </div>
              </div>
              <div className="feature-visual">
                <div className="spec-ring">S<span>L</span></div>
                <div className="feature-shoe">
                  <img
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80"
                    alt="Velocity NITRO 3"
                    className="feature-real-img"
                  />
                </div>
                <div className="spec-label top">FOAM<br />CUSHION</div>
                <div className="spec-label bottom">RUBBER<br />GRIP</div>
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
              <p>Deep dives into foam technology, terrace football culture, and high-performance design.</p>
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
        <QuickViewModal
          product={quickProduct}
          onClose={() => setQuickProduct(null)}
          onAddToCart={(prod, sz) => add(prod, sz)}
        />
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
                <p>Add a pair of sneakers and start moving.</p>
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
