self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aw1(d){return new A.Iu(d,null,null)},
Iu:function Iu(d,e,f){this.a=d
this.b=e
this.c=f},
aCl(d,e,f,g){var w,v
if(x.Q.b(d))w=B.ca(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.eX(x.R.a(d),!0,x.S)
v=new A.a9j(w,g,g,e)
v.e=f==null?w.length:f
return v},
a9k:function a9k(){},
a9j:function a9j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
acf:function acf(){},
ace:function ace(d){this.a=0
this.c=d},
Mk(d){var w=new A.a8o()
w.a0V(d)
return w},
a8o:function a8o(){this.a=$
this.b=0
this.c=2147483647},
a94:function a94(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
a9n(d){var w,v,u,t,s,r
if(d<0){d=-d
w=!0}else w=!1
v=C.e.bU(d,17592186044416)
d-=v*17592186044416
u=C.e.bU(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.a9o(0,0,0,t,s,r):new A.dD(t,s,r)},
aCm(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dD((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
ax_(d,e){return new A.dD(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
zX(d){if(d instanceof A.dD)return d
else if(B.jn(d))return A.a9n(d)
throw B.d(B.fs(d,"other","not an int, Int32 or Int64"))},
aSh(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.Gd[d]
t=""
s=""
r=""
while(!0){if(!!(w===0&&v===0))break
q=C.e.e_(w,u)
v+=w-q*u<<10>>>0
p=C.e.e_(v,u)
g+=v-p*u<<10>>>0
o=C.e.e_(g,u)
f+=g-o*u<<10>>>0
n=C.e.e_(f,u)
e+=f-n*u<<10>>>0
m=C.e.e_(e,u)
l=C.c.br(C.e.fZ(u+(e-m*u),d),1)
r=s
s=t
t=l
v=p
w=q
g=o
f=n
e=m}k=(g<<20>>>0)+(f<<10>>>0)+e
return h+(k===0?"":C.e.fZ(k,d))+t+s+r},
a9o(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cA(w,22)&1)
return new A.dD(w&4194303,v&4194303,f-i-(C.e.cA(v,22)&1)&1048575)},
zY(d,e){var w=C.e.x8(d,e)
return w},
dD:function dD(d,e,f){this.a=d
this.b=e
this.c=f},
auX:function auX(){},
q0:function q0(d){this.a=d},
Vm:function Vm(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aop:function aop(d,e){this.a=d
this.b=e},
aoq:function aoq(d,e){this.a=d
this.b=e},
aou:function aou(d){this.a=d},
aot:function aot(d){this.a=d},
aos:function aos(d){this.a=d},
aor:function aor(d){this.a=d},
nX:function nX(d,e,f){this.c=d
this.d=e
this.a=f},
YB:function YB(d,e,f){var _=this
_.d=$
_.e5$=d
_.bw$=e
_.a=null
_.b=f
_.c=null},
arl:function arl(d){this.a=d},
HC:function HC(){},
b_m(d,e,f){var w,v,u,t,s,r,q,p,o=$.ap().cb()
for(w=d.QE(),w=w.ga_(w),v=e.a,u=f.a;w.t();){t=w.gD(w)
t.gp(t)
for(s=u,r=!0;s<t.gp(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.xB(0,t.RT(s,s+p),C.h)
s+=p
r=!r}}return o},
alP:function alP(d,e){this.a=d
this.b=e},
Ks:function Ks(d){this.a=d},
Jb:function Jb(d){this.a=d
this.b=0},
hj(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a21((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
ayR(c1,c2,c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null
B.hi(c4,c0)
for(w=x.S,v=x.T,u=x.z,t=c1.c,s=c3.gal2(),r=c3.gal0(),q=c3.gakQ(),p=c3.gakO(),o=c3.gal8(),n=c3.gal7(),m=c3.gal5(),l=c3.gal3(),k=c3.gakX(),j=c3.gakV(),i=c3.gakL(),h=c3.gakS(),g=c3.gakJ(),f=c3.a;!0;){e=c3.Uz()
if(e===0)return
d=e&7
a0=C.e.cA(e,3)
a1=t.h(0,a0)
if(a1==null)a1=c0
if(a1==null||!A.aZu(a1.f,d)){if(!c2.rB().TF(e,c3))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c2.ei(c1,a1,c3.f9(!0)!==0)
break
case 32:c2.ei(c1,a1,new Uint8Array(B.fo(c3.v2())))
break
case 64:a3=c3.v2()
c2.ei(c1,a1,C.jx.el(a3))
break
case 256:a3=c3.b+=4
if(a3>c3.c)B.W(A.jS())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getFloat32(0,!0))
break
case 128:a3=c3.b+=8
if(a3>c3.c)B.W(A.jS())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c2.ei(c1,a1,a3.getFloat64(0,!0))
break
case 512:a6=c3.f9(!0)
a7=t.h(0,a0)
a8=a7==null?c0:a7.z
a3=(a8==null&&!0?c0.gamm():a8).$1(a6)
if(a3==null){a9=c2.rB()
a3=A.a9n(a6)
if(a9.b)A.hW("UnknownFieldSet","mergeVarintField")
C.b.C(a9.lj(a0).b,a3)}else c2.ei(c1,a1,a3)
break
case 1024:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAB():b0).$0()
b1=c2.wk(a1)
if(b1!=null)a3.kO(b1)
c3.Uu(a0,a3,c4)
c2.ei(c1,a1,a3)
break
case 2048:c2.ei(c1,a1,c3.f9(!0))
break
case 4096:c2.ei(c1,a1,c3.mM())
break
case 8192:c2.ei(c1,a1,A.aB7(c3.f9(!1)))
break
case 16384:b2=c3.mM()
c2.ei(c1,a1,(b2.VR(0,1).k(0,1)?A.a9o(0,0,0,b2.a,b2.b,b2.c):b2).IT(0,1))
break
case 32768:c2.ei(c1,a1,c3.f9(!1))
break
case 65536:c2.ei(c1,a1,c3.mM())
break
case 131072:a3=c3.b+=4
if(a3>c3.c)B.W(A.jS())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getUint32(0,!0))
break
case 262144:a3=c3.b+=8
if(a3>c3.c)B.W(A.jS())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ei(c1,a1,A.aCm(b4))
break
case 524288:a3=c3.b+=4
if(a3>c3.c)B.W(A.jS())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c3.b+=8
if(a3>c3.c)B.W(A.jS())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ei(c1,a1,A.aCm(b4))
break
case 2097152:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAB():b0).$0()
b1=c2.wk(a1)
if(b1!=null)a3.kO(b1)
c3.Uw(a3,c4)
c2.ei(c1,a1,a3)
break
case 18:A.iy(c1,c2,c3,d,a1,g)
break
case 34:J.dz(c2.mC(c1,a1,u),new Uint8Array(B.fo(c3.v2())))
break
case 66:a3=c2.mC(c1,a1,u)
a4=c3.v2()
J.dz(a3,C.jx.el(a4))
break
case 258:A.iy(c1,c2,c3,d,a1,h)
break
case 130:A.iy(c1,c2,c3,d,a1,i)
break
case 514:A.aZf(c1,c2,c3,d,a1,a0,c4)
break
case 1026:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAB():b0).$0()
c3.Uu(a0,a3,c4)
J.dz(c2.mC(c1,a1,u),a3)
break
case 2050:A.iy(c1,c2,c3,d,a1,j)
break
case 4098:A.iy(c1,c2,c3,d,a1,k)
break
case 8194:A.iy(c1,c2,c3,d,a1,l)
break
case 16386:A.iy(c1,c2,c3,d,a1,m)
break
case 32770:A.iy(c1,c2,c3,d,a1,n)
break
case 65538:A.iy(c1,c2,c3,d,a1,o)
break
case 131074:A.iy(c1,c2,c3,d,a1,p)
break
case 262146:A.iy(c1,c2,c3,d,a1,q)
break
case 524290:A.iy(c1,c2,c3,d,a1,r)
break
case 1048578:A.iy(c1,c2,c3,d,a1,s)
break
case 2097154:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAB():b0).$0()
c3.Uw(a3,c4)
J.dz(c2.mC(c1,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c2.LF(c1,a1,u,u)
b6=c3.f9(!0)
b7=c3.c
c3.c=c3.b+b6
a4=b5.b
a5=A.aEP(a4.length)
A.ayR(b5,new A.U4(c0,c0,a5,b5.f.a===0?c0:B.k(w,w)),c3,c4)
if(c3.d!==0)B.W(A.My())
c3.c=b7
b8=J.ag(a5)
b9=b8.h(a5,0)
if(b9==null)b9=a4[0].r.$0()
b2=b8.h(a5,1)
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b9,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
iy(d,e,f,g,h,i){A.aG7(d,e,f,g,h,new A.atO(i))},
aZf(d,e,f,g,h,i,j){A.aG7(d,e,f,g,h,new A.atM(f,d,i,j,e))},
aG7(d,e,f,g,h,i){var w,v,u,t=e.mC(d,h,x.z)
if(g===2){w=f.f9(!0)
if(w<0)B.W(B.bM(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.W(A.jS())
f.c=v
new A.atN(f,i,t).$0()
f.c=u}else i.$1(t)},
aB7(d){if((d&1)===1)return-C.e.cA(d,1)-1
else return C.e.cA(d,1)},
My(){return new A.lq("Protocol message end-group tag did not match expected tag.")},
aCo(){return new A.lq("CodedBufferReader encountered a malformed varint.")},
ax0(){return new A.lq("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
jS(){return new A.lq("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
aYF(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eQ(e))return"not type bool"
return v
case 32:if(!x.j.b(e))return"not List"
return v
case 64:if(typeof e!="string")return"not type String"
return v
case 256:if(typeof e!="number")return u
if(!isNaN(e))if(!(e==1/0||e==-1/0))w=-34028234663852886e22<=e&&e<=34028234663852886e22
else w=!0
else w=!0
if(!w)return"out of range for float"
return v
case 128:if(typeof e!="number")return u
return v
case 512:if(!(e instanceof A.OM))return"not type ProtobufEnum"
return v
case 2048:case 8192:case 524288:if(!B.jn(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jn(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dD))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cU))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
aXS(d){if(d==null)throw B.d(B.bM("Can't add a null to a repeated field",null))},
aRt(d,e,f,g,h,i,j,k,l,m,n){return new A.cY(d,e,f,g,A.aBT(g,i),l,m,null,n.i("cY<0>"))},
aRu(d,e,f,g,h,i,j,k,l,m,n){var w=new A.cY(d,e,f,g,new A.a5J(h,n),i,m,h,n.i("cY<0>"))
w.a0T(d,e,f,g,h,i,j,k,l,m,n)
return w},
aBT(d,e){if(e==null)return A.aTq(d)
if(x.O.b(e))return e
return new A.a5L(e)},
aSJ(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aBT(g,new A.aaI(h,i,j,n,o))
B.hi(d,"name")
B.hi(e,"tagNumber")
return new A.q3(h,i,j,d,e,f,g,w,null,null,null,n.i("@<0>").ai(o).i("q3<1,2>"))},
hW(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
aWx(d,e,f){var w,v=A.aEP(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.U4(d,f,v,w)},
aEP(d){if(d===0)return $.aWy
return B.aR(d,null,!1,x.z)},
aEO(d,e,f){var w,v
if(x.j.b(f)&&J.f5(f))return d
if(x.f.b(f)&&J.f5(f))return d
d=A.mf(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.mf(d,A.ayh(f))
else if(v!==512)d=A.mf(d,J.x(f))
else d=(w&2)!==0?A.mf(d,A.ayh(J.aOz(f,new A.amq()))):A.mf(d,f.a)
return d},
aTq(d){switch(d){case 16:case 17:return A.b0z()
case 32:case 33:return A.b0A()
case 64:case 65:return A.b0D()
case 256:case 257:case 128:case 129:return A.b0B()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b0C()
default:return null}},
aTp(){return""},
aTm(){return B.b([],x.t)},
aTl(){return!1},
aTo(){return 0},
aTn(){return 0},
aRR(d,e){var w,v=$.aC0.h(0,d)
if(v!=null)return v
w=new A.Gs(d,e.i("Gs<0>"))
$.aC0.m(0,d,w)
return w},
aRQ(d,e){var w=e.a(d.gbx().Q.$0())
w.kO(d)
return w},
aD8(d,e){var w=B.b([],e.i("t<0>"))
B.hi(d,"check")
return new A.uF(w,d,e.i("uF<0>"))},
axy(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
aW6(){return new A.kv(B.k(x.S,x.k))},
ayE(d,e){var w
if(d instanceof A.cU)return d.k(0,e)
if(e instanceof A.cU)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.x3(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.ayy(d,e)
return J.f(d,e)},
x3(d,e){var w,v=J.ag(d),u=J.ag(e)
if(v.gp(d)!==u.gp(e))return!1
for(w=0;w<v.gp(d);++w)if(!A.ayE(v.h(d,w),u.h(e,w)))return!1
return!0},
ayy(d,e){var w=J.ag(d)
if(w.gp(d)!==J.aZ(e))return!1
return J.aOi(w.gb7(d),new A.asG(d,e))},
aGj(d,e){var w=B.eX(d,!0,e)
C.b.hI(w)
return w},
mf(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aET(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
ayh(d){return A.aET(J.aOk(d,0,new A.any()))},
aZu(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a21:function a21(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a22:function a22(){},
atO:function atO(d){this.a=d},
atM:function atM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
atN:function atN(d,e,f){this.a=d
this.b=e
this.c=f},
K_:function K_(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lq:function lq(d){this.a=d},
aml:function aml(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
amg:function amg(){},
cY:function cY(d,e,f,g,h,i,j,k,l){var _=this
_.a=null
_.b=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.z=j
_.Q=k
_.$ti=l},
a5J:function a5J(d,e){this.a=d
this.b=e},
a5L:function a5L(d){this.a=d},
a5K:function a5K(){},
q3:function q3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.as=d
_.at=e
_.ay=f
_.a=null
_.b=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.z=m
_.Q=n
_.$ti=o},
aaI:function aaI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U4:function U4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
amq:function amq(){},
ams:function ams(d,e){this.a=d
this.b=e},
amt:function amt(d){this.a=d},
amr:function amr(d,e){this.a=d
this.b=e},
cU:function cU(){},
Gs:function Gs(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
arc:function arc(d){this.a=d},
NO:function NO(d){this.a=d},
pq:function pq(d,e,f){this.a=d
this.b=e
this.$ti=f},
uF:function uF(d,e,f){this.a=d
this.b=e
this.$ti=f},
nA:function nA(){},
fe:function fe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
acE:function acE(d){this.a=d},
OM:function OM(){},
kv:function kv(d){this.a=d
this.b=!1},
aje:function aje(){},
ajf:function ajf(d){this.a=d},
ri:function ri(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
asG:function asG(d,e){this.a=d
this.b=e},
any:function any(){},
afa:function afa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afb:function afb(){},
afg:function afg(d){this.a=d},
aff:function aff(){},
afe:function afe(d){this.a=d},
afc:function afc(d,e,f){this.a=d
this.b=e
this.c=f},
afd:function afd(d){this.a=d},
XC:function XC(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aqL:function aqL(){},
aqM:function aqM(d,e,f){this.a=d
this.b=e
this.c=f},
Cg:function Cg(d,e){this.c=d
this.a=e},
PI:function PI(d,e,f,g,h,i,j,k,l,m){var _=this
_.ay=null
_.CW=_.ch=!1
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=_.r=null
_.x=$
_.y=null
_.z=j
_.Q=$
_.as=k
_.cv$=l
_.bE$=m},
G8:function G8(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aqK:function aqK(d){this.a=d},
aT0(){var w=new A.qb()
w.hb()
return w},
aVf(){var w=new A.lW()
w.hb()
return w},
aP8(){var w=new A.oQ()
w.hb()
return w},
aSs(){var w=new A.pR()
w.hb()
return w},
aW_(){var w=new A.o4()
w.hb()
return w},
aUW(){var w=new A.qU()
w.hb()
return w},
aUV(){var w=new A.qT()
w.hb()
return w},
aUU(){var w=new A.qS()
w.hb()
return w},
aUZ(){var w=new A.qW()
w.hb()
return w},
aV_(){var w=new A.qV()
w.hb()
return w},
aV1(){var w=new A.qR()
w.hb()
return w},
aRI(){var w=new A.lg()
w.hb()
return w},
aCP(){var w=x.N,v=x.I
w=new A.lB(new A.afa(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.Z))
w.hb()
return w},
qb:function qb(){this.a=null},
lW:function lW(){this.a=null},
oQ:function oQ(){this.a=null},
pR:function pR(){this.a=null},
o4:function o4(){this.a=null},
qU:function qU(){this.a=null},
qT:function qT(){this.a=null},
qS:function qS(){this.a=null},
qW:function qW(){this.a=null},
qV:function qV(){this.a=null},
qR:function qR(){this.a=null},
lg:function lg(){this.a=this.b=null},
lB:function lB(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
abx:function abx(){},
aV0(d){return $.aIV().h(0,d)},
aUX(d){return $.aIR().h(0,d)},
aUY(d){return $.aIS().h(0,d)},
ja:function ja(d,e){this.a=d
this.b=e},
kk:function kk(d,e){this.a=d
this.b=e},
kl:function kl(d,e){this.a=d
this.b=e},
a0j(d){var w=0,v=B.T(x.I),u,t
var $async$a0j=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:$.h2.toString
w=4
return B.N($.ap().jb(d,!1,null,null),$async$a0j)
case 4:w=3
return B.N(f.hF(),$async$a0j)
case 3:t=f
u=t.gfm(t)
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$a0j,v)}},B,C,J,D,E,F,G
A=a.updateHolder(c[5],A)
B=c[0]
C=c[2]
J=c[1]
D=c[18]
E=c[10]
F=c[12]
G=c[17]
A.Iu.prototype={}
A.a9k.prototype={}
A.a9j.prototype={
gp(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gaj6(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
h(d,e){return this.a[this.b+e]},
Ut(){return this.a[this.b++]},
zE(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.acf.prototype={}
A.ace.prototype={
I_(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.C7(v-t)
C.F.ck(u,w,v,d)
s.a+=r},
amw(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.C7(v-t)}C.F.b_(u,w,w+d.gp(d),d.a,d.b)
s.a=s.a+d.gp(d)},
J5(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.ca(w.c.buffer,d,e-d)},
J4(d){return this.J5(d,null)},
C7(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.F.ck(t,0,u,v)
this.c=t},
a4n(){return this.C7(null)},
gp(d){return this.a}}
A.a8o.prototype={
a0V(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.l8(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.a94.prototype={
a81(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.aaf())break}},
aaf(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gaj6())return!1
w=v.hS(3)
switch(C.e.cA(w,1)){case 0:if(v.aao()===-1)return!1
break
case 1:if(v.Le(v.r,v.w)===-1)return!1
break
case 2:if(v.aai()===-1)return!1
break
default:return!1}return(w&1)===0},
hS(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&B.c()
u=w.b
t=w.e
t===$&&B.c()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|C.e.l8(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.t0(1,d)
s.d=C.e.t1(w,d)
s.e=v-d
return(w&u-1)>>>0},
Dj(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.c()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&B.c()
t=v.b
s=v.e
s===$&&B.c()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|C.e.l8(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.l8(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.t1(v,q)
p.e=u-q
return r&65535},
aao(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.hS(16)
v=p.hS(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&B.c()
if(w>v.gp(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&B.c()
r=s-(t-u)}else r=w
q=A.aCl(v.a,v.d,r,t)
v.b=v.b+q.gp(q)
p.c.amw(q)
return 0},
aai(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.hS(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.hS(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.hS(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.hS(3)
if(s===-1)return-1
u[D.Gt[t]]=s}r=A.Mk(u)
q=l+w
p=new Uint8Array(q)
o=B.ca(p.buffer,0,l)
n=B.ca(p.buffer,l,w)
if(m.a3y(q,r,p)===-1)return-1
return m.Le(A.Mk(o),A.Mk(n))},
Le(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Dj(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a4n()
w.c[w.a++]=v&255
continue}u=v-257
t=D.GG[u]+p.hS(D.FY[u])
s=p.Dj(e)
if(s<0||s>29)return-1
r=D.G0[s]+p.hS(D.Gv[s])
for(q=-r;t>r;){w.I_(w.J4(q))
t-=r}if(t===r)w.I_(w.J4(q))
else w.I_(w.J5(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a3y(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.Dj(e)
if(u===-1)return-1
switch(u){case 16:t=q.hS(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.hS(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.hS(7)
if(t===-1)return-1
t+=11
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
default:if(u<0||u>15)return-1
r=v+1
f[v]=u
v=r
w=u
break}}return 0}}
A.dD.prototype={
V(d,e){var w=A.zX(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dD(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
a7(d,e){var w=A.zX(e)
return A.a9o(this.a,this.b,this.c,w.a,w.b,w.c)},
aj(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.zX(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
h=this.c
w=f>>>17|(h&255)<<5
f=i.a
v=f&8191
u=i.b
t=f>>>13|(u&15)<<9
s=u>>>4&8191
f=i.c
r=u>>>17|(f&255)<<5
q=f>>>8&4095
p=g*v
o=e*v
n=d*v
m=w*v
l=(h>>>8&4095)*v
if(t!==0){o+=g*t
n+=e*t
m+=d*t
l+=w*t}if(s!==0){n+=g*s
m+=e*s
l+=d*s}if(r!==0){m+=g*r
l+=e*r}if(q!==0)l+=g*q
k=(p&4194303)+((o&511)<<13)
j=(p>>>22)+(o>>>9)+((n&262143)<<4)+((m&31)<<17)+(k>>>22)
return new A.dD(k&4194303,j&4194303,(n>>>18)+(m>>>5)+((l&4095)<<8)+(j>>>22)&1048575)},
VR(d,e){var w=A.zX(e)
return new A.dD(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
IT(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.ER:D.EQ
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.zY(w,e)
if(v)u|=~C.e.t1(o,e)&1048575
t=p.b
s=22-e
r=A.zY(t,e)|C.e.l8(w,s)
q=A.zY(p.a,e)|C.e.l8(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.zY(w,t)
if(v)r|=~C.e.x8(n,t)&4194303
q=A.zY(p.b,t)|C.e.l8(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.zY(w,t)
if(v)q|=~C.e.x8(n,t)&4194303}return new A.dD(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dD)w=e
else if(B.jn(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.a9n(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
b9(d,e){return this.a2S(e)},
a2S(d){var w=A.zX(d),v=this.c,u=v>>>19,t=w.c
if(u!==t>>>19)return u===0?1:-1
if(v>t)return 1
else if(v<t)return-1
v=this.b
t=w.b
if(v>t)return 1
else if(v<t)return-1
v=this.a
t=w.a
if(v>t)return 1
else if(v<t)return-1
return 0},
gv(d){var w=this.b
return(((w&1023)<<22|this.a)^(this.c<<12|w>>>10&4095))>>>0},
j(d){var w,v,u,t=this.a,s=this.b,r=this.c
if((r&524288)!==0){t=0-t
w=t&4194303
s=0-s-(C.e.cA(t,22)&1)
v=s&4194303
r=0-r-(C.e.cA(s,22)&1)&1048575
s=v
t=w
u="-"}else u=""
return A.aSh(10,t,s,r,u)},
$ics:1}
A.q0.prototype={
ad(){return new A.Vm(C.i)}}
A.Vm.prototype={
H(d){var w=null,v=x.D
return B.nV(C.cm,B.b([new B.e_(C.v,w,w,E.aCd("md/live.jpg",w,w,w,w),w),new B.e_(C.cn,w,w,B.fG(B.hm(B.b([C.c1,B.mT(D.Tf,new A.aop(this,d),w),C.c1,B.mT(D.T7,new A.aoq(this,d),w)],v),C.a4,C.f9,C.a2),w,300),w)],v),C.T,C.cg)},
WP(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k2(new A.aou(v),!1)
u=B.aay(d,x.u)
u.toString
w=v.d
w.toString
u.ny(0,w)},
WN(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k2(new A.aos(v),!1)
u=B.aay(d,x.u)
u.toString
w=v.d
w.toString
u.ny(0,w)}}
A.nX.prototype={
ad(){return new A.YB(null,null,C.i)},
ahj(){return this.c.$0()}}
A.YB.prototype={
av(){var w,v=this,u=null
v.aI()
w=new A.PI(0,1,u,C.el,C.n,u,C.a6,C.C,new B.b7(B.b([],x.F),x.W),new B.b7(B.b([],x.b),x.V))
w.K0(C.el,u,C.n,0,u,1,u,v)
v.d=w
v.z1()},
n(){this.a0K()
var w=this.d
w===$&&B.c()
w.sHW(null)
w.CW=!0
w.Xw()},
H(d){var w=this.d
w===$&&B.c()
return new A.Cg(w,null)},
z1(){var w=0,v=B.T(x.z),u=this,t,s
var $async$z1=B.P(function(d,e){if(d===1)return B.Q(e,v)
while(true)switch(w){case 0:w=2
return B.N(D.Ao.y9(u.a.d),$async$z1)
case 2:t=e
s=u.d
s===$&&B.c()
s.sHW(t)
u.d.Xx(0,null).a.a.h2(new A.arl(u))
return B.R(null,v)}})
return B.S($async$z1,v)}}
A.HC.prototype={
n(){var w=this,v=w.bw$
if(v!=null)v.J(0,w.gfE())
w.bw$=null
w.aH()},
bC(){this.cO()
this.cq()
this.fF()}}
A.alP.prototype={
I(){return"_DashOffsetType."+this.b}}
A.Ks.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Ks&&e.a===this.a&&!0},
gv(d){return B.X(this.a,D.UT,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Jb.prototype={}
A.a21.prototype={
td(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.B6(e===0?new A.cY("<removed field>",0,v,0,w,w,w,w,x.q):A.aRt(f,e,v,g,w,h,k,l,i,j,m))},
PQ(d,e,f,g,h,i,j,k,l){return this.td(d,e,f,g,h,i,j,k,null,l)},
B6(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fb(d,e,f,g,h,i){var w=null
this.td(0,e,f,g,w,w,w,w,h,i)},
dg(d,e,f,g,h){return this.fb(d,e,f,g,null,h)},
tc(d,e,f){var w=null
this.td(0,d,e,64,w,w,w,w,f,x.N)},
PN(d,e){return this.tc(d,e,null)},
FA(d,e,f,g,h,i,j,k,l){this.td(0,e,f,g,h,null,k,i,j,l)},
agS(d,e,f,g,h,i,j,k){return this.FA(d,e,f,g,h,i,null,j,k)},
zu(d,e,f,g,h,i){var w=null
this.B6(A.aRu(f,e,this.b.length,g,A.azm(),h,w,w,w,w,i))},
jC(d,e,f,g){this.td(0,d,e,2097152,A.aRR(f,g).ga4O(),f,null,null,null,g)},
akc(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gvL(){var w=this.x
return w==null?this.x=this.a34():w},
a34(){var w=this.c
w=B.eX(w.gaD(w),!1,x.q)
C.b.ef(w,new A.a22())
return w},
a3z(d,e,f){var w=this.c.h(0,d),v=w==null?null:w.z
return(v==null&&!0?null.gamm():v).$1(f)}}
A.K_.prototype={
Br(d){var w=this.b+=d
if(w>this.c)throw B.d(A.jS())},
Uu(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.ax0())
w.e=v+1
e.TG(w,f)
if(w.d!==(d<<3|4)>>>0)B.W(A.My());--w.e},
Uw(d,e){var w,v,u=this,t=u.f9(!0),s=u.e
if(s>=64)throw B.d(A.ax0())
if(t<0)throw B.d(B.bM(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.jS())
u.e=s+1
d.TG(u,e)
if(u.d!==0)B.W(A.My());--u.e
u.c=w},
akW(){return this.f9(!0)},
akY(){return this.mM()},
zE(){return this.f9(!1)},
al9(){return this.mM()},
al4(){return A.aB7(this.f9(!1))},
al6(){var w=this.mM(),v=A.zX(1),u=w.a,t=w.b,s=w.c
return(new A.dD(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.a9o(0,0,0,u,t,s):w).IT(0,1)},
akP(){return this.oJ(4).getUint32(0,!0)},
akR(){return this.Hr()},
al1(){return this.oJ(4).getInt32(0,!0)},
Hr(){var w=this.oJ(8),v=B.ca(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dD((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
akK(){return this.f9(!0)!==0},
v2(){var w,v=this,u=v.f9(!0)
v.Br(u)
w=v.a
return B.ca(w.buffer,w.byteOffset+v.b-u,u)},
akT(){return this.oJ(4).getFloat32(0,!0)},
akM(){return this.oJ(8).getFloat64(0,!0)},
Uz(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.f9(!1)
if(C.e.cA(w,3)===0)throw B.d(new A.lq("Protocol message contained an invalid tag (zero)."))
return w},
ab0(){this.Br(1)
return this.a[this.b-1]},
f9(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.t0(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aCo())},
mM(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.W(A.jS())
s=w[t-1]
v=(v|C.e.t0(s&127,u*7))>>>0
if((s&128)===0)return A.ax_(0,v)}s=q.ab0()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.ax_(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.W(A.jS())
s=w[t-1]
r=(r|C.e.t0(s&127,u*7+3))>>>0
if((s&128)===0)return A.ax_(r,v)}throw B.d(A.aCo())},
oJ(d){var w
this.Br(d)
w=this.a
return B.nr(w.buffer,w.byteOffset+this.b-d,d)}}
A.lq.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibV:1}
A.aml.prototype={
adM(d){var w
d.gamT()
w=this.a
w.a.gbx()
w=B.bM("Extension "+B.j(d)+" not legal for message "+w.ga8W(),null)
throw B.d(w)},
acd(d,e){var w,v=this.a.e
if(v!=null){w=d.gkY()
if(v.b)A.hW("UnknownFieldSet","clearField")
v.a.u(0,w)}this.c.m(0,d.gkY(),e)},
he(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaD(w),w=new B.cN(J.ac(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gaje()){q=u.h(0,r.gkY())
if(q==null)continue
if(r.gaj7())for(p=J.ac(s.a(q));p.t();)p.gD(p).a.he()
u.m(0,r.gkY(),q.vb())}else if(r.gaj7()){o=u.h(0,r.gkY())
if(o!=null)t.a(o).a.he()}}}}
A.amg.prototype={}
A.cY.prototype={
a0T(d,e,f,g,h,i,j,k,l,m,n){B.hi(this.b,"name")
B.hi(this.d,"tagNumber")},
gUA(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pq(B.b([],w.i("t<cY.T>")),A.azm(),w.i("pq<cY.T>"))}return w}return v.r.$0()},
Mp(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.rJ()
w=J.ag(d)
if(w.gZ(d))return!0
if(!w.h(d,0).a.a.gbx().w)return!0
return w.j1(d,new A.a5K())},
j(d){return this.b}}
A.q3.prototype={}
A.U4.prototype={
ga8W(){return this.a.gbx().a},
C3(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.aml(this,B.k(w,x.G),B.k(w,x.z))}return w},
rB(){var w=this.e
if(w==null){w=this.f
if(!B.eQ(w)||w)return $.aJg()
w=this.e=new A.kv(B.k(x.S,x.k))}return w},
he(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.f
if(!B.eQ(j)||j)return
k.f=!0
for(j=k.a.gbx().gvL(),w=j.length,v=k.c,u=J.ag(v),t=x.J,s=x.d,r=0;r<w;++r){q=j[r]
p=q.f
if((p&2)!==0){o=q.e
n=u.h(v,o)
if(n==null)continue
if((p&2098176)!==0)for(p=J.ac(s.a(n));p.t();)p.gD(p).a.he()
u.m(v,o,n.vb())}else if((p&4194304)!==0){p=q.e
m=u.h(v,p)
if(m==null)continue
u.m(v,p,m.ahx())}else if((p&2098176)!==0){l=u.h(v,q.e)
if(l!=null)t.a(l).a.he()}}if(k.d!=null)k.C3().he()
if(k.e!=null)k.rB().he()},
a4W(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eQ(w)||w)return d.gUA()
w=this.a
v=w.F2(d.d,d,B.p(d).i("cY.T"))
this.mR(w.gbx(),d,v)
return v},
a4X(d,e){var w,v=this.f
if(!B.eQ(v)||v)return d.gUA()
v=this.a
v.toString
w=v.F2(d.d,e.i("cY<0>").a(d),e)
this.mR(v.gbx(),d,w)
return w},
a4Y(d,e,f){var w,v,u=this.f
if(!B.eQ(u)||u)return new A.fe(d.as,d.at,B.a3e(B.k(e,f),e,f),!1,e.i("@<0>").ai(f).i("fe<1,2>"))
u=this.a
w=d.$ti
v=u.R1(d.d,d,w.c,w.z[1])
this.mR(u.gbx(),d,v)
return v},
wk(d){var w=J.aF(this.c,d.e)
return w},
a2L(d){var w,v,u,t,s=this,r=s.f
if(!B.eQ(r)||r)A.ava().$1(s.a.gbx().a)
r=s.a.gbx()
w=r.c.h(0,d)
if(w!=null){J.cF(s.c,w.e,null)
r=r.f
v=w.d
if(r.a6(0,v)){u=s.r
u.toString
u.u(0,r.h(0,v))}t=r.h(0,v)
if(t!=null)s.r.m(0,t,0)
return}r=s.d
if(r!=null)r.b.h(0,d)},
ei(d,e,f){B.hi(e,"fi")
this.mR(d,e,f)},
mC(d,e,f){var w,v=this.wk(e)
if(v!=null)return f.i("y<0>").a(v)
w=this.a.F2(e.d,e,B.p(e).i("cY.T"))
this.mR(d,e,w)
return w},
LF(d,e,f,g){var w,v,u=this.wk(e)
if(u!=null)return f.i("@<0>").ai(g).i("fe<1,2>").a(u)
w=e.$ti
v=this.a.R1(e.d,e,w.c,w.z[1])
this.mR(d,e,v)
return f.i("@<0>").ai(g).i("fe<1,2>").a(v)},
mR(d,e,f){var w,v=e.d,u=d.f.h(0,v)
if(u!=null){w=this.r
this.a2L(w.h(0,u))
w.m(0,u,v)}J.cF(this.c,e.e,f)},
ae(d){var w=J.aF(this.c,d)
if(w!=null)return w
return this.a4W(this.a.gbx().b[d])},
om(d,e){var w=J.aF(this.c,d)
if(w!=null)return e.i("y<0>").a(w)
return this.a4X(e.i("cY<0>").a(this.a.gbx().b[d]),e)},
a1a(d,e,f,g){var w=J.aF(this.c,e)
if(w!=null)return f.i("@<0>").ai(g).i("aN<1,2>").a(w)
return this.a4Y(f.i("@<0>").ai(g).i("q3<1,2>").a(this.a.gbx().b[e]),f,g)},
w_(d){var w=J.aF(this.c,d)
if(w==null)return 0
return w},
B3(d){var w=J.aF(this.c,d)
if(w==null)return""
return w},
rb(d){var w=J.aF(this.c,d)
if(w==null)return!1
if(x.j.b(w))return J.jq(w)
return!0},
a4e(d){var w,v,u,t,s,r=this
if(r.a.gbx()!==d.a.gbx())return!1
for(w=r.c,v=J.ag(w),u=d.c,t=J.ag(u),s=0;s<v.gp(w);++s)if(!r.a4d(v.h(w,s),t.h(u,s)))return!1
w=r.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.ayy(w.c,v.c)))return!1}w=r.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a4d(d,e){var w,v=d==null
if(!v&&e!=null)return A.ayE(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.f5(w))return!0
if(x.f.b(w)&&J.f5(w))return!0
return!1},
ga7T(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jn(n)?n:null)!=null
if(n){n=o.f
n=B.jn(n)?n:null
n.toString
return n}n=o.a
w=A.mf(0,B.fE(n.gbx()))
v=o.c
for(n=n.gbx().gvL(),u=n.length,t=J.ag(v),s=0;s<u;++s){r=n[s]
q=t.h(v,r.e)
if(q==null)continue
w=A.aEO(w,r,q)}n=o.d
if(n!=null){u=n.c
p=A.aGj(new B.b6(u,B.p(u).i("b6<1>")),x.S)
for(t=p.length,n=n.b,s=0;s<p.length;p.length===t||(0,B.K)(p),++s){r=n.h(0,p[s])
w=A.aEO(w,r,u.h(0,r.gkY()))}}n=o.e
n=n==null?null:n.gv(n)
w=A.mf(w,n==null?0:n)
n=o.f
if((!B.eQ(n)||n)&&!0)o.f=w
return w},
VN(d,e){var w,v,u,t,s,r,q,p,o=this,n=new A.amt(new A.ams(d,e))
for(w=o.a.gbx().gvL(),v=w.length,u=o.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
p=r.b
n.$2(q,p===""?C.e.j(r.d):p)}w=o.d
if(w!=null){w=w.b
v=B.p(w).i("b6<1>")
v=B.ax(new B.b6(w,v),!0,v.i("q.E"))
C.b.hI(v)
C.b.M(v,new A.amr(o,n))}w=o.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kv(B.k(x.S,x.k)).Dg("")},
a8V(d){var w,v,u,t,s,r,q,p
for(w=d.a.gbx().gvL(),v=w.length,u=d.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
if(q!=null)this.N0(r,q,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fA(v,v.r),w=w.b;u.t();){p=w.h(0,u.d)
this.N0(p,v.h(0,p.gkY()),!0)}if(d.e!=null){w=this.rB()
v=d.e
v.toString
w.ajT(v)}},
N0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a.gbx(),k=l.c.h(0,d.d)
if(k==null&&f)k=d
w=(d.f&2098176)!==0
v=k.f
if((v&4194304)!==0){x.T.a(k)
v=k.$ti
u=m.LF(l,k,v.c,v.z[1])
if((k.at&2098176)!==0)for(l=J.ac(J.avS(e)),v=u.c,t=x.J;l.t();){s=l.gD(l)
r=s.a
s=t.a(s.b)
q=t.a(s.gbx().Q.$0())
q.kO(s)
if(u.d)B.W(B.U(y.a))
if(r==null)B.W(B.bM("Can't add a null to a map field",null))
v.m(0,r,q)}else u.G(u,e)
return}if((v&2)!==0){v=B.p(k).i("cY.T")
if(w){p=m.mC(l,k,v)
for(l=e.a,v=x.J,t=J.br(p),o=0;o<l.length;++o){s=l[o]
r=v.a(s.gbx().Q.$0())
r.kO(s)
t.C(p,r)}}else J.oL(m.mC(l,k,v),e)
return}if(w){n=f?m.C3().c.h(0,x.G.a(k).gkY()):J.aF(m.c,k.e)
if(n==null){v=x.J
e=A.aRQ(v.a(e),v)}else{n.kO(e)
e=n}}if(f){l=m.C3()
x.G.a(k)
if(l.d)A.ava().$1(l.a.a.gbx().a)
if(k.gaje())B.W(B.bM(l.a.Og(k,e,"repeating field (use get + .add())"),null))
if(l.d)A.ava().$1(l.a.a.gbx().a)
l.adM(k)
l.a.PG(k,e)
l.b.m(0,k.gkY(),k)
l.acd(k,e)}else{m.PG(k,e)
m.mR(l,k,e)}},
PG(d,e){var w,v=this.f
if(!B.eQ(v)||v)A.ava().$1(this.a.gbx().a)
w=A.aYF(d.f,e)
if(w!=null)throw B.d(B.bM(this.Og(d,e,w),null))},
Og(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbx().a+" to value ("+B.j(e)+"): "+f},
rJ(){var w,v,u,t,s=this.a
if(!s.gbx().w)return!0
for(s=s.gbx().c,s=s.gaD(s),s=new B.cN(J.ac(s.a),s.b),w=this.c,v=J.ag(w),u=B.p(s).z[1];s.t();){t=s.a
if(t==null)t=u.a(t)
if(!t.Mp(v.h(w,t.e)))return!1}return this.a7R()},
a7R(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaD(u),u=new B.cN(J.ac(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Mp(this.d.c.h(0,v.gkY())))return!1}return!0}}
A.cU.prototype={
hb(){this.a=A.aWx(this,this.gbx(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cU){w=this.a
w.toString
v=e.a
v.toString
v=w.a4e(v)
w=v}else w=!1
return w},
gv(d){return this.a.ga7T()},
j(d){var w,v=new B.cz("")
this.a.VN(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
TG(d,e){var w=this.a.a.gbx(),v=this.a
v.toString
A.ayR(w,v,d,e)},
F2(d,e,f){var w=e.Q
w.toString
return A.aD8(w,f)},
R1(d,e,f,g){return new A.fe(e.as,e.at,B.k(f,g),!1,f.i("@<0>").ai(g).i("fe<1,2>"))},
kO(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.a8V(w)},
VQ(d,e,f){return this.a.a1a(this,d,e,f)}}
A.Gs.prototype={
ga4O(){var w=this.c
if(w===$){w!==$&&B.aA()
w=this.c=new A.arc(this)}return w}}
A.NO.prototype={}
A.pq.prototype={
hX(d){return new B.DO("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.W(this.hX("set"))},
sp(d,e){B.W(this.hX("set length"))},
dI(d,e,f){return B.W(this.hX("setAll"))},
C(d,e){return B.W(this.hX("add"))},
G(d,e){return B.W(this.hX("addAll"))},
dQ(d,e,f){return B.W(this.hX("insert"))},
ev(d,e,f){return B.W(this.hX("insertAll"))},
u(d,e){return B.W(this.hX("remove"))},
bY(d,e){return B.W(this.hX("removeAt"))},
dj(d){return B.W(this.hX("removeLast"))},
b_(d,e,f,g,h){return B.W(this.hX("setRange"))},
ck(d,e,f,g){return this.b_(d,e,f,g,0)},
dF(d,e,f){return B.W(this.hX("removeRange"))}}
A.uF.prototype={
vb(){return new A.pq(this.a,A.azm(),this.$ti.i("pq<1>"))},
C(d,e){this.b.$1(e)
this.a.push(e)},
G(d,e){J.f4(e,this.b)
C.b.G(this.a,e)},
dQ(d,e,f){this.b.$1(f)
C.b.dQ(this.a,e,f)},
ev(d,e,f){J.f4(f,this.b)
C.b.ev(this.a,e,f)},
dI(d,e,f){J.f4(f,this.b)
C.b.dI(this.a,e,f)},
u(d,e){return C.b.u(this.a,e)},
bY(d,e){return C.b.bY(this.a,e)},
dj(d){return this.a.pop()},
b_(d,e,f,g,h){J.Ib(g,h).kd(0,f-e).M(0,this.b)
C.b.b_(this.a,e,f,g,h)},
ck(d,e,f,g){return this.b_(d,e,f,g,0)},
dF(d,e,f){return C.b.dF(this.a,e,f)}}
A.nA.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.nA&&A.x3(e,this)},
gv(d){return A.ayh(this.a)},
ga_(d){var w=this.a
return new J.fU(w,w.length)},
di(d,e,f){var w=this.a
return new B.a8(w,e,B.a6(w).i("@<1>").ai(f).i("a8<1,2>"))},
f2(d,e){return this.di(d,e,x.z)},
q(d,e){return C.b.q(this.a,e)},
M(d,e){C.b.M(this.a,e)},
hs(d,e,f){return C.b.ik(this.a,e,f)},
ik(d,e,f){return this.hs(d,e,f,x.z)},
j1(d,e){return C.b.j1(this.a,e)},
b6(d,e){return C.b.b6(this.a,e)},
nC(d){return this.b6(d,"")},
dK(d,e){return C.b.dK(this.a,e)},
dG(d,e){var w=this.a,v=B.a6(w)
return e?B.b(w.slice(0),v):J.pM(w.slice(0),v.c)},
dd(d){return this.dG(d,!0)},
jn(d){var w=this.a
return B.jX(w,B.a6(w).c)},
gZ(d){return this.a.length===0},
gbS(d){return this.a.length!==0},
kd(d,e){var w=this.a
return B.dR(w,0,B.dx(e,"count",x.S),B.a6(w).c)},
iH(d,e){var w=this.a
return B.dR(w,e,null,B.a6(w).c)},
gK(d){return C.b.gK(this.a)},
gO(d){return C.b.gO(this.a)},
j6(d,e,f){return C.b.j6(this.a,e,f)},
pV(d,e){return this.j6(d,e,null)},
b1(d,e){return this.a[e]},
j(d){return B.pL(this.a,"[","]")},
h(d,e){return this.a[e]},
gp(d){return this.a.length},
bJ(d,e,f){return C.b.bJ(this.a,e,f)},
dZ(d,e){return this.bJ(d,e,null)},
qP(d,e,f){var w=this.a
B.d3(e,f,w.length,null,null)
return B.dR(w,e,f,B.a6(w).c)},
m(d,e,f){this.b.$1(f)
this.a[e]=f},
sp(d,e){var w=this.a
if(e>w.length)throw B.d(B.U("Extending protobuf lists is not supported"))
C.b.sp(w,e)}}
A.fe.prototype={
h(d,e){return this.c.h(0,e)},
m(d,e,f){var w="Can't add a null to a map field"
if(this.d)throw B.d(B.U(y.a))
if(e==null)B.W(B.bM(w,null))
if(f==null)B.W(B.bM(w,null))
this.c.m(0,e,f)},
k(d,e){var w,v,u,t,s=this
if(e==null)return!1
if(e===s)return!0
if(!(e instanceof A.fe))return!1
if(J.aZ(e.gb7(e))!==J.aZ(s.gb7(s)))return!1
for(w=s.c,v=J.ac(w.gb7(w)),u=e.c;v.t();){t=v.gD(v)
if(!J.f(u.h(0,t),w.h(0,t)))return!1}return!0},
gv(d){var w=this.c
w=w.gdC(w)
return w.ik(w,0,new A.acE(this))},
gb7(d){var w=this.c
return w.gb7(w)},
u(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.u(0,e)},
ahx(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rx(t,w.i("@<aB.K>").ai(w.i("aB.V")).i("rx<1,2>"))),w=new B.F8(J.ac(t.gb7(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.he()}return t}}
A.OM.prototype={
gv(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kv.prototype={
TF(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.hW(s,"mergeFieldFromBuffer")
w=C.e.cA(d,3)
switch(d&7){case 0:v=e.mM()
if(t.b)A.hW(s,"mergeVarintField")
C.b.C(t.lj(w).b,v)
return!0
case 1:v=e.Hr()
if(t.b)A.hW(s,"mergeFixed64Field")
C.b.C(t.lj(w).d,v)
return!0
case 2:v=e.v2()
if(t.b)A.hW(s,"mergeLengthDelimitedField")
C.b.C(t.lj(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.W(A.ax0())
e.e=v+1
u=new A.kv(B.k(x.S,x.k))
u.ajS(e)
if(e.d!==(w<<3|4)>>>0)B.W(A.My());--e.e
if(t.b)A.hW(s,"mergeGroupField")
C.b.C(t.lj(w).e,u)
return!0
case 4:return!1
case 5:v=e.oJ(4).getUint32(0,!0)
if(t.b)A.hW(s,"mergeFixed32Field")
C.b.C(t.lj(w).c,v)
return!0
default:throw B.d(new A.lq("Protocol message tag had invalid wire type."))}},
ajS(d){var w
if(this.b)A.hW("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.Uz()
if(w===0||!this.TF(w,d))break}},
ajT(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.hW(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fA(w,w.r);v.t();){u=v.d
t=w.h(0,u)
t.toString
if(this.b)A.hW(s,"mergeField")
u=this.lj(u)
C.b.G(u.b,t.b)
C.b.G(u.c,t.c)
C.b.G(u.d,t.d)
C.b.G(u.a,t.a)
C.b.G(u.e,t.e)}},
lj(d){if(d===0)B.W(B.bM("Zero is not a valid field number.",null))
return this.a.bA(0,d,new A.aje())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kv))return!1
return A.ayy(e.a,this.a)},
gv(d){var w={}
w.a=0
this.a.M(0,new A.ajf(w))
return w.a},
j(d){return this.Dg("")},
Dg(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.cz("")
for(w=this.a,v=A.aGj(new B.b6(w,B.p(w).i("b6<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
p=w.h(0,q)
p.toString
for(p=p.gaD(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){m=p[n]
if(m instanceof A.kv){l=k.a+=d+B.j(q)+": {\n"
l+=m.Dg(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
he(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaD(w),w=new B.cN(J.ac(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).he()}this.b=!0}}
A.ri.prototype={
he(){var w,v=this
if(v.f)return
v.f=!0
v.a=B.fC(v.a,x.L)
w=x.w
v.b=B.fC(v.b,w)
v.c=B.fC(v.c,x.S)
v.d=B.fC(v.d,w)
v.e=B.fC(v.e,x.B)},
k(d,e){var w,v,u=this
if(e==null)return!1
if(!(e instanceof A.ri))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.x3(e.a[w],v[w]))return!1
if(!A.x3(e.b,u.b))return!1
if(!A.x3(e.c,u.c))return!1
if(!A.x3(e.d,u.d))return!1
if(!A.x3(e.e,u.e))return!1
return!0},
gv(d){var w,v,u,t,s,r,q,p=this
for(w=p.a,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
for(r=J.ag(s),q=0;q<r.gp(s);++q){u=u+r.h(s,q)&536870911
u=u+((u&524287)<<10)&536870911
u^=u>>>6}u=u+((u&67108863)<<3)&536870911
u^=u>>>11
u=u+((u&16383)<<15)&536870911}for(w=p.b,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+7*J.x(w[t])&536870911
for(w=p.c,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+37*J.x(w[t])&536870911
for(w=p.d,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+53*J.x(w[t])&536870911
for(w=p.e,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+J.x(w[t])&536870911
return u},
gaD(d){var w=this,v=B.ax(w.a,!0,x.z)
C.b.G(v,w.b)
C.b.G(v,w.c)
C.b.G(v,w.d)
C.b.G(v,w.e)
return v},
gp(d){return this.gaD(this).length}}
A.afa.prototype={}
A.afb.prototype={
y9(d){return this.agf(d)},
agf(d){var w=0,v=B.T(x.H),u,t=this,s
var $async$y9=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.N($.rO().fU(0,d),$async$y9)
case 3:u=t.agg(s.ca(f.buffer,0,null))
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$y9,v)},
agg(d){var w,v,u,t,s,r,q=A.aCl(d,1,null,0),p=q.Ut(),o=q.Ut(),n=p&8
C.e.cA(p,3)
if(n!==8)B.W(A.aw1("Only DEFLATE compression supported: "+n))
if(C.e.bF((p<<8>>>0)+o,31)!==0)B.W(A.aw1("Invalid FCHECK"))
if((o>>>5&1)!==0){q.zE()
B.W(A.aw1("FDICT Encoding not currently supported"))}w=A.Mk(D.FZ)
v=A.Mk(D.Gu)
u=new A.ace(new Uint8Array(32768))
v=new A.a94(q,u,w,v)
v.b=!0
v.a81()
t=x.L.a(B.ca(u.c.buffer,0,u.a))
q.zE()
s=A.aCP()
q=Math.min(67108864,t.length)
r=new A.K_(t,q)
r.c=q
q=s.a.a.gbx()
w=s.a
w.toString
A.ayR(q,w,r,D.AK)
if(r.d!==0)B.W(A.My())
return this.aaR(this.aaU(s),null).h2(new A.afg(null))},
aaU(d){J.f4(d.a.om(3,x.m),new A.aff())
return d},
aaR(d,e){var w=d.VQ(2,x.N,x.L),v=J.ag(w)
if(v.gZ(w))return B.cf(d,x.H)
v=v.gdC(w)
return B.li(v.di(v,new A.afc(this,e,d),x.K),x.P).bn(new A.afd(d),x.H)},
wc(d,e,f){return this.a3A(d,e,f)},
a3A(d,e,f){var w=0,v=B.T(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$wc=B.P(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.N(A.a0j(e),$async$wc)
case 7:r=h
if(m!=null){o=x.z
J.aAn(m,B.l(["imageSize",""+J.aOu(r)+"x"+J.aOo(r)],o,o))}u=r
w=1
break
t=2
w=6
break
case 4:t=3
l=s
q=B.ai(l)
p=B.aO(l)
if(m!=null){o=x.z
J.aAn(m,B.l(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.R(u,v)
case 2:return B.Q(s,v)}})
return B.S($async$wc,v)}}
A.XC.prototype={
aB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.gZ(e)||j.ay==null)return
j=j.ay.a.ae(1)
w=new B.L(j.a.ae(0),j.a.ae(1))
if(J.f5(w))return
d.bT(0)
try{v=new B.B(0,0,0+e.a,0+e.b)
if(k.e)d.lG(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=F.aGs(k.b,new B.L(t,u),new B.L(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.L(t*o,u*n).cV(0,2)
l=new B.L(s,j).cV(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.am(0,j,s)
if(o!==1&&n!==1)d.df(0,o,n)
k.agP(d,e)}finally{d.by(0)}},
agP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.ac(w.ay.a.om(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gD(v)
q=r.a.B3(0)
if(q.length!==0){w.ay.c.a.h(0,q)
p=!1}else p=!0
if(p)continue
o=J.aF(r.a.om(1,u),w.gag9())
n=o.a.rb(2)
m=o.a.rb(3)
if(n){d.bT(0)
d.a3(0,new Float64Array(B.fo(B.b([o.a.ae(2).a.ae(0),o.a.ae(2).a.ae(1),0,0,o.a.ae(2).a.ae(2),o.a.ae(2).a.ae(3),0,0,0,0,1,0,o.a.ae(2).a.ae(4),o.a.ae(2).a.ae(5),0,1],t))))}if(m){d.bT(0)
d.i7(0,k.aeH(o.a.B3(3)))}r=o.a.ae(1).a.ae(2)
p=o.a.ae(1).a.ae(3)
l=o.a.rb(0)?C.d.X(o.a.ae(0)*255):255
k.agN(d,q,new B.B(0,0,r,p),l)
r=o.b
k.agO(d,r==null?o.a.om(4,s):r,l)
w.ay.c.d.h(0,q)
if(m)d.by(0)
if(n)d.by(0)}},
agN(d,e,f,g){var w,v,u=this.c
u.ay.c.b.h(0,e)
w=u.ay.d.h(0,e)
if(w==null)return
v=$.ap().bc()
v.slU(this.d)
v.sq8(!0)
v.sag(0,B.a2(g,0,0,0))
d.iY(w,new B.B(0,0,w.gce(w),w.gcE(w)),f,v)
this.agQ(d,e,f,g)},
agO(d,e,f){var w,v,u,t,s,r,q,p=J.ag(e)
if(p.gZ(e))return
for(p=p.ga_(e),w=x.n;p.t();){v=p.gD(p)
u=this.aeM(v)
if(v.a.rb(5)){d.bT(0)
d.a3(0,new Float64Array(B.fo(B.b([v.a.ae(5).a.ae(0),v.a.ae(5).a.ae(1),0,0,v.a.ae(5).a.ae(2),v.a.ae(5).a.ae(3),0,0,0,0,1,0,v.a.ae(5).a.ae(4),v.a.ae(5).a.ae(5),0,1],w))))}t=v.a.ae(4).a.ae(0)
if(t.a.rJ()){s=$.ap().bc()
s.sq8(!0)
s.sa8(0,C.aH)
s.sag(0,B.a2(C.d.X(t.a.ae(3)*f),C.d.X(t.a.ae(0)*255),C.d.X(t.a.ae(1)*255),C.d.X(t.a.ae(2)*255)))
d.cu(u,s)}t=v.a.ae(4).a.ae(2)
if(t>0){s=$.ap().bc()
s.sa8(0,C.S)
if(v.a.ae(4).a.ae(1).a.rJ())s.sag(0,B.a2(C.d.X(v.a.ae(4).a.ae(1).a.ae(3)*f),C.d.X(v.a.ae(4).a.ae(1).a.ae(0)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(1)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(2)*255)))
s.sf6(t)
switch(v.a.ae(4).a.ae(3)){case D.j2:s.soc(C.bU)
break
case D.xe:s.soc(C.NY)
break
case D.xf:s.soc(C.jd)
break}switch(v.a.ae(4).a.ae(4)){case D.j3:s.svP(C.e9)
break
case D.xg:s.svP(C.NZ)
break
case D.xh:s.svP(C.O_)
break}s.sJ2(v.a.ae(4).a.ae(5))
r=[v.a.ae(4).a.ae(6),v.a.ae(4).a.ae(7),v.a.ae(4).a.ae(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cu(A.b_m(u,new A.Jb(B.b([t,q<0.1?0.1:q],w)),new A.Ks(r[2])),s)}else d.cu(u,s)}if(v.a.rb(5))d.by(0)}},
aeM(d){var w,v,u,t,s,r,q,p=$.ap().cb()
if(d.a.ae(0)===D.j4)return this.Qj(d.a.ae(1).a.B3(0),p)
else if(d.a.ae(0)===D.xj){w=d.a.ae(3)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
w=w.a.ae(3)
v-=t
u-=w
s=new B.B(v,u,v+t*2,u+w*2)
if(!s.gZ(s))p.oY(s)}else if(d.a.ae(0)===D.xi){w=d.a.ae(2)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
r=w.a.ae(3)
w=w.a.ae(4)
q=B.qy(new B.B(v,u,v+t,u+r),new B.aY(w,w))
if(!q.gZ(q))p.ej(q)}return p},
Qj(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.h(0,d)!=null){t=w.ay.e.h(0,d)
t.toString
return t}if(e==null)t.a=$.ap().cb()
w=B.a0u(d,B.aK("([a-df-zA-Z])",!0,!1,!1),new A.aqL(),null)
v=B.aK(",",!0,!1,!1)
u=B.kP(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.M(B.b(u.split("|||"),x.s),new A.aqM(t,this,d))
return t.a},
aeH(d){return this.Qj(d,null)},
agQ(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.h(0,e)
return},
hG(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Cg.prototype={
ad(){return new A.G8(C.i)}}
A.PI.prototype={
sHW(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.dY(0)
w=d==null
if(w)t.L(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.ae(1)
u=w.a.w_(2)
if(u===0)u=20
t.e=B.cu(0,C.d.X(w.a.w_(3)/u*1000),0)}else t.e=C.n
t.sl(0,t.a)},
gag9(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.ae(1).a.w_(3)
v=t.a.ae(1).a.w_(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.d.X(v*u)))},
L(d){this.ch=!0
if(!this.CW)this.aR()}}
A.G8.prototype={
av(){var w,v=this
v.aI()
w=v.a.c
v.d=w.ay
w.bf()
w=w.bE$
w.b=!0
w.a.push(v.gDd())
w=v.a.c
w.bf()
w=w.cv$
w.b=!0
w.a.push(v.gCA())},
aJ(d){var w,v,u,t=this
t.aX(d)
w=d.c
if(w!==t.a.c){v=t.gDd()
w.J(0,v)
u=t.gCA()
w.cp(u)
w=t.a.c
t.d=w.ay
w.bf()
w=w.bE$
w.b=!0
w.a.push(v)
v=t.a.c
v.bf()
v=v.cv$
v.b=!0
v.a.push(u)}},
aaH(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.aw(new A.aqK(v))},
a7t(d){var w
if(d===C.P){this.a.toString
w=!0}else w=!1
if(w)this.a.c.L(0)},
n(){var w=this
w.d=null
w.a.c.J(0,w.gDd())
w.a.c.cp(w.gCA())
w.aH()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.rJ()?C.x:new B.L(u.a.ae(1).a.ae(0),u.a.ae(1).a.ae(1))
if(t.gZ(t))return C.b4
w=this.a
w=w.c
return new B.iS(!0,v,B.p9(v,v,v,new A.XC(G.zi,w,C.dn,!1,w),t),v)}}
A.qb.prototype={
gbx(){return $.aIz()}}
A.lW.prototype={
gbx(){return $.aIZ()}}
A.oQ.prototype={
gbx(){return $.aHW()}}
A.pR.prototype={
gbx(){return $.aIw()}}
A.o4.prototype={
gbx(){return $.aJ5()}}
A.qU.prototype={
gbx(){return $.aIQ()}}
A.qT.prototype={
gbx(){return $.aIP()}}
A.qS.prototype={
gbx(){return $.aIO()}}
A.qW.prototype={
gbx(){return $.aIT()}}
A.qV.prototype={
gbx(){return $.aIU()}}
A.qR.prototype={
gbx(){return $.aIW()}}
A.lg.prototype={
gbx(){return $.aIm()},
gr0(){var w=this.b
return w==null?this.a.om(4,x.Y):w}}
A.lB.prototype={
gbx(){return $.aIy()},
n(){var w=this.d
w.gaD(w).M(0,new A.abx())
w.L(0)
this.e.L(0)}}
A.ja.prototype={}
A.kk.prototype={}
A.kl.prototype={}
var z=a.updateTypes(["m()","dD()","G()","nX(Z)","A()","lB(y<as>)","m(cY<@>,cY<@>)","A(cU)","ri()","~(lW)","~(lg)","q0()","~()","~(eC)","~(H?)","~(n[n?])","n()","y<m>()","qb()","lW()","oQ()","kl?(m)","o4()","qU()","qT()","qS()","qW()","qV()","qR()","lg()","lB()","ja?(m)","kk?(m)","pR()"])
A.auX.prototype={
$0(){return D.HG},
$S:z+11}
A.aop.prototype={
$0(){return this.a.WN(this.b)},
$S:0}
A.aoq.prototype={
$0(){return this.a.WP(this.b)},
$S:0}
A.aou.prototype={
$1(d){return new A.nX(new A.aot(this.a),"md/rocket.svga",null)},
$S:z+3}
A.aot.prototype={
$0(){return this.a.d.cT(0)},
$S:0}
A.aos.prototype={
$1(d){return new A.nX(new A.aor(this.a),"md/angle.svga",null)},
$S:z+3}
A.aor.prototype={
$0(){return this.a.d.cT(0)},
$S:0}
A.arl.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sHW(null)
w.a.ahj()},
$S:7}
A.a22.prototype={
$2(d,e){return C.e.b9(d.d,e.d)},
$S:z+6}
A.atO.prototype={
$1(d){return J.dz(d,this.a.$0())},
$S:173}
A.atM.prototype={
$1(d){var w,v,u=this,t=u.a.f9(!0),s=u.c,r=u.b.a3z(s,u.d,t)
if(r==null){w=u.e.rB()
v=A.a9n(t)
if(w.b)A.hW("UnknownFieldSet","mergeVarintField")
C.b.C(w.lj(s).b,v)}else J.dz(d,r)},
$S:173}
A.atN.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:7}
A.a5J.prototype={
$0(){return A.aD8(this.a,this.b)},
$S(){return this.b.i("uF<0>()")}}
A.a5L.prototype={
$0(){return this.a},
$S:41}
A.a5K.prototype={
$1(d){return d.a.rJ()},
$S:z+7}
A.aaI.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fe(w.a,w.b,B.k(v,u),!1,v.i("@<0>").ai(u).i("fe<1,2>"))},
$S(){return this.d.i("@<0>").ai(this.e).i("fe<1,2>()")}}
A.amq.prototype={
$1(d){return J.js(d)},
$S:60}
A.ams.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cU){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.VN(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.bD)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:56}
A.amt.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.nA)for(w=d.a,w=new J.fU(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fe)for(w=d.gdC(d),w=w.ga_(w),v=this.a;w.t();)v.$2(e,w.gD(w))
else this.a.$2(e,d)},
$S:479}
A.amr.prototype={
$1(d){var w=this.a,v=w.d.c.h(0,d)
w=w.d.b.h(0,d)
return this.b.$2(v,"["+B.j(w.gze(w))+"]")},
$S:24}
A.arc.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.he()
v.b!==$&&B.aA()
v.b=w
u=w}return u},
$S(){return this.a.$ti.i("1()")}}
A.acE.prototype={
$2(d,e){var w=e.a,v=e.b
return(d^A.aET(A.mf(A.mf(0,J.x(w)),J.x(v))))>>>0},
$S(){return this.a.$ti.i("m(m,bD<1,2>)")}}
A.aje.prototype={
$0(){var w=x.X
return new A.ri(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ajf.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.x(e)&536870911},
$S:480}
A.asG.prototype={
$1(d){return A.ayE(J.aF(this.a,d),J.aF(this.b,d))},
$S:67}
A.any.prototype={
$2(d,e){return A.mf(d,J.x(e))},
$S:481}
A.afg.prototype={
$0(){},
$S:7}
A.aff.prototype={
$1(d){var w={}
w.a=null
J.f4(d.a.om(1,x.p),new A.afe(w))},
$S:z+9}
A.afe.prototype={
$1(d){if(J.jq(d.gr0())&&J.aZ(d.gr0())>0)if(J.aF(d.gr0(),0).a.ae(0)===D.xk&&this.a.a!=null)d.b=this.a.a
else if(J.jq(d.gr0()))this.a.a=d.gr0()},
$S:z+10}
A.afc.prototype={
$1(d){return this.W0(d)},
W0(d){var w=0,v=B.T(x.P),u=this,t,s
var $async$$1=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.N(u.a.wc(t,new Uint8Array(B.fo(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.R(null,v)}})
return B.S($async$$1,v)},
$S:482}
A.afd.prototype={
$1(d){return this.a},
$S:z+5}
A.aqL.prototype={
$1(d){return"|||"+B.j(d.Il(1))+" "},
$S:167}
A.aqM.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.a4(d,0,1)
if(C.c.q("MLHVCSQRZmlhvcsqrz",w)){v=C.c.eP(C.c.br(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.dR(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.dR(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.cd(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.cd(0,u.c,t)}else if(w==="H"){s=B.bk(v[0])
u=m.a
u.c=s
u.a.cd(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bk(v[0])
u.c=s
u.a.cd(0,s,u.b)}else if(w==="V"){t=B.bk(v[0])
u=m.a
u.b=t
u.a.cd(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bk(v[0])
u.b=t
u.a.cd(0,u.c,t)}else if(w==="C"){u=m.a
u.r=B.bk(v[0])
u.f=B.bk(v[1])
u.e=B.bk(v[2])
u.d=B.bk(v[3])
u.c=B.bk(v[4])
t=B.bk(v[5])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
o=u.e
o.toString
n=u.d
n.toString
r.na(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
u.r=u.c+B.bk(v[0])
u.f=u.b+B.bk(v[1])
u.e=u.c+B.bk(v[2])
u.d=u.b+B.bk(v[3])
u.c=u.c+B.bk(v[4])
t=u.b+B.bk(v[5])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
o=u.e
o.toString
n=u.d
n.toString
r.na(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
if(u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null){r=u.c
q=u.e
q.toString
u.r=r-q+r
r=u.b
q=u.d
q.toString
u.f=r-q+r
u.e=B.bk(v[0])
u.d=B.bk(v[1])
u.c=B.bk(v[2])
t=B.bk(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
o=u.e
o.toString
n=u.d
n.toString
r.na(q,p,o,n,u.c,t)}else{u.r=B.bk(v[0])
u.f=B.bk(v[1])
u.c=B.bk(v[2])
t=B.bk(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qs(q,p,u.c,t)}}else if(w==="s"){u=m.a
r=u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null
q=u.c
if(r){r=u.e
r.toString
u.r=q-r+q
r=u.b
p=u.d
p.toString
u.f=r-p+r
u.e=q+B.bk(v[0])
u.d=u.b+B.bk(v[1])
u.c=u.c+B.bk(v[2])
t=u.b+B.bk(v[3])
u.b=t
q=u.a
q.toString
r=u.r
r.toString
p=u.f
p.toString
o=u.e
o.toString
n=u.d
n.toString
q.na(r,p,o,n,u.c,t)}else{u.r=q+B.bk(v[0])
u.f=u.b+B.bk(v[1])
u.c=u.c+B.bk(v[2])
t=u.b+B.bk(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qs(q,p,u.c,t)}}else if(w==="Q"){u=m.a
u.r=B.bk(v[0])
u.f=B.bk(v[1])
u.c=B.bk(v[2])
t=B.bk(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qs(q,p,u.c,t)}else if(w==="q"){u=m.a
u.r=u.c+B.bk(v[0])
u.f=u.b+B.bk(v[1])
u.c=u.c+B.bk(v[2])
t=u.b+B.bk(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qs(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.bL(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:32}
A.aqK.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.abx.prototype={
$1(d){d.n()},
$S:483};(function aliases(){var w=A.HC.prototype
w.a0K=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"azm","aXS",14)
v(A,"ava",1,null,["$2","$1"],["hW",function(d){return A.hW(d,null)}],15,0)
u(A,"b0D","aTp",16)
u(A,"b0A","aTm",17)
u(A,"b0z","aTl",4)
u(A,"b0C","aTo",0)
u(A,"b0B","aTn",2)
var r
t(r=A.K_.prototype,"gakV","akW",0)
t(r,"gakX","akY",1)
t(r,"gal7","zE",0)
t(r,"gal8","al9",1)
t(r,"gal3","al4",0)
t(r,"gal5","al6",1)
t(r,"gakO","akP",0)
t(r,"gakQ","akR",1)
t(r,"gal0","al1",0)
t(r,"gal2","Hr",1)
t(r,"gakJ","akK",4)
t(r,"gakS","akT",2)
t(r,"gakL","akM",2)
t(r=A.G8.prototype,"gDd","aaH",12)
s(r,"gCA","a7t",13)
u(A,"aHI","aT0",18)
u(A,"aHO","aVf",19)
u(A,"aHF","aP8",20)
u(A,"aHH","aSs",33)
u(A,"azu","aW_",22)
u(A,"aHL","aUW",23)
u(A,"aHK","aUV",24)
u(A,"aHJ","aUU",25)
u(A,"azt","aUZ",26)
u(A,"aHM","aV_",27)
u(A,"aHN","aV1",28)
u(A,"aHG","aRI",29)
u(A,"b0W","aCP",30)
w(A,"b0Z","aV0",31)
w(A,"b0X","aUX",32)
w(A,"b0Y","aUY",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.Iu,B.jK)
u(B.H,[A.a9k,A.acf,A.a8o,A.a94,A.dD,A.Ks,A.Jb,A.a21,A.K_,A.lq,A.aml,A.amg,A.cY,A.U4,A.cU,A.Gs,A.NO,A.OM,A.kv,A.ri,A.afa,A.afb])
v(A.a9j,A.a9k)
v(A.ace,A.acf)
u(B.iH,[A.auX,A.aop,A.aoq,A.aot,A.aor,A.arl,A.atN,A.a5J,A.a5L,A.aaI,A.arc,A.aje,A.afg,A.aqK])
u(B.a4,[A.q0,A.nX,A.Cg])
u(B.aa,[A.Vm,A.HC,A.G8])
u(B.ft,[A.aou,A.aos,A.atO,A.atM,A.a5K,A.amq,A.amr,A.asG,A.aff,A.afe,A.afc,A.afd,A.aqL,A.aqM,A.abx])
v(A.YB,A.HC)
v(A.alP,B.rt)
u(B.kZ,[A.a22,A.ams,A.amt,A.acE,A.ajf,A.any])
v(A.q3,A.cY)
v(A.nA,B.a0)
u(A.nA,[A.pq,A.uF])
v(A.fe,B.aB)
v(A.XC,B.tt)
v(A.PI,B.jt)
u(A.cU,[A.qb,A.lW,A.oQ,A.pR,A.o4,A.qU,A.qT,A.qS,A.qW,A.qV,A.qR,A.lg,A.lB])
u(A.OM,[A.ja,A.kk,A.kl])
w(A.HC,B.fh)})()
B.mq(b.typeUniverse,JSON.parse('{"Iu":{"bV":[]},"dD":{"cs":["H"]},"q0":{"a4":[],"i":[]},"Vm":{"aa":["q0"]},"nX":{"a4":[],"i":[]},"YB":{"aa":["nX"]},"aRr":{"cY":["1"]},"cY":{"cY.T":"1"},"uF":{"nA":["1"],"a0":["1"],"y":["1"],"a3":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"fe":{"aB":["1","2"],"aN":["1","2"],"aB.V":"2","aB.K":"1"},"lq":{"bV":[]},"q3":{"cY":["fe<1,2>?"],"cY.T":"fe<1,2>?"},"pq":{"nA":["1"],"a0":["1"],"y":["1"],"a3":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"nA":{"a0":["1"],"y":["1"],"a3":["1"],"q":["1"]},"Cg":{"a4":[],"i":[]},"XC":{"ak":[]},"PI":{"jt":[],"bB":["G"],"ak":[]},"G8":{"aa":["Cg"]},"qb":{"cU":[]},"lW":{"cU":[]},"oQ":{"cU":[]},"pR":{"cU":[]},"o4":{"cU":[]},"qU":{"cU":[]},"qT":{"cU":[]},"qS":{"cU":[]},"qW":{"cU":[]},"qV":{"cU":[]},"qR":{"cU":[]},"lg":{"cU":[]},"lB":{"cU":[]}}'))
B.H_(b.typeUniverse,JSON.parse('{"Jb":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.V
return{G:w("aRr<@>"),q:w("cY<@>"),p:w("lg"),K:w("ah<as>"),J:w("cU"),I:w("tY"),w:w("dD"),U:w("q<cU>"),R:w("q<@>"),M:w("t<cY<@>>"),X:w("t<dD>"),r:w("t<y<m>>"),s:w("t<n>"),A:w("t<kv>"),D:w("t<i>"),n:w("t<G>"),t:w("t<m>"),b:w("t<~()>"),F:w("t<~(eC)>"),d:w("y<cU>"),j:w("y<@>"),L:w("y<m>"),T:w("q3<@,@>"),f:w("aN<@,@>"),H:w("lB"),P:w("as"),V:w("b7<~()>"),W:w("b7<~(eC)>"),u:w("nw"),Z:w("qj"),Y:w("qR"),m:w("lW"),N:w("n"),l:w("Dv"),Q:w("di"),B:w("kv"),k:w("ri"),y:w("A"),i:w("G"),z:w("@"),O:w("@()"),_:w("@(a2o,m)"),S:w("m"),o:w("tY?")}})();(function constants(){var w=a.makeConstList
D.Ao=new A.afb()
D.AK=new A.amg()
D.EQ=new A.dD(0,0,0)
D.ER=new A.dD(4194303,4194303,1048575)
D.FY=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.FZ=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.G0=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.j4=new A.ja(0,"SHAPE")
D.xi=new A.ja(1,"RECT")
D.xj=new A.ja(2,"ELLIPSE")
D.xk=new A.ja(3,"KEEP")
D.mh=B.b(w([D.j4,D.xi,D.xj,D.xk]),B.V("t<ja>"))
D.Gd=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Gt=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Gv=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Gu=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.GG=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.j3=new A.kl(0,"LineJoin_MITER")
D.xg=new A.kl(1,"LineJoin_ROUND")
D.xh=new A.kl(2,"LineJoin_BEVEL")
D.mx=B.b(w([D.j3,D.xg,D.xh]),B.V("t<kl>"))
D.j2=new A.kk(0,"LineCap_BUTT")
D.xe=new A.kk(1,"LineCap_ROUND")
D.xf=new A.kk(2,"LineCap_SQUARE")
D.mz=B.b(w([D.j2,D.xe,D.xf]),B.V("t<kk>"))
D.HG=new A.q0(null)
D.av=new A.NO("com.opensource.svga")
D.W9=new A.NO("")
D.T7=new B.dd("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.Tf=new B.dd("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.UT=new A.alP(0,"Absolute")})();(function staticFields(){$.aWy=[]
$.aC0=B.k(B.V("lh?"),B.V("Gs<cU>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"b8R","aMN",()=>new A.auX())
v($,"b41","aJg",()=>{var u=A.aW6()
u.he()
return u})
v($,"b2T","aIz",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hj("MovieParams",A.aHI(),D.av),r=x.i
s.fb(0,1,u,256,u,r)
s.fb(0,2,t,256,t,r)
r=x.S
s.dg(0,3,"fps",2048,r)
s.dg(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b3B","aIZ",()=>{var u="imageKey",t="matteKey",s=A.hj("SpriteEntity",A.aHO(),D.av)
s.tc(1,u,u)
s.zu(0,2,"frames",2097154,A.aHG(),x.p)
s.tc(3,t,t)
s.w=!1
return s})
v($,"b1m","aHW",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hj("AudioEntity",A.aHF(),D.av)
n.tc(1,t,t)
u=x.S
n.fb(0,2,s,r,s,u)
n.fb(0,3,q,r,q,u)
n.fb(0,4,p,r,p,u)
n.fb(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b2K","aIw",()=>{var u=A.hj("Layout",A.aHH(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.dg(0,3,"width",256,t)
u.dg(0,4,"height",256,t)
u.w=!1
return u})
v($,"b3Q","aJ5",()=>{var u=A.hj("Transform",A.azu(),D.av),t=x.i
u.dg(0,1,"a",256,t)
u.dg(0,2,"b",256,t)
u.dg(0,3,"c",256,t)
u.dg(0,4,"d",256,t)
u.dg(0,5,"tx",256,t)
u.dg(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b3o","aIQ",()=>{var u=A.hj("ShapeEntity.ShapeArgs",A.aHL(),D.av)
u.PN(1,"d")
u.w=!1
return u})
v($,"b3n","aIP",()=>{var u="cornerRadius",t=A.hj("ShapeEntity.RectArgs",A.aHK(),D.av),s=x.i
t.dg(0,1,"x",256,s)
t.dg(0,2,"y",256,s)
t.dg(0,3,"width",256,s)
t.dg(0,4,"height",256,s)
t.fb(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b3m","aIO",()=>{var u=A.hj("ShapeEntity.EllipseArgs",A.aHJ(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.fb(0,3,"radiusX",256,"radiusX",t)
u.fb(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b3r","aIT",()=>{var u=A.hj("ShapeEntity.ShapeStyle.RGBAColor",A.azt(),D.av),t=x.i
u.dg(0,1,"r",256,t)
u.dg(0,2,"g",256,t)
u.dg(0,3,"b",256,t)
u.dg(0,4,"a",256,t)
u.w=!1
return u})
v($,"b3s","aIU",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hj("ShapeEntity.ShapeStyle",A.aHM(),D.av),n=B.V("qW")
o.jC(1,"fill",A.azt(),n)
o.jC(2,"stroke",A.azt(),n)
n=x.i
o.fb(0,3,u,256,u,n)
o.FA(0,4,"lineCap",512,D.j2,D.mz,"lineCap",A.b0X(),B.V("kk"))
o.FA(0,5,t,512,D.j3,D.mx,t,A.b0Y(),B.V("kl"))
o.fb(0,6,s,256,s,n)
o.fb(0,7,r,256,r,n)
o.fb(0,8,q,256,q,n)
o.fb(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b3u","aIW",()=>{var u=A.hj("ShapeEntity",A.aHN(),D.av)
u.akc(0,B.b([2,3,4],x.t))
u.agS(0,1,"type",512,D.j4,D.mh,A.b0Z(),B.V("ja"))
u.jC(2,"shape",A.aHL(),B.V("qU"))
u.jC(3,"rect",A.aHK(),B.V("qT"))
u.jC(4,"ellipse",A.aHJ(),B.V("qS"))
u.jC(10,"styles",A.aHM(),B.V("qV"))
u.jC(11,"transform",A.azu(),B.V("o4"))
u.w=!1
return u})
v($,"b2n","aIm",()=>{var u="clipPath",t=A.hj("FrameEntity",A.aHG(),D.av)
t.dg(0,1,"alpha",256,x.i)
t.jC(2,"layout",A.aHH(),B.V("pR"))
t.jC(3,"transform",A.azu(),B.V("o4"))
t.tc(4,u,u)
t.zu(0,5,"shapes",2097154,A.aHN(),x.Y)
t.w=!1
return t})
v($,"b2S","aIy",()=>{var u,t,s=null,r=A.hj("MovieEntity",A.b0W(),D.av)
r.PN(1,"version")
r.jC(2,"params",A.aHI(),B.V("qb"))
u=A.hj("MovieEntity.ImagesEntry",s,D.av)
t=x.z
u.PQ(0,1,"key",64,s,s,s,s,t)
u.PQ(0,2,"value",32,s,s,s,s,t)
r.B6(A.aSJ("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.zu(0,4,"sprites",2097154,A.aHO(),x.m)
r.zu(0,5,"audios",2097154,A.aHF(),B.V("oQ"))
r.w=!1
return r})
v($,"b3t","aIV",()=>A.axy(D.mh,B.V("ja")))
v($,"b3p","aIR",()=>A.axy(D.mz,B.V("kk")))
v($,"b3q","aIS",()=>A.axy(D.mx,B.V("kl")))})()}
$__dart_deferred_initializers__["hNOpQCzylVsACEkzsvz8fi9l0Ww="] = $__dart_deferred_initializers__.current
