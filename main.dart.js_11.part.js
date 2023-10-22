((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_11",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
awK(d){return new A.IN(d,null,null)},
IN:function IN(d,e,f){this.a=d
this.b=e
this.c=f},
aDa(d,e,f,g){var w,v
if(x.Q.b(d))w=B.c6(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.eK(d,!0,x.S)
v=new A.a9Z(w,g,g,e)
v.e=f==null?w.length:f
return v},
aa_:function aa_(){},
a9Z:function a9Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
acQ:function acQ(){},
acP:function acP(d){this.a=0
this.c=d},
Md(d){var w=new A.a91()
w.a1g(d)
return w},
a91:function a91(){this.a=$
this.b=0
this.c=2147483647},
a9K:function a9K(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
aa2(d){var w,v,u,t,s,r
if(d<0){d=-d
w=!0}else w=!1
v=C.e.bW(d,17592186044416)
d-=v*17592186044416
u=C.e.bW(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.aa3(0,0,0,t,s,r):new A.dH(t,s,r)},
aDb(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dH((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
axG(d,e){return new A.dH(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
A8(d){if(d instanceof A.dH)return d
else if(B.jy(d))return A.aa2(d)
throw B.d(B.f6(d,"other","not an int, Int32 or Int64"))},
aSV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.Gh[d]
t=""
s=""
r=""
while(!0){if(!!(w===0&&v===0))break
q=C.e.e0(w,u)
v+=w-q*u<<10>>>0
p=C.e.e0(v,u)
g+=v-p*u<<10>>>0
o=C.e.e0(g,u)
f+=g-o*u<<10>>>0
n=C.e.e0(f,u)
e+=f-n*u<<10>>>0
m=C.e.e0(e,u)
l=C.d.bs(C.e.ft(u+(e-m*u),d),1)
r=s
s=t
t=l
v=p
w=q
g=o
f=n
e=m}k=(g<<20>>>0)+(f<<10>>>0)+e
return h+(k===0?"":C.e.ft(k,d))+t+s+r},
aa3(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cF(w,22)&1)
return new A.dH(w&4194303,v&4194303,f-i-(C.e.cF(v,22)&1)&1048575)},
A9(d,e){var w=C.e.xv(d,e)
return w},
dH:function dH(d,e,f){this.a=d
this.b=e
this.c=f},
avW:function avW(){},
q3:function q3(d){this.a=d},
Vu:function Vu(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
app:function app(d,e){this.a=d
this.b=e},
apq:function apq(d,e){this.a=d
this.b=e},
apu:function apu(d){this.a=d},
apt:function apt(d){this.a=d},
aps:function aps(d){this.a=d},
apr:function apr(d){this.a=d},
o3:function o3(d,e,f){this.c=d
this.d=e
this.a=f},
YU:function YU(d,e,f){var _=this
_.d=$
_.e8$=d
_.bx$=e
_.a=null
_.b=f
_.c=null},
asy:function asy(d){this.a=d},
HT:function HT(){},
b_P(d,e,f){var w,v,u,t,s,r,q,p,o=$.ac().bY()
for(w=d.Rd(),w=w.ga_(w),v=e.a,u=f.a;w.t();){t=w.gF(w)
t.gq(t)
for(s=u,r=!0;s<t.gq(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.xZ(0,t.Sq(s,s+p),C.h)
s+=p
r=!r}}return o},
amO:function amO(d,e){this.a=d
this.b=e},
Kj:function Kj(d){this.a=d},
Ju:function Ju(d){this.a=d
this.b=0},
hk(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a2n((s===""?"":s+".")+d,w,B.j(v,u),B.j(t,u),B.j(t,u),B.j(v,v),e)},
azE(c0,c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null
B.i3(c3,b9)
for(w=x.S,v=x.T,u=x.z,t=c0.c,s=c2.gami(),r=c2.gamg(),q=c2.gam4(),p=c2.gam2(),o=c2.gamo(),n=c2.gamn(),m=c2.gaml(),l=c2.gamj(),k=c2.gamb(),j=c2.gam9(),i=c2.gam_(),h=c2.gam6(),g=c2.galY(),f=c2.a;!0;){e=c2.V4()
if(e===0)return
d=e&7
a0=C.e.cF(e,3)
a1=t.i(0,a0)
if(a1==null)a1=b9
if(a1==null||!A.aZW(a1.f,d)){if(!c1.rA().U9(e,c2))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c1.eh(c0,a1,c2.fb(!0)!==0)
break
case 32:c1.eh(c0,a1,new Uint8Array(B.fq(c2.va())))
break
case 64:a3=c2.va()
c1.eh(c0,a1,C.jQ.d2(a3))
break
case 256:a3=c2.b+=4
if(a3>c2.c)B.T(A.k3())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.eh(c0,a1,a3.getFloat32(0,!0))
break
case 128:a3=c2.b+=8
if(a3>c2.c)B.T(A.k3())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c1.eh(c0,a1,a3.getFloat64(0,!0))
break
case 512:a6=c2.fb(!0)
a7=t.i(0,a0)
a8=a7==null?b9:a7.z
a3=(a8==null&&!0?b9.ganw():a8).$1(a6)
if(a3==null){a9=c1.rA()
a3=A.aa2(a6)
if(a9.b)A.hZ("UnknownFieldSet","mergeVarintField")
C.b.D(a9.li(a0).b,a3)}else c1.eh(c0,a1,a3)
break
case 1024:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gB1():b0).$0()
b1=c1.wD(a1)
if(b1!=null)a3.kL(b1)
c2.V0(a0,a3,c3)
c1.eh(c0,a1,a3)
break
case 2048:c1.eh(c0,a1,c2.fb(!0))
break
case 4096:c1.eh(c0,a1,c2.mH())
break
case 8192:c1.eh(c0,a1,A.aBP(c2.fb(!1)))
break
case 16384:b2=c2.mH()
c1.eh(c0,a1,(b2.Wr(0,1).k(0,1)?A.aa3(0,0,0,b2.a,b2.b,b2.c):b2).Je(0,1))
break
case 32768:c1.eh(c0,a1,c2.fb(!1))
break
case 65536:c1.eh(c0,a1,c2.mH())
break
case 131072:a3=c2.b+=4
if(a3>c2.c)B.T(A.k3())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.eh(c0,a1,a3.getUint32(0,!0))
break
case 262144:a3=c2.b+=8
if(a3>c2.c)B.T(A.k3())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c1.eh(c0,a1,A.aDb(b4))
break
case 524288:a3=c2.b+=4
if(a3>c2.c)B.T(A.k3())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.eh(c0,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c2.b+=8
if(a3>c2.c)B.T(A.k3())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c1.eh(c0,a1,A.aDb(b4))
break
case 2097152:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gB1():b0).$0()
b1=c1.wD(a1)
if(b1!=null)a3.kL(b1)
c2.V2(a3,c3)
c1.eh(c0,a1,a3)
break
case 18:A.iK(c0,c1,c2,d,a1,g)
break
case 34:J.d5(c1.mz(c0,a1,u),new Uint8Array(B.fq(c2.va())))
break
case 66:a3=c1.mz(c0,a1,u)
a4=c2.va()
J.d5(a3,C.jQ.d2(a4))
break
case 258:A.iK(c0,c1,c2,d,a1,h)
break
case 130:A.iK(c0,c1,c2,d,a1,i)
break
case 514:A.aZH(c0,c1,c2,d,a1,a0,c3)
break
case 1026:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gB1():b0).$0()
c2.V0(a0,a3,c3)
J.d5(c1.mz(c0,a1,u),a3)
break
case 2050:A.iK(c0,c1,c2,d,a1,j)
break
case 4098:A.iK(c0,c1,c2,d,a1,k)
break
case 8194:A.iK(c0,c1,c2,d,a1,l)
break
case 16386:A.iK(c0,c1,c2,d,a1,m)
break
case 32770:A.iK(c0,c1,c2,d,a1,n)
break
case 65538:A.iK(c0,c1,c2,d,a1,o)
break
case 131074:A.iK(c0,c1,c2,d,a1,p)
break
case 262146:A.iK(c0,c1,c2,d,a1,q)
break
case 524290:A.iK(c0,c1,c2,d,a1,r)
break
case 1048578:A.iK(c0,c1,c2,d,a1,s)
break
case 2097154:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gB1():b0).$0()
c2.V2(a3,c3)
J.d5(c1.mz(c0,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c1.M2(c0,a1,u,u)
b6=c2.fb(!0)
b7=c2.c
c2.c=c2.b+b6
a4=b5.b
a5=A.aFB(a4.length)
A.azE(b5,new A.U5(b9,b9,a5,b5.f.a===0?b9:B.j(w,w)),c2,c3)
if(c2.d!==0)B.T(A.Mr())
c2.c=b7
b8=a5[0]
if(b8==null)b8=a4[0].r.$0()
b2=a5[1]
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b8,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
iK(d,e,f,g,h,i){A.aH_(d,e,f,g,h,new A.auT(i))},
aZH(d,e,f,g,h,i,j){A.aH_(d,e,f,g,h,new A.auR(f,d,i,j,e))},
aH_(d,e,f,g,h,i){var w,v,u,t=e.mz(d,h,x.z)
if(g===2){w=f.fb(!0)
if(w<0)B.T(B.bK(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.T(A.k3())
f.c=v
new A.auS(f,i,t).$0()
f.c=u}else i.$1(t)},
aBP(d){if((d&1)===1)return-C.e.cF(d,1)-1
else return C.e.cF(d,1)},
Mr(){return new A.lr("Protocol message end-group tag did not match expected tag.")},
aDd(){return new A.lr("CodedBufferReader encountered a malformed varint.")},
axH(){return new A.lr("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
k3(){return new A.lr("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
aZb(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eA(e))return"not type bool"
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
case 2048:case 8192:case 524288:if(!B.jy(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jy(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dH))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cU))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
aYp(d){if(d==null)throw B.d(B.bK("Can't add a null to a repeated field",null))},
aS4(d,e,f,g,h,i,j,k,l,m,n){return new A.cY(d,e,f,g,A.aCL(g,i),l,m,null,n.h("cY<0>"))},
aS5(d,e,f,g,h,i,j,k,l,m,n){var w=new A.cY(d,e,f,g,new A.a6a(h,n),i,m,h,n.h("cY<0>"))
w.a1d(d,e,f,g,h,i,j,k,l,m,n)
return w},
aCL(d,e){if(e==null)return A.aU4(d)
if(x.O.b(e))return e
return new A.a6c(e)},
aTn(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aCL(g,new A.abk(h,i,j,n,o))
B.i3(d,"name")
B.i3(e,"tagNumber")
return new A.q6(h,i,j,d,e,f,g,w,null,null,null,n.h("@<0>").ab(o).h("q6<1,2>"))},
hZ(d,e){if(e!=null)throw B.d(B.V("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.V("Attempted to change a read-only message ("+d+")"))},
aX7(d,e,f){var w,v=A.aFB(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.j(w,w)}return new A.U5(d,f,v,w)},
aFB(d){if(d===0)return $.aX8
return B.aV(d,null,!1,x.z)},
aFA(d,e,f){var w,v
if(x.j.b(f)&&J.dZ(f))return d
if(x.f.b(f)&&J.dZ(f))return d
d=A.mo(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.mo(d,A.az2(f))
else if(v!==512)d=A.mo(d,J.y(f))
else d=(w&2)!==0?A.mo(d,A.az2(J.aPe(f,new A.anp()))):A.mo(d,f.a)
return d},
aU4(d){switch(d){case 16:case 17:return A.b1_()
case 32:case 33:return A.b10()
case 64:case 65:return A.b13()
case 256:case 257:case 128:case 129:return A.b11()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b12()
default:return null}},
aU3(){return""},
aU0(){return B.b([],x.t)},
aU_(){return!1},
aU2(){return 0},
aU1(){return 0},
aSs(d,e){var w,v=$.aCU.i(0,d)
if(v!=null)return v
w=new A.GH(d,e.h("GH<0>"))
$.aCU.m(0,d,w)
return w},
aSr(d,e){var w=e.a(d.gby().Q.$0())
w.kL(d)
return w},
aDZ(d,e){var w=B.b([],e.h("t<0>"))
B.i3(d,"check")
return new A.uL(w,d,e.h("uL<0>"))},
ayg(d,e){var w,v,u,t=B.j(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
aWE(){return new A.kz(B.j(x.S,x.k))},
azr(d,e){var w
if(d instanceof A.cU)return d.k(0,e)
if(e instanceof A.cU)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.x9(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.azm(d,e)
return J.f(d,e)},
x9(d,e){var w,v=J.as(d),u=J.as(e)
if(v.gq(d)!==u.gq(e))return!1
for(w=0;w<v.gq(d);++w)if(!A.azr(v.i(d,w),u.i(e,w)))return!1
return!0},
azm(d,e){var w=J.as(d)
if(w.gq(d)!==J.aU(e))return!1
return J.aOY(w.gbd(d),new A.atS(d,e))},
aHb(d,e){var w=B.eK(d,!0,e)
C.b.hM(w)
return w},
mo(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aFF(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
az2(d){return A.aFF(J.aOZ(d,0,new A.aox()))},
aZW(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a2n:function a2n(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a2o:function a2o(){},
auT:function auT(d){this.a=d},
auR:function auR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
auS:function auS(d,e,f){this.a=d
this.b=e
this.c=f},
JQ:function JQ(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lr:function lr(d){this.a=d},
ank:function ank(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
anf:function anf(){},
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
a6a:function a6a(d,e){this.a=d
this.b=e},
a6c:function a6c(d){this.a=d},
a6b:function a6b(){},
q6:function q6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
abk:function abk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U5:function U5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
anp:function anp(){},
anr:function anr(d,e){this.a=d
this.b=e},
ans:function ans(d){this.a=d},
anq:function anq(d,e){this.a=d
this.b=e},
cU:function cU(){},
GH:function GH(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
aso:function aso(d){this.a=d},
NP:function NP(d){this.a=d},
pu:function pu(d,e,f){this.a=d
this.b=e
this.$ti=f},
uL:function uL(d,e,f){this.a=d
this.b=e
this.$ti=f},
nM:function nM(){},
fc:function fc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
adf:function adf(d){this.a=d},
OL:function OL(){},
kz:function kz(d){this.a=d
this.b=!1},
ak8:function ak8(){},
ak9:function ak9(d){this.a=d},
rg:function rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
atS:function atS(d,e){this.a=d
this.b=e},
aox:function aox(){},
afA:function afA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afB:function afB(){},
afG:function afG(d){this.a=d},
afF:function afF(){},
afE:function afE(d){this.a=d},
afC:function afC(d,e,f){this.a=d
this.b=e
this.c=f},
afD:function afD(d){this.a=d},
XV:function XV(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
arX:function arX(){},
arY:function arY(d,e,f){this.a=d
this.b=e
this.c=f},
Cr:function Cr(d,e){this.c=d
this.a=e},
PK:function PK(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.cd$=m},
Gm:function Gm(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
arW:function arW(d){this.a=d},
aTF(){var w=new A.qb()
w.ha()
return w},
aVR(){var w=new A.m6()
w.ha()
return w},
aPP(){var w=new A.oV()
w.ha()
return w},
aT6(){var w=new A.pU()
w.ha()
return w},
aWx(){var w=new A.oc()
w.ha()
return w},
aVB(){var w=new A.qW()
w.ha()
return w},
aVA(){var w=new A.qV()
w.ha()
return w},
aVz(){var w=new A.qU()
w.ha()
return w},
aVE(){var w=new A.qY()
w.ha()
return w},
aVF(){var w=new A.qX()
w.ha()
return w},
aVH(){var w=new A.qT()
w.ha()
return w},
aSm(){var w=new A.li()
w.ha()
return w},
aDC(){var w=x.N,v=x.I
w=new A.lF(new A.afA(B.j(w,x.y),B.j(w,v),B.j(w,x.l),B.j(w,x._)),B.j(w,v),B.j(w,x.W))
w.ha()
return w},
qb:function qb(){this.a=null},
m6:function m6(){this.a=null},
oV:function oV(){this.a=null},
pU:function pU(){this.a=null},
oc:function oc(){this.a=null},
qW:function qW(){this.a=null},
qV:function qV(){this.a=null},
qU:function qU(){this.a=null},
qY:function qY(){this.a=null},
qX:function qX(){this.a=null},
qT:function qT(){this.a=null},
li:function li(){this.a=this.b=null},
lF:function lF(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
acb:function acb(){},
aVG(d){return $.aJI().i(0,d)},
aVC(d){return $.aJE().i(0,d)},
aVD(d){return $.aJF().i(0,d)},
jg:function jg(d,e){this.a=d
this.b=e},
kq:function kq(d,e){this.a=d
this.b=e},
kr:function kr(d,e){this.a=d
this.b=e},
a0B(d){var w=0,v=B.S(x.I),u,t
var $async$a0B=B.O(function(e,f){if(e===1)return B.P(f,v)
while(true)switch(w){case 0:$.h3.toString
w=4
return B.L($.ac().j1(d,!1,null,null),$async$a0B)
case 4:w=3
return B.L(f.hJ(),$async$a0B)
case 3:t=f
u=t.gfm(t)
w=1
break
case 1:return B.Q(u,v)}})
return B.R($async$a0B,v)}},B,C,J,D,E,F,G
A=a.updateHolder(c[5],A)
B=c[0]
C=c[2]
J=c[1]
D=c[18]
E=c[10]
F=c[12]
G=c[17]
A.IN.prototype={}
A.aa_.prototype={}
A.a9Z.prototype={
gq(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gakb(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
i(d,e){return this.a[this.b+e]},
V_(){return this.a[this.b++]},
A4(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.acQ.prototype={}
A.acP.prototype={
Ii(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.Ct(v-t)
C.D.cn(u,w,v,d)
s.a+=r},
anI(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.Ct(v-t)}C.D.b_(u,w,w+d.gq(d),d.a,d.b)
s.a=s.a+d.gq(d)},
Js(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.c6(w.c.buffer,d,e-d)},
Jr(d){return this.Js(d,null)},
Ct(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.D.cn(t,0,u,v)
this.c=t},
a4K(){return this.Ct(null)},
gq(d){return this.a}}
A.a91.prototype={
a1g(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.l7(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.a9K.prototype={
a8B(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.ab4())break}},
ab4(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gakb())return!1
w=v.hT(3)
switch(C.e.cF(w,1)){case 0:if(v.abd()===-1)return!1
break
case 1:if(v.LD(v.r,v.w)===-1)return!1
break
case 2:if(v.ab7()===-1)return!1
break
default:return!1}return(w&1)===0},
hT(d){var w,v,u,t,s=this
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
u=C.e.t2(1,d)
s.d=C.e.t4(w,d)
s.e=v-d
return(w&u-1)>>>0},
DI(d){var w,v,u,t,s,r,q,p=this,o=d.a
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
p.d=C.e.t4(v,q)
p.e=u-q
return r&65535},
abd(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.hT(16)
v=p.hT(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&B.c()
if(w>v.gq(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&B.c()
r=s-(t-u)}else r=w
q=A.aDa(v.a,v.d,r,t)
v.b=v.b+q.gq(q)
p.c.anI(q)
return 0},
ab7(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.hT(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.hT(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.hT(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.hT(3)
if(s===-1)return-1
u[D.Gu[t]]=s}r=A.Md(u)
q=l+w
p=new Uint8Array(q)
o=B.c6(p.buffer,0,l)
n=B.c6(p.buffer,l,w)
if(m.a3T(q,r,p)===-1)return-1
return m.LD(A.Md(o),A.Md(n))},
LD(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.DI(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a4K()
w.c[w.a++]=v&255
continue}u=v-257
t=D.GG[u]+p.hT(D.G3[u])
s=p.DI(e)
if(s<0||s>29)return-1
r=D.G7[s]+p.hT(D.Gw[s])
for(q=-r;t>r;){w.Ii(w.Jr(q))
t-=r}if(t===r)w.Ii(w.Jr(q))
else w.Ii(w.Js(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a3T(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.DI(e)
if(u===-1)return-1
switch(u){case 16:t=q.hT(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.hT(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.hT(7)
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
A.dH.prototype={
S(d,e){var w=A.A8(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dH(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
a5(d,e){var w=A.A8(e)
return A.aa3(this.a,this.b,this.c,w.a,w.b,w.c)},
ae(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.A8(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
return new A.dH(k&4194303,j&4194303,(n>>>18)+(m>>>5)+((l&4095)<<8)+(j>>>22)&1048575)},
Wr(d,e){var w=A.A8(e)
return new A.dH(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
Je(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.F0:D.F_
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.A9(w,e)
if(v)u|=~C.e.t4(o,e)&1048575
t=p.b
s=22-e
r=A.A9(t,e)|C.e.l7(w,s)
q=A.A9(p.a,e)|C.e.l7(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.A9(w,t)
if(v)r|=~C.e.xv(n,t)&4194303
q=A.A9(p.b,t)|C.e.l7(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.A9(w,t)
if(v)q|=~C.e.xv(n,t)&4194303}return new A.dH(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dH)w=e
else if(B.jy(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.aa2(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
bg(d,e){return this.a3h(e)},
a3h(d){var w=A.A8(d),v=this.c,u=v>>>19,t=w.c
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
gB(d){var w=this.b
return(((w&1023)<<22|this.a)^(this.c<<12|w>>>10&4095))>>>0},
j(d){var w,v,u,t=this.a,s=this.b,r=this.c
if((r&524288)!==0){t=0-t
w=t&4194303
s=0-s-(C.e.cF(t,22)&1)
v=s&4194303
r=0-r-(C.e.cF(s,22)&1)&1048575
s=v
t=w
u="-"}else u=""
return A.aSV(10,t,s,r,u)},
$icq:1}
A.q3.prototype={
a8(){return new A.Vu(C.i)}}
A.Vu.prototype={
I(d){var w=null,v=x.D
return B.m7(C.cm,B.b([new B.e0(C.w,w,w,E.aD4("md/live.jpg",w,w,w,w),w),new B.e0(C.cn,w,w,B.ff(B.ho(B.b([C.bZ,B.n5(D.Tj,new A.app(this,d),w),C.bZ,B.n5(D.Tb,new A.apq(this,d),w)],v),C.a6,C.ff,C.a3),w,300),w)],v),C.Q,C.bQ)},
Xs(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.lJ(new A.apu(v),!1)
u=B.axU(d,x.u)
u.toString
w=v.d
w.toString
u.ut(0,w)},
Xp(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.lJ(new A.aps(v),!1)
u=B.axU(d,x.u)
u.toString
w=v.d
w.toString
u.ut(0,w)}}
A.o3.prototype={
a8(){return new A.YU(null,null,C.i)},
aih(){return this.c.$0()}}
A.YU.prototype={
av(){var w,v=this,u=null
v.aJ()
w=new A.PK(0,1,u,C.em,C.o,u,C.a8,C.E,new B.aS(B.b([],x.F),x.V),new B.aS(B.b([],x.b),x.R))
w.Ko(C.em,u,C.o,0,u,1,u,v)
v.d=w
v.zu()},
n(){this.a12()
var w=this.d
w===$&&B.c()
w.sIe(null)
w.CW=!0
w.Yb()},
I(d){var w=this.d
w===$&&B.c()
return new A.Cr(w,null)},
zu(){var w=0,v=B.S(x.z),u=this,t,s
var $async$zu=B.O(function(d,e){if(d===1)return B.P(e,v)
while(true)switch(w){case 0:w=2
return B.L(D.Ar.yA(u.a.d),$async$zu)
case 2:t=e
s=u.d
s===$&&B.c()
s.sIe(t)
u.d.Yc(0,null).a.a.h2(new A.asy(u))
return B.Q(null,v)}})
return B.R($async$zu,v)}}
A.HT.prototype={
n(){var w=this,v=w.bx$
if(v!=null)v.K(0,w.gfE())
w.bx$=null
w.aG()},
bA(){this.cM()
this.cw()
this.fF()}}
A.amO.prototype={
J(){return"_DashOffsetType."+this.b}}
A.Kj.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Kj&&e.a===this.a&&!0},
gB(d){return B.U(this.a,D.UW,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Ju.prototype={}
A.a2n.prototype={
th(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.Bv(e===0?new A.cY("<removed field>",0,v,0,w,w,w,w,x.q):A.aS4(f,e,v,g,w,h,k,l,i,j,m))},
Ql(d,e,f,g,h,i,j,k,l){return this.th(d,e,f,g,h,i,j,k,null,l)},
Bv(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fe(d,e,f,g,h,i){var w=null
this.th(0,e,f,g,w,w,w,w,h,i)},
dg(d,e,f,g,h){return this.fe(d,e,f,g,null,h)},
tg(d,e,f){var w=null
this.th(0,d,e,64,w,w,w,w,f,x.N)},
Qi(d,e){return this.tg(d,e,null)},
FW(d,e,f,g,h,i,j,k,l){this.th(0,e,f,g,h,null,k,i,j,l)},
ahS(d,e,f,g,h,i,j,k){return this.FW(d,e,f,g,h,i,null,j,k)},
zV(d,e,f,g,h,i){var w=null
this.Bv(A.aS5(f,e,this.b.length,g,A.aAa(),h,w,w,w,w,i))},
jp(d,e,f,g){this.th(0,d,e,2097152,A.aSs(f,g).ga5a(),f,null,null,null,g)},
alp(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gw_(){var w=this.x
return w==null?this.x=this.a3r():w},
a3r(){var w=this.c
w=B.eK(w.gaE(w),!1,x.q)
C.b.ef(w,new A.a2o())
return w},
a3U(d,e,f){var w=this.c.i(0,d),v=w==null?null:w.z
return(v==null&&!0?null.ganw():v).$1(f)}}
A.JQ.prototype={
BP(d){var w=this.b+=d
if(w>this.c)throw B.d(A.k3())},
V0(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.axH())
w.e=v+1
e.Ua(w,f)
if(w.d!==(d<<3|4)>>>0)B.T(A.Mr());--w.e},
V2(d,e){var w,v,u=this,t=u.fb(!0),s=u.e
if(s>=64)throw B.d(A.axH())
if(t<0)throw B.d(B.bK(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.k3())
u.e=s+1
d.Ua(u,e)
if(u.d!==0)B.T(A.Mr());--u.e
u.c=w},
ama(){return this.fb(!0)},
amc(){return this.mH()},
A4(){return this.fb(!1)},
amp(){return this.mH()},
amk(){return A.aBP(this.fb(!1))},
amm(){var w=this.mH(),v=A.A8(1),u=w.a,t=w.b,s=w.c
return(new A.dH(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.aa3(0,0,0,u,t,s):w).Je(0,1)},
am3(){return this.oM(4).getUint32(0,!0)},
am5(){return this.HL()},
amh(){return this.oM(4).getInt32(0,!0)},
HL(){var w=this.oM(8),v=B.c6(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dH((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
alZ(){return this.fb(!0)!==0},
va(){var w,v=this,u=v.fb(!0)
v.BP(u)
w=v.a
return B.c6(w.buffer,w.byteOffset+v.b-u,u)},
am7(){return this.oM(4).getFloat32(0,!0)},
am0(){return this.oM(8).getFloat64(0,!0)},
V4(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.fb(!1)
if(C.e.cF(w,3)===0)throw B.d(new A.lr("Protocol message contained an invalid tag (zero)."))
return w},
abQ(){this.BP(1)
return this.a[this.b-1]},
fb(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.t2(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aDd())},
mH(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.T(A.k3())
s=w[t-1]
v=(v|C.e.t2(s&127,u*7))>>>0
if((s&128)===0)return A.axG(0,v)}s=q.abQ()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.axG(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.T(A.k3())
s=w[t-1]
r=(r|C.e.t2(s&127,u*7+3))>>>0
if((s&128)===0)return A.axG(r,v)}throw B.d(A.aDd())},
oM(d){var w
this.BP(d)
w=this.a
return B.nF(w.buffer,w.byteOffset+this.b-d,d)}}
A.lr.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibU:1}
A.ank.prototype={
aeE(d){var w
d.gao3()
w=this.a
w.a.gby()
w=B.bK("Extension "+B.k(d)+" not legal for message "+w.ga9B(),null)
throw B.d(w)},
ad5(d,e){var w,v=this.a.e
if(v!=null){w=d.gkU()
if(v.b)A.hZ("UnknownFieldSet","clearField")
v.a.A(0,w)}this.c.m(0,d.gkU(),e)},
hg(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaE(w),w=new B.cN(J.ad(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gakj()){q=u.i(0,r.gkU())
if(q==null)continue
if(r.gakc())for(p=J.ad(s.a(q));p.t();)p.gF(p).a.hg()
u.m(0,r.gkU(),q.vk())}else if(r.gakc()){o=u.i(0,r.gkU())
if(o!=null)t.a(o).a.hg()}}}}
A.anf.prototype={}
A.cY.prototype={
a1d(d,e,f,g,h,i,j,k,l,m,n){B.i3(this.b,"name")
B.i3(this.d,"tagNumber")},
gV5(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pu(B.b([],w.h("t<cY.T>")),A.aAa(),w.h("pu<cY.T>"))}return w}return v.r.$0()},
MQ(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.rI()
w=J.as(d)
if(w.gZ(d))return!0
if(!w.i(d,0).a.a.gby().w)return!0
return w.iV(d,new A.a6b())},
j(d){return this.b}}
A.q6.prototype={}
A.U5.prototype={
ga9B(){return this.a.gby().a},
Co(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.ank(this,B.j(w,x.G),B.j(w,x.z))}return w},
rA(){var w=this.e
if(w==null){w=this.f
if(!B.eA(w)||w)return $.aK2()
w=this.e=new A.kz(B.j(x.S,x.k))}return w},
hg(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f
if(!B.eA(k)||k)return
l.f=!0
for(k=l.a.gby().gw_(),w=k.length,v=l.c,u=x.J,t=x.d,s=0;s<w;++s){r=k[s]
q=r.f
if((q&2)!==0){p=r.e
o=v[p]
if(o==null)continue
if((q&2098176)!==0)for(q=J.ad(t.a(o));q.t();)q.gF(q).a.hg()
v[p]=o.vk()}else if((q&4194304)!==0){q=r.e
n=v[q]
if(n==null)continue
v[q]=n.aiw()}else if((q&2098176)!==0){m=v[r.e]
if(m!=null)u.a(m).a.hg()}}if(l.d!=null)l.Co().hg()
if(l.e!=null)l.rA().hg()},
a5k(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eA(w)||w)return d.gV5()
w=this.a
v=w.Fp(d.d,d,B.p(d).h("cY.T"))
this.mM(w.gby(),d,v)
return v},
a5l(d,e){var w,v=this.f
if(!B.eA(v)||v)return d.gV5()
v=this.a
v.toString
w=v.Fp(d.d,e.h("cY<0>").a(d),e)
this.mM(v.gby(),d,w)
return w},
a5m(d,e,f){var w,v,u=this.f
if(!B.eA(u)||u)return new A.fc(d.as,d.at,B.a3B(B.j(e,f),e,f),!1,e.h("@<0>").ab(f).h("fc<1,2>"))
u=this.a
w=d.$ti
v=u.RB(d.d,d,w.c,w.z[1])
this.mM(u.gby(),d,v)
return v},
wD(d){var w=this.c[d.e]
return w},
a3a(d){var w,v,u,t,s,r=this,q=r.f
if(!B.eA(q)||q)A.aw5().$1(r.a.gby().a)
w=r.a.gby()
v=w.c.i(0,d)
if(v!=null){r.c[v.e]=null
q=w.f
u=v.d
if(q.a4(0,u)){t=r.r
t.toString
t.A(0,q.i(0,u))}s=q.i(0,u)
if(s!=null)r.r.m(0,s,0)
return}q=r.d
if(q!=null)q.b.i(0,d)},
eh(d,e,f){B.i3(e,"fi")
this.mM(d,e,f)},
mz(d,e,f){var w,v=this.wD(e)
if(v!=null)return f.h("z<0>").a(v)
w=this.a.Fp(e.d,e,B.p(e).h("cY.T"))
this.mM(d,e,w)
return w},
M2(d,e,f,g){var w,v,u=this.wD(e)
if(u!=null)return f.h("@<0>").ab(g).h("fc<1,2>").a(u)
w=e.$ti
v=this.a.RB(e.d,e,w.c,w.z[1])
this.mM(d,e,v)
return f.h("@<0>").ab(g).h("fc<1,2>").a(v)},
mM(d,e,f){var w,v=e.d,u=d.f.i(0,v)
if(u!=null){w=this.r
this.a3a(w.i(0,u))
w.m(0,u,v)}this.c[e.e]=f},
ac(d){var w=this.c[d]
if(w!=null)return w
return this.a5k(this.a.gby().b[d])},
oq(d,e){var w=this.c[d]
if(w!=null)return e.h("z<0>").a(w)
return this.a5l(e.h("cY<0>").a(this.a.gby().b[d]),e)},
a1w(d,e,f,g){var w=this.c[e]
if(w!=null)return f.h("@<0>").ab(g).h("aI<1,2>").a(w)
return this.a5m(f.h("@<0>").ab(g).h("q6<1,2>").a(this.a.gby().b[e]),f,g)},
wd(d){var w=this.c[d]
if(w==null)return 0
return w},
Bs(d){var w=this.c[d]
if(w==null)return""
return w},
rb(d){var w=this.c[d]
if(w==null)return!1
if(x.j.b(w))return J.jC(w)
return!0},
a4B(d){var w,v,u,t=this
if(t.a.gby()!==d.a.gby())return!1
for(w=t.c,v=d.c,u=0;u<w.length;++u)if(!t.a4A(w[u],v[u]))return!1
w=t.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.azm(w.c,v.c)))return!1}w=t.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a4A(d,e){var w,v=d==null
if(!v&&e!=null)return A.azr(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.dZ(w))return!0
if(x.f.b(w)&&J.dZ(w))return!0
return!1},
ga8r(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jy(n)?n:null)!=null
if(n){n=o.f
n=B.jy(n)?n:null
n.toString
return n}n=o.a
w=A.mo(0,B.fD(n.gby()))
v=o.c
for(n=n.gby().gw_(),u=n.length,t=0;t<u;++t){s=n[t]
r=v[s.e]
if(r==null)continue
w=A.aFA(w,s,r)}n=o.d
if(n!=null){u=n.c
q=A.aHb(new B.bd(u,B.p(u).h("bd<1>")),x.S)
for(p=q.length,n=n.b,t=0;t<q.length;q.length===p||(0,B.J)(q),++t){s=n.i(0,q[t])
w=A.aFA(w,s,u.i(0,s.gkU()))}}n=o.e
n=n==null?null:n.gB(n)
w=A.mo(w,n==null?0:n)
n=o.f
if((!B.eA(n)||n)&&!0)o.f=w
return w},
Wn(d,e){var w,v,u,t,s,r,q,p=this,o=new A.ans(new A.anr(d,e))
for(w=p.a.gby().gw_(),v=w.length,u=p.c,t=0;t<v;++t){s=w[t]
r=u[s.e]
q=s.b
o.$2(r,q===""?C.e.j(s.d):q)}w=p.d
if(w!=null){w=w.b
v=B.p(w).h("bd<1>")
v=B.an(new B.bd(w,v),!0,v.h("q.E"))
C.b.hM(v)
C.b.N(v,new A.anq(p,o))}w=p.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kz(B.j(x.S,x.k)).DF("")},
a9A(d){var w,v,u,t,s,r,q
for(w=d.a.gby().gw_(),v=w.length,u=d.c,t=0;t<v;++t){s=w[t]
r=u[s.e]
if(r!=null)this.No(s,r,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fB(v,v.r),w=w.b;u.t();){q=w.i(0,u.d)
this.No(q,v.i(0,q.gkU()),!0)}if(d.e!=null){w=this.rA()
v=d.e
v.toString
w.al4(v)}},
No(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.a.gby(),j=k.c.i(0,d.d)
if(j==null&&f)j=d
w=(d.f&2098176)!==0
v=j.f
if((v&4194304)!==0){x.T.a(j)
v=j.$ti
u=l.M2(k,j,v.c,v.z[1])
if((j.at&2098176)!==0)for(v=J.ad(J.a14(e)),t=u.c,s=x.J;v.t();){r=v.gF(v)
q=r.a
r=s.a(r.b)
p=s.a(r.gby().Q.$0())
p.kL(r)
if(u.d)B.T(B.V(y.a))
if(q==null)B.T(B.bK("Can't add a null to a map field",null))
t.m(0,q,p)}else u.H(u,e)
return}if((v&2)!==0){v=B.p(j).h("cY.T")
if(w){o=l.mz(k,j,v)
for(v=e.a,t=x.J,s=J.bB(o),n=0;n<v.length;++n){r=v[n]
q=t.a(r.gby().Q.$0())
q.kL(r)
s.D(o,q)}}else J.jB(l.mz(k,j,v),e)
return}if(w){m=f?l.Co().c.i(0,x.G.a(j).gkU()):l.c[j.e]
if(m==null){v=x.J
e=A.aSr(v.a(e),v)}else{m.kL(e)
e=m}}if(f){v=l.Co()
x.G.a(j)
if(v.d)A.aw5().$1(v.a.a.gby().a)
if(j.gakj())B.T(B.bK(v.a.OK(j,e,"repeating field (use get + .add())"),null))
if(v.d)A.aw5().$1(v.a.a.gby().a)
v.aeE(j)
v.a.Qa(j,e)
v.b.m(0,j.gkU(),j)
v.ad5(j,e)}else{l.Qa(j,e)
l.mM(k,j,e)}},
Qa(d,e){var w,v=this.f
if(!B.eA(v)||v)A.aw5().$1(this.a.gby().a)
w=A.aZb(d.f,e)
if(w!=null)throw B.d(B.bK(this.OK(d,e,w),null))},
OK(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gby().a+" to value ("+B.k(e)+"): "+f},
rI(){var w,v,u,t=this.a
if(!t.gby().w)return!0
for(t=t.gby().c,t=t.gaE(t),t=new B.cN(J.ad(t.a),t.b),w=this.c,v=B.p(t).z[1];t.t();){u=t.a
if(u==null)u=v.a(u)
if(!u.MQ(w[u.e]))return!1}return this.a8p()},
a8p(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaE(u),u=new B.cN(J.ad(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.MQ(this.d.c.i(0,v.gkU())))return!1}return!0}}
A.cU.prototype={
ha(){this.a=A.aX7(this,this.gby(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cU){w=this.a
w.toString
v=e.a
v.toString
v=w.a4B(v)
w=v}else w=!1
return w},
gB(d){return this.a.ga8r()},
j(d){var w,v=new B.c2("")
this.a.Wn(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
Ua(d,e){var w=this.a.a.gby(),v=this.a
v.toString
A.azE(w,v,d,e)},
Fp(d,e,f){var w=e.Q
w.toString
return A.aDZ(w,f)},
RB(d,e,f,g){return new A.fc(e.as,e.at,B.j(f,g),!1,f.h("@<0>").ab(g).h("fc<1,2>"))},
kL(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.a9A(w)},
Wq(d,e,f){return this.a.a1w(this,d,e,f)}}
A.GH.prototype={
ga5a(){var w=this.c
if(w===$){w!==$&&B.aC()
w=this.c=new A.aso(this)}return w}}
A.NP.prototype={}
A.pu.prototype={
hZ(d){return new B.DY("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.T(this.hZ("set"))},
sq(d,e){B.T(this.hZ("set length"))},
dV(d,e,f){return B.T(this.hZ("setAll"))},
D(d,e){return B.T(this.hZ("add"))},
H(d,e){return B.T(this.hZ("addAll"))},
dF(d,e,f){return B.T(this.hZ("insert"))},
er(d,e,f){return B.T(this.hZ("insertAll"))},
A(d,e){return B.T(this.hZ("remove"))},
c3(d,e){return B.T(this.hZ("removeAt"))},
dm(d){return B.T(this.hZ("removeLast"))},
b_(d,e,f,g,h){return B.T(this.hZ("setRange"))},
cn(d,e,f,g){return this.b_(d,e,f,g,0)},
dJ(d,e,f){return B.T(this.hZ("removeRange"))}}
A.uL.prototype={
vk(){return new A.pu(this.a,A.aAa(),this.$ti.h("pu<1>"))},
D(d,e){this.b.$1(e)
this.a.push(e)},
H(d,e){J.f5(e,this.b)
C.b.H(this.a,e)},
dF(d,e,f){this.b.$1(f)
C.b.dF(this.a,e,f)},
er(d,e,f){J.f5(f,this.b)
C.b.er(this.a,e,f)},
dV(d,e,f){J.f5(f,this.b)
C.b.dV(this.a,e,f)},
A(d,e){return C.b.A(this.a,e)},
c3(d,e){return C.b.c3(this.a,e)},
dm(d){return this.a.pop()},
b_(d,e,f,g,h){J.Iu(g,h).jV(0,f-e).N(0,this.b)
C.b.b_(this.a,e,f,g,h)},
cn(d,e,f,g){return this.b_(d,e,f,g,0)},
dJ(d,e,f){return C.b.dJ(this.a,e,f)}}
A.nM.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.nM&&A.x9(e,this)},
gB(d){return A.az2(this.a)},
ga_(d){var w=this.a
return new J.hj(w,w.length)},
dl(d,e,f){var w=this.a
return new B.a6(w,e,B.a7(w).h("@<1>").ab(f).h("a6<1,2>"))},
f3(d,e){return this.dl(d,e,x.z)},
p(d,e){return C.b.p(this.a,e)},
N(d,e){C.b.N(this.a,e)},
hw(d,e,f){return C.b.ij(this.a,e,f)},
ij(d,e,f){return this.hw(d,e,f,x.z)},
iV(d,e){return C.b.iV(this.a,e)},
bn(d,e){return C.b.bn(this.a,e)},
nF(d){return this.bn(d,"")},
e4(d,e){return C.b.e4(this.a,e)},
dK(d,e){var w=this.a,v=B.a7(w)
return e?B.b(w.slice(0),v):J.pP(w.slice(0),v.c)},
dS(d){return this.dK(d,!0)},
hH(d){var w=this.a
return B.k6(w,B.a7(w).c)},
gZ(d){return this.a.length===0},
gbF(d){return this.a.length!==0},
jV(d,e){var w=this.a
return B.eb(w,0,B.dA(e,"count",x.S),B.a7(w).c)},
iE(d,e){var w=this.a
return B.eb(w,e,null,B.a7(w).c)},
gL(d){return C.b.gL(this.a)},
gO(d){return C.b.gO(this.a)},
b0(d,e){return this.a[e]},
j(d){return B.pO(this.a,"[","]")},
i(d,e){return this.a[e]},
gq(d){return this.a.length},
bI(d,e,f){return C.b.bI(this.a,e,f)},
dZ(d,e){return this.bI(d,e,null)},
qO(d,e,f){var w=this.a
B.d1(e,f,w.length,null,null)
return B.eb(w,e,f,B.a7(w).c)},
m(d,e,f){this.b.$1(f)
this.a[e]=f},
sq(d,e){var w=this.a
if(e>w.length)throw B.d(B.V("Extending protobuf lists is not supported"))
C.b.sq(w,e)}}
A.fc.prototype={
i(d,e){return this.c.i(0,e)},
m(d,e,f){var w="Can't add a null to a map field"
if(this.d)throw B.d(B.V(y.a))
if(e==null)B.T(B.bK(w,null))
if(f==null)B.T(B.bK(w,null))
this.c.m(0,e,f)},
k(d,e){var w,v,u,t,s=this
if(e==null)return!1
if(e===s)return!0
if(!(e instanceof A.fc))return!1
if(J.aU(e.gbd(e))!==J.aU(s.gbd(s)))return!1
for(w=s.c,v=J.ad(w.gbd(w)),u=e.c;v.t();){t=v.gF(v)
if(!J.f(u.i(0,t),w.i(0,t)))return!1}return!0},
gB(d){var w=this.c
w=w.gdu(w)
return w.ij(w,0,new A.adf(this))},
gbd(d){var w=this.c
return w.gbd(w)},
A(d,e){if(this.d)throw B.d(B.V(y.a))
return this.c.A(0,e)},
aiw(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.ry(t,w.h("@<ax.K>").ab(w.h("ax.V")).h("ry<1,2>"))),w=new B.Fq(J.ad(t.gbd(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.hg()}return t}}
A.OL.prototype={
gB(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kz.prototype={
U9(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.hZ(s,"mergeFieldFromBuffer")
w=C.e.cF(d,3)
switch(d&7){case 0:v=e.mH()
if(t.b)A.hZ(s,"mergeVarintField")
C.b.D(t.li(w).b,v)
return!0
case 1:v=e.HL()
if(t.b)A.hZ(s,"mergeFixed64Field")
C.b.D(t.li(w).d,v)
return!0
case 2:v=e.va()
if(t.b)A.hZ(s,"mergeLengthDelimitedField")
C.b.D(t.li(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.T(A.axH())
e.e=v+1
u=new A.kz(B.j(x.S,x.k))
u.al3(e)
if(e.d!==(w<<3|4)>>>0)B.T(A.Mr());--e.e
if(t.b)A.hZ(s,"mergeGroupField")
C.b.D(t.li(w).e,u)
return!0
case 4:return!1
case 5:v=e.oM(4).getUint32(0,!0)
if(t.b)A.hZ(s,"mergeFixed32Field")
C.b.D(t.li(w).c,v)
return!0
default:throw B.d(new A.lr("Protocol message tag had invalid wire type."))}},
al3(d){var w
if(this.b)A.hZ("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.V4()
if(w===0||!this.U9(w,d))break}},
al4(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.hZ(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fB(w,w.r);v.t();){u=v.d
t=w.i(0,u)
t.toString
if(this.b)A.hZ(s,"mergeField")
u=this.li(u)
C.b.H(u.b,t.b)
C.b.H(u.c,t.c)
C.b.H(u.d,t.d)
C.b.H(u.a,t.a)
C.b.H(u.e,t.e)}},
li(d){if(d===0)B.T(B.bK("Zero is not a valid field number.",null))
return this.a.bz(0,d,new A.ak8())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kz))return!1
return A.azm(e.a,this.a)},
gB(d){var w={}
w.a=0
this.a.N(0,new A.ak9(w))
return w.a},
j(d){return this.DF("")},
DF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.c2("")
for(w=this.a,v=A.aHb(new B.bd(w,B.p(w).h("bd<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
p=w.i(0,q)
p.toString
for(p=p.gaE(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(m instanceof A.kz){l=k.a+=d+B.k(q)+": {\n"
l+=m.DF(t)
k.a=l
k.a=l+s}else k.a+=d+B.k(q)+": "+B.k(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
hg(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaE(w),w=new B.cN(J.ad(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).hg()}this.b=!0}}
A.rg.prototype={
hg(){var w,v=this
if(v.f)return
v.f=!0
v.a=B.hC(v.a,x.L)
w=x.w
v.b=B.hC(v.b,w)
v.c=B.hC(v.c,x.S)
v.d=B.hC(v.d,w)
v.e=B.hC(v.e,x.B)},
k(d,e){var w,v,u=this
if(e==null)return!1
if(!(e instanceof A.rg))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.x9(e.a[w],v[w]))return!1
if(!A.x9(e.b,u.b))return!1
if(!A.x9(e.c,u.c))return!1
if(!A.x9(e.d,u.d))return!1
if(!A.x9(e.e,u.e))return!1
return!0},
gB(d){var w,v,u,t,s,r,q,p=this
for(w=p.a,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
for(r=J.as(s),q=0;q<r.gq(s);++q){u=u+r.i(s,q)&536870911
u=u+((u&524287)<<10)&536870911
u^=u>>>6}u=u+((u&67108863)<<3)&536870911
u^=u>>>11
u=u+((u&16383)<<15)&536870911}for(w=p.b,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+7*J.y(w[t])&536870911
for(w=p.c,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+37*J.y(w[t])&536870911
for(w=p.d,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+53*J.y(w[t])&536870911
for(w=p.e,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t)u=u+J.y(w[t])&536870911
return u},
gaE(d){var w=this,v=B.an(w.a,!0,x.z)
C.b.H(v,w.b)
C.b.H(v,w.c)
C.b.H(v,w.d)
C.b.H(v,w.e)
return v},
gq(d){return this.gaE(this).length}}
A.afA.prototype={}
A.afB.prototype={
yA(d){return this.ahh(d)},
ahh(d){var w=0,v=B.S(x.H),u,t=this,s
var $async$yA=B.O(function(e,f){if(e===1)return B.P(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.L($.rP().fT(0,d),$async$yA)
case 3:u=t.ahi(s.c6(f.buffer,0,null))
w=1
break
case 1:return B.Q(u,v)}})
return B.R($async$yA,v)},
ahi(d){var w,v,u,t,s,r,q,p=A.aDa(d,1,null,0),o=p.V_(),n=p.V_(),m=o&8
C.e.cF(o,3)
if(m!==8)B.T(A.awK("Only DEFLATE compression supported: "+m))
if(C.e.bN((o<<8>>>0)+n,31)!==0)B.T(A.awK("Invalid FCHECK"))
if((n>>>5&1)!==0){p.A4()
B.T(A.awK("FDICT Encoding not currently supported"))}w=A.Md(D.G4)
v=A.Md(D.Gv)
u=new A.acP(new Uint8Array(32768))
v=new A.a9K(p,u,w,v)
v.b=!0
v.a8B()
t=x.L.a(B.c6(u.c.buffer,0,u.a))
p.A4()
s=A.aDC()
p=Math.min(67108864,t.length)
r=new A.JQ(t,p)
r.c=p
q=s.a.a.gby()
p=s.a
p.toString
A.azE(q,p,r,D.AO)
if(r.d!==0)B.T(A.Mr())
return this.abG(this.abJ(s),null).h2(new A.afG(null))},
abJ(d){J.f5(d.a.oq(3,x.m),new A.afF())
return d},
abG(d,e){var w=d.Wq(2,x.N,x.L),v=J.as(w)
if(v.gZ(w))return B.c9(d,x.H)
v=v.gdu(w)
return B.lj(v.dl(v,new A.afC(this,e,d),x.K),x.P).bo(new A.afD(d),x.H)},
wt(d,e,f){return this.a3V(d,e,f)},
a3V(d,e,f){var w=0,v=B.S(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$wt=B.O(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.L(A.a0B(e),$async$wt)
case 7:r=h
if(m!=null){o=x.z
J.aBb(m,B.l(["imageSize",""+J.aP9(r)+"x"+J.aP3(r)],o,o))}u=r
w=1
break
t=2
w=6
break
case 4:t=3
l=s
q=B.ag(l)
p=B.aL(l)
if(m!=null){o=x.z
J.aBb(m,B.l(["error",B.k(q),"stack",B.k(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.Q(u,v)
case 2:return B.P(s,v)}})
return B.R($async$wt,v)}}
A.XV.prototype={
aD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.gZ(e)||j.ay==null)return
j=j.ay.a.ac(1)
w=new B.M(j.a.ac(0),j.a.ac(1))
if(J.dZ(w))return
d.cf(0)
try{v=new B.D(0,0,0+e.a,0+e.b)
if(k.e)d.kp(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=F.aHk(k.b,new B.M(t,u),new B.M(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.M(t*o,u*n).de(0,2)
l=new B.M(s,j).de(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.az(0,j,s)
if(o!==1&&n!==1)d.dU(0,o,n)
k.ahP(d,e)}finally{d.c_(0)}},
ahP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.ad(w.ay.a.oq(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gF(v)
q=r.a.Bs(0)
if(q.length!==0){w.ay.c.a.i(0,q)
p=!1}else p=!0
if(p)continue
o=J.aQ(r.a.oq(1,u),w.gahb())
n=o.a.rb(2)
m=o.a.rb(3)
if(n){d.cf(0)
d.a6(0,new Float64Array(B.fq(B.b([o.a.ac(2).a.ac(0),o.a.ac(2).a.ac(1),0,0,o.a.ac(2).a.ac(2),o.a.ac(2).a.ac(3),0,0,0,0,1,0,o.a.ac(2).a.ac(4),o.a.ac(2).a.ac(5),0,1],t))))}if(m){d.cf(0)
d.i7(0,k.afF(o.a.Bs(3)))}r=o.a.ac(1).a.ac(2)
p=o.a.ac(1).a.ac(3)
l=o.a.rb(0)?C.c.V(o.a.ac(0)*255):255
k.ahN(d,q,new B.D(0,0,r,p),l)
r=o.b
k.ahO(d,r==null?o.a.oq(4,s):r,l)
w.ay.c.d.i(0,q)
if(m)d.c_(0)
if(n)d.c_(0)}},
ahN(d,e,f,g){var w,v,u=this.c
u.ay.c.b.i(0,e)
w=u.ay.d.i(0,e)
if(w==null)return
v=$.ac().bc()
v.slR(this.d)
v.sqb(!0)
v.saj(0,B.a_(g,0,0,0))
d.jz(w,new B.D(0,0,w.gcv(w),w.gcm(w)),f,v)
this.ahQ(d,e,f,g)},
ahO(d,e,f){var w,v,u,t,s,r,q,p=J.as(e)
if(p.gZ(e))return
for(p=p.ga_(e),w=x.n;p.t();){v=p.gF(p)
u=this.afK(v)
if(v.a.rb(5)){d.cf(0)
d.a6(0,new Float64Array(B.fq(B.b([v.a.ac(5).a.ac(0),v.a.ac(5).a.ac(1),0,0,v.a.ac(5).a.ac(2),v.a.ac(5).a.ac(3),0,0,0,0,1,0,v.a.ac(5).a.ac(4),v.a.ac(5).a.ac(5),0,1],w))))}t=v.a.ac(4).a.ac(0)
if(t.a.rI()){s=$.ac().bc()
s.sqb(!0)
s.sa7(0,C.aE)
s.saj(0,B.a_(C.c.V(t.a.ac(3)*f),C.c.V(t.a.ac(0)*255),C.c.V(t.a.ac(1)*255),C.c.V(t.a.ac(2)*255)))
d.cQ(u,s)}t=v.a.ac(4).a.ac(2)
if(t>0){s=$.ac().bc()
s.sa7(0,C.S)
if(v.a.ac(4).a.ac(1).a.rI())s.saj(0,B.a_(C.c.V(v.a.ac(4).a.ac(1).a.ac(3)*f),C.c.V(v.a.ac(4).a.ac(1).a.ac(0)*255),C.c.V(v.a.ac(4).a.ac(1).a.ac(1)*255),C.c.V(v.a.ac(4).a.ac(1).a.ac(2)*255)))
s.sf8(t)
switch(v.a.ac(4).a.ac(3)){case D.jm:s.sml(C.bR)
break
case D.xj:s.sml(C.jx)
break
case D.xk:s.sml(C.xX)
break}switch(v.a.ac(4).a.ac(4)){case D.jn:s.sog(C.e8)
break
case D.xl:s.sog(C.jy)
break
case D.xm:s.sog(C.O3)
break}s.sJo(v.a.ac(4).a.ac(5))
r=[v.a.ac(4).a.ac(6),v.a.ac(4).a.ac(7),v.a.ac(4).a.ac(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cQ(A.b_P(u,new A.Ju(B.b([t,q<0.1?0.1:q],w)),new A.Kj(r[2])),s)}else d.cQ(u,s)}if(v.a.rb(5))d.c_(0)}},
afK(d){var w,v,u,t,s,r,q,p=$.ac().bY()
if(d.a.ac(0)===D.jo)return this.QT(d.a.ac(1).a.Bs(0),p)
else if(d.a.ac(0)===D.xo){w=d.a.ac(3)
v=w.a.ac(0)
u=w.a.ac(1)
t=w.a.ac(2)
w=w.a.ac(3)
v-=t
u-=w
s=new B.D(v,u,v+t*2,u+w*2)
if(!s.gZ(s))p.mS(s)}else if(d.a.ac(0)===D.xn){w=d.a.ac(2)
v=w.a.ac(0)
u=w.a.ac(1)
t=w.a.ac(2)
r=w.a.ac(3)
w=w.a.ac(4)
q=B.qx(new B.D(v,u,v+t,u+r),new B.aT(w,w))
if(!q.gZ(q))p.dN(q)}return p},
QT(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.i(0,d)!=null){t=w.ay.e.i(0,d)
t.toString
return t}if(e==null)t.a=$.ac().bY()
w=B.a0J(d,B.aZ("([a-df-zA-Z])",!0,!1,!1),new A.arX(),null)
v=B.aZ(",",!0,!1,!1)
u=B.kT(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.N(B.b(u.split("|||"),x.s),new A.arY(t,this,d))
return t.a},
afF(d){return this.QT(d,null)},
ahQ(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.i(0,e)
return},
h7(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Cr.prototype={
a8(){return new A.Gm(C.i)}}
A.PK.prototype={
sIe(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.dY(0)
w=d==null
if(w)t.M(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.ac(1)
u=w.a.wd(2)
if(u===0)u=20
t.e=B.cs(0,C.c.V(w.a.wd(3)/u*1000),0)}else t.e=C.o
t.sl(0,t.a)},
gahb(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.ac(1).a.wd(3)
v=t.a.ac(1).a.wd(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.c.V(v*u)))},
M(d){this.ch=!0
if(!this.CW)this.aS()}}
A.Gm.prototype={
av(){var w,v=this
v.aJ()
w=v.a.c
v.d=w.ay
w.bi()
w=w.cd$
w.b=!0
w.a.push(v.gDB())
w=v.a.c
w.bi()
w=w.cB$
w.b=!0
w.a.push(v.gCV())},
aK(d){var w,v,u,t=this
t.aX(d)
w=d.c
if(w!==t.a.c){v=t.gDB()
w.K(0,v)
u=t.gCV()
w.cu(u)
w=t.a.c
t.d=w.ay
w.bi()
w=w.cd$
w.b=!0
w.a.push(v)
v=t.a.c
v.bi()
v=v.cB$
v.b=!0
v.a.push(u)}},
abw(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.ap(new A.arW(v))},
a80(d){var w
if(d===C.U){this.a.toString
w=!0}else w=!1
if(w)this.a.c.M(0)},
n(){var w=this
w.d=null
w.a.c.K(0,w.gDB())
w.a.c.cu(w.gCV())
w.aG()},
I(d){var w,v=null,u=this.d,t=u==null||!u.a.rI()?C.x:new B.M(u.a.ac(1).a.ac(0),u.a.ac(1).a.ac(1))
if(t.gZ(t))return C.aZ
w=this.a
w=w.c
return B.zZ(B.n2(v,v,v,new A.XV(G.zi,w,C.dn,!1,w),t),!0,v)}}
A.qb.prototype={
gby(){return $.aJo()}}
A.m6.prototype={
gby(){return $.aJM()}}
A.oV.prototype={
gby(){return $.aIO()}}
A.pU.prototype={
gby(){return $.aJl()}}
A.oc.prototype={
gby(){return $.aJS()}}
A.qW.prototype={
gby(){return $.aJD()}}
A.qV.prototype={
gby(){return $.aJC()}}
A.qU.prototype={
gby(){return $.aJB()}}
A.qY.prototype={
gby(){return $.aJG()}}
A.qX.prototype={
gby(){return $.aJH()}}
A.qT.prototype={
gby(){return $.aJJ()}}
A.li.prototype={
gby(){return $.aJ9()},
gqW(){var w=this.b
return w==null?this.a.oq(4,x.Y):w}}
A.lF.prototype={
gby(){return $.aJn()},
n(){var w=this.d
w.gaE(w).N(0,new A.acb())
w.M(0)
this.e.M(0)}}
A.jg.prototype={}
A.kq.prototype={}
A.kr.prototype={}
var z=a.updateTypes(["n()","dH()","I()","o3(Y)","B()","lF(z<ay>)","n(cY<@>,cY<@>)","B(cU)","rg()","~(m6)","~(li)","q3()","~()","~(eC)","~(H?)","~(m[m?])","m()","z<n>()","qb()","m6()","oV()","kr?(n)","oc()","qW()","qV()","qU()","qY()","qX()","qT()","li()","lF()","jg?(n)","kq?(n)","pU()"])
A.avW.prototype={
$0(){return D.Hv},
$S:z+11}
A.app.prototype={
$0(){return this.a.Xp(this.b)},
$S:0}
A.apq.prototype={
$0(){return this.a.Xs(this.b)},
$S:0}
A.apu.prototype={
$1(d){return new A.o3(new A.apt(this.a),"md/rocket.svga",null)},
$S:z+3}
A.apt.prototype={
$0(){return this.a.d.da(0)},
$S:0}
A.aps.prototype={
$1(d){return new A.o3(new A.apr(this.a),"md/angle.svga",null)},
$S:z+3}
A.apr.prototype={
$0(){return this.a.d.da(0)},
$S:0}
A.asy.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sIe(null)
w.a.aih()},
$S:17}
A.a2o.prototype={
$2(d,e){return C.e.bg(d.d,e.d)},
$S:z+6}
A.auT.prototype={
$1(d){return J.d5(d,this.a.$0())},
$S:175}
A.auR.prototype={
$1(d){var w,v,u=this,t=u.a.fb(!0),s=u.c,r=u.b.a3U(s,u.d,t)
if(r==null){w=u.e.rA()
v=A.aa2(t)
if(w.b)A.hZ("UnknownFieldSet","mergeVarintField")
C.b.D(w.li(s).b,v)}else J.d5(d,r)},
$S:175}
A.auS.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:17}
A.a6a.prototype={
$0(){return A.aDZ(this.a,this.b)},
$S(){return this.b.h("uL<0>()")}}
A.a6c.prototype={
$0(){return this.a},
$S:84}
A.a6b.prototype={
$1(d){return d.a.rI()},
$S:z+7}
A.abk.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fc(w.a,w.b,B.j(v,u),!1,v.h("@<0>").ab(u).h("fc<1,2>"))},
$S(){return this.d.h("@<0>").ab(this.e).h("fc<1,2>()")}}
A.anp.prototype={
$1(d){return J.hg(d)},
$S:63}
A.anr.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cU){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.Wn(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.bu)w.a+=v+": {"+B.k(e.a)+" : "+B.k(e.b)+"} \n"
else w.a+=v+": "+B.k(e)+"\n"}},
$S:53}
A.ans.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.nM)for(w=d.a,w=new J.hj(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fc)for(w=d.gdu(d),w=w.ga_(w),v=this.a;w.t();)v.$2(e,w.gF(w))
else this.a.$2(e,d)},
$S:495}
A.anq.prototype={
$1(d){var w=this.a,v=w.d.c.i(0,d)
w=w.d.b.i(0,d)
return this.b.$2(v,"["+B.k(w.gUf(w))+"]")},
$S:23}
A.aso.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.hg()
v.b!==$&&B.aC()
v.b=w
u=w}return u},
$S(){return this.a.$ti.h("1()")}}
A.adf.prototype={
$2(d,e){return(d^A.aFF(A.mo(A.mo(0,J.y(e.a)),J.y(e.b))))>>>0},
$S(){return this.a.$ti.h("n(n,bu<1,2>)")}}
A.ak8.prototype={
$0(){var w=x.X
return new A.rg(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ak9.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.y(e)&536870911},
$S:496}
A.atS.prototype={
$1(d){return A.azr(J.aQ(this.a,d),J.aQ(this.b,d))},
$S:67}
A.aox.prototype={
$2(d,e){return A.mo(d,J.y(e))},
$S:497}
A.afG.prototype={
$0(){},
$S:17}
A.afF.prototype={
$1(d){var w={}
w.a=null
J.f5(d.a.oq(1,x.p),new A.afE(w))},
$S:z+9}
A.afE.prototype={
$1(d){if(J.jC(d.gqW())&&J.aU(d.gqW())>0)if(J.aQ(d.gqW(),0).a.ac(0)===D.xp&&this.a.a!=null)d.b=this.a.a
else if(J.jC(d.gqW()))this.a.a=d.gqW()},
$S:z+10}
A.afC.prototype={
$1(d){return this.WC(d)},
WC(d){var w=0,v=B.S(x.P),u=this,t,s
var $async$$1=B.O(function(e,f){if(e===1)return B.P(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.L(u.a.wt(t,new Uint8Array(B.fq(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.Q(null,v)}})
return B.R($async$$1,v)},
$S:498}
A.afD.prototype={
$1(d){return this.a},
$S:z+5}
A.arX.prototype={
$1(d){return"|||"+B.k(d.IG(1))+" "},
$S:170}
A.arY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.d.a3(d,0,1)
if(C.d.p("MLHVCSQRZmlhvcsqrz",w)){v=C.d.eO(C.d.bs(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bl(v[0])
t=B.bl(v[1])
u.b=t
u.a.eK(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bl(v[0])
t=u.b+B.bl(v[1])
u.b=t
u.a.eK(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bl(v[0])
t=B.bl(v[1])
u.b=t
u.a.c9(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bl(v[0])
t=u.b+B.bl(v[1])
u.b=t
u.a.c9(0,u.c,t)}else if(w==="H"){s=B.bl(v[0])
u=m.a
u.c=s
u.a.c9(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bl(v[0])
u.c=s
u.a.c9(0,s,u.b)}else if(w==="V"){t=B.bl(v[0])
u=m.a
u.b=t
u.a.c9(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bl(v[0])
u.b=t
u.a.c9(0,u.c,t)}else if(w==="C"){u=m.a
u.r=B.bl(v[0])
u.f=B.bl(v[1])
u.e=B.bl(v[2])
u.d=B.bl(v[3])
u.c=B.bl(v[4])
t=B.bl(v[5])
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
r.n6(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
u.r=u.c+B.bl(v[0])
u.f=u.b+B.bl(v[1])
u.e=u.c+B.bl(v[2])
u.d=u.b+B.bl(v[3])
u.c=u.c+B.bl(v[4])
t=u.b+B.bl(v[5])
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
r.n6(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
if(u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null){r=u.c
q=u.e
q.toString
u.r=r-q+r
r=u.b
q=u.d
q.toString
u.f=r-q+r
u.e=B.bl(v[0])
u.d=B.bl(v[1])
u.c=B.bl(v[2])
t=B.bl(v[3])
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
r.n6(q,p,o,n,u.c,t)}else{u.r=B.bl(v[0])
u.f=B.bl(v[1])
u.c=B.bl(v[2])
t=B.bl(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qu(q,p,u.c,t)}}else if(w==="s"){u=m.a
r=u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null
q=u.c
if(r){r=u.e
r.toString
u.r=q-r+q
r=u.b
p=u.d
p.toString
u.f=r-p+r
u.e=q+B.bl(v[0])
u.d=u.b+B.bl(v[1])
u.c=u.c+B.bl(v[2])
t=u.b+B.bl(v[3])
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
q.n6(r,p,o,n,u.c,t)}else{u.r=q+B.bl(v[0])
u.f=u.b+B.bl(v[1])
u.c=u.c+B.bl(v[2])
t=u.b+B.bl(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qu(q,p,u.c,t)}}else if(w==="Q"){u=m.a
u.r=B.bl(v[0])
u.f=B.bl(v[1])
u.c=B.bl(v[2])
t=B.bl(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qu(q,p,u.c,t)}else if(w==="q"){u=m.a
u.r=u.c+B.bl(v[0])
u.f=u.b+B.bl(v[1])
u.c=u.c+B.bl(v[2])
t=u.b+B.bl(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.qu(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.aF(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:36}
A.arW.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.acb.prototype={
$1(d){d.n()},
$S:499};(function aliases(){var w=A.HT.prototype
w.a12=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"aAa","aYp",14)
v(A,"aw5",1,null,["$2","$1"],["hZ",function(d){return A.hZ(d,null)}],15,0)
u(A,"b13","aU3",16)
u(A,"b10","aU0",17)
u(A,"b1_","aU_",4)
u(A,"b12","aU2",0)
u(A,"b11","aU1",2)
var r
t(r=A.JQ.prototype,"gam9","ama",0)
t(r,"gamb","amc",1)
t(r,"gamn","A4",0)
t(r,"gamo","amp",1)
t(r,"gamj","amk",0)
t(r,"gaml","amm",1)
t(r,"gam2","am3",0)
t(r,"gam4","am5",1)
t(r,"gamg","amh",0)
t(r,"gami","HL",1)
t(r,"galY","alZ",4)
t(r,"gam6","am7",2)
t(r,"gam_","am0",2)
t(r=A.Gm.prototype,"gDB","abw",12)
s(r,"gCV","a80",13)
u(A,"aIC","aTF",18)
u(A,"aII","aVR",19)
u(A,"aIz","aPP",20)
u(A,"aIB","aT6",33)
u(A,"aAj","aWx",22)
u(A,"aIF","aVB",23)
u(A,"aIE","aVA",24)
u(A,"aID","aVz",25)
u(A,"aAi","aVE",26)
u(A,"aIG","aVF",27)
u(A,"aIH","aVH",28)
u(A,"aIA","aSm",29)
u(A,"b1m","aDC",30)
w(A,"b1p","aVG",31)
w(A,"b1n","aVC",32)
w(A,"b1o","aVD",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.IN,B.jV)
u(B.H,[A.aa_,A.acQ,A.a91,A.a9K,A.dH,A.Kj,A.Ju,A.a2n,A.JQ,A.lr,A.ank,A.anf,A.cY,A.U5,A.cU,A.GH,A.NP,A.OL,A.kz,A.rg,A.afA,A.afB])
v(A.a9Z,A.aa_)
v(A.acP,A.acQ)
u(B.iU,[A.avW,A.app,A.apq,A.apt,A.apr,A.asy,A.auS,A.a6a,A.a6c,A.abk,A.aso,A.ak8,A.afG,A.arW])
u(B.a3,[A.q3,A.o3,A.Cr])
u(B.a9,[A.Vu,A.HT,A.Gm])
u(B.ft,[A.apu,A.aps,A.auT,A.auR,A.a6b,A.anp,A.anq,A.atS,A.afF,A.afE,A.afC,A.afD,A.arX,A.arY,A.acb])
v(A.YU,A.HT)
v(A.amO,B.rs)
u(B.l0,[A.a2o,A.anr,A.ans,A.adf,A.ak9,A.aox])
v(A.q6,A.cY)
v(A.nM,B.a1)
u(A.nM,[A.pu,A.uL])
v(A.fc,B.ax)
v(A.XV,B.tw)
v(A.PK,B.jE)
u(A.cU,[A.qb,A.m6,A.oV,A.pU,A.oc,A.qW,A.qV,A.qU,A.qY,A.qX,A.qT,A.li,A.lF])
u(A.OL,[A.jg,A.kq,A.kr])
w(A.HT,B.fe)})()
B.mA(b.typeUniverse,JSON.parse('{"IN":{"bU":[]},"dH":{"cq":["H"]},"q3":{"a3":[],"i":[]},"Vu":{"a9":["q3"]},"o3":{"a3":[],"i":[]},"YU":{"a9":["o3"]},"aS1":{"cY":["1"]},"cY":{"cY.T":"1"},"uL":{"nM":["1"],"a1":["1"],"z":["1"],"a0":["1"],"q":["1"],"q.E":"1","a1.E":"1"},"fc":{"ax":["1","2"],"aI":["1","2"],"ax.V":"2","ax.K":"1"},"lr":{"bU":[]},"q6":{"cY":["fc<1,2>?"],"cY.T":"fc<1,2>?"},"pu":{"nM":["1"],"a1":["1"],"z":["1"],"a0":["1"],"q":["1"],"q.E":"1","a1.E":"1"},"nM":{"a1":["1"],"z":["1"],"a0":["1"],"q":["1"]},"Cr":{"a3":[],"i":[]},"XV":{"ab":[]},"PK":{"jE":[],"bz":["I"],"ab":[]},"Gm":{"a9":["Cr"]},"qb":{"cU":[]},"m6":{"cU":[]},"oV":{"cU":[]},"pU":{"cU":[]},"oc":{"cU":[]},"qW":{"cU":[]},"qV":{"cU":[]},"qU":{"cU":[]},"qY":{"cU":[]},"qX":{"cU":[]},"qT":{"cU":[]},"li":{"cU":[]},"lF":{"cU":[]}}'))
B.Hg(b.typeUniverse,JSON.parse('{"Ju":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.X
return{G:w("aS1<@>"),q:w("cY<@>"),p:w("li"),K:w("ak<ay>"),J:w("cU"),I:w("u3"),w:w("dH"),U:w("q<cU>"),M:w("t<cY<@>>"),X:w("t<dH>"),r:w("t<z<n>>"),s:w("t<m>"),A:w("t<kz>"),D:w("t<i>"),n:w("t<I>"),t:w("t<n>"),b:w("t<~()>"),F:w("t<~(eC)>"),d:w("z<cU>"),j:w("z<@>"),L:w("z<n>"),T:w("q6<@,@>"),f:w("aI<@,@>"),H:w("lF"),P:w("ay"),R:w("aS<~()>"),V:w("aS<~(eC)>"),u:w("nJ"),W:w("qj"),Y:w("qT"),m:w("m6"),N:w("m"),l:w("DG"),Q:w("dn"),B:w("kz"),k:w("rg"),y:w("B"),i:w("I"),z:w("@"),O:w("@()"),_:w("@(a2K,n)"),S:w("n"),o:w("u3?")}})();(function constants(){var w=a.makeConstList
D.Ar=new A.afB()
D.AO=new A.anf()
D.F_=new A.dH(0,0,0)
D.F0=new A.dH(4194303,4194303,1048575)
D.G3=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.G4=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.G7=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.jo=new A.jg(0,"SHAPE")
D.xn=new A.jg(1,"RECT")
D.xo=new A.jg(2,"ELLIPSE")
D.xp=new A.jg(3,"KEEP")
D.mu=B.b(w([D.jo,D.xn,D.xo,D.xp]),B.X("t<jg>"))
D.Gh=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Gu=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Gw=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Gv=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.GG=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.jn=new A.kr(0,"LineJoin_MITER")
D.xl=new A.kr(1,"LineJoin_ROUND")
D.xm=new A.kr(2,"LineJoin_BEVEL")
D.mI=B.b(w([D.jn,D.xl,D.xm]),B.X("t<kr>"))
D.jm=new A.kq(0,"LineCap_BUTT")
D.xj=new A.kq(1,"LineCap_ROUND")
D.xk=new A.kq(2,"LineCap_SQUARE")
D.mJ=B.b(w([D.jm,D.xj,D.xk]),B.X("t<kq>"))
D.Hv=new A.q3(null)
D.au=new A.NP("com.opensource.svga")
D.Wa=new A.NP("")
D.Tb=new B.dc("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.Tj=new B.dc("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.UW=new A.amO(0,"Absolute")})();(function staticFields(){$.aX8=[]
$.aCU=B.j(B.X("j1?"),B.X("GH<cU>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"b8U","aNs",()=>new A.avW())
v($,"b4l","aK2",()=>{var u=A.aWE()
u.hg()
return u})
v($,"b3h","aJo",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hk("MovieParams",A.aIC(),D.au),r=x.i
s.fe(0,1,u,256,u,r)
s.fe(0,2,t,256,t,r)
r=x.S
s.dg(0,3,"fps",2048,r)
s.dg(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b3Y","aJM",()=>{var u="imageKey",t="matteKey",s=A.hk("SpriteEntity",A.aII(),D.au)
s.tg(1,u,u)
s.zV(0,2,"frames",2097154,A.aIA(),x.p)
s.tg(3,t,t)
s.w=!1
return s})
v($,"b1P","aIO",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hk("AudioEntity",A.aIz(),D.au)
n.tg(1,t,t)
u=x.S
n.fe(0,2,s,r,s,u)
n.fe(0,3,q,r,q,u)
n.fe(0,4,p,r,p,u)
n.fe(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b38","aJl",()=>{var u=A.hk("Layout",A.aIB(),D.au),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.dg(0,3,"width",256,t)
u.dg(0,4,"height",256,t)
u.w=!1
return u})
v($,"b49","aJS",()=>{var u=A.hk("Transform",A.aAj(),D.au),t=x.i
u.dg(0,1,"a",256,t)
u.dg(0,2,"b",256,t)
u.dg(0,3,"c",256,t)
u.dg(0,4,"d",256,t)
u.dg(0,5,"tx",256,t)
u.dg(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b3M","aJD",()=>{var u=A.hk("ShapeEntity.ShapeArgs",A.aIF(),D.au)
u.Qi(1,"d")
u.w=!1
return u})
v($,"b3L","aJC",()=>{var u="cornerRadius",t=A.hk("ShapeEntity.RectArgs",A.aIE(),D.au),s=x.i
t.dg(0,1,"x",256,s)
t.dg(0,2,"y",256,s)
t.dg(0,3,"width",256,s)
t.dg(0,4,"height",256,s)
t.fe(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b3K","aJB",()=>{var u=A.hk("ShapeEntity.EllipseArgs",A.aID(),D.au),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.fe(0,3,"radiusX",256,"radiusX",t)
u.fe(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b3P","aJG",()=>{var u=A.hk("ShapeEntity.ShapeStyle.RGBAColor",A.aAi(),D.au),t=x.i
u.dg(0,1,"r",256,t)
u.dg(0,2,"g",256,t)
u.dg(0,3,"b",256,t)
u.dg(0,4,"a",256,t)
u.w=!1
return u})
v($,"b3Q","aJH",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hk("ShapeEntity.ShapeStyle",A.aIG(),D.au),n=B.X("qY")
o.jp(1,"fill",A.aAi(),n)
o.jp(2,"stroke",A.aAi(),n)
n=x.i
o.fe(0,3,u,256,u,n)
o.FW(0,4,"lineCap",512,D.jm,D.mJ,"lineCap",A.b1n(),B.X("kq"))
o.FW(0,5,t,512,D.jn,D.mI,t,A.b1o(),B.X("kr"))
o.fe(0,6,s,256,s,n)
o.fe(0,7,r,256,r,n)
o.fe(0,8,q,256,q,n)
o.fe(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b3S","aJJ",()=>{var u=A.hk("ShapeEntity",A.aIH(),D.au)
u.alp(0,B.b([2,3,4],x.t))
u.ahS(0,1,"type",512,D.jo,D.mu,A.b1p(),B.X("jg"))
u.jp(2,"shape",A.aIF(),B.X("qW"))
u.jp(3,"rect",A.aIE(),B.X("qV"))
u.jp(4,"ellipse",A.aID(),B.X("qU"))
u.jp(10,"styles",A.aIG(),B.X("qX"))
u.jp(11,"transform",A.aAj(),B.X("oc"))
u.w=!1
return u})
v($,"b2K","aJ9",()=>{var u="clipPath",t=A.hk("FrameEntity",A.aIA(),D.au)
t.dg(0,1,"alpha",256,x.i)
t.jp(2,"layout",A.aIB(),B.X("pU"))
t.jp(3,"transform",A.aAj(),B.X("oc"))
t.tg(4,u,u)
t.zV(0,5,"shapes",2097154,A.aIH(),x.Y)
t.w=!1
return t})
v($,"b3g","aJn",()=>{var u,t,s=null,r=A.hk("MovieEntity",A.b1m(),D.au)
r.Qi(1,"version")
r.jp(2,"params",A.aIC(),B.X("qb"))
u=A.hk("MovieEntity.ImagesEntry",s,D.au)
t=x.z
u.Ql(0,1,"key",64,s,s,s,s,t)
u.Ql(0,2,"value",32,s,s,s,s,t)
r.Bv(A.aTn("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.zV(0,4,"sprites",2097154,A.aII(),x.m)
r.zV(0,5,"audios",2097154,A.aIz(),B.X("oV"))
r.w=!1
return r})
v($,"b3R","aJI",()=>A.ayg(D.mu,B.X("jg")))
v($,"b3N","aJE",()=>A.ayg(D.mJ,B.X("kq")))
v($,"b3O","aJF",()=>A.ayg(D.mI,B.X("kr")))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_11",e:"endPart",h:b})})($__dart_deferred_initializers__,"cBptF6ypIc6ThLATJ7ZwWTOMZaQ=");