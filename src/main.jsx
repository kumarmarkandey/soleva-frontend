import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Search, ShoppingBag, Heart, Menu, X, ChevronDown,
  Star, Plus, Minus, Trash2, Sparkles, Zap, ShieldCheck, Truck,
  Instagram, Facebook, Twitter, Rotate3D, SlidersHorizontal
} from "lucide-react";
import * as THREE from "three";
import "./styles.css";

const products = [
  {id:1,name:"Aero Flux 01",category:"Running",price:149,old:179,tag:"New",color:"#e8e5df",accent:"#c5a059",sizes:[7,8,9,10,11],rating:4.9},
  {id:2,name:"Shadow Core",category:"Street",price:169,old:199,tag:"Best Seller",color:"#151517",accent:"#dfbd75",sizes:[7,8,9,10,11,12],rating:4.8},
  {id:3,name:"Sovereign X",category:"Running",price:189,old:219,tag:"Hot",color:"#222226",accent:"#d4af37",sizes:[8,9,10,11],rating:4.9},
  {id:4,name:"Mono Court",category:"Lifestyle",price:129,old:149,tag:"Classic",color:"#f5f4ef",accent:"#d9825b",sizes:[7,8,9,10,11],rating:4.8},
  {id:5,name:"Obsidian 90",category:"Street",price:199,old:229,tag:"Limited",color:"#1c1a24",accent:"#c084fc",sizes:[8,9,10,11,12],rating:5.0},
  {id:6,name:"Cloud Step",category:"Lifestyle",price:139,old:159,tag:"New",color:"#e9f1f7",accent:"#38bdf8",sizes:[7,8,9,10],rating:4.7},
];

function Sneaker3D({progress=0, compact=false}) {
  const mount = useRef(null);

  useEffect(() => {
    if (!mount.current) return;
    let frame;
    let renderer, scene, camera, shoe;
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

      renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(currentMount.clientWidth || 500, currentMount.clientHeight || 500);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      currentMount.appendChild(renderer.domElement);
      currentMount.style.cursor = "grab";

      shoe = new THREE.Group();
      const upperMat = new THREE.MeshStandardMaterial({color:0xeeeade, roughness:.42, metalness:.08});
      const soleMat = new THREE.MeshStandardMaterial({color:0x121215, roughness:.25});
      const accentMat = new THREE.MeshStandardMaterial({color:0xd4af37, roughness:.28, metalness:.45}); // Classy Gold Metal
      const darkMat = new THREE.MeshStandardMaterial({color:0x1c1c20, roughness:.4});
      const laceMat = new THREE.MeshStandardMaterial({color:0x27272c, roughness:.6});

      const upper = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), upperMat);
      upper.scale.set(1.72, .52, .72);
      upper.position.set(.15, .22, 0);
      shoe.add(upper);

      const toe = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), upperMat);
      toe.scale.set(1.15, .46, .70);
      toe.position.set(1.18, .18, 0);
      shoe.add(toe);

      const heel = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 20), darkMat);
      heel.scale.set(.48, .58, .7);
      heel.position.set(-1.25, .24, 0);
      shoe.add(heel);

      const sole = new THREE.Mesh(new THREE.BoxGeometry(3.55, .27, 1.34), soleMat);
      sole.position.set(.05, -.28, 0);
      sole.rotation.z = -.025;
      shoe.add(sole);

      const mid = new THREE.Mesh(new THREE.BoxGeometry(2.65, .16, 1.18), accentMat);
      mid.position.set(.35, -.12, 0);
      shoe.add(mid);

      for(let i=0; i<5; i++){
        const lace = new THREE.Mesh(new THREE.BoxGeometry(.62, .035, .06), laceMat);
        lace.position.set(.05 + i*.28, .66, .62);
        lace.rotation.z = -.1;
        shoe.add(lace);
      }

      const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.15, .08, .11), accentMat);
      stripe.position.set(-.38, .58, .69);
      stripe.rotation.z = -.34;
      shoe.add(stripe);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(.74, .035, 10, 64, Math.PI*1.25),
        accentMat
      );
      ring.rotation.y = Math.PI / 2;
      ring.rotation.z = .25;
      ring.position.set(-.72, .34, .57);
      shoe.add(ring);

      shoe.rotation.x = -0.18;
      shoe.rotation.y = -0.28;
      shoe.rotation.z = 0.08;
      scene.add(shoe);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x1f1f24, 2.5));
      const key = new THREE.DirectionalLight(0xfff9ef, 3.5);
      key.position.set(3, 5, 5);
      scene.add(key);

      const fill = new THREE.PointLight(0xd4af37, 8, 12);
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

        shoe.rotation.y = currentRotY;
        shoe.rotation.x = currentRotX;

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
  }, [progress]);

  return <div ref={mount} className={"shoe3d "+(compact?"compact":"")} aria-label="Interactive 3D sneaker — move cursor or drag to rotate"></div>;
}

function ProductCard({p, onAdd, onWish, wished}) {
  return <article className="product-card">
    <div className="product-art" style={{"--shoe":p.color,"--accent":p.accent}}>
      <span className="tag">{p.tag}</span>
      <button className={"wish-btn "+(wished?"active":"")} onClick={()=>onWish(p.id)} aria-label="Wishlist"><Heart size={18} fill={wished?"currentColor":"none"}/></button>
      <div className="fake-shoe"><div className="fake-upper"></div><div className="fake-sole"></div><div className="fake-stripe"></div></div>
    </div>
    <div className="product-info">
      <div><span className="muted">{p.category}</span><h3>{p.name}</h3></div>
      <div className="price"><b>${p.price}</b><del>${p.old}</del></div>
    </div>
    <div className="rating"><Star size={14} fill="currentColor"/> {p.rating} <span>·</span> Free shipping</div>
    <button className="add-btn" onClick={()=>onAdd(p)}>Add to bag <ArrowRight size={17}/></button>
  </article>
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

  useEffect(()=>{
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, {passive:true});
    return () => window.removeEventListener("scroll", onScroll);
  },[]);

  const filtered = useMemo(()=>{
    let arr = products.filter(p=>(category==="All"||p.category===category)&&p.name.toLowerCase().includes(query.toLowerCase()));
    if(sort==="price-low") arr.sort((a,b)=>a.price-b.price);
    if(sort==="price-high") arr.sort((a,b)=>b.price-a.price);
    if(sort==="rating") arr.sort((a,b)=>b.rating-a.rating);
    return arr;
  },[category,query,sort]);

  const add = (p) => setCart(c => { const x = c.find(i=>i.id===p.id); return x ? c.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i) : [...c,{...p,qty:1}]; });
  const change = (id,d) => setCart(c => c.map(i=>i.id===id?{...i,qty:i.qty+d}:i).filter(i=>i.qty>0));
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const count = cart.reduce((s,i)=>s+i.qty,0);

  return <div className="app">
    <div className="announcement">FREE EXPRESS SHIPPING ON ORDERS OVER $100 <span>·</span> EASY 30-DAY RETURNS</div>
    <header className="nav">
      <button className="mobile-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <a className="logo" href="#home">SOLEVA<span>®</span></a>
      <nav className={menu?"nav-links open":"nav-links"}>
        <a href="#home" onClick={()=>setMenu(false)}>Home</a>
        <a href="#shop" onClick={()=>setMenu(false)}>Shop</a>
        <a href="#story" onClick={()=>setMenu(false)}>Our story</a>
        <a href="#journal" onClick={()=>setMenu(false)}>Journal</a>
      </nav>
      <div className="nav-actions">
        <label className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search sneakers"/></label>
        <button onClick={()=>setCartOpen(true)} className="icon-btn bag" aria-label="Open cart"><ShoppingBag/><b>{count}</b></button>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> SPRING / SUMMER 2026</div>
          <h1>MOVE<br/><em>DIFFERENT.</em></h1>
          <p>Engineered sneakers for people who don't stand still. Precision comfort, sculptural design and everyday energy.</p>
          <div className="hero-buttons"><a href="#shop" className="primary">Explore collection <ArrowRight/></a><a href="#story" className="text-link">Why Soleva <ArrowRight/></a></div>
          <div className="hero-stats"><div><strong>01</strong><span>Signature<br/>silhouette</span></div><div><strong>3D</strong><span>Adaptive<br/>cushioning</span></div><div><strong>30</strong><span>Day free<br/>returns</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit1"></div><div className="orbit orbit2"></div>
          <div className="scroll-sneaker" style={{transform:`translate3d(${Math.min(scroll*.08,70)}px,${Math.min(scroll*.11,95)}px,0) rotate(${Math.min(scroll*.07,30)}deg)`}}>
            <Sneaker3D progress={scroll}/>
          </div>
          <div className="floating-label label-a"><Rotate3D size={17}/><span>360°<small>DRAG TO ROTATE</small></span></div>
          <div className="floating-label label-b"><Zap size={17}/><span>DYNAMIC<small>INTERACTIVE</small></span></div>
        </div>
      </section>

      <section className="marquee"><div>ENGINEERED FOR MOTION · DESIGNED FOR NOW · ENGINEERED FOR MOTION · DESIGNED FOR NOW · </div></section>

      <section id="shop" className="shop-section">
        <div className="section-head"><div><span className="eyebrow">THE COLLECTION</span><h2>Find your <em>pair.</em></h2></div><button className="filter-toggle" onClick={()=>setShopOpen(!shopOpen)}><SlidersHorizontal size={18}/> Filters</button></div>
        <div className={"shop-controls "+(shopOpen?"show":"")}>
          <div className="chips">{["All","Running","Street","Lifestyle"].map(c=><button className={category===c?"selected":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
          <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Sort: Featured</option><option value="price-low">Price: Low to high</option><option value="price-high">Price: High to low</option><option value="rating">Top rated</option></select>
        </div>
        <div className="product-grid">{filtered.map(p=><ProductCard key={p.id} p={p} onAdd={add} onWish={id=>setWishlist(w=>w.includes(id)?w.filter(x=>x!==id):[...w,id])} wished={wishlist.includes(p.id)}/>)}</div>
      </section>

      <section id="story" className="feature">
        <div className="feature-copy"><span className="eyebrow">THE SOLEVA SYSTEM</span><h2>Comfort that <em>keeps up.</em></h2><p>Every Soleva is built around a responsive three-layer platform: soft landing, stable stride, energetic lift. The result is a sneaker that feels ready before you are.</p><div className="feature-points"><div><ShieldCheck/><span><b>All-day support</b>Contoured heel + locked-in fit</span></div><div><Zap/><span><b>Energy return</b>Spring foam under every step</span></div><div><Truck/><span><b>Fast, free shipping</b>Dispatch in 24 hours</span></div></div></div>
        <div className="feature-visual"><div className="spec-ring">S<span>3</span></div><div className="feature-shoe"><Sneaker3D compact/></div><div className="spec-label top">RESPONSIVE<br/>FOAM</div><div className="spec-label bottom">LIGHTWEIGHT<br/>MESH</div></div>
      </section>

      <section id="journal" className="journal"><div className="section-head"><div><span className="eyebrow">FROM THE JOURNAL</span><h2>More than <em>shoes.</em></h2></div><a className="text-link" href="#journal">Read all <ArrowRight/></a></div><div className="journal-grid"><article><div className="journal-img j1">01</div><span>DESIGN</span><h3>Why the future of sneakers is sculptural.</h3></article><article><div className="journal-img j2">02</div><span>MOVE</span><h3>The 5-minute reset for your everyday stride.</h3></article><article><div className="journal-img j3">03</div><span>MATERIALS</span><h3>Inside our recycled performance mesh.</h3></article></div></section>
    </main>

    <footer><div className="footer-top"><div><a className="logo" href="#home">SOLEVA<span>®</span></a><p>Premium sneakers for people in motion.</p><div className="socials"><Instagram/><Facebook/><Twitter/></div></div><div><b>SHOP</b><a href="#shop">All sneakers</a><a href="#shop">Running</a><a href="#shop">Street</a></div><div><b>HELP</b><a href="#story">Shipping</a><a href="#story">Returns</a><a href="#story">Contact</a></div><div><b>STAY IN THE LOOP</b><p>New drops, early access and stories.</p><div className="subscribe"><input placeholder="Your email"/><button>→</button></div></div></div><div className="footer-bottom">© 2026 SOLEVA. Built for motion. <span>Privacy · Terms · Accessibility</span></div></footer>

    {cartOpen && <div className="drawer-backdrop" onClick={()=>setCartOpen(false)}><aside className="cart-drawer" onClick={e=>e.stopPropagation()}><div className="drawer-head"><h2>Your bag <span>{count}</span></h2><button onClick={()=>setCartOpen(false)}><X/></button></div>{cart.length===0?<div className="empty"><ShoppingBag size={42}/><h3>Your bag is empty.</h3><p>Add a pair and start moving.</p><button className="primary" onClick={()=>{setCartOpen(false);document.querySelector("#shop")?.scrollIntoView({behavior:"smooth"})}}>Shop sneakers</button></div>:<><div className="cart-items">{cart.map(i=><div className="cart-item" key={i.id}><div className="mini-shoe" style={{"--shoe":i.color,"--accent":i.accent}}><div></div></div><div className="cart-meta"><b>{i.name}</b><span>${i.price}</span><div className="qty"><button onClick={()=>change(i.id,-1)}><Minus size={14}/></button><span>{i.qty}</span><button onClick={()=>change(i.id,1)}><Plus size={14}/></button></div></div><button className="trash" onClick={()=>setCart(c=>c.filter(x=>x.id!==i.id))}><Trash2 size={16}/></button></div>)}</div><div className="checkout"><div><span>Subtotal</span><b>${total.toFixed(2)}</b></div><small>Taxes and shipping calculated at checkout.</small><button className="primary">Checkout <ArrowRight/></button></div></>}</aside></div>}
  </div>
}

createRoot(document.getElementById("root")).render(<App />);
