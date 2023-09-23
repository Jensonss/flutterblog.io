self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aw_(d){return new A.Iv(d,null,null)},
Iv:function Iv(d,e,f){this.a=d
this.b=e
this.c=f},
aCj(d,e,f,g){var w,v
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
w.a0P(d)
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
return w?A.a9o(0,0,0,t,s,r):new A.dC(t,s,r)},
aCk(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dC((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
awY(d,e){return new A.dC(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
zX(d){if(d instanceof A.dC)return d
else if(B.jm(d))return A.a9n(d)
throw B.d(B.ft(d,"other","not an int, Int32 or Int64"))},
aSb(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
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
q=C.e.dY(w,u)
v+=w-q*u<<10>>>0
p=C.e.dY(v,u)
g+=v-p*u<<10>>>0
o=C.e.dY(g,u)
f+=g-o*u<<10>>>0
n=C.e.dY(f,u)
e+=f-n*u<<10>>>0
m=C.e.dY(e,u)
l=C.c.br(C.e.fX(u+(e-m*u),d),1)
r=s
s=t
t=l
v=p
w=q
g=o
f=n
e=m}k=(g<<20>>>0)+(f<<10>>>0)+e
return h+(k===0?"":C.e.fX(k,d))+t+s+r},
a9o(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cz(w,22)&1)
return new A.dC(w&4194303,v&4194303,f-i-(C.e.cz(v,22)&1)&1048575)},
zY(d,e){var w=C.e.x6(d,e)
return w},
dC:function dC(d,e,f){this.a=d
this.b=e
this.c=f},
auV:function auV(){},
q_:function q_(d){this.a=d},
Vm:function Vm(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aon:function aon(d,e){this.a=d
this.b=e},
aoo:function aoo(d,e){this.a=d
this.b=e},
aos:function aos(d){this.a=d},
aor:function aor(d){this.a=d},
aoq:function aoq(d){this.a=d},
aop:function aop(d){this.a=d},
nX:function nX(d,e,f){this.c=d
this.d=e
this.a=f},
YB:function YB(d,e,f){var _=this
_.d=$
_.e3$=d
_.bw$=e
_.a=null
_.b=f
_.c=null},
arj:function arj(d){this.a=d},
HD:function HD(){},
b_d(d,e,f){var w,v,u,t,s,r,q,p,o=$.aq().cf()
for(w=d.Qz(),w=w.ga_(w),v=e.a,u=f.a;w.t();){t=w.gD(w)
t.gp(t)
for(s=u,r=!0;s<t.gp(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.xz(0,t.RO(s,s+p),C.h)
s+=p
r=!r}}return o},
alM:function alM(d,e){this.a=d
this.b=e},
Ks:function Ks(d){this.a=d},
Jc:function Jc(d){this.a=d
this.b=0},
hi(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a21((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
ayP(c1,c2,c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null
B.hh(c4,c0)
for(w=x.S,v=x.T,u=x.z,t=c1.c,s=c3.gakV(),r=c3.gakT(),q=c3.gakI(),p=c3.gakG(),o=c3.gal0(),n=c3.gal_(),m=c3.gakY(),l=c3.gakW(),k=c3.gakP(),j=c3.gakN(),i=c3.gakD(),h=c3.gakK(),g=c3.gakB(),f=c3.a;!0;){e=c3.Uv()
if(e===0)return
d=e&7
a0=C.e.cz(e,3)
a1=t.h(0,a0)
if(a1==null)a1=c0
if(a1==null||!A.aZl(a1.f,d)){if(!c2.rz().TB(e,c3))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c2.eh(c1,a1,c3.f8(!0)!==0)
break
case 32:c2.eh(c1,a1,new Uint8Array(B.fp(c3.v0())))
break
case 64:a3=c3.v0()
c2.eh(c1,a1,C.ju.ek(a3))
break
case 256:a3=c3.b+=4
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.eh(c1,a1,a3.getFloat32(0,!0))
break
case 128:a3=c3.b+=8
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c2.eh(c1,a1,a3.getFloat64(0,!0))
break
case 512:a6=c3.f8(!0)
a7=t.h(0,a0)
a8=a7==null?c0:a7.z
a3=(a8==null&&!0?c0.game():a8).$1(a6)
if(a3==null){a9=c2.rz()
a3=A.a9n(a6)
if(a9.b)A.hV("UnknownFieldSet","mergeVarintField")
C.b.C(a9.li(a0).b,a3)}else c2.eh(c1,a1,a3)
break
case 1024:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAz():b0).$0()
b1=c2.wi(a1)
if(b1!=null)a3.kO(b1)
c3.Uq(a0,a3,c4)
c2.eh(c1,a1,a3)
break
case 2048:c2.eh(c1,a1,c3.f8(!0))
break
case 4096:c2.eh(c1,a1,c3.mL())
break
case 8192:c2.eh(c1,a1,A.aB5(c3.f8(!1)))
break
case 16384:b2=c3.mL()
c2.eh(c1,a1,(b2.VN(0,1).k(0,1)?A.a9o(0,0,0,b2.a,b2.b,b2.c):b2).IO(0,1))
break
case 32768:c2.eh(c1,a1,c3.f8(!1))
break
case 65536:c2.eh(c1,a1,c3.mL())
break
case 131072:a3=c3.b+=4
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.eh(c1,a1,a3.getUint32(0,!0))
break
case 262144:a3=c3.b+=8
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.eh(c1,a1,A.aCk(b4))
break
case 524288:a3=c3.b+=4
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.eh(c1,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c3.b+=8
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.eh(c1,a1,A.aCk(b4))
break
case 2097152:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAz():b0).$0()
b1=c2.wi(a1)
if(b1!=null)a3.kO(b1)
c3.Us(a3,c4)
c2.eh(c1,a1,a3)
break
case 18:A.ix(c1,c2,c3,d,a1,g)
break
case 34:J.dy(c2.mC(c1,a1,u),new Uint8Array(B.fp(c3.v0())))
break
case 66:a3=c2.mC(c1,a1,u)
a4=c3.v0()
J.dy(a3,C.ju.ek(a4))
break
case 258:A.ix(c1,c2,c3,d,a1,h)
break
case 130:A.ix(c1,c2,c3,d,a1,i)
break
case 514:A.aZ6(c1,c2,c3,d,a1,a0,c4)
break
case 1026:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAz():b0).$0()
c3.Uq(a0,a3,c4)
J.dy(c2.mC(c1,a1,u),a3)
break
case 2050:A.ix(c1,c2,c3,d,a1,j)
break
case 4098:A.ix(c1,c2,c3,d,a1,k)
break
case 8194:A.ix(c1,c2,c3,d,a1,l)
break
case 16386:A.ix(c1,c2,c3,d,a1,m)
break
case 32770:A.ix(c1,c2,c3,d,a1,n)
break
case 65538:A.ix(c1,c2,c3,d,a1,o)
break
case 131074:A.ix(c1,c2,c3,d,a1,p)
break
case 262146:A.ix(c1,c2,c3,d,a1,q)
break
case 524290:A.ix(c1,c2,c3,d,a1,r)
break
case 1048578:A.ix(c1,c2,c3,d,a1,s)
break
case 2097154:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAz():b0).$0()
c3.Us(a3,c4)
J.dy(c2.mC(c1,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c2.LA(c1,a1,u,u)
b6=c3.f8(!0)
b7=c3.c
c3.c=c3.b+b6
a4=b5.b
a5=A.aEN(a4.length)
A.ayP(b5,new A.U3(c0,c0,a5,b5.f.a===0?c0:B.k(w,w)),c3,c4)
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
ix(d,e,f,g,h,i){A.aG5(d,e,f,g,h,new A.atM(i))},
aZ6(d,e,f,g,h,i,j){A.aG5(d,e,f,g,h,new A.atK(f,d,i,j,e))},
aG5(d,e,f,g,h,i){var w,v,u,t=e.mC(d,h,x.z)
if(g===2){w=f.f8(!0)
if(w<0)B.W(B.bM(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.W(A.jR())
f.c=v
new A.atL(f,i,t).$0()
f.c=u}else i.$1(t)},
aB5(d){if((d&1)===1)return-C.e.cz(d,1)-1
else return C.e.cz(d,1)},
My(){return new A.lo("Protocol message end-group tag did not match expected tag.")},
aCm(){return new A.lo("CodedBufferReader encountered a malformed varint.")},
awZ(){return new A.lo("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
jR(){return new A.lo("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
aYw(d,e){var w,v=null,u="not type double",t="not type int"
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
case 512:if(!(e instanceof A.OL))return"not type ProtobufEnum"
return v
case 2048:case 8192:case 524288:if(!B.jm(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jm(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dC))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cU))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
aXJ(d){if(d==null)throw B.d(B.bM("Can't add a null to a repeated field",null))},
aRn(d,e,f,g,h,i,j,k,l,m,n){return new A.cY(d,e,f,g,A.aBR(g,i),l,m,null,n.i("cY<0>"))},
aRo(d,e,f,g,h,i,j,k,l,m,n){var w=new A.cY(d,e,f,g,new A.a5J(h,n),i,m,h,n.i("cY<0>"))
w.a0N(d,e,f,g,h,i,j,k,l,m,n)
return w},
aBR(d,e){if(e==null)return A.aTk(d)
if(x.O.b(e))return e
return new A.a5L(e)},
aSD(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aBR(g,new A.aaI(h,i,j,n,o))
B.hh(d,"name")
B.hh(e,"tagNumber")
return new A.q2(h,i,j,d,e,f,g,w,null,null,null,n.i("@<0>").ah(o).i("q2<1,2>"))},
hV(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
aWq(d,e,f){var w,v=A.aEN(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.U3(d,f,v,w)},
aEN(d){if(d===0)return $.aWr
return B.aQ(d,null,!1,x.z)},
aEM(d,e,f){var w,v
if(x.j.b(f)&&J.f5(f))return d
if(x.f.b(f)&&J.f5(f))return d
d=A.me(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.me(d,A.ayf(f))
else if(v!==512)d=A.me(d,J.x(f))
else d=(w&2)!==0?A.me(d,A.ayf(J.aOt(f,new A.amn()))):A.me(d,f.a)
return d},
aTk(d){switch(d){case 16:case 17:return A.b0q()
case 32:case 33:return A.b0r()
case 64:case 65:return A.b0u()
case 256:case 257:case 128:case 129:return A.b0s()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b0t()
default:return null}},
aTj(){return""},
aTg(){return B.b([],x.t)},
aTf(){return!1},
aTi(){return 0},
aTh(){return 0},
aRL(d,e){var w,v=$.aBZ.h(0,d)
if(v!=null)return v
w=new A.Gs(d,e.i("Gs<0>"))
$.aBZ.m(0,d,w)
return w},
aRK(d,e){var w=e.a(d.gbx().Q.$0())
w.kO(d)
return w},
aD6(d,e){var w=B.b([],e.i("t<0>"))
B.hh(d,"check")
return new A.uG(w,d,e.i("uG<0>"))},
axw(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
aW_(){return new A.kt(B.k(x.S,x.k))},
ayC(d,e){var w
if(d instanceof A.cU)return d.k(0,e)
if(e instanceof A.cU)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.x3(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.ayw(d,e)
return J.f(d,e)},
x3(d,e){var w,v=J.ag(d),u=J.ag(e)
if(v.gp(d)!==u.gp(e))return!1
for(w=0;w<v.gp(d);++w)if(!A.ayC(v.h(d,w),u.h(e,w)))return!1
return!0},
ayw(d,e){var w=J.ag(d)
if(w.gp(d)!==J.aZ(e))return!1
return J.aOc(w.gb7(d),new A.asE(d,e))},
aGh(d,e){var w=B.eX(d,!0,e)
C.b.hG(w)
return w},
me(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aER(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
ayf(d){return A.aER(J.aOe(d,0,new A.anw()))},
aZl(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
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
atM:function atM(d){this.a=d},
atK:function atK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
atL:function atL(d,e,f){this.a=d
this.b=e
this.c=f},
K_:function K_(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lo:function lo(d){this.a=d},
ami:function ami(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
amd:function amd(){},
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
q2:function q2(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
U3:function U3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
amn:function amn(){},
amp:function amp(d,e){this.a=d
this.b=e},
amq:function amq(d){this.a=d},
amo:function amo(d,e){this.a=d
this.b=e},
cU:function cU(){},
Gs:function Gs(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
ara:function ara(d){this.a=d},
NO:function NO(d){this.a=d},
pp:function pp(d,e,f){this.a=d
this.b=e
this.$ti=f},
uG:function uG(d,e,f){this.a=d
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
OL:function OL(){},
kt:function kt(d){this.a=d
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
asE:function asE(d,e){this.a=d
this.b=e},
anw:function anw(){},
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
aqJ:function aqJ(){},
aqK:function aqK(d,e,f){this.a=d
this.b=e
this.c=f},
Ci:function Ci(d,e){this.c=d
this.a=e},
PH:function PH(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.cu$=l
_.bE$=m},
G8:function G8(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aqI:function aqI(d){this.a=d},
aSV(){var w=new A.qa()
w.ha()
return w},
aV8(){var w=new A.lU()
w.ha()
return w},
aP2(){var w=new A.oQ()
w.ha()
return w},
aSm(){var w=new A.pQ()
w.ha()
return w},
aVT(){var w=new A.o4()
w.ha()
return w},
aUP(){var w=new A.qT()
w.ha()
return w},
aUO(){var w=new A.qS()
w.ha()
return w},
aUN(){var w=new A.qR()
w.ha()
return w},
aUS(){var w=new A.qV()
w.ha()
return w},
aUT(){var w=new A.qU()
w.ha()
return w},
aUV(){var w=new A.qQ()
w.ha()
return w},
aRC(){var w=new A.le()
w.ha()
return w},
aCN(){var w=x.N,v=x.I
w=new A.lz(new A.afa(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.Z))
w.ha()
return w},
qa:function qa(){this.a=null},
lU:function lU(){this.a=null},
oQ:function oQ(){this.a=null},
pQ:function pQ(){this.a=null},
o4:function o4(){this.a=null},
qT:function qT(){this.a=null},
qS:function qS(){this.a=null},
qR:function qR(){this.a=null},
qV:function qV(){this.a=null},
qU:function qU(){this.a=null},
qQ:function qQ(){this.a=null},
le:function le(){this.a=this.b=null},
lz:function lz(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
abx:function abx(){},
aUU(d){return $.aIT().h(0,d)},
aUQ(d){return $.aIP().h(0,d)},
aUR(d){return $.aIQ().h(0,d)},
j9:function j9(d,e){this.a=d
this.b=e},
kj:function kj(d,e){this.a=d
this.b=e},
kk:function kk(d,e){this.a=d
this.b=e},
a0j(d){var w=0,v=B.T(x.I),u,t
var $async$a0j=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:$.h1.toString
w=4
return B.N($.aq().ja(d,!1,null,null),$async$a0j)
case 4:w=3
return B.N(f.hE(),$async$a0j)
case 3:t=f
u=t.gfl(t)
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
A.Iv.prototype={}
A.a9k.prototype={}
A.a9j.prototype={
gp(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gaiZ(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
h(d,e){return this.a[this.b+e]},
Up(){return this.a[this.b++]},
zC(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
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
HV(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.C4(v-t)
C.F.cj(u,w,v,d)
s.a+=r},
amo(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.C4(v-t)}C.F.b_(u,w,w+d.gp(d),d.a,d.b)
s.a=s.a+d.gp(d)},
J0(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.ca(w.c.buffer,d,e-d)},
J_(d){return this.J0(d,null)},
C4(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.F.cj(t,0,u,v)
this.c=t},
a4f(){return this.C4(null)},
gp(d){return this.a}}
A.a8o.prototype={
a0P(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.l7(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.a94.prototype={
a7U(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.aa7())break}},
aa7(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gaiZ())return!1
w=v.hQ(3)
switch(C.e.cz(w,1)){case 0:if(v.aag()===-1)return!1
break
case 1:if(v.L9(v.r,v.w)===-1)return!1
break
case 2:if(v.aaa()===-1)return!1
break
default:return!1}return(w&1)===0},
hQ(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&B.c()
u=w.b
t=w.e
t===$&&B.c()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|C.e.l7(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.rZ(1,d)
s.d=C.e.t_(w,d)
s.e=v-d
return(w&u-1)>>>0},
Dg(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.c()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&B.c()
t=v.b
s=v.e
s===$&&B.c()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|C.e.l7(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.l7(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.t_(v,q)
p.e=u-q
return r&65535},
aag(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.hQ(16)
v=p.hQ(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&B.c()
if(w>v.gp(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&B.c()
r=s-(t-u)}else r=w
q=A.aCj(v.a,v.d,r,t)
v.b=v.b+q.gp(q)
p.c.amo(q)
return 0},
aaa(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.hQ(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.hQ(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.hQ(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.hQ(3)
if(s===-1)return-1
u[D.Gk[t]]=s}r=A.Mk(u)
q=l+w
p=new Uint8Array(q)
o=B.ca(p.buffer,0,l)
n=B.ca(p.buffer,l,w)
if(m.a3q(q,r,p)===-1)return-1
return m.L9(A.Mk(o),A.Mk(n))},
L9(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Dg(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a4f()
w.c[w.a++]=v&255
continue}u=v-257
t=D.Gx[u]+p.hQ(D.FP[u])
s=p.Dg(e)
if(s<0||s>29)return-1
r=D.FS[s]+p.hQ(D.Gm[s])
for(q=-r;t>r;){w.HV(w.J_(q))
t-=r}if(t===r)w.HV(w.J_(q))
else w.HV(w.J0(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a3q(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.Dg(e)
if(u===-1)return-1
switch(u){case 16:t=q.hQ(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.hQ(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.hQ(7)
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
A.dC.prototype={
V(d,e){var w=A.zX(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dC(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
a7(d,e){var w=A.zX(e)
return A.a9o(this.a,this.b,this.c,w.a,w.b,w.c)},
ai(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.zX(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
return new A.dC(k&4194303,j&4194303,(n>>>18)+(m>>>5)+((l&4095)<<8)+(j>>>22)&1048575)},
VN(d,e){var w=A.zX(e)
return new A.dC(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
IO(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.EK:D.EJ
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.zY(w,e)
if(v)u|=~C.e.t_(o,e)&1048575
t=p.b
s=22-e
r=A.zY(t,e)|C.e.l7(w,s)
q=A.zY(p.a,e)|C.e.l7(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.zY(w,t)
if(v)r|=~C.e.x6(n,t)&4194303
q=A.zY(p.b,t)|C.e.l7(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.zY(w,t)
if(v)q|=~C.e.x6(n,t)&4194303}return new A.dC(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dC)w=e
else if(B.jm(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.a9n(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
b9(d,e){return this.a2K(e)},
a2K(d){var w=A.zX(d),v=this.c,u=v>>>19,t=w.c
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
s=0-s-(C.e.cz(t,22)&1)
v=s&4194303
r=0-r-(C.e.cz(s,22)&1)&1048575
s=v
t=w
u="-"}else u=""
return A.aSb(10,t,s,r,u)},
$ics:1}
A.q_.prototype={
ad(){return new A.Vm(C.i)}}
A.Vm.prototype={
H(d){var w=null,v=x.D
return B.lV(C.cl,B.b([new B.e_(C.v,w,w,E.aCb("md/live.jpg",w,w,w,w),w),new B.e_(C.cm,w,w,B.fi(B.hl(B.b([C.c1,B.mT(D.T2,new A.aon(this,d),w),C.c1,B.mT(D.SV,new A.aoo(this,d),w)],v),C.a5,C.f8,C.a3),w,300),w)],v),C.R,C.bT)},
WK(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k1(new A.aos(v),!1)
u=B.aay(d,x.u)
u.toString
w=v.d
w.toString
u.nx(0,w)},
WI(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k1(new A.aoq(v),!1)
u=B.aay(d,x.u)
u.toString
w=v.d
w.toString
u.nx(0,w)}}
A.nX.prototype={
ad(){return new A.YB(null,null,C.i)},
ahb(){return this.c.$0()}}
A.YB.prototype={
av(){var w,v=this,u=null
v.aI()
w=new A.PH(0,1,u,C.el,C.n,u,C.a7,C.C,new B.b7(B.b([],x.F),x.W),new B.b7(B.b([],x.b),x.V))
w.JW(C.el,u,C.n,0,u,1,u,v)
v.d=w
v.z_()},
n(){this.a0E()
var w=this.d
w===$&&B.c()
w.sHR(null)
w.CW=!0
w.Xr()},
H(d){var w=this.d
w===$&&B.c()
return new A.Ci(w,null)},
z_(){var w=0,v=B.T(x.z),u=this,t,s
var $async$z_=B.P(function(d,e){if(d===1)return B.Q(e,v)
while(true)switch(w){case 0:w=2
return B.N(D.Ai.y7(u.a.d),$async$z_)
case 2:t=e
s=u.d
s===$&&B.c()
s.sHR(t)
u.d.Xs(0,null).a.a.h0(new A.arj(u))
return B.R(null,v)}})
return B.S($async$z_,v)}}
A.HD.prototype={
n(){var w=this,v=w.bw$
if(v!=null)v.J(0,w.gfD())
w.bw$=null
w.aH()},
bC(){this.cO()
this.cq()
this.fE()}}
A.alM.prototype={
I(){return"_DashOffsetType."+this.b}}
A.Ks.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Ks&&e.a===this.a&&!0},
gv(d){return B.X(this.a,D.UG,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Jc.prototype={}
A.a21.prototype={
tb(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.B3(e===0?new A.cY("<removed field>",0,v,0,w,w,w,w,x.q):A.aRn(f,e,v,g,w,h,k,l,i,j,m))},
PL(d,e,f,g,h,i,j,k,l){return this.tb(d,e,f,g,h,i,j,k,null,l)},
B3(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fa(d,e,f,g,h,i){var w=null
this.tb(0,e,f,g,w,w,w,w,h,i)},
dg(d,e,f,g,h){return this.fa(d,e,f,g,null,h)},
ta(d,e,f){var w=null
this.tb(0,d,e,64,w,w,w,w,f,x.N)},
PI(d,e){return this.ta(d,e,null)},
Fx(d,e,f,g,h,i,j,k,l){this.tb(0,e,f,g,h,null,k,i,j,l)},
agK(d,e,f,g,h,i,j,k){return this.Fx(d,e,f,g,h,i,null,j,k)},
zs(d,e,f,g,h,i){var w=null
this.B3(A.aRo(f,e,this.b.length,g,A.azk(),h,w,w,w,w,i))},
jB(d,e,f,g){this.tb(0,d,e,2097152,A.aRL(f,g).ga4G(),f,null,null,null,g)},
ak4(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gvJ(){var w=this.x
return w==null?this.x=this.a2X():w},
a2X(){var w=this.c
w=B.eX(w.gaC(w),!1,x.q)
C.b.ee(w,new A.a22())
return w},
a3r(d,e,f){var w=this.c.h(0,d),v=w==null?null:w.z
return(v==null&&!0?null.game():v).$1(f)}}
A.K_.prototype={
Bo(d){var w=this.b+=d
if(w>this.c)throw B.d(A.jR())},
Uq(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.awZ())
w.e=v+1
e.TC(w,f)
if(w.d!==(d<<3|4)>>>0)B.W(A.My());--w.e},
Us(d,e){var w,v,u=this,t=u.f8(!0),s=u.e
if(s>=64)throw B.d(A.awZ())
if(t<0)throw B.d(B.bM(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.jR())
u.e=s+1
d.TC(u,e)
if(u.d!==0)B.W(A.My());--u.e
u.c=w},
akO(){return this.f8(!0)},
akQ(){return this.mL()},
zC(){return this.f8(!1)},
al1(){return this.mL()},
akX(){return A.aB5(this.f8(!1))},
akZ(){var w=this.mL(),v=A.zX(1),u=w.a,t=w.b,s=w.c
return(new A.dC(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.a9o(0,0,0,u,t,s):w).IO(0,1)},
akH(){return this.oH(4).getUint32(0,!0)},
akJ(){return this.Hn()},
akU(){return this.oH(4).getInt32(0,!0)},
Hn(){var w=this.oH(8),v=B.ca(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dC((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
akC(){return this.f8(!0)!==0},
v0(){var w,v=this,u=v.f8(!0)
v.Bo(u)
w=v.a
return B.ca(w.buffer,w.byteOffset+v.b-u,u)},
akL(){return this.oH(4).getFloat32(0,!0)},
akE(){return this.oH(8).getFloat64(0,!0)},
Uv(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.f8(!1)
if(C.e.cz(w,3)===0)throw B.d(new A.lo("Protocol message contained an invalid tag (zero)."))
return w},
aaT(){this.Bo(1)
return this.a[this.b-1]},
f8(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.rZ(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aCm())},
mL(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.W(A.jR())
s=w[t-1]
v=(v|C.e.rZ(s&127,u*7))>>>0
if((s&128)===0)return A.awY(0,v)}s=q.aaT()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.awY(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.W(A.jR())
s=w[t-1]
r=(r|C.e.rZ(s&127,u*7+3))>>>0
if((s&128)===0)return A.awY(r,v)}throw B.d(A.aCm())},
oH(d){var w
this.Bo(d)
w=this.a
return B.nr(w.buffer,w.byteOffset+this.b-d,d)}}
A.lo.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibV:1}
A.ami.prototype={
adE(d){var w
d.gamL()
w=this.a
w.a.gbx()
w=B.bM("Extension "+B.j(d)+" not legal for message "+w.ga8O(),null)
throw B.d(w)},
ac5(d,e){var w,v=this.a.e
if(v!=null){w=d.gkY()
if(v.b)A.hV("UnknownFieldSet","clearField")
v.a.u(0,w)}this.c.m(0,d.gkY(),e)},
hd(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaC(w),w=new B.cN(J.ac(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gaj6()){q=u.h(0,r.gkY())
if(q==null)continue
if(r.gaj_())for(p=J.ac(s.a(q));p.t();)p.gD(p).a.hd()
u.m(0,r.gkY(),q.v9())}else if(r.gaj_()){o=u.h(0,r.gkY())
if(o!=null)t.a(o).a.hd()}}}}
A.amd.prototype={}
A.cY.prototype={
a0N(d,e,f,g,h,i,j,k,l,m,n){B.hh(this.b,"name")
B.hh(this.d,"tagNumber")},
gUw(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pp(B.b([],w.i("t<cY.T>")),A.azk(),w.i("pp<cY.T>"))}return w}return v.r.$0()},
Mk(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.rH()
w=J.ag(d)
if(w.gZ(d))return!0
if(!w.h(d,0).a.a.gbx().w)return!0
return w.j0(d,new A.a5K())},
j(d){return this.b}}
A.q2.prototype={}
A.U3.prototype={
ga8O(){return this.a.gbx().a},
C0(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.ami(this,B.k(w,x.G),B.k(w,x.z))}return w},
rz(){var w=this.e
if(w==null){w=this.f
if(!B.eQ(w)||w)return $.aJe()
w=this.e=new A.kt(B.k(x.S,x.k))}return w},
hd(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.f
if(!B.eQ(j)||j)return
k.f=!0
for(j=k.a.gbx().gvJ(),w=j.length,v=k.c,u=J.ag(v),t=x.J,s=x.d,r=0;r<w;++r){q=j[r]
p=q.f
if((p&2)!==0){o=q.e
n=u.h(v,o)
if(n==null)continue
if((p&2098176)!==0)for(p=J.ac(s.a(n));p.t();)p.gD(p).a.hd()
u.m(v,o,n.v9())}else if((p&4194304)!==0){p=q.e
m=u.h(v,p)
if(m==null)continue
u.m(v,p,m.ahp())}else if((p&2098176)!==0){l=u.h(v,q.e)
if(l!=null)t.a(l).a.hd()}}if(k.d!=null)k.C0().hd()
if(k.e!=null)k.rz().hd()},
a4O(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eQ(w)||w)return d.gUw()
w=this.a
v=w.F_(d.d,d,B.p(d).i("cY.T"))
this.mQ(w.gbx(),d,v)
return v},
a4P(d,e){var w,v=this.f
if(!B.eQ(v)||v)return d.gUw()
v=this.a
v.toString
w=v.F_(d.d,e.i("cY<0>").a(d),e)
this.mQ(v.gbx(),d,w)
return w},
a4Q(d,e,f){var w,v,u=this.f
if(!B.eQ(u)||u)return new A.fe(d.as,d.at,B.a3e(B.k(e,f),e,f),!1,e.i("@<0>").ah(f).i("fe<1,2>"))
u=this.a
w=d.$ti
v=u.QX(d.d,d,w.c,w.z[1])
this.mQ(u.gbx(),d,v)
return v},
wi(d){var w=J.aG(this.c,d.e)
return w},
a2D(d){var w,v,u,t,s=this,r=s.f
if(!B.eQ(r)||r)A.av8().$1(s.a.gbx().a)
r=s.a.gbx()
w=r.c.h(0,d)
if(w!=null){J.cF(s.c,w.e,null)
r=r.f
v=w.d
if(r.a5(0,v)){u=s.r
u.toString
u.u(0,r.h(0,v))}t=r.h(0,v)
if(t!=null)s.r.m(0,t,0)
return}r=s.d
if(r!=null)r.b.h(0,d)},
eh(d,e,f){B.hh(e,"fi")
this.mQ(d,e,f)},
mC(d,e,f){var w,v=this.wi(e)
if(v!=null)return f.i("y<0>").a(v)
w=this.a.F_(e.d,e,B.p(e).i("cY.T"))
this.mQ(d,e,w)
return w},
LA(d,e,f,g){var w,v,u=this.wi(e)
if(u!=null)return f.i("@<0>").ah(g).i("fe<1,2>").a(u)
w=e.$ti
v=this.a.QX(e.d,e,w.c,w.z[1])
this.mQ(d,e,v)
return f.i("@<0>").ah(g).i("fe<1,2>").a(v)},
mQ(d,e,f){var w,v=e.d,u=d.f.h(0,v)
if(u!=null){w=this.r
this.a2D(w.h(0,u))
w.m(0,u,v)}J.cF(this.c,e.e,f)},
ae(d){var w=J.aG(this.c,d)
if(w!=null)return w
return this.a4O(this.a.gbx().b[d])},
oj(d,e){var w=J.aG(this.c,d)
if(w!=null)return e.i("y<0>").a(w)
return this.a4P(e.i("cY<0>").a(this.a.gbx().b[d]),e)},
a14(d,e,f,g){var w=J.aG(this.c,e)
if(w!=null)return f.i("@<0>").ah(g).i("aN<1,2>").a(w)
return this.a4Q(f.i("@<0>").ah(g).i("q2<1,2>").a(this.a.gbx().b[e]),f,g)},
vY(d){var w=J.aG(this.c,d)
if(w==null)return 0
return w},
B1(d){var w=J.aG(this.c,d)
if(w==null)return""
return w},
r9(d){var w=J.aG(this.c,d)
if(w==null)return!1
if(x.j.b(w))return J.jp(w)
return!0},
a46(d){var w,v,u,t,s,r=this
if(r.a.gbx()!==d.a.gbx())return!1
for(w=r.c,v=J.ag(w),u=d.c,t=J.ag(u),s=0;s<v.gp(w);++s)if(!r.a45(v.h(w,s),t.h(u,s)))return!1
w=r.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.ayw(w.c,v.c)))return!1}w=r.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a45(d,e){var w,v=d==null
if(!v&&e!=null)return A.ayC(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.f5(w))return!0
if(x.f.b(w)&&J.f5(w))return!0
return!1},
ga7L(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jm(n)?n:null)!=null
if(n){n=o.f
n=B.jm(n)?n:null
n.toString
return n}n=o.a
w=A.me(0,B.fE(n.gbx()))
v=o.c
for(n=n.gbx().gvJ(),u=n.length,t=J.ag(v),s=0;s<u;++s){r=n[s]
q=t.h(v,r.e)
if(q==null)continue
w=A.aEM(w,r,q)}n=o.d
if(n!=null){u=n.c
p=A.aGh(new B.b6(u,B.p(u).i("b6<1>")),x.S)
for(t=p.length,n=n.b,s=0;s<p.length;p.length===t||(0,B.J)(p),++s){r=n.h(0,p[s])
w=A.aEM(w,r,u.h(0,r.gkY()))}}n=o.e
n=n==null?null:n.gv(n)
w=A.me(w,n==null?0:n)
n=o.f
if((!B.eQ(n)||n)&&!0)o.f=w
return w},
VJ(d,e){var w,v,u,t,s,r,q,p,o=this,n=new A.amq(new A.amp(d,e))
for(w=o.a.gbx().gvJ(),v=w.length,u=o.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
p=r.b
n.$2(q,p===""?C.e.j(r.d):p)}w=o.d
if(w!=null){w=w.b
v=B.p(w).i("b6<1>")
v=B.aw(new B.b6(w,v),!0,v.i("q.E"))
C.b.hG(v)
C.b.M(v,new A.amo(o,n))}w=o.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kt(B.k(x.S,x.k)).Dd("")},
a8N(d){var w,v,u,t,s,r,q,p
for(w=d.a.gbx().gvJ(),v=w.length,u=d.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
if(q!=null)this.MW(r,q,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fA(v,v.r),w=w.b;u.t();){p=w.h(0,u.d)
this.MW(p,v.h(0,p.gkY()),!0)}if(d.e!=null){w=this.rz()
v=d.e
v.toString
w.ajL(v)}},
MW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a.gbx(),k=l.c.h(0,d.d)
if(k==null&&f)k=d
w=(d.f&2098176)!==0
v=k.f
if((v&4194304)!==0){x.T.a(k)
v=k.$ti
u=m.LA(l,k,v.c,v.z[1])
if((k.at&2098176)!==0)for(l=J.ac(J.avQ(e)),v=u.c,t=x.J;l.t();){s=l.gD(l)
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
return}if(w){n=f?m.C0().c.h(0,x.G.a(k).gkY()):J.aG(m.c,k.e)
if(n==null){v=x.J
e=A.aRK(v.a(e),v)}else{n.kO(e)
e=n}}if(f){l=m.C0()
x.G.a(k)
if(l.d)A.av8().$1(l.a.a.gbx().a)
if(k.gaj6())B.W(B.bM(l.a.Ob(k,e,"repeating field (use get + .add())"),null))
if(l.d)A.av8().$1(l.a.a.gbx().a)
l.adE(k)
l.a.PB(k,e)
l.b.m(0,k.gkY(),k)
l.ac5(k,e)}else{m.PB(k,e)
m.mQ(l,k,e)}},
PB(d,e){var w,v=this.f
if(!B.eQ(v)||v)A.av8().$1(this.a.gbx().a)
w=A.aYw(d.f,e)
if(w!=null)throw B.d(B.bM(this.Ob(d,e,w),null))},
Ob(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbx().a+" to value ("+B.j(e)+"): "+f},
rH(){var w,v,u,t,s=this.a
if(!s.gbx().w)return!0
for(s=s.gbx().c,s=s.gaC(s),s=new B.cN(J.ac(s.a),s.b),w=this.c,v=J.ag(w),u=B.p(s).z[1];s.t();){t=s.a
if(t==null)t=u.a(t)
if(!t.Mk(v.h(w,t.e)))return!1}return this.a7J()},
a7J(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaC(u),u=new B.cN(J.ac(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Mk(this.d.c.h(0,v.gkY())))return!1}return!0}}
A.cU.prototype={
ha(){this.a=A.aWq(this,this.gbx(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cU){w=this.a
w.toString
v=e.a
v.toString
v=w.a46(v)
w=v}else w=!1
return w},
gv(d){return this.a.ga7L()},
j(d){var w,v=new B.cz("")
this.a.VJ(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
TC(d,e){var w=this.a.a.gbx(),v=this.a
v.toString
A.ayP(w,v,d,e)},
F_(d,e,f){var w=e.Q
w.toString
return A.aD6(w,f)},
QX(d,e,f,g){return new A.fe(e.as,e.at,B.k(f,g),!1,f.i("@<0>").ah(g).i("fe<1,2>"))},
kO(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.a8N(w)},
VM(d,e,f){return this.a.a14(this,d,e,f)}}
A.Gs.prototype={
ga4G(){var w=this.c
if(w===$){w!==$&&B.aC()
w=this.c=new A.ara(this)}return w}}
A.NO.prototype={}
A.pp.prototype={
hV(d){return new B.DO("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.W(this.hV("set"))},
sp(d,e){B.W(this.hV("set length"))},
dI(d,e,f){return B.W(this.hV("setAll"))},
C(d,e){return B.W(this.hV("add"))},
G(d,e){return B.W(this.hV("addAll"))},
dP(d,e,f){return B.W(this.hV("insert"))},
eu(d,e,f){return B.W(this.hV("insertAll"))},
u(d,e){return B.W(this.hV("remove"))},
bY(d,e){return B.W(this.hV("removeAt"))},
dj(d){return B.W(this.hV("removeLast"))},
b_(d,e,f,g,h){return B.W(this.hV("setRange"))},
cj(d,e,f,g){return this.b_(d,e,f,g,0)},
dF(d,e,f){return B.W(this.hV("removeRange"))}}
A.uG.prototype={
v9(){return new A.pp(this.a,A.azk(),this.$ti.i("pp<1>"))},
C(d,e){this.b.$1(e)
this.a.push(e)},
G(d,e){J.f4(e,this.b)
C.b.G(this.a,e)},
dP(d,e,f){this.b.$1(f)
C.b.dP(this.a,e,f)},
eu(d,e,f){J.f4(f,this.b)
C.b.eu(this.a,e,f)},
dI(d,e,f){J.f4(f,this.b)
C.b.dI(this.a,e,f)},
u(d,e){return C.b.u(this.a,e)},
bY(d,e){return C.b.bY(this.a,e)},
dj(d){return this.a.pop()},
b_(d,e,f,g,h){J.Ic(g,h).kd(0,f-e).M(0,this.b)
C.b.b_(this.a,e,f,g,h)},
cj(d,e,f,g){return this.b_(d,e,f,g,0)},
dF(d,e,f){return C.b.dF(this.a,e,f)}}
A.nA.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.nA&&A.x3(e,this)},
gv(d){return A.ayf(this.a)},
ga_(d){var w=this.a
return new J.fT(w,w.length)},
di(d,e,f){var w=this.a
return new B.a8(w,e,B.a6(w).i("@<1>").ah(f).i("a8<1,2>"))},
f1(d,e){return this.di(d,e,x.z)},
q(d,e){return C.b.q(this.a,e)},
M(d,e){C.b.M(this.a,e)},
hr(d,e,f){return C.b.ii(this.a,e,f)},
ii(d,e,f){return this.hr(d,e,f,x.z)},
j0(d,e){return C.b.j0(this.a,e)},
b6(d,e){return C.b.b6(this.a,e)},
nB(d){return this.b6(d,"")},
dK(d,e){return C.b.dK(this.a,e)},
dG(d,e){var w=this.a,v=B.a6(w)
return e?B.b(w.slice(0),v):J.pL(w.slice(0),v.c)},
dc(d){return this.dG(d,!0)},
jm(d){var w=this.a
return B.jW(w,B.a6(w).c)},
gZ(d){return this.a.length===0},
gbS(d){return this.a.length!==0},
kd(d,e){var w=this.a
return B.dQ(w,0,B.dw(e,"count",x.S),B.a6(w).c)},
iG(d,e){var w=this.a
return B.dQ(w,e,null,B.a6(w).c)},
gK(d){return C.b.gK(this.a)},
gO(d){return C.b.gO(this.a)},
j5(d,e,f){return C.b.j5(this.a,e,f)},
pS(d,e){return this.j5(d,e,null)},
b1(d,e){return this.a[e]},
j(d){return B.pK(this.a,"[","]")},
h(d,e){return this.a[e]},
gp(d){return this.a.length},
bJ(d,e,f){return C.b.bJ(this.a,e,f)},
dX(d,e){return this.bJ(d,e,null)},
qM(d,e,f){var w=this.a
B.d2(e,f,w.length,null,null)
return B.dQ(w,e,f,B.a6(w).c)},
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
return w.ii(w,0,new A.acE(this))},
gb7(d){var w=this.c
return w.gb7(w)},
u(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.u(0,e)},
ahp(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rx(t,w.i("@<aA.K>").ah(w.i("aA.V")).i("rx<1,2>"))),w=new B.F8(J.ac(t.gb7(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.hd()}return t}}
A.OL.prototype={
gv(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kt.prototype={
TB(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.hV(s,"mergeFieldFromBuffer")
w=C.e.cz(d,3)
switch(d&7){case 0:v=e.mL()
if(t.b)A.hV(s,"mergeVarintField")
C.b.C(t.li(w).b,v)
return!0
case 1:v=e.Hn()
if(t.b)A.hV(s,"mergeFixed64Field")
C.b.C(t.li(w).d,v)
return!0
case 2:v=e.v0()
if(t.b)A.hV(s,"mergeLengthDelimitedField")
C.b.C(t.li(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.W(A.awZ())
e.e=v+1
u=new A.kt(B.k(x.S,x.k))
u.ajK(e)
if(e.d!==(w<<3|4)>>>0)B.W(A.My());--e.e
if(t.b)A.hV(s,"mergeGroupField")
C.b.C(t.li(w).e,u)
return!0
case 4:return!1
case 5:v=e.oH(4).getUint32(0,!0)
if(t.b)A.hV(s,"mergeFixed32Field")
C.b.C(t.li(w).c,v)
return!0
default:throw B.d(new A.lo("Protocol message tag had invalid wire type."))}},
ajK(d){var w
if(this.b)A.hV("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.Uv()
if(w===0||!this.TB(w,d))break}},
ajL(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.hV(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fA(w,w.r);v.t();){u=v.d
t=w.h(0,u)
t.toString
if(this.b)A.hV(s,"mergeField")
u=this.li(u)
C.b.G(u.b,t.b)
C.b.G(u.c,t.c)
C.b.G(u.d,t.d)
C.b.G(u.a,t.a)
C.b.G(u.e,t.e)}},
li(d){if(d===0)B.W(B.bM("Zero is not a valid field number.",null))
return this.a.bA(0,d,new A.aje())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kt))return!1
return A.ayw(e.a,this.a)},
gv(d){var w={}
w.a=0
this.a.M(0,new A.ajf(w))
return w.a},
j(d){return this.Dd("")},
Dd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.cz("")
for(w=this.a,v=A.aGh(new B.b6(w,B.p(w).i("b6<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
p=w.h(0,q)
p.toString
for(p=p.gaC(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(m instanceof A.kt){l=k.a+=d+B.j(q)+": {\n"
l+=m.Dd(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
hd(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaC(w),w=new B.cN(J.ac(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).hd()}this.b=!0}}
A.ri.prototype={
hd(){var w,v=this
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
gaC(d){var w=this,v=B.aw(w.a,!0,x.z)
C.b.G(v,w.b)
C.b.G(v,w.c)
C.b.G(v,w.d)
C.b.G(v,w.e)
return v},
gp(d){return this.gaC(this).length}}
A.afa.prototype={}
A.afb.prototype={
y7(d){return this.ag7(d)},
ag7(d){var w=0,v=B.T(x.H),u,t=this,s
var $async$y7=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.N($.rO().fS(0,d),$async$y7)
case 3:u=t.ag8(s.ca(f.buffer,0,null))
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$y7,v)},
ag8(d){var w,v,u,t,s,r,q=A.aCj(d,1,null,0),p=q.Up(),o=q.Up(),n=p&8
C.e.cz(p,3)
if(n!==8)B.W(A.aw_("Only DEFLATE compression supported: "+n))
if(C.e.bF((p<<8>>>0)+o,31)!==0)B.W(A.aw_("Invalid FCHECK"))
if((o>>>5&1)!==0){q.zC()
B.W(A.aw_("FDICT Encoding not currently supported"))}w=A.Mk(D.FQ)
v=A.Mk(D.Gl)
u=new A.ace(new Uint8Array(32768))
v=new A.a94(q,u,w,v)
v.b=!0
v.a7U()
t=x.L.a(B.ca(u.c.buffer,0,u.a))
q.zC()
s=A.aCN()
q=Math.min(67108864,t.length)
r=new A.K_(t,q)
r.c=q
q=s.a.a.gbx()
w=s.a
w.toString
A.ayP(q,w,r,D.AE)
if(r.d!==0)B.W(A.My())
return this.aaJ(this.aaM(s),null).h0(new A.afg(null))},
aaM(d){J.f4(d.a.oj(3,x.m),new A.aff())
return d},
aaJ(d,e){var w=d.VM(2,x.N,x.L),v=J.ag(w)
if(v.gZ(w))return B.cg(d,x.H)
v=v.gdC(w)
return B.lg(v.di(v,new A.afc(this,e,d),x.K),x.P).bm(new A.afd(d),x.H)},
wa(d,e,f){return this.a3s(d,e,f)},
a3s(d,e,f){var w=0,v=B.T(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$wa=B.P(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.N(A.a0j(e),$async$wa)
case 7:r=h
if(m!=null){o=x.z
J.aAl(m,B.l(["imageSize",""+J.aOo(r)+"x"+J.aOi(r)],o,o))}u=r
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
J.aAl(m,B.l(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.R(u,v)
case 2:return B.Q(s,v)}})
return B.S($async$wa,v)}}
A.XC.prototype={
aE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.gZ(e)||j.ay==null)return
j=j.ay.a.ae(1)
w=new B.L(j.a.ae(0),j.a.ae(1))
if(J.f5(w))return
d.bT(0)
try{v=new B.B(0,0,0+e.a,0+e.b)
if(k.e)d.lF(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=F.aGq(k.b,new B.L(t,u),new B.L(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.L(t*o,u*n).de(0,2)
l=new B.L(s,j).de(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.ak(0,j,s)
if(o!==1&&n!==1)d.df(0,o,n)
k.agH(d,e)}finally{d.by(0)}},
agH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.ac(w.ay.a.oj(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gD(v)
q=r.a.B1(0)
if(q.length!==0){w.ay.c.a.h(0,q)
p=!1}else p=!0
if(p)continue
o=J.aG(r.a.oj(1,u),w.gag1())
n=o.a.r9(2)
m=o.a.r9(3)
if(n){d.bT(0)
d.a6(0,new Float64Array(B.fp(B.b([o.a.ae(2).a.ae(0),o.a.ae(2).a.ae(1),0,0,o.a.ae(2).a.ae(2),o.a.ae(2).a.ae(3),0,0,0,0,1,0,o.a.ae(2).a.ae(4),o.a.ae(2).a.ae(5),0,1],t))))}if(m){d.bT(0)
d.i5(0,k.aez(o.a.B1(3)))}r=o.a.ae(1).a.ae(2)
p=o.a.ae(1).a.ae(3)
l=o.a.r9(0)?C.d.X(o.a.ae(0)*255):255
k.agF(d,q,new B.B(0,0,r,p),l)
r=o.b
k.agG(d,r==null?o.a.oj(4,s):r,l)
w.ay.c.d.h(0,q)
if(m)d.by(0)
if(n)d.by(0)}},
agF(d,e,f,g){var w,v,u=this.c
u.ay.c.b.h(0,e)
w=u.ay.d.h(0,e)
if(w==null)return
v=$.aq().bk()
v.slT(this.d)
v.sq5(!0)
v.sao(0,B.a1(g,0,0,0))
d.iX(w,new B.B(0,0,w.gcd(w),w.gcE(w)),f,v)
this.agI(d,e,f,g)},
agG(d,e,f){var w,v,u,t,s,r,q,p=J.ag(e)
if(p.gZ(e))return
for(p=p.ga_(e),w=x.n;p.t();){v=p.gD(p)
u=this.aeE(v)
if(v.a.r9(5)){d.bT(0)
d.a6(0,new Float64Array(B.fp(B.b([v.a.ae(5).a.ae(0),v.a.ae(5).a.ae(1),0,0,v.a.ae(5).a.ae(2),v.a.ae(5).a.ae(3),0,0,0,0,1,0,v.a.ae(5).a.ae(4),v.a.ae(5).a.ae(5),0,1],w))))}t=v.a.ae(4).a.ae(0)
if(t.a.rH()){s=$.aq().bk()
s.sq5(!0)
s.sa9(0,C.aI)
s.sao(0,B.a1(C.d.X(t.a.ae(3)*f),C.d.X(t.a.ae(0)*255),C.d.X(t.a.ae(1)*255),C.d.X(t.a.ae(2)*255)))
d.cA(u,s)}t=v.a.ae(4).a.ae(2)
if(t>0){s=$.aq().bk()
s.sa9(0,C.W)
if(v.a.ae(4).a.ae(1).a.rH())s.sao(0,B.a1(C.d.X(v.a.ae(4).a.ae(1).a.ae(3)*f),C.d.X(v.a.ae(4).a.ae(1).a.ae(0)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(1)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(2)*255)))
s.sh9(t)
switch(v.a.ae(4).a.ae(3)){case D.j1:s.sr4(C.bU)
break
case D.x8:s.sr4(C.NL)
break
case D.x9:s.sr4(C.xL)
break}switch(v.a.ae(4).a.ae(4)){case D.j2:s.svN(C.e9)
break
case D.xa:s.svN(C.NM)
break
case D.xb:s.svN(C.NN)
break}s.sIY(v.a.ae(4).a.ae(5))
r=[v.a.ae(4).a.ae(6),v.a.ae(4).a.ae(7),v.a.ae(4).a.ae(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cA(A.b_d(u,new A.Jc(B.b([t,q<0.1?0.1:q],w)),new A.Ks(r[2])),s)}else d.cA(u,s)}if(v.a.r9(5))d.by(0)}},
aeE(d){var w,v,u,t,s,r,q,p=$.aq().cf()
if(d.a.ae(0)===D.j3)return this.Qe(d.a.ae(1).a.B1(0),p)
else if(d.a.ae(0)===D.xd){w=d.a.ae(3)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
w=w.a.ae(3)
v-=t
u-=w
s=new B.B(v,u,v+t*2,u+w*2)
if(!s.gZ(s))p.oW(s)}else if(d.a.ae(0)===D.xc){w=d.a.ae(2)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
r=w.a.ae(3)
w=w.a.ae(4)
q=B.qx(new B.B(v,u,v+t,u+r),new B.aY(w,w))
if(!q.gZ(q))p.ei(q)}return p},
Qe(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.h(0,d)!=null){t=w.ay.e.h(0,d)
t.toString
return t}if(e==null)t.a=$.aq().cf()
w=B.a0u(d,B.aK("([a-df-zA-Z])",!0,!1,!1),new A.aqJ(),null)
v=B.aK(",",!0,!1,!1)
u=B.kN(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.M(B.b(u.split("|||"),x.s),new A.aqK(t,this,d))
return t.a},
aez(d){return this.Qe(d,null)},
agI(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.h(0,e)
return},
iF(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Ci.prototype={
ad(){return new A.G8(C.i)}}
A.PH.prototype={
sHR(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.dW(0)
w=d==null
if(w)t.L(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.ae(1)
u=w.a.vY(2)
if(u===0)u=20
t.e=B.cu(0,C.d.X(w.a.vY(3)/u*1000),0)}else t.e=C.n
t.sl(0,t.a)},
gag1(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.ae(1).a.vY(3)
v=t.a.ae(1).a.vY(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.d.X(v*u)))},
L(d){this.ch=!0
if(!this.CW)this.aQ()}}
A.G8.prototype={
av(){var w,v=this
v.aI()
w=v.a.c
v.d=w.ay
w.be()
w=w.bE$
w.b=!0
w.a.push(v.gDa())
w=v.a.c
w.be()
w=w.cu$
w.b=!0
w.a.push(v.gCy())},
aL(d){var w,v,u,t=this
t.aZ(d)
w=d.c
if(w!==t.a.c){v=t.gDa()
w.J(0,v)
u=t.gCy()
w.cp(u)
w=t.a.c
t.d=w.ay
w.be()
w=w.bE$
w.b=!0
w.a.push(v)
v=t.a.c
v.be()
v=v.cu$
v.b=!0
v.a.push(u)}},
aaz(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.aw(new A.aqI(v))},
a7l(d){var w
if(d===C.P){this.a.toString
w=!0}else w=!1
if(w)this.a.c.L(0)},
n(){var w=this
w.d=null
w.a.c.J(0,w.gDa())
w.a.c.cp(w.gCy())
w.aH()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.rH()?C.z:new B.L(u.a.ae(1).a.ae(0),u.a.ae(1).a.ae(1))
if(t.gZ(t))return C.aW
w=this.a
w=w.c
return new B.iR(!0,v,B.tt(v,v,v,new A.XC(G.zc,w,C.dq,!1,w),t),v)}}
A.qa.prototype={
gbx(){return $.aIx()}}
A.lU.prototype={
gbx(){return $.aIX()}}
A.oQ.prototype={
gbx(){return $.aHU()}}
A.pQ.prototype={
gbx(){return $.aIu()}}
A.o4.prototype={
gbx(){return $.aJ3()}}
A.qT.prototype={
gbx(){return $.aIO()}}
A.qS.prototype={
gbx(){return $.aIN()}}
A.qR.prototype={
gbx(){return $.aIM()}}
A.qV.prototype={
gbx(){return $.aIR()}}
A.qU.prototype={
gbx(){return $.aIS()}}
A.qQ.prototype={
gbx(){return $.aIU()}}
A.le.prototype={
gbx(){return $.aIk()},
gqY(){var w=this.b
return w==null?this.a.oj(4,x.Y):w}}
A.lz.prototype={
gbx(){return $.aIw()},
n(){var w=this.d
w.gaC(w).M(0,new A.abx())
w.L(0)
this.e.L(0)}}
A.j9.prototype={}
A.kj.prototype={}
A.kk.prototype={}
var z=a.updateTypes(["m()","dC()","G()","nX(Y)","A()","lz(y<at>)","m(cY<@>,cY<@>)","A(cU)","ri()","~(lU)","~(le)","q_()","~()","~(eC)","~(H?)","~(n[n?])","n()","y<m>()","qa()","lU()","oQ()","kk?(m)","o4()","qT()","qS()","qR()","qV()","qU()","qQ()","le()","lz()","j9?(m)","kj?(m)","pQ()"])
A.auV.prototype={
$0(){return D.Hx},
$S:z+11}
A.aon.prototype={
$0(){return this.a.WI(this.b)},
$S:0}
A.aoo.prototype={
$0(){return this.a.WK(this.b)},
$S:0}
A.aos.prototype={
$1(d){return new A.nX(new A.aor(this.a),"md/rocket.svga",null)},
$S:z+3}
A.aor.prototype={
$0(){return this.a.d.cT(0)},
$S:0}
A.aoq.prototype={
$1(d){return new A.nX(new A.aop(this.a),"md/angle.svga",null)},
$S:z+3}
A.aop.prototype={
$0(){return this.a.d.cT(0)},
$S:0}
A.arj.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sHR(null)
w.a.ahb()},
$S:7}
A.a22.prototype={
$2(d,e){return C.e.b9(d.d,e.d)},
$S:z+6}
A.atM.prototype={
$1(d){return J.dy(d,this.a.$0())},
$S:173}
A.atK.prototype={
$1(d){var w,v,u=this,t=u.a.f8(!0),s=u.c,r=u.b.a3r(s,u.d,t)
if(r==null){w=u.e.rz()
v=A.a9n(t)
if(w.b)A.hV("UnknownFieldSet","mergeVarintField")
C.b.C(w.li(s).b,v)}else J.dy(d,r)},
$S:173}
A.atL.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:7}
A.a5J.prototype={
$0(){return A.aD6(this.a,this.b)},
$S(){return this.b.i("uG<0>()")}}
A.a5L.prototype={
$0(){return this.a},
$S:41}
A.a5K.prototype={
$1(d){return d.a.rH()},
$S:z+7}
A.aaI.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fe(w.a,w.b,B.k(v,u),!1,v.i("@<0>").ah(u).i("fe<1,2>"))},
$S(){return this.d.i("@<0>").ah(this.e).i("fe<1,2>()")}}
A.amn.prototype={
$1(d){return J.jr(d)},
$S:59}
A.amp.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cU){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.VJ(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.bD)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:56}
A.amq.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.nA)for(w=d.a,w=new J.fT(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fe)for(w=d.gdC(d),w=w.ga_(w),v=this.a;w.t();)v.$2(e,w.gD(w))
else this.a.$2(e,d)},
$S:480}
A.amo.prototype={
$1(d){var w=this.a,v=w.d.c.h(0,d)
w=w.d.b.h(0,d)
return this.b.$2(v,"["+B.j(w.gzc(w))+"]")},
$S:24}
A.ara.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.hd()
v.b!==$&&B.aC()
v.b=w
u=w}return u},
$S(){return this.a.$ti.i("1()")}}
A.acE.prototype={
$2(d,e){var w=e.a,v=e.b
return(d^A.aER(A.me(A.me(0,J.x(w)),J.x(v))))>>>0},
$S(){return this.a.$ti.i("m(m,bD<1,2>)")}}
A.aje.prototype={
$0(){var w=x.X
return new A.ri(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ajf.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.x(e)&536870911},
$S:481}
A.asE.prototype={
$1(d){return A.ayC(J.aG(this.a,d),J.aG(this.b,d))},
$S:66}
A.anw.prototype={
$2(d,e){return A.me(d,J.x(e))},
$S:482}
A.afg.prototype={
$0(){},
$S:7}
A.aff.prototype={
$1(d){var w={}
w.a=null
J.f4(d.a.oj(1,x.p),new A.afe(w))},
$S:z+9}
A.afe.prototype={
$1(d){if(J.jp(d.gqY())&&J.aZ(d.gqY())>0)if(J.aG(d.gqY(),0).a.ae(0)===D.xe&&this.a.a!=null)d.b=this.a.a
else if(J.jp(d.gqY()))this.a.a=d.gqY()},
$S:z+10}
A.afc.prototype={
$1(d){return this.VX(d)},
VX(d){var w=0,v=B.T(x.P),u=this,t,s
var $async$$1=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.N(u.a.wa(t,new Uint8Array(B.fp(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.R(null,v)}})
return B.S($async$$1,v)},
$S:483}
A.afd.prototype={
$1(d){return this.a},
$S:z+5}
A.aqJ.prototype={
$1(d){return"|||"+B.j(d.Ig(1))+" "},
$S:167}
A.aqK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.a3(d,0,1)
if(C.c.q("MLHVCSQRZmlhvcsqrz",w)){v=C.c.eO(C.c.br(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.f2(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.f2(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.co(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.co(0,u.c,t)}else if(w==="H"){s=B.bk(v[0])
u=m.a
u.c=s
u.a.co(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bk(v[0])
u.c=s
u.a.co(0,s,u.b)}else if(w==="V"){t=B.bk(v[0])
u=m.a
u.b=t
u.a.co(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bk(v[0])
u.b=t
u.a.co(0,u.c,t)}else if(w==="C"){u=m.a
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
r.qp(q,p,u.c,t)}}else if(w==="s"){u=m.a
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
r.qp(q,p,u.c,t)}}else if(w==="Q"){u=m.a
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
r.qp(q,p,u.c,t)}else if(w==="q"){u=m.a
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
r.qp(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.bL(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:32}
A.aqI.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.abx.prototype={
$1(d){d.n()},
$S:484};(function aliases(){var w=A.HD.prototype
w.a0E=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"azk","aXJ",14)
v(A,"av8",1,null,["$2","$1"],["hV",function(d){return A.hV(d,null)}],15,0)
u(A,"b0u","aTj",16)
u(A,"b0r","aTg",17)
u(A,"b0q","aTf",4)
u(A,"b0t","aTi",0)
u(A,"b0s","aTh",2)
var r
t(r=A.K_.prototype,"gakN","akO",0)
t(r,"gakP","akQ",1)
t(r,"gal_","zC",0)
t(r,"gal0","al1",1)
t(r,"gakW","akX",0)
t(r,"gakY","akZ",1)
t(r,"gakG","akH",0)
t(r,"gakI","akJ",1)
t(r,"gakT","akU",0)
t(r,"gakV","Hn",1)
t(r,"gakB","akC",4)
t(r,"gakK","akL",2)
t(r,"gakD","akE",2)
t(r=A.G8.prototype,"gDa","aaz",12)
s(r,"gCy","a7l",13)
u(A,"aHG","aSV",18)
u(A,"aHM","aV8",19)
u(A,"aHD","aP2",20)
u(A,"aHF","aSm",33)
u(A,"azs","aVT",22)
u(A,"aHJ","aUP",23)
u(A,"aHI","aUO",24)
u(A,"aHH","aUN",25)
u(A,"azr","aUS",26)
u(A,"aHK","aUT",27)
u(A,"aHL","aUV",28)
u(A,"aHE","aRC",29)
u(A,"b0N","aCN",30)
w(A,"b0Q","aUU",31)
w(A,"b0O","aUQ",32)
w(A,"b0P","aUR",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.Iv,B.jJ)
u(B.H,[A.a9k,A.acf,A.a8o,A.a94,A.dC,A.Ks,A.Jc,A.a21,A.K_,A.lo,A.ami,A.amd,A.cY,A.U3,A.cU,A.Gs,A.NO,A.OL,A.kt,A.ri,A.afa,A.afb])
v(A.a9j,A.a9k)
v(A.ace,A.acf)
u(B.iG,[A.auV,A.aon,A.aoo,A.aor,A.aop,A.arj,A.atL,A.a5J,A.a5L,A.aaI,A.ara,A.aje,A.afg,A.aqI])
u(B.a5,[A.q_,A.nX,A.Ci])
u(B.aa,[A.Vm,A.HD,A.G8])
u(B.fu,[A.aos,A.aoq,A.atM,A.atK,A.a5K,A.amn,A.amo,A.asE,A.aff,A.afe,A.afc,A.afd,A.aqJ,A.aqK,A.abx])
v(A.YB,A.HD)
v(A.alM,B.rt)
u(B.kX,[A.a22,A.amp,A.amq,A.acE,A.ajf,A.anw])
v(A.q2,A.cY)
v(A.nA,B.a0)
u(A.nA,[A.pp,A.uG])
v(A.fe,B.aA)
v(A.XC,B.tu)
v(A.PH,B.js)
u(A.cU,[A.qa,A.lU,A.oQ,A.pQ,A.o4,A.qT,A.qS,A.qR,A.qV,A.qU,A.qQ,A.le,A.lz])
u(A.OL,[A.j9,A.kj,A.kk])
w(A.HD,B.fh)})()
B.mp(b.typeUniverse,JSON.parse('{"Iv":{"bV":[]},"dC":{"cs":["H"]},"q_":{"a5":[],"i":[]},"Vm":{"aa":["q_"]},"nX":{"a5":[],"i":[]},"YB":{"aa":["nX"]},"aRl":{"cY":["1"]},"cY":{"cY.T":"1"},"uG":{"nA":["1"],"a0":["1"],"y":["1"],"a2":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"fe":{"aA":["1","2"],"aN":["1","2"],"aA.V":"2","aA.K":"1"},"lo":{"bV":[]},"q2":{"cY":["fe<1,2>?"],"cY.T":"fe<1,2>?"},"pp":{"nA":["1"],"a0":["1"],"y":["1"],"a2":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"nA":{"a0":["1"],"y":["1"],"a2":["1"],"q":["1"]},"Ci":{"a5":[],"i":[]},"XC":{"am":[]},"PH":{"js":[],"bB":["G"],"am":[]},"G8":{"aa":["Ci"]},"qa":{"cU":[]},"lU":{"cU":[]},"oQ":{"cU":[]},"pQ":{"cU":[]},"o4":{"cU":[]},"qT":{"cU":[]},"qS":{"cU":[]},"qR":{"cU":[]},"qV":{"cU":[]},"qU":{"cU":[]},"qQ":{"cU":[]},"le":{"cU":[]},"lz":{"cU":[]}}'))
B.H_(b.typeUniverse,JSON.parse('{"Jc":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.V
return{G:w("aRl<@>"),q:w("cY<@>"),p:w("le"),K:w("ah<at>"),J:w("cU"),I:w("tZ"),w:w("dC"),U:w("q<cU>"),R:w("q<@>"),M:w("t<cY<@>>"),X:w("t<dC>"),r:w("t<y<m>>"),s:w("t<n>"),A:w("t<kt>"),D:w("t<i>"),n:w("t<G>"),t:w("t<m>"),b:w("t<~()>"),F:w("t<~(eC)>"),d:w("y<cU>"),j:w("y<@>"),L:w("y<m>"),T:w("q2<@,@>"),f:w("aN<@,@>"),H:w("lz"),P:w("at"),V:w("b7<~()>"),W:w("b7<~(eC)>"),u:w("nw"),Z:w("qi"),Y:w("qQ"),m:w("lU"),N:w("n"),l:w("Dv"),Q:w("di"),B:w("kt"),k:w("ri"),y:w("A"),i:w("G"),z:w("@"),O:w("@()"),_:w("@(a2o,m)"),S:w("m"),o:w("tZ?")}})();(function constants(){var w=a.makeConstList
D.Ai=new A.afb()
D.AE=new A.amd()
D.EJ=new A.dC(0,0,0)
D.EK=new A.dC(4194303,4194303,1048575)
D.FP=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.FQ=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.FS=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.j3=new A.j9(0,"SHAPE")
D.xc=new A.j9(1,"RECT")
D.xd=new A.j9(2,"ELLIPSE")
D.xe=new A.j9(3,"KEEP")
D.md=B.b(w([D.j3,D.xc,D.xd,D.xe]),B.V("t<j9>"))
D.G4=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Gk=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Gm=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Gl=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.Gx=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.j2=new A.kk(0,"LineJoin_MITER")
D.xa=new A.kk(1,"LineJoin_ROUND")
D.xb=new A.kk(2,"LineJoin_BEVEL")
D.mt=B.b(w([D.j2,D.xa,D.xb]),B.V("t<kk>"))
D.j1=new A.kj(0,"LineCap_BUTT")
D.x8=new A.kj(1,"LineCap_ROUND")
D.x9=new A.kj(2,"LineCap_SQUARE")
D.mv=B.b(w([D.j1,D.x8,D.x9]),B.V("t<kj>"))
D.Hx=new A.q_(null)
D.av=new A.NO("com.opensource.svga")
D.VX=new A.NO("")
D.SV=new B.dc("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.T2=new B.dc("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.UG=new A.alM(0,"Absolute")})();(function staticFields(){$.aWr=[]
$.aBZ=B.k(B.V("lf?"),B.V("Gs<cU>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"b8E","aMH",()=>new A.auV())
v($,"b3T","aJe",()=>{var u=A.aW_()
u.hd()
return u})
v($,"b2K","aIx",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hi("MovieParams",A.aHG(),D.av),r=x.i
s.fa(0,1,u,256,u,r)
s.fa(0,2,t,256,t,r)
r=x.S
s.dg(0,3,"fps",2048,r)
s.dg(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b3s","aIX",()=>{var u="imageKey",t="matteKey",s=A.hi("SpriteEntity",A.aHM(),D.av)
s.ta(1,u,u)
s.zs(0,2,"frames",2097154,A.aHE(),x.p)
s.ta(3,t,t)
s.w=!1
return s})
v($,"b1d","aHU",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hi("AudioEntity",A.aHD(),D.av)
n.ta(1,t,t)
u=x.S
n.fa(0,2,s,r,s,u)
n.fa(0,3,q,r,q,u)
n.fa(0,4,p,r,p,u)
n.fa(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b2B","aIu",()=>{var u=A.hi("Layout",A.aHF(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.dg(0,3,"width",256,t)
u.dg(0,4,"height",256,t)
u.w=!1
return u})
v($,"b3H","aJ3",()=>{var u=A.hi("Transform",A.azs(),D.av),t=x.i
u.dg(0,1,"a",256,t)
u.dg(0,2,"b",256,t)
u.dg(0,3,"c",256,t)
u.dg(0,4,"d",256,t)
u.dg(0,5,"tx",256,t)
u.dg(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b3f","aIO",()=>{var u=A.hi("ShapeEntity.ShapeArgs",A.aHJ(),D.av)
u.PI(1,"d")
u.w=!1
return u})
v($,"b3e","aIN",()=>{var u="cornerRadius",t=A.hi("ShapeEntity.RectArgs",A.aHI(),D.av),s=x.i
t.dg(0,1,"x",256,s)
t.dg(0,2,"y",256,s)
t.dg(0,3,"width",256,s)
t.dg(0,4,"height",256,s)
t.fa(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b3d","aIM",()=>{var u=A.hi("ShapeEntity.EllipseArgs",A.aHH(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.fa(0,3,"radiusX",256,"radiusX",t)
u.fa(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b3i","aIR",()=>{var u=A.hi("ShapeEntity.ShapeStyle.RGBAColor",A.azr(),D.av),t=x.i
u.dg(0,1,"r",256,t)
u.dg(0,2,"g",256,t)
u.dg(0,3,"b",256,t)
u.dg(0,4,"a",256,t)
u.w=!1
return u})
v($,"b3j","aIS",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hi("ShapeEntity.ShapeStyle",A.aHK(),D.av),n=B.V("qV")
o.jB(1,"fill",A.azr(),n)
o.jB(2,"stroke",A.azr(),n)
n=x.i
o.fa(0,3,u,256,u,n)
o.Fx(0,4,"lineCap",512,D.j1,D.mv,"lineCap",A.b0O(),B.V("kj"))
o.Fx(0,5,t,512,D.j2,D.mt,t,A.b0P(),B.V("kk"))
o.fa(0,6,s,256,s,n)
o.fa(0,7,r,256,r,n)
o.fa(0,8,q,256,q,n)
o.fa(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b3l","aIU",()=>{var u=A.hi("ShapeEntity",A.aHL(),D.av)
u.ak4(0,B.b([2,3,4],x.t))
u.agK(0,1,"type",512,D.j3,D.md,A.b0Q(),B.V("j9"))
u.jB(2,"shape",A.aHJ(),B.V("qT"))
u.jB(3,"rect",A.aHI(),B.V("qS"))
u.jB(4,"ellipse",A.aHH(),B.V("qR"))
u.jB(10,"styles",A.aHK(),B.V("qU"))
u.jB(11,"transform",A.azs(),B.V("o4"))
u.w=!1
return u})
v($,"b2e","aIk",()=>{var u="clipPath",t=A.hi("FrameEntity",A.aHE(),D.av)
t.dg(0,1,"alpha",256,x.i)
t.jB(2,"layout",A.aHF(),B.V("pQ"))
t.jB(3,"transform",A.azs(),B.V("o4"))
t.ta(4,u,u)
t.zs(0,5,"shapes",2097154,A.aHL(),x.Y)
t.w=!1
return t})
v($,"b2J","aIw",()=>{var u,t,s=null,r=A.hi("MovieEntity",A.b0N(),D.av)
r.PI(1,"version")
r.jB(2,"params",A.aHG(),B.V("qa"))
u=A.hi("MovieEntity.ImagesEntry",s,D.av)
t=x.z
u.PL(0,1,"key",64,s,s,s,s,t)
u.PL(0,2,"value",32,s,s,s,s,t)
r.B3(A.aSD("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.zs(0,4,"sprites",2097154,A.aHM(),x.m)
r.zs(0,5,"audios",2097154,A.aHD(),B.V("oQ"))
r.w=!1
return r})
v($,"b3k","aIT",()=>A.axw(D.md,B.V("j9")))
v($,"b3g","aIP",()=>A.axw(D.mv,B.V("kj")))
v($,"b3h","aIQ",()=>A.axw(D.mt,B.V("kk")))})()}
$__dart_deferred_initializers__["BxCFvralKqIBHLCd9fgvkYyWVBk="] = $__dart_deferred_initializers__.current
