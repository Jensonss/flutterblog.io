self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ah9:function ah9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aha:function aha(){},ahb:function ahb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ah8:function ah8(){},Qq:function Qq(d){this.a=d},vk:function vk(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pL$=d
_.c2$=e
_.aa$=f
_.a=null},Pn:function Pn(d,e,f,g,h,i,j){var _=this
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
aC6(d,e,f){var x=null,w=B.aE1(d,!0,!0,!0),v=d.length,u=!0
u=u?D.k2:x
return new A.tU(e,w,x,D.az,!1,x,x,u,!0,x,v,D.a1,D.iY,x,D.T,x)},
tU:function tU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
Qp:function Qp(d,e,f){this.f=d
this.d=e
this.a=f},
axH(d){var x=new A.PE($,!0,!1,new B.e2(B.b([],y.q),y.U),B.k(y._,y.N))
x.CW$=d
return x},
aUr(d,e){var x=new A.ff($,!0,!1,new B.e2(B.b([],e.i("t<hz<0>>")),e.i("e2<0>")),B.k(y._,y.N),e.i("ff<0>"))
x.CW$=d
return x},
G5:function G5(){},
PE:function PE(d,e,f,g,h){var _=this
_.CW$=d
_.cx$=e
_.cy$=f
_.db$=g
_.dx$=h},
ff:function ff(d,e,f,g,h,i){var _=this
_.CW$=d
_.cx$=e
_.cy$=f
_.db$=g
_.dx$=h
_.$ti=i},
Hx:function Hx(){}},D,B,C
A=a.updateHolder(c[8],A)
D=c[2]
B=c[0]
C=c[14]
A.ah9.prototype={
W7(d){var x=this.c
return d.tv(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+D.b.b6(B.b(["scrollOffset: "+B.j(x.a),"crossAxisOffset: "+B.j(x.b),"mainAxisExtent: "+B.j(x.c),"crossAxisExtent: "+B.j(x.d)],y.s),", ")+")"}}
A.aha.prototype={}
A.ahb.prototype={
Wf(d){var x=this.b
if(x>0)return Math.max(0,this.a*D.d.cY(d/x)-1)
return 0},
a59(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A6(d){var x=this,w=x.a,v=D.e.bF(d,w)
return new A.ah9(D.e.e_(d,w)*x.b,x.a59(v*x.c),x.d,x.e)},
QD(d){var x
if(d===0)return 0
x=this.b
return x*(D.e.e_(d-1,this.a)+1)-(x-this.d)}}
A.ah8.prototype={}
A.Qq.prototype={
I7(d){var x=this.a,w=Math.max(0,d.w-20*(x-1))/x,v=w/1
return new A.ahb(x,v+20,w+20,v,w,B.a0f(d.x))}}
A.vk.prototype={
j(d){return"crossAxisOffset="+B.j(this.w)+"; "+this.a_8(0)}}
A.Pn.prototype={
dl(d){if(!(d.e instanceof A.vk))d.e=new A.vk(!1,null,null)},
sWw(d){var x,w=this
if(w.fQ===d)return
if(B.E(d)===B.E(w.fQ))if(w.fQ.a===d.a)x=!1
else x=!0
else x=!0
if(x)w.W()
w.fQ=d},
pe(d){var x=d.e
x.toString
x=y.w.a(x).w
x.toString
return x},
bh(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.S.a(B.z.prototype.gY.call(a4)),a7=a4.aP
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.fQ.I7(a6)
t=u.b
s=t>1e-10?u.a*D.d.e_(w,t):0
r=isFinite(v)?u.Wf(v):a5
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
a4.n5(o,r==null?0:D.e.fJ(p-r,0,a4.cC$))}else a4.n5(0,0)
n=u.A6(s)
if(a4.S$==null)if(!a4.Ed(s,n.a)){m=u.QD(a7.gtB())
a4.id=B.im(a5,!1,a5,a5,m,0,0,m,a5)
a7.ne()
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
for(;j>=s;--j){h=u.A6(j)
p=h.c
g=a4.SU(a6.tv(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.S$
p.toString
p.fn(n.W7(a6))
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
p=B.p(a4).i("ad.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.A6(j)
e=h.c
d=a6.tv(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).aa$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.SS(d,i)
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
a1=a7.FI(a6,s,t,l,k)
a2=a4.i3(a6,Math.min(x,l),k)
a3=a4.n2(a6,l,k)
a4.id=B.im(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.ne()}}
A.tU.prototype={
Qi(d){return new A.Qp(this.p3,this.p4,null)}}
A.Qp.prototype={
aA(d){var x=new A.Pn(this.f,y.F.a(d),B.k(y.p,y.x),0,null,null,B.am())
x.aE()
return x},
aC(d,e){e.sWw(this.f)},
FH(d,e,f,g,h){var x
this.a_9(d,e,f,g,h)
x=this.f.I7(d).QD(this.d.gpE())
return x}}
A.G5.prototype={
f2(d,e){var x=this.db$,w=x.$ti.i("zt<1>")
return new B.mh(e,new B.zt(x.gaee(),x.gUO(),w),w.i("mh<bE.T,@>"))}}
A.PE.prototype={
j(d){return this.gl(this)?"true":"false"}}
A.ff.prototype={
qE(){var x,w
try{x=this.gl(this).qE()
return x}catch(w){if(y.L.b(B.ai(w)))throw B.d(B.bq(B.p(this).i("ff.T")).j(0)+" has not method [toJson]")
else throw w}}}
A.Hx.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.H,[A.ah9,A.aha,A.ah8])
v(A.ahb,A.aha)
v(A.Qq,A.ah8)
v(A.vk,B.ep)
v(A.Pn,B.kf)
v(A.tU,B.xT)
v(A.Qp,B.kn)
v(A.Hx,B.ik)
v(A.G5,A.Hx)
v(A.ff,A.G5)
v(A.PE,A.ff)
x(A.Hx,B.eN)})()
B.mq(b.typeUniverse,JSON.parse('{"vk":{"ep":[],"lU":[],"dL":["D"],"iU":[],"cn":[]},"Pn":{"kf":[],"co":[],"ad":["D","ep"],"z":[],"O":[],"an":[],"ad.1":"ep","ad.0":"D"},"tU":{"at":[],"i":[]},"Qp":{"kn":[],"au":[],"i":[]},"ff":{"ik":["1"],"eN":["1"],"eG":["1"],"eN.T":"1","eG.T":"1","ff.T":"1"},"G5":{"ik":["1"],"eN":["1"],"eG":["1"]},"PE":{"ff":["A"],"ik":["A"],"eN":["A"],"eG":["A"],"eN.T":"A","eG.T":"A","ff.T":"A"}}'))
B.H_(b.typeUniverse,JSON.parse('{"G5":1,"Hx":1}'))
var y=(function rtii(){var x=B.V
return{L:x("bV"),U:x("e2<A>"),_:x("e2<@>"),q:x("t<hz<A>>"),s:x("t<n>"),N:x("y<eq<@>>"),x:x("D"),S:x("lS"),w:x("vk"),F:x("qZ"),D:x("ep"),p:x("m")}})();(function constants(){C.fo=new B.aY(10,10)
C.co=new B.cr(C.fo,C.fo,C.fo,C.fo)
C.Cg=new B.u(4293457385)
C.C6=new B.u(4291356361)
C.C_=new B.u(4289058471)
C.BW=new B.u(4286695300)
C.BP=new B.u(4284922730)
C.BF=new B.u(4283215696)
C.BB=new B.u(4282622023)
C.By=new B.u(4281896508)
C.Bt=new B.u(4281236786)
C.Bo=new B.u(4279983648)
C.Jr=new B.bN([50,C.Cg,100,C.C6,200,C.C_,300,C.BW,400,C.BP,500,C.BF,600,C.BB,700,C.By,800,C.Bt,900,C.Bo],B.V("bN<m,u>"))
C.iG=new B.no(C.Jr,4283215696)})()}
$__dart_deferred_initializers__["bGYQdGhM9NwSEpHCqS2Be8JBFbk="] = $__dart_deferred_initializers__.current
