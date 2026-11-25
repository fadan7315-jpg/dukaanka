/* Dukaanka +1: qiimaha alaabta, faaiidada xabbo kasta, Soo iibin, deynta iibiyaha. Xogta hore waa la ilaaliyaa. */
(function(){
const ix=s=>S.stock.find(x=>x.item.toLowerCase()===String(s).trim().toLowerCase());
const _render=render;window.render=function(){S.buys=S.buys||[];_render()};
const _fill=fill;window.fill=function(){_fill();const f=ix(v("si"));if(f){if(!v("sc")&&f.cost)$("#sc").value=f.cost;if(!v("sp")&&f.price)$("#sp").value=f.price}};
window.addStock=function(){const item=v("ki").trim(),q=n("kq");if(!item)return;let f=ix(item);if(f)f.in+=q;else S.stock.push(f={item,in:q});if(n("kc"))f.cost=n("kc");if(n("kp"))f.price=n("kp");save();render()};
const _as=addSale;window.addSale=function(){const f=ix(v("si"));if(f&&n("sq")>rest(f)&&!confirm("Keydku waa "+rest(f)+" oo keliya. Sii wad?"))return;_as()};
window.addBuy=function(){const item=v("bi").trim(),q=n("bq"),c=n("bc"),t=+(q*c).toFixed(2),p=v("bp")===""?t:Math.min(n("bp"),t),sup=v("bs").trim();
 if(!item||q<=0||c<=0)return alert("Geli alaab, tiro iyo qiime.");if(t>p&&!sup)return alert("Deyn iibiyaha waxay u baahan tahay magaciisa.");
 let f=ix(item);if(!f)S.stock.push(f={item,in:0});f.in+=q;f.cost=c;
 S.buys.push({id:Date.now()+"-"+Math.random().toString(36).slice(2,7),d:v("bd")||today(),item,q,c,sup,tel:v("bt"),t,p});save();render()};
window.payBuy=i=>{S.buys[i].p=S.buys[i].t;save();render()};
const _del=del;window.del=function(k,i){if(k==="buys"&&pend===k+i){const b=S.buys[i],f=ix(b.item);if(f)f.in-=b.q}_del(k,i)};
const _st=V.stock;V.stock=function(){let h=_st();h=h.slice(0,h.indexOf('<div class="card"><h3>Keydka</h3>'));
 h=h.replace('<button class="btn" onclick="addStock()">',()=>'<div class="r2"><input id="kc" type="number" inputmode="decimal" placeholder="Qiimaha soo iibka $"><input id="kp" type="number" inputmode="decimal" placeholder="Qiimaha iibka $"></div><button class="btn" onclick="addStock()">');
 const buy=`${dl()}<div class="card"><h3>Soo iibin (Purchase)</h3><input id="bi" list="dl" placeholder="Alaabta"><div class="r2"><input id="bq" type="number" inputmode="decimal" placeholder="Tirada"><input id="bc" type="number" inputmode="decimal" placeholder="Qiimaha xabbo $"></div><input id="bs" placeholder="Magaca iibiyaha"><input id="bt" type="tel" placeholder="Telefoonka iibiyaha"><div class="r2"><input id="bp" type="number" inputmode="decimal" placeholder="La bixiyey (madhan = dhammaan)"><input id="bd" type="date" value="${today()}"></div><button class="btn" onclick="addBuy()">+ Kaydi soo iibinta</button></div>
 <div class="card"><h3>Soo iibinta — Deyn iibiyayaal ${$$(sum(S.buys,b=>b.t-b.p))}</h3>${[...S.buys.keys()].reverse().slice(0,30).map(i=>{const b=S.buys[i],r=b.t-b.p;return `<div class="row"><div><b>${esc(b.item)}</b> × ${b.q}<small>${fd(b.d)} · ${esc(b.sup)||"—"} · ${$$(b.t)}${r>0?` · <b style="color:var(--bad)">Hartay ${$$(r)}</b>`:""}</small></div>${r>0?`<button class="btn s" onclick="payBuy(${i})">Bixi</button>`:""}${dbtn("buys",i)}</div>`}).join("")||"<small>Soo iibin ma jirto.</small>"}</div>`;
 const list=`<div class="card"><h3>Keydka</h3>${S.stock.map((x,i)=>{const r=rest(x),c=r<=0?"bad":r<S.lim?"wa":"ok",t=r<=0?"DHAMMAATAY":r<S.lim?"DIGNIIN":"Wanaagsan";
 return `<div class="row"><div><b>${esc(x.item)}</b><small>Soo gashay ${x.in} · Baxday ${sold(x.item)} · Hartay <b>${r}</b>${x.price?` · Iib ${$$(x.price)} · Faaiido/xabbo ${$$(x.price-(x.cost||0))}`:""}</small></div><span class="chip ${c}">${t}</span>${dbtn("stock",i)}</div>`}).join("")||"<small>Keydku waa madhan yahay.</small>"}</div>`;
 return h+buy+list};
const _d=V.dash;V.dash=function(){const K=(h,x)=>`<div class="kpi"><h4>${h}</h4><div>${$$(x)}</div></div>`,sv=sum(S.stock,x=>Math.max(rest(x),0)*(x.cost||0)),sd=sum(S.buys||[],b=>b.t-b.p);
 return _d().replace('<div class="card"><h3>Qarashka qaybaha',()=>K("QIIMAHA KEYDKA (Stock Value)",sv)+K("DEYNTA IIBIYAYAASHA (Supplier Debt)",sd)+'<div class="card"><h3>Qarashka qaybaha')};
render();
})();
