self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ahp:function ahp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ahq:function ahq(){},ahr:function ahr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aho:function aho(){},QB:function QB(d){this.a=d},vn:function vn(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pJ$=d
_.c3$=e
_.aa$=f
_.a=null},Py:function Py(d,e,f,g,h,i,j){var _=this
_.fQ=d
_.aO=e
_.bf=f
_.d0=$
_.d5=!0
_.cE$=g
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
aCo(d,e,f){var x=null,w=B.aEj(d,!0,!0,!0),v=d.length,u=!0
u=u?D.k_:x
return new A.tY(e,w,x,D.aA,!1,x,x,u,!0,x,v,D.a2,D.iX,x,D.R,x)},
tY:function tY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
QA:function QA(d,e,f){this.f=d
this.d=e
this.a=f},
ay_(d){var x=new A.PP($,!0,!1,new B.e4(B.b([],y.q),y.U),B.k(y._,y.N))
x.CW$=d
return x},
aUG(d,e){var x=new A.fh($,!0,!1,new B.e4(B.b([],e.i("t<hA<0>>")),e.i("e4<0>")),B.k(y._,y.N),e.i("fh<0>"))
x.CW$=d
return x},
Gc:function Gc(){},
PP:function PP(d,e,f,g,h){var _=this
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
HG:function HG(){}},D,B,C
A=a.updateHolder(c[8],A)
D=c[2]
B=c[0]
C=c[14]
A.ahp.prototype={
Wg(d){var x=this.c
return d.tw(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+D.b.b6(B.b(["scrollOffset: "+B.j(x.a),"crossAxisOffset: "+B.j(x.b),"mainAxisExtent: "+B.j(x.c),"crossAxisExtent: "+B.j(x.d)],y.s),", ")+")"}}
A.ahq.prototype={}
A.ahr.prototype={
Wo(d){var x=this.b
if(x>0)return Math.max(0,this.a*D.d.cY(d/x)-1)
return 0},
a5i(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ab(d){var x=this,w=x.a,v=D.e.bF(d,w)
return new A.ahp(D.e.e_(d,w)*x.b,x.a5i(v*x.c),x.d,x.e)},
QI(d){var x
if(d===0)return 0
x=this.b
return x*(D.e.e_(d-1,this.a)+1)-(x-this.d)}}
A.aho.prototype={}
A.QB.prototype={
Ib(d){var x=this.a,w=Math.max(0,d.w-20*(x-1))/x,v=w/1
return new A.ahr(x,v+20,w+20,v,w,B.a0t(d.x))}}
A.vn.prototype={
j(d){return"crossAxisOffset="+B.j(this.w)+"; "+this.a_f(0)}}
A.Py.prototype={
dm(d){if(!(d.e instanceof A.vn))d.e=new A.vn(!1,null,null)},
sWF(d){var x,w=this
if(w.fQ===d)return
if(B.E(d)===B.E(w.fQ))if(w.fQ.a===d.a)x=!1
else x=!0
else x=!0
if(x)w.W()
w.fQ=d},
pc(d){var x=d.e
x.toString
x=y.w.a(x).w
x.toString
return x},
bg(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.S.a(B.A.prototype.gY.call(a4)),a7=a4.aO
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.fQ.Ib(a6)
t=u.b
s=t>1e-10?u.a*D.d.e_(w,t):0
r=isFinite(v)?u.Wo(v):a5
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
o=D.e.fK(s-t,0,a4.cE$)
a4.n6(o,r==null?0:D.e.fK(p-r,0,a4.cE$))}else a4.n6(0,0)
n=u.Ab(s)
if(a4.S$==null)if(!a4.Ej(s,n.a)){m=u.QI(a7.gtC())
a4.id=B.ip(a5,!1,a5,a5,m,0,0,m,a5)
a7.nf()
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
for(;j>=s;--j){h=u.Ab(j)
p=h.c
g=a4.T0(a6.tw(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.S$
p.toString
p.fo(n.Wg(a6))
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
h=u.Ab(j)
e=h.c
d=a6.tw(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).aa$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.SZ(d,i)
if(g==null)break}else g.fo(d)
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
a1=a7.FN(a6,s,t,l,k)
a2=a4.i6(a6,Math.min(x,l),k)
a3=a4.n3(a6,l,k)
a4.id=B.ip(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.nf()}}
A.tY.prototype={
Qn(d){return new A.QA(this.p3,this.p4,null)}}
A.QA.prototype={
aA(d){var x=new A.Py(this.f,y.F.a(d),B.k(y.p,y.x),0,null,null,B.am())
x.aD()
return x},
aB(d,e){e.sWF(this.f)},
FM(d,e,f,g,h){var x
this.a_g(d,e,f,g,h)
x=this.f.Ib(d).QI(this.d.gpC())
return x}}
A.Gc.prototype={
f3(d,e){var x=this.db$,w=x.$ti.i("zw<1>")
return new B.mi(e,new B.zw(x.gaep(),x.gUW(),w),w.i("mi<bE.T,@>"))}}
A.PP.prototype={
j(d){return this.gl(this)?"true":"false"}}
A.fh.prototype={
l1(){var x,w
try{x=this.gl(this).l1()
return x}catch(w){if(y.L.b(B.ah(w)))throw B.d(B.bq(B.p(this).i("fh.T")).j(0)+" has not method [toJson]")
else throw w}}}
A.HG.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.H,[A.ahp,A.ahq,A.aho])
v(A.ahr,A.ahq)
v(A.QB,A.aho)
v(A.vn,B.er)
v(A.Py,B.kg)
v(A.tY,B.xV)
v(A.QA,B.kn)
v(A.HG,B.im)
v(A.Gc,A.HG)
v(A.fh,A.Gc)
v(A.PP,A.fh)
x(A.HG,B.eP)})()
B.mr(b.typeUniverse,JSON.parse('{"vn":{"er":[],"lU":[],"dL":["D"],"iW":[],"cn":[]},"Py":{"kg":[],"co":[],"ad":["D","er"],"A":[],"T":[],"an":[],"ad.1":"er","ad.0":"D"},"tY":{"as":[],"i":[]},"QA":{"kn":[],"au":[],"i":[]},"fh":{"im":["1"],"eP":["1"],"eI":["1"],"eP.T":"1","eI.T":"1","fh.T":"1"},"Gc":{"im":["1"],"eP":["1"],"eI":["1"]},"PP":{"fh":["z"],"im":["z"],"eP":["z"],"eI":["z"],"eP.T":"z","eI.T":"z","fh.T":"z"}}'))
B.H6(b.typeUniverse,JSON.parse('{"Gc":1,"HG":1}'))
var y=(function rtii(){var x=B.V
return{L:x("bV"),U:x("e4<z>"),_:x("e4<@>"),q:x("t<hA<z>>"),s:x("t<m>"),N:x("y<es<@>>"),x:x("D"),S:x("lS"),w:x("vn"),F:x("r_"),D:x("er"),p:x("n")}})();(function constants(){C.fn=new B.aY(10,10)
C.cn=new B.cs(C.fn,C.fn,C.fn,C.fn)
C.Cb=new B.u(4293457385)
C.C1=new B.u(4291356361)
C.BV=new B.u(4289058471)
C.BR=new B.u(4286695300)
C.BK=new B.u(4284922730)
C.BA=new B.u(4283215696)
C.Bw=new B.u(4282622023)
C.Bt=new B.u(4281896508)
C.Bo=new B.u(4281236786)
C.Bj=new B.u(4279983648)
C.Jk=new B.bN([50,C.Cb,100,C.C1,200,C.BV,300,C.BR,400,C.BK,500,C.BA,600,C.Bw,700,C.Bt,800,C.Bo,900,C.Bj],B.V("bN<n,u>"))
C.iF=new B.nq(C.Jk,4283215696)})()}
$__dart_deferred_initializers__["ao9JWcVwD+wCrMn23RfKq0L7BKU="] = $__dart_deferred_initializers__.current
