self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
awf(d){return new A.IB(d,null,null)},
IB:function IB(d,e,f){this.a=d
this.b=e
this.c=f},
aCA(d,e,f,g){var w,v
if(x.Q.b(d))w=B.cc(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.f_(x.R.a(d),!0,x.S)
v=new A.a9s(w,g,g,e)
v.e=f==null?w.length:f
return v},
a9t:function a9t(){},
a9s:function a9s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
aco:function aco(){},
acn:function acn(d){this.a=0
this.c=d},
Mr(d){var w=new A.a8x()
w.a0Z(d)
return w},
a8x:function a8x(){this.a=$
this.b=0
this.c=2147483647},
a9d:function a9d(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
a9w(d){var w,v,u,t,s,r
if(d<0){d=-d
w=!0}else w=!1
v=C.e.bU(d,17592186044416)
d-=v*17592186044416
u=C.e.bU(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.a9x(0,0,0,t,s,r):new A.dE(t,s,r)},
aCB(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dE((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
axd(d,e){return new A.dE(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
A3(d){if(d instanceof A.dE)return d
else if(B.jp(d))return A.a9w(d)
throw B.d(B.fu(d,"other","not an int, Int32 or Int64"))},
aSA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.Gf[d]
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
a9x(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cA(w,22)&1)
return new A.dE(w&4194303,v&4194303,f-i-(C.e.cA(v,22)&1)&1048575)},
A4(d,e){var w=C.e.xf(d,e)
return w},
dE:function dE(d,e,f){this.a=d
this.b=e
this.c=f},
ava:function ava(){},
q3:function q3(d){this.a=d},
Vr:function Vr(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aoA:function aoA(d,e){this.a=d
this.b=e},
aoB:function aoB(d,e){this.a=d
this.b=e},
aoF:function aoF(d){this.a=d},
aoE:function aoE(d){this.a=d},
aoD:function aoD(d){this.a=d},
aoC:function aoC(d){this.a=d},
o0:function o0(d,e,f){this.c=d
this.d=e
this.a=f},
YH:function YH(d,e,f){var _=this
_.d=$
_.e5$=d
_.bw$=e
_.a=null
_.b=f
_.c=null},
arz:function arz(d){this.a=d},
HJ:function HJ(){},
b_F(d,e,f){var w,v,u,t,s,r,q,p,o=$.aq().cb()
for(w=d.QH(),w=w.ga_(w),v=e.a,u=f.a;w.t();){t=w.gD(w)
t.gp(t)
for(s=u,r=!0;s<t.gp(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.xI(0,t.RV(s,s+p),C.h)
s+=p
r=!r}}return o},
am_:function am_(d,e){this.a=d
this.b=e},
Kz:function Kz(d){this.a=d},
Ji:function Ji(d){this.a=d
this.b=0},
hm(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a28((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
az4(c1,c2,c3,c4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null
B.hl(c4,c0)
for(w=x.S,v=x.T,u=x.z,t=c1.c,s=c3.gald(),r=c3.galb(),q=c3.gal0(),p=c3.gakZ(),o=c3.galj(),n=c3.gali(),m=c3.galg(),l=c3.gale(),k=c3.gal7(),j=c3.gal5(),i=c3.gakW(),h=c3.gal2(),g=c3.gakU(),f=c3.a;!0;){e=c3.Uz()
if(e===0)return
d=e&7
a0=C.e.cA(e,3)
a1=t.h(0,a0)
if(a1==null)a1=c0
if(a1==null||!A.aZN(a1.f,d)){if(!c2.rH().TG(e,c3))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c2.ei(c1,a1,c3.f9(!0)!==0)
break
case 32:c2.ei(c1,a1,new Uint8Array(B.fq(c3.v8())))
break
case 64:a3=c3.v8()
c2.ei(c1,a1,C.jx.el(a3))
break
case 256:a3=c3.b+=4
if(a3>c3.c)B.W(A.jU())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getFloat32(0,!0))
break
case 128:a3=c3.b+=8
if(a3>c3.c)B.W(A.jU())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c2.ei(c1,a1,a3.getFloat64(0,!0))
break
case 512:a6=c3.f9(!0)
a7=t.h(0,a0)
a8=a7==null?c0:a7.z
a3=(a8==null&&!0?c0.gamz():a8).$1(a6)
if(a3==null){a9=c2.rH()
a3=A.a9w(a6)
if(a9.b)A.hY("UnknownFieldSet","mergeVarintField")
C.b.C(a9.lm(a0).b,a3)}else c2.ei(c1,a1,a3)
break
case 1024:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAG():b0).$0()
b1=c2.wr(a1)
if(b1!=null)a3.kQ(b1)
c3.Uu(a0,a3,c4)
c2.ei(c1,a1,a3)
break
case 2048:c2.ei(c1,a1,c3.f9(!0))
break
case 4096:c2.ei(c1,a1,c3.mO())
break
case 8192:c2.ei(c1,a1,A.aBm(c3.f9(!1)))
break
case 16384:b2=c3.mO()
c2.ei(c1,a1,(b2.VS(0,1).k(0,1)?A.a9x(0,0,0,b2.a,b2.b,b2.c):b2).IW(0,1))
break
case 32768:c2.ei(c1,a1,c3.f9(!1))
break
case 65536:c2.ei(c1,a1,c3.mO())
break
case 131072:a3=c3.b+=4
if(a3>c3.c)B.W(A.jU())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getUint32(0,!0))
break
case 262144:a3=c3.b+=8
if(a3>c3.c)B.W(A.jU())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ei(c1,a1,A.aCB(b4))
break
case 524288:a3=c3.b+=4
if(a3>c3.c)B.W(A.jU())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c2.ei(c1,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c3.b+=8
if(a3>c3.c)B.W(A.jU())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c2.ei(c1,a1,A.aCB(b4))
break
case 2097152:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAG():b0).$0()
b1=c2.wr(a1)
if(b1!=null)a3.kQ(b1)
c3.Uw(a3,c4)
c2.ei(c1,a1,a3)
break
case 18:A.iA(c1,c2,c3,d,a1,g)
break
case 34:J.dA(c2.mE(c1,a1,u),new Uint8Array(B.fq(c3.v8())))
break
case 66:a3=c2.mE(c1,a1,u)
a4=c3.v8()
J.dA(a3,C.jx.el(a4))
break
case 258:A.iA(c1,c2,c3,d,a1,h)
break
case 130:A.iA(c1,c2,c3,d,a1,i)
break
case 514:A.aZy(c1,c2,c3,d,a1,a0,c4)
break
case 1026:a7=t.h(0,a0)
b0=a7==null?c0:a7.w
a3=(b0==null&&!0?c0.gAG():b0).$0()
c3.Uu(a0,a3,c4)
J.dA(c2.mE(c1,a1,u),a3)
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
a3=(b0==null&&!0?c0.gAG():b0).$0()
c3.Uw(a3,c4)
J.dA(c2.mE(c1,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c2.LI(c1,a1,u,u)
b6=c3.f9(!0)
b7=c3.c
c3.c=c3.b+b6
a4=b5.b
a5=A.aF3(a4.length)
A.az4(b5,new A.U9(c0,c0,a5,b5.f.a===0?c0:B.k(w,w)),c3,c4)
if(c3.d!==0)B.W(A.MF())
c3.c=b7
b8=J.ai(a5)
b9=b8.h(a5,0)
if(b9==null)b9=a4[0].r.$0()
b2=b8.h(a5,1)
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b9,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
iA(d,e,f,g,h,i){A.aGm(d,e,f,g,h,new A.au1(i))},
aZy(d,e,f,g,h,i,j){A.aGm(d,e,f,g,h,new A.au_(f,d,i,j,e))},
aGm(d,e,f,g,h,i){var w,v,u,t=e.mE(d,h,x.z)
if(g===2){w=f.f9(!0)
if(w<0)B.W(B.bN(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.W(A.jU())
f.c=v
new A.au0(f,i,t).$0()
f.c=u}else i.$1(t)},
aBm(d){if((d&1)===1)return-C.e.cA(d,1)-1
else return C.e.cA(d,1)},
MF(){return new A.ls("Protocol message end-group tag did not match expected tag.")},
aCD(){return new A.ls("CodedBufferReader encountered a malformed varint.")},
axe(){return new A.ls("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
jU(){return new A.ls("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
aYY(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eC(e))return"not type bool"
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
case 512:if(!(e instanceof A.OT))return"not type ProtobufEnum"
return v
case 2048:case 8192:case 524288:if(!B.jp(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jp(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dE))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cV))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
aYa(d){if(d==null)throw B.d(B.bN("Can't add a null to a repeated field",null))},
aRM(d,e,f,g,h,i,j,k,l,m,n){return new A.cZ(d,e,f,g,A.aC7(g,i),l,m,null,n.i("cZ<0>"))},
aRN(d,e,f,g,h,i,j,k,l,m,n){var w=new A.cZ(d,e,f,g,new A.a5Q(h,n),i,m,h,n.i("cZ<0>"))
w.a0X(d,e,f,g,h,i,j,k,l,m,n)
return w},
aC7(d,e){if(e==null)return A.aTJ(d)
if(x.O.b(e))return e
return new A.a5S(e)},
aT1(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aC7(g,new A.aaR(h,i,j,n,o))
B.hl(d,"name")
B.hl(e,"tagNumber")
return new A.q6(h,i,j,d,e,f,g,w,null,null,null,n.i("@<0>").ai(o).i("q6<1,2>"))},
hY(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
aWQ(d,e,f){var w,v=A.aF3(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.U9(d,f,v,w)},
aF3(d){if(d===0)return $.aWR
return B.aS(d,null,!1,x.z)},
aF2(d,e,f){var w,v
if(x.j.b(f)&&J.f7(f))return d
if(x.f.b(f)&&J.f7(f))return d
d=A.mh(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.mh(d,A.ayv(f))
else if(v!==512)d=A.mh(d,J.x(f))
else d=(w&2)!==0?A.mh(d,A.ayv(J.aOR(f,new A.amB()))):A.mh(d,f.a)
return d},
aTJ(d){switch(d){case 16:case 17:return A.b0T()
case 32:case 33:return A.b0U()
case 64:case 65:return A.b0X()
case 256:case 257:case 128:case 129:return A.b0V()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b0W()
default:return null}},
aTI(){return""},
aTF(){return B.b([],x.t)},
aTE(){return!1},
aTH(){return 0},
aTG(){return 0},
aS9(d,e){var w,v=$.aCf.h(0,d)
if(v!=null)return v
w=new A.Gz(d,e.i("Gz<0>"))
$.aCf.m(0,d,w)
return w},
aS8(d,e){var w=e.a(d.gbx().Q.$0())
w.kQ(d)
return w},
aDn(d,e){var w=B.b([],e.i("t<0>"))
B.hl(d,"check")
return new A.uM(w,d,e.i("uM<0>"))},
axM(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
aWp(){return new A.kx(B.k(x.S,x.k))},
ayS(d,e){var w
if(d instanceof A.cV)return d.k(0,e)
if(e instanceof A.cV)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.xb(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.ayM(d,e)
return J.f(d,e)},
xb(d,e){var w,v=J.ai(d),u=J.ai(e)
if(v.gp(d)!==u.gp(e))return!1
for(w=0;w<v.gp(d);++w)if(!A.ayS(v.h(d,w),u.h(e,w)))return!1
return!0},
ayM(d,e){var w=J.ai(d)
if(w.gp(d)!==J.b_(e))return!1
return J.aOA(w.gb7(d),new A.asU(d,e))},
aGy(d,e){var w=B.f_(d,!0,e)
C.b.hI(w)
return w},
mh(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aF7(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
ayv(d){return A.aF7(J.aOC(d,0,new A.anJ()))},
aZN(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a28:function a28(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a29:function a29(){},
au1:function au1(d){this.a=d},
au_:function au_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
au0:function au0(d,e,f){this.a=d
this.b=e
this.c=f},
K6:function K6(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
ls:function ls(d){this.a=d},
amw:function amw(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
amr:function amr(){},
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
a5Q:function a5Q(d,e){this.a=d
this.b=e},
a5S:function a5S(d){this.a=d},
a5R:function a5R(){},
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
aaR:function aaR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
U9:function U9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
amB:function amB(){},
amD:function amD(d,e){this.a=d
this.b=e},
amE:function amE(d){this.a=d},
amC:function amC(d,e){this.a=d
this.b=e},
cV:function cV(){},
Gz:function Gz(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
arn:function arn(d){this.a=d},
NU:function NU(d){this.a=d},
pt:function pt(d,e,f){this.a=d
this.b=e
this.$ti=f},
uM:function uM(d,e,f){this.a=d
this.b=e
this.$ti=f},
nE:function nE(){},
fg:function fg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
acN:function acN(d){this.a=d},
OT:function OT(){},
kx:function kx(d){this.a=d
this.b=!1},
ajo:function ajo(){},
ajp:function ajp(d){this.a=d},
rm:function rm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
asU:function asU(d,e){this.a=d
this.b=e},
anJ:function anJ(){},
afk:function afk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afl:function afl(){},
afq:function afq(d){this.a=d},
afp:function afp(){},
afo:function afo(d){this.a=d},
afm:function afm(d,e,f){this.a=d
this.b=e
this.c=f},
afn:function afn(d){this.a=d},
XH:function XH(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aqW:function aqW(){},
aqX:function aqX(d,e,f){this.a=d
this.b=e
this.c=f},
Cm:function Cm(d,e){this.c=d
this.a=e},
PO:function PO(d,e,f,g,h,i,j,k,l,m){var _=this
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
Gf:function Gf(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
aqV:function aqV(d){this.a=d},
aTj(){var w=new A.qe()
w.hb()
return w},
aVy(){var w=new A.lY()
w.hb()
return w},
aPr(){var w=new A.oT()
w.hb()
return w},
aSL(){var w=new A.pU()
w.hb()
return w},
aWi(){var w=new A.o8()
w.hb()
return w},
aVe(){var w=new A.qY()
w.hb()
return w},
aVd(){var w=new A.qX()
w.hb()
return w},
aVc(){var w=new A.qW()
w.hb()
return w},
aVh(){var w=new A.r_()
w.hb()
return w},
aVi(){var w=new A.qZ()
w.hb()
return w},
aVk(){var w=new A.qV()
w.hb()
return w},
aS0(){var w=new A.li()
w.hb()
return w},
aD3(){var w=x.N,v=x.I
w=new A.lD(new A.afk(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.Z))
w.hb()
return w},
qe:function qe(){this.a=null},
lY:function lY(){this.a=null},
oT:function oT(){this.a=null},
pU:function pU(){this.a=null},
o8:function o8(){this.a=null},
qY:function qY(){this.a=null},
qX:function qX(){this.a=null},
qW:function qW(){this.a=null},
r_:function r_(){this.a=null},
qZ:function qZ(){this.a=null},
qV:function qV(){this.a=null},
li:function li(){this.a=this.b=null},
lD:function lD(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
abG:function abG(){},
aVj(d){return $.aJa().h(0,d)},
aVf(d){return $.aJ6().h(0,d)},
aVg(d){return $.aJ7().h(0,d)},
jc:function jc(d,e){this.a=d
this.b=e},
km:function km(d,e){this.a=d
this.b=e},
kn:function kn(d,e){this.a=d
this.b=e},
a0p(d){var w=0,v=B.T(x.I),u,t
var $async$a0p=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:$.h5.toString
w=4
return B.N($.aq().jb(d,!1,null,null),$async$a0p)
case 4:w=3
return B.N(f.hF(),$async$a0p)
case 3:t=f
u=t.gfm(t)
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$a0p,v)}},B,C,J,D,E,F,G
A=a.updateHolder(c[5],A)
B=c[0]
C=c[2]
J=c[1]
D=c[18]
E=c[10]
F=c[12]
G=c[17]
A.IB.prototype={}
A.a9t.prototype={}
A.a9s.prototype={
gp(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gajf(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
h(d,e){return this.a[this.b+e]},
Ut(){return this.a[this.b++]},
zK(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.aco.prototype={}
A.acn.prototype={
I3(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.Cc(v-t)
C.F.ck(u,w,v,d)
s.a+=r},
amJ(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.Cc(v-t)}C.F.b_(u,w,w+d.gp(d),d.a,d.b)
s.a=s.a+d.gp(d)},
J8(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.cc(w.c.buffer,d,e-d)},
J7(d){return this.J8(d,null)},
Cc(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.F.ck(t,0,u,v)
this.c=t},
a4s(){return this.Cc(null)},
gp(d){return this.a}}
A.a8x.prototype={
a0Z(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.lb(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.a9d.prototype={
a86(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.aak())break}},
aak(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gajf())return!1
w=v.hS(3)
switch(C.e.cA(w,1)){case 0:if(v.aat()===-1)return!1
break
case 1:if(v.Lh(v.r,v.w)===-1)return!1
break
case 2:if(v.aan()===-1)return!1
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
s.d=(s.d|C.e.lb(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.t6(1,d)
s.d=C.e.t7(w,d)
s.e=v-d
return(w&u-1)>>>0},
Do(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.c()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&B.c()
t=v.b
s=v.e
s===$&&B.c()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|C.e.lb(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.lb(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.t7(v,q)
p.e=u-q
return r&65535},
aat(){var w,v,u,t,s,r,q,p=this
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
q=A.aCA(v.a,v.d,r,t)
v.b=v.b+q.gp(q)
p.c.amJ(q)
return 0},
aan(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.hS(5)
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
u[D.Gv[t]]=s}r=A.Mr(u)
q=l+w
p=new Uint8Array(q)
o=B.cc(p.buffer,0,l)
n=B.cc(p.buffer,l,w)
if(m.a3D(q,r,p)===-1)return-1
return m.Lh(A.Mr(o),A.Mr(n))},
Lh(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.Do(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a4s()
w.c[w.a++]=v&255
continue}u=v-257
t=D.GI[u]+p.hS(D.G_[u])
s=p.Do(e)
if(s<0||s>29)return-1
r=D.G2[s]+p.hS(D.Gx[s])
for(q=-r;t>r;){w.I3(w.J7(q))
t-=r}if(t===r)w.I3(w.J7(q))
else w.I3(w.J8(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a3D(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.Do(e)
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
A.dE.prototype={
V(d,e){var w=A.A3(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dE(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
a7(d,e){var w=A.A3(e)
return A.a9x(this.a,this.b,this.c,w.a,w.b,w.c)},
aj(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.A3(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
VS(d,e){var w=A.A3(e)
return new A.dE(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
IW(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.ET:D.ES
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.A4(w,e)
if(v)u|=~C.e.t7(o,e)&1048575
t=p.b
s=22-e
r=A.A4(t,e)|C.e.lb(w,s)
q=A.A4(p.a,e)|C.e.lb(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.A4(w,t)
if(v)r|=~C.e.xf(n,t)&4194303
q=A.A4(p.b,t)|C.e.lb(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.A4(w,t)
if(v)q|=~C.e.xf(n,t)&4194303}return new A.dE(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dE)w=e
else if(B.jp(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.a9w(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
b9(d,e){return this.a2X(e)},
a2X(d){var w=A.A3(d),v=this.c,u=v>>>19,t=w.c
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
return A.aSA(10,t,s,r,u)},
$icu:1}
A.q3.prototype={
ad(){return new A.Vr(C.i)}}
A.Vr.prototype={
H(d){var w=null,v=x.D
return B.nZ(C.cm,B.b([new B.e0(C.v,w,w,E.aCs("md/live.jpg",w,w,w,w),w),new B.e0(C.cn,w,w,B.fI(B.hp(B.b([C.c1,B.mX(D.Th,new A.aoA(this,d),w),C.c1,B.mX(D.T9,new A.aoB(this,d),w)],v),C.a4,C.f9,C.a2),w,300),w)],v),C.T,C.cg)},
WT(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k4(new A.aoF(v),!1)
u=B.aaH(d,x.u)
u.toString
w=v.d
w.toString
u.nB(0,w)},
WR(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.k4(new A.aoD(v),!1)
u=B.aaH(d,x.u)
u.toString
w=v.d
w.toString
u.nB(0,w)}}
A.o0.prototype={
ad(){return new A.YH(null,null,C.i)},
ahr(){return this.c.$0()}}
A.YH.prototype={
av(){var w,v=this,u=null
v.aI()
w=new A.PO(0,1,u,C.el,C.n,u,C.a6,C.C,new B.b9(B.b([],x.F),x.W),new B.b9(B.b([],x.b),x.V))
w.K3(C.el,u,C.n,0,u,1,u,v)
v.d=w
v.z7()},
n(){this.a0O()
var w=this.d
w===$&&B.c()
w.sI0(null)
w.CW=!0
w.XA()},
H(d){var w=this.d
w===$&&B.c()
return new A.Cm(w,null)},
z7(){var w=0,v=B.T(x.z),u=this,t,s
var $async$z7=B.P(function(d,e){if(d===1)return B.Q(e,v)
while(true)switch(w){case 0:w=2
return B.N(D.Aq.yf(u.a.d),$async$z7)
case 2:t=e
s=u.d
s===$&&B.c()
s.sI0(t)
u.d.XB(0,null).a.a.h2(new A.arz(u))
return B.R(null,v)}})
return B.S($async$z7,v)}}
A.HJ.prototype={
n(){var w=this,v=w.bw$
if(v!=null)v.J(0,w.gfE())
w.bw$=null
w.aH()},
bC(){this.cO()
this.cq()
this.fF()}}
A.am_.prototype={
I(){return"_DashOffsetType."+this.b}}
A.Kz.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Kz&&e.a===this.a&&!0},
gv(d){return B.X(this.a,D.UU,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Ji.prototype={}
A.a28.prototype={
tj(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.Bb(e===0?new A.cZ("<removed field>",0,v,0,w,w,w,w,x.q):A.aRM(f,e,v,g,w,h,k,l,i,j,m))},
PT(d,e,f,g,h,i,j,k,l){return this.tj(d,e,f,g,h,i,j,k,null,l)},
Bb(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
fb(d,e,f,g,h,i){var w=null
this.tj(0,e,f,g,w,w,w,w,h,i)},
dg(d,e,f,g,h){return this.fb(d,e,f,g,null,h)},
ti(d,e,f){var w=null
this.tj(0,d,e,64,w,w,w,w,f,x.N)},
PQ(d,e){return this.ti(d,e,null)},
FG(d,e,f,g,h,i,j,k,l){this.tj(0,e,f,g,h,null,k,i,j,l)},
ah_(d,e,f,g,h,i,j,k){return this.FG(d,e,f,g,h,i,null,j,k)},
zA(d,e,f,g,h,i){var w=null
this.Bb(A.aRN(f,e,this.b.length,g,A.azA(),h,w,w,w,w,i))},
jC(d,e,f,g){this.tj(0,d,e,2097152,A.aS9(f,g).ga4T(),f,null,null,null,g)},
akl(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gvS(){var w=this.x
return w==null?this.x=this.a39():w},
a39(){var w=this.c
w=B.f_(w.gaD(w),!1,x.q)
C.b.ef(w,new A.a29())
return w},
a3E(d,e,f){var w=this.c.h(0,d),v=w==null?null:w.z
return(v==null&&!0?null.gamz():v).$1(f)}}
A.K6.prototype={
Bw(d){var w=this.b+=d
if(w>this.c)throw B.d(A.jU())},
Uu(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.axe())
w.e=v+1
e.TH(w,f)
if(w.d!==(d<<3|4)>>>0)B.W(A.MF());--w.e},
Uw(d,e){var w,v,u=this,t=u.f9(!0),s=u.e
if(s>=64)throw B.d(A.axe())
if(t<0)throw B.d(B.bN(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.jU())
u.e=s+1
d.TH(u,e)
if(u.d!==0)B.W(A.MF());--u.e
u.c=w},
al6(){return this.f9(!0)},
al8(){return this.mO()},
zK(){return this.f9(!1)},
alk(){return this.mO()},
alf(){return A.aBm(this.f9(!1))},
alh(){var w=this.mO(),v=A.A3(1),u=w.a,t=w.b,s=w.c
return(new A.dE(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.a9x(0,0,0,u,t,s):w).IW(0,1)},
al_(){return this.oN(4).getUint32(0,!0)},
al1(){return this.Hw()},
alc(){return this.oN(4).getInt32(0,!0)},
Hw(){var w=this.oN(8),v=B.cc(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dE((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
akV(){return this.f9(!0)!==0},
v8(){var w,v=this,u=v.f9(!0)
v.Bw(u)
w=v.a
return B.cc(w.buffer,w.byteOffset+v.b-u,u)},
al3(){return this.oN(4).getFloat32(0,!0)},
akX(){return this.oN(8).getFloat64(0,!0)},
Uz(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.f9(!1)
if(C.e.cA(w,3)===0)throw B.d(new A.ls("Protocol message contained an invalid tag (zero)."))
return w},
ab5(){this.Bw(1)
return this.a[this.b-1]},
f9(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.t6(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aCD())},
mO(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.W(A.jU())
s=w[t-1]
v=(v|C.e.t6(s&127,u*7))>>>0
if((s&128)===0)return A.axd(0,v)}s=q.ab5()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.axd(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.W(A.jU())
s=w[t-1]
r=(r|C.e.t6(s&127,u*7+3))>>>0
if((s&128)===0)return A.axd(r,v)}throw B.d(A.aCD())},
oN(d){var w
this.Bw(d)
w=this.a
return B.nv(w.buffer,w.byteOffset+this.b-d,d)}}
A.ls.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibW:1}
A.amw.prototype={
adR(d){var w
d.gan5()
w=this.a
w.a.gbx()
w=B.bN("Extension "+B.j(d)+" not legal for message "+w.ga90(),null)
throw B.d(w)},
aci(d,e){var w,v=this.a.e
if(v!=null){w=d.gl_()
if(v.b)A.hY("UnknownFieldSet","clearField")
v.a.u(0,w)}this.c.m(0,d.gl_(),e)},
he(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaD(w),w=new B.cO(J.ad(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gajn()){q=u.h(0,r.gl_())
if(q==null)continue
if(r.gajg())for(p=J.ad(s.a(q));p.t();)p.gD(p).a.he()
u.m(0,r.gl_(),q.vh())}else if(r.gajg()){o=u.h(0,r.gl_())
if(o!=null)t.a(o).a.he()}}}}
A.amr.prototype={}
A.cZ.prototype={
a0X(d,e,f,g,h,i,j,k,l,m,n){B.hl(this.b,"name")
B.hl(this.d,"tagNumber")},
gUA(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pt(B.b([],w.i("t<cZ.T>")),A.azA(),w.i("pt<cZ.T>"))}return w}return v.r.$0()},
Ms(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.rP()
w=J.ai(d)
if(w.gZ(d))return!0
if(!w.h(d,0).a.a.gbx().w)return!0
return w.j1(d,new A.a5R())},
j(d){return this.b}}
A.q6.prototype={}
A.U9.prototype={
ga90(){return this.a.gbx().a},
C8(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.amw(this,B.k(w,x.G),B.k(w,x.z))}return w},
rH(){var w=this.e
if(w==null){w=this.f
if(!B.eC(w)||w)return $.aJw()
w=this.e=new A.kx(B.k(x.S,x.k))}return w},
he(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.f
if(!B.eC(j)||j)return
k.f=!0
for(j=k.a.gbx().gvS(),w=j.length,v=k.c,u=J.ai(v),t=x.J,s=x.d,r=0;r<w;++r){q=j[r]
p=q.f
if((p&2)!==0){o=q.e
n=u.h(v,o)
if(n==null)continue
if((p&2098176)!==0)for(p=J.ad(s.a(n));p.t();)p.gD(p).a.he()
u.m(v,o,n.vh())}else if((p&4194304)!==0){p=q.e
m=u.h(v,p)
if(m==null)continue
u.m(v,p,m.ahG())}else if((p&2098176)!==0){l=u.h(v,q.e)
if(l!=null)t.a(l).a.he()}}if(k.d!=null)k.C8().he()
if(k.e!=null)k.rH().he()},
a50(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eC(w)||w)return d.gUA()
w=this.a
v=w.F8(d.d,d,B.p(d).i("cZ.T"))
this.mT(w.gbx(),d,v)
return v},
a51(d,e){var w,v=this.f
if(!B.eC(v)||v)return d.gUA()
v=this.a
v.toString
w=v.F8(d.d,e.i("cZ<0>").a(d),e)
this.mT(v.gbx(),d,w)
return w},
a52(d,e,f){var w,v,u=this.f
if(!B.eC(u)||u)return new A.fg(d.as,d.at,B.a3l(B.k(e,f),e,f),!1,e.i("@<0>").ai(f).i("fg<1,2>"))
u=this.a
w=d.$ti
v=u.R3(d.d,d,w.c,w.z[1])
this.mT(u.gbx(),d,v)
return v},
wr(d){var w=J.aG(this.c,d.e)
return w},
a2Q(d){var w,v,u,t,s=this,r=s.f
if(!B.eC(r)||r)A.avo().$1(s.a.gbx().a)
r=s.a.gbx()
w=r.c.h(0,d)
if(w!=null){J.cG(s.c,w.e,null)
r=r.f
v=w.d
if(r.a6(0,v)){u=s.r
u.toString
u.u(0,r.h(0,v))}t=r.h(0,v)
if(t!=null)s.r.m(0,t,0)
return}r=s.d
if(r!=null)r.b.h(0,d)},
ei(d,e,f){B.hl(e,"fi")
this.mT(d,e,f)},
mE(d,e,f){var w,v=this.wr(e)
if(v!=null)return f.i("y<0>").a(v)
w=this.a.F8(e.d,e,B.p(e).i("cZ.T"))
this.mT(d,e,w)
return w},
LI(d,e,f,g){var w,v,u=this.wr(e)
if(u!=null)return f.i("@<0>").ai(g).i("fg<1,2>").a(u)
w=e.$ti
v=this.a.R3(e.d,e,w.c,w.z[1])
this.mT(d,e,v)
return f.i("@<0>").ai(g).i("fg<1,2>").a(v)},
mT(d,e,f){var w,v=e.d,u=d.f.h(0,v)
if(u!=null){w=this.r
this.a2Q(w.h(0,u))
w.m(0,u,v)}J.cG(this.c,e.e,f)},
ae(d){var w=J.aG(this.c,d)
if(w!=null)return w
return this.a50(this.a.gbx().b[d])},
oq(d,e){var w=J.aG(this.c,d)
if(w!=null)return e.i("y<0>").a(w)
return this.a51(e.i("cZ<0>").a(this.a.gbx().b[d]),e)},
a1e(d,e,f,g){var w=J.aG(this.c,e)
if(w!=null)return f.i("@<0>").ai(g).i("aO<1,2>").a(w)
return this.a52(f.i("@<0>").ai(g).i("q6<1,2>").a(this.a.gbx().b[e]),f,g)},
w6(d){var w=J.aG(this.c,d)
if(w==null)return 0
return w},
B8(d){var w=J.aG(this.c,d)
if(w==null)return""
return w},
ri(d){var w=J.aG(this.c,d)
if(w==null)return!1
if(x.j.b(w))return J.js(w)
return!0},
a4j(d){var w,v,u,t,s,r=this
if(r.a.gbx()!==d.a.gbx())return!1
for(w=r.c,v=J.ai(w),u=d.c,t=J.ai(u),s=0;s<v.gp(w);++s)if(!r.a4i(v.h(w,s),t.h(u,s)))return!1
w=r.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.ayM(w.c,v.c)))return!1}w=r.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a4i(d,e){var w,v=d==null
if(!v&&e!=null)return A.ayS(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.f7(w))return!0
if(x.f.b(w)&&J.f7(w))return!0
return!1},
ga7Y(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jp(n)?n:null)!=null
if(n){n=o.f
n=B.jp(n)?n:null
n.toString
return n}n=o.a
w=A.mh(0,B.fG(n.gbx()))
v=o.c
for(n=n.gbx().gvS(),u=n.length,t=J.ai(v),s=0;s<u;++s){r=n[s]
q=t.h(v,r.e)
if(q==null)continue
w=A.aF2(w,r,q)}n=o.d
if(n!=null){u=n.c
p=A.aGy(new B.b8(u,B.p(u).i("b8<1>")),x.S)
for(t=p.length,n=n.b,s=0;s<p.length;p.length===t||(0,B.K)(p),++s){r=n.h(0,p[s])
w=A.aF2(w,r,u.h(0,r.gl_()))}}n=o.e
n=n==null?null:n.gv(n)
w=A.mh(w,n==null?0:n)
n=o.f
if((!B.eC(n)||n)&&!0)o.f=w
return w},
VO(d,e){var w,v,u,t,s,r,q,p,o=this,n=new A.amE(new A.amD(d,e))
for(w=o.a.gbx().gvS(),v=w.length,u=o.c,t=J.ai(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
p=r.b
n.$2(q,p===""?C.e.j(r.d):p)}w=o.d
if(w!=null){w=w.b
v=B.p(w).i("b8<1>")
v=B.ay(new B.b8(w,v),!0,v.i("q.E"))
C.b.hI(v)
C.b.M(v,new A.amC(o,n))}w=o.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kx(B.k(x.S,x.k)).Dl("")},
a9_(d){var w,v,u,t,s,r,q,p
for(w=d.a.gbx().gvS(),v=w.length,u=d.c,t=J.ai(u),s=0;s<v;++s){r=w[s]
q=t.h(u,r.e)
if(q!=null)this.N3(r,q,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fC(v,v.r),w=w.b;u.t();){p=w.h(0,u.d)
this.N3(p,v.h(0,p.gl_()),!0)}if(d.e!=null){w=this.rH()
v=d.e
v.toString
w.ak1(v)}},
N3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a.gbx(),k=l.c.h(0,d.d)
if(k==null&&f)k=d
w=(d.f&2098176)!==0
v=k.f
if((v&4194304)!==0){x.T.a(k)
v=k.$ti
u=m.LI(l,k,v.c,v.z[1])
if((k.at&2098176)!==0)for(l=J.ad(J.aw5(e)),v=u.c,t=x.J;l.t();){s=l.gD(l)
r=s.a
s=t.a(s.b)
q=t.a(s.gbx().Q.$0())
q.kQ(s)
if(u.d)B.W(B.U(y.a))
if(r==null)B.W(B.bN("Can't add a null to a map field",null))
v.m(0,r,q)}else u.G(u,e)
return}if((v&2)!==0){v=B.p(k).i("cZ.T")
if(w){p=m.mE(l,k,v)
for(l=e.a,v=x.J,t=J.bs(p),o=0;o<l.length;++o){s=l[o]
r=v.a(s.gbx().Q.$0())
r.kQ(s)
t.C(p,r)}}else J.oO(m.mE(l,k,v),e)
return}if(w){n=f?m.C8().c.h(0,x.G.a(k).gl_()):J.aG(m.c,k.e)
if(n==null){v=x.J
e=A.aS8(v.a(e),v)}else{n.kQ(e)
e=n}}if(f){l=m.C8()
x.G.a(k)
if(l.d)A.avo().$1(l.a.a.gbx().a)
if(k.gajn())B.W(B.bN(l.a.Oj(k,e,"repeating field (use get + .add())"),null))
if(l.d)A.avo().$1(l.a.a.gbx().a)
l.adR(k)
l.a.PJ(k,e)
l.b.m(0,k.gl_(),k)
l.aci(k,e)}else{m.PJ(k,e)
m.mT(l,k,e)}},
PJ(d,e){var w,v=this.f
if(!B.eC(v)||v)A.avo().$1(this.a.gbx().a)
w=A.aYY(d.f,e)
if(w!=null)throw B.d(B.bN(this.Oj(d,e,w),null))},
Oj(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbx().a+" to value ("+B.j(e)+"): "+f},
rP(){var w,v,u,t,s=this.a
if(!s.gbx().w)return!0
for(s=s.gbx().c,s=s.gaD(s),s=new B.cO(J.ad(s.a),s.b),w=this.c,v=J.ai(w),u=B.p(s).z[1];s.t();){t=s.a
if(t==null)t=u.a(t)
if(!t.Ms(v.h(w,t.e)))return!1}return this.a7W()},
a7W(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaD(u),u=new B.cO(J.ad(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Ms(this.d.c.h(0,v.gl_())))return!1}return!0}}
A.cV.prototype={
hb(){this.a=A.aWQ(this,this.gbx(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cV){w=this.a
w.toString
v=e.a
v.toString
v=w.a4j(v)
w=v}else w=!1
return w},
gv(d){return this.a.ga7Y()},
j(d){var w,v=new B.cA("")
this.a.VO(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
TH(d,e){var w=this.a.a.gbx(),v=this.a
v.toString
A.az4(w,v,d,e)},
F8(d,e,f){var w=e.Q
w.toString
return A.aDn(w,f)},
R3(d,e,f,g){return new A.fg(e.as,e.at,B.k(f,g),!1,f.i("@<0>").ai(g).i("fg<1,2>"))},
kQ(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.a9_(w)},
VR(d,e,f){return this.a.a1e(this,d,e,f)}}
A.Gz.prototype={
ga4T(){var w=this.c
if(w===$){w!==$&&B.aB()
w=this.c=new A.arn(this)}return w}}
A.NU.prototype={}
A.pt.prototype={
hX(d){return new B.DU("Cannot call "+d+" on an unmodifiable list")},
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
A.uM.prototype={
vh(){return new A.pt(this.a,A.azA(),this.$ti.i("pt<1>"))},
C(d,e){this.b.$1(e)
this.a.push(e)},
G(d,e){J.eV(e,this.b)
C.b.G(this.a,e)},
dQ(d,e,f){this.b.$1(f)
C.b.dQ(this.a,e,f)},
ev(d,e,f){J.eV(f,this.b)
C.b.ev(this.a,e,f)},
dI(d,e,f){J.eV(f,this.b)
C.b.dI(this.a,e,f)},
u(d,e){return C.b.u(this.a,e)},
bY(d,e){return C.b.bY(this.a,e)},
dj(d){return this.a.pop()},
b_(d,e,f,g,h){J.Ii(g,h).kf(0,f-e).M(0,this.b)
C.b.b_(this.a,e,f,g,h)},
ck(d,e,f,g){return this.b_(d,e,f,g,0)},
dF(d,e,f){return C.b.dF(this.a,e,f)}}
A.nE.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.nE&&A.xb(e,this)},
gv(d){return A.ayv(this.a)},
ga_(d){var w=this.a
return new J.fW(w,w.length)},
di(d,e,f){var w=this.a
return new B.aa(w,e,B.a7(w).i("@<1>").ai(f).i("aa<1,2>"))},
f2(d,e){return this.di(d,e,x.z)},
q(d,e){return C.b.q(this.a,e)},
M(d,e){C.b.M(this.a,e)},
hs(d,e,f){return C.b.il(this.a,e,f)},
il(d,e,f){return this.hs(d,e,f,x.z)},
j1(d,e){return C.b.j1(this.a,e)},
b6(d,e){return C.b.b6(this.a,e)},
nF(d){return this.b6(d,"")},
dK(d,e){return C.b.dK(this.a,e)},
dG(d,e){var w=this.a,v=B.a7(w)
return e?B.b(w.slice(0),v):J.pP(w.slice(0),v.c)},
dd(d){return this.dG(d,!0)},
jn(d){var w=this.a
return B.jZ(w,B.a7(w).c)},
gZ(d){return this.a.length===0},
gbS(d){return this.a.length!==0},
kf(d,e){var w=this.a
return B.dS(w,0,B.dy(e,"count",x.S),B.a7(w).c)},
iI(d,e){var w=this.a
return B.dS(w,e,null,B.a7(w).c)},
gK(d){return C.b.gK(this.a)},
gO(d){return C.b.gO(this.a)},
j6(d,e,f){return C.b.j6(this.a,e,f)},
q0(d,e){return this.j6(d,e,null)},
b1(d,e){return this.a[e]},
j(d){return B.pO(this.a,"[","]")},
h(d,e){return this.a[e]},
gp(d){return this.a.length},
bJ(d,e,f){return C.b.bJ(this.a,e,f)},
dZ(d,e){return this.bJ(d,e,null)},
qV(d,e,f){var w=this.a
B.d4(e,f,w.length,null,null)
return B.dS(w,e,f,B.a7(w).c)},
m(d,e,f){this.b.$1(f)
this.a[e]=f},
sp(d,e){var w=this.a
if(e>w.length)throw B.d(B.U("Extending protobuf lists is not supported"))
C.b.sp(w,e)}}
A.fg.prototype={
h(d,e){return this.c.h(0,e)},
m(d,e,f){var w="Can't add a null to a map field"
if(this.d)throw B.d(B.U(y.a))
if(e==null)B.W(B.bN(w,null))
if(f==null)B.W(B.bN(w,null))
this.c.m(0,e,f)},
k(d,e){var w,v,u,t,s=this
if(e==null)return!1
if(e===s)return!0
if(!(e instanceof A.fg))return!1
if(J.b_(e.gb7(e))!==J.b_(s.gb7(s)))return!1
for(w=s.c,v=J.ad(w.gb7(w)),u=e.c;v.t();){t=v.gD(v)
if(!J.f(u.h(0,t),w.h(0,t)))return!1}return!0},
gv(d){var w=this.c
w=w.gdC(w)
return w.il(w,0,new A.acN(this))},
gb7(d){var w=this.c
return w.gb7(w)},
u(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.u(0,e)},
ahG(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rB(t,w.i("@<aC.K>").ai(w.i("aC.V")).i("rB<1,2>"))),w=new B.Ff(J.ad(t.gb7(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.he()}return t}}
A.OT.prototype={
gv(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kx.prototype={
TG(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.hY(s,"mergeFieldFromBuffer")
w=C.e.cA(d,3)
switch(d&7){case 0:v=e.mO()
if(t.b)A.hY(s,"mergeVarintField")
C.b.C(t.lm(w).b,v)
return!0
case 1:v=e.Hw()
if(t.b)A.hY(s,"mergeFixed64Field")
C.b.C(t.lm(w).d,v)
return!0
case 2:v=e.v8()
if(t.b)A.hY(s,"mergeLengthDelimitedField")
C.b.C(t.lm(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.W(A.axe())
e.e=v+1
u=new A.kx(B.k(x.S,x.k))
u.ak0(e)
if(e.d!==(w<<3|4)>>>0)B.W(A.MF());--e.e
if(t.b)A.hY(s,"mergeGroupField")
C.b.C(t.lm(w).e,u)
return!0
case 4:return!1
case 5:v=e.oN(4).getUint32(0,!0)
if(t.b)A.hY(s,"mergeFixed32Field")
C.b.C(t.lm(w).c,v)
return!0
default:throw B.d(new A.ls("Protocol message tag had invalid wire type."))}},
ak0(d){var w
if(this.b)A.hY("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.Uz()
if(w===0||!this.TG(w,d))break}},
ak1(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.hY(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fC(w,w.r);v.t();){u=v.d
t=w.h(0,u)
t.toString
if(this.b)A.hY(s,"mergeField")
u=this.lm(u)
C.b.G(u.b,t.b)
C.b.G(u.c,t.c)
C.b.G(u.d,t.d)
C.b.G(u.a,t.a)
C.b.G(u.e,t.e)}},
lm(d){if(d===0)B.W(B.bN("Zero is not a valid field number.",null))
return this.a.bA(0,d,new A.ajo())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kx))return!1
return A.ayM(e.a,this.a)},
gv(d){var w={}
w.a=0
this.a.M(0,new A.ajp(w))
return w.a},
j(d){return this.Dl("")},
Dl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.cA("")
for(w=this.a,v=A.aGy(new B.b8(w,B.p(w).i("b8<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
p=w.h(0,q)
p.toString
for(p=p.gaD(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){m=p[n]
if(m instanceof A.kx){l=k.a+=d+B.j(q)+": {\n"
l+=m.Dl(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
he(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaD(w),w=new B.cO(J.ad(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).he()}this.b=!0}}
A.rm.prototype={
he(){var w,v=this
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
if(!(e instanceof A.rm))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.xb(e.a[w],v[w]))return!1
if(!A.xb(e.b,u.b))return!1
if(!A.xb(e.c,u.c))return!1
if(!A.xb(e.d,u.d))return!1
if(!A.xb(e.e,u.e))return!1
return!0},
gv(d){var w,v,u,t,s,r,q,p=this
for(w=p.a,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
for(r=J.ai(s),q=0;q<r.gp(s);++q){u=u+r.h(s,q)&536870911
u=u+((u&524287)<<10)&536870911
u^=u>>>6}u=u+((u&67108863)<<3)&536870911
u^=u>>>11
u=u+((u&16383)<<15)&536870911}for(w=p.b,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+7*J.x(w[t])&536870911
for(w=p.c,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+37*J.x(w[t])&536870911
for(w=p.d,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+53*J.x(w[t])&536870911
for(w=p.e,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t)u=u+J.x(w[t])&536870911
return u},
gaD(d){var w=this,v=B.ay(w.a,!0,x.z)
C.b.G(v,w.b)
C.b.G(v,w.c)
C.b.G(v,w.d)
C.b.G(v,w.e)
return v},
gp(d){return this.gaD(this).length}}
A.afk.prototype={}
A.afl.prototype={
yf(d){return this.agn(d)},
agn(d){var w=0,v=B.T(x.H),u,t=this,s
var $async$yf=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.N($.rS().fU(0,d),$async$yf)
case 3:u=t.ago(s.cc(f.buffer,0,null))
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$yf,v)},
ago(d){var w,v,u,t,s,r,q=A.aCA(d,1,null,0),p=q.Ut(),o=q.Ut(),n=p&8
C.e.cA(p,3)
if(n!==8)B.W(A.awf("Only DEFLATE compression supported: "+n))
if(C.e.bF((p<<8>>>0)+o,31)!==0)B.W(A.awf("Invalid FCHECK"))
if((o>>>5&1)!==0){q.zK()
B.W(A.awf("FDICT Encoding not currently supported"))}w=A.Mr(D.G0)
v=A.Mr(D.Gw)
u=new A.acn(new Uint8Array(32768))
v=new A.a9d(q,u,w,v)
v.b=!0
v.a86()
t=x.L.a(B.cc(u.c.buffer,0,u.a))
q.zK()
s=A.aD3()
q=Math.min(67108864,t.length)
r=new A.K6(t,q)
r.c=q
q=s.a.a.gbx()
w=s.a
w.toString
A.az4(q,w,r,D.AM)
if(r.d!==0)B.W(A.MF())
return this.aaW(this.aaZ(s),null).h2(new A.afq(null))},
aaZ(d){J.eV(d.a.oq(3,x.m),new A.afp())
return d},
aaW(d,e){var w=d.VR(2,x.N,x.L),v=J.ai(w)
if(v.gZ(w))return B.ch(d,x.H)
v=v.gdC(w)
return B.lk(v.di(v,new A.afm(this,e,d),x.K),x.P).bn(new A.afn(d),x.H)},
wj(d,e,f){return this.a3F(d,e,f)},
a3F(d,e,f){var w=0,v=B.T(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$wj=B.P(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.N(A.a0p(e),$async$wj)
case 7:r=h
if(m!=null){o=x.z
J.aAB(m,B.l(["imageSize",""+J.aOM(r)+"x"+J.aOG(r)],o,o))}u=r
w=1
break
t=2
w=6
break
case 4:t=3
l=s
q=B.aj(l)
p=B.aP(l)
if(m!=null){o=x.z
J.aAB(m,B.l(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.R(u,v)
case 2:return B.Q(s,v)}})
return B.S($async$wj,v)}}
A.XH.prototype={
aB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.gZ(e)||j.ay==null)return
j=j.ay.a.ae(1)
w=new B.L(j.a.ae(0),j.a.ae(1))
if(J.f7(w))return
d.bT(0)
try{v=new B.B(0,0,0+e.a,0+e.b)
if(k.e)d.lJ(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=F.aGH(k.b,new B.L(t,u),new B.L(s,j))
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
k.agX(d,e)}finally{d.by(0)}},
agX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.ad(w.ay.a.oq(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gD(v)
q=r.a.B8(0)
if(q.length!==0){w.ay.c.a.h(0,q)
p=!1}else p=!0
if(p)continue
o=J.aG(r.a.oq(1,u),w.gagh())
n=o.a.ri(2)
m=o.a.ri(3)
if(n){d.bT(0)
d.a4(0,new Float64Array(B.fq(B.b([o.a.ae(2).a.ae(0),o.a.ae(2).a.ae(1),0,0,o.a.ae(2).a.ae(2),o.a.ae(2).a.ae(3),0,0,0,0,1,0,o.a.ae(2).a.ae(4),o.a.ae(2).a.ae(5),0,1],t))))}if(m){d.bT(0)
d.i7(0,k.aeO(o.a.B8(3)))}r=o.a.ae(1).a.ae(2)
p=o.a.ae(1).a.ae(3)
l=o.a.ri(0)?C.d.X(o.a.ae(0)*255):255
k.agV(d,q,new B.B(0,0,r,p),l)
r=o.b
k.agW(d,r==null?o.a.oq(4,s):r,l)
w.ay.c.d.h(0,q)
if(m)d.by(0)
if(n)d.by(0)}},
agV(d,e,f,g){var w,v,u=this.c
u.ay.c.b.h(0,e)
w=u.ay.d.h(0,e)
if(w==null)return
v=$.aq().bc()
v.slW(this.d)
v.sqe(!0)
v.sag(0,B.a3(g,0,0,0))
d.iY(w,new B.B(0,0,w.gce(w),w.gcE(w)),f,v)
this.agY(d,e,f,g)},
agW(d,e,f){var w,v,u,t,s,r,q,p=J.ai(e)
if(p.gZ(e))return
for(p=p.ga_(e),w=x.n;p.t();){v=p.gD(p)
u=this.aeT(v)
if(v.a.ri(5)){d.bT(0)
d.a4(0,new Float64Array(B.fq(B.b([v.a.ae(5).a.ae(0),v.a.ae(5).a.ae(1),0,0,v.a.ae(5).a.ae(2),v.a.ae(5).a.ae(3),0,0,0,0,1,0,v.a.ae(5).a.ae(4),v.a.ae(5).a.ae(5),0,1],w))))}t=v.a.ae(4).a.ae(0)
if(t.a.rP()){s=$.aq().bc()
s.sqe(!0)
s.sa8(0,C.aH)
s.sag(0,B.a3(C.d.X(t.a.ae(3)*f),C.d.X(t.a.ae(0)*255),C.d.X(t.a.ae(1)*255),C.d.X(t.a.ae(2)*255)))
d.cu(u,s)}t=v.a.ae(4).a.ae(2)
if(t>0){s=$.aq().bc()
s.sa8(0,C.S)
if(v.a.ae(4).a.ae(1).a.rP())s.sag(0,B.a3(C.d.X(v.a.ae(4).a.ae(1).a.ae(3)*f),C.d.X(v.a.ae(4).a.ae(1).a.ae(0)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(1)*255),C.d.X(v.a.ae(4).a.ae(1).a.ae(2)*255)))
s.sf6(t)
switch(v.a.ae(4).a.ae(3)){case D.j2:s.sog(C.bU)
break
case D.xf:s.sog(C.O_)
break
case D.xg:s.sog(C.jd)
break}switch(v.a.ae(4).a.ae(4)){case D.j3:s.svW(C.e9)
break
case D.xh:s.svW(C.O0)
break
case D.xi:s.svW(C.O1)
break}s.sJ5(v.a.ae(4).a.ae(5))
r=[v.a.ae(4).a.ae(6),v.a.ae(4).a.ae(7),v.a.ae(4).a.ae(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cu(A.b_F(u,new A.Ji(B.b([t,q<0.1?0.1:q],w)),new A.Kz(r[2])),s)}else d.cu(u,s)}if(v.a.ri(5))d.by(0)}},
aeT(d){var w,v,u,t,s,r,q,p=$.aq().cb()
if(d.a.ae(0)===D.j4)return this.Qm(d.a.ae(1).a.B8(0),p)
else if(d.a.ae(0)===D.xk){w=d.a.ae(3)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
w=w.a.ae(3)
v-=t
u-=w
s=new B.B(v,u,v+t*2,u+w*2)
if(!s.gZ(s))p.p6(s)}else if(d.a.ae(0)===D.xj){w=d.a.ae(2)
v=w.a.ae(0)
u=w.a.ae(1)
t=w.a.ae(2)
r=w.a.ae(3)
w=w.a.ae(4)
q=B.qC(new B.B(v,u,v+t,u+r),new B.aZ(w,w))
if(!q.gZ(q))p.ej(q)}return p},
Qm(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.h(0,d)!=null){t=w.ay.e.h(0,d)
t.toString
return t}if(e==null)t.a=$.aq().cb()
w=B.a0A(d,B.aL("([a-df-zA-Z])",!0,!1,!1),new A.aqW(),null)
v=B.aL(",",!0,!1,!1)
u=B.kR(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.M(B.b(u.split("|||"),x.s),new A.aqX(t,this,d))
return t.a},
aeO(d){return this.Qm(d,null)},
agY(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.h(0,e)
return},
hG(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.Cm.prototype={
ad(){return new A.Gf(C.i)}}
A.PO.prototype={
sI0(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.dY(0)
w=d==null
if(w)t.L(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.ae(1)
u=w.a.w6(2)
if(u===0)u=20
t.e=B.cw(0,C.d.X(w.a.w6(3)/u*1000),0)}else t.e=C.n
t.sl(0,t.a)},
gagh(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.ae(1).a.w6(3)
v=t.a.ae(1).a.w6(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.d.X(v*u)))},
L(d){this.ch=!0
if(!this.CW)this.aR()}}
A.Gf.prototype={
av(){var w,v=this
v.aI()
w=v.a.c
v.d=w.ay
w.bf()
w=w.bE$
w.b=!0
w.a.push(v.gDi())
w=v.a.c
w.bf()
w=w.cv$
w.b=!0
w.a.push(v.gCF())},
aJ(d){var w,v,u,t=this
t.aX(d)
w=d.c
if(w!==t.a.c){v=t.gDi()
w.J(0,v)
u=t.gCF()
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
aaM(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.aw(new A.aqV(v))},
a7y(d){var w
if(d===C.P){this.a.toString
w=!0}else w=!1
if(w)this.a.c.L(0)},
n(){var w=this
w.d=null
w.a.c.J(0,w.gDi())
w.a.c.cp(w.gCF())
w.aH()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.rP()?C.x:new B.L(u.a.ae(1).a.ae(0),u.a.ae(1).a.ae(1))
if(t.gZ(t))return C.b4
w=this.a
w=w.c
return new B.iU(!0,v,B.pc(v,v,v,new A.XH(G.zj,w,C.dn,!1,w),t),v)}}
A.qe.prototype={
gbx(){return $.aIP()}}
A.lY.prototype={
gbx(){return $.aJe()}}
A.oT.prototype={
gbx(){return $.aIb()}}
A.pU.prototype={
gbx(){return $.aIM()}}
A.o8.prototype={
gbx(){return $.aJl()}}
A.qY.prototype={
gbx(){return $.aJ5()}}
A.qX.prototype={
gbx(){return $.aJ4()}}
A.qW.prototype={
gbx(){return $.aJ3()}}
A.r_.prototype={
gbx(){return $.aJ8()}}
A.qZ.prototype={
gbx(){return $.aJ9()}}
A.qV.prototype={
gbx(){return $.aJb()}}
A.li.prototype={
gbx(){return $.aIC()},
gr6(){var w=this.b
return w==null?this.a.oq(4,x.Y):w}}
A.lD.prototype={
gbx(){return $.aIO()},
n(){var w=this.d
w.gaD(w).M(0,new A.abG())
w.L(0)
this.e.L(0)}}
A.jc.prototype={}
A.km.prototype={}
A.kn.prototype={}
var z=a.updateTypes(["m()","dE()","H()","o0(Z)","A()","lD(y<at>)","m(cZ<@>,cZ<@>)","A(cV)","rm()","~(lY)","~(li)","q3()","~()","~(eF)","~(G?)","~(n[n?])","n()","y<m>()","qe()","lY()","oT()","kn?(m)","o8()","qY()","qX()","qW()","r_()","qZ()","qV()","li()","lD()","jc?(m)","km?(m)","pU()"])
A.ava.prototype={
$0(){return D.HI},
$S:z+11}
A.aoA.prototype={
$0(){return this.a.WR(this.b)},
$S:0}
A.aoB.prototype={
$0(){return this.a.WT(this.b)},
$S:0}
A.aoF.prototype={
$1(d){return new A.o0(new A.aoE(this.a),"md/rocket.svga",null)},
$S:z+3}
A.aoE.prototype={
$0(){return this.a.d.cT(0)},
$S:0}
A.aoD.prototype={
$1(d){return new A.o0(new A.aoC(this.a),"md/angle.svga",null)},
$S:z+3}
A.aoC.prototype={
$0(){return this.a.d.cT(0)},
$S:0}
A.arz.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sI0(null)
w.a.ahr()},
$S:7}
A.a29.prototype={
$2(d,e){return C.e.b9(d.d,e.d)},
$S:z+6}
A.au1.prototype={
$1(d){return J.dA(d,this.a.$0())},
$S:177}
A.au_.prototype={
$1(d){var w,v,u=this,t=u.a.f9(!0),s=u.c,r=u.b.a3E(s,u.d,t)
if(r==null){w=u.e.rH()
v=A.a9w(t)
if(w.b)A.hY("UnknownFieldSet","mergeVarintField")
C.b.C(w.lm(s).b,v)}else J.dA(d,r)},
$S:177}
A.au0.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:7}
A.a5Q.prototype={
$0(){return A.aDn(this.a,this.b)},
$S(){return this.b.i("uM<0>()")}}
A.a5S.prototype={
$0(){return this.a},
$S:42}
A.a5R.prototype={
$1(d){return d.a.rP()},
$S:z+7}
A.aaR.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fg(w.a,w.b,B.k(v,u),!1,v.i("@<0>").ai(u).i("fg<1,2>"))},
$S(){return this.d.i("@<0>").ai(this.e).i("fg<1,2>()")}}
A.amB.prototype={
$1(d){return J.ju(d)},
$S:62}
A.amD.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cV){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.VO(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.bE)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:53}
A.amE.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.nE)for(w=d.a,w=new J.fW(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fg)for(w=d.gdC(d),w=w.ga_(w),v=this.a;w.t();)v.$2(e,w.gD(w))
else this.a.$2(e,d)},
$S:484}
A.amC.prototype={
$1(d){var w=this.a,v=w.d.c.h(0,d)
w=w.d.b.h(0,d)
return this.b.$2(v,"["+B.j(w.gzk(w))+"]")},
$S:26}
A.arn.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.he()
v.b!==$&&B.aB()
v.b=w
u=w}return u},
$S(){return this.a.$ti.i("1()")}}
A.acN.prototype={
$2(d,e){var w=e.a,v=e.b
return(d^A.aF7(A.mh(A.mh(0,J.x(w)),J.x(v))))>>>0},
$S(){return this.a.$ti.i("m(m,bE<1,2>)")}}
A.ajo.prototype={
$0(){var w=x.X
return new A.rm(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.ajp.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.x(e)&536870911},
$S:485}
A.asU.prototype={
$1(d){return A.ayS(J.aG(this.a,d),J.aG(this.b,d))},
$S:54}
A.anJ.prototype={
$2(d,e){return A.mh(d,J.x(e))},
$S:486}
A.afq.prototype={
$0(){},
$S:7}
A.afp.prototype={
$1(d){var w={}
w.a=null
J.eV(d.a.oq(1,x.p),new A.afo(w))},
$S:z+9}
A.afo.prototype={
$1(d){if(J.js(d.gr6())&&J.b_(d.gr6())>0)if(J.aG(d.gr6(),0).a.ae(0)===D.xl&&this.a.a!=null)d.b=this.a.a
else if(J.js(d.gr6()))this.a.a=d.gr6()},
$S:z+10}
A.afm.prototype={
$1(d){return this.W1(d)},
W1(d){var w=0,v=B.T(x.P),u=this,t,s
var $async$$1=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.N(u.a.wj(t,new Uint8Array(B.fq(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.R(null,v)}})
return B.S($async$$1,v)},
$S:487}
A.afn.prototype={
$1(d){return this.a},
$S:z+5}
A.aqW.prototype={
$1(d){return"|||"+B.j(d.Io(1))+" "},
$S:172}
A.aqX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.a2(d,0,1)
if(C.c.q("MLHVCSQRZmlhvcsqrz",w)){v=C.c.eP(C.c.br(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bl(v[0])
t=B.bl(v[1])
u.b=t
u.a.dR(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bl(v[0])
t=u.b+B.bl(v[1])
u.b=t
u.a.dR(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bl(v[0])
t=B.bl(v[1])
u.b=t
u.a.cd(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bl(v[0])
t=u.b+B.bl(v[1])
u.b=t
u.a.cd(0,u.c,t)}else if(w==="H"){s=B.bl(v[0])
u=m.a
u.c=s
u.a.cd(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bl(v[0])
u.c=s
u.a.cd(0,s,u.b)}else if(w==="V"){t=B.bl(v[0])
u=m.a
u.b=t
u.a.cd(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bl(v[0])
u.b=t
u.a.cd(0,u.c,t)}else if(w==="C"){u=m.a
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
r.nd(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
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
r.nd(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
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
r.nd(q,p,o,n,u.c,t)}else{u.r=B.bl(v[0])
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
r.qy(q,p,u.c,t)}}else if(w==="s"){u=m.a
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
q.nd(r,p,o,n,u.c,t)}else{u.r=q+B.bl(v[0])
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
r.qy(q,p,u.c,t)}}else if(w==="Q"){u=m.a
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
r.qy(q,p,u.c,t)}else if(w==="q"){u=m.a
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
r.qy(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.bL(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:37}
A.aqV.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.abG.prototype={
$1(d){d.n()},
$S:488};(function aliases(){var w=A.HJ.prototype
w.a0O=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"azA","aYa",14)
v(A,"avo",1,null,["$2","$1"],["hY",function(d){return A.hY(d,null)}],15,0)
u(A,"b0X","aTI",16)
u(A,"b0U","aTF",17)
u(A,"b0T","aTE",4)
u(A,"b0W","aTH",0)
u(A,"b0V","aTG",2)
var r
t(r=A.K6.prototype,"gal5","al6",0)
t(r,"gal7","al8",1)
t(r,"gali","zK",0)
t(r,"galj","alk",1)
t(r,"gale","alf",0)
t(r,"galg","alh",1)
t(r,"gakZ","al_",0)
t(r,"gal0","al1",1)
t(r,"galb","alc",0)
t(r,"gald","Hw",1)
t(r,"gakU","akV",4)
t(r,"gal2","al3",2)
t(r,"gakW","akX",2)
t(r=A.Gf.prototype,"gDi","aaM",12)
s(r,"gCF","a7y",13)
u(A,"aHY","aTj",18)
u(A,"aI3","aVy",19)
u(A,"aHV","aPr",20)
u(A,"aHX","aSL",33)
u(A,"azI","aWi",22)
u(A,"aI0","aVe",23)
u(A,"aI_","aVd",24)
u(A,"aHZ","aVc",25)
u(A,"azH","aVh",26)
u(A,"aI1","aVi",27)
u(A,"aI2","aVk",28)
u(A,"aHW","aS0",29)
u(A,"b1g","aD3",30)
w(A,"b1j","aVj",31)
w(A,"b1h","aVf",32)
w(A,"b1i","aVg",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.IB,B.jM)
u(B.G,[A.a9t,A.aco,A.a8x,A.a9d,A.dE,A.Kz,A.Ji,A.a28,A.K6,A.ls,A.amw,A.amr,A.cZ,A.U9,A.cV,A.Gz,A.NU,A.OT,A.kx,A.rm,A.afk,A.afl])
v(A.a9s,A.a9t)
v(A.acn,A.aco)
u(B.iJ,[A.ava,A.aoA,A.aoB,A.aoE,A.aoC,A.arz,A.au0,A.a5Q,A.a5S,A.aaR,A.arn,A.ajo,A.afq,A.aqV])
u(B.a5,[A.q3,A.o0,A.Cm])
u(B.ab,[A.Vr,A.HJ,A.Gf])
u(B.fv,[A.aoF,A.aoD,A.au1,A.au_,A.a5R,A.amB,A.amC,A.asU,A.afp,A.afo,A.afm,A.afn,A.aqW,A.aqX,A.abG])
v(A.YH,A.HJ)
v(A.am_,B.rx)
u(B.l0,[A.a29,A.amD,A.amE,A.acN,A.ajp,A.anJ])
v(A.q6,A.cZ)
v(A.nE,B.a1)
u(A.nE,[A.pt,A.uM])
v(A.fg,B.aC)
v(A.XH,B.tx)
v(A.PO,B.jv)
u(A.cV,[A.qe,A.lY,A.oT,A.pU,A.o8,A.qY,A.qX,A.qW,A.r_,A.qZ,A.qV,A.li,A.lD])
u(A.OT,[A.jc,A.km,A.kn])
w(A.HJ,B.fj)})()
B.ms(b.typeUniverse,JSON.parse('{"IB":{"bW":[]},"dE":{"cu":["G"]},"q3":{"a5":[],"i":[]},"Vr":{"ab":["q3"]},"o0":{"a5":[],"i":[]},"YH":{"ab":["o0"]},"aRK":{"cZ":["1"]},"cZ":{"cZ.T":"1"},"uM":{"nE":["1"],"a1":["1"],"y":["1"],"a4":["1"],"q":["1"],"q.E":"1","a1.E":"1"},"fg":{"aC":["1","2"],"aO":["1","2"],"aC.V":"2","aC.K":"1"},"ls":{"bW":[]},"q6":{"cZ":["fg<1,2>?"],"cZ.T":"fg<1,2>?"},"pt":{"nE":["1"],"a1":["1"],"y":["1"],"a4":["1"],"q":["1"],"q.E":"1","a1.E":"1"},"nE":{"a1":["1"],"y":["1"],"a4":["1"],"q":["1"]},"Cm":{"a5":[],"i":[]},"XH":{"al":[]},"PO":{"jv":[],"bC":["H"],"al":[]},"Gf":{"ab":["Cm"]},"qe":{"cV":[]},"lY":{"cV":[]},"oT":{"cV":[]},"pU":{"cV":[]},"o8":{"cV":[]},"qY":{"cV":[]},"qX":{"cV":[]},"qW":{"cV":[]},"r_":{"cV":[]},"qZ":{"cV":[]},"qV":{"cV":[]},"li":{"cV":[]},"lD":{"cV":[]}}'))
B.H6(b.typeUniverse,JSON.parse('{"Ji":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.V
return{G:w("aRK<@>"),q:w("cZ<@>"),p:w("li"),K:w("ag<at>"),J:w("cV"),I:w("u2"),w:w("dE"),U:w("q<cV>"),R:w("q<@>"),M:w("t<cZ<@>>"),X:w("t<dE>"),r:w("t<y<m>>"),s:w("t<n>"),A:w("t<kx>"),D:w("t<i>"),n:w("t<H>"),t:w("t<m>"),b:w("t<~()>"),F:w("t<~(eF)>"),d:w("y<cV>"),j:w("y<@>"),L:w("y<m>"),T:w("q6<@,@>"),f:w("aO<@,@>"),H:w("lD"),P:w("at"),V:w("b9<~()>"),W:w("b9<~(eF)>"),u:w("nA"),Z:w("qn"),Y:w("qV"),m:w("lY"),N:w("n"),l:w("DB"),Q:w("dj"),B:w("kx"),k:w("rm"),y:w("A"),i:w("H"),z:w("@"),O:w("@()"),_:w("@(a2v,m)"),S:w("m"),o:w("u2?")}})();(function constants(){var w=a.makeConstList
D.Aq=new A.afl()
D.AM=new A.amr()
D.ES=new A.dE(0,0,0)
D.ET=new A.dE(4194303,4194303,1048575)
D.G_=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.G0=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.G2=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.j4=new A.jc(0,"SHAPE")
D.xj=new A.jc(1,"RECT")
D.xk=new A.jc(2,"ELLIPSE")
D.xl=new A.jc(3,"KEEP")
D.mi=B.b(w([D.j4,D.xj,D.xk,D.xl]),B.V("t<jc>"))
D.Gf=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Gv=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Gx=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Gw=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.GI=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.j3=new A.kn(0,"LineJoin_MITER")
D.xh=new A.kn(1,"LineJoin_ROUND")
D.xi=new A.kn(2,"LineJoin_BEVEL")
D.my=B.b(w([D.j3,D.xh,D.xi]),B.V("t<kn>"))
D.j2=new A.km(0,"LineCap_BUTT")
D.xf=new A.km(1,"LineCap_ROUND")
D.xg=new A.km(2,"LineCap_SQUARE")
D.mA=B.b(w([D.j2,D.xf,D.xg]),B.V("t<km>"))
D.HI=new A.q3(null)
D.av=new A.NU("com.opensource.svga")
D.Wa=new A.NU("")
D.T9=new B.de("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.Th=new B.de("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.UU=new A.am_(0,"Absolute")})();(function staticFields(){$.aWR=[]
$.aCf=B.k(B.V("lj?"),B.V("Gz<cV>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"b9c","aN4",()=>new A.ava())
v($,"b4l","aJw",()=>{var u=A.aWp()
u.he()
return u})
v($,"b3c","aIP",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hm("MovieParams",A.aHY(),D.av),r=x.i
s.fb(0,1,u,256,u,r)
s.fb(0,2,t,256,t,r)
r=x.S
s.dg(0,3,"fps",2048,r)
s.dg(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b3V","aJe",()=>{var u="imageKey",t="matteKey",s=A.hm("SpriteEntity",A.aI3(),D.av)
s.ti(1,u,u)
s.zA(0,2,"frames",2097154,A.aHW(),x.p)
s.ti(3,t,t)
s.w=!1
return s})
v($,"b1H","aIb",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hm("AudioEntity",A.aHV(),D.av)
n.ti(1,t,t)
u=x.S
n.fb(0,2,s,r,s,u)
n.fb(0,3,q,r,q,u)
n.fb(0,4,p,r,p,u)
n.fb(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b33","aIM",()=>{var u=A.hm("Layout",A.aHX(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.dg(0,3,"width",256,t)
u.dg(0,4,"height",256,t)
u.w=!1
return u})
v($,"b49","aJl",()=>{var u=A.hm("Transform",A.azI(),D.av),t=x.i
u.dg(0,1,"a",256,t)
u.dg(0,2,"b",256,t)
u.dg(0,3,"c",256,t)
u.dg(0,4,"d",256,t)
u.dg(0,5,"tx",256,t)
u.dg(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b3I","aJ5",()=>{var u=A.hm("ShapeEntity.ShapeArgs",A.aI0(),D.av)
u.PQ(1,"d")
u.w=!1
return u})
v($,"b3H","aJ4",()=>{var u="cornerRadius",t=A.hm("ShapeEntity.RectArgs",A.aI_(),D.av),s=x.i
t.dg(0,1,"x",256,s)
t.dg(0,2,"y",256,s)
t.dg(0,3,"width",256,s)
t.dg(0,4,"height",256,s)
t.fb(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b3G","aJ3",()=>{var u=A.hm("ShapeEntity.EllipseArgs",A.aHZ(),D.av),t=x.i
u.dg(0,1,"x",256,t)
u.dg(0,2,"y",256,t)
u.fb(0,3,"radiusX",256,"radiusX",t)
u.fb(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b3L","aJ8",()=>{var u=A.hm("ShapeEntity.ShapeStyle.RGBAColor",A.azH(),D.av),t=x.i
u.dg(0,1,"r",256,t)
u.dg(0,2,"g",256,t)
u.dg(0,3,"b",256,t)
u.dg(0,4,"a",256,t)
u.w=!1
return u})
v($,"b3M","aJ9",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hm("ShapeEntity.ShapeStyle",A.aI1(),D.av),n=B.V("r_")
o.jC(1,"fill",A.azH(),n)
o.jC(2,"stroke",A.azH(),n)
n=x.i
o.fb(0,3,u,256,u,n)
o.FG(0,4,"lineCap",512,D.j2,D.mA,"lineCap",A.b1h(),B.V("km"))
o.FG(0,5,t,512,D.j3,D.my,t,A.b1i(),B.V("kn"))
o.fb(0,6,s,256,s,n)
o.fb(0,7,r,256,r,n)
o.fb(0,8,q,256,q,n)
o.fb(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b3O","aJb",()=>{var u=A.hm("ShapeEntity",A.aI2(),D.av)
u.akl(0,B.b([2,3,4],x.t))
u.ah_(0,1,"type",512,D.j4,D.mi,A.b1j(),B.V("jc"))
u.jC(2,"shape",A.aI0(),B.V("qY"))
u.jC(3,"rect",A.aI_(),B.V("qX"))
u.jC(4,"ellipse",A.aHZ(),B.V("qW"))
u.jC(10,"styles",A.aI1(),B.V("qZ"))
u.jC(11,"transform",A.azI(),B.V("o8"))
u.w=!1
return u})
v($,"b2I","aIC",()=>{var u="clipPath",t=A.hm("FrameEntity",A.aHW(),D.av)
t.dg(0,1,"alpha",256,x.i)
t.jC(2,"layout",A.aHX(),B.V("pU"))
t.jC(3,"transform",A.azI(),B.V("o8"))
t.ti(4,u,u)
t.zA(0,5,"shapes",2097154,A.aI2(),x.Y)
t.w=!1
return t})
v($,"b3b","aIO",()=>{var u,t,s=null,r=A.hm("MovieEntity",A.b1g(),D.av)
r.PQ(1,"version")
r.jC(2,"params",A.aHY(),B.V("qe"))
u=A.hm("MovieEntity.ImagesEntry",s,D.av)
t=x.z
u.PT(0,1,"key",64,s,s,s,s,t)
u.PT(0,2,"value",32,s,s,s,s,t)
r.Bb(A.aT1("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.zA(0,4,"sprites",2097154,A.aI3(),x.m)
r.zA(0,5,"audios",2097154,A.aHV(),B.V("oT"))
r.w=!1
return r})
v($,"b3N","aJa",()=>A.axM(D.mi,B.V("jc")))
v($,"b3J","aJ6",()=>A.axM(D.mA,B.V("km")))
v($,"b3K","aJ7",()=>A.axM(D.my,B.V("kn")))})()}
$__dart_deferred_initializers__["ixdt4yjdHIKplLSE6Ig1Xck1Vq8="] = $__dart_deferred_initializers__.current
