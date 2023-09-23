self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
avX(d){return new A.Iu(d,null,null)},
Iu:function Iu(d,e,f){this.a=d
this.b=e
this.c=f},
aCh(d,e,f,g){var w,v
if(x.Q.b(d))w=B.ca(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.eW(x.R.a(d),!0,x.S)
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
Mj(d){var w=new A.a8o()
w.a0U(d)
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
v=C.e.bV(d,17592186044416)
d-=v*17592186044416
u=C.e.bV(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.a9o(0,0,0,t,s,r):new A.dD(t,s,r)},
aCi(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dD((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
awV(d,e){return new A.dD(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
zW(d){if(d instanceof A.dD)return d
else if(B.jm(d))return A.a9n(d)
throw B.d(B.fs(d,"other","not an int, Int32 or Int64"))},
aSa(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.Gc[d]
t=""
s=""
r=""
while(!0){if(!!(w===0&&v===0))break
q=C.e.dZ(w,u)
v+=w-q*u<<10>>>0
p=C.e.dZ(v,u)
g+=v-p*u<<10>>>0
o=C.e.dZ(g,u)
f+=g-o*u<<10>>>0
n=C.e.dZ(f,u)
e+=f-n*u<<10>>>0
m=C.e.dZ(e,u)
l=C.c.bu(C.e.fZ(u+(e-m*u),d),1)
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
zX(d,e){var w=C.e.x6(d,e)
return w},
dD:function dD(d,e,f){this.a=d
this.b=e
this.c=f},
auS:function auS(){},
pZ:function pZ(d){this.a=d},
Vl:function Vl(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aoo:function aoo(d,e){this.a=d
this.b=e},
aop:function aop(d,e){this.a=d
this.b=e},
aot:function aot(d){this.a=d},
aos:function aos(d){this.a=d},
aor:function aor(d){this.a=d},
aoq:function aoq(d){this.a=d},
nV:function nV(d,e,f){this.c=d
this.d=e
this.a=f},
YA:function YA(d,e,f){var _=this
_.d=$
_.e5$=d
_.bw$=e
_.a=null
_.b=f
_.c=null},
ari:function ari(d){this.a=d},
HD:function HD(){},
b_f(d,e,f){var w,v,u,t,s,r,q,p,o=$.ap().cc()
for(w=d.QD(),w=w.ga_(w),v=e.a,u=f.a;w.t();){t=w.gD(w)
t.gp(t)
for(s=u,r=!0;s<t.gp(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.xy(0,t.RS(s,s+p),C.h)
s+=p
r=!r}}return o},
alO:function alO(d,e){this.a=d
this.b=e},
Ks:function Ks(d){this.a=d},
Jb:function Jb(d){this.a=d
this.b=0},
hj(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a20((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
ayN(c1,c2,c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null
B.hi(c4,c0)
for(w=x.S,v=x.T,u=x.z,t=c1.c,s=c3.gal3(),r=c3.gal1(),q=c3.gakR(),p=c3.gakP(),o=c3.gal9(),n=c3.gal8(),m=c3.gal6(),l=c3.gal4(),k=c3.gakY(),j=c3.gakW(),i=c3.gakM(),h=c3.gakT(),g=c3.gakK(),f=c3.a;!0;){e=c3.Uy()
if(e===0)return
d=e&7
a0=C.e.cA(e,3)
a1=t.h(0,a0)
if(a1==null)a1=c0
if(a1==null||!A.aZn(a1.f,d)){if(!c2.rw().TF(e,c3))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c2.ei(c1,a1,c3.f9(!0)!==0)
break
case 32:c2.ei(c1,a1,new Uint8Array(B.fo(c3.v0())))
break
case 64:a3=c3.v0()
c2.ei(c1,a1,C.jx.el(a3))
break
case 256:a3=c3.b+=4
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getFloat32(0,!0))
break
case 128:a3=c3.b+=8
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c2.ei(c1,a1,a3.getFloat64(0,!0))
break
case 512:a6=c3.f9(!0)
a7=t.h(0,a0)
a8=a7==null?c0:a7.z
a3=(a8==null&&!0?c0.gamn():a8).$1(a6)
if(a3==null){a9=c2.rw()
a3=A.a9n(a6)
if(a9.b)A.hW("UnknownFieldSet","mergeVarintField")
C.b.C(a9.le(a0).b,a3)}else c2.ei(c1,a1,a3)
break
case 1024:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAy():b0).$0()
b1=c2.wi(a1)
if(b1!=null)a3.kK(b1)
c3.Ut(a0,a3,c4)
c2.ei(c1,a1,a3)
break
case 2048:c2.ei(c1,a1,c3.f9(!0))
break
case 4096:c2.ei(c1,a1,c3.mI())
break
case 8192:c2.ei(c1,a1,A.aB3(c3.f9(!1)))
break
case 16384:b2=c3.mI()
c2.ei(c1,a1,(b2.VQ(0,1).k(0,1)?A.a9o(0,0,0,b2.a,b2.b,b2.c):b2).IS(0,1))
break
case 32768:c2.ei(c1,a1,c3.f9(!1))
break
case 65536:c2.ei(c1,a1,c3.mI())
break
case 131072:a3=c3.b+=4
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getUint32(0,!0))
break
case 262144:a3=c3.b+=8
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ei(c1,a1,A.aCi(b4))
break
case 524288:a3=c3.b+=4
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c3.b+=8
if(a3>c3.c)B.W(A.jR())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ei(c1,a1,A.aCi(b4))
break
case 2097152:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAy():b0).$0()
b1=c2.wi(a1)
if(b1!=null)a3.kK(b1)
c3.Uv(a3,c4)
c2.ei(c1,a1,a3)
break
case 18:A.ix(c1,c2,c3,d,a1,g)
break
case 34:J.dz(c2.mz(c1,a1,u),new Uint8Array(B.fo(c3.v0())))
break
case 66:a3=c2.mz(c1,a1,u)
a4=c3.v0()
J.dz(a3,C.jx.el(a4))
break
case 258:A.ix(c1,c2,c3,d,a1,h)
break
case 130:A.ix(c1,c2,c3,d,a1,i)
break
case 514:A.aZ8(c1,c2,c3,d,a1,a0,c4)
break
case 1026:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAy():b0).$0()
c3.Ut(a0,a3,c4)
J.dz(c2.mz(c1,a1,u),a3)
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
a3=(b0==null&&!0?c0.gAy():b0).$0()
c3.Uv(a3,c4)
J.dz(c2.mz(c1,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c2.LE(c1,a1,u,u)
b6=c3.f9(!0)
b7=c3.c
c3.c=c3.b+b6
a4=b5.b
a5=A.aEK(a4.length)
A.ayN(b5,new A.U3(c0,c0,a5,b5.f.a===0?c0:B.k(w,w)),c3,c4)
if(c3.d!==0)B.W(A.Mx())
c3.c=b7
b8=J.ag(a5)
b9=b8.h(a5,0)
if(b9==null)b9=a4[0].r.$0()
b2=b8.h(a5,1)
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b9,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
ix(d,e,f,g,h,i){A.aG2(d,e,f,g,h,new A.atK(i))},
aZ8(d,e,f,g,h,i,j){A.aG2(d,e,f,g,h,new A.atI(f,d,i,j,e))},
aG2(d,e,f,g,h,i){var w,v,u,t=e.mz(d,h,x.z)
if(g===2){w=f.f9(!0)
if(w<0)B.W(B.bM(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.W(A.jR())
f.c=v
new A.atJ(f,i,t).$0()
f.c=u}else i.$1(t)},
aB3(d){if((d&1)===1)return-C.e.cA(d,1)-1
else return C.e.cA(d,1)},
Mx(){return new A.lo("Protocol message end-group tag did not match expected tag.")},
aCk(){return new A.lo("CodedBufferReader encountered a malformed varint.")},
awW(){return new A.lo("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
jR(){return new A.lo("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
aYy(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eP(e))return"not type bool"
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
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dD))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cU))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
aXL(d){if(d==null)throw B.d(B.bM("Can't add a null to a repeated field",null))},
aRm(d,e,f,g,h,i,j,k,l,m,n){return new A.cY(d,e,f,g,A.aBP(g,i),l,m,null,n.i("cY<0>"))},
aRn(d,e,f,g,h,i,j,k,l,m,n){var w=new A.cY(d,e,f,g,new A.a5J(h,n),i,m,h,n.i("cY<0>"))
w.a0S(d,e,f,g,h,i,j,k,l,m,n)
return w},
aBP(d,e){if(e==null)return A.aTj(d)
if(x.O.b(e))return e
return new A.a5L(e)},
aSC(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aBP(g,new A.aaI(h,i,j,n,o))
B.hi(d,"name")
B.hi(e,"tagNumber")
return new A.q1(h,i,j,d,e,f,g,w,null,null,null,n.i("@<0>").ai(o).i("q1<1,2>"))},
hW(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
aWq(d,e,f){var w,v=A.aEK(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.U3(d,f,v,w)},
aEK(d){if(d===0)return $.aWr
return B.aQ(d,null,!1,x.z)},
aEJ(d,e,f){var w,v
if(x.j.b(f)&&J.f5(f))return d
if(x.f.b(f)&&J.f5(f))return d
d=A.me(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.me(d,A.ayc(f))
else if(v!==512)d=A.me(d,J.x(f))
else d=(w&2)!==0?A.me(d,A.ayc(J.aOt(f,new A.amp()))):A.me(d,f.a)
return d},
aTj(d){switch(d){case 16:case 17:return A.b0r()
case 32:case 33:return A.b0s()
case 64:case 65:return A.b0v()
case 256:case 257:case 128:case 129:return A.b0t()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b0u()
default:return null}},
aTi(){return""},
aTf(){return B.b([],x.t)},
aTe(){return!1},
aTh(){return 0},
aTg(){return 0},
aRK(d,e){var w,v=$.aBX.h(0,d)
if(v!=null)return v
w=new A.Gs(d,e.i("Gs<0>"))
$.aBX.m(0,d,w)
return w},
aRJ(d,e){var w=e.a(d.gbx().Q.$0())
w.kK(d)
return w},
aD4(d,e){var w=B.b([],e.i("t<0>"))
B.hi(d,"check")
return new A.uE(w,d,e.i("uE<0>"))},
axt(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
aW_(){return new A.ku(B.k(x.S,x.k))},
ayA(d,e){var w
if(d instanceof A.cU)return d.k(0,e)
if(e instanceof A.cU)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.x1(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.ayu(d,e)
return J.f(d,e)},
x1(d,e){var w,v=J.ag(d),u=J.ag(e)
if(v.gp(d)!==u.gp(e))return!1
for(w=0;w<v.gp(d);++w)if(!A.ayA(v.h(d,w),u.h(e,w)))return!1
return!0},
ayu(d,e){var w=J.ag(d)
if(w.gp(d)!==J.aZ(e))return!1
return J.aOd(w.gb7(d),new A.asC(d,e))},
aGe(d,e){var w=B.eW(d,!0,e)
C.b.hI(w)
return w},
me(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aEO(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
ayc(d){return A.aEO(J.aOe(d,0,new A.anx()))},
aZn(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a20:function a20(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a21:function a21(){},
atK:function atK(d){this.a=d},
atI:function atI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
atJ:function atJ(d,e,f){this.a=d
this.b=e
this.c=f},
K_:function K_(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lo:function lo(d){this.a=d},
amk:function amk(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
amf:function amf(){},
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
q1:function q1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
amp:function amp(){},
amr:function amr(d,e){this.a=d
this.b=e},
ams:function ams(d){this.a=d},
amq:function amq(d,e){this.a=d
this.b=e},
cU:function cU(){},
Gs:function Gs(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
ar9:function ar9(d){this.a=d},
NN:function NN(d){this.a=d},
po:function po(d,e,f){this.a=d
this.b=e
this.$ti=f},
uE:function uE(d,e,f){this.a=d
this.b=e
this.$ti=f},
ny:function ny(){},
fe:function fe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
acE:function acE(d){this.a=d},
OL:function OL(){},
ku:function ku(d){this.a=d
this.b=!1},
aje:function aje(){},
ajf:function ajf(d){this.a=d},
rf:function rf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
asC:function asC(d,e){this.a=d
this.b=e},
anx:function anx(){},
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
XB:function XB(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aqI:function aqI(){},
aqJ:function aqJ(d,e,f){this.a=d
this.b=e
this.c=f},
Cg:function Cg(d,e){this.c=d
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
_.bQ$=l
_.bL$=m},
G8:function G8(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aqH:function aqH(d){this.a=d},
aSU(){var w=new A.q9()
w.hb()
return w},
aV8(){var w=new A.lV()
w.hb()
return w},
aP2(){var w=new A.oO()
w.hb()
return w},
aSl(){var w=new A.pP()
w.hb()
return w},
aVT(){var w=new A.o3()
w.hb()
return w},
aUP(){var w=new A.qS()
w.hb()
return w},
aUO(){var w=new A.qR()
w.hb()
return w},
aUN(){var w=new A.qQ()
w.hb()
return w},
aUS(){var w=new A.qU()
w.hb()
return w},
aUT(){var w=new A.qT()
w.hb()
return w},
aUV(){var w=new A.qP()
w.hb()
return w},
aRB(){var w=new A.le()
w.hb()
return w},
aCL(){var w=x.N,v=x.I
w=new A.lz(new A.afa(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.Z))
w.hb()
return w},
q9:function q9(){this.a=null},
lV:function lV(){this.a=null},
oO:function oO(){this.a=null},
pP:function pP(){this.a=null},
o3:function o3(){this.a=null},
qS:function qS(){this.a=null},
qR:function qR(){this.a=null},
qQ:function qQ(){this.a=null},
qU:function qU(){this.a=null},
qT:function qT(){this.a=null},
qP:function qP(){this.a=null},
le:function le(){this.a=this.b=null},
lz:function lz(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
abx:function abx(){},
aUU(d){return $.aIQ().h(0,d)},
aUQ(d){return $.aIM().h(0,d)},
aUR(d){return $.aIN().h(0,d)},
j8:function j8(d,e){this.a=d
this.b=e},
kj:function kj(d,e){this.a=d
this.b=e},
kk:function kk(d,e){this.a=d
this.b=e},
a0i(d){var w=0,v=B.T(x.I),u,t
var $async$a0i=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:$.h2.toString
w=4
return B.N($.ap().j7(d,!1,null,null),$async$a0i)
case 4:w=3
return B.N(f.hF(),$async$a0i)
case 3:t=f
u=t.gfm(t)
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$a0i,v)}},B,C,J,D,E,F,G
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
gaj7(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
h(d,e){return this.a[this.b+e]},
Us(){return this.a[this.b++]},
zB(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
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
HZ(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.C3(v-t)
C.F.cl(u,w,v,d)
s.a+=r},
amx(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.C3(v-t)}C.F.b0(u,w,w+d.gp(d),d.a,d.b)
s.a=s.a+d.gp(d)},
J4(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.ca(w.c.buffer,d,e-d)},
J3(d){return this.J4(d,null)},
C3(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.F.cl(t,0,u,v)
this.c=t},
a4m(){return this.C3(null)},
gp(d){return this.a}}
A.a8o.prototype={
a0U(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.l3(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.a94.prototype={
a80(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.aae())break}},
aae(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gaj7())return!1
w=v.hS(3)
switch(C.e.cA(w,1)){case 0:if(v.aan()===-1)return!1
break
case 1:if(v.Ld(v.r,v.w)===-1)return!1
break
case 2:if(v.aah()===-1)return!1
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
s.d=(s.d|C.e.l3(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.rY(1,d)
s.d=C.e.rZ(w,d)
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
p.d=(p.d|C.e.l3(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.l3(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.rZ(v,q)
p.e=u-q
return r&65535},
aan(){var w,v,u,t,s,r,q,p=this
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
q=A.aCh(v.a,v.d,r,t)
v.b=v.b+q.gp(q)
p.c.amx(q)
return 0},
aah(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.hS(5)
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
u[D.Gs[t]]=s}r=A.Mj(u)
q=l+w
p=new Uint8Array(q)
o=B.ca(p.buffer,0,l)
n=B.ca(p.buffer,l,w)
if(m.a3x(q,r,p)===-1)return-1
return m.Ld(A.Mj(o),A.Mj(n))},
Ld(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Dg(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a4m()
w.c[w.a++]=v&255
continue}u=v-257
t=D.GF[u]+p.hS(D.FX[u])
s=p.Dg(e)
if(s<0||s>29)return-1
r=D.G_[s]+p.hS(D.Gu[s])
for(q=-r;t>r;){w.HZ(w.J3(q))
t-=r}if(t===r)w.HZ(w.J3(q))
else w.HZ(w.J4(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a3x(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.Dg(e)
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
V(d,e){var w=A.zW(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dD(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
a7(d,e){var w=A.zW(e)
return A.a9o(this.a,this.b,this.c,w.a,w.b,w.c)},
aj(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.zW(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
VQ(d,e){var w=A.zW(e)
return new A.dD(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
IS(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.EQ:D.EP
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.zX(w,e)
if(v)u|=~C.e.rZ(o,e)&1048575
t=p.b
s=22-e
r=A.zX(t,e)|C.e.l3(w,s)
q=A.zX(p.a,e)|C.e.l3(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.zX(w,t)
if(v)r|=~C.e.x6(n,t)&4194303
q=A.zX(p.b,t)|C.e.l3(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.zX(w,t)
if(v)q|=~C.e.x6(n,t)&4194303}return new A.dD(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dD)w=e
else if(B.jm(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.a9n(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
b9(d,e){return this.a2R(e)},
a2R(d){var w=A.zW(d),v=this.c,u=v>>>19,t=w.c
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
return A.aSa(10,t,s,r,u)},
$ics:1}
A.pZ.prototype={
ad(){return new A.Vl(C.i)}}
A.Vl.prototype={
H(d){var w=null,v=x.D
return B.nT(C.cm,B.b([new B.e_(C.v,w,w,E.aC9("md/live.jpg",w,w,w,w),w),new B.e_(C.cn,w,w,B.fG(B.hm(B.b([C.c1,B.mR(D.Tf,new A.aoo(this,d),w),C.c1,B.mR(D.T7,new A.aop(this,d),w)],v),C.a4,C.f9,C.a2),w,300),w)],v),C.T,C.cg)},
WO(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k1(new A.aot(v),!1)
u=B.aay(d,x.u)
u.toString
w=v.d
w.toString
u.nu(0,w)},
WM(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k1(new A.aor(v),!1)
u=B.aay(d,x.u)
u.toString
w=v.d
w.toString
u.nu(0,w)}}
A.nV.prototype={
ad(){return new A.YA(null,null,C.i)},
ahk(){return this.c.$0()}}
A.YA.prototype={
av(){var w,v=this,u=null
v.aI()
w=new A.PH(0,1,u,C.el,C.n,u,C.a6,C.C,new B.b7(B.b([],x.F),x.W),new B.b7(B.b([],x.b),x.V))
w.K_(C.el,u,C.n,0,u,1,u,v)
v.d=w
v.yZ()},
n(){this.a0J()
var w=this.d
w===$&&B.c()
w.sHV(null)
w.CW=!0
w.Xv()},
H(d){var w=this.d
w===$&&B.c()
return new A.Cg(w,null)},
yZ(){var w=0,v=B.T(x.z),u=this,t,s
var $async$yZ=B.P(function(d,e){if(d===1)return B.Q(e,v)
while(true)switch(w){case 0:w=2
return B.N(D.An.y6(u.a.d),$async$yZ)
case 2:t=e
s=u.d
s===$&&B.c()
s.sHV(t)
u.d.Xw(0,null).a.a.h2(new A.ari(u))
return B.R(null,v)}})
return B.S($async$yZ,v)}}
A.HD.prototype={
n(){var w=this,v=w.bw$
if(v!=null)v.J(0,w.gfF())
w.bw$=null
w.aH()},
bC(){this.cO()
this.cr()
this.fG()}}
A.alO.prototype={
I(){return"_DashOffsetType."+this.b}}
A.Ks.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Ks&&e.a===this.a&&!0},
gv(d){return B.X(this.a,D.UT,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Jb.prototype={}
A.a20.prototype={
ta(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.B2(e===0?new A.cY("<removed field>",0,v,0,w,w,w,w,x.q):A.aRm(f,e,v,g,w,h,k,l,i,j,m))},
PP(d,e,f,g,h,i,j,k,l){return this.ta(d,e,f,g,h,i,j,k,null,l)},
B2(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fb(d,e,f,g,h,i){var w=null
this.ta(0,e,f,g,w,w,w,w,h,i)},
dg(d,e,f,g,h){return this.fb(d,e,f,g,null,h)},
t9(d,e,f){var w=null
this.ta(0,d,e,64,w,w,w,w,f,x.N)},
PM(d,e){return this.t9(d,e,null)},
Fy(d,e,f,g,h,i,j,k,l){this.ta(0,e,f,g,h,null,k,i,j,l)},
agR(d,e,f,g,h,i,j,k){return this.Fy(d,e,f,g,h,i,null,j,k)},
zr(d,e,f,g,h,i){var w=null
this.B2(A.aRn(f,e,this.b.length,g,A.azi(),h,w,w,w,w,i))},
jy(d,e,f,g){this.ta(0,d,e,2097152,A.aRK(f,g).ga4N(),f,null,null,null,g)},
akd(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gvJ(){var w=this.x
return w==null?this.x=this.a33():w},
a33(){var w=this.c
w=B.eW(w.gaD(w),!1,x.q)
C.b.ef(w,new A.a21())
return w},
a3y(d,e,f){var w=this.c.h(0,d),v=w==null?null:w.z
return(v==null&&!0?null.gamn():v).$1(f)}}
A.K_.prototype={
Bn(d){var w=this.b+=d
if(w>this.c)throw B.d(A.jR())},
Ut(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.awW())
w.e=v+1
e.TG(w,f)
if(w.d!==(d<<3|4)>>>0)B.W(A.Mx());--w.e},
Uv(d,e){var w,v,u=this,t=u.f9(!0),s=u.e
if(s>=64)throw B.d(A.awW())
if(t<0)throw B.d(B.bM(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.jR())
u.e=s+1
d.TG(u,e)
if(u.d!==0)B.W(A.Mx());--u.e
u.c=w},
akX(){return this.f9(!0)},
akZ(){return this.mI()},
zB(){return this.f9(!1)},
ala(){return this.mI()},
al5(){return A.aB3(this.f9(!1))},
al7(){var w=this.mI(),v=A.zW(1),u=w.a,t=w.b,s=w.c
return(new A.dD(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.a9o(0,0,0,u,t,s):w).IS(0,1)},
akQ(){return this.oF(4).getUint32(0,!0)},
akS(){return this.Hq()},
al2(){return this.oF(4).getInt32(0,!0)},
Hq(){var w=this.oF(8),v=B.ca(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dD((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
akL(){return this.f9(!0)!==0},
v0(){var w,v=this,u=v.f9(!0)
v.Bn(u)
w=v.a
return B.ca(w.buffer,w.byteOffset+v.b-u,u)},
akU(){return this.oF(4).getFloat32(0,!0)},
akN(){return this.oF(8).getFloat64(0,!0)},
Uy(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.f9(!1)
if(C.e.cA(w,3)===0)throw B.d(new A.lo("Protocol message contained an invalid tag (zero)."))
return w},
ab_(){this.Bn(1)
return this.a[this.b-1]},
f9(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.rY(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aCk())},
mI(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.W(A.jR())
s=w[t-1]
v=(v|C.e.rY(s&127,u*7))>>>0
if((s&128)===0)return A.awV(0,v)}s=q.ab_()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.awV(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.W(A.jR())
s=w[t-1]
r=(r|C.e.rY(s&127,u*7+3))>>>0
if((s&128)===0)return A.awV(r,v)}throw B.d(A.aCk())},
oF(d){var w
this.Bn(d)
w=this.a
return B.np(w.buffer,w.byteOffset+this.b-d,d)}}
A.lo.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibU:1}
A.amk.prototype={
adL(d){var w
d.gamU()
w=this.a
w.a.gbx()
w=B.bM("Extension "+B.j(d)+" not legal for message "+w.ga8V(),null)
throw B.d(w)},
acc(d,e){var w,v=this.a.e
if(v!=null){w=d.gkT()
if(v.b)A.hW("UnknownFieldSet","clearField")
v.a.u(0,w)}this.c.m(0,d.gkT(),e)},
he(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaD(w),w=new B.cM(J.ac(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gajf()){q=u.h(0,r.gkT())
if(q==null)continue
if(r.gaj8())for(p=J.ac(s.a(q));p.t();)p.gD(p).a.he()
u.m(0,r.gkT(),q.v9())}else if(r.gaj8()){o=u.h(0,r.gkT())
if(o!=null)t.a(o).a.he()}}}}
A.amf.prototype={}
A.cY.prototype={
a0S(d,e,f,g,h,i,j,k,l,m,n){B.hi(this.b,"name")
B.hi(this.d,"tagNumber")},
gUz(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.po(B.b([],w.i("t<cY.T>")),A.azi(),w.i("po<cY.T>"))}return w}return v.r.$0()},
Mo(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.rG()
w=J.ag(d)
if(w.gZ(d))return!0
if(!w.h(d,0).a.a.gbx().w)return!0
return w.iZ(d,new A.a5K())},
j(d){return this.b}}
A.q1.prototype={}
A.U3.prototype={
ga8V(){return this.a.gbx().a},
C_(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.amk(this,B.k(w,x.G),B.k(w,x.z))}return w},
rw(){var w=this.e
if(w==null){w=this.f
if(!B.eP(w)||w)return $.aJb()
w=this.e=new A.ku(B.k(x.S,x.k))}return w},
he(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.f
if(!B.eP(j)||j)return
k.f=!0
for(j=k.a.gbx().gvJ(),w=j.length,v=k.c,u=J.ag(v),t=x.J,s=x.d,r=0;r<w;++r){q=j[r]
p=q.f
if((p&2)!==0){o=q.e
n=u.h(v,o)
if(n==null)continue
if((p&2098176)!==0)for(p=J.ac(s.a(n));p.t();)p.gD(p).a.he()
u.m(v,o,n.v9())}else if((p&4194304)!==0){p=q.e
m=u.h(v,p)
if(m==null)continue
u.m(v,p,m.ahy())}else if((p&2098176)!==0){l=u.h(v,q.e)
if(l!=null)t.a(l).a.he()}}if(k.d!=null)k.C_().he()
if(k.e!=null)k.rw().he()},
a4V(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eP(w)||w)return d.gUz()
w=this.a
v=w.F0(d.d,d,B.p(d).i("cY.T"))
this.mN(w.gbx(),d,v)
return v},
a4W(d,e){var w,v=this.f
if(!B.eP(v)||v)return d.gUz()
v=this.a
v.toString
w=v.F0(d.d,e.i("cY<0>").a(d),e)
this.mN(v.gbx(),d,w)
return w},
a4X(d,e,f){var w,v,u=this.f
if(!B.eP(u)||u)return new A.fe(d.as,d.at,B.a3d(B.k(e,f),e,f),!1,e.i("@<0>").ai(f).i("fe<1,2>"))
u=this.a
w=d.$ti
v=u.R0(d.d,d,w.c,w.z[1])
this.mN(u.gbx(),d,v)
return v},
wi(d){var w=J.aD(this.c,d.e)
return w},
a2K(d){var w,v,u,t,s=this,r=s.f
if(!B.eP(r)||r)A.av5().$1(s.a.gbx().a)
r=s.a.gbx()
w=r.c.h(0,d)
if(w!=null){J.cS(s.c,w.e,null)
r=r.f
v=w.d
if(r.a6(0,v)){u=s.r
u.toString
u.u(0,r.h(0,v))}t=r.h(0,v)
if(t!=null)s.r.m(0,t,0)
return}r=s.d
if(r!=null)r.b.h(0,d)},
ei(d,e,f){B.hi(e,"fi")
this.mN(d,e,f)},
mz(d,e,f){var w,v=this.wi(e)
if(v!=null)return f.i("y<0>").a(v)
w=this.a.F0(e.d,e,B.p(e).i("cY.T"))
this.mN(d,e,w)
return w},
LE(d,e,f,g){var w,v,u=this.wi(e)
if(u!=null)return f.i("@<0>").ai(g).i("fe<1,2>").a(u)
w=e.$ti
v=this.a.R0(e.d,e,w.c,w.z[1])
this.mN(d,e,v)
return f.i("@<0>").ai(g).i("fe<1,2>").a(v)},
mN(d,e,f){var w,v=e.d,u=d.f.h(0,v)
if(u!=null){w=this.r
this.a2K(w.h(0,u))
w.m(0,u,v)}J.cS(this.c,e.e,f)},
ae(d){var w=J.aD(this.c,d)
if(w!=null)return w
return this.a4V(this.a.gbx().b[d])},
oh(d,e){var w=J.aD(this.c,d)
if(w!=null)return e.i("y<0>").a(w)
return this.a4W(e.i("cY<0>").a(this.a.gbx().b[d]),e)},
a19(d,e,f,g){var w=J.aD(this.c,e)
if(w!=null)return f.i("@<0>").ai(g).i("aT<1,2>").a(w)
return this.a4X(f.i("@<0>").ai(g).i("q1<1,2>").a(this.a.gbx().b[e]),f,g)},
vY(d){var w=J.aD(this.c,d)
if(w==null)return 0
return w},
B0(d){var w=J.aD(this.c,d)
if(w==null)return""
return w},
r8(d){var w=J.aD(this.c,d)
if(w==null)return!1
if(x.j.b(w))return J.jp(w)
return!0},
a4d(d){var w,v,u,t,s,r=this
if(r.a.gbx()!==d.a.gbx())return!1
for(w=r.c,v=J.ag(w),u=d.c,t=J.ag(u),s=0;s<v.gp(w);++s)if(!r.a4c(v.h(w,s),t.h(u,s)))return!1
w=r.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.ayu(w.c,v.c)))return!1}w=r.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a4c(d,e){var w,v=d==null
if(!v&&e!=null)return A.ayA(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.f5(w))return!0
if(x.f.b(w)&&J.f5(w))return!0
return!1},
ga7S(){var w,v,u,t,s,r,q,p,o=this,n=o.f
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
w=A.aEJ(w,r,q)}n=o.d
if(n!=null){u=n.c
p=A.aGe(new B.b6(u,B.p(u).i("b6<1>")),x.S)
for(t=p.length,n=n.b,s=0;s<p.length;p.length===t||(0,B.K)(p),++s){r=n.h(0,p[s])
w=A.aEJ(w,r,u.h(0,r.gkT()))}}n=o.e
n=n==null?null:n.gv(n)
w=A.me(w,n==null?0:n)
n=o.f
if((!B.eP(n)||n)&&!0)o.f=w
return w},
VM(d,e){var w,v,u,t,s,r,q,p,o=this,n=new A.ams(new A.amr(d,e))
for(w=o.a.gbx().gvJ(),v=w.length,u=o.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
p=r.b
n.$2(q,p===""?C.e.j(r.d):p)}w=o.d
if(w!=null){w=w.b
v=B.p(w).i("b6<1>")
v=B.ax(new B.b6(w,v),!0,v.i("q.E"))
C.b.hI(v)
C.b.M(v,new A.amq(o,n))}w=o.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.ku(B.k(x.S,x.k)).Dd("")},
a8U(d){var w,v,u,t,s,r,q,p
for(w=d.a.gbx().gvJ(),v=w.length,u=d.c,t=J.ag(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
if(q!=null)this.N_(r,q,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fA(v,v.r),w=w.b;u.t();){p=w.h(0,u.d)
this.N_(p,v.h(0,p.gkT()),!0)}if(d.e!=null){w=this.rw()
v=d.e
v.toString
w.ajU(v)}},
N_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a.gbx(),k=l.c.h(0,d.d)
if(k==null&&f)k=d
w=(d.f&2098176)!==0
v=k.f
if((v&4194304)!==0){x.T.a(k)
v=k.$ti
u=m.LE(l,k,v.c,v.z[1])
if((k.at&2098176)!==0)for(l=J.ac(J.avN(e)),v=u.c,t=x.J;l.t();){s=l.gD(l)
r=s.a
s=t.a(s.b)
q=t.a(s.gbx().Q.$0())
q.kK(s)
if(u.d)B.W(B.U(y.a))
if(r==null)B.W(B.bM("Can't add a null to a map field",null))
v.m(0,r,q)}else u.G(u,e)
return}if((v&2)!==0){v=B.p(k).i("cY.T")
if(w){p=m.mz(l,k,v)
for(l=e.a,v=x.J,t=J.bs(p),o=0;o<l.length;++o){s=l[o]
r=v.a(s.gbx().Q.$0())
r.kK(s)
t.C(p,r)}}else J.oJ(m.mz(l,k,v),e)
return}if(w){n=f?m.C_().c.h(0,x.G.a(k).gkT()):J.aD(m.c,k.e)
if(n==null){v=x.J
e=A.aRJ(v.a(e),v)}else{n.kK(e)
e=n}}if(f){l=m.C_()
x.G.a(k)
if(l.d)A.av5().$1(l.a.a.gbx().a)
if(k.gajf())B.W(B.bM(l.a.Of(k,e,"repeating field (use get + .add())"),null))
if(l.d)A.av5().$1(l.a.a.gbx().a)
l.adL(k)
l.a.PF(k,e)
l.b.m(0,k.gkT(),k)
l.acc(k,e)}else{m.PF(k,e)
m.mN(l,k,e)}},
PF(d,e){var w,v=this.f
if(!B.eP(v)||v)A.av5().$1(this.a.gbx().a)
w=A.aYy(d.f,e)
if(w!=null)throw B.d(B.bM(this.Of(d,e,w),null))},
Of(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbx().a+" to value ("+B.j(e)+"): "+f},
rG(){var w,v,u,t,s=this.a
if(!s.gbx().w)return!0
for(s=s.gbx().c,s=s.gaD(s),s=new B.cM(J.ac(s.a),s.b),w=this.c,v=J.ag(w),u=B.p(s).z[1];s.t();){t=s.a
if(t==null)t=u.a(t)
if(!t.Mo(v.h(w,t.e)))return!1}return this.a7Q()},
a7Q(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaD(u),u=new B.cM(J.ac(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Mo(this.d.c.h(0,v.gkT())))return!1}return!0}}
A.cU.prototype={
hb(){this.a=A.aWq(this,this.gbx(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cU){w=this.a
w.toString
v=e.a
v.toString
v=w.a4d(v)
w=v}else w=!1
return w},
gv(d){return this.a.ga7S()},
j(d){var w,v=new B.cy("")
this.a.VM(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
TG(d,e){var w=this.a.a.gbx(),v=this.a
v.toString
A.ayN(w,v,d,e)},
F0(d,e,f){var w=e.Q
w.toString
return A.aD4(w,f)},
R0(d,e,f,g){return new A.fe(e.as,e.at,B.k(f,g),!1,f.i("@<0>").ai(g).i("fe<1,2>"))},
kK(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.a8U(w)},
VP(d,e,f){return this.a.a19(this,d,e,f)}}
A.Gs.prototype={
ga4N(){var w=this.c
if(w===$){w!==$&&B.aA()
w=this.c=new A.ar9(this)}return w}}
A.NN.prototype={}
A.po.prototype={
hX(d){return new B.DO("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.W(this.hX("set"))},
sp(d,e){B.W(this.hX("set length"))},
dH(d,e,f){return B.W(this.hX("setAll"))},
C(d,e){return B.W(this.hX("add"))},
G(d,e){return B.W(this.hX("addAll"))},
dP(d,e,f){return B.W(this.hX("insert"))},
ew(d,e,f){return B.W(this.hX("insertAll"))},
u(d,e){return B.W(this.hX("remove"))},
bZ(d,e){return B.W(this.hX("removeAt"))},
dj(d){return B.W(this.hX("removeLast"))},
b0(d,e,f,g,h){return B.W(this.hX("setRange"))},
cl(d,e,f,g){return this.b0(d,e,f,g,0)},
dE(d,e,f){return B.W(this.hX("removeRange"))}}
A.uE.prototype={
v9(){return new A.po(this.a,A.azi(),this.$ti.i("po<1>"))},
C(d,e){this.b.$1(e)
this.a.push(e)},
G(d,e){J.f4(e,this.b)
C.b.G(this.a,e)},
dP(d,e,f){this.b.$1(f)
C.b.dP(this.a,e,f)},
ew(d,e,f){J.f4(f,this.b)
C.b.ew(this.a,e,f)},
dH(d,e,f){J.f4(f,this.b)
C.b.dH(this.a,e,f)},
u(d,e){return C.b.u(this.a,e)},
bZ(d,e){return C.b.bZ(this.a,e)},
dj(d){return this.a.pop()},
b0(d,e,f,g,h){J.Ib(g,h).ka(0,f-e).M(0,this.b)
C.b.b0(this.a,e,f,g,h)},
cl(d,e,f,g){return this.b0(d,e,f,g,0)},
dE(d,e,f){return C.b.dE(this.a,e,f)}}
A.ny.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.ny&&A.x1(e,this)},
gv(d){return A.ayc(this.a)},
ga_(d){var w=this.a
return new J.fU(w,w.length)},
di(d,e,f){var w=this.a
return new B.a8(w,e,B.a6(w).i("@<1>").ai(f).i("a8<1,2>"))},
f2(d,e){return this.di(d,e,x.z)},
q(d,e){return C.b.q(this.a,e)},
M(d,e){C.b.M(this.a,e)},
hs(d,e,f){return C.b.j2(this.a,e,f)},
j2(d,e,f){return this.hs(d,e,f,x.z)},
iZ(d,e){return C.b.iZ(this.a,e)},
b6(d,e){return C.b.b6(this.a,e)},
ny(d){return this.b6(d,"")},
dJ(d,e){return C.b.dJ(this.a,e)},
dF(d,e){var w=this.a,v=B.a6(w)
return e?B.b(w.slice(0),v):J.pK(w.slice(0),v.c)},
dd(d){return this.dF(d,!0)},
jj(d){var w=this.a
return B.jW(w,B.a6(w).c)},
gZ(d){return this.a.length===0},
gbT(d){return this.a.length!==0},
ka(d,e){var w=this.a
return B.dR(w,0,B.dx(e,"count",x.S),B.a6(w).c)},
iE(d,e){var w=this.a
return B.dR(w,e,null,B.a6(w).c)},
gK(d){return C.b.gK(this.a)},
gO(d){return C.b.gO(this.a)},
b2(d,e){return this.a[e]},
j(d){return B.pJ(this.a,"[","]")},
h(d,e){return this.a[e]},
gp(d){return this.a.length},
bI(d,e,f){return C.b.bI(this.a,e,f)},
dY(d,e){return this.bI(d,e,null)},
qM(d,e,f){var w=this.a
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
w=w.gdB(w)
return w.j2(w,0,new A.acE(this))},
gb7(d){var w=this.c
return w.gb7(w)},
u(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.u(0,e)},
ahy(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rv(t,w.i("@<aB.K>").ai(w.i("aB.V")).i("rv<1,2>"))),w=new B.F8(J.ac(t.gb7(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.he()}return t}}
A.OL.prototype={
gv(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.ku.prototype={
TF(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.hW(s,"mergeFieldFromBuffer")
w=C.e.cA(d,3)
switch(d&7){case 0:v=e.mI()
if(t.b)A.hW(s,"mergeVarintField")
C.b.C(t.le(w).b,v)
return!0
case 1:v=e.Hq()
if(t.b)A.hW(s,"mergeFixed64Field")
C.b.C(t.le(w).d,v)
return!0
case 2:v=e.v0()
if(t.b)A.hW(s,"mergeLengthDelimitedField")
C.b.C(t.le(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.W(A.awW())
e.e=v+1
u=new A.ku(B.k(x.S,x.k))
u.ajT(e)
if(e.d!==(w<<3|4)>>>0)B.W(A.Mx());--e.e
if(t.b)A.hW(s,"mergeGroupField")
C.b.C(t.le(w).e,u)
return!0
case 4:return!1
case 5:v=e.oF(4).getUint32(0,!0)
if(t.b)A.hW(s,"mergeFixed32Field")
C.b.C(t.le(w).c,v)
return!0
default:throw B.d(new A.lo("Protocol message tag had invalid wire type."))}},
ajT(d){var w
if(this.b)A.hW("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.Uy()
if(w===0||!this.TF(w,d))break}},
ajU(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.hW(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fA(w,w.r);v.t();){u=v.d
t=w.h(0,u)
t.toString
if(this.b)A.hW(s,"mergeField")
u=this.le(u)
C.b.G(u.b,t.b)
C.b.G(u.c,t.c)
C.b.G(u.d,t.d)
C.b.G(u.a,t.a)
C.b.G(u.e,t.e)}},
le(d){if(d===0)B.W(B.bM("Zero is not a valid field number.",null))
return this.a.bA(0,d,new A.aje())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.ku))return!1
return A.ayu(e.a,this.a)},
gv(d){var w={}
w.a=0
this.a.M(0,new A.ajf(w))
return w.a},
j(d){return this.Dd("")},
Dd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.cy("")
for(w=this.a,v=A.aGe(new B.b6(w,B.p(w).i("b6<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
p=w.h(0,q)
p.toString
for(p=p.gaD(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){m=p[n]
if(m instanceof A.ku){l=k.a+=d+B.j(q)+": {\n"
l+=m.Dd(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
he(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaD(w),w=new B.cM(J.ac(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).he()}this.b=!0}}
A.rf.prototype={
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
if(!(e instanceof A.rf))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.x1(e.a[w],v[w]))return!1
if(!A.x1(e.b,u.b))return!1
if(!A.x1(e.c,u.c))return!1
if(!A.x1(e.d,u.d))return!1
if(!A.x1(e.e,u.e))return!1
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
y6(d){return this.age(d)},
age(d){var w=0,v=B.T(x.H),u,t=this,s
var $async$y6=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.N($.rM().fU(0,d),$async$y6)
case 3:u=t.agf(s.ca(f.buffer,0,null))
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$y6,v)},
agf(d){var w,v,u,t,s,r,q=A.aCh(d,1,null,0),p=q.Us(),o=q.Us(),n=p&8
C.e.cA(p,3)
if(n!==8)B.W(A.avX("Only DEFLATE compression supported: "+n))
if(C.e.bE((p<<8>>>0)+o,31)!==0)B.W(A.avX("Invalid FCHECK"))
if((o>>>5&1)!==0){q.zB()
B.W(A.avX("FDICT Encoding not currently supported"))}w=A.Mj(D.FY)
v=A.Mj(D.Gt)
u=new A.ace(new Uint8Array(32768))
v=new A.a94(q,u,w,v)
v.b=!0
v.a80()
t=x.L.a(B.ca(u.c.buffer,0,u.a))
q.zB()
s=A.aCL()
q=Math.min(67108864,t.length)
r=new A.K_(t,q)
r.c=q
q=s.a.a.gbx()
w=s.a
w.toString
A.ayN(q,w,r,D.AJ)
if(r.d!==0)B.W(A.Mx())
return this.aaQ(this.aaT(s),null).h2(new A.afg(null))},
aaT(d){J.f4(d.a.oh(3,x.m),new A.aff())
return d},
aaQ(d,e){var w=d.VP(2,x.N,x.L),v=J.ag(w)
if(v.gZ(w))return B.cf(d,x.H)
v=v.gdB(w)
return B.lg(v.di(v,new A.afc(this,e,d),x.K),x.P).bn(new A.afd(d),x.H)},
wa(d,e,f){return this.a3z(d,e,f)},
a3z(d,e,f){var w=0,v=B.T(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$wa=B.P(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.N(A.a0i(e),$async$wa)
case 7:r=h
if(m!=null){o=x.z
J.aAj(m,B.l(["imageSize",""+J.aOo(r)+"x"+J.aOi(r)],o,o))}u=r
w=1
break
t=2
w=6
break
case 4:t=3
l=s
q=B.ai(l)
p=B.aN(l)
if(m!=null){o=x.z
J.aAj(m,B.l(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.R(u,v)
case 2:return B.Q(s,v)}})
return B.S($async$wa,v)}}
A.XB.prototype={
aB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.gZ(e)||j.ay==null)return
j=j.ay.a.ae(1)
w=new B.L(j.a.ae(0),j.a.ae(1))
if(J.f5(w))return
d.bU(0)
try{v=new B.B(0,0,0+e.a,0+e.b)
if(k.e)d.lB(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=F.aGn(k.b,new B.L(t,u),new B.L(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.L(t*o,u*n).cW(0,2)
l=new B.L(s,j).cW(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.am(0,j,s)
if(o!==1&&n!==1)d.df(0,o,n)
k.agO(d,e)}finally{d.by(0)}},
agO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.ac(w.ay.a.oh(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gD(v)
q=r.a.B0(0)
if(q.length!==0){w.ay.c.a.h(0,q)
p=!1}else p=!0
if(p)continue
o=J.aD(r.a.oh(1,u),w.gag8())
n=o.a.r8(2)
m=o.a.r8(3)
if(n){d.bU(0)
d.a3(0,new Float64Array(B.fo(B.b([o.a.ae(2).a.ae(0),o.a.ae(2).a.ae(1),0,0,o.a.ae(2).a.ae(2),o.a.ae(2).a.ae(3),0,0,0,0,1,0,o.a.ae(2).a.ae(4),o.a.ae(2).a.ae(5),0,1],t))))}if(m){d.bU(0)
d.i7(0,k.aeG(o.a.B0(3)))}r=o.a.ae(1).a.ae(2)
p=o.a.ae(1).a.ae(3)
l=o.a.r8(0)?C.d.X(o.a.ae(0)*255):255
k.agM(d,q,new B.B(0,0,r,p),l)
r=o.b
k.agN(d,r==null?o.a.oh(4,s):r,l)
w.ay.c.d.h(0,q)
if(m)d.by(0)
if(n)d.by(0)}},
agM(d,e,f,g){var w,v,u=this.c
u.ay.c.b.h(0,e)
w=u.ay.d.h(0,e)
if(w==null)return
v=$.ap().bc()
v.slQ(this.d)
v.sq5(!0)
v.sag(0,B.a2(g,0,0,0))
d.iV(w,new B.B(0,0,w.gcf(w),w.gcE(w)),f,v)
this.agP(d,e,f,g)},
agN(d,e,f){var w,v,u,t,s,r,q,p=J.ag(e)
if(p.gZ(e))return
for(p=p.ga_(e),w=x.n;p.t();){v=p.gD(p)
u=this.aeL(v)
if(v.a.r8(5)){d.bU(0)
d.a3(0,new Float64Array(B.fo(B.b([v.a.ae(5).a.ae(0),v.a.ae(5).a.ae(1),0,0,v.a.ae(5).a.ae(2),v.a.ae(5).a.ae(3),0,0,0,0,1,0,v.a.ae(5).a.ae(4),v.a.ae(5).a.ae(5),0,1],w))))}t=v.a.ae(4).a.ae(0)
if(t.a.rG()){s=$.ap().bc()
s.sq5(!0)
s.sa8(0,C.aG)
s.sag(0,B.a2(C.d.X(t.a.ae(3)*f),C.d.X(t.a.ae(0)*255),C.d.X(t.a.ae(1)*255),C.d.X(t.a.ae(2)*255)))
d.cv(u,s)}t=v.a.ae(4).a.ae(2)
if(t>0){s=$.ap().bc()
s.sa8(0,C.S)
if(v.a.ae(4).a.ae(1).a.rG())s.sag(0,B.a2(C.d.X(v.a.ae(4).a.ae(1).a.ae(3)*f),C.d.X(v.a.ae(4).a.ae(1).a.ae(0)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(1)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(2)*255)))
s.sf6(t)
switch(v.a.ae(4).a.ae(3)){case D.j2:s.so8(C.bU)
break
case D.xd:s.so8(C.NY)
break
case D.xe:s.so8(C.jd)
break}switch(v.a.ae(4).a.ae(4)){case D.j3:s.svN(C.e9)
break
case D.xf:s.svN(C.NZ)
break
case D.xg:s.svN(C.O_)
break}s.sJ1(v.a.ae(4).a.ae(5))
r=[v.a.ae(4).a.ae(6),v.a.ae(4).a.ae(7),v.a.ae(4).a.ae(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cv(A.b_f(u,new A.Jb(B.b([t,q<0.1?0.1:q],w)),new A.Ks(r[2])),s)}else d.cv(u,s)}if(v.a.r8(5))d.by(0)}},
aeL(d){var w,v,u,t,s,r,q,p=$.ap().cc()
if(d.a.ae(0)===D.j4)return this.Qi(d.a.ae(1).a.B0(0),p)
else if(d.a.ae(0)===D.xi){w=d.a.ae(3)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
w=w.a.ae(3)
v-=t
u-=w
s=new B.B(v,u,v+t*2,u+w*2)
if(!s.gZ(s))p.oU(s)}else if(d.a.ae(0)===D.xh){w=d.a.ae(2)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
r=w.a.ae(3)
w=w.a.ae(4)
q=B.qw(new B.B(v,u,v+t,u+r),new B.aY(w,w))
if(!q.gZ(q))p.ej(q)}return p},
Qi(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.h(0,d)!=null){t=w.ay.e.h(0,d)
t.toString
return t}if(e==null)t.a=$.ap().cc()
w=B.a0t(d,B.aK("([a-df-zA-Z])",!0,!1,!1),new A.aqI(),null)
v=B.aK(",",!0,!1,!1)
u=B.kN(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.M(B.b(u.split("|||"),x.s),new A.aqJ(t,this,d))
return t.a},
aeG(d){return this.Qi(d,null)},
agP(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.h(0,e)
return},
hG(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Cg.prototype={
ad(){return new A.G8(C.i)}}
A.PH.prototype={
sHV(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.dX(0)
w=d==null
if(w)t.L(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.ae(1)
u=w.a.vY(2)
if(u===0)u=20
t.e=B.ct(0,C.d.X(w.a.vY(3)/u*1000),0)}else t.e=C.n
t.sl(0,t.a)},
gag8(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.ae(1).a.vY(3)
v=t.a.ae(1).a.vY(3)
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
w=w.bL$
w.b=!0
w.a.push(v.gDa())
w=v.a.c
w.bf()
w=w.bQ$
w.b=!0
w.a.push(v.gCx())},
aJ(d){var w,v,u,t=this
t.aX(d)
w=d.c
if(w!==t.a.c){v=t.gDa()
w.J(0,v)
u=t.gCx()
w.cq(u)
w=t.a.c
t.d=w.ay
w.bf()
w=w.bL$
w.b=!0
w.a.push(v)
v=t.a.c
v.bf()
v=v.bQ$
v.b=!0
v.a.push(u)}},
aaG(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.aw(new A.aqH(v))},
a7s(d){var w
if(d===C.P){this.a.toString
w=!0}else w=!1
if(w)this.a.c.L(0)},
n(){var w=this
w.d=null
w.a.c.J(0,w.gDa())
w.a.c.cq(w.gCx())
w.aH()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.rG()?C.x:new B.L(u.a.ae(1).a.ae(0),u.a.ae(1).a.ae(1))
if(t.gZ(t))return C.b4
w=this.a
w=w.c
return new B.iR(!0,v,B.p7(v,v,v,new A.XB(G.zh,w,C.dn,!1,w),t),v)}}
A.q9.prototype={
gbx(){return $.aIu()}}
A.lV.prototype={
gbx(){return $.aIU()}}
A.oO.prototype={
gbx(){return $.aHR()}}
A.pP.prototype={
gbx(){return $.aIr()}}
A.o3.prototype={
gbx(){return $.aJ0()}}
A.qS.prototype={
gbx(){return $.aIL()}}
A.qR.prototype={
gbx(){return $.aIK()}}
A.qQ.prototype={
gbx(){return $.aIJ()}}
A.qU.prototype={
gbx(){return $.aIO()}}
A.qT.prototype={
gbx(){return $.aIP()}}
A.qP.prototype={
gbx(){return $.aIR()}}
A.le.prototype={
gbx(){return $.aIh()},
gqY(){var w=this.b
return w==null?this.a.oh(4,x.Y):w}}
A.lz.prototype={
gbx(){return $.aIt()},
n(){var w=this.d
w.gaD(w).M(0,new A.abx())
w.L(0)
this.e.L(0)}}
A.j8.prototype={}
A.kj.prototype={}
A.kk.prototype={}
var z=a.updateTypes(["m()","dD()","G()","nV(Z)","A()","lz(y<as>)","m(cY<@>,cY<@>)","A(cU)","rf()","~(lV)","~(le)","pZ()","~()","~(eC)","~(H?)","~(n[n?])","n()","y<m>()","q9()","lV()","oO()","kk?(m)","o3()","qS()","qR()","qQ()","qU()","qT()","qP()","le()","lz()","j8?(m)","kj?(m)","pP()"])
A.auS.prototype={
$0(){return D.HF},
$S:z+11}
A.aoo.prototype={
$0(){return this.a.WM(this.b)},
$S:0}
A.aop.prototype={
$0(){return this.a.WO(this.b)},
$S:0}
A.aot.prototype={
$1(d){return new A.nV(new A.aos(this.a),"md/rocket.svga",null)},
$S:z+3}
A.aos.prototype={
$0(){return this.a.d.cU(0)},
$S:0}
A.aor.prototype={
$1(d){return new A.nV(new A.aoq(this.a),"md/angle.svga",null)},
$S:z+3}
A.aoq.prototype={
$0(){return this.a.d.cU(0)},
$S:0}
A.ari.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sHV(null)
w.a.ahk()},
$S:7}
A.a21.prototype={
$2(d,e){return C.e.b9(d.d,e.d)},
$S:z+6}
A.atK.prototype={
$1(d){return J.dz(d,this.a.$0())},
$S:173}
A.atI.prototype={
$1(d){var w,v,u=this,t=u.a.f9(!0),s=u.c,r=u.b.a3y(s,u.d,t)
if(r==null){w=u.e.rw()
v=A.a9n(t)
if(w.b)A.hW("UnknownFieldSet","mergeVarintField")
C.b.C(w.le(s).b,v)}else J.dz(d,r)},
$S:173}
A.atJ.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:7}
A.a5J.prototype={
$0(){return A.aD4(this.a,this.b)},
$S(){return this.b.i("uE<0>()")}}
A.a5L.prototype={
$0(){return this.a},
$S:41}
A.a5K.prototype={
$1(d){return d.a.rG()},
$S:z+7}
A.aaI.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fe(w.a,w.b,B.k(v,u),!1,v.i("@<0>").ai(u).i("fe<1,2>"))},
$S(){return this.d.i("@<0>").ai(this.e).i("fe<1,2>()")}}
A.amp.prototype={
$1(d){return J.jr(d)},
$S:60}
A.amr.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cU){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.VM(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.bC)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:56}
A.ams.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.ny)for(w=d.a,w=new J.fU(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fe)for(w=d.gdB(d),w=w.ga_(w),v=this.a;w.t();)v.$2(e,w.gD(w))
else this.a.$2(e,d)},
$S:477}
A.amq.prototype={
$1(d){var w=this.a,v=w.d.c.h(0,d)
w=w.d.b.h(0,d)
return this.b.$2(v,"["+B.j(w.gzb(w))+"]")},
$S:24}
A.ar9.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.he()
v.b!==$&&B.aA()
v.b=w
u=w}return u},
$S(){return this.a.$ti.i("1()")}}
A.acE.prototype={
$2(d,e){var w=e.a,v=e.b
return(d^A.aEO(A.me(A.me(0,J.x(w)),J.x(v))))>>>0},
$S(){return this.a.$ti.i("m(m,bC<1,2>)")}}
A.aje.prototype={
$0(){var w=x.X
return new A.rf(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ajf.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.x(e)&536870911},
$S:478}
A.asC.prototype={
$1(d){return A.ayA(J.aD(this.a,d),J.aD(this.b,d))},
$S:67}
A.anx.prototype={
$2(d,e){return A.me(d,J.x(e))},
$S:479}
A.afg.prototype={
$0(){},
$S:7}
A.aff.prototype={
$1(d){var w={}
w.a=null
J.f4(d.a.oh(1,x.p),new A.afe(w))},
$S:z+9}
A.afe.prototype={
$1(d){if(J.jp(d.gqY())&&J.aZ(d.gqY())>0)if(J.aD(d.gqY(),0).a.ae(0)===D.xj&&this.a.a!=null)d.b=this.a.a
else if(J.jp(d.gqY()))this.a.a=d.gqY()},
$S:z+10}
A.afc.prototype={
$1(d){return this.W_(d)},
W_(d){var w=0,v=B.T(x.P),u=this,t,s
var $async$$1=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.N(u.a.wa(t,new Uint8Array(B.fo(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.R(null,v)}})
return B.S($async$$1,v)},
$S:480}
A.afd.prototype={
$1(d){return this.a},
$S:z+5}
A.aqI.prototype={
$1(d){return"|||"+B.j(d.Ik(1))+" "},
$S:166}
A.aqJ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.a5(d,0,1)
if(C.c.q("MLHVCSQRZmlhvcsqrz",w)){v=C.c.eQ(C.c.bu(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.dQ(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.dQ(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bk(v[0])
t=B.bk(v[1])
u.b=t
u.a.ce(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bk(v[0])
t=u.b+B.bk(v[1])
u.b=t
u.a.ce(0,u.c,t)}else if(w==="H"){s=B.bk(v[0])
u=m.a
u.c=s
u.a.ce(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bk(v[0])
u.c=s
u.a.ce(0,s,u.b)}else if(w==="V"){t=B.bk(v[0])
u=m.a
u.b=t
u.a.ce(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bk(v[0])
u.b=t
u.a.ce(0,u.c,t)}else if(w==="C"){u=m.a
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
r.n7(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
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
r.n7(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
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
r.n7(q,p,o,n,u.c,t)}else{u.r=B.bk(v[0])
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
q.n7(r,p,o,n,u.c,t)}else{u.r=q+B.bk(v[0])
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
r.qp(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.bK(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:32}
A.aqH.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.abx.prototype={
$1(d){d.n()},
$S:481};(function aliases(){var w=A.HD.prototype
w.a0J=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"azi","aXL",14)
v(A,"av5",1,null,["$2","$1"],["hW",function(d){return A.hW(d,null)}],15,0)
u(A,"b0v","aTi",16)
u(A,"b0s","aTf",17)
u(A,"b0r","aTe",4)
u(A,"b0u","aTh",0)
u(A,"b0t","aTg",2)
var r
t(r=A.K_.prototype,"gakW","akX",0)
t(r,"gakY","akZ",1)
t(r,"gal8","zB",0)
t(r,"gal9","ala",1)
t(r,"gal4","al5",0)
t(r,"gal6","al7",1)
t(r,"gakP","akQ",0)
t(r,"gakR","akS",1)
t(r,"gal1","al2",0)
t(r,"gal3","Hq",1)
t(r,"gakK","akL",4)
t(r,"gakT","akU",2)
t(r,"gakM","akN",2)
t(r=A.G8.prototype,"gDa","aaG",12)
s(r,"gCx","a7s",13)
u(A,"aHD","aSU",18)
u(A,"aHJ","aV8",19)
u(A,"aHA","aP2",20)
u(A,"aHC","aSl",33)
u(A,"azq","aVT",22)
u(A,"aHG","aUP",23)
u(A,"aHF","aUO",24)
u(A,"aHE","aUN",25)
u(A,"azp","aUS",26)
u(A,"aHH","aUT",27)
u(A,"aHI","aUV",28)
u(A,"aHB","aRB",29)
u(A,"b0O","aCL",30)
w(A,"b0R","aUU",31)
w(A,"b0P","aUQ",32)
w(A,"b0Q","aUR",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.Iu,B.jJ)
u(B.H,[A.a9k,A.acf,A.a8o,A.a94,A.dD,A.Ks,A.Jb,A.a20,A.K_,A.lo,A.amk,A.amf,A.cY,A.U3,A.cU,A.Gs,A.NN,A.OL,A.ku,A.rf,A.afa,A.afb])
v(A.a9j,A.a9k)
v(A.ace,A.acf)
u(B.iG,[A.auS,A.aoo,A.aop,A.aos,A.aoq,A.ari,A.atJ,A.a5J,A.a5L,A.aaI,A.ar9,A.aje,A.afg,A.aqH])
u(B.a4,[A.pZ,A.nV,A.Cg])
u(B.aa,[A.Vl,A.HD,A.G8])
u(B.ft,[A.aot,A.aor,A.atK,A.atI,A.a5K,A.amp,A.amq,A.asC,A.aff,A.afe,A.afc,A.afd,A.aqI,A.aqJ,A.abx])
v(A.YA,A.HD)
v(A.alO,B.rr)
u(B.kX,[A.a21,A.amr,A.ams,A.acE,A.ajf,A.anx])
v(A.q1,A.cY)
v(A.ny,B.a0)
u(A.ny,[A.po,A.uE])
v(A.fe,B.aB)
v(A.XB,B.ts)
v(A.PH,B.js)
u(A.cU,[A.q9,A.lV,A.oO,A.pP,A.o3,A.qS,A.qR,A.qQ,A.qU,A.qT,A.qP,A.le,A.lz])
u(A.OL,[A.j8,A.kj,A.kk])
w(A.HD,B.fh)})()
B.mp(b.typeUniverse,JSON.parse('{"Iu":{"bU":[]},"dD":{"cs":["H"]},"pZ":{"a4":[],"i":[]},"Vl":{"aa":["pZ"]},"nV":{"a4":[],"i":[]},"YA":{"aa":["nV"]},"aRk":{"cY":["1"]},"cY":{"cY.T":"1"},"uE":{"ny":["1"],"a0":["1"],"y":["1"],"a3":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"fe":{"aB":["1","2"],"aT":["1","2"],"aB.V":"2","aB.K":"1"},"lo":{"bU":[]},"q1":{"cY":["fe<1,2>?"],"cY.T":"fe<1,2>?"},"po":{"ny":["1"],"a0":["1"],"y":["1"],"a3":["1"],"q":["1"],"q.E":"1","a0.E":"1"},"ny":{"a0":["1"],"y":["1"],"a3":["1"],"q":["1"]},"Cg":{"a4":[],"i":[]},"XB":{"ak":[]},"PH":{"js":[],"bA":["G"],"ak":[]},"G8":{"aa":["Cg"]},"q9":{"cU":[]},"lV":{"cU":[]},"oO":{"cU":[]},"pP":{"cU":[]},"o3":{"cU":[]},"qS":{"cU":[]},"qR":{"cU":[]},"qQ":{"cU":[]},"qU":{"cU":[]},"qT":{"cU":[]},"qP":{"cU":[]},"le":{"cU":[]},"lz":{"cU":[]}}'))
B.H_(b.typeUniverse,JSON.parse('{"Jb":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.V
return{G:w("aRk<@>"),q:w("cY<@>"),p:w("le"),K:w("ah<as>"),J:w("cU"),I:w("tX"),w:w("dD"),U:w("q<cU>"),R:w("q<@>"),M:w("t<cY<@>>"),X:w("t<dD>"),r:w("t<y<m>>"),s:w("t<n>"),A:w("t<ku>"),D:w("t<i>"),n:w("t<G>"),t:w("t<m>"),b:w("t<~()>"),F:w("t<~(eC)>"),d:w("y<cU>"),j:w("y<@>"),L:w("y<m>"),T:w("q1<@,@>"),f:w("aT<@,@>"),H:w("lz"),P:w("as"),V:w("b7<~()>"),W:w("b7<~(eC)>"),u:w("nu"),Z:w("qh"),Y:w("qP"),m:w("lV"),N:w("n"),l:w("Dv"),Q:w("dh"),B:w("ku"),k:w("rf"),y:w("A"),i:w("G"),z:w("@"),O:w("@()"),_:w("@(a2n,m)"),S:w("m"),o:w("tX?")}})();(function constants(){var w=a.makeConstList
D.An=new A.afb()
D.AJ=new A.amf()
D.EP=new A.dD(0,0,0)
D.EQ=new A.dD(4194303,4194303,1048575)
D.FX=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.FY=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.G_=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.j4=new A.j8(0,"SHAPE")
D.xh=new A.j8(1,"RECT")
D.xi=new A.j8(2,"ELLIPSE")
D.xj=new A.j8(3,"KEEP")
D.mh=B.b(w([D.j4,D.xh,D.xi,D.xj]),B.V("t<j8>"))
D.Gc=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Gs=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Gu=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Gt=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.GF=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.j3=new A.kk(0,"LineJoin_MITER")
D.xf=new A.kk(1,"LineJoin_ROUND")
D.xg=new A.kk(2,"LineJoin_BEVEL")
D.mx=B.b(w([D.j3,D.xf,D.xg]),B.V("t<kk>"))
D.j2=new A.kj(0,"LineCap_BUTT")
D.xd=new A.kj(1,"LineCap_ROUND")
D.xe=new A.kj(2,"LineCap_SQUARE")
D.mz=B.b(w([D.j2,D.xd,D.xe]),B.V("t<kj>"))
D.HF=new A.pZ(null)
D.av=new A.NN("com.opensource.svga")
D.W9=new A.NN("")
D.T7=new B.dc("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.Tf=new B.dc("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.UT=new A.alO(0,"Absolute")})();(function staticFields(){$.aWr=[]
$.aBX=B.k(B.V("lf?"),B.V("Gs<cU>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"b8J","aMI",()=>new A.auS())
v($,"b3U","aJb",()=>{var u=A.aW_()
u.he()
return u})
v($,"b2L","aIu",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hj("MovieParams",A.aHD(),D.av),r=x.i
s.fb(0,1,u,256,u,r)
s.fb(0,2,t,256,t,r)
r=x.S
s.dg(0,3,"fps",2048,r)
s.dg(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b3t","aIU",()=>{var u="imageKey",t="matteKey",s=A.hj("SpriteEntity",A.aHJ(),D.av)
s.t9(1,u,u)
s.zr(0,2,"frames",2097154,A.aHB(),x.p)
s.t9(3,t,t)
s.w=!1
return s})
v($,"b1e","aHR",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hj("AudioEntity",A.aHA(),D.av)
n.t9(1,t,t)
u=x.S
n.fb(0,2,s,r,s,u)
n.fb(0,3,q,r,q,u)
n.fb(0,4,p,r,p,u)
n.fb(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b2C","aIr",()=>{var u=A.hj("Layout",A.aHC(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.dg(0,3,"width",256,t)
u.dg(0,4,"height",256,t)
u.w=!1
return u})
v($,"b3I","aJ0",()=>{var u=A.hj("Transform",A.azq(),D.av),t=x.i
u.dg(0,1,"a",256,t)
u.dg(0,2,"b",256,t)
u.dg(0,3,"c",256,t)
u.dg(0,4,"d",256,t)
u.dg(0,5,"tx",256,t)
u.dg(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b3g","aIL",()=>{var u=A.hj("ShapeEntity.ShapeArgs",A.aHG(),D.av)
u.PM(1,"d")
u.w=!1
return u})
v($,"b3f","aIK",()=>{var u="cornerRadius",t=A.hj("ShapeEntity.RectArgs",A.aHF(),D.av),s=x.i
t.dg(0,1,"x",256,s)
t.dg(0,2,"y",256,s)
t.dg(0,3,"width",256,s)
t.dg(0,4,"height",256,s)
t.fb(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b3e","aIJ",()=>{var u=A.hj("ShapeEntity.EllipseArgs",A.aHE(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.fb(0,3,"radiusX",256,"radiusX",t)
u.fb(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b3j","aIO",()=>{var u=A.hj("ShapeEntity.ShapeStyle.RGBAColor",A.azp(),D.av),t=x.i
u.dg(0,1,"r",256,t)
u.dg(0,2,"g",256,t)
u.dg(0,3,"b",256,t)
u.dg(0,4,"a",256,t)
u.w=!1
return u})
v($,"b3k","aIP",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hj("ShapeEntity.ShapeStyle",A.aHH(),D.av),n=B.V("qU")
o.jy(1,"fill",A.azp(),n)
o.jy(2,"stroke",A.azp(),n)
n=x.i
o.fb(0,3,u,256,u,n)
o.Fy(0,4,"lineCap",512,D.j2,D.mz,"lineCap",A.b0P(),B.V("kj"))
o.Fy(0,5,t,512,D.j3,D.mx,t,A.b0Q(),B.V("kk"))
o.fb(0,6,s,256,s,n)
o.fb(0,7,r,256,r,n)
o.fb(0,8,q,256,q,n)
o.fb(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b3m","aIR",()=>{var u=A.hj("ShapeEntity",A.aHI(),D.av)
u.akd(0,B.b([2,3,4],x.t))
u.agR(0,1,"type",512,D.j4,D.mh,A.b0R(),B.V("j8"))
u.jy(2,"shape",A.aHG(),B.V("qS"))
u.jy(3,"rect",A.aHF(),B.V("qR"))
u.jy(4,"ellipse",A.aHE(),B.V("qQ"))
u.jy(10,"styles",A.aHH(),B.V("qT"))
u.jy(11,"transform",A.azq(),B.V("o3"))
u.w=!1
return u})
v($,"b2f","aIh",()=>{var u="clipPath",t=A.hj("FrameEntity",A.aHB(),D.av)
t.dg(0,1,"alpha",256,x.i)
t.jy(2,"layout",A.aHC(),B.V("pP"))
t.jy(3,"transform",A.azq(),B.V("o3"))
t.t9(4,u,u)
t.zr(0,5,"shapes",2097154,A.aHI(),x.Y)
t.w=!1
return t})
v($,"b2K","aIt",()=>{var u,t,s=null,r=A.hj("MovieEntity",A.b0O(),D.av)
r.PM(1,"version")
r.jy(2,"params",A.aHD(),B.V("q9"))
u=A.hj("MovieEntity.ImagesEntry",s,D.av)
t=x.z
u.PP(0,1,"key",64,s,s,s,s,t)
u.PP(0,2,"value",32,s,s,s,s,t)
r.B2(A.aSC("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.zr(0,4,"sprites",2097154,A.aHJ(),x.m)
r.zr(0,5,"audios",2097154,A.aHA(),B.V("oO"))
r.w=!1
return r})
v($,"b3l","aIQ",()=>A.axt(D.mh,B.V("j8")))
v($,"b3h","aIM",()=>A.axt(D.mz,B.V("kj")))
v($,"b3i","aIN",()=>A.axt(D.mx,B.V("kk")))})()}
$__dart_deferred_initializers__["EoBd6e2ochsG5XiuxkLc2teNepg="] = $__dart_deferred_initializers__.current
