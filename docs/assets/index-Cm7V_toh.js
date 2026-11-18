(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const h=[{id:1,name:"Eau de Parfum Chic Woman",price:129.9,image:"/images/main/products/p1.png"},{id:2,name:"Eau de Parfum Amakha",price:119.9,image:"/images/main/products/p2.png"},{id:3,name:"Perfume Intense Black",price:139.9,image:"/images/main/products/p3.png"},{id:4,name:"Essência Premium",price:99.9,image:"/images/main/products/p4.png"},{id:5,name:"Kit Perfume e Body Splash",price:149.9,image:"/images/main/products/p5.png"}],f=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});function L(){var c,p;const n=new Map,e=document.querySelector(".cart"),r=document.querySelector(".overlay"),o=document.querySelector(".cart-items"),t=document.querySelector(".total"),a=()=>{e==null||e.classList.add("open"),r==null||r.classList.add("show")},i=()=>{const g=[...n.values()].reduce((d,l)=>d+l,0);let u=0;document.querySelectorAll(".cart-count").forEach(d=>{d.textContent=String(g)}),o&&(n.size===0?o.innerHTML="<p>Seu carrinho está vazio.</p>":o.innerHTML=[...n.entries()].map(([d,l])=>{const s=h.find(v=>v.id===d);if(!s)return"";const b=s.price*l;return u+=b,`
                            <article class="cart-item">
                                <img src="${s.image}" alt="${s.name}">
                                <div class="cart-item-info">
                                    <strong>${s.name}</strong>
                                    <span>${l} x ${f(s.price)}</span>
                                    <b>${f(b)}</b>
                                </div>
                                <button
                                    class="remove-cart-item"
                                    type="button"
                                    data-remove="${s.id}"
                                    aria-label="Remover ${s.name} do carrinho"
                                >
                                    ×
                                </button>
                            </article>
                        `}).join("")),t&&(t.textContent=f(u))},m=()=>{e==null||e.classList.remove("open"),r==null||r.classList.remove("show")};document.addEventListener("click",g=>{const u=g.target,d=u.closest("[data-add]");if(d){const s=Number(d.dataset.add),b=n.get(s)??0;n.set(s,b+1),i(),a();return}const l=u.closest("[data-remove]");if(l){const s=Number(l.dataset.remove);n.delete(s),i()}}),(c=document.querySelector(".cart-open"))==null||c.addEventListener("click",a),(p=document.querySelector(".cart-close"))==null||p.addEventListener("click",m),r==null||r.addEventListener("click",m),i()}function E(){const n=document.querySelector(".menu-btn"),e=document.querySelector(".mobile-nav");n==null||n.addEventListener("click",()=>{e&&(e.hidden=!e.hidden)});const r=document.querySelector(".search");r==null||r.addEventListener("submit",o=>{var t;o.preventDefault(),(t=document.querySelector("#products"))==null||t.scrollIntoView({behavior:"smooth"})})}function S(){const n=document.querySelector(".newsletter form");n==null||n.addEventListener("submit",e=>{e.preventDefault();const r=document.querySelector(".feedback");r&&(r.textContent="Cadastro realizado nesta demonstração!")})}const $=["best","fragrance","routine"];function w(){$.forEach(n=>{var m;const e=document.getElementById(n);if(!e)return;const r=document.createElement("div");r.className="carousel";const o=document.createElement("button");o.className="carousel-arrow carousel-arrow--previous",o.type="button",o.setAttribute("aria-label","Mostrar produtos anteriores"),o.innerHTML="&#10094;";const t=document.createElement("button");t.className="carousel-arrow carousel-arrow--next",t.type="button",t.setAttribute("aria-label","Mostrar próximos produtos"),t.innerHTML="&#10095;",e.classList.add("product-grid"),e.setAttribute("aria-label","Lista de produtos");const a=[...h,...h];e.innerHTML=a.map(c=>`
                    <article class="product">
                        <button
                            class="product-card-button"
                            type="button"
                            data-add="${c.id}"
                            aria-label="Adicionar ${c.name} ao carrinho"
                        >
                            <span class="photo">
                                <img src="${c.image}" alt="${c.name}">
                                <span class="add-product-icon" aria-hidden="true">+</span>
                            </span>

                            <span class="product-category">PERFUMARIA</span>
                            <span class="product-name">${c.name}</span>
                            <del>${f(c.price+20)}</del>
                            <strong>${f(c.price)}</strong>
                            <span class="installments">ou em até 3x sem juros</span>
                        </button>
                    </article>
                `).join(""),(m=e.parentElement)==null||m.insertBefore(r,e),r.append(o,e,t);const i=c=>{const p=e.querySelector(".product");if(!p)return;const u=(p.offsetWidth+9)*5;e.scrollBy({left:u*c,behavior:"smooth"})};o.addEventListener("click",()=>i(-1)),t.addEventListener("click",()=>i(1))})}async function y(n,e){const r=document.getElementById(n);if(!r)throw new Error(`Elemento não encontrado: #${n}`);const o=await fetch(e);if(!o.ok)throw new Error(`Não foi possível carregar: ${e}`);r.innerHTML=await o.text()}async function q(){await Promise.all([y("header-root","/src/partials/header.html"),y("main-root","/src/partials/main.html"),y("footer-root","/src/partials/footer.html")]),w(),E(),L(),S()}q().catch(n=>{console.error("Erro ao iniciar a página:",n)});
