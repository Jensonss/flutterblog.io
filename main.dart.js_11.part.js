self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
awm(d){return new A.IE(d,null,null)},
IE:function IE(d,e,f){this.a=d
this.b=e
this.c=f},
aCF(d,e,f,g){var w,v
if(x.Q.b(d))w=B.ca(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.f0(x.R.a(d),!0,x.S)
v=new A.a9C(w,g,g,e)
v.e=f==null?w.length:f
return v},
a9D:function a9D(){},
a9C:function a9C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
acy:function acy(){},
acx:function acx(d){this.a=0
this.c=d},
Mu(d){var w=new A.a8H()
w.a14(d)
return w},
a8H:function a8H(){this.a=$
this.b=0
this.c=2147483647},
a9n:function a9n(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
a9G(d){var w,v,u,t,s,r
if(d<0){d=-d
w=!0}else w=!1
v=C.e.bW(d,17592186044416)
d-=v*17592186044416
u=C.e.bW(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.a9H(0,0,0,t,s,r):new A.dE(t,s,r)},
aCG(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dE((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
axk(d,e){return new A.dE(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
A_(d){if(d instanceof A.dE)return d
else if(B.jo(d))return A.a9G(d)
throw B.d(B.fw(d,"other","not an int, Int32 or Int64"))},
aSy(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.G4[d]
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
a9H(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cA(w,22)&1)
return new A.dE(w&4194303,v&4194303,f-i-(C.e.cA(v,22)&1)&1048575)},
A0(d,e){var w=C.e.xd(d,e)
return w},
dE:function dE(d,e,f){this.a=d
this.b=e
this.c=f},
avg:function avg(){},
q1:function q1(d){this.a=d},
VB:function VB(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aoJ:function aoJ(d,e){this.a=d
this.b=e},
aoK:function aoK(d,e){this.a=d
this.b=e},
aoO:function aoO(d){this.a=d},
aoN:function aoN(d){this.a=d},
aoM:function aoM(d){this.a=d},
aoL:function aoL(d){this.a=d},
nZ:function nZ(d,e,f){this.c=d
this.d=e
this.a=f},
YQ:function YQ(d,e,f){var _=this
_.d=$
_.e5$=d
_.bw$=e
_.a=null
_.b=f
_.c=null},
arF:function arF(d){this.a=d},
HL:function HL(){},
b_A(d,e,f){var w,v,u,t,s,r,q,p,o=$.aq().cg()
for(w=d.QL(),w=w.ga_(w),v=e.a,u=f.a;w.t();){t=w.gD(w)
t.gp(t)
for(s=u,r=!0;s<t.gp(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.xI(0,t.S1(s,s+p),C.h)
s+=p
r=!r}}return o},
am7:function am7(d,e){this.a=d
this.b=e},
KB:function KB(d){this.a=d},
Jl:function Jl(d){this.a=d
this.b=0},
hk(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a2i((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
azb(c1,c2,c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null
B.hj(c4,c0)
for(w=x.S,v=x.T,u=x.z,t=c1.c,s=c3.galk(),r=c3.gali(),q=c3.gal7(),p=c3.gal5(),o=c3.galr(),n=c3.galq(),m=c3.galo(),l=c3.galm(),k=c3.gale(),j=c3.galc(),i=c3.gal2(),h=c3.gal9(),g=c3.gal0(),f=c3.a;!0;){e=c3.UJ()
if(e===0)return
d=e&7
a0=C.e.cA(e,3)
a1=t.h(0,a0)
if(a1==null)a1=c0
if(a1==null||!A.aZI(a1.f,d)){if(!c2.rC().TP(e,c3))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c2.ej(c1,a1,c3.fa(!0)!==0)
break
case 32:c2.ej(c1,a1,new Uint8Array(B.fs(c3.v6())))
break
case 64:a3=c3.v6()
c2.ej(c1,a1,C.jv.em(a3))
break
case 256:a3=c3.b+=4
if(a3>c3.c)B.W(A.jT())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ej(c1,a1,a3.getFloat32(0,!0))
break
case 128:a3=c3.b+=8
if(a3>c3.c)B.W(A.jT())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c2.ej(c1,a1,a3.getFloat64(0,!0))
break
case 512:a6=c3.fa(!0)
a7=t.h(0,a0)
a8=a7==null?c0:a7.z
a3=(a8==null&&!0?c0.gamD():a8).$1(a6)
if(a3==null){a9=c2.rC()
a3=A.a9G(a6)
if(a9.b)A.hX("UnknownFieldSet","mergeVarintField")
C.b.C(a9.ll(a0).b,a3)}else c2.ej(c1,a1,a3)
break
case 1024:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAH():b0).$0()
b1=c2.wo(a1)
if(b1!=null)a3.kQ(b1)
c3.UE(a0,a3,c4)
c2.ej(c1,a1,a3)
break
case 2048:c2.ej(c1,a1,c3.fa(!0))
break
case 4096:c2.ej(c1,a1,c3.mN())
break
case 8192:c2.ej(c1,a1,A.aBq(c3.fa(!1)))
break
case 16384:b2=c3.mN()
c2.ej(c1,a1,(b2.W1(0,1).k(0,1)?A.a9H(0,0,0,b2.a,b2.b,b2.c):b2).IY(0,1))
break
case 32768:c2.ej(c1,a1,c3.fa(!1))
break
case 65536:c2.ej(c1,a1,c3.mN())
break
case 131072:a3=c3.b+=4
if(a3>c3.c)B.W(A.jT())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ej(c1,a1,a3.getUint32(0,!0))
break
case 262144:a3=c3.b+=8
if(a3>c3.c)B.W(A.jT())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ej(c1,a1,A.aCG(b4))
break
case 524288:a3=c3.b+=4
if(a3>c3.c)B.W(A.jT())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ej(c1,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c3.b+=8
if(a3>c3.c)B.W(A.jT())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ej(c1,a1,A.aCG(b4))
break
case 2097152:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAH():b0).$0()
b1=c2.wo(a1)
if(b1!=null)a3.kQ(b1)
c3.UG(a3,c4)
c2.ej(c1,a1,a3)
break
case 18:A.iA(c1,c2,c3,d,a1,g)
break
case 34:J.dz(c2.mE(c1,a1,u),new Uint8Array(B.fs(c3.v6())))
break
case 66:a3=c2.mE(c1,a1,u)
a4=c3.v6()
J.dz(a3,C.jv.em(a4))
break
case 258:A.iA(c1,c2,c3,d,a1,h)
break
case 130:A.iA(c1,c2,c3,d,a1,i)
break
case 514:A.aZt(c1,c2,c3,d,a1,a0,c4)
break
case 1026:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAH():b0).$0()
c3.UE(a0,a3,c4)
J.dz(c2.mE(c1,a1,u),a3)
break
case 2050:A.iA(c1,c2,c3,d,a1,j)
break
case 4098:A.iA(c1,c2,c3,d,a1,k)
break
case 8194:A.iA(c1,c2,c3,d,a1,l)
break
case 16386:A.iA(c1,c2,c3,d,a1,m)
break
case 32770:A.iA(c1,c2,c3,d,a1,n)
break
case 65538:A.iA(c1,c2,c3,d,a1,o)
break
case 131074:A.iA(c1,c2,c3,d,a1,p)
break
case 262146:A.iA(c1,c2,c3,d,a1,q)
break
case 524290:A.iA(c1,c2,c3,d,a1,r)
break
case 1048578:A.iA(c1,c2,c3,d,a1,s)
break
case 2097154:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAH():b0).$0()
c3.UG(a3,c4)
J.dz(c2.mE(c1,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c2.LK(c1,a1,u,u)
b6=c3.fa(!0)
b7=c3.c
c3.c=c3.b+b6
a4=b5.b
a5=A.aF8(a4.length)
A.azb(b5,new A.Uf(c0,c0,a5,b5.f.a===0?c0:B.k(w,w)),c3,c4)
if(c3.d!==0)B.W(A.MI())
c3.c=b7
b8=J.ag(a5)
b9=b8.h(a5,0)
if(b9==null)b9=a4[0].r.$0()
b2=b8.h(a5,1)
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b9,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
iA(d,e,f,g,h,i){A.aGr(d,e,f,g,h,new A.au7(i))},
aZt(d,e,f,g,h,i,j){A.aGr(d,e,f,g,h,new A.au5(f,d,i,j,e))},
aGr(d,e,f,g,h,i){var w,v,u,t=e.mE(d,h,x.z)
if(g===2){w=f.fa(!0)
if(w<0)B.W(B.bM(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.W(A.jT())
f.c=v
new A.au6(f,i,t).$0()
f.c=u}else i.$1(t)},
aBq(d){if((d&1)===1)return-C.e.cA(d,1)-1
else return C.e.cA(d,1)},
MI(){return new A.lq("Protocol message end-group tag did not match expected tag.")},
aCI(){return new A.lq("CodedBufferReader encountered a malformed varint.")},
axl(){return new A.lq("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
jT(){return new A.lq("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
aYT(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eS(e))return"not type bool"
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
case 512:if(!(e instanceof A.OY))return"not type ProtobufEnum"
return v
case 2048:case 8192:case 524288:if(!B.jo(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jo(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dE))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cV))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
aY5(d){if(d==null)throw B.d(B.bM("Can't add a null to a repeated field",null))},
aRI(d,e,f,g,h,i,j,k,l,m,n){return new A.cZ(d,e,f,g,A.aCb(g,i),l,m,null,n.i("cZ<0>"))},
aRJ(d,e,f,g,h,i,j,k,l,m,n){var w=new A.cZ(d,e,f,g,new A.a60(h,n),i,m,h,n.i("cZ<0>"))
w.a11(d,e,f,g,h,i,j,k,l,m,n)
return w},
aCb(d,e){if(e==null)return A.aTH(d)
if(x.O.b(e))return e
return new A.a62(e)},
aT_(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aCb(g,new A.aaZ(h,i,j,n,o))
B.hj(d,"name")
B.hj(e,"tagNumber")
return new A.q4(h,i,j,d,e,f,g,w,null,null,null,n.i("@<0>").ah(o).i("q4<1,2>"))},
hX(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
aWN(d,e,f){var w,v=A.aF8(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.Uf(d,f,v,w)},
aF8(d){if(d===0)return $.aWO
return B.aQ(d,null,!1,x.z)},
aF7(d,e,f){var w,v
if(x.j.b(f)&&J.ec(f))return d
if(x.f.b(f)&&J.ec(f))return d
d=A.mg(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.mg(d,A.ayC(f))
else if(v!==512)d=A.mg(d,J.x(f))
else d=(w&2)!==0?A.mg(d,A.ayC(J.aOO(f,new A.amJ()))):A.mg(d,f.a)
return d},
aTH(d){switch(d){case 16:case 17:return A.b0N()
case 32:case 33:return A.b0O()
case 64:case 65:return A.b0R()
case 256:case 257:case 128:case 129:return A.b0P()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b0Q()
default:return null}},
aTG(){return""},
aTD(){return B.b([],x.t)},
aTC(){return!1},
aTF(){return 0},
aTE(){return 0},
aS5(d,e){var w,v=$.aCk.h(0,d)
if(v!=null)return v
w=new A.Gz(d,e.i("Gz<0>"))
$.aCk.m(0,d,w)
return w},
aS4(d,e){var w=e.a(d.gbx().Q.$0())
w.kQ(d)
return w},
aDs(d,e){var w=B.b([],e.i("t<0>"))
B.hj(d,"check")
return new A.uJ(w,d,e.i("uJ<0>"))},
axT(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
aWm(){return new A.kv(B.k(x.S,x.k))},
ayZ(d,e){var w
if(d instanceof A.cV)return d.k(0,e)
if(e instanceof A.cV)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.x6(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.ayT(d,e)
return J.f(d,e)},
x6(d,e){var w,v=J.ag(d),u=J.ag(e)
if(v.gp(d)!==u.gp(e))return!1
for(w=0;w<v.gp(d);++w)if(!A.ayZ(v.h(d,w),u.h(e,w)))return!1
return!0},
ayT(d,e){var w=J.ag(d)
if(w.gp(d)!==J.aZ(e))return!1
return J.aOx(w.gb7(d),new A.at_(d,e))},
aGD(d,e){var w=B.f0(d,!0,e)
C.b.hK(w)
return w},
mg(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aFc(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
ayC(d){return A.aFc(J.aOz(d,0,new A.anS()))},
aZI(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a2i:function a2i(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a2j:function a2j(){},
au7:function au7(d){this.a=d},
au5:function au5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
au6:function au6(d,e,f){this.a=d
this.b=e
this.c=f},
K8:function K8(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lq:function lq(d){this.a=d},
amE:function amE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
amz:function amz(){},
cZ:function cZ(d,e,f,g,h,i,j,k,l){var _=this
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
a60:function a60(d,e){this.a=d
this.b=e},
a62:function a62(d){this.a=d},
a61:function a61(){},
q4:function q4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aaZ:function aaZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Uf:function Uf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
amJ:function amJ(){},
amL:function amL(d,e){this.a=d
this.b=e},
amM:function amM(d){this.a=d},
amK:function amK(d,e){this.a=d
this.b=e},
cV:function cV(){},
Gz:function Gz(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
arw:function arw(d){this.a=d},
O0:function O0(d){this.a=d},
pr:function pr(d,e,f){this.a=d
this.b=e
this.$ti=f},
uJ:function uJ(d,e,f){this.a=d
this.b=e
this.$ti=f},
nC:function nC(){},
fh:function fh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
acX:function acX(d){this.a=d},
OY:function OY(){},
kv:function kv(d){this.a=d
this.b=!1},
ajB:function ajB(){},
ajC:function ajC(d){this.a=d},
rk:function rk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
at_:function at_(d,e){this.a=d
this.b=e},
anS:function anS(){},
afu:function afu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afv:function afv(){},
afA:function afA(d){this.a=d},
afz:function afz(){},
afy:function afy(d){this.a=d},
afw:function afw(d,e,f){this.a=d
this.b=e
this.c=f},
afx:function afx(d){this.a=d},
XR:function XR(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ar4:function ar4(){},
ar5:function ar5(d,e,f){this.a=d
this.b=e
this.c=f},
Cl:function Cl(d,e){this.c=d
this.a=e},
PU:function PU(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.bF$=m},
Gf:function Gf(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
ar3:function ar3(d){this.a=d},
aTh(){var w=new A.qc()
w.hc()
return w},
aVv(){var w=new A.lW()
w.hc()
return w},
aPn(){var w=new A.oS()
w.hc()
return w},
aSJ(){var w=new A.pS()
w.hc()
return w},
aWf(){var w=new A.o6()
w.hc()
return w},
aVb(){var w=new A.qV()
w.hc()
return w},
aVa(){var w=new A.qU()
w.hc()
return w},
aV9(){var w=new A.qT()
w.hc()
return w},
aVe(){var w=new A.qX()
w.hc()
return w},
aVf(){var w=new A.qW()
w.hc()
return w},
aVh(){var w=new A.qS()
w.hc()
return w},
aRY(){var w=new A.lf()
w.hc()
return w},
aD8(){var w=x.N,v=x.I
w=new A.lB(new A.afu(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.Z))
w.hc()
return w},
qc:function qc(){this.a=null},
lW:function lW(){this.a=null},
oS:function oS(){this.a=null},
pS:function pS(){this.a=null},
o6:function o6(){this.a=null},
qV:function qV(){this.a=null},
qU:function qU(){this.a=null},
qT:function qT(){this.a=null},
qX:function qX(){this.a=null},
qW:function qW(){this.a=null},
qS:function qS(){this.a=null},
lf:function lf(){this.a=this.b=null},
lB:function lB(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
abQ:function abQ(){},
aVg(d){return $.aJe().h(0,d)},
aVc(d){return $.aJa().h(0,d)},
aVd(d){return $.aJb().h(0,d)},
jb:function jb(d,e){this.a=d
this.b=e},
kl:function kl(d,e){this.a=d
this.b=e},
km:function km(d,e){this.a=d
this.b=e},
a0y(d){var w=0,v=B.S(x.I),u,t
var $async$a0y=B.O(function(e,f){if(e===1)return B.P(f,v)
while(true)switch(w){case 0:$.h3.toString
w=4
return B.M($.aq().jc(d,!1,null,null),$async$a0y)
case 4:w=3
return B.M(f.hI(),$async$a0y)
case 3:t=f
u=t.gfn(t)
w=1
break
case 1:return B.Q(u,v)}})
return B.R($async$a0y,v)}},B,C,J,D,E,F,G
A=a.updateHolder(c[5],A)
B=c[0]
C=c[2]
J=c[1]
D=c[18]
E=c[10]
F=c[12]
G=c[17]
A.IE.prototype={}
A.a9D.prototype={}
A.a9C.prototype={
gp(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gajn(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
h(d,e){return this.a[this.b+e]},
UD(){return this.a[this.b++]},
zK(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.acy.prototype={}
A.acx.prototype={
I4(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.Cd(v-t)
C.F.ck(u,w,v,d)
s.a+=r},
amO(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.Cd(v-t)}C.F.b_(u,w,w+d.gp(d),d.a,d.b)
s.a=s.a+d.gp(d)},
Ja(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.ca(w.c.buffer,d,e-d)},
J9(d){return this.Ja(d,null)},
Cd(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.F.ck(t,0,u,v)
this.c=t},
a4x(){return this.Cd(null)},
gp(d){return this.a}}
A.a8H.prototype={
a14(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.la(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.a9n.prototype={
a8c(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.aar())break}},
aar(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gajn())return!1
w=v.hU(3)
switch(C.e.cA(w,1)){case 0:if(v.aaA()===-1)return!1
break
case 1:if(v.Lj(v.r,v.w)===-1)return!1
break
case 2:if(v.aau()===-1)return!1
break
default:return!1}return(w&1)===0},
hU(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&B.c()
u=w.b
t=w.e
t===$&&B.c()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|C.e.la(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.t1(1,d)
s.d=C.e.t2(w,d)
s.e=v-d
return(w&u-1)>>>0},
Dp(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.c()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&B.c()
t=v.b
s=v.e
s===$&&B.c()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|C.e.la(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.la(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.t2(v,q)
p.e=u-q
return r&65535},
aaA(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.hU(16)
v=p.hU(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&B.c()
if(w>v.gp(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&B.c()
r=s-(t-u)}else r=w
q=A.aCF(v.a,v.d,r,t)
v.b=v.b+q.gp(q)
p.c.amO(q)
return 0},
aau(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.hU(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.hU(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.hU(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.hU(3)
if(s===-1)return-1
u[D.Gk[t]]=s}r=A.Mu(u)
q=l+w
p=new Uint8Array(q)
o=B.ca(p.buffer,0,l)
n=B.ca(p.buffer,l,w)
if(m.a3I(q,r,p)===-1)return-1
return m.Lj(A.Mu(o),A.Mu(n))},
Lj(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Dp(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a4x()
w.c[w.a++]=v&255
continue}u=v-257
t=D.Gx[u]+p.hU(D.FP[u])
s=p.Dp(e)
if(s<0||s>29)return-1
r=D.FS[s]+p.hU(D.Gm[s])
for(q=-r;t>r;){w.I4(w.J9(q))
t-=r}if(t===r)w.I4(w.J9(q))
else w.I4(w.Ja(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a3I(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.Dp(e)
if(u===-1)return-1
switch(u){case 16:t=q.hU(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.hU(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.hU(7)
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
A.dE.prototype={
V(d,e){var w=A.A_(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dE(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
a7(d,e){var w=A.A_(e)
return A.a9H(this.a,this.b,this.c,w.a,w.b,w.c)},
ai(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.A_(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
return new A.dE(k&4194303,j&4194303,(n>>>18)+(m>>>5)+((l&4095)<<8)+(j>>>22)&1048575)},
W1(d,e){var w=A.A_(e)
return new A.dE(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
IY(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.EK:D.EJ
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.A0(w,e)
if(v)u|=~C.e.t2(o,e)&1048575
t=p.b
s=22-e
r=A.A0(t,e)|C.e.la(w,s)
q=A.A0(p.a,e)|C.e.la(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.A0(w,t)
if(v)r|=~C.e.xd(n,t)&4194303
q=A.A0(p.b,t)|C.e.la(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.A0(w,t)
if(v)q|=~C.e.xd(n,t)&4194303}return new A.dE(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dE)w=e
else if(B.jo(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.a9G(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
b9(d,e){return this.a31(e)},
a31(d){var w=A.A_(d),v=this.c,u=v>>>19,t=w.c
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
return A.aSy(10,t,s,r,u)},
$ict:1}
A.q1.prototype={
ad(){return new A.VB(C.i)}}
A.VB.prototype={
H(d){var w=null,v=x.D
return B.lX(C.cm,B.b([new B.e0(C.v,w,w,E.aCx("md/live.jpg",w,w,w,w),w),new B.e0(C.cn,w,w,B.fl(B.hn(B.b([C.c1,B.mW(D.T2,new A.aoJ(this,d),w),C.c1,B.mW(D.SV,new A.aoK(this,d),w)],v),C.a5,C.f8,C.a3),w,300),w)],v),C.R,C.bT)},
WZ(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k3(new A.aoO(v),!1)
u=B.aaP(d,x.u)
u.toString
w=v.d
w.toString
u.nz(0,w)},
WX(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k3(new A.aoM(v),!1)
u=B.aaP(d,x.u)
u.toString
w=v.d
w.toString
u.nz(0,w)}}
A.nZ.prototype={
ad(){return new A.YQ(null,null,C.i)},
ahx(){return this.c.$0()}}
A.YQ.prototype={
av(){var w,v=this,u=null
v.aI()
w=new A.PU(0,1,u,C.el,C.n,u,C.a7,C.C,new B.b7(B.b([],x.F),x.W),new B.b7(B.b([],x.b),x.V))
w.K5(C.el,u,C.n,0,u,1,u,v)
v.d=w
v.z7()},
n(){this.a0T()
var w=this.d
w===$&&B.c()
w.sI_(null)
w.CW=!0
w.XG()},
H(d){var w=this.d
w===$&&B.c()
return new A.Cl(w,null)},
z7(){var w=0,v=B.S(x.z),u=this,t,s
var $async$z7=B.O(function(d,e){if(d===1)return B.P(e,v)
while(true)switch(w){case 0:w=2
return B.M(D.Aj.yf(u.a.d),$async$z7)
case 2:t=e
s=u.d
s===$&&B.c()
s.sI_(t)
u.d.XH(0,null).a.a.h2(new A.arF(u))
return B.Q(null,v)}})
return B.R($async$z7,v)}}
A.HL.prototype={
n(){var w=this,v=w.bw$
if(v!=null)v.J(0,w.gfF())
w.bw$=null
w.aH()},
bD(){this.cP()
this.cr()
this.fG()}}
A.am7.prototype={
I(){return"_DashOffsetType."+this.b}}
A.KB.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.KB&&e.a===this.a&&!0},
gv(d){return B.X(this.a,D.UG,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Jl.prototype={}
A.a2i.prototype={
tf(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.Bb(e===0?new A.cZ("<removed field>",0,v,0,w,w,w,w,x.q):A.aRI(f,e,v,g,w,h,k,l,i,j,m))},
PW(d,e,f,g,h,i,j,k,l){return this.tf(d,e,f,g,h,i,j,k,null,l)},
Bb(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fc(d,e,f,g,h,i){var w=null
this.tf(0,e,f,g,w,w,w,w,h,i)},
dh(d,e,f,g,h){return this.fc(d,e,f,g,null,h)},
te(d,e,f){var w=null
this.tf(0,d,e,64,w,w,w,w,f,x.N)},
PT(d,e){return this.te(d,e,null)},
FG(d,e,f,g,h,i,j,k,l){this.tf(0,e,f,g,h,null,k,i,j,l)},
ah4(d,e,f,g,h,i,j,k){return this.FG(d,e,f,g,h,i,null,j,k)},
zA(d,e,f,g,h,i){var w=null
this.Bb(A.aRJ(f,e,this.b.length,g,A.azG(),h,w,w,w,w,i))},
jD(d,e,f,g){this.tf(0,d,e,2097152,A.aS5(f,g).ga4Z(),f,null,null,null,g)},
aku(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gvP(){var w=this.x
return w==null?this.x=this.a3e():w},
a3e(){var w=this.c
w=B.f0(w.gaC(w),!1,x.q)
C.b.eg(w,new A.a2j())
return w},
a3J(d,e,f){var w=this.c.h(0,d),v=w==null?null:w.z
return(v==null&&!0?null.gamD():v).$1(f)}}
A.K8.prototype={
Bw(d){var w=this.b+=d
if(w>this.c)throw B.d(A.jT())},
UE(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.axl())
w.e=v+1
e.TQ(w,f)
if(w.d!==(d<<3|4)>>>0)B.W(A.MI());--w.e},
UG(d,e){var w,v,u=this,t=u.fa(!0),s=u.e
if(s>=64)throw B.d(A.axl())
if(t<0)throw B.d(B.bM(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.jT())
u.e=s+1
d.TQ(u,e)
if(u.d!==0)B.W(A.MI());--u.e
u.c=w},
ald(){return this.fa(!0)},
alf(){return this.mN()},
zK(){return this.fa(!1)},
als(){return this.mN()},
aln(){return A.aBq(this.fa(!1))},
alp(){var w=this.mN(),v=A.A_(1),u=w.a,t=w.b,s=w.c
return(new A.dE(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.a9H(0,0,0,u,t,s):w).IY(0,1)},
al6(){return this.oI(4).getUint32(0,!0)},
al8(){return this.Hw()},
alj(){return this.oI(4).getInt32(0,!0)},
Hw(){var w=this.oI(8),v=B.ca(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dE((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
al1(){return this.fa(!0)!==0},
v6(){var w,v=this,u=v.fa(!0)
v.Bw(u)
w=v.a
return B.ca(w.buffer,w.byteOffset+v.b-u,u)},
ala(){return this.oI(4).getFloat32(0,!0)},
al3(){return this.oI(8).getFloat64(0,!0)},
UJ(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.fa(!1)
if(C.e.cA(w,3)===0)throw B.d(new A.lq("Protocol message contained an invalid tag (zero)."))
return w},
abc(){this.Bw(1)
return this.a[this.b-1]},
fa(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.t1(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aCI())},
mN(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.W(A.jT())
s=w[t-1]
v=(v|C.e.t1(s&127,u*7))>>>0
if((s&128)===0)return A.axk(0,v)}s=q.abc()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.axk(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.W(A.jT())
s=w[t-1]
r=(r|C.e.t1(s&127,u*7+3))>>>0
if((s&128)===0)return A.axk(r,v)}throw B.d(A.aCI())},
oI(d){var w
this.Bw(d)
w=this.a
return B.nt(w.buffer,w.byteOffset+this.b-d,d)}}
A.lq.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibV:1}
A.amE.prototype={
adY(d){var w
d.gana()
w=this.a
w.a.gbx()
w=B.bM("Extension "+B.j(d)+" not legal for message "+w.ga97(),null)
throw B.d(w)},
acp(d,e){var w,v=this.a.e
if(v!=null){w=d.gkZ()
if(v.b)A.hX("UnknownFieldSet","clearField")
v.a.u(0,w)}this.c.m(0,d.gkZ(),e)},
hf(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaC(w),w=new B.cO(J.ab(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gajv()){q=u.h(0,r.gkZ())
if(q==null)continue
if(r.gajo())for(p=J.ab(s.a(q));p.t();)p.gD(p).a.hf()
u.m(0,r.gkZ(),q.vf())}else if(r.gajo()){o=u.h(0,r.gkZ())
if(o!=null)t.a(o).a.hf()}}}}
A.amz.prototype={}
A.cZ.prototype={
a11(d,e,f,g,h,i,j,k,l,m,n){B.hj(this.b,"name")
B.hj(this.d,"tagNumber")},
gUK(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pr(B.b([],w.i("t<cZ.T>")),A.azG(),w.i("pr<cZ.T>"))}return w}return v.r.$0()},
Mu(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.rK()
w=J.ag(d)
if(w.gZ(d))return!0
if(!w.h(d,0).a.a.gbx().w)return!0
return w.j3(d,new A.a61())},
j(d){return this.b}}
A.q4.prototype={}
A.Uf.prototype={
ga97(){return this.a.gbx().a},
C8(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.amE(this,B.k(w,x.G),B.k(w,x.z))}return w},
rC(){var w=this.e
if(w==null){w=this.f
if(!B.eS(w)||w)return $.aJA()
w=this.e=new A.kv(B.k(x.S,x.k))}return w},
hf(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.f
if(!B.eS(j)||j)return
k.f=!0
for(j=k.a.gbx().gvP(),w=j.length,v=k.c,u=J.ag(v),t=x.J,s=x.d,r=0;r<w;++r){q=j[r]
p=q.f
if((p&2)!==0){o=q.e
n=u.h(v,o)
if(n==null)continue
if((p&2098176)!==0)for(p=J.ab(s.a(n));p.t();)p.gD(p).a.hf()
u.m(v,o,n.vf())}else if((p&4194304)!==0){p=q.e
m=u.h(v,p)
if(m==null)continue
u.m(v,p,m.ahL())}else if((p&2098176)!==0){l=u.h(v,q.e)
if(l!=null)t.a(l).a.hf()}}if(k.d!=null)k.C8().hf()
if(k.e!=null)k.rC().hf()},
a56(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eS(w)||w)return d.gUK()
w=this.a
v=w.F8(d.d,d,B.p(d).i("cZ.T"))
this.mS(w.gbx(),d,v)
return v},
a57(d,e){var w,v=this.f
if(!B.eS(v)||v)return d.gUK()
v=this.a
v.toString
w=v.F8(d.d,e.i("cZ<0>").a(d),e)
this.mS(v.gbx(),d,w)
return w},
a58(d,e,f){var w,v,u=this.f
if(!B.eS(u)||u)return new A.fh(d.as,d.at,B.a3v(B.k(e,f),e,f),!1,e.i("@<0>").ah(f).i("fh<1,2>"))
u=this.a
w=d.$ti
v=u.R9(d.d,d,w.c,w.z[1])
this.mS(u.gbx(),d,v)
return v},
wo(d){var w=J.aG(this.c,d.e)
return w},
a2V(d){var w,v,u,t,s=this,r=s.f
if(!B.eS(r)||r)A.avu().$1(s.a.gbx().a)
r=s.a.gbx()
w=r.c.h(0,d)
if(w!=null){J.cr(s.c,w.e,null)
r=r.f
v=w.d
if(r.a5(0,v)){u=s.r
u.toString
u.u(0,r.h(0,v))}t=r.h(0,v)
if(t!=null)s.r.m(0,t,0)
return}r=s.d
if(r!=null)r.b.h(0,d)},
ej(d,e,f){B.hj(e,"fi")
this.mS(d,e,f)},
mE(d,e,f){var w,v=this.wo(e)
if(v!=null)return f.i("y<0>").a(v)
w=this.a.F8(e.d,e,B.p(e).i("cZ.T"))
this.mS(d,e,w)
return w},
LK(d,e,f,g){var w,v,u=this.wo(e)
if(u!=null)return f.i("@<0>").ah(g).i("fh<1,2>").a(u)
w=e.$ti
v=this.a.R9(e.d,e,w.c,w.z[1])
this.mS(d,e,v)
return f.i("@<0>").ah(g).i("fh<1,2>").a(v)},
mS(d,e,f){var w,v=e.d,u=d.f.h(0,v)
if(u!=null){w=this.r
this.a2V(w.h(0,u))
w.m(0,u,v)}J.cr(this.c,e.e,f)},
ae(d){var w=J.aG(this.c,d)
if(w!=null)return w
return this.a56(this.a.gbx().b[d])},
om(d,e){var w=J.aG(this.c,d)
if(w!=null)return e.i("y<0>").a(w)
return this.a57(e.i("cZ<0>").a(this.a.gbx().b[d]),e)},
a1k(d,e,f,g){var w=J.aG(this.c,e)
if(w!=null)return f.i("@<0>").ah(g).i("aN<1,2>").a(w)
return this.a58(f.i("@<0>").ah(g).i("q4<1,2>").a(this.a.gbx().b[e]),f,g)},
w3(d){var w=J.aG(this.c,d)
if(w==null)return 0
return w},
B9(d){var w=J.aG(this.c,d)
if(w==null)return""
return w},
ra(d){var w=J.aG(this.c,d)
if(w==null)return!1
if(x.j.b(w))return J.jr(w)
return!0},
a4o(d){var w,v,u,t,s,r=this
if(r.a.gbx()!==d.a.gbx())return!1
for(w=r.c,v=J.ag(w),u=d.c,t=J.ag(u),s=0;s<v.gp(w);++s)if(!r.a4n(v.h(w,s),t.h(u,s)))return!1
w=r.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.ayT(w.c,v.c)))return!1}w=r.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a4n(d,e){var w,v=d==null
if(!v&&e!=null)return A.ayZ(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.ec(w))return!0
if(x.f.b(w)&&J.ec(w))return!0
return!1},
ga83(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jo(n)?n:null)!=null
if(n){n=o.f
n=B.jo(n)?n:null
n.toString
return n}n=o.a
w=A.mg(0,B.fG(n.gbx()))
v=o.c
for(n=n.gbx().gvP(),u=n.length,t=J.ag(v),s=0;s<u;++s){r=n[s]
q=t.h(v,r.e)
if(q==null)continue
w=A.aF7(w,r,q)}n=o.d
if(n!=null){u=n.c
p=A.aGD(new B.b6(u,B.p(u).i("b6<1>")),x.S)
for(t=p.length,n=n.b,s=0;s<p.length;p.length===t||(0,B.J)(p),++s){r=n.h(0,p[s])
w=A.aF7(w,r,u.h(0,r.gkZ()))}}n=o.e
n=n==null?null:n.gv(n)
w=A.mg(w,n==null?0:n)
n=o.f
if((!B.eS(n)||n)&&!0)o.f=w
return w},
VY(d,e){var w,v,u,t,s,r,q,p,o=this,n=new A.amM(new A.amL(d,e))
for(w=o.a.gbx().gvP(),v=w.length,u=o.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
p=r.b
n.$2(q,p===""?C.e.j(r.d):p)}w=o.d
if(w!=null){w=w.b
v=B.p(w).i("b6<1>")
v=B.ax(new B.b6(w,v),!0,v.i("q.E"))
C.b.hK(v)
C.b.M(v,new A.amK(o,n))}w=o.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kv(B.k(x.S,x.k)).Dm("")},
a96(d){var w,v,u,t,s,r,q,p
for(w=d.a.gbx().gvP(),v=w.length,u=d.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
if(q!=null)this.N5(r,q,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fC(v,v.r),w=w.b;u.t();){p=w.h(0,u.d)
this.N5(p,v.h(0,p.gkZ()),!0)}if(d.e!=null){w=this.rC()
v=d.e
v.toString
w.aka(v)}},
N5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a.gbx(),k=l.c.h(0,d.d)
if(k==null&&f)k=d
w=(d.f&2098176)!==0
v=k.f
if((v&4194304)!==0){x.T.a(k)
v=k.$ti
u=m.LK(l,k,v.c,v.z[1])
if((k.at&2098176)!==0)for(l=J.ab(J.awb(e)),v=u.c,t=x.J;l.t();){s=l.gD(l)
r=s.a
s=t.a(s.b)
q=t.a(s.gbx().Q.$0())
q.kQ(s)
if(u.d)B.W(B.U(y.a))
if(r==null)B.W(B.bM("Can't add a null to a map field",null))
v.m(0,r,q)}else u.G(u,e)
return}if((v&2)!==0){v=B.p(k).i("cZ.T")
if(w){p=m.mE(l,k,v)
for(l=e.a,v=x.J,t=J.br(p),o=0;o<l.length;++o){s=l[o]
r=v.a(s.gbx().Q.$0())
r.kQ(s)
t.C(p,r)}}else J.oN(m.mE(l,k,v),e)
return}if(w){n=f?m.C8().c.h(0,x.G.a(k).gkZ()):J.aG(m.c,k.e)
if(n==null){v=x.J
e=A.aS4(v.a(e),v)}else{n.kQ(e)
e=n}}if(f){l=m.C8()
x.G.a(k)
if(l.d)A.avu().$1(l.a.a.gbx().a)
if(k.gajv())B.W(B.bM(l.a.Om(k,e,"repeating field (use get + .add())"),null))
if(l.d)A.avu().$1(l.a.a.gbx().a)
l.adY(k)
l.a.PM(k,e)
l.b.m(0,k.gkZ(),k)
l.acp(k,e)}else{m.PM(k,e)
m.mS(l,k,e)}},
PM(d,e){var w,v=this.f
if(!B.eS(v)||v)A.avu().$1(this.a.gbx().a)
w=A.aYT(d.f,e)
if(w!=null)throw B.d(B.bM(this.Om(d,e,w),null))},
Om(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbx().a+" to value ("+B.j(e)+"): "+f},
rK(){var w,v,u,t,s=this.a
if(!s.gbx().w)return!0
for(s=s.gbx().c,s=s.gaC(s),s=new B.cO(J.ab(s.a),s.b),w=this.c,v=J.ag(w),u=B.p(s).z[1];s.t();){t=s.a
if(t==null)t=u.a(t)
if(!t.Mu(v.h(w,t.e)))return!1}return this.a81()},
a81(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaC(u),u=new B.cO(J.ab(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Mu(this.d.c.h(0,v.gkZ())))return!1}return!0}}
A.cV.prototype={
hc(){this.a=A.aWN(this,this.gbx(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cV){w=this.a
w.toString
v=e.a
v.toString
v=w.a4o(v)
w=v}else w=!1
return w},
gv(d){return this.a.ga83()},
j(d){var w,v=new B.cA("")
this.a.VY(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
TQ(d,e){var w=this.a.a.gbx(),v=this.a
v.toString
A.azb(w,v,d,e)},
F8(d,e,f){var w=e.Q
w.toString
return A.aDs(w,f)},
R9(d,e,f,g){return new A.fh(e.as,e.at,B.k(f,g),!1,f.i("@<0>").ah(g).i("fh<1,2>"))},
kQ(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.a96(w)},
W0(d,e,f){return this.a.a1k(this,d,e,f)}}
A.Gz.prototype={
ga4Z(){var w=this.c
if(w===$){w!==$&&B.aC()
w=this.c=new A.arw(this)}return w}}
A.O0.prototype={}
A.pr.prototype={
hZ(d){return new B.DT("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.W(this.hZ("set"))},
sp(d,e){B.W(this.hZ("set length"))},
dL(d,e,f){return B.W(this.hZ("setAll"))},
C(d,e){return B.W(this.hZ("add"))},
G(d,e){return B.W(this.hZ("addAll"))},
dR(d,e,f){return B.W(this.hZ("insert"))},
ew(d,e,f){return B.W(this.hZ("insertAll"))},
u(d,e){return B.W(this.hZ("remove"))},
bU(d,e){return B.W(this.hZ("removeAt"))},
dl(d){return B.W(this.hZ("removeLast"))},
b_(d,e,f,g,h){return B.W(this.hZ("setRange"))},
ck(d,e,f,g){return this.b_(d,e,f,g,0)},
dI(d,e,f){return B.W(this.hZ("removeRange"))}}
A.uJ.prototype={
vf(){return new A.pr(this.a,A.azG(),this.$ti.i("pr<1>"))},
C(d,e){this.b.$1(e)
this.a.push(e)},
G(d,e){J.f8(e,this.b)
C.b.G(this.a,e)},
dR(d,e,f){this.b.$1(f)
C.b.dR(this.a,e,f)},
ew(d,e,f){J.f8(f,this.b)
C.b.ew(this.a,e,f)},
dL(d,e,f){J.f8(f,this.b)
C.b.dL(this.a,e,f)},
u(d,e){return C.b.u(this.a,e)},
bU(d,e){return C.b.bU(this.a,e)},
dl(d){return this.a.pop()},
b_(d,e,f,g,h){J.Il(g,h).kf(0,f-e).M(0,this.b)
C.b.b_(this.a,e,f,g,h)},
ck(d,e,f,g){return this.b_(d,e,f,g,0)},
dI(d,e,f){return C.b.dI(this.a,e,f)}}
A.nC.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.nC&&A.x6(e,this)},
gv(d){return A.ayC(this.a)},
ga_(d){var w=this.a
return new J.fV(w,w.length)},
dj(d,e,f){var w=this.a
return new B.a9(w,e,B.a6(w).i("@<1>").ah(f).i("a9<1,2>"))},
f3(d,e){return this.dj(d,e,x.z)},
q(d,e){return C.b.q(this.a,e)},
M(d,e){C.b.M(this.a,e)},
hv(d,e,f){return C.b.il(this.a,e,f)},
il(d,e,f){return this.hv(d,e,f,x.z)},
j3(d,e){return C.b.j3(this.a,e)},
b6(d,e){return C.b.b6(this.a,e)},
nD(d){return this.b6(d,"")},
dN(d,e){return C.b.dN(this.a,e)},
dJ(d,e){var w=this.a,v=B.a6(w)
return e?B.b(w.slice(0),v):J.pN(w.slice(0),v.c)},
dd(d){return this.dJ(d,!0)},
jo(d){var w=this.a
return B.jY(w,B.a6(w).c)},
gZ(d){return this.a.length===0},
gbT(d){return this.a.length!==0},
kf(d,e){var w=this.a
return B.dR(w,0,B.dx(e,"count",x.S),B.a6(w).c)},
iJ(d,e){var w=this.a
return B.dR(w,e,null,B.a6(w).c)},
gL(d){return C.b.gL(this.a)},
gO(d){return C.b.gO(this.a)},
j7(d,e,f){return C.b.j7(this.a,e,f)},
pT(d,e){return this.j7(d,e,null)},
b1(d,e){return this.a[e]},
j(d){return B.pM(this.a,"[","]")},
h(d,e){return this.a[e]},
gp(d){return this.a.length},
bK(d,e,f){return C.b.bK(this.a,e,f)},
dZ(d,e){return this.bK(d,e,null)},
qN(d,e,f){var w=this.a
B.d3(e,f,w.length,null,null)
return B.dR(w,e,f,B.a6(w).c)},
m(d,e,f){this.b.$1(f)
this.a[e]=f},
sp(d,e){var w=this.a
if(e>w.length)throw B.d(B.U("Extending protobuf lists is not supported"))
C.b.sp(w,e)}}
A.fh.prototype={
h(d,e){return this.c.h(0,e)},
m(d,e,f){var w="Can't add a null to a map field"
if(this.d)throw B.d(B.U(y.a))
if(e==null)B.W(B.bM(w,null))
if(f==null)B.W(B.bM(w,null))
this.c.m(0,e,f)},
k(d,e){var w,v,u,t,s=this
if(e==null)return!1
if(e===s)return!0
if(!(e instanceof A.fh))return!1
if(J.aZ(e.gb7(e))!==J.aZ(s.gb7(s)))return!1
for(w=s.c,v=J.ab(w.gb7(w)),u=e.c;v.t();){t=v.gD(v)
if(!J.f(u.h(0,t),w.h(0,t)))return!1}return!0},
gv(d){var w=this.c
w=w.gdu(w)
return w.il(w,0,new A.acX(this))},
K(d){if(this.d)throw B.d(B.U(y.a))
this.c.K(0)},
gb7(d){var w=this.c
return w.gb7(w)},
u(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.u(0,e)},
ahL(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rz(t,w.i("@<aA.K>").ah(w.i("aA.V")).i("rz<1,2>"))),w=new B.Ff(J.ab(t.gb7(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.hf()}return t}}
A.OY.prototype={
gv(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kv.prototype={
TP(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.hX(s,"mergeFieldFromBuffer")
w=C.e.cA(d,3)
switch(d&7){case 0:v=e.mN()
if(t.b)A.hX(s,"mergeVarintField")
C.b.C(t.ll(w).b,v)
return!0
case 1:v=e.Hw()
if(t.b)A.hX(s,"mergeFixed64Field")
C.b.C(t.ll(w).d,v)
return!0
case 2:v=e.v6()
if(t.b)A.hX(s,"mergeLengthDelimitedField")
C.b.C(t.ll(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.W(A.axl())
e.e=v+1
u=new A.kv(B.k(x.S,x.k))
u.ak9(e)
if(e.d!==(w<<3|4)>>>0)B.W(A.MI());--e.e
if(t.b)A.hX(s,"mergeGroupField")
C.b.C(t.ll(w).e,u)
return!0
case 4:return!1
case 5:v=e.oI(4).getUint32(0,!0)
if(t.b)A.hX(s,"mergeFixed32Field")
C.b.C(t.ll(w).c,v)
return!0
default:throw B.d(new A.lq("Protocol message tag had invalid wire type."))}},
ak9(d){var w
if(this.b)A.hX("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.UJ()
if(w===0||!this.TP(w,d))break}},
aka(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.hX(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fC(w,w.r);v.t();){u=v.d
t=w.h(0,u)
t.toString
if(this.b)A.hX(s,"mergeField")
u=this.ll(u)
C.b.G(u.b,t.b)
C.b.G(u.c,t.c)
C.b.G(u.d,t.d)
C.b.G(u.a,t.a)
C.b.G(u.e,t.e)}},
ll(d){if(d===0)B.W(B.bM("Zero is not a valid field number.",null))
return this.a.bB(0,d,new A.ajB())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kv))return!1
return A.ayT(e.a,this.a)},
gv(d){var w={}
w.a=0
this.a.M(0,new A.ajC(w))
return w.a},
j(d){return this.Dm("")},
Dm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.cA("")
for(w=this.a,v=A.aGD(new B.b6(w,B.p(w).i("b6<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
p=w.h(0,q)
p.toString
for(p=p.gaC(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(m instanceof A.kv){l=k.a+=d+B.j(q)+": {\n"
l+=m.Dm(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
hf(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaC(w),w=new B.cO(J.ab(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).hf()}this.b=!0}}
A.rk.prototype={
hf(){var w,v=this
if(v.f)return
v.f=!0
v.a=B.fE(v.a,x.L)
w=x.w
v.b=B.fE(v.b,w)
v.c=B.fE(v.c,x.S)
v.d=B.fE(v.d,w)
v.e=B.fE(v.e,x.B)},
k(d,e){var w,v,u=this
if(e==null)return!1
if(!(e instanceof A.rk))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.x6(e.a[w],v[w]))return!1
if(!A.x6(e.b,u.b))return!1
if(!A.x6(e.c,u.c))return!1
if(!A.x6(e.d,u.d))return!1
if(!A.x6(e.e,u.e))return!1
return!0},
gv(d){var w,v,u,t,s,r,q,p=this
for(w=p.a,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
for(r=J.ag(s),q=0;q<r.gp(s);++q){u=u+r.h(s,q)&536870911
u=u+((u&524287)<<10)&536870911
u^=u>>>6}u=u+((u&67108863)<<3)&536870911
u^=u>>>11
u=u+((u&16383)<<15)&536870911}for(w=p.b,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+7*J.x(w[t])&536870911
for(w=p.c,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+37*J.x(w[t])&536870911
for(w=p.d,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+53*J.x(w[t])&536870911
for(w=p.e,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+J.x(w[t])&536870911
return u},
gaC(d){var w=this,v=B.ax(w.a,!0,x.z)
C.b.G(v,w.b)
C.b.G(v,w.c)
C.b.G(v,w.d)
C.b.G(v,w.e)
return v},
gp(d){return this.gaC(this).length}}
A.afu.prototype={}
A.afv.prototype={
yf(d){return this.ags(d)},
ags(d){var w=0,v=B.S(x.H),u,t=this,s
var $async$yf=B.O(function(e,f){if(e===1)return B.P(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.M($.rQ().fU(0,d),$async$yf)
case 3:u=t.agt(s.ca(f.buffer,0,null))
w=1
break
case 1:return B.Q(u,v)}})
return B.R($async$yf,v)},
agt(d){var w,v,u,t,s,r,q=A.aCF(d,1,null,0),p=q.UD(),o=q.UD(),n=p&8
C.e.cA(p,3)
if(n!==8)B.W(A.awm("Only DEFLATE compression supported: "+n))
if(C.e.bG((p<<8>>>0)+o,31)!==0)B.W(A.awm("Invalid FCHECK"))
if((o>>>5&1)!==0){q.zK()
B.W(A.awm("FDICT Encoding not currently supported"))}w=A.Mu(D.FQ)
v=A.Mu(D.Gl)
u=new A.acx(new Uint8Array(32768))
v=new A.a9n(q,u,w,v)
v.b=!0
v.a8c()
t=x.L.a(B.ca(u.c.buffer,0,u.a))
q.zK()
s=A.aD8()
q=Math.min(67108864,t.length)
r=new A.K8(t,q)
r.c=q
q=s.a.a.gbx()
w=s.a
w.toString
A.azb(q,w,r,D.AF)
if(r.d!==0)B.W(A.MI())
return this.ab2(this.ab5(s),null).h2(new A.afA(null))},
ab5(d){J.f8(d.a.om(3,x.m),new A.afz())
return d},
ab2(d,e){var w=d.W0(2,x.N,x.L),v=J.ag(w)
if(v.gZ(w))return B.cg(d,x.H)
v=v.gdu(w)
return B.lh(v.dj(v,new A.afw(this,e,d),x.K),x.P).bm(new A.afx(d),x.H)},
wf(d,e,f){return this.a3K(d,e,f)},
a3K(d,e,f){var w=0,v=B.S(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$wf=B.O(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.M(A.a0y(e),$async$wf)
case 7:r=h
if(m!=null){o=x.z
J.aAH(m,B.l(["imageSize",""+J.aOJ(r)+"x"+J.aOD(r)],o,o))}u=r
w=1
break
t=2
w=6
break
case 4:t=3
l=s
q=B.ah(l)
p=B.aO(l)
if(m!=null){o=x.z
J.aAH(m,B.l(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.Q(u,v)
case 2:return B.P(s,v)}})
return B.R($async$wf,v)}}
A.XR.prototype={
aE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.gZ(e)||j.ay==null)return
j=j.ay.a.ae(1)
w=new B.L(j.a.ae(0),j.a.ae(1))
if(J.ec(w))return
d.bV(0)
try{v=new B.B(0,0,0+e.a,0+e.b)
if(k.e)d.lI(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=F.aGM(k.b,new B.L(t,u),new B.L(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.L(t*o,u*n).df(0,2)
l=new B.L(s,j).df(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.ak(0,j,s)
if(o!==1&&n!==1)d.dg(0,o,n)
k.ah1(d,e)}finally{d.by(0)}},
ah1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.ab(w.ay.a.om(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gD(v)
q=r.a.B9(0)
if(q.length!==0){w.ay.c.a.h(0,q)
p=!1}else p=!0
if(p)continue
o=J.aG(r.a.om(1,u),w.gagm())
n=o.a.ra(2)
m=o.a.ra(3)
if(n){d.bV(0)
d.a6(0,new Float64Array(B.fs(B.b([o.a.ae(2).a.ae(0),o.a.ae(2).a.ae(1),0,0,o.a.ae(2).a.ae(2),o.a.ae(2).a.ae(3),0,0,0,0,1,0,o.a.ae(2).a.ae(4),o.a.ae(2).a.ae(5),0,1],t))))}if(m){d.bV(0)
d.i9(0,k.aeU(o.a.B9(3)))}r=o.a.ae(1).a.ae(2)
p=o.a.ae(1).a.ae(3)
l=o.a.ra(0)?C.d.X(o.a.ae(0)*255):255
k.ah_(d,q,new B.B(0,0,r,p),l)
r=o.b
k.ah0(d,r==null?o.a.om(4,s):r,l)
w.ay.c.d.h(0,q)
if(m)d.by(0)
if(n)d.by(0)}},
ah_(d,e,f,g){var w,v,u=this.c
u.ay.c.b.h(0,e)
w=u.ay.d.h(0,e)
if(w==null)return
v=$.aq().bk()
v.slV(this.d)
v.sq7(!0)
v.sao(0,B.a1(g,0,0,0))
d.j_(w,new B.B(0,0,w.gce(w),w.gcG(w)),f,v)
this.ah2(d,e,f,g)},
ah0(d,e,f){var w,v,u,t,s,r,q,p=J.ag(e)
if(p.gZ(e))return
for(p=p.ga_(e),w=x.n;p.t();){v=p.gD(p)
u=this.aeZ(v)
if(v.a.ra(5)){d.bV(0)
d.a6(0,new Float64Array(B.fs(B.b([v.a.ae(5).a.ae(0),v.a.ae(5).a.ae(1),0,0,v.a.ae(5).a.ae(2),v.a.ae(5).a.ae(3),0,0,0,0,1,0,v.a.ae(5).a.ae(4),v.a.ae(5).a.ae(5),0,1],w))))}t=v.a.ae(4).a.ae(0)
if(t.a.rK()){s=$.aq().bk()
s.sq7(!0)
s.sa9(0,C.aJ)
s.sao(0,B.a1(C.d.X(t.a.ae(3)*f),C.d.X(t.a.ae(0)*255),C.d.X(t.a.ae(1)*255),C.d.X(t.a.ae(2)*255)))
d.cC(u,s)}t=v.a.ae(4).a.ae(2)
if(t>0){s=$.aq().bk()
s.sa9(0,C.W)
if(v.a.ae(4).a.ae(1).a.rK())s.sao(0,B.a1(C.d.X(v.a.ae(4).a.ae(1).a.ae(3)*f),C.d.X(v.a.ae(4).a.ae(1).a.ae(0)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(1)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(2)*255)))
s.shb(t)
switch(v.a.ae(4).a.ae(3)){case D.j1:s.sr5(C.bU)
break
case D.x9:s.sr5(C.NL)
break
case D.xa:s.sr5(C.xM)
break}switch(v.a.ae(4).a.ae(4)){case D.j2:s.svT(C.e9)
break
case D.xb:s.svT(C.NM)
break
case D.xc:s.svT(C.NN)
break}s.sJ7(v.a.ae(4).a.ae(5))
r=[v.a.ae(4).a.ae(6),v.a.ae(4).a.ae(7),v.a.ae(4).a.ae(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cC(A.b_A(u,new A.Jl(B.b([t,q<0.1?0.1:q],w)),new A.KB(r[2])),s)}else d.cC(u,s)}if(v.a.ra(5))d.by(0)}},
aeZ(d){var w,v,u,t,s,r,q,p=$.aq().cg()
if(d.a.ae(0)===D.j3)return this.Qp(d.a.ae(1).a.B9(0),p)
else if(d.a.ae(0)===D.xe){w=d.a.ae(3)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
w=w.a.ae(3)
v-=t
u-=w
s=new B.B(v,u,v+t*2,u+w*2)
if(!s.gZ(s))p.oX(s)}else if(d.a.ae(0)===D.xd){w=d.a.ae(2)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
r=w.a.ae(3)
w=w.a.ae(4)
q=B.qz(new B.B(v,u,v+t,u+r),new B.aY(w,w))
if(!q.gZ(q))p.ek(q)}return p},
Qp(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.h(0,d)!=null){t=w.ay.e.h(0,d)
t.toString
return t}if(e==null)t.a=$.aq().cg()
w=B.a0K(d,B.aK("([a-df-zA-Z])",!0,!1,!1),new A.ar4(),null)
v=B.aK(",",!0,!1,!1)
u=B.kP(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.M(B.b(u.split("|||"),x.s),new A.ar5(t,this,d))
return t.a},
aeU(d){return this.Qp(d,null)},
ah2(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.h(0,e)
return},
iI(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Cl.prototype={
ad(){return new A.Gf(C.i)}}
A.PU.prototype={
sI_(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.dY(0)
w=d==null
if(w)t.K(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.ae(1)
u=w.a.w3(2)
if(u===0)u=20
t.e=B.cv(0,C.d.X(w.a.w3(3)/u*1000),0)}else t.e=C.n
t.sl(0,t.a)},
gagm(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.ae(1).a.w3(3)
v=t.a.ae(1).a.w3(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.d.X(v*u)))},
K(d){this.ch=!0
if(!this.CW)this.aQ()}}
A.Gf.prototype={
av(){var w,v=this
v.aI()
w=v.a.c
v.d=w.ay
w.be()
w=w.bF$
w.b=!0
w.a.push(v.gDj())
w=v.a.c
w.be()
w=w.cv$
w.b=!0
w.a.push(v.gCH())},
aL(d){var w,v,u,t=this
t.aZ(d)
w=d.c
if(w!==t.a.c){v=t.gDj()
w.J(0,v)
u=t.gCH()
w.cq(u)
w=t.a.c
t.d=w.ay
w.be()
w=w.bF$
w.b=!0
w.a.push(v)
v=t.a.c
v.be()
v=v.cv$
v.b=!0
v.a.push(u)}},
aaT(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.aw(new A.ar3(v))},
a7E(d){var w
if(d===C.P){this.a.toString
w=!0}else w=!1
if(w)this.a.c.K(0)},
n(){var w=this
w.d=null
w.a.c.J(0,w.gDj())
w.a.c.cq(w.gCH())
w.aH()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.rK()?C.z:new B.L(u.a.ae(1).a.ae(0),u.a.ae(1).a.ae(1))
if(t.gZ(t))return C.aX
w=this.a
w=w.c
return new B.iU(!0,v,B.tw(v,v,v,new A.XR(G.zd,w,C.dq,!1,w),t),v)}}
A.qc.prototype={
gbx(){return $.aIT()}}
A.lW.prototype={
gbx(){return $.aJi()}}
A.oS.prototype={
gbx(){return $.aIf()}}
A.pS.prototype={
gbx(){return $.aIQ()}}
A.o6.prototype={
gbx(){return $.aJp()}}
A.qV.prototype={
gbx(){return $.aJ9()}}
A.qU.prototype={
gbx(){return $.aJ8()}}
A.qT.prototype={
gbx(){return $.aJ7()}}
A.qX.prototype={
gbx(){return $.aJc()}}
A.qW.prototype={
gbx(){return $.aJd()}}
A.qS.prototype={
gbx(){return $.aJf()}}
A.lf.prototype={
gbx(){return $.aIG()},
gqZ(){var w=this.b
return w==null?this.a.om(4,x.Y):w}}
A.lB.prototype={
gbx(){return $.aIS()},
n(){var w=this.d
w.gaC(w).M(0,new A.abQ())
w.K(0)
this.e.K(0)}}
A.jb.prototype={}
A.kl.prototype={}
A.km.prototype={}
var z=a.updateTypes(["n()","dE()","G()","nZ(Y)","z()","lB(y<at>)","n(cZ<@>,cZ<@>)","z(cV)","rk()","~(lW)","~(lf)","q1()","~()","~(eE)","~(H?)","~(m[m?])","m()","y<n>()","qc()","lW()","oS()","km?(n)","o6()","qV()","qU()","qT()","qX()","qW()","qS()","lf()","lB()","jb?(n)","kl?(n)","pS()"])
A.avg.prototype={
$0(){return D.Hx},
$S:z+11}
A.aoJ.prototype={
$0(){return this.a.WX(this.b)},
$S:0}
A.aoK.prototype={
$0(){return this.a.WZ(this.b)},
$S:0}
A.aoO.prototype={
$1(d){return new A.nZ(new A.aoN(this.a),"md/rocket.svga",null)},
$S:z+3}
A.aoN.prototype={
$0(){return this.a.d.cU(0)},
$S:0}
A.aoM.prototype={
$1(d){return new A.nZ(new A.aoL(this.a),"md/angle.svga",null)},
$S:z+3}
A.aoL.prototype={
$0(){return this.a.d.cU(0)},
$S:0}
A.arF.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sI_(null)
w.a.ahx()},
$S:8}
A.a2j.prototype={
$2(d,e){return C.e.b9(d.d,e.d)},
$S:z+6}
A.au7.prototype={
$1(d){return J.dz(d,this.a.$0())},
$S:173}
A.au5.prototype={
$1(d){var w,v,u=this,t=u.a.fa(!0),s=u.c,r=u.b.a3J(s,u.d,t)
if(r==null){w=u.e.rC()
v=A.a9G(t)
if(w.b)A.hX("UnknownFieldSet","mergeVarintField")
C.b.C(w.ll(s).b,v)}else J.dz(d,r)},
$S:173}
A.au6.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:8}
A.a60.prototype={
$0(){return A.aDs(this.a,this.b)},
$S(){return this.b.i("uJ<0>()")}}
A.a62.prototype={
$0(){return this.a},
$S:43}
A.a61.prototype={
$1(d){return d.a.rK()},
$S:z+7}
A.aaZ.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fh(w.a,w.b,B.k(v,u),!1,v.i("@<0>").ah(u).i("fh<1,2>"))},
$S(){return this.d.i("@<0>").ah(this.e).i("fh<1,2>()")}}
A.amJ.prototype={
$1(d){return J.jt(d)},
$S:59}
A.amL.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cV){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.VY(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.bw)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:56}
A.amM.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.nC)for(w=d.a,w=new J.fV(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fh)for(w=d.gdu(d),w=w.ga_(w),v=this.a;w.t();)v.$2(e,w.gD(w))
else this.a.$2(e,d)},
$S:481}
A.amK.prototype={
$1(d){var w=this.a,v=w.d.c.h(0,d)
w=w.d.b.h(0,d)
return this.b.$2(v,"["+B.j(w.gzk(w))+"]")},
$S:21}
A.arw.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.hf()
v.b!==$&&B.aC()
v.b=w
u=w}return u},
$S(){return this.a.$ti.i("1()")}}
A.acX.prototype={
$2(d,e){var w=e.a,v=e.b
return(d^A.aFc(A.mg(A.mg(0,J.x(w)),J.x(v))))>>>0},
$S(){return this.a.$ti.i("n(n,bw<1,2>)")}}
A.ajB.prototype={
$0(){var w=x.X
return new A.rk(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ajC.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.x(e)&536870911},
$S:482}
A.at_.prototype={
$1(d){return A.ayZ(J.aG(this.a,d),J.aG(this.b,d))},
$S:66}
A.anS.prototype={
$2(d,e){return A.mg(d,J.x(e))},
$S:483}
A.afA.prototype={
$0(){},
$S:8}
A.afz.prototype={
$1(d){var w={}
w.a=null
J.f8(d.a.om(1,x.p),new A.afy(w))},
$S:z+9}
A.afy.prototype={
$1(d){if(J.jr(d.gqZ())&&J.aZ(d.gqZ())>0)if(J.aG(d.gqZ(),0).a.ae(0)===D.xf&&this.a.a!=null)d.b=this.a.a
else if(J.jr(d.gqZ()))this.a.a=d.gqZ()},
$S:z+10}
A.afw.prototype={
$1(d){return this.Wb(d)},
Wb(d){var w=0,v=B.S(x.P),u=this,t,s
var $async$$1=B.O(function(e,f){if(e===1)return B.P(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.M(u.a.wf(t,new Uint8Array(B.fs(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.Q(null,v)}})
return B.R($async$$1,v)},
$S:484}
A.afx.prototype={
$1(d){return this.a},
$S:z+5}
A.ar4.prototype={
$1(d){return"|||"+B.j(d.Iq(1))+" "},
$S:168}
A.ar5.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.a3(d,0,1)
if(C.c.q("MLHVCSQRZmlhvcsqrz",w)){v=C.c.eQ(C.c.br(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.f4(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.f4(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.cp(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.cp(0,u.c,t)}else if(w==="H"){s=B.bk(v[0])
u=m.a
u.c=s
u.a.cp(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bk(v[0])
u.c=s
u.a.cp(0,s,u.b)}else if(w==="V"){t=B.bk(v[0])
u=m.a
u.b=t
u.a.cp(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bk(v[0])
u.b=t
u.a.cp(0,u.c,t)}else if(w==="C"){u=m.a
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
r.nc(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
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
r.nc(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
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
r.nc(q,p,o,n,u.c,t)}else{u.r=B.bk(v[0])
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
r.qr(q,p,u.c,t)}}else if(w==="s"){u=m.a
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
q.nc(r,p,o,n,u.c,t)}else{u.r=q+B.bk(v[0])
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
r.qr(q,p,u.c,t)}}else if(w==="Q"){u=m.a
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
r.qr(q,p,u.c,t)}else if(w==="q"){u=m.a
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
r.qr(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.bM(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:34}
A.ar3.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.abQ.prototype={
$1(d){d.n()},
$S:485};(function aliases(){var w=A.HL.prototype
w.a0T=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"azG","aY5",14)
v(A,"avu",1,null,["$2","$1"],["hX",function(d){return A.hX(d,null)}],15,0)
u(A,"b0R","aTG",16)
u(A,"b0O","aTD",17)
u(A,"b0N","aTC",4)
u(A,"b0Q","aTF",0)
u(A,"b0P","aTE",2)
var r
t(r=A.K8.prototype,"galc","ald",0)
t(r,"gale","alf",1)
t(r,"galq","zK",0)
t(r,"galr","als",1)
t(r,"galm","aln",0)
t(r,"galo","alp",1)
t(r,"gal5","al6",0)
t(r,"gal7","al8",1)
t(r,"gali","alj",0)
t(r,"galk","Hw",1)
t(r,"gal0","al1",4)
t(r,"gal9","ala",2)
t(r,"gal2","al3",2)
t(r=A.Gf.prototype,"gDj","aaT",12)
s(r,"gCH","a7E",13)
u(A,"aI1","aTh",18)
u(A,"aI7","aVv",19)
u(A,"aHZ","aPn",20)
u(A,"aI0","aSJ",33)
u(A,"azO","aWf",22)
u(A,"aI4","aVb",23)
u(A,"aI3","aVa",24)
u(A,"aI2","aV9",25)
u(A,"azN","aVe",26)
u(A,"aI5","aVf",27)
u(A,"aI6","aVh",28)
u(A,"aI_","aRY",29)
u(A,"b19","aD8",30)
w(A,"b1c","aVg",31)
w(A,"b1a","aVc",32)
w(A,"b1b","aVd",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.IE,B.jL)
u(B.H,[A.a9D,A.acy,A.a8H,A.a9n,A.dE,A.KB,A.Jl,A.a2i,A.K8,A.lq,A.amE,A.amz,A.cZ,A.Uf,A.cV,A.Gz,A.O0,A.OY,A.kv,A.rk,A.afu,A.afv])
v(A.a9C,A.a9D)
v(A.acx,A.acy)
u(B.iJ,[A.avg,A.aoJ,A.aoK,A.aoN,A.aoL,A.arF,A.au6,A.a60,A.a62,A.aaZ,A.arw,A.ajB,A.afA,A.ar3])
u(B.a5,[A.q1,A.nZ,A.Cl])
u(B.aa,[A.VB,A.HL,A.Gf])
u(B.fx,[A.aoO,A.aoM,A.au7,A.au5,A.a61,A.amJ,A.amK,A.at_,A.afz,A.afy,A.afw,A.afx,A.ar4,A.ar5,A.abQ])
v(A.YQ,A.HL)
v(A.am7,B.rv)
u(B.kY,[A.a2j,A.amL,A.amM,A.acX,A.ajC,A.anS])
v(A.q4,A.cZ)
v(A.nC,B.a0)
u(A.nC,[A.pr,A.uJ])
v(A.fh,B.aA)
v(A.XR,B.tx)
v(A.PU,B.ju)
u(A.cV,[A.qc,A.lW,A.oS,A.pS,A.o6,A.qV,A.qU,A.qT,A.qX,A.qW,A.qS,A.lf,A.lB])
u(A.OY,[A.jb,A.kl,A.km])
w(A.HL,B.fk)})()
B.mr(b.typeUniverse,JSON.parse('{"IE":{"bV":[]},"dE":{"ct":["H"]},"q1":{"a5":[],"i":[]},"VB":{"aa":["q1"]},"nZ":{"a5":[],"i":[]},"YQ":{"aa":["nZ"]},"aRG":{"cZ":["1"]},"cZ":{"cZ.T":"1"},"uJ":{"nC":["1"],"a0":["1"],"y":["1"],"a2":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"fh":{"aA":["1","2"],"aN":["1","2"],"aA.V":"2","aA.K":"1"},"lq":{"bV":[]},"q4":{"cZ":["fh<1,2>?"],"cZ.T":"fh<1,2>?"},"pr":{"nC":["1"],"a0":["1"],"y":["1"],"a2":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"nC":{"a0":["1"],"y":["1"],"a2":["1"],"q":["1"]},"Cl":{"a5":[],"i":[]},"XR":{"aj":[]},"PU":{"ju":[],"bC":["G"],"aj":[]},"Gf":{"aa":["Cl"]},"qc":{"cV":[]},"lW":{"cV":[]},"oS":{"cV":[]},"pS":{"cV":[]},"o6":{"cV":[]},"qV":{"cV":[]},"qU":{"cV":[]},"qT":{"cV":[]},"qX":{"cV":[]},"qW":{"cV":[]},"qS":{"cV":[]},"lf":{"cV":[]},"lB":{"cV":[]}}'))
B.H6(b.typeUniverse,JSON.parse('{"Jl":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.V
return{G:w("aRG<@>"),q:w("cZ<@>"),p:w("lf"),K:w("ai<at>"),J:w("cV"),I:w("u1"),w:w("dE"),U:w("q<cV>"),R:w("q<@>"),M:w("t<cZ<@>>"),X:w("t<dE>"),r:w("t<y<n>>"),s:w("t<m>"),A:w("t<kv>"),D:w("t<i>"),n:w("t<G>"),t:w("t<n>"),b:w("t<~()>"),F:w("t<~(eE)>"),d:w("y<cV>"),j:w("y<@>"),L:w("y<n>"),T:w("q4<@,@>"),f:w("aN<@,@>"),H:w("lB"),P:w("at"),V:w("b7<~()>"),W:w("b7<~(eE)>"),u:w("ny"),Z:w("qk"),Y:w("qS"),m:w("lW"),N:w("m"),l:w("DA"),Q:w("dj"),B:w("kv"),k:w("rk"),y:w("z"),i:w("G"),z:w("@"),O:w("@()"),_:w("@(a2F,n)"),S:w("n"),o:w("u1?")}})();(function constants(){var w=a.makeConstList
D.Aj=new A.afv()
D.AF=new A.amz()
D.EJ=new A.dE(0,0,0)
D.EK=new A.dE(4194303,4194303,1048575)
D.FP=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.FQ=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.FS=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.j3=new A.jb(0,"SHAPE")
D.xd=new A.jb(1,"RECT")
D.xe=new A.jb(2,"ELLIPSE")
D.xf=new A.jb(3,"KEEP")
D.me=B.b(w([D.j3,D.xd,D.xe,D.xf]),B.V("t<jb>"))
D.G4=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Gk=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Gm=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Gl=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.Gx=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.j2=new A.km(0,"LineJoin_MITER")
D.xb=new A.km(1,"LineJoin_ROUND")
D.xc=new A.km(2,"LineJoin_BEVEL")
D.mu=B.b(w([D.j2,D.xb,D.xc]),B.V("t<km>"))
D.j1=new A.kl(0,"LineCap_BUTT")
D.x9=new A.kl(1,"LineCap_ROUND")
D.xa=new A.kl(2,"LineCap_SQUARE")
D.mw=B.b(w([D.j1,D.x9,D.xa]),B.V("t<kl>"))
D.Hx=new A.q1(null)
D.aw=new A.O0("com.opensource.svga")
D.VX=new A.O0("")
D.SV=new B.dd("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.T2=new B.dd("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.UG=new A.am7(0,"Absolute")})();(function staticFields(){$.aWO=[]
$.aCk=B.k(B.V("lg?"),B.V("Gz<cV>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"b9_","aN2",()=>new A.avg())
v($,"b4f","aJA",()=>{var u=A.aWm()
u.hf()
return u})
v($,"b36","aIT",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hk("MovieParams",A.aI1(),D.aw),r=x.i
s.fc(0,1,u,256,u,r)
s.fc(0,2,t,256,t,r)
r=x.S
s.dh(0,3,"fps",2048,r)
s.dh(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b3P","aJi",()=>{var u="imageKey",t="matteKey",s=A.hk("SpriteEntity",A.aI7(),D.aw)
s.te(1,u,u)
s.zA(0,2,"frames",2097154,A.aI_(),x.p)
s.te(3,t,t)
s.w=!1
return s})
v($,"b1A","aIf",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hk("AudioEntity",A.aHZ(),D.aw)
n.te(1,t,t)
u=x.S
n.fc(0,2,s,r,s,u)
n.fc(0,3,q,r,q,u)
n.fc(0,4,p,r,p,u)
n.fc(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b2Y","aIQ",()=>{var u=A.hk("Layout",A.aI0(),D.aw),t=x.i
u.dh(0,1,"x",256,t)
u.dh(0,2,"y",256,t)
u.dh(0,3,"width",256,t)
u.dh(0,4,"height",256,t)
u.w=!1
return u})
v($,"b43","aJp",()=>{var u=A.hk("Transform",A.azO(),D.aw),t=x.i
u.dh(0,1,"a",256,t)
u.dh(0,2,"b",256,t)
u.dh(0,3,"c",256,t)
u.dh(0,4,"d",256,t)
u.dh(0,5,"tx",256,t)
u.dh(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b3C","aJ9",()=>{var u=A.hk("ShapeEntity.ShapeArgs",A.aI4(),D.aw)
u.PT(1,"d")
u.w=!1
return u})
v($,"b3B","aJ8",()=>{var u="cornerRadius",t=A.hk("ShapeEntity.RectArgs",A.aI3(),D.aw),s=x.i
t.dh(0,1,"x",256,s)
t.dh(0,2,"y",256,s)
t.dh(0,3,"width",256,s)
t.dh(0,4,"height",256,s)
t.fc(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b3A","aJ7",()=>{var u=A.hk("ShapeEntity.EllipseArgs",A.aI2(),D.aw),t=x.i
u.dh(0,1,"x",256,t)
u.dh(0,2,"y",256,t)
u.fc(0,3,"radiusX",256,"radiusX",t)
u.fc(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b3F","aJc",()=>{var u=A.hk("ShapeEntity.ShapeStyle.RGBAColor",A.azN(),D.aw),t=x.i
u.dh(0,1,"r",256,t)
u.dh(0,2,"g",256,t)
u.dh(0,3,"b",256,t)
u.dh(0,4,"a",256,t)
u.w=!1
return u})
v($,"b3G","aJd",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hk("ShapeEntity.ShapeStyle",A.aI5(),D.aw),n=B.V("qX")
o.jD(1,"fill",A.azN(),n)
o.jD(2,"stroke",A.azN(),n)
n=x.i
o.fc(0,3,u,256,u,n)
o.FG(0,4,"lineCap",512,D.j1,D.mw,"lineCap",A.b1a(),B.V("kl"))
o.FG(0,5,t,512,D.j2,D.mu,t,A.b1b(),B.V("km"))
o.fc(0,6,s,256,s,n)
o.fc(0,7,r,256,r,n)
o.fc(0,8,q,256,q,n)
o.fc(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b3I","aJf",()=>{var u=A.hk("ShapeEntity",A.aI6(),D.aw)
u.aku(0,B.b([2,3,4],x.t))
u.ah4(0,1,"type",512,D.j3,D.me,A.b1c(),B.V("jb"))
u.jD(2,"shape",A.aI4(),B.V("qV"))
u.jD(3,"rect",A.aI3(),B.V("qU"))
u.jD(4,"ellipse",A.aI2(),B.V("qT"))
u.jD(10,"styles",A.aI5(),B.V("qW"))
u.jD(11,"transform",A.azO(),B.V("o6"))
u.w=!1
return u})
v($,"b2B","aIG",()=>{var u="clipPath",t=A.hk("FrameEntity",A.aI_(),D.aw)
t.dh(0,1,"alpha",256,x.i)
t.jD(2,"layout",A.aI0(),B.V("pS"))
t.jD(3,"transform",A.azO(),B.V("o6"))
t.te(4,u,u)
t.zA(0,5,"shapes",2097154,A.aI6(),x.Y)
t.w=!1
return t})
v($,"b35","aIS",()=>{var u,t,s=null,r=A.hk("MovieEntity",A.b19(),D.aw)
r.PT(1,"version")
r.jD(2,"params",A.aI1(),B.V("qc"))
u=A.hk("MovieEntity.ImagesEntry",s,D.aw)
t=x.z
u.PW(0,1,"key",64,s,s,s,s,t)
u.PW(0,2,"value",32,s,s,s,s,t)
r.Bb(A.aT_("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.zA(0,4,"sprites",2097154,A.aI7(),x.m)
r.zA(0,5,"audios",2097154,A.aHZ(),B.V("oS"))
r.w=!1
return r})
v($,"b3H","aJe",()=>A.axT(D.me,B.V("jb")))
v($,"b3D","aJa",()=>A.axT(D.mw,B.V("kl")))
v($,"b3E","aJb",()=>A.axT(D.mu,B.V("km")))})()}
$__dart_deferred_initializers__["DDLIgtLsr1pr3y8S2DBCz2K9DPQ="] = $__dart_deferred_initializers__.current
