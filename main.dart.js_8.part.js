((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_8",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aAL(d){return new A.JP(d,null,null)},
JP:function JP(d,e,f){this.a=d
this.b=e
this.c=f},
aHk(d,e,f,g){var w,v
if(x.Q.b(d))w=B.c7(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.eS(d,!0,x.S)
v=new A.acG(w,g,g,e)
v.e=f==null?w.length:f
return v},
acH:function acH(){},
acG:function acG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
afH:function afH(){},
afG:function afG(d){this.a=0
this.c=d},
Nn(d){var w=new A.abI()
w.a30(d)
return w},
abI:function abI(){this.a=$
this.b=0
this.c=2147483647},
acr:function acr(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
acK(d){var w,v,u,t,s,r
if(d<0){d=-d
w=!0}else w=!1
v=C.e.bU(d,17592186044416)
d-=v*17592186044416
u=C.e.bU(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.acL(0,0,0,t,s,r):new A.dN(t,s,r)},
aHl(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dN((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
aBF(d,e){return new A.dN(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
AR(d){if(d instanceof A.dN)return d
else if(B.jY(d))return A.acK(d)
throw B.d(B.e7(d,"other","not an int, Int32 or Int64"))},
aXl(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.H7[d]
t=""
s=""
r=""
while(!0){if(!!(w===0&&v===0))break
q=C.e.ef(w,u)
v+=w-q*u<<10>>>0
p=C.e.ef(v,u)
g+=v-p*u<<10>>>0
o=C.e.ef(g,u)
f+=g-o*u<<10>>>0
n=C.e.ef(f,u)
e+=f-n*u<<10>>>0
m=C.e.ef(e,u)
l=C.c.br(C.e.fP(u+(e-m*u),d),1)
r=s
s=t
t=l
v=p
w=q
g=o
f=n
e=m}k=(g<<20>>>0)+(f<<10>>>0)+e
return h+(k===0?"":C.e.fP(k,d))+t+s+r},
acL(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cH(w,22)&1)
return new A.dN(w&4194303,v&4194303,f-i-(C.e.cH(v,22)&1)&1048575)},
AS(d,e){var w=C.e.yi(d,e)
return w},
dN:function dN(d,e,f){this.a=d
this.b=e
this.c=f},
azX:function azX(){},
qo:function qo(d){this.a=d},
WW:function WW(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
asX:function asX(d,e){this.a=d
this.b=e},
asY:function asY(d,e){this.a=d
this.b=e},
at1:function at1(d){this.a=d},
at0:function at0(d){this.a=d},
at_:function at_(d){this.a=d},
asZ:function asZ(d){this.a=d},
om:function om(d,e,f){this.c=d
this.d=e
this.a=f},
a_j:function a_j(d,e,f){var _=this
_.d=$
_.e3$=d
_.bv$=e
_.a=null
_.b=f
_.c=null},
awg:function awg(d){this.a=d},
IW:function IW(){},
b4o(d,e,f){var w,v,u,t,s,r,q,p,o=$.ad().bJ()
for(w=d.SU(),w=w.ga3(w),v=e.a,u=f.a;w.t();){t=w.gG(w)
t.gq(t)
for(s=u,r=!0;s<t.gq(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.yQ(0,t.U7(s,s+p),C.h)
s+=p
r=!r}}return o},
aq7:function aq7(d,e){this.a=d
this.b=e},
Lp:function Lp(d){this.a=d},
Ky:function Ky(d){this.a=d
this.b=0},
hz(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a47((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
aDI(c0,c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null
B.im(c3,b9)
for(w=x.S,v=x.T,u=x.z,t=c0.c,s=c2.gapc(),r=c2.gapa(),q=c2.gaoZ(),p=c2.gaoX(),o=c2.gapi(),n=c2.gaph(),m=c2.gapf(),l=c2.gapd(),k=c2.gap5(),j=c2.gap3(),i=c2.gaoU(),h=c2.gap0(),g=c2.gaoS(),f=c2.a;!0;){e=c2.WQ()
if(e===0)return
d=e&7
a0=C.e.cH(e,3)
a1=t.i(0,a0)
if(a1==null)a1=b9
if(a1==null||!A.b3s(a1.f,d)){if(!c1.tc().VX(e,c2))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c1.ey(c0,a1,c2.fq(!0)!==0)
break
case 32:c1.ey(c0,a1,new Uint8Array(B.eH(c2.vW())))
break
case 64:a3=c2.vW()
c1.ey(c0,a1,C.ka.de(a3))
break
case 256:a3=c2.b+=4
if(a3>c2.c)B.I(A.ks())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.ey(c0,a1,a3.getFloat32(0,!0))
break
case 128:a3=c2.b+=8
if(a3>c2.c)B.I(A.ks())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c1.ey(c0,a1,a3.getFloat64(0,!0))
break
case 512:a6=c2.fq(!0)
a7=t.i(0,a0)
a8=a7==null?b9:a7.z
a3=(a8==null&&!0?b9.gaqx():a8).$1(a6)
if(a3==null){a9=c1.tc()
a3=A.acK(a6)
if(a9.b)A.ig("UnknownFieldSet","mergeVarintField")
C.b.D(a9.lI(a0).b,a3)}else c1.ey(c0,a1,a3)
break
case 1024:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC7():b0).$0()
b1=c1.xs(a1)
if(b1!=null)a3.l8(b1)
c2.WM(a0,a3,c3)
c1.ey(c0,a1,a3)
break
case 2048:c1.ey(c0,a1,c2.fq(!0))
break
case 4096:c1.ey(c0,a1,c2.ne())
break
case 8192:c1.ey(c0,a1,A.aG_(c2.fq(!1)))
break
case 16384:b2=c2.ne()
c1.ey(c0,a1,(b2.Y8(0,1).k(0,1)?A.acL(0,0,0,b2.a,b2.b,b2.c):b2).KG(0,1))
break
case 32768:c1.ey(c0,a1,c2.fq(!1))
break
case 65536:c1.ey(c0,a1,c2.ne())
break
case 131072:a3=c2.b+=4
if(a3>c2.c)B.I(A.ks())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.ey(c0,a1,a3.getUint32(0,!0))
break
case 262144:a3=c2.b+=8
if(a3>c2.c)B.I(A.ks())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c1.ey(c0,a1,A.aHl(b4))
break
case 524288:a3=c2.b+=4
if(a3>c2.c)B.I(A.ks())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.ey(c0,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c2.b+=8
if(a3>c2.c)B.I(A.ks())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c1.ey(c0,a1,A.aHl(b4))
break
case 2097152:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC7():b0).$0()
b1=c1.xs(a1)
if(b1!=null)a3.l8(b1)
c2.WO(a3,c3)
c1.ey(c0,a1,a3)
break
case 18:A.j5(c0,c1,c2,d,a1,g)
break
case 34:J.cW(c1.n6(c0,a1,u),new Uint8Array(B.eH(c2.vW())))
break
case 66:a3=c1.n6(c0,a1,u)
a4=c2.vW()
J.cW(a3,C.ka.de(a4))
break
case 258:A.j5(c0,c1,c2,d,a1,h)
break
case 130:A.j5(c0,c1,c2,d,a1,i)
break
case 514:A.b3e(c0,c1,c2,d,a1,a0,c3)
break
case 1026:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC7():b0).$0()
c2.WM(a0,a3,c3)
J.cW(c1.n6(c0,a1,u),a3)
break
case 2050:A.j5(c0,c1,c2,d,a1,j)
break
case 4098:A.j5(c0,c1,c2,d,a1,k)
break
case 8194:A.j5(c0,c1,c2,d,a1,l)
break
case 16386:A.j5(c0,c1,c2,d,a1,m)
break
case 32770:A.j5(c0,c1,c2,d,a1,n)
break
case 65538:A.j5(c0,c1,c2,d,a1,o)
break
case 131074:A.j5(c0,c1,c2,d,a1,p)
break
case 262146:A.j5(c0,c1,c2,d,a1,q)
break
case 524290:A.j5(c0,c1,c2,d,a1,r)
break
case 1048578:A.j5(c0,c1,c2,d,a1,s)
break
case 2097154:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC7():b0).$0()
c2.WO(a3,c3)
J.cW(c1.n6(c0,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c1.Nz(c0,a1,u,u)
b6=c2.fq(!0)
b7=c2.c
c2.c=c2.b+b6
a4=b5.b
a5=A.aJO(a4.length)
A.aDI(b5,new A.VA(b9,b9,a5,b5.f.a===0?b9:B.k(w,w)),c2,c3)
if(c2.d!==0)B.I(A.ND())
c2.c=b7
b8=a5[0]
if(b8==null)b8=a4[0].r.$0()
b2=a5[1]
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b8,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
j5(d,e,f,g,h,i){A.aLh(d,e,f,g,h,new A.ayN(i))},
b3e(d,e,f,g,h,i,j){A.aLh(d,e,f,g,h,new A.ayL(f,d,i,j,e))},
aLh(d,e,f,g,h,i){var w,v,u,t=e.n6(d,h,x.z)
if(g===2){w=f.fq(!0)
if(w<0)B.I(B.bh(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.I(A.ks())
f.c=v
new A.ayM(f,i,t).$0()
f.c=u}else i.$1(t)},
aG_(d){if((d&1)===1)return-C.e.cH(d,1)-1
else return C.e.cH(d,1)},
ND(){return new A.lO("Protocol message end-group tag did not match expected tag.")},
aHn(){return new A.lO("CodedBufferReader encountered a malformed varint.")},
aBG(){return new A.lO("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
ks(){return new A.lO("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
b2I(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eI(e))return"not type bool"
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
case 512:if(!(e instanceof A.Q2))return"not type ProtobufEnum"
return v
case 2048:case 8192:case 524288:if(!B.jY(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jY(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dN))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.d_))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
b1X(d){if(d==null)throw B.d(B.bh("Can't add a null to a repeated field",null))},
aWB(d,e,f,g,h,i,j,k,l,m,n){return new A.d3(d,e,f,g,A.aGU(g,i),l,m,null,n.h("d3<0>"))},
aWC(d,e,f,g,h,i,j,k,l,m,n){var w=new A.d3(d,e,f,g,new A.a8s(h,n),i,m,h,n.h("d3<0>"))
w.a2Z(d,e,f,g,h,i,j,k,l,m,n)
return w},
aGU(d,e){if(e==null)return A.aYt(d)
if(x.O.b(e))return e
return new A.a8u(e)},
aXN(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aGU(g,new A.ae5(h,i,j,n,o))
B.im(d,"name")
B.im(e,"tagNumber")
return new A.qq(h,i,j,d,e,f,g,w,null,null,null,n.h("@<0>").aa(o).h("qq<1,2>"))},
ig(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
b0z(d,e,f){var w,v=A.aJO(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.VA(d,f,v,w)},
aJO(d){if(d===0)return $.b0A
return B.aQ(d,null,!1,x.z)},
aJN(d,e,f){var w,v
if(x.j.b(f)&&J.f2(f))return d
if(x.f.b(f)&&J.f2(f))return d
d=A.mG(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.mG(d,A.aD2(f))
else if(v!==512)d=A.mG(d,J.z(f))
else d=(w&2)!==0?A.mG(d,A.aD2(J.aTK(f,new A.aqJ()))):A.mG(d,f.a)
return d},
aYt(d){switch(d){case 16:case 17:return A.b5C()
case 32:case 33:return A.b5D()
case 64:case 65:return A.b5G()
case 256:case 257:case 128:case 129:return A.b5E()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b5F()
default:return null}},
aYs(){return""},
aYp(){return B.b([],x.t)},
aYo(){return!1},
aYr(){return 0},
aYq(){return 0},
aX_(d,e){var w,v=$.aH1.i(0,d)
if(v!=null)return v
w=new A.HG(d,e.h("HG<0>"))
$.aH1.m(0,d,w)
return w},
aWZ(d,e){var w=e.a(d.gbz().Q.$0())
w.l8(d)
return w},
aIb(d,e){var w=B.b([],e.h("u<0>"))
B.im(d,"check")
return new A.vo(w,d,e.h("vo<0>"))},
aCg(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
b05(){return new A.kX(B.k(x.S,x.k))},
aDu(d,e){var w
if(d instanceof A.d_)return d.k(0,e)
if(e instanceof A.d_)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.xU(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.aDp(d,e)
return J.f(d,e)},
xU(d,e){var w,v=J.ao(d),u=J.ao(e)
if(v.gq(d)!==u.gq(e))return!1
for(w=0;w<v.gq(d);++w)if(!A.aDu(v.i(d,w),u.i(e,w)))return!1
return!0},
aDp(d,e){var w=J.ao(d)
if(w.gq(d)!==J.b_(e))return!1
return J.aTq(w.gbc(d),new A.axL(d,e))},
aLt(d,e){var w=B.eS(d,!0,e)
C.b.i2(w)
return w},
mG(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aJS(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
aD2(d){return A.aJS(J.aTr(d,0,new A.as3()))},
b3s(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a47:function a47(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a48:function a48(){},
ayN:function ayN(d){this.a=d},
ayL:function ayL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayM:function ayM(d,e,f){this.a=d
this.b=e
this.c=f},
KV:function KV(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lO:function lO(d){this.a=d},
aqE:function aqE(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
aqz:function aqz(){},
d3:function d3(d,e,f,g,h,i,j,k,l){var _=this
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
a8s:function a8s(d,e){this.a=d
this.b=e},
a8u:function a8u(d){this.a=d},
a8t:function a8t(){},
qq:function qq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ae5:function ae5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VA:function VA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
aqJ:function aqJ(){},
aqL:function aqL(d,e){this.a=d
this.b=e},
aqM:function aqM(d){this.a=d},
aqK:function aqK(d,e){this.a=d
this.b=e},
d_:function d_(){},
HG:function HG(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
aw_:function aw_(d){this.a=d},
P4:function P4(d){this.a=d},
pN:function pN(d,e,f){this.a=d
this.b=e
this.$ti=f},
vo:function vo(d,e,f){this.a=d
this.b=e
this.$ti=f},
o1:function o1(){},
fr:function fr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
ag5:function ag5(d){this.a=d},
Q2:function Q2(){},
kX:function kX(d){this.a=d
this.b=!1},
anh:function anh(){},
ani:function ani(d){this.a=d},
rH:function rH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
axL:function axL(d,e){this.a=d
this.b=e},
as3:function as3(){},
aiE:function aiE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aiF:function aiF(){},
aiK:function aiK(d){this.a=d},
aiJ:function aiJ(){},
aiI:function aiI(d){this.a=d},
aiG:function aiG(d,e,f){this.a=d
this.b=e
this.c=f},
aiH:function aiH(d){this.a=d},
Zl:function Zl(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
avy:function avy(){},
avz:function avz(d,e,f){this.a=d
this.b=e
this.c=f},
Dc:function Dc(d,e){this.c=d
this.a=e},
R2:function R2(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.cB$=l
_.cb$=m},
Hj:function Hj(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
avx:function avx(d){this.a=d},
aY2(){var w=new A.qz()
w.hq()
return w},
b_e(){var w=new A.mq()
w.hq()
return w},
aUl(){var w=new A.pd()
w.hq()
return w},
aXx(){var w=new A.qe()
w.hq()
return w},
b_Y(){var w=new A.ov()
w.hq()
return w},
aZZ(){var w=new A.rk()
w.hq()
return w},
aZY(){var w=new A.rj()
w.hq()
return w},
aZX(){var w=new A.ri()
w.hq()
return w},
b_1(){var w=new A.rm()
w.hq()
return w},
b_2(){var w=new A.rl()
w.hq()
return w},
b_4(){var w=new A.rh()
w.hq()
return w},
aWT(){var w=new A.lF()
w.hq()
return w},
aHP(){var w=x.N,v=x.I
w=new A.lY(new A.aiE(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.W))
w.hq()
return w},
qz:function qz(){this.a=null},
mq:function mq(){this.a=null},
pd:function pd(){this.a=null},
qe:function qe(){this.a=null},
ov:function ov(){this.a=null},
rk:function rk(){this.a=null},
rj:function rj(){this.a=null},
ri:function ri(){this.a=null},
rm:function rm(){this.a=null},
rl:function rl(){this.a=null},
rh:function rh(){this.a=null},
lF:function lF(){this.a=this.b=null},
lY:function lY(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
aeZ:function aeZ(){},
b_3(d){return $.aO5().i(0,d)},
b__(d){return $.aO1().i(0,d)},
b_0(d){return $.aO2().i(0,d)},
jC:function jC(d,e){this.a=d
this.b=e},
kK:function kK(d,e){this.a=d
this.b=e},
kL:function kL(d,e){this.a=d
this.b=e},
a28(d){var w=0,v=B.T(x.I),u,t
var $async$a28=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:$.hh.toString
w=4
return B.M($.ad().jh(d,!1,null,null),$async$a28)
case 4:w=3
return B.M(f.hZ(),$async$a28)
case 3:t=f
u=t.gfH(t)
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$a28,v)}},B,C,J,D
A=a.updateHolder(c[5],A)
B=c[0]
C=c[2]
J=c[1]
D=c[12]
A.JP.prototype={}
A.acH.prototype={}
A.acG.prototype={
gq(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gamX(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
i(d,e){return this.a[this.b+e]},
WL(){return this.a[this.b++]},
B_(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.afH.prototype={}
A.afG.prototype={
JP(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.DG(v-t)
C.I.cl(u,w,v,d)
s.a+=r},
aqI(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.DG(v-t)}C.I.b4(u,w,w+d.gq(d),d.a,d.b)
s.a=s.a+d.gq(d)},
KU(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.c7(w.c.buffer,d,e-d)},
KT(d){return this.KU(d,null)},
DG(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.I.cl(t,0,u,v)
this.c=t},
a6D(){return this.DG(null)},
gq(d){return this.a}}
A.abI.prototype={
a30(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.lx(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.acr.prototype={
aaC(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.adb())break}},
adb(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gamX())return!1
w=v.ic(3)
switch(C.e.cH(w,1)){case 0:if(v.adl()===-1)return!1
break
case 1:if(v.N9(v.r,v.w)===-1)return!1
break
case 2:if(v.adf()===-1)return!1
break
default:return!1}return(w&1)===0},
ic(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&B.c()
u=w.b
t=w.e
t===$&&B.c()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|C.e.lx(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.tJ(1,d)
s.d=C.e.tL(w,d)
s.e=v-d
return(w&u-1)>>>0},
EZ(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.c()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&B.c()
t=v.b
s=v.e
s===$&&B.c()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|C.e.lx(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.lx(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.tL(v,q)
p.e=u-q
return r&65535},
adl(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.ic(16)
v=p.ic(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&B.c()
if(w>v.gq(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&B.c()
r=s-(t-u)}else r=w
q=A.aHk(v.a,v.d,r,t)
v.b=v.b+q.gq(q)
p.c.aqI(q)
return 0},
adf(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.ic(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.ic(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.ic(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.ic(3)
if(s===-1)return-1
u[D.Hj[t]]=s}r=A.Nn(u)
q=l+w
p=new Uint8Array(q)
o=B.c7(p.buffer,0,l)
n=B.c7(p.buffer,l,w)
if(m.a5L(q,r,p)===-1)return-1
return m.N9(A.Nn(o),A.Nn(n))},
N9(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.EZ(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a6D()
w.c[w.a++]=v&255
continue}u=v-257
t=D.Hv[u]+p.ic(D.GT[u])
s=p.EZ(e)
if(s<0||s>29)return-1
r=D.GX[s]+p.ic(D.Hl[s])
for(q=-r;t>r;){w.JP(w.KT(q))
t-=r}if(t===r)w.JP(w.KT(q))
else w.JP(w.KU(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a5L(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.EZ(e)
if(u===-1)return-1
switch(u){case 16:t=q.ic(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.ic(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.ic(7)
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
A.dN.prototype={
U(d,e){var w=A.AR(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dN(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
ac(d,e){var w=A.AR(e)
return A.acL(this.a,this.b,this.c,w.a,w.b,w.c)},
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.AR(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
return new A.dN(k&4194303,j&4194303,(n>>>18)+(m>>>5)+((l&4095)<<8)+(j>>>22)&1048575)},
Y8(d,e){var w=A.AR(e)
return new A.dN(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
KG(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.FS:D.FR
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.AS(w,e)
if(v)u|=~C.e.tL(o,e)&1048575
t=p.b
s=22-e
r=A.AS(t,e)|C.e.lx(w,s)
q=A.AS(p.a,e)|C.e.lx(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.AS(w,t)
if(v)r|=~C.e.yi(n,t)&4194303
q=A.AS(p.b,t)|C.e.lx(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.AS(w,t)
if(v)q|=~C.e.yi(n,t)&4194303}return new A.dN(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dN)w=e
else if(B.jY(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.acK(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
aR(d,e){return this.a59(e)},
a59(d){var w=A.AR(d),v=this.c,u=v>>>19,t=w.c
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
gC(d){var w=this.b
return(((w&1023)<<22|this.a)^(this.c<<12|w>>>10&4095))>>>0},
j(d){var w,v,u,t=this.a,s=this.b,r=this.c
if((r&524288)!==0){t=0-t
w=t&4194303
s=0-s-(C.e.cH(t,22)&1)
v=s&4194303
r=0-r-(C.e.cH(s,22)&1)&1048575
s=v
t=w
u="-"}else u=""
return A.aXl(10,t,s,r,u)},
$ibO:1}
A.qo.prototype={
ae(){return new A.WW(C.i)}}
A.WW.prototype={
H(d){var w=null,v=x.D
return B.kN(C.cr,B.b([new B.dV(C.q,w,w,B.aHe("md/live.jpg",w,w,w,w),w),new B.dV(C.cs,w,w,B.fv(B.fH(B.b([C.c4,B.np(D.Uk,new A.asX(this,d),w),C.c4,B.np(D.U8,new A.asY(this,d),w)],v),C.Z,C.fo,C.W),w,300),w)],v),C.P,C.bE,w)},
Za(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.m2(new A.at1(v),!1)
u=B.aBU(d,x.u)
u.toString
w=v.d
w.toString
u.vd(0,w)},
Z7(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.m2(new A.at_(v),!1)
u=B.aBU(d,x.u)
u.toString
w=v.d
w.toString
u.vd(0,w)}}
A.om.prototype={
ae(){return new A.a_j(null,null,C.i)},
akT(){return this.c.$0()}}
A.a_j.prototype={
au(){var w,v=this,u=null
v.aH()
w=new A.R2(0,1,u,C.ez,C.o,u,C.a9,C.C,new B.aX(B.b([],x.F),x.V),new B.aX(B.b([],x.b),x.R))
w.LV(C.ez,u,C.o,0,u,1,u,v)
v.d=w
v.An()},
n(){this.a2N()
var w=this.d
w===$&&B.c()
w.sJM(null)
w.CW=!0
w.ZV()},
H(d){var w=this.d
w===$&&B.c()
return new A.Dc(w,null)},
An(){var w=0,v=B.T(x.z),u=this,t,s
var $async$An=B.P(function(d,e){if(d===1)return B.Q(e,v)
while(true)switch(w){case 0:w=2
return B.M(D.AY.zp(u.a.d),$async$An)
case 2:t=e
s=u.d
s===$&&B.c()
s.sJM(t)
u.d.ZW(0,null).a.a.fR(new A.awg(u))
return B.R(null,v)}})
return B.S($async$An,v)}}
A.IW.prototype={
n(){var w=this,v=w.bv$
if(v!=null)v.K(0,w.gfZ())
w.bv$=null
w.aG()},
by(){this.cM()
this.co()
this.h_()}}
A.aq7.prototype={
J(){return"_DashOffsetType."+this.b}}
A.Lp.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Lp&&e.a===this.a&&!0},
gC(d){return B.V(this.a,D.VV,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Ky.prototype={}
A.a47.prototype={
tZ(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.CH(e===0?new A.d3("<removed field>",0,v,0,w,w,w,w,x.q):A.aWB(f,e,v,g,w,h,k,l,i,j,m))},
S4(d,e,f,g,h,i,j,k,l){return this.tZ(d,e,f,g,h,i,j,k,null,l)},
CH(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fu(d,e,f,g,h,i){var w=null
this.tZ(0,e,f,g,w,w,w,w,h,i)},
dz(d,e,f,g,h){return this.fu(d,e,f,g,null,h)},
tY(d,e,f){var w=null
this.tZ(0,d,e,64,w,w,w,w,f,x.N)},
S1(d,e){return this.tY(d,e,null)},
Hh(d,e,f,g,h,i,j,k,l){this.tZ(0,e,f,g,h,null,k,i,j,l)},
akp(d,e,f,g,h,i,j,k){return this.Hh(d,e,f,g,h,i,null,j,k)},
AP(d,e,f,g,h,i){var w=null
this.CH(A.aWC(f,e,this.b.length,g,A.aEf(),h,w,w,w,w,i))},
jH(d,e,f,g){this.tZ(0,d,e,2097152,A.aX_(f,g).ga74(),f,null,null,null,g)},
aog(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gwO(){var w=this.x
return w==null?this.x=this.a5j():w},
a5j(){var w=this.c
w=B.eS(w.gaz(w),!1,x.q)
C.b.cn(w,new A.a48())
return w},
a5M(d,e,f){var w=this.c.i(0,d),v=w==null?null:w.z
return(v==null&&!0?null.gaqx():v).$1(f)}}
A.KV.prototype={
D1(d){var w=this.b+=d
if(w>this.c)throw B.d(A.ks())},
WM(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.aBG())
w.e=v+1
e.VY(w,f)
if(w.d!==(d<<3|4)>>>0)B.I(A.ND());--w.e},
WO(d,e){var w,v,u=this,t=u.fq(!0),s=u.e
if(s>=64)throw B.d(A.aBG())
if(t<0)throw B.d(B.bh(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.ks())
u.e=s+1
d.VY(u,e)
if(u.d!==0)B.I(A.ND());--u.e
u.c=w},
ap4(){return this.fq(!0)},
ap6(){return this.ne()},
B_(){return this.fq(!1)},
apj(){return this.ne()},
ape(){return A.aG_(this.fq(!1))},
apg(){var w=this.ne(),v=A.AR(1),u=w.a,t=w.b,s=w.c
return(new A.dN(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.acL(0,0,0,u,t,s):w).KG(0,1)},
aoY(){return this.pl(4).getUint32(0,!0)},
ap_(){return this.Jh()},
apb(){return this.pl(4).getInt32(0,!0)},
Jh(){var w=this.pl(8),v=B.c7(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dN((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
aoT(){return this.fq(!0)!==0},
vW(){var w,v=this,u=v.fq(!0)
v.D1(u)
w=v.a
return B.c7(w.buffer,w.byteOffset+v.b-u,u)},
ap1(){return this.pl(4).getFloat32(0,!0)},
aoV(){return this.pl(8).getFloat64(0,!0)},
WQ(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.fq(!1)
if(C.e.cH(w,3)===0)throw B.d(new A.lO("Protocol message contained an invalid tag (zero)."))
return w},
adY(){this.D1(1)
return this.a[this.b-1]},
fq(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.tJ(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aHn())},
ne(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.I(A.ks())
s=w[t-1]
v=(v|C.e.tJ(s&127,u*7))>>>0
if((s&128)===0)return A.aBF(0,v)}s=q.adY()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.aBF(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.I(A.ks())
s=w[t-1]
r=(r|C.e.tJ(s&127,u*7+3))>>>0
if((s&128)===0)return A.aBF(r,v)}throw B.d(A.aHn())},
pl(d){var w
this.D1(d)
w=this.a
return B.nW(w.buffer,w.byteOffset+this.b-d,d)}}
A.lO.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibJ:1}
A.aqE.prototype={
agX(d){var w
d.gar7()
w=this.a
w.a.gbz()
w=B.bh("Extension "+B.j(d)+" not legal for message "+w.gabF(),null)
throw B.d(w)},
afj(d,e){var w,v=this.a.e
if(v!=null){w=d.glj()
if(v.b)A.ig("UnknownFieldSet","clearField")
v.a.A(0,w)}this.c.m(0,d.glj(),e)},
hv(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaz(w),w=new B.cJ(J.af(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gan7()){q=u.i(0,r.glj())
if(q==null)continue
if(r.gamZ())for(p=J.af(s.a(q));p.t();)p.gG(p).a.hv()
u.m(0,r.glj(),q.w6())}else if(r.gamZ()){o=u.i(0,r.glj())
if(o!=null)t.a(o).a.hv()}}}}
A.aqz.prototype={}
A.d3.prototype={
a2Z(d,e,f,g,h,i,j,k,l,m,n){B.im(this.b,"name")
B.im(this.d,"tagNumber")},
gWR(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pN(B.b([],w.h("u<d3.T>")),A.aEf(),w.h("pN<d3.T>"))}return w}return v.r.$0()},
Ot(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.tk()
w=J.ao(d)
if(w.ga2(d))return!0
if(!w.i(d,0).a.a.gbz().w)return!0
return w.jb(d,new A.a8t())},
j(d){return this.b}}
A.qq.prototype={}
A.VA.prototype={
gabF(){return this.a.gbz().a},
DC(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.aqE(this,B.k(w,x.G),B.k(w,x.z))}return w},
tc(){var w=this.e
if(w==null){w=this.f
if(!B.eI(w)||w)return $.aOq()
w=this.e=new A.kX(B.k(x.S,x.k))}return w},
hv(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f
if(!B.eI(k)||k)return
l.f=!0
for(k=l.a.gbz().gwO(),w=k.length,v=l.c,u=x.J,t=x.d,s=0;s<w;++s){r=k[s]
q=r.f
if((q&2)!==0){p=r.e
o=v[p]
if(o==null)continue
if((q&2098176)!==0)for(q=J.af(t.a(o));q.t();)q.gG(q).a.hv()
v[p]=o.w6()}else if((q&4194304)!==0){q=r.e
n=v[q]
if(n==null)continue
v[q]=n.al6()}else if((q&2098176)!==0){m=v[r.e]
if(m!=null)u.a(m).a.hv()}}if(l.d!=null)l.DC().hv()
if(l.e!=null)l.tc().hv()},
a7e(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eI(w)||w)return d.gWR()
w=this.a
v=w.GK(d.d,d,B.p(d).h("d3.T"))
this.nj(w.gbz(),d,v)
return v},
a7f(d,e){var w,v=this.f
if(!B.eI(v)||v)return d.gWR()
v=this.a
v.toString
w=v.GK(d.d,e.h("d3<0>").a(d),e)
this.nj(v.gbz(),d,w)
return w},
a7g(d,e,f){var w,v,u=this.f
if(!B.eI(u)||u)return new A.fr(d.as,d.at,B.a5r(B.k(e,f),e,f),!1,e.h("@<0>").aa(f).h("fr<1,2>"))
u=this.a
w=d.$ti
v=u.Ti(d.d,d,w.c,w.z[1])
this.nj(u.gbz(),d,v)
return v},
xs(d){var w=this.c[d.e]
return w},
a51(d){var w,v,u,t,s,r=this,q=r.f
if(!B.eI(q)||q)A.aA6().$1(r.a.gbz().a)
w=r.a.gbz()
v=w.c.i(0,d)
if(v!=null){r.c[v.e]=null
q=w.f
u=v.d
if(q.ab(0,u)){t=r.r
t.toString
t.A(0,q.i(0,u))}s=q.i(0,u)
if(s!=null)r.r.m(0,s,0)
return}q=r.d
if(q!=null)q.b.i(0,d)},
ey(d,e,f){B.im(e,"fi")
this.nj(d,e,f)},
n6(d,e,f){var w,v=this.xs(e)
if(v!=null)return f.h("w<0>").a(v)
w=this.a.GK(e.d,e,B.p(e).h("d3.T"))
this.nj(d,e,w)
return w},
Nz(d,e,f,g){var w,v,u=this.xs(e)
if(u!=null)return f.h("@<0>").aa(g).h("fr<1,2>").a(u)
w=e.$ti
v=this.a.Ti(e.d,e,w.c,w.z[1])
this.nj(d,e,v)
return f.h("@<0>").aa(g).h("fr<1,2>").a(v)},
nj(d,e,f){var w,v=e.d,u=d.f.i(0,v)
if(u!=null){w=this.r
this.a51(w.i(0,u))
w.m(0,u,v)}this.c[e.e]=f},
aj(d){var w=this.c[d]
if(w!=null)return w
return this.a7e(this.a.gbz().b[d])},
oW(d,e){var w=this.c[d]
if(w!=null)return e.h("w<0>").a(w)
return this.a7f(e.h("d3<0>").a(this.a.gbz().b[d]),e)},
a3i(d,e,f,g){var w=this.c[e]
if(w!=null)return f.h("@<0>").aa(g).h("aH<1,2>").a(w)
return this.a7g(f.h("@<0>").aa(g).h("qq<1,2>").a(this.a.gbz().b[e]),f,g)},
x_(d){var w=this.c[d]
if(w==null)return 0
return w},
CE(d){var w=this.c[d]
if(w==null)return""
return w},
rR(d){var w=this.c[d]
if(w==null)return!1
if(x.j.b(w))return J.k1(w)
return!0},
a6u(d){var w,v,u,t=this
if(t.a.gbz()!==d.a.gbz())return!1
for(w=t.c,v=d.c,u=0;u<w.length;++u)if(!t.a6t(w[u],v[u]))return!1
w=t.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.aDp(w.c,v.c)))return!1}w=t.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a6t(d,e){var w,v=d==null
if(!v&&e!=null)return A.aDu(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.f2(w))return!0
if(x.f.b(w)&&J.f2(w))return!0
return!1},
gaas(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jY(n)?n:null)!=null
if(n){n=o.f
n=B.jY(n)?n:null
n.toString
return n}n=o.a
w=A.mG(0,B.fQ(n.gbz()))
v=o.c
for(n=n.gbz().gwO(),u=n.length,t=0;t<u;++t){s=n[t]
r=v[s.e]
if(r==null)continue
w=A.aJN(w,s,r)}n=o.d
if(n!=null){u=n.c
q=A.aLt(new B.bg(u,B.p(u).h("bg<1>")),x.S)
for(p=q.length,n=n.b,t=0;t<q.length;q.length===p||(0,B.J)(q),++t){s=n.i(0,q[t])
w=A.aJN(w,s,u.i(0,s.glj()))}}n=o.e
n=n==null?null:n.gC(n)
w=A.mG(w,n==null?0:n)
n=o.f
if((!B.eI(n)||n)&&!0)o.f=w
return w},
Y4(d,e){var w,v,u,t,s,r,q,p=this,o=new A.aqM(new A.aqL(d,e))
for(w=p.a.gbz().gwO(),v=w.length,u=p.c,t=0;t<v;++t){s=w[t]
r=u[s.e]
q=s.b
o.$2(r,q===""?C.e.j(s.d):q)}w=p.d
if(w!=null){w=w.b
v=B.p(w).h("bg<1>")
v=B.al(new B.bg(w,v),!0,v.h("q.E"))
C.b.i2(v)
C.b.O(v,new A.aqK(p,o))}w=p.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kX(B.k(x.S,x.k)).EW("")},
abE(d){var w,v,u,t,s,r,q
for(w=d.a.gbz().gwO(),v=w.length,u=d.c,t=0;t<v;++t){s=w[t]
r=u[s.e]
if(r!=null)this.P2(s,r,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fO(v,v.r),w=w.b;u.t();){q=w.i(0,u.d)
this.P2(q,v.i(0,q.glj()),!0)}if(d.e!=null){w=this.tc()
v=d.e
v.toString
w.anW(v)}},
P2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.a.gbz(),j=k.c.i(0,d.d)
if(j==null&&f)j=d
w=(d.f&2098176)!==0
v=j.f
if((v&4194304)!==0){x.T.a(j)
v=j.$ti
u=l.Nz(k,j,v.c,v.z[1])
if((j.at&2098176)!==0)for(v=J.af(J.a2D(e)),t=u.c,s=x.J;v.t();){r=v.gG(v)
q=r.a
r=s.a(r.b)
p=s.a(r.gbz().Q.$0())
p.l8(r)
if(u.d)B.I(B.U(y.a))
if(q==null)B.I(B.bh("Can't add a null to a map field",null))
t.m(0,q,p)}else u.I(u,e)
return}if((v&2)!==0){v=B.p(j).h("d3.T")
if(w){o=l.n6(k,j,v)
for(v=e.a,t=x.J,s=J.bG(o),n=0;n<v.length;++n){r=v[n]
q=t.a(r.gbz().Q.$0())
q.l8(r)
s.D(o,q)}}else J.p8(l.n6(k,j,v),e)
return}if(w){m=f?l.DC().c.i(0,x.G.a(j).glj()):l.c[j.e]
if(m==null){v=x.J
e=A.aWZ(v.a(e),v)}else{m.l8(e)
e=m}}if(f){v=l.DC()
x.G.a(j)
if(v.d)A.aA6().$1(v.a.a.gbz().a)
if(j.gan7())B.I(B.bh(v.a.Qm(j,e,"repeating field (use get + .add())"),null))
if(v.d)A.aA6().$1(v.a.a.gbz().a)
v.agX(j)
v.a.RQ(j,e)
v.b.m(0,j.glj(),j)
v.afj(j,e)}else{l.RQ(j,e)
l.nj(k,j,e)}},
RQ(d,e){var w,v=this.f
if(!B.eI(v)||v)A.aA6().$1(this.a.gbz().a)
w=A.b2I(d.f,e)
if(w!=null)throw B.d(B.bh(this.Qm(d,e,w),null))},
Qm(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbz().a+" to value ("+B.j(e)+"): "+f},
tk(){var w,v,u,t=this.a
if(!t.gbz().w)return!0
for(t=t.gbz().c,t=t.gaz(t),t=new B.cJ(J.af(t.a),t.b),w=this.c,v=B.p(t).z[1];t.t();){u=t.a
if(u==null)u=v.a(u)
if(!u.Ot(w[u.e]))return!1}return this.aaq()},
aaq(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaz(u),u=new B.cJ(J.af(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Ot(this.d.c.i(0,v.glj())))return!1}return!0}}
A.d_.prototype={
hq(){this.a=A.b0z(this,this.gbz(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.d_){w=this.a
w.toString
v=e.a
v.toString
v=w.a6u(v)
w=v}else w=!1
return w},
gC(d){return this.a.gaas()},
j(d){var w,v=new B.bW("")
this.a.Y4(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
VY(d,e){var w=this.a.a.gbz(),v=this.a
v.toString
A.aDI(w,v,d,e)},
GK(d,e,f){var w=e.Q
w.toString
return A.aIb(w,f)},
Ti(d,e,f,g){return new A.fr(e.as,e.at,B.k(f,g),!1,f.h("@<0>").aa(g).h("fr<1,2>"))},
l8(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.abE(w)},
Y7(d,e,f){return this.a.a3i(this,d,e,f)}}
A.HG.prototype={
ga74(){var w=this.c
if(w===$){w!==$&&B.aC()
w=this.c=new A.aw_(this)}return w}}
A.P4.prototype={}
A.pN.prototype={
hz(d){return new B.EJ("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.I(this.hz("set"))},
sq(d,e){B.I(this.hz("set length"))},
dZ(d,e,f){return B.I(this.hz("setAll"))},
D(d,e){return B.I(this.hz("add"))},
I(d,e){return B.I(this.hz("addAll"))},
dJ(d,e,f){return B.I(this.hz("insert"))},
dU(d,e,f){return B.I(this.hz("insertAll"))},
A(d,e){return B.I(this.hz("remove"))},
cn(d,e){return B.I(this.hz("sort"))},
bN(d,e){return B.I(this.hz("removeAt"))},
d2(d){return B.I(this.hz("removeLast"))},
b4(d,e,f,g,h){return B.I(this.hz("setRange"))},
cl(d,e,f,g){return this.b4(d,e,f,g,0)},
dW(d,e,f){return B.I(this.hz("removeRange"))}}
A.vo.prototype={
w6(){return new A.pN(this.a,A.aEf(),this.$ti.h("pN<1>"))},
D(d,e){this.b.$1(e)
this.a.push(e)},
I(d,e){J.el(e,this.b)
C.b.I(this.a,e)},
cn(d,e){return C.b.cn(this.a,e)},
dJ(d,e,f){this.b.$1(f)
C.b.dJ(this.a,e,f)},
dU(d,e,f){J.el(f,this.b)
C.b.dU(this.a,e,f)},
dZ(d,e,f){J.el(f,this.b)
C.b.dZ(this.a,e,f)},
A(d,e){return C.b.A(this.a,e)},
bN(d,e){return C.b.bN(this.a,e)},
d2(d){return this.a.pop()},
b4(d,e,f,g,h){J.Jy(g,h).kh(0,f-e).O(0,this.b)
C.b.b4(this.a,e,f,g,h)},
cl(d,e,f,g){return this.b4(d,e,f,g,0)},
dW(d,e,f){return C.b.dW(this.a,e,f)}}
A.o1.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.o1&&A.xU(e,this)},
gC(d){return A.aD2(this.a)},
ga3(d){var w=this.a
return new J.hy(w,w.length)},
dn(d,e,f){var w=this.a
return new B.a6(w,e,B.a7(w).h("@<1>").aa(f).h("a6<1,2>"))},
eJ(d,e){return this.dn(d,e,x.z)},
p(d,e){return C.b.p(this.a,e)},
O(d,e){C.b.O(this.a,e)},
hN(d,e,f){return C.b.iC(this.a,e,f)},
iC(d,e,f){return this.hN(d,e,f,x.z)},
jb(d,e){return C.b.jb(this.a,e)},
bf(d,e){return C.b.bf(this.a,e)},
o8(d){return this.bf(d,"")},
ei(d,e){return C.b.ei(this.a,e)},
dY(d,e){var w=this.a,v=B.a7(w)
return e?B.b(w.slice(0),v):J.q9(w.slice(0),v.c)},
dX(d){return this.dY(d,!0)},
hX(d){var w=this.a
return B.ku(w,B.a7(w).c)},
ga2(d){return this.a.length===0},
gbC(d){return this.a.length!==0},
kh(d,e){var w=this.a
return B.dR(w,0,B.dv(e,"count",x.S),B.a7(w).c)},
i0(d,e){var w=this.a
return B.dR(w,e,null,B.a7(w).c)},
gL(d){return C.b.gL(this.a)},
gS(d){return C.b.gS(this.a)},
b_(d,e){return this.a[e]},
j(d){return B.q8(this.a,"[","]")},
i(d,e){return this.a[e]},
gq(d){return this.a.length},
bx(d,e,f){return C.b.bx(this.a,e,f)},
ed(d,e){return this.bx(d,e,null)},
rq(d,e,f){var w=this.a
B.d5(e,f,w.length,null,null)
return B.dR(w,e,f,B.a7(w).c)},
m(d,e,f){this.b.$1(f)
this.a[e]=f},
sq(d,e){var w=this.a
if(e>w.length)throw B.d(B.U("Extending protobuf lists is not supported"))
C.b.sq(w,e)}}
A.fr.prototype={
i(d,e){return this.c.i(0,e)},
m(d,e,f){var w="Can't add a null to a map field"
if(this.d)throw B.d(B.U(y.a))
if(e==null)B.I(B.bh(w,null))
if(f==null)B.I(B.bh(w,null))
this.c.m(0,e,f)},
k(d,e){var w,v,u,t,s=this
if(e==null)return!1
if(e===s)return!0
if(!(e instanceof A.fr))return!1
if(J.b_(e.gbc(e))!==J.b_(s.gbc(s)))return!1
for(w=s.c,v=J.af(w.gbc(w)),u=e.c;v.t();){t=v.gG(v)
if(!J.f(u.i(0,t),w.i(0,t)))return!1}return!0},
gC(d){var w=this.c
w=w.gdh(w)
return w.iC(w,0,new A.ag5(this))},
gbc(d){var w=this.c
return w.gbc(w)},
A(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.A(0,e)},
al6(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rY(t,w.h("@<ay.K>").aa(w.h("ay.V")).h("rY<1,2>"))),w=new B.Gi(J.af(t.gbc(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.hv()}return t}}
A.Q2.prototype={
gC(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kX.prototype={
VX(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.ig(s,"mergeFieldFromBuffer")
w=C.e.cH(d,3)
switch(d&7){case 0:v=e.ne()
if(t.b)A.ig(s,"mergeVarintField")
C.b.D(t.lI(w).b,v)
return!0
case 1:v=e.Jh()
if(t.b)A.ig(s,"mergeFixed64Field")
C.b.D(t.lI(w).d,v)
return!0
case 2:v=e.vW()
if(t.b)A.ig(s,"mergeLengthDelimitedField")
C.b.D(t.lI(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.I(A.aBG())
e.e=v+1
u=new A.kX(B.k(x.S,x.k))
u.anV(e)
if(e.d!==(w<<3|4)>>>0)B.I(A.ND());--e.e
if(t.b)A.ig(s,"mergeGroupField")
C.b.D(t.lI(w).e,u)
return!0
case 4:return!1
case 5:v=e.pl(4).getUint32(0,!0)
if(t.b)A.ig(s,"mergeFixed32Field")
C.b.D(t.lI(w).c,v)
return!0
default:throw B.d(new A.lO("Protocol message tag had invalid wire type."))}},
anV(d){var w
if(this.b)A.ig("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.WQ()
if(w===0||!this.VX(w,d))break}},
anW(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.ig(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fO(w,w.r);v.t();){u=v.d
t=w.i(0,u)
t.toString
if(this.b)A.ig(s,"mergeField")
u=this.lI(u)
C.b.I(u.b,t.b)
C.b.I(u.c,t.c)
C.b.I(u.d,t.d)
C.b.I(u.a,t.a)
C.b.I(u.e,t.e)}},
lI(d){if(d===0)B.I(B.bh("Zero is not a valid field number.",null))
return this.a.bq(0,d,new A.anh())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kX))return!1
return A.aDp(e.a,this.a)},
gC(d){var w={}
w.a=0
this.a.O(0,new A.ani(w))
return w.a},
j(d){return this.EW("")},
EW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.bW("")
for(w=this.a,v=A.aLt(new B.bg(w,B.p(w).h("bg<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
p=w.i(0,q)
p.toString
for(p=p.gaz(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(m instanceof A.kX){l=k.a+=d+B.j(q)+": {\n"
l+=m.EW(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
hv(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaz(w),w=new B.cJ(J.af(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).hv()}this.b=!0}}
A.rH.prototype={
hv(){var w,v=this
if(v.f)return
v.f=!0
v.a=B.hT(v.a,x.L)
w=x.w
v.b=B.hT(v.b,w)
v.c=B.hT(v.c,x.S)
v.d=B.hT(v.d,w)
v.e=B.hT(v.e,x.B)},
k(d,e){var w,v,u=this
if(e==null)return!1
if(!(e instanceof A.rH))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.xU(e.a[w],v[w]))return!1
if(!A.xU(e.b,u.b))return!1
if(!A.xU(e.c,u.c))return!1
if(!A.xU(e.d,u.d))return!1
if(!A.xU(e.e,u.e))return!1
return!0},
gC(d){var w,v,u,t,s,r,q,p=this
for(w=p.a,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
for(r=J.ao(s),q=0;q<r.gq(s);++q){u=u+r.i(s,q)&536870911
u=u+((u&524287)<<10)&536870911
u^=u>>>6}u=u+((u&67108863)<<3)&536870911
u^=u>>>11
u=u+((u&16383)<<15)&536870911}for(w=p.b,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+7*J.z(w[t])&536870911
for(w=p.c,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+37*J.z(w[t])&536870911
for(w=p.d,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+53*J.z(w[t])&536870911
for(w=p.e,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+J.z(w[t])&536870911
return u},
gaz(d){var w=this,v=B.al(w.a,!0,x.z)
C.b.I(v,w.b)
C.b.I(v,w.c)
C.b.I(v,w.d)
C.b.I(v,w.e)
return v},
gq(d){return this.gaz(this).length}}
A.aiE.prototype={}
A.aiF.prototype={
zp(d){return this.ajO(d)},
ajO(d){var w=0,v=B.T(x.H),u,t=this,s
var $async$zp=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.M($.te().hb(0,d),$async$zp)
case 3:u=t.ajP(s.c7(f.buffer,0,null))
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$zp,v)},
ajP(d){var w,v,u,t,s,r,q,p=A.aHk(d,1,null,0),o=p.WL(),n=p.WL(),m=o&8
C.e.cH(o,3)
if(m!==8)B.I(A.aAL("Only DEFLATE compression supported: "+m))
if(C.e.cz((o<<8>>>0)+n,31)!==0)B.I(A.aAL("Invalid FCHECK"))
if((n>>>5&1)!==0){p.B_()
B.I(A.aAL("FDICT Encoding not currently supported"))}w=A.Nn(D.GU)
v=A.Nn(D.Hk)
u=new A.afG(new Uint8Array(32768))
v=new A.acr(p,u,w,v)
v.b=!0
v.aaC()
t=x.L.a(B.c7(u.c.buffer,0,u.a))
p.B_()
s=A.aHP()
p=Math.min(67108864,t.length)
r=new A.KV(t,p)
r.c=p
q=s.a.a.gbz()
p=s.a
p.toString
A.aDI(q,p,r,D.Bk)
if(r.d!==0)B.I(A.ND())
return this.adO(this.adR(s),null).fR(new A.aiK(null))},
adR(d){J.el(d.a.oW(3,x.m),new A.aiJ())
return d},
adO(d,e){var w=d.Y7(2,x.N,x.L),v=J.ao(w)
if(v.ga2(w))return B.ce(d,x.H)
v=v.gdh(w)
return B.lG(v.dn(v,new A.aiG(this,e,d),x.K),x.P).b1(new A.aiH(d),x.H)},
xh(d,e,f){return this.a5N(d,e,f)},
a5N(d,e,f){var w=0,v=B.T(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$xh=B.P(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.M(A.a28(e),$async$xh)
case 7:r=h
if(m!=null){o=x.z
J.aFh(m,B.m(["imageSize",""+J.aTG(r)+"x"+J.aTx(r)],o,o))}u=r
w=1
break
t=2
w=6
break
case 4:t=3
l=s
q=B.ae(l)
p=B.aI(l)
if(m!=null){o=x.z
J.aFh(m,B.m(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.R(u,v)
case 2:return B.Q(s,v)}})
return B.S($async$xh,v)}}
A.Zl.prototype={
aB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.ga2(e)||j.ay==null)return
j=j.ay.a.aj(1)
w=new B.L(j.a.aj(0),j.a.aj(1))
if(J.f2(w))return
d.c8(0)
try{v=new B.C(0,0,0+e.a,0+e.b)
if(k.e)d.kM(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=B.aLD(k.b,new B.L(t,u),new B.L(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.L(t*o,u*n).dv(0,2)
l=new B.L(s,j).dv(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.aC(0,j,s)
if(o!==1&&n!==1)d.e9(0,o,n)
k.akm(d,e)}finally{d.bS(0)}},
akm(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.af(w.ay.a.oW(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gG(v)
q=r.a.CE(0)
if(q.length!==0){w.ay.c.a.i(0,q)
p=!1}else p=!0
if(p)continue
o=J.aK(r.a.oW(1,u),w.gajI())
n=o.a.rR(2)
m=o.a.rR(3)
if(n){d.c8(0)
d.a8(0,new Float64Array(B.eH(B.b([o.a.aj(2).a.aj(0),o.a.aj(2).a.aj(1),0,0,o.a.aj(2).a.aj(2),o.a.aj(2).a.aj(3),0,0,0,0,1,0,o.a.aj(2).a.aj(4),o.a.aj(2).a.aj(5),0,1],t))))}if(m){d.c8(0)
d.hF(0,k.ai9(o.a.CE(3)))}r=o.a.aj(1).a.aj(2)
p=o.a.aj(1).a.aj(3)
l=o.a.rR(0)?C.d.Y(o.a.aj(0)*255):255
k.akk(d,q,new B.C(0,0,r,p),l)
r=o.b
k.akl(d,r==null?o.a.oW(4,s):r,l)
w.ay.c.d.i(0,q)
if(m)d.bS(0)
if(n)d.bS(0)}},
akk(d,e,f,g){var w,v,u=this.c
u.ay.c.b.i(0,e)
w=u.ay.d.i(0,e)
if(w==null)return
v=$.ad().b5()
v.smi(this.d)
v.sqH(!0)
v.sao(0,B.W(g,0,0,0))
d.jQ(w,new B.C(0,0,w.gcw(w),w.gck(w)),f,v)
this.akn(d,e,f,g)},
akl(d,e,f){var w,v,u,t,s,r,q,p=J.ao(e)
if(p.ga2(e))return
for(p=p.ga3(e),w=x.n;p.t();){v=p.gG(p)
u=this.aie(v)
if(v.a.rR(5)){d.c8(0)
d.a8(0,new Float64Array(B.eH(B.b([v.a.aj(5).a.aj(0),v.a.aj(5).a.aj(1),0,0,v.a.aj(5).a.aj(2),v.a.aj(5).a.aj(3),0,0,0,0,1,0,v.a.aj(5).a.aj(4),v.a.aj(5).a.aj(5),0,1],w))))}t=v.a.aj(4).a.aj(0)
if(t.a.tk()){s=$.ad().b5()
s.sqH(!0)
s.saf(0,C.aJ)
s.sao(0,B.W(C.d.Y(t.a.aj(3)*f),C.d.Y(t.a.aj(0)*255),C.d.Y(t.a.aj(1)*255),C.d.Y(t.a.aj(2)*255)))
d.cZ(u,s)}t=v.a.aj(4).a.aj(2)
if(t>0){s=$.ad().b5()
s.saf(0,C.X)
if(v.a.aj(4).a.aj(1).a.tk())s.sao(0,B.W(C.d.Y(v.a.aj(4).a.aj(1).a.aj(3)*f),C.d.Y(v.a.aj(4).a.aj(1).a.aj(0)*255),C.d.Y(v.a.aj(4).a.aj(1).a.aj(1)*255),C.d.Y(v.a.aj(4).a.aj(1).a.aj(2)*255)))
s.sf4(t)
switch(v.a.aj(4).a.aj(3)){case D.jF:s.smS(C.bW)
break
case D.xR:s.smS(C.jR)
break
case D.xS:s.smS(C.ys)
break}switch(v.a.aj(4).a.aj(4)){case D.jG:s.soM(C.el)
break
case D.xT:s.soM(C.jS)
break
case D.xU:s.soM(C.OU)
break}s.sKQ(v.a.aj(4).a.aj(5))
r=[v.a.aj(4).a.aj(6),v.a.aj(4).a.aj(7),v.a.aj(4).a.aj(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cZ(A.b4o(u,new A.Ky(B.b([t,q<0.1?0.1:q],w)),new A.Lp(r[2])),s)}else d.cZ(u,s)}if(v.a.rR(5))d.bS(0)}},
aie(d){var w,v,u,t,s,r,q,p=$.ad().bJ()
if(d.a.aj(0)===D.jH)return this.SB(d.a.aj(1).a.CE(0),p)
else if(d.a.aj(0)===D.xW){w=d.a.aj(3)
v=w.a.aj(0)
u=w.a.aj(1)
t=w.a.aj(2)
w=w.a.aj(3)
v-=t
u-=w
s=new B.C(v,u,v+t*2,u+w*2)
if(!s.ga2(s))p.lW(s)}else if(d.a.aj(0)===D.xV){w=d.a.aj(2)
v=w.a.aj(0)
u=w.a.aj(1)
t=w.a.aj(2)
r=w.a.aj(3)
w=w.a.aj(4)
q=B.mb(new B.C(v,u,v+t,u+r),new B.aV(w,w))
if(!q.ga2(q))p.dQ(q)}return p},
SB(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.i(0,d)!=null){t=w.ay.e.i(0,d)
t.toString
return t}if(e==null)t.a=$.ad().bJ()
w=B.y7(d,B.az("([a-df-zA-Z])",!0,!1,!1),new A.avy(),null)
v=B.az(",",!0,!1,!1)
u=B.fh(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.O(B.b(u.split("|||"),x.s),new A.avz(t,this,d))
return t.a},
ai9(d){return this.SB(d,null)},
akn(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.i(0,e)
return},
fT(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Dc.prototype={
ae(){return new A.Hj(C.i)}}
A.R2.prototype={
sJM(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.ec(0)
w=d==null
if(w)t.P(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.aj(1)
u=w.a.x_(2)
if(u===0)u=20
t.e=B.ch(0,C.d.Y(w.a.x_(3)/u*1000),0)}else t.e=C.o
t.sl(0,t.a)},
gajI(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.aj(1).a.x_(3)
v=t.a.aj(1).a.x_(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.d.Y(v*u)))},
P(d){this.ch=!0
if(!this.CW)this.ad()}}
A.Hj.prototype={
au(){var w,v=this
v.aH()
w=v.a.c
v.d=w.ay
w.bi()
w=w.cb$
w.b=!0
w.a.push(v.gES())
w=v.a.c
w.bi()
w=w.cB$
w.b=!0
w.a.push(v.gEd())},
aK(d){var w,v,u,t=this
t.aV(d)
w=d.c
if(w!==t.a.c){v=t.gES()
w.K(0,v)
u=t.gEd()
w.cv(u)
w=t.a.c
t.d=w.ay
w.bi()
w=w.cb$
w.b=!0
w.a.push(v)
v=t.a.c
v.bi()
v=v.cB$
v.b=!0
v.a.push(u)}},
adE(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.al(new A.avx(v))},
aa_(d){var w
if(d===C.T){this.a.toString
w=!0}else w=!1
if(w)this.a.c.P(0)},
n(){var w=this
w.d=null
w.a.c.K(0,w.gES())
w.a.c.cv(w.gEd())
w.aG()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.tk()?C.D:new B.L(u.a.aj(1).a.aj(0),u.a.aj(1).a.aj(1))
if(t.ga2(t))return C.aM
w=this.a
w=w.c
return B.AG(B.ln(v,v,v,new A.Zl(C.zV,w,C.bQ,!1,w),t),!0,v)}}
A.qz.prototype={
gbz(){return $.aNM()}}
A.mq.prototype={
gbz(){return $.aO9()}}
A.pd.prototype={
gbz(){return $.aNb()}}
A.qe.prototype={
gbz(){return $.aNJ()}}
A.ov.prototype={
gbz(){return $.aOf()}}
A.rk.prototype={
gbz(){return $.aO0()}}
A.rj.prototype={
gbz(){return $.aO_()}}
A.ri.prototype={
gbz(){return $.aNZ()}}
A.rm.prototype={
gbz(){return $.aO3()}}
A.rl.prototype={
gbz(){return $.aO4()}}
A.rh.prototype={
gbz(){return $.aO6()}}
A.lF.prototype={
gbz(){return $.aNx()},
grA(){var w=this.b
return w==null?this.a.oW(4,x.Y):w}}
A.lY.prototype={
gbz(){return $.aNL()},
n(){var w=this.d
w.gaz(w).O(0,new A.aeZ())
w.P(0)
this.e.P(0)}}
A.jC.prototype={}
A.kK.prototype={}
A.kL.prototype={}
var z=a.updateTypes(["n()","dN()","O()","om(a0)","B()","lY(w<aD>)","n(d3<@>,d3<@>)","B(d_)","rH()","~(mq)","~(lF)","qo()","~()","~(fi)","~(H?)","~(l[l?])","l()","w<n>()","qz()","mq()","pd()","kL?(n)","ov()","rk()","rj()","ri()","rm()","rl()","rh()","lF()","lY()","jC?(n)","kK?(n)","qe()"])
A.azX.prototype={
$0(){return D.Il},
$S:z+11}
A.asX.prototype={
$0(){return this.a.Z7(this.b)},
$S:0}
A.asY.prototype={
$0(){return this.a.Za(this.b)},
$S:0}
A.at1.prototype={
$1(d){return new A.om(new A.at0(this.a),"md/rocket.svga",null)},
$S:z+3}
A.at0.prototype={
$0(){return this.a.d.dr(0)},
$S:0}
A.at_.prototype={
$1(d){return new A.om(new A.asZ(this.a),"md/angle.svga",null)},
$S:z+3}
A.asZ.prototype={
$0(){return this.a.d.dr(0)},
$S:0}
A.awg.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sJM(null)
w.a.akT()},
$S:9}
A.a48.prototype={
$2(d,e){return C.e.aR(d.d,e.d)},
$S:z+6}
A.ayN.prototype={
$1(d){return J.cW(d,this.a.$0())},
$S:120}
A.ayL.prototype={
$1(d){var w,v,u=this,t=u.a.fq(!0),s=u.c,r=u.b.a5M(s,u.d,t)
if(r==null){w=u.e.tc()
v=A.acK(t)
if(w.b)A.ig("UnknownFieldSet","mergeVarintField")
C.b.D(w.lI(s).b,v)}else J.cW(d,r)},
$S:120}
A.ayM.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:9}
A.a8s.prototype={
$0(){return A.aIb(this.a,this.b)},
$S(){return this.b.h("vo<0>()")}}
A.a8u.prototype={
$0(){return this.a},
$S:47}
A.a8t.prototype={
$1(d){return d.a.tk()},
$S:z+7}
A.ae5.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fr(w.a,w.b,B.k(v,u),!1,v.h("@<0>").aa(u).h("fr<1,2>"))},
$S(){return this.d.h("@<0>").aa(this.e).h("fr<1,2>()")}}
A.aqJ.prototype={
$1(d){return J.hw(d)},
$S:68}
A.aqL.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.d_){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.Y4(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.aP)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:59}
A.aqM.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.o1)for(w=d.a,w=new J.hy(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fr)for(w=d.gdh(d),w=w.ga3(w),v=this.a;w.t();)v.$2(e,w.gG(w))
else this.a.$2(e,d)},
$S:155}
A.aqK.prototype={
$1(d){var w=this.a,v=w.d.c.i(0,d)
w=w.d.b.i(0,d)
return this.b.$2(v,"["+B.j(w.gAB(w))+"]")},
$S:23}
A.aw_.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.hv()
v.b!==$&&B.aC()
v.b=w
u=w}return u},
$S(){return this.a.$ti.h("1()")}}
A.ag5.prototype={
$2(d,e){return(d^A.aJS(A.mG(A.mG(0,J.z(e.a)),J.z(e.b))))>>>0},
$S(){return this.a.$ti.h("n(n,aP<1,2>)")}}
A.anh.prototype={
$0(){var w=x.X
return new A.rH(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ani.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.z(e)&536870911},
$S:620}
A.axL.prototype={
$1(d){return A.aDu(J.aK(this.a,d),J.aK(this.b,d))},
$S:80}
A.as3.prototype={
$2(d,e){return A.mG(d,J.z(e))},
$S:621}
A.aiK.prototype={
$0(){},
$S:9}
A.aiJ.prototype={
$1(d){var w={}
w.a=null
J.el(d.a.oW(1,x.p),new A.aiI(w))},
$S:z+9}
A.aiI.prototype={
$1(d){if(J.k1(d.grA())&&J.b_(d.grA())>0)if(J.aK(d.grA(),0).a.aj(0)===D.xX&&this.a.a!=null)d.b=this.a.a
else if(J.k1(d.grA()))this.a.a=d.grA()},
$S:z+10}
A.aiG.prototype={
$1(d){return this.Yj(d)},
Yj(d){var w=0,v=B.T(x.P),u=this,t,s
var $async$$1=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.M(u.a.xh(t,new Uint8Array(B.eH(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.R(null,v)}})
return B.S($async$$1,v)},
$S:622}
A.aiH.prototype={
$1(d){return this.a},
$S:z+5}
A.avy.prototype={
$1(d){return"|||"+B.j(d.Ka(1))+" "},
$S:54}
A.avz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.Z(d,0,1)
if(C.c.p("MLHVCSQRZmlhvcsqrz",w)){v=C.c.du(C.c.br(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bo(v[0])
t=B.bo(v[1])
u.b=t
u.a.f1(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bo(v[0])
t=u.b+B.bo(v[1])
u.b=t
u.a.f1(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bo(v[0])
t=B.bo(v[1])
u.b=t
u.a.c5(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bo(v[0])
t=u.b+B.bo(v[1])
u.b=t
u.a.c5(0,u.c,t)}else if(w==="H"){s=B.bo(v[0])
u=m.a
u.c=s
u.a.c5(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bo(v[0])
u.c=s
u.a.c5(0,s,u.b)}else if(w==="V"){t=B.bo(v[0])
u=m.a
u.b=t
u.a.c5(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bo(v[0])
u.b=t
u.a.c5(0,u.c,t)}else if(w==="C"){u=m.a
u.r=B.bo(v[0])
u.f=B.bo(v[1])
u.e=B.bo(v[2])
u.d=B.bo(v[3])
u.c=B.bo(v[4])
t=B.bo(v[5])
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
r.nC(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
u.r=u.c+B.bo(v[0])
u.f=u.b+B.bo(v[1])
u.e=u.c+B.bo(v[2])
u.d=u.b+B.bo(v[3])
u.c=u.c+B.bo(v[4])
t=u.b+B.bo(v[5])
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
r.nC(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
if(u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null){r=u.c
q=u.e
q.toString
u.r=r-q+r
r=u.b
q=u.d
q.toString
u.f=r-q+r
u.e=B.bo(v[0])
u.d=B.bo(v[1])
u.c=B.bo(v[2])
t=B.bo(v[3])
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
r.nC(q,p,o,n,u.c,t)}else{u.r=B.bo(v[0])
u.f=B.bo(v[1])
u.c=B.bo(v[2])
t=B.bo(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r2(q,p,u.c,t)}}else if(w==="s"){u=m.a
r=u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null
q=u.c
if(r){r=u.e
r.toString
u.r=q-r+q
r=u.b
p=u.d
p.toString
u.f=r-p+r
u.e=q+B.bo(v[0])
u.d=u.b+B.bo(v[1])
u.c=u.c+B.bo(v[2])
t=u.b+B.bo(v[3])
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
q.nC(r,p,o,n,u.c,t)}else{u.r=q+B.bo(v[0])
u.f=u.b+B.bo(v[1])
u.c=u.c+B.bo(v[2])
t=u.b+B.bo(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r2(q,p,u.c,t)}}else if(w==="Q"){u=m.a
u.r=B.bo(v[0])
u.f=B.bo(v[1])
u.c=B.bo(v[2])
t=B.bo(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r2(q,p,u.c,t)}else if(w==="q"){u=m.a
u.r=u.c+B.bo(v[0])
u.f=u.b+B.bo(v[1])
u.c=u.c+B.bo(v[2])
t=u.b+B.bo(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r2(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.aA(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:36}
A.avx.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.aeZ.prototype={
$1(d){d.n()},
$S:623};(function aliases(){var w=A.IW.prototype
w.a2N=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"aEf","b1X",14)
v(A,"aA6",1,null,["$2","$1"],["ig",function(d){return A.ig(d,null)}],15,0)
u(A,"b5G","aYs",16)
u(A,"b5D","aYp",17)
u(A,"b5C","aYo",4)
u(A,"b5F","aYr",0)
u(A,"b5E","aYq",2)
var r
t(r=A.KV.prototype,"gap3","ap4",0)
t(r,"gap5","ap6",1)
t(r,"gaph","B_",0)
t(r,"gapi","apj",1)
t(r,"gapd","ape",0)
t(r,"gapf","apg",1)
t(r,"gaoX","aoY",0)
t(r,"gaoZ","ap_",1)
t(r,"gapa","apb",0)
t(r,"gapc","Jh",1)
t(r,"gaoS","aoT",4)
t(r,"gap0","ap1",2)
t(r,"gaoU","aoV",2)
t(r=A.Hj.prototype,"gES","adE",12)
s(r,"gEd","aa_",13)
u(A,"aN_","aY2",18)
u(A,"aN5","b_e",19)
u(A,"aMX","aUl",20)
u(A,"aMZ","aXx",33)
u(A,"aEn","b_Y",22)
u(A,"aN2","aZZ",23)
u(A,"aN1","aZY",24)
u(A,"aN0","aZX",25)
u(A,"aEm","b_1",26)
u(A,"aN3","b_2",27)
u(A,"aN4","b_4",28)
u(A,"aMY","aWT",29)
u(A,"b5Y","aHP",30)
w(A,"b60","b_3",31)
w(A,"b5Z","b__",32)
w(A,"b6_","b_0",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.JP,B.h9)
u(B.H,[A.acH,A.afH,A.abI,A.acr,A.dN,A.Lp,A.Ky,A.a47,A.KV,A.lO,A.aqE,A.aqz,A.d3,A.VA,A.d_,A.HG,A.P4,A.Q2,A.kX,A.rH,A.aiE,A.aiF])
v(A.acG,A.acH)
v(A.afG,A.afH)
u(B.lk,[A.azX,A.asX,A.asY,A.at0,A.asZ,A.awg,A.ayM,A.a8s,A.a8u,A.ae5,A.aw_,A.anh,A.aiK,A.avx])
u(B.a3,[A.qo,A.om,A.Dc])
u(B.a9,[A.WW,A.IW,A.Hj])
u(B.ir,[A.at1,A.at_,A.ayN,A.ayL,A.a8t,A.aqJ,A.aqK,A.axL,A.aiJ,A.aiI,A.aiG,A.aiH,A.avy,A.avz,A.aeZ])
v(A.a_j,A.IW)
v(A.aq7,B.FD)
u(B.tG,[A.a48,A.aqL,A.aqM,A.ag5,A.ani,A.as3])
v(A.qq,A.d3)
v(A.o1,B.a2)
u(A.o1,[A.pN,A.vo])
v(A.fr,B.ay)
v(A.Zl,B.zo)
v(A.R2,B.k3)
u(A.d_,[A.qz,A.mq,A.pd,A.qe,A.ov,A.rk,A.rj,A.ri,A.rm,A.rl,A.rh,A.lF,A.lY])
u(A.Q2,[A.jC,A.kK,A.kL])
w(A.IW,B.fu)})()
B.xP(b.typeUniverse,JSON.parse('{"JP":{"h9":[],"bJ":[]},"dN":{"bO":["H"]},"qo":{"a3":[],"h":[]},"WW":{"a9":["qo"]},"om":{"a3":[],"h":[]},"a_j":{"a9":["om"]},"aWy":{"d3":["1"]},"d3":{"d3.T":"1"},"vo":{"o1":["1"],"a2":["1"],"w":["1"],"a4":["1"],"q":["1"],"q.E":"1","a2.E":"1"},"fr":{"ay":["1","2"],"aH":["1","2"],"ay.V":"2","ay.K":"1"},"lO":{"bJ":[]},"qq":{"d3":["fr<1,2>?"],"d3.T":"fr<1,2>?"},"pN":{"o1":["1"],"a2":["1"],"w":["1"],"a4":["1"],"q":["1"],"q.E":"1","a2.E":"1"},"o1":{"a2":["1"],"w":["1"],"a4":["1"],"q":["1"]},"Dc":{"a3":[],"h":[]},"Zl":{"ac":[]},"R2":{"k3":[],"bz":["O"],"ac":[]},"Hj":{"a9":["Dc"]},"qz":{"d_":[]},"mq":{"d_":[]},"pd":{"d_":[]},"qe":{"d_":[]},"ov":{"d_":[]},"rk":{"d_":[]},"rj":{"d_":[]},"ri":{"d_":[]},"rm":{"d_":[]},"rl":{"d_":[]},"rh":{"d_":[]},"lF":{"d_":[]},"lY":{"d_":[]}}'))
B.aDi(b.typeUniverse,JSON.parse('{"Ky":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.Y
return{G:w("aWy<@>"),q:w("d3<@>"),p:w("lF"),K:w("ag<aD>"),J:w("d_"),I:w("uB"),w:w("dN"),U:w("q<d_>"),M:w("u<d3<@>>"),X:w("u<dN>"),r:w("u<w<n>>"),s:w("u<l>"),A:w("u<kX>"),D:w("u<h>"),n:w("u<O>"),t:w("u<n>"),b:w("u<~()>"),F:w("u<~(fi)>"),d:w("w<d_>"),j:w("w<@>"),L:w("w<n>"),T:w("qq<@,@>"),f:w("aH<@,@>"),H:w("lY"),P:w("aD"),R:w("aX<~()>"),V:w("aX<~(fi)>"),u:w("qE"),W:w("qI"),Y:w("rh"),m:w("mq"),N:w("l"),l:w("Ep"),Q:w("ds"),B:w("kX"),k:w("rH"),y:w("B"),i:w("O"),z:w("@"),O:w("@()"),_:w("@(a4B,n)"),S:w("n"),o:w("uB?")}})();(function constants(){var w=a.makeConstList
D.AY=new A.aiF()
D.Bk=new A.aqz()
D.FR=new A.dN(0,0,0)
D.FS=new A.dN(4194303,4194303,1048575)
D.GT=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.GU=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.GX=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.jH=new A.jC(0,"SHAPE")
D.xV=new A.jC(1,"RECT")
D.xW=new A.jC(2,"ELLIPSE")
D.xX=new A.jC(3,"KEEP")
D.mW=B.b(w([D.jH,D.xV,D.xW,D.xX]),B.Y("u<jC>"))
D.H7=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Hj=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Hl=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Hk=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.Hv=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.jG=new A.kL(0,"LineJoin_MITER")
D.xT=new A.kL(1,"LineJoin_ROUND")
D.xU=new A.kL(2,"LineJoin_BEVEL")
D.n9=B.b(w([D.jG,D.xT,D.xU]),B.Y("u<kL>"))
D.jF=new A.kK(0,"LineCap_BUTT")
D.xR=new A.kK(1,"LineCap_ROUND")
D.xS=new A.kK(2,"LineCap_SQUARE")
D.na=B.b(w([D.jF,D.xR,D.xS]),B.Y("u<kK>"))
D.Il=new A.qo(null)
D.ay=new A.P4("com.opensource.svga")
D.Xa=new A.P4("")
D.U8=new B.cN("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.Uk=new B.cN("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.VV=new A.aq7(0,"Absolute")})();(function staticFields(){$.b0A=[]
$.aH1=B.k(B.Y("hL?"),B.Y("HG<d_>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"bdG","aRT",()=>new A.azX())
v($,"b91","aOq",()=>{var u=A.b05()
u.hv()
return u})
v($,"b7U","aNM",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hz("MovieParams",A.aN_(),D.ay),r=x.i
s.fu(0,1,u,256,u,r)
s.fu(0,2,t,256,t,r)
r=x.S
s.dz(0,3,"fps",2048,r)
s.dz(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b8B","aO9",()=>{var u="imageKey",t="matteKey",s=A.hz("SpriteEntity",A.aN5(),D.ay)
s.tY(1,u,u)
s.AP(0,2,"frames",2097154,A.aMY(),x.p)
s.tY(3,t,t)
s.w=!1
return s})
v($,"b6s","aNb",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hz("AudioEntity",A.aMX(),D.ay)
n.tY(1,t,t)
u=x.S
n.fu(0,2,s,r,s,u)
n.fu(0,3,q,r,q,u)
n.fu(0,4,p,r,p,u)
n.fu(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b7L","aNJ",()=>{var u=A.hz("Layout",A.aMZ(),D.ay),t=x.i
u.dz(0,1,"x",256,t)
u.dz(0,2,"y",256,t)
u.dz(0,3,"width",256,t)
u.dz(0,4,"height",256,t)
u.w=!1
return u})
v($,"b8Q","aOf",()=>{var u=A.hz("Transform",A.aEn(),D.ay),t=x.i
u.dz(0,1,"a",256,t)
u.dz(0,2,"b",256,t)
u.dz(0,3,"c",256,t)
u.dz(0,4,"d",256,t)
u.dz(0,5,"tx",256,t)
u.dz(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b8p","aO0",()=>{var u=A.hz("ShapeEntity.ShapeArgs",A.aN2(),D.ay)
u.S1(1,"d")
u.w=!1
return u})
v($,"b8o","aO_",()=>{var u="cornerRadius",t=A.hz("ShapeEntity.RectArgs",A.aN1(),D.ay),s=x.i
t.dz(0,1,"x",256,s)
t.dz(0,2,"y",256,s)
t.dz(0,3,"width",256,s)
t.dz(0,4,"height",256,s)
t.fu(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b8n","aNZ",()=>{var u=A.hz("ShapeEntity.EllipseArgs",A.aN0(),D.ay),t=x.i
u.dz(0,1,"x",256,t)
u.dz(0,2,"y",256,t)
u.fu(0,3,"radiusX",256,"radiusX",t)
u.fu(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b8s","aO3",()=>{var u=A.hz("ShapeEntity.ShapeStyle.RGBAColor",A.aEm(),D.ay),t=x.i
u.dz(0,1,"r",256,t)
u.dz(0,2,"g",256,t)
u.dz(0,3,"b",256,t)
u.dz(0,4,"a",256,t)
u.w=!1
return u})
v($,"b8t","aO4",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hz("ShapeEntity.ShapeStyle",A.aN3(),D.ay),n=B.Y("rm")
o.jH(1,"fill",A.aEm(),n)
o.jH(2,"stroke",A.aEm(),n)
n=x.i
o.fu(0,3,u,256,u,n)
o.Hh(0,4,"lineCap",512,D.jF,D.na,"lineCap",A.b5Z(),B.Y("kK"))
o.Hh(0,5,t,512,D.jG,D.n9,t,A.b6_(),B.Y("kL"))
o.fu(0,6,s,256,s,n)
o.fu(0,7,r,256,r,n)
o.fu(0,8,q,256,q,n)
o.fu(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b8v","aO6",()=>{var u=A.hz("ShapeEntity",A.aN4(),D.ay)
u.aog(0,B.b([2,3,4],x.t))
u.akp(0,1,"type",512,D.jH,D.mW,A.b60(),B.Y("jC"))
u.jH(2,"shape",A.aN2(),B.Y("rk"))
u.jH(3,"rect",A.aN1(),B.Y("rj"))
u.jH(4,"ellipse",A.aN0(),B.Y("ri"))
u.jH(10,"styles",A.aN3(),B.Y("rl"))
u.jH(11,"transform",A.aEn(),B.Y("ov"))
u.w=!1
return u})
v($,"b7n","aNx",()=>{var u="clipPath",t=A.hz("FrameEntity",A.aMY(),D.ay)
t.dz(0,1,"alpha",256,x.i)
t.jH(2,"layout",A.aMZ(),B.Y("qe"))
t.jH(3,"transform",A.aEn(),B.Y("ov"))
t.tY(4,u,u)
t.AP(0,5,"shapes",2097154,A.aN4(),x.Y)
t.w=!1
return t})
v($,"b7T","aNL",()=>{var u,t,s=null,r=A.hz("MovieEntity",A.b5Y(),D.ay)
r.S1(1,"version")
r.jH(2,"params",A.aN_(),B.Y("qz"))
u=A.hz("MovieEntity.ImagesEntry",s,D.ay)
t=x.z
u.S4(0,1,"key",64,s,s,s,s,t)
u.S4(0,2,"value",32,s,s,s,s,t)
r.CH(A.aXN("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.AP(0,4,"sprites",2097154,A.aN5(),x.m)
r.AP(0,5,"audios",2097154,A.aMX(),B.Y("pd"))
r.w=!1
return r})
v($,"b8u","aO5",()=>A.aCg(D.mW,B.Y("jC")))
v($,"b8q","aO1",()=>A.aCg(D.na,B.Y("kK")))
v($,"b8r","aO2",()=>A.aCg(D.n9,B.Y("kL")))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_8",e:"endPart",h:b})})($__dart_deferred_initializers__,"55yf7kPxKW7+su//1lN30Zj8CkY=");