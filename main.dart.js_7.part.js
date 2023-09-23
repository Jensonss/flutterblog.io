self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ahj:function ahj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ahk:function ahk(){},ahl:function ahl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ahi:function ahi(){},Qw:function Qw(d){this.a=d},vs:function vs(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pQ$=d
_.c2$=e
_.aa$=f
_.a=null},Pt:function Pt(d,e,f,g,h,i,j){var _=this
_.fQ=d
_.aP=e
_.bg=f
_.d0=$
_.d5=!0
_.cC$=g
_.S$=h
_.cm$=i
_.id=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
aCl(d,e,f){var x=null,w=B.aEg(d,!0,!0,!0),v=d.length,u=!0
u=u?D.k3:x
return new A.tZ(e,w,x,D.az,!1,x,x,u,!0,x,v,D.a1,D.iY,x,D.T,x)},
tZ:function tZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.p3=d
_.p4=e
_.cx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.x=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.a=s},
Qv:function Qv(d,e,f){this.f=d
this.d=e
this.a=f},
axV(d){var x=new A.PK($,!0,!1,new B.e3(B.b([],y.q),y.U),B.k(y._,y.N))
x.CW$=d
return x},
aUK(d,e){var x=new A.fh($,!0,!1,new B.e3(B.b([],e.i("t<hB<0>>")),e.i("e3<0>")),B.k(y._,y.N),e.i("fh<0>"))
x.CW$=d
return x},
Gc:function Gc(){},
PK:function PK(d,e,f,g,h){var _=this
_.CW$=d
_.cx$=e
_.cy$=f
_.db$=g
_.dx$=h},
fh:function fh(d,e,f,g,h,i){var _=this
_.CW$=d
_.cx$=e
_.cy$=f
_.db$=g
_.dx$=h
_.$ti=i},
HE:function HE(){}},D,B,C
A=a.updateHolder(c[8],A)
D=c[2]
B=c[0]
C=c[14]
A.ahj.prototype={
W8(d){var x=this.c
return d.tA(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+D.b.b6(B.b(["scrollOffset: "+B.j(x.a),"crossAxisOffset: "+B.j(x.b),"mainAxisExtent: "+B.j(x.c),"crossAxisExtent: "+B.j(x.d)],y.s),", ")+")"}}
A.ahk.prototype={}
A.ahl.prototype={
Wg(d){var x=this.b
if(x>0)return Math.max(0,this.a*D.d.cY(d/x)-1)
return 0},
a5e(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ac(d){var x=this,w=x.a,v=D.e.bF(d,w)
return new A.ahj(D.e.e_(d,w)*x.b,x.a5e(v*x.c),x.d,x.e)},
QG(d){var x
if(d===0)return 0
x=this.b
return x*(D.e.e_(d-1,this.a)+1)-(x-this.d)}}
A.ahi.prototype={}
A.Qw.prototype={
Ib(d){var x=this.a,w=Math.max(0,d.w-20*(x-1))/x,v=w/1
return new A.ahl(x,v+20,w+20,v,w,B.a0l(d.x))}}
A.vs.prototype={
j(d){return"crossAxisOffset="+B.j(this.w)+"; "+this.a_c(0)}}
A.Pt.prototype={
dl(d){if(!(d.e instanceof A.vs))d.e=new A.vs(!1,null,null)},
sWA(d){var x,w=this
if(w.fQ===d)return
if(B.E(d)===B.E(w.fQ))if(w.fQ.a===d.a)x=!1
else x=!0
else x=!0
if(x)w.W()
w.fQ=d},
pj(d){var x=d.e
x.toString
x=y.w.a(x).w
x.toString
return x},
bh(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.S.a(B.z.prototype.gY.call(a4)),a7=a4.aP
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.fQ.Ib(a6)
t=u.b
s=t>1e-10?u.a*D.d.e_(w,t):0
r=isFinite(v)?u.Wg(v):a5
t=a4.S$
if(t!=null){t=t.e
t.toString
q=y.D
t=q.a(t).b
t.toString
p=a4.cm$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=D.e.fJ(s-t,0,a4.cC$)
a4.n8(o,r==null?0:D.e.fJ(p-r,0,a4.cC$))}else a4.n8(0,0)
n=u.Ac(s)
if(a4.S$==null)if(!a4.Ei(s,n.a)){m=u.QG(a7.gtG())
a4.id=B.ip(a5,!1,a5,a5,m,0,0,m,a5)
a7.nh()
return}l=n.a
k=l+n.c
t=a4.S$
t.toString
t=t.e
t.toString
q=y.D
t=q.a(t).b
t.toString
j=t-1
t=y.w
i=a5
for(;j>=s;--j){h=u.Ac(j)
p=h.c
g=a4.SV(a6.tA(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.S$
p.toString
p.fn(n.W8(a6))
i=a4.S$
p=i.e
p.toString
t.a(p)
p.a=l
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.p(a4).i("ae.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Ac(j)
e=h.c
d=a6.tA(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).aa$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.ST(d,i)
if(g==null)break}else g.fn(d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
k=Math.max(k,a0+e);++j
i=g}t=a4.cm$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a7.FO(a6,s,t,l,k)
a2=a4.i3(a6,Math.min(x,l),k)
a3=a4.n5(a6,l,k)
a4.id=B.ip(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.nh()}}
A.tZ.prototype={
Ql(d){return new A.Qv(this.p3,this.p4,null)}}
A.Qv.prototype={
aA(d){var x=new A.Pt(this.f,y.F.a(d),B.k(y.p,y.x),0,null,null,B.an())
x.aE()
return x},
aC(d,e){e.sWA(this.f)},
FN(d,e,f,g,h){var x
this.a_d(d,e,f,g,h)
x=this.f.Ib(d).QG(this.d.gpJ())
return x}}
A.Gc.prototype={
f2(d,e){var x=this.db$,w=x.$ti.i("zA<1>")
return new B.mj(e,new B.zA(x.gael(),x.gUP(),w),w.i("mj<bF.T,@>"))}}
A.PK.prototype={
j(d){return this.gl(this)?"true":"false"}}
A.fh.prototype={
qK(){var x,w
try{x=this.gl(this).qK()
return x}catch(w){if(y.L.b(B.aj(w)))throw B.d(B.br(B.p(this).i("fh.T")).j(0)+" has not method [toJson]")
else throw w}}}
A.HE.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.G,[A.ahj,A.ahk,A.ahi])
v(A.ahl,A.ahk)
v(A.Qw,A.ahi)
v(A.vs,B.er)
v(A.Pt,B.kh)
v(A.tZ,B.y_)
v(A.Qv,B.kp)
v(A.HE,B.im)
v(A.Gc,A.HE)
v(A.fh,A.Gc)
v(A.PK,A.fh)
x(A.HE,B.eR)})()
B.ms(b.typeUniverse,JSON.parse('{"vs":{"er":[],"lW":[],"dM":["D"],"iW":[],"cp":[]},"Pt":{"kh":[],"cq":[],"ae":["D","er"],"z":[],"O":[],"ao":[],"ae.1":"er","ae.0":"D"},"tZ":{"au":[],"i":[]},"Qv":{"kp":[],"av":[],"i":[]},"fh":{"im":["1"],"eR":["1"],"eK":["1"],"eR.T":"1","eK.T":"1","fh.T":"1"},"Gc":{"im":["1"],"eR":["1"],"eK":["1"]},"PK":{"fh":["A"],"im":["A"],"eR":["A"],"eK":["A"],"eR.T":"A","eK.T":"A","fh.T":"A"}}'))
B.H6(b.typeUniverse,JSON.parse('{"Gc":1,"HE":1}'))
var y=(function rtii(){var x=B.V
return{L:x("bW"),U:x("e3<A>"),_:x("e3<@>"),q:x("t<hB<A>>"),s:x("t<n>"),N:x("y<es<@>>"),x:x("D"),S:x("lU"),w:x("vs"),F:x("r2"),D:x("er"),p:x("m")}})();(function constants(){C.fo=new B.aZ(10,10)
C.co=new B.ct(C.fo,C.fo,C.fo,C.fo)
C.Ci=new B.u(4293457385)
C.C8=new B.u(4291356361)
C.C1=new B.u(4289058471)
C.BY=new B.u(4286695300)
C.BR=new B.u(4284922730)
C.BH=new B.u(4283215696)
C.BD=new B.u(4282622023)
C.BA=new B.u(4281896508)
C.Bv=new B.u(4281236786)
C.Bq=new B.u(4279983648)
C.Jt=new B.bO([50,C.Ci,100,C.C8,200,C.C1,300,C.BY,400,C.BR,500,C.BH,600,C.BD,700,C.BA,800,C.Bv,900,C.Bq],B.V("bO<m,u>"))
C.iG=new B.ns(C.Jt,4283215696)})()}
$__dart_deferred_initializers__["ZlAo+LhnMsemyICaApgx3XWvw1M="] = $__dart_deferred_initializers__.current
