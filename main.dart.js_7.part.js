((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_7",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aAr(d){return new A.JL(d,null,null)},
JL:function JL(d,e,f){this.a=d
this.b=e
this.c=f},
aGZ(d,e,f,g){var w,v
if(x.Q.b(d))w=B.c6(d.buffer,d.byteOffset,d.byteLength)
else w=x.L.b(d)?d:B.eQ(d,!0,x.S)
v=new A.acy(w,g,g,e)
v.e=f==null?w.length:f
return v},
acz:function acz(){},
acy:function acy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$},
afv:function afv(){},
afu:function afu(d){this.a=0
this.c=d},
Nj(d){var w=new A.abA()
w.a2W(d)
return w},
abA:function abA(){this.a=$
this.b=0
this.c=2147483647},
acj:function acj(d,e,f,g){var _=this
_.a=d
_.b=!1
_.c=e
_.e=_.d=0
_.r=f
_.w=g},
acC(d){var w,v,u,t,s,r
if(d<0){d=-d
w=!0}else w=!1
v=C.e.bU(d,17592186044416)
d-=v*17592186044416
u=C.e.bU(d,4194304)
t=d-u*4194304&4194303
s=u&4194303
r=v&1048575
return w?A.acD(0,0,0,t,s,r):new A.dN(t,s,r)},
aH_(d){var w=d[5]&255,v=d[7],u=d[6],t=d[2]&255,s=d[4],r=d[3]
return new A.dN((t<<16|(d[1]&255)<<8|d[0]&255)&4194303,(w<<18|(s&255)<<10|(r&255)<<2|t>>>6)&4194303,((v&255)<<12|(u&255)<<4|w>>>4)&1048575)},
aBm(d,e){return new A.dN(e&4194303,((d&4095)<<10|e>>>22&1023)&4194303,d>>>12&1048575)},
AN(d){if(d instanceof A.dN)return d
else if(B.jW(d))return A.acC(d)
throw B.d(B.e7(d,"other","not an int, Int32 or Int64"))},
aX_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(e===0&&f===0&&g===0)return"0"
w=(g<<4|f>>>18)>>>0
v=f>>>8&1023
g=(f<<2|e>>>20)&1023
f=e>>>10&1023
e&=1023
u=D.H5[d]
t=""
s=""
r=""
while(!0){if(!!(w===0&&v===0))break
q=C.e.ee(w,u)
v+=w-q*u<<10>>>0
p=C.e.ee(v,u)
g+=v-p*u<<10>>>0
o=C.e.ee(g,u)
f+=g-o*u<<10>>>0
n=C.e.ee(f,u)
e+=f-n*u<<10>>>0
m=C.e.ee(e,u)
l=C.c.br(C.e.fO(u+(e-m*u),d),1)
r=s
s=t
t=l
v=p
w=q
g=o
f=n
e=m}k=(g<<20>>>0)+(f<<10>>>0)+e
return h+(k===0?"":C.e.fO(k,d))+t+s+r},
acD(d,e,f,g,h,i){var w=d-g,v=e-h-(C.e.cH(w,22)&1)
return new A.dN(w&4194303,v&4194303,f-i-(C.e.cH(v,22)&1)&1048575)},
AO(d,e){var w=C.e.yg(d,e)
return w},
dN:function dN(d,e,f){this.a=d
this.b=e
this.c=f},
azD:function azD(){},
qn:function qn(d){this.a=d},
WP:function WP(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
asv:function asv(d,e){this.a=d
this.b=e},
asw:function asw(d,e){this.a=d
this.b=e},
asA:function asA(d){this.a=d},
asz:function asz(d){this.a=d},
asy:function asy(d){this.a=d},
asx:function asx(d){this.a=d},
om:function om(d,e,f){this.c=d
this.d=e
this.a=f},
a_c:function a_c(d,e,f){var _=this
_.d=$
_.e2$=d
_.bv$=e
_.a=null
_.b=f
_.c=null},
avX:function avX(d){this.a=d},
IS:function IS(){},
b43(d,e,f){var w,v,u,t,s,r,q,p,o=$.ad().bJ()
for(w=d.SQ(),w=w.ga3(w),v=e.a,u=f.a;w.t();){t=w.gG(w)
t.gq(t)
for(s=u,r=!0;s<t.gq(t);){q=e.b
if(q>=2)q=e.b=0
e.b=q+1
p=v[q]
if(r)o.yO(0,t.U3(s,s+p),C.h)
s+=p
r=!r}}return o},
apG:function apG(d,e){this.a=d
this.b=e},
Lk:function Lk(d){this.a=d},
Kt:function Kt(d){this.a=d
this.b=0},
hy(d,e,f){var w=B.b([],x.M),v=x.S,u=x.q,t=x.N,s=f.a
return new A.a40((s===""?"":s+".")+d,w,B.k(v,u),B.k(t,u),B.k(t,u),B.k(v,v),e)},
aDo(c0,c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null
B.im(c3,b9)
for(w=x.S,v=x.T,u=x.z,t=c0.c,s=c2.gap3(),r=c2.gap1(),q=c2.gaoQ(),p=c2.gaoO(),o=c2.gap9(),n=c2.gap8(),m=c2.gap6(),l=c2.gap4(),k=c2.gaoX(),j=c2.gaoV(),i=c2.gaoL(),h=c2.gaoS(),g=c2.gaoJ(),f=c2.a;!0;){e=c2.WL()
if(e===0)return
d=e&7
a0=C.e.cH(e,3)
a1=t.i(0,a0)
if(a1==null)a1=b9
if(a1==null||!A.b37(a1.f,d)){if(!c1.tb().VS(e,c2))return
continue}a2=a1.f&4294967290
switch(a2){case 16:c1.ex(c0,a1,c2.fp(!0)!==0)
break
case 32:c1.ex(c0,a1,new Uint8Array(B.eG(c2.vU())))
break
case 64:a3=c2.vU()
c1.ex(c0,a1,C.k7.dd(a3))
break
case 256:a3=c2.b+=4
if(a3>c2.c)B.I(A.kp())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.ex(c0,a1,a3.getFloat32(0,!0))
break
case 128:a3=c2.b+=8
if(a3>c2.c)B.I(A.kp())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-8,8)
c1.ex(c0,a1,a3.getFloat64(0,!0))
break
case 512:a6=c2.fp(!0)
a7=t.i(0,a0)
a8=a7==null?b9:a7.z
a3=(a8==null&&!0?b9.gaqo():a8).$1(a6)
if(a3==null){a9=c1.tb()
a3=A.acC(a6)
if(a9.b)A.ig("UnknownFieldSet","mergeVarintField")
C.b.D(a9.lH(a0).b,a3)}else c1.ex(c0,a1,a3)
break
case 1024:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC4():b0).$0()
b1=c1.xp(a1)
if(b1!=null)a3.l6(b1)
c2.WH(a0,a3,c3)
c1.ex(c0,a1,a3)
break
case 2048:c1.ex(c0,a1,c2.fp(!0))
break
case 4096:c1.ex(c0,a1,c2.nc())
break
case 8192:c1.ex(c0,a1,A.aFG(c2.fp(!1)))
break
case 16384:b2=c2.nc()
c1.ex(c0,a1,(b2.Y4(0,1).k(0,1)?A.acD(0,0,0,b2.a,b2.b,b2.c):b2).KD(0,1))
break
case 32768:c1.ex(c0,a1,c2.fp(!1))
break
case 65536:c1.ex(c0,a1,c2.nc())
break
case 131072:a3=c2.b+=4
if(a3>c2.c)B.I(A.kp())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.ex(c0,a1,a3.getUint32(0,!0))
break
case 262144:a3=c2.b+=8
if(a3>c2.c)B.I(A.kp())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c1.ex(c0,a1,A.aH_(b4))
break
case 524288:a3=c2.b+=4
if(a3>c2.c)B.I(A.kp())
a4=f.buffer
a5=f.byteOffset
a3=new DataView(a4,a5+a3-4,4)
c1.ex(c0,a1,a3.getInt32(0,!0))
break
case 1048576:a3=c2.b+=8
if(a3>c2.c)B.I(A.kp())
a4=f.buffer
a5=f.byteOffset
b3=new DataView(a4,a5+a3-8,8)
a3=b3.buffer
a4=b3.byteOffset
b4=new Uint8Array(a3,a4,8)
c1.ex(c0,a1,A.aH_(b4))
break
case 2097152:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC4():b0).$0()
b1=c1.xp(a1)
if(b1!=null)a3.l6(b1)
c2.WJ(a3,c3)
c1.ex(c0,a1,a3)
break
case 18:A.j3(c0,c1,c2,d,a1,g)
break
case 34:J.cV(c1.n4(c0,a1,u),new Uint8Array(B.eG(c2.vU())))
break
case 66:a3=c1.n4(c0,a1,u)
a4=c2.vU()
J.cV(a3,C.k7.dd(a4))
break
case 258:A.j3(c0,c1,c2,d,a1,h)
break
case 130:A.j3(c0,c1,c2,d,a1,i)
break
case 514:A.b2U(c0,c1,c2,d,a1,a0,c3)
break
case 1026:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC4():b0).$0()
c2.WH(a0,a3,c3)
J.cV(c1.n4(c0,a1,u),a3)
break
case 2050:A.j3(c0,c1,c2,d,a1,j)
break
case 4098:A.j3(c0,c1,c2,d,a1,k)
break
case 8194:A.j3(c0,c1,c2,d,a1,l)
break
case 16386:A.j3(c0,c1,c2,d,a1,m)
break
case 32770:A.j3(c0,c1,c2,d,a1,n)
break
case 65538:A.j3(c0,c1,c2,d,a1,o)
break
case 131074:A.j3(c0,c1,c2,d,a1,p)
break
case 262146:A.j3(c0,c1,c2,d,a1,q)
break
case 524290:A.j3(c0,c1,c2,d,a1,r)
break
case 1048578:A.j3(c0,c1,c2,d,a1,s)
break
case 2097154:a7=t.i(0,a0)
b0=a7==null?b9:a7.w
a3=(b0==null&&!0?b9.gC4():b0).$0()
c2.WJ(a3,c3)
J.cV(c1.n4(c0,a1,u),a3)
break
case 6291456:v.a(a1)
b5=a1.ay
a3=c1.Nw(c0,a1,u,u)
b6=c2.fp(!0)
b7=c2.c
c2.c=c2.b+b6
a4=b5.b
a5=A.aJt(a4.length)
A.aDo(b5,new A.Vt(b9,b9,a5,b5.f.a===0?b9:B.k(w,w)),c2,c3)
if(c2.d!==0)B.I(A.Nz())
c2.c=b7
b8=a5[0]
if(b8==null)b8=a4[0].r.$0()
b2=a5[1]
if(b2==null)b2=a4[1].r.$0()
a3.c.m(0,b8,b2)
break
default:throw B.d("Unknown field type "+a2)}}},
j3(d,e,f,g,h,i){A.aKX(d,e,f,g,h,new A.ayt(i))},
b2U(d,e,f,g,h,i,j){A.aKX(d,e,f,g,h,new A.ayr(f,d,i,j,e))},
aKX(d,e,f,g,h,i){var w,v,u,t=e.n4(d,h,x.z)
if(g===2){w=f.fp(!0)
if(w<0)B.I(B.bg(y.e,null))
v=w+f.b
u=f.c
if(u!==-1&&v>u||v>f.r)B.I(A.kp())
f.c=v
new A.ays(f,i,t).$0()
f.c=u}else i.$1(t)},
aFG(d){if((d&1)===1)return-C.e.cH(d,1)-1
else return C.e.cH(d,1)},
Nz(){return new A.lN("Protocol message end-group tag did not match expected tag.")},
aH1(){return new A.lN("CodedBufferReader encountered a malformed varint.")},
aBn(){return new A.lN("Protocol message had too many levels of nesting.  May be malicious.\nUse CodedBufferReader.setRecursionLimit() to increase the depth limit.\n")},
kp(){return new A.lN("While parsing a protocol message, the input ended unexpectedly\nin the middle of a field.  This could mean either than the\ninput has been truncated or that an embedded message\nmisreported its own length.\n")},
b2n(d,e){var w,v=null,u="not type double",t="not type int"
switch(d&4290772984){case 16:if(!B.eH(e))return"not type bool"
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
case 512:if(!(e instanceof A.PW))return"not type ProtobufEnum"
return v
case 2048:case 8192:case 524288:if(!B.jW(e))return t
if(!(-2147483648<=e&&e<=2147483647))return"out of range for signed 32-bit int"
return v
case 32768:case 131072:if(!B.jW(e))return t
if(!(0<=e&&e<=4294967295))return"out of range for unsigned 32-bit int"
return v
case 4096:case 16384:case 65536:case 262144:case 1048576:if(!(e instanceof A.dN))return"not Int64"
return v
case 1024:case 2097152:if(!(e instanceof A.cZ))return"not a GeneratedMessage"
return v
default:return"field has unknown type "+d}},
b1C(d){if(d==null)throw B.d(B.bg("Can't add a null to a repeated field",null))},
aWf(d,e,f,g,h,i,j,k,l,m,n){return new A.d2(d,e,f,g,A.aGz(g,i),l,m,null,n.h("d2<0>"))},
aWg(d,e,f,g,h,i,j,k,l,m,n){var w=new A.d2(d,e,f,g,new A.a8l(h,n),i,m,h,n.h("d2<0>"))
w.a2U(d,e,f,g,h,i,j,k,l,m,n)
return w},
aGz(d,e){if(e==null)return A.aY7(d)
if(x.O.b(e))return e
return new A.a8n(e)},
aXr(d,e,f,g,h,i,j,k,l,m,n,o){var w=A.aGz(g,new A.adV(h,i,j,n,o))
B.im(d,"name")
B.im(e,"tagNumber")
return new A.qp(h,i,j,d,e,f,g,w,null,null,null,n.h("@<0>").ab(o).h("qp<1,2>"))},
ig(d,e){if(e!=null)throw B.d(B.U("Attempted to call "+e+" on a read-only message ("+d+")"))
throw B.d(B.U("Attempted to change a read-only message ("+d+")"))},
b0e(d,e,f){var w,v=A.aJt(e.b.length)
if(e.f.a===0)w=null
else{w=x.S
w=B.k(w,w)}return new A.Vt(d,f,v,w)},
aJt(d){if(d===0)return $.b0f
return B.aQ(d,null,!1,x.z)},
aJs(d,e,f){var w,v
if(x.j.b(f)&&J.f1(f))return d
if(x.f.b(f)&&J.f1(f))return d
d=A.mF(d,e.d)
w=e.f
v=w&4290772984
if(v===32)d=A.mF(d,A.aCJ(f))
else if(v!==512)d=A.mF(d,J.z(f))
else d=(w&2)!==0?A.mF(d,A.aCJ(J.aTo(f,new A.aqh()))):A.mF(d,f.a)
return d},
aY7(d){switch(d){case 16:case 17:return A.b5h()
case 32:case 33:return A.b5i()
case 64:case 65:return A.b5l()
case 256:case 257:case 128:case 129:return A.b5j()
case 2048:case 2049:case 4096:case 4097:case 8192:case 8193:case 16384:case 16385:case 32768:case 32769:case 65536:case 65537:case 131072:case 131073:case 262144:case 262145:case 524288:case 524289:case 1048576:case 1048577:return A.b5k()
default:return null}},
aY6(){return""},
aY3(){return B.b([],x.t)},
aY2(){return!1},
aY5(){return 0},
aY4(){return 0},
aWE(d,e){var w,v=$.aGH.i(0,d)
if(v!=null)return v
w=new A.HC(d,e.h("HC<0>"))
$.aGH.m(0,d,w)
return w},
aWD(d,e){var w=e.a(d.gbz().Q.$0())
w.l6(d)
return w},
aHP(d,e){var w=B.b([],e.h("u<0>"))
B.im(d,"check")
return new A.vl(w,d,e.h("vl<0>"))},
aBZ(d,e){var w,v,u,t=B.k(x.S,e)
for(w=d.length,v=0;v<w;++v){u=d[v]
t.m(0,u.a,u)}return t},
b_L(){return new A.kV(B.k(x.S,x.k))},
aDa(d,e){var w
if(d instanceof A.cZ)return d.k(0,e)
if(e instanceof A.cZ)return!1
w=x.j
if(w.b(d)&&w.b(e))return A.xQ(d,e)
w=x.f
if(w.b(d)&&w.b(e))return A.aD5(d,e)
return J.f(d,e)},
xQ(d,e){var w,v=J.ar(d),u=J.ar(e)
if(v.gq(d)!==u.gq(e))return!1
for(w=0;w<v.gq(d);++w)if(!A.aDa(v.i(d,w),u.i(e,w)))return!1
return!0},
aD5(d,e){var w=J.ar(d)
if(w.gq(d)!==J.b_(e))return!1
return J.aT5(w.gbc(d),new A.axr(d,e))},
aL8(d,e){var w=B.eQ(d,!0,e)
C.b.i0(w)
return w},
mF(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
aJx(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
aCJ(d){return A.aJx(J.aT6(d,0,new A.arC()))},
b37(d,e){switch(d&4290772984){case 16:case 512:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:return e===0||e===2
case 256:case 131072:case 524288:return e===5||e===2
case 128:case 262144:case 1048576:return e===1||e===2
case 32:case 64:case 2097152:return e===2
case 1024:return e===3
default:return!1}},
a40:function a40(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.w=!0
_.x=null
_.Q=j},
a41:function a41(){},
ayt:function ayt(d){this.a=d},
ayr:function ayr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ays:function ays(d,e,f){this.a=d
this.b=e
this.c=f},
KQ:function KQ(d,e){var _=this
_.a=d
_.b=0
_.c=-1
_.e=_.d=0
_.r=e},
lN:function lN(d){this.a=d},
aqc:function aqc(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=!1},
aq7:function aq7(){},
d2:function d2(d,e,f,g,h,i,j,k,l){var _=this
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
a8l:function a8l(d,e){this.a=d
this.b=e},
a8n:function a8n(d){this.a=d},
a8m:function a8m(){},
qp:function qp(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
adV:function adV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Vt:function Vt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=null
_.f=!1
_.r=g},
aqh:function aqh(){},
aqj:function aqj(d,e){this.a=d
this.b=e},
aqk:function aqk(d){this.a=d},
aqi:function aqi(d,e){this.a=d
this.b=e},
cZ:function cZ(){},
HC:function HC(d,e){var _=this
_.a=d
_.c=_.b=$
_.$ti=e},
avG:function avG(d){this.a=d},
OY:function OY(d){this.a=d},
pM:function pM(d,e,f){this.a=d
this.b=e
this.$ti=f},
vl:function vl(d,e,f){this.a=d
this.b=e
this.$ti=f},
o1:function o1(){},
fq:function fq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.$ti=h},
afU:function afU(d){this.a=d},
PW:function PW(){},
kV:function kV(d){this.a=d
this.b=!1},
amQ:function amQ(){},
amR:function amR(d){this.a=d},
rG:function rG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=!1},
axr:function axr(d,e){this.a=d
this.b=e},
arC:function arC(){},
aic:function aic(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aid:function aid(){},
aii:function aii(d){this.a=d},
aih:function aih(){},
aig:function aig(d){this.a=d},
aie:function aie(d,e,f){this.a=d
this.b=e
this.c=f},
aif:function aif(d){this.a=d},
Ze:function Ze(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ave:function ave(){},
avf:function avf(d,e,f){this.a=d
this.b=e
this.c=f},
D6:function D6(d,e){this.c=d
this.a=e},
QW:function QW(d,e,f,g,h,i,j,k,l,m){var _=this
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
Hf:function Hf(d){var _=this
_.a=_.d=null
_.b=d
_.c=null},
avd:function avd(d){this.a=d},
aXH(){var w=new A.qy()
w.hp()
return w},
aZU(){var w=new A.mp()
w.hp()
return w},
aU_(){var w=new A.pc()
w.hp()
return w},
aXb(){var w=new A.qd()
w.hp()
return w},
b_D(){var w=new A.ou()
w.hp()
return w},
aZE(){var w=new A.rj()
w.hp()
return w},
aZD(){var w=new A.ri()
w.hp()
return w},
aZC(){var w=new A.rh()
w.hp()
return w},
aZH(){var w=new A.rl()
w.hp()
return w},
aZI(){var w=new A.rk()
w.hp()
return w},
aZK(){var w=new A.rg()
w.hp()
return w},
aWx(){var w=new A.lD()
w.hp()
return w},
aHs(){var w=x.N,v=x.I
w=new A.lX(new A.aic(B.k(w,x.y),B.k(w,v),B.k(w,x.l),B.k(w,x._)),B.k(w,v),B.k(w,x.W))
w.hp()
return w},
qy:function qy(){this.a=null},
mp:function mp(){this.a=null},
pc:function pc(){this.a=null},
qd:function qd(){this.a=null},
ou:function ou(){this.a=null},
rj:function rj(){this.a=null},
ri:function ri(){this.a=null},
rh:function rh(){this.a=null},
rl:function rl(){this.a=null},
rk:function rk(){this.a=null},
rg:function rg(){this.a=null},
lD:function lD(){this.a=this.b=null},
lX:function lX(d,e,f){var _=this
_.c=d
_.d=e
_.e=f
_.a=null},
aeN:function aeN(){},
aZJ(d){return $.aNL().i(0,d)},
aZF(d){return $.aNH().i(0,d)},
aZG(d){return $.aNI().i(0,d)},
jA:function jA(d,e){this.a=d
this.b=e},
kH:function kH(d,e){this.a=d
this.b=e},
kI:function kI(d,e){this.a=d
this.b=e},
a21(d){var w=0,v=B.T(x.I),u,t
var $async$a21=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:$.hf.toString
w=4
return B.M($.ad().jf(d,!1,null,null),$async$a21)
case 4:w=3
return B.M(f.hX(),$async$a21)
case 3:t=f
u=t.gfG(t)
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$a21,v)}},B,C,J,D
A=a.updateHolder(c[5],A)
B=c[0]
C=c[2]
J=c[1]
D=c[12]
A.JL.prototype={}
A.acz.prototype={}
A.acy.prototype={
gq(d){var w=this.e
w===$&&B.c()
return w-(this.b-this.c)},
gamS(){var w=this.b,v=this.e
v===$&&B.c()
return w>=this.c+v},
i(d,e){return this.a[this.b+e]},
WG(){return this.a[this.b++]},
AZ(){var w,v,u,t=this,s=t.a,r=t.b,q=t.b=r+1,p=s[r]&255
r=t.b=q+1
w=s[q]&255
q=t.b=r+1
v=s[r]&255
t.b=q+1
u=s[q]&255
if(t.d===1)return(p<<24|w<<16|v<<8|u)>>>0
return(u<<24|v<<16|w<<8|p)>>>0}}
A.afv.prototype={}
A.afu.prototype={
JN(d){var w,v,u,t,s=this,r=d.length
for(;w=s.a,v=w+r,u=s.c,t=u.length,v>t;)s.DD(v-t)
C.I.cl(u,w,v,d)
s.a+=r},
aqz(d){var w,v,u,t,s=this,r=d.c
while(!0){w=s.a
v=d.e
v===$&&B.c()
v=w+(v-(d.b-r))
u=s.c
t=u.length
if(!(v>t))break
s.DD(v-t)}C.I.b4(u,w,w+d.gq(d),d.a,d.b)
s.a=s.a+d.gq(d)},
KR(d,e){var w=this
if(d<0)d=w.a+d
if(e==null)e=w.a
else if(e<0)e=w.a+e
return B.c6(w.c.buffer,d,e-d)},
KQ(d){return this.KR(d,null)},
DD(d){var w=d!=null?d>32768?d:32768:32768,v=this.c,u=v.length,t=new Uint8Array((u+w)*2)
C.I.cl(t,0,u,v)
this.c=t},
a6y(){return this.DD(null)},
gq(d){return this.a}}
A.abA.prototype={
a2W(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=d.length
for(w=0;w<k;++w){v=d[w]
if(v>l.b)l.b=v
if(v<l.c)l.c=v}u=C.e.lw(1,l.b)
l.a=new Uint32Array(u)
for(t=1,s=0,r=2;t<=l.b;){for(v=t<<16,w=0;w<k;++w)if(J.f(d[w],t)){for(q=s,p=0,o=0;o<t;++o){p=(p<<1|q&1)>>>0
q=q>>>1}for(n=l.a,m=(v|w)>>>0,o=p;o<u;o+=r)n[o]=m;++s}++t
s=s<<1>>>0
r=r<<1>>>0}}}
A.acj.prototype={
aax(){var w,v,u,t,s=this
s.e=s.d=0
if(!s.b)return
w=s.a
w===$&&B.c()
v=w.c
while(!0){u=w.b
t=w.e
t===$&&B.c()
if(!(u<v+t))break
if(!s.ad6())break}},
ad6(){var w,v=this,u=v.a
u===$&&B.c()
if(u.gamS())return!1
w=v.ia(3)
switch(C.e.cH(w,1)){case 0:if(v.adg()===-1)return!1
break
case 1:if(v.N6(v.r,v.w)===-1)return!1
break
case 2:if(v.ad9()===-1)return!1
break
default:return!1}return(w&1)===0},
ia(d){var w,v,u,t,s=this
if(d===0)return 0
for(w=s.a;v=s.e,v<d;){w===$&&B.c()
u=w.b
t=w.e
t===$&&B.c()
if(u>=w.c+t)return-1
w.b=u+1
u=w.a[u]
s.d=(s.d|C.e.lw(u,v))>>>0
s.e=v+8}w=s.d
u=C.e.tI(1,d)
s.d=C.e.tK(w,d)
s.e=v-d
return(w&u-1)>>>0},
EW(d){var w,v,u,t,s,r,q,p=this,o=d.a
o===$&&B.c()
w=d.b
for(v=p.a;u=p.e,u<w;){v===$&&B.c()
t=v.b
s=v.e
s===$&&B.c()
if(t>=v.c+s)return-1
v.b=t+1
t=v.a[t]
p.d=(p.d|C.e.lw(t,u))>>>0
p.e=u+8}v=p.d
r=o[(v&C.e.lw(1,w)-1)>>>0]
q=r>>>16
p.d=C.e.tK(v,q)
p.e=u-q
return r&65535},
adg(){var w,v,u,t,s,r,q,p=this
p.e=p.d=0
w=p.ia(16)
v=p.ia(16)
if(w!==0&&w!==(v^65535)>>>0)return-1
v=p.a
v===$&&B.c()
if(w>v.gq(v))return-1
u=v.c
t=v.b-u+u
if(w<0){s=v.e
s===$&&B.c()
r=s-(t-u)}else r=w
q=A.aGZ(v.a,v.d,r,t)
v.b=v.b+q.gq(q)
p.c.aqz(q)
return 0},
ad9(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.ia(5)
if(l===-1)return-1
l+=257
if(l>288)return-1
w=m.ia(5)
if(w===-1)return-1;++w
if(w>32)return-1
v=m.ia(4)
if(v===-1)return-1
v+=4
if(v>19)return-1
u=new Uint8Array(19)
for(t=0;t<v;++t){s=m.ia(3)
if(s===-1)return-1
u[D.Hh[t]]=s}r=A.Nj(u)
q=l+w
p=new Uint8Array(q)
o=B.c6(p.buffer,0,l)
n=B.c6(p.buffer,l,w)
if(m.a5G(q,r,p)===-1)return-1
return m.N6(A.Nj(o),A.Nj(n))},
N6(d,e){var w,v,u,t,s,r,q,p=this
for(w=p.c;!0;){v=p.EW(d)
if(v<0||v>285)return-1
if(v===256)break
if(v<256){if(w.a===w.c.length)w.a6y()
w.c[w.a++]=v&255
continue}u=v-257
t=D.Ht[u]+p.ia(D.GR[u])
s=p.EW(e)
if(s<0||s>29)return-1
r=D.GV[s]+p.ia(D.Hj[s])
for(q=-r;t>r;){w.JN(w.KQ(q))
t-=r}if(t===r)w.JN(w.KQ(q))
else w.JN(w.KR(q,t-r))}for(w=p.a;q=p.e,q>=8;){p.e=q-8
w===$&&B.c()
if(--w.b<0)w.b=0}return 0},
a5G(d,e,f){var w,v,u,t,s,r,q=this
for(w=0,v=0;v<d;){u=q.EW(e)
if(u===-1)return-1
switch(u){case 16:t=q.ia(2)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=w}break
case 17:t=q.ia(3)
if(t===-1)return-1
t+=3
for(;s=t-1,t>0;t=s,v=r){r=v+1
f[v]=0}w=0
break
case 18:t=q.ia(7)
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
U(d,e){var w=A.AN(e),v=this.a+w.a,u=this.b+w.b+(v>>>22)
return new A.dN(v&4194303,u&4194303,this.c+w.c+(u>>>22)&1048575)},
ac(d,e){var w=A.AN(e)
return A.acD(this.a,this.b,this.c,w.a,w.b,w.c)},
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=A.AN(a1),h=this.a,g=h&8191,f=this.b,e=h>>>13|(f&15)<<9,d=f>>>4&8191
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
Y4(d,e){var w=A.AN(e)
return new A.dN(this.a&w.a&4194303,this.b&w.b&4194303,this.c&w.c&1048575)},
KD(d,e){var w,v,u,t,s,r,q,p=this,o=1048575,n=4194303
if(e>=64)return(p.c&524288)!==0?D.FQ:D.FP
w=p.c
v=(w&524288)!==0
if(v&&!0)w+=3145728
if(e<22){u=A.AO(w,e)
if(v)u|=~C.e.tK(o,e)&1048575
t=p.b
s=22-e
r=A.AO(t,e)|C.e.lw(w,s)
q=A.AO(p.a,e)|C.e.lw(t,s)}else if(e<44){u=v?o:0
t=e-22
r=A.AO(w,t)
if(v)r|=~C.e.yg(n,t)&4194303
q=A.AO(p.b,t)|C.e.lw(w,44-e)}else{u=v?o:0
r=v?n:0
t=e-44
q=A.AO(w,t)
if(v)q|=~C.e.yg(n,t)&4194303}return new A.dN(q&4194303,r&4194303,u&1048575)},
k(d,e){var w,v=this
if(e==null)return!1
if(e instanceof A.dN)w=e
else if(B.jW(e)){if(v.c===0&&v.b===0)return v.a===e
if((e&4194303)===e)return!1
w=A.acC(e)}else w=null
if(w!=null)return v.a===w.a&&v.b===w.b&&v.c===w.c
return!1},
aU(d,e){return this.a54(e)},
a54(d){var w=A.AN(d),v=this.c,u=v>>>19,t=w.c
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
return A.aX_(10,t,s,r,u)},
$ibO:1}
A.qn.prototype={
ae(){return new A.WP(C.i)}}
A.WP.prototype={
H(d){var w=null,v=x.D
return B.kK(C.cr,B.b([new B.dV(C.q,w,w,B.aGT("md/live.jpg",w,w,w,w),w),new B.dV(C.cs,w,w,B.fu(B.fG(B.b([C.c4,B.np(D.Uj,new A.asv(this,d),w),C.c4,B.np(D.U7,new A.asw(this,d),w)],v),C.a0,C.fo,C.Z),w,300),w)],v),C.P,C.bE,w)},
Z5(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.m1(new A.asA(v),!1)
u=B.aBC(d,x.u)
u.toString
w=v.d
w.toString
u.vc(0,w)},
Z2(d){var w,v=this,u=v.d
if(u!=null&&u.d.a!=null)return
v.d=B.m1(new A.asy(v),!1)
u=B.aBC(d,x.u)
u.toString
w=v.d
w.toString
u.vc(0,w)}}
A.om.prototype={
ae(){return new A.a_c(null,null,C.i)},
akO(){return this.c.$0()}}
A.a_c.prototype={
au(){var w,v=this,u=null
v.aH()
w=new A.QW(0,1,u,C.ez,C.o,u,C.a9,C.B,new B.aX(B.b([],x.F),x.V),new B.aX(B.b([],x.b),x.R))
w.LS(C.ez,u,C.o,0,u,1,u,v)
v.d=w
v.Al()},
n(){this.a2I()
var w=this.d
w===$&&B.c()
w.sJK(null)
w.CW=!0
w.ZQ()},
H(d){var w=this.d
w===$&&B.c()
return new A.D6(w,null)},
Al(){var w=0,v=B.T(x.z),u=this,t,s
var $async$Al=B.P(function(d,e){if(d===1)return B.Q(e,v)
while(true)switch(w){case 0:w=2
return B.M(D.AV.zn(u.a.d),$async$Al)
case 2:t=e
s=u.d
s===$&&B.c()
s.sJK(t)
u.d.ZR(0,null).a.a.fQ(new A.avX(u))
return B.R(null,v)}})
return B.S($async$Al,v)}}
A.IS.prototype={
n(){var w=this,v=w.bv$
if(v!=null)v.K(0,w.gfY())
w.bv$=null
w.aG()},
by(){this.cM()
this.cn()
this.fZ()}}
A.apG.prototype={
J(){return"_DashOffsetType."+this.b}}
A.Lk.prototype={
k(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.Lk&&e.a===this.a&&!0},
gC(d){return B.V(this.a,D.VU,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
A.Kt.prototype={}
A.a40.prototype={
tY(d,e,f,g,h,i,j,k,l,m){var w=null,v=this.b.length
this.CE(e===0?new A.d2("<removed field>",0,v,0,w,w,w,w,x.q):A.aWf(f,e,v,g,w,h,k,l,i,j,m))},
S1(d,e,f,g,h,i,j,k,l){return this.tY(d,e,f,g,h,i,j,k,null,l)},
CE(d){var w,v=this
v.b.push(d)
w=d.d
if(w!==0){v.c.m(0,w,d)
v.d.m(0,""+w,d)
v.e.m(0,d.b,d)}},
ft(d,e,f,g,h,i){var w=null
this.tY(0,e,f,g,w,w,w,w,h,i)},
dw(d,e,f,g,h){return this.ft(d,e,f,g,null,h)},
tX(d,e,f){var w=null
this.tY(0,d,e,64,w,w,w,w,f,x.N)},
RZ(d,e){return this.tX(d,e,null)},
He(d,e,f,g,h,i,j,k,l){this.tY(0,e,f,g,h,null,k,i,j,l)},
akk(d,e,f,g,h,i,j,k){return this.He(d,e,f,g,h,i,null,j,k)},
AN(d,e,f,g,h,i){var w=null
this.CE(A.aWg(f,e,this.b.length,g,A.aDW(),h,w,w,w,w,i))},
jF(d,e,f,g){this.tY(0,d,e,2097152,A.aWE(f,g).ga7_(),f,null,null,null,g)},
ao7(d,e){var w,v
for(w=this.f,v=0;v<3;++v)w.m(0,e[v],d)},
gwM(){var w=this.x
return w==null?this.x=this.a5e():w},
a5e(){var w=this.c
w=B.eQ(w.gaz(w),!1,x.q)
C.b.cz(w,new A.a41())
return w},
a5H(d,e,f){var w=this.c.i(0,d),v=w==null?null:w.z
return(v==null&&!0?null.gaqo():v).$1(f)}}
A.KQ.prototype={
CZ(d){var w=this.b+=d
if(w>this.c)throw B.d(A.kp())},
WH(d,e,f){var w=this,v=w.e
if(v>=64)throw B.d(A.aBn())
w.e=v+1
e.VT(w,f)
if(w.d!==(d<<3|4)>>>0)B.I(A.Nz());--w.e},
WJ(d,e){var w,v,u=this,t=u.fp(!0),s=u.e
if(s>=64)throw B.d(A.aBn())
if(t<0)throw B.d(B.bg(y.e,null))
w=u.c
v=u.b+t
u.c=v
if(v>w)throw B.d(A.kp())
u.e=s+1
d.VT(u,e)
if(u.d!==0)B.I(A.Nz());--u.e
u.c=w},
aoW(){return this.fp(!0)},
aoY(){return this.nc()},
AZ(){return this.fp(!1)},
apa(){return this.nc()},
ap5(){return A.aFG(this.fp(!1))},
ap7(){var w=this.nc(),v=A.AN(1),u=w.a,t=w.b,s=w.c
return(new A.dN(u&v.a&4194303,t&v.b&4194303,s&v.c&1048575).k(0,1)?A.acD(0,0,0,u,t,s):w).KD(0,1)},
aoP(){return this.pj(4).getUint32(0,!0)},
aoR(){return this.Jf()},
ap2(){return this.pj(4).getInt32(0,!0)},
Jf(){var w=this.pj(8),v=B.c6(w.buffer,w.byteOffset,8),u=v[5]&255,t=v[7],s=v[6],r=v[2]&255,q=v[4],p=v[3]
return new A.dN((r<<16|(v[1]&255)<<8|v[0]&255)&4194303,(u<<18|(q&255)<<10|(p&255)<<2|r>>>6)&4194303,((t&255)<<12|(s&255)<<4|u>>>4)&1048575)},
aoK(){return this.fp(!0)!==0},
vU(){var w,v=this,u=v.fp(!0)
v.CZ(u)
w=v.a
return B.c6(w.buffer,w.byteOffset+v.b-u,u)},
aoT(){return this.pj(4).getFloat32(0,!0)},
aoM(){return this.pj(8).getFloat64(0,!0)},
WL(){var w,v=this
if(v.b>=v.c)return v.d=0
w=v.d=v.fp(!1)
if(C.e.cH(w,3)===0)throw B.d(new A.lN("Protocol message contained an invalid tag (zero)."))
return w},
adT(){this.CZ(1)
return this.a[this.b-1]},
fp(d){var w,v,u,t,s,r=this,q=r.b,p=r.c-q
if(p>10)p=10
for(w=r.a,v=0,u=0;u<p;++u,q=t){t=q+1
s=w[q]
v=(v|C.e.tI(s&127,u*7))>>>0
if((s&128)===0){r.b=t
return d?v-2*((v&2147483648)>>>0):v}}r.b=q
throw B.d(A.aH1())},
nc(){var w,v,u,t,s,r,q=this
for(w=q.a,v=0,u=0;u<4;++u){t=++q.b
if(t>q.c)B.I(A.kp())
s=w[t-1]
v=(v|C.e.tI(s&127,u*7))>>>0
if((s&128)===0)return A.aBm(0,v)}s=q.adT()
v=(v|(s&15)<<28)>>>0
r=s>>>4&7
if((s&128)===0)return A.aBm(r,v)
for(u=0;u<5;++u){t=++q.b
if(t>q.c)B.I(A.kp())
s=w[t-1]
r=(r|C.e.tI(s&127,u*7+3))>>>0
if((s&128)===0)return A.aBm(r,v)}throw B.d(A.aH1())},
pj(d){var w
this.CZ(d)
w=this.a
return B.nW(w.buffer,w.byteOffset+this.b-d,d)}}
A.lN.prototype={
j(d){return"InvalidProtocolBufferException: "+this.a},
$ibJ:1}
A.aqc.prototype={
agS(d){var w
d.gar0()
w=this.a
w.a.gbz()
w=B.bg("Extension "+B.j(d)+" not legal for message "+w.gabA(),null)
throw B.d(w)},
afe(d,e){var w,v=this.a.e
if(v!=null){w=d.glh()
if(v.b)A.ig("UnknownFieldSet","clearField")
v.a.A(0,w)}this.c.m(0,d.glh(),e)},
hu(){var w,v,u,t,s,r,q,p,o,n=this
if(n.d)return
n.d=!0
for(w=n.b,w=w.gaz(w),w=new B.cI(J.af(w.a),w.b),v=B.p(w).z[1],u=n.c,t=x.J,s=x.d;w.t();){r=w.a
if(r==null)r=v.a(r)
if(r.gan2()){q=u.i(0,r.glh())
if(q==null)continue
if(r.gamU())for(p=J.af(s.a(q));p.t();)p.gG(p).a.hu()
u.m(0,r.glh(),q.w4())}else if(r.gamU()){o=u.i(0,r.glh())
if(o!=null)t.a(o).a.hu()}}}}
A.aq7.prototype={}
A.d2.prototype={
a2U(d,e,f,g,h,i,j,k,l,m,n){B.im(this.b,"name")
B.im(this.d,"tagNumber")},
gWM(){var w,v=this
if((v.f&2)!==0){w=v.a
if(w==null){w=B.p(v)
w=v.a=new A.pM(B.b([],w.h("u<d2.T>")),A.aDW(),w.h("pM<d2.T>"))}return w}return v.r.$0()},
Oq(d){var w
if(d==null)return(this.f&1)===0
w=this.f
if((w&2098176)===0)return!0
if((w&2)===0)return d.a.tj()
w=J.ar(d)
if(w.ga0(d))return!0
if(!w.i(d,0).a.a.gbz().w)return!0
return w.j8(d,new A.a8m())},
j(d){return this.b}}
A.qp.prototype={}
A.Vt.prototype={
gabA(){return this.a.gbz().a},
Dz(){var w=this.d
if(w==null){w=x.S
w=this.d=new A.aqc(this,B.k(w,x.G),B.k(w,x.z))}return w},
tb(){var w=this.e
if(w==null){w=this.f
if(!B.eH(w)||w)return $.aO5()
w=this.e=new A.kV(B.k(x.S,x.k))}return w},
hu(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.f
if(!B.eH(k)||k)return
l.f=!0
for(k=l.a.gbz().gwM(),w=k.length,v=l.c,u=x.J,t=x.d,s=0;s<w;++s){r=k[s]
q=r.f
if((q&2)!==0){p=r.e
o=v[p]
if(o==null)continue
if((q&2098176)!==0)for(q=J.af(t.a(o));q.t();)q.gG(q).a.hu()
v[p]=o.w4()}else if((q&4194304)!==0){q=r.e
n=v[q]
if(n==null)continue
v[q]=n.al1()}else if((q&2098176)!==0){m=v[r.e]
if(m!=null)u.a(m).a.hu()}}if(l.d!=null)l.Dz().hu()
if(l.e!=null)l.tb().hu()},
a79(d){var w,v
if((d.f&2)===0)return d.r.$0()
w=this.f
if(!B.eH(w)||w)return d.gWM()
w=this.a
v=w.GH(d.d,d,B.p(d).h("d2.T"))
this.nh(w.gbz(),d,v)
return v},
a7a(d,e){var w,v=this.f
if(!B.eH(v)||v)return d.gWM()
v=this.a
v.toString
w=v.GH(d.d,e.h("d2<0>").a(d),e)
this.nh(v.gbz(),d,w)
return w},
a7b(d,e,f){var w,v,u=this.f
if(!B.eH(u)||u)return new A.fq(d.as,d.at,B.a5k(B.k(e,f),e,f),!1,e.h("@<0>").ab(f).h("fq<1,2>"))
u=this.a
w=d.$ti
v=u.Te(d.d,d,w.c,w.z[1])
this.nh(u.gbz(),d,v)
return v},
xp(d){var w=this.c[d.e]
return w},
a4X(d){var w,v,u,t,s,r=this,q=r.f
if(!B.eH(q)||q)A.azN().$1(r.a.gbz().a)
w=r.a.gbz()
v=w.c.i(0,d)
if(v!=null){r.c[v.e]=null
q=w.f
u=v.d
if(q.aa(0,u)){t=r.r
t.toString
t.A(0,q.i(0,u))}s=q.i(0,u)
if(s!=null)r.r.m(0,s,0)
return}q=r.d
if(q!=null)q.b.i(0,d)},
ex(d,e,f){B.im(e,"fi")
this.nh(d,e,f)},
n4(d,e,f){var w,v=this.xp(e)
if(v!=null)return f.h("w<0>").a(v)
w=this.a.GH(e.d,e,B.p(e).h("d2.T"))
this.nh(d,e,w)
return w},
Nw(d,e,f,g){var w,v,u=this.xp(e)
if(u!=null)return f.h("@<0>").ab(g).h("fq<1,2>").a(u)
w=e.$ti
v=this.a.Te(e.d,e,w.c,w.z[1])
this.nh(d,e,v)
return f.h("@<0>").ab(g).h("fq<1,2>").a(v)},
nh(d,e,f){var w,v=e.d,u=d.f.i(0,v)
if(u!=null){w=this.r
this.a4X(w.i(0,u))
w.m(0,u,v)}this.c[e.e]=f},
aj(d){var w=this.c[d]
if(w!=null)return w
return this.a79(this.a.gbz().b[d])},
oU(d,e){var w=this.c[d]
if(w!=null)return e.h("w<0>").a(w)
return this.a7a(e.h("d2<0>").a(this.a.gbz().b[d]),e)},
a3d(d,e,f,g){var w=this.c[e]
if(w!=null)return f.h("@<0>").ab(g).h("aH<1,2>").a(w)
return this.a7b(f.h("@<0>").ab(g).h("qp<1,2>").a(this.a.gbz().b[e]),f,g)},
wY(d){var w=this.c[d]
if(w==null)return 0
return w},
CB(d){var w=this.c[d]
if(w==null)return""
return w},
rQ(d){var w=this.c[d]
if(w==null)return!1
if(x.j.b(w))return J.k_(w)
return!0},
a6p(d){var w,v,u,t=this
if(t.a.gbz()!==d.a.gbz())return!1
for(w=t.c,v=d.c,u=0;u<w.length;++u)if(!t.a6o(w[u],v[u]))return!1
w=t.d
if(w==null||w.c.a===0){w=d.d
if(w!=null&&w.c.a!==0)return!1}else{w.toString
v=d.d
if(!(v!=null&&A.aD5(w.c,v.c)))return!1}w=t.e
if(w==null||w.a.a===0){w=d.e
if(w!=null&&w.a.a!==0)return!1}else if(!J.f(w,d.e))return!1
return!0},
a6o(d,e){var w,v=d==null
if(!v&&e!=null)return A.aDa(d,e)
w=v?e:d
if(w==null)return!0
if(x.j.b(w)&&J.f1(w))return!0
if(x.f.b(w)&&J.f1(w))return!0
return!1},
gaan(){var w,v,u,t,s,r,q,p,o=this,n=o.f
n=(B.jW(n)?n:null)!=null
if(n){n=o.f
n=B.jW(n)?n:null
n.toString
return n}n=o.a
w=A.mF(0,B.fO(n.gbz()))
v=o.c
for(n=n.gbz().gwM(),u=n.length,t=0;t<u;++t){s=n[t]
r=v[s.e]
if(r==null)continue
w=A.aJs(w,s,r)}n=o.d
if(n!=null){u=n.c
q=A.aL8(new B.bf(u,B.p(u).h("bf<1>")),x.S)
for(p=q.length,n=n.b,t=0;t<q.length;q.length===p||(0,B.J)(q),++t){s=n.i(0,q[t])
w=A.aJs(w,s,u.i(0,s.glh()))}}n=o.e
n=n==null?null:n.gC(n)
w=A.mF(w,n==null?0:n)
n=o.f
if((!B.eH(n)||n)&&!0)o.f=w
return w},
Y0(d,e){var w,v,u,t,s,r,q,p=this,o=new A.aqk(new A.aqj(d,e))
for(w=p.a.gbz().gwM(),v=w.length,u=p.c,t=0;t<v;++t){s=w[t]
r=u[s.e]
q=s.b
o.$2(r,q===""?C.e.j(s.d):q)}w=p.d
if(w!=null){w=w.b
v=B.p(w).h("bf<1>")
v=B.al(new B.bf(w,v),!0,v.h("q.E"))
C.b.i0(v)
C.b.O(v,new A.aqi(p,o))}w=p.e
if(w!=null)d.a+=w.j(0)
else d.a+=new A.kV(B.k(x.S,x.k)).ET("")},
abz(d){var w,v,u,t,s,r,q
for(w=d.a.gbz().gwM(),v=w.length,u=d.c,t=0;t<v;++t){s=w[t]
r=u[s.e]
if(r!=null)this.P_(s,r,!1)}w=d.d
if(w!=null)for(v=w.c,u=B.fN(v,v.r),w=w.b;u.t();){q=w.i(0,u.d)
this.P_(q,v.i(0,q.glh()),!0)}if(d.e!=null){w=this.tb()
v=d.e
v.toString
w.anN(v)}},
P_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.a.gbz(),j=k.c.i(0,d.d)
if(j==null&&f)j=d
w=(d.f&2098176)!==0
v=j.f
if((v&4194304)!==0){x.T.a(j)
v=j.$ti
u=l.Nw(k,j,v.c,v.z[1])
if((j.at&2098176)!==0)for(v=J.af(J.a2w(e)),t=u.c,s=x.J;v.t();){r=v.gG(v)
q=r.a
r=s.a(r.b)
p=s.a(r.gbz().Q.$0())
p.l6(r)
if(u.d)B.I(B.U(y.a))
if(q==null)B.I(B.bg("Can't add a null to a map field",null))
t.m(0,q,p)}else u.I(u,e)
return}if((v&2)!==0){v=B.p(j).h("d2.T")
if(w){o=l.n4(k,j,v)
for(v=e.a,t=x.J,s=J.bG(o),n=0;n<v.length;++n){r=v[n]
q=t.a(r.gbz().Q.$0())
q.l6(r)
s.D(o,q)}}else J.p7(l.n4(k,j,v),e)
return}if(w){m=f?l.Dz().c.i(0,x.G.a(j).glh()):l.c[j.e]
if(m==null){v=x.J
e=A.aWD(v.a(e),v)}else{m.l6(e)
e=m}}if(f){v=l.Dz()
x.G.a(j)
if(v.d)A.azN().$1(v.a.a.gbz().a)
if(j.gan2())B.I(B.bg(v.a.Qj(j,e,"repeating field (use get + .add())"),null))
if(v.d)A.azN().$1(v.a.a.gbz().a)
v.agS(j)
v.a.RN(j,e)
v.b.m(0,j.glh(),j)
v.afe(j,e)}else{l.RN(j,e)
l.nh(k,j,e)}},
RN(d,e){var w,v=this.f
if(!B.eH(v)||v)A.azN().$1(this.a.gbz().a)
w=A.b2n(d.f,e)
if(w!=null)throw B.d(B.bg(this.Qj(d,e,w),null))},
Qj(d,e,f){return"Illegal to set field "+d.b+" ("+d.d+") of "+this.a.gbz().a+" to value ("+B.j(e)+"): "+f},
tj(){var w,v,u,t=this.a
if(!t.gbz().w)return!0
for(t=t.gbz().c,t=t.gaz(t),t=new B.cI(J.af(t.a),t.b),w=this.c,v=B.p(t).z[1];t.t();){u=t.a
if(u==null)u=v.a(u)
if(!u.Oq(w[u.e]))return!1}return this.aal()},
aal(){var w,v,u=this.d
if(u==null)return!0
for(u=u.b,u=u.gaz(u),u=new B.cI(J.af(u.a),u.b),w=B.p(u).z[1];u.t();){v=u.a
if(v==null)v=w.a(v)
if(!v.Oq(this.d.c.i(0,v.glh())))return!1}return!0}}
A.cZ.prototype={
hp(){this.a=A.b0e(this,this.gbz(),null)},
k(d,e){var w,v
if(e==null)return!1
if(this===e)return!0
if(e instanceof A.cZ){w=this.a
w.toString
v=e.a
v.toString
v=w.a6p(v)
w=v}else w=!1
return w},
gC(d){return this.a.gaan()},
j(d){var w,v=new B.bW("")
this.a.Y0(v,"")
w=v.a
return w.charCodeAt(0)==0?w:w},
VT(d,e){var w=this.a.a.gbz(),v=this.a
v.toString
A.aDo(w,v,d,e)},
GH(d,e,f){var w=e.Q
w.toString
return A.aHP(w,f)},
Te(d,e,f,g){return new A.fq(e.as,e.at,B.k(f,g),!1,f.h("@<0>").ab(g).h("fq<1,2>"))},
l6(d){var w,v=this.a
v.toString
w=d.a
w.toString
return v.abz(w)},
Y3(d,e,f){return this.a.a3d(this,d,e,f)}}
A.HC.prototype={
ga7_(){var w=this.c
if(w===$){w!==$&&B.aB()
w=this.c=new A.avG(this)}return w}}
A.OY.prototype={}
A.pM.prototype={
hy(d){return new B.EF("Cannot call "+d+" on an unmodifiable list")},
m(d,e,f){return B.I(this.hy("set"))},
sq(d,e){B.I(this.hy("set length"))},
dY(d,e,f){return B.I(this.hy("setAll"))},
D(d,e){return B.I(this.hy("add"))},
I(d,e){return B.I(this.hy("addAll"))},
dI(d,e,f){return B.I(this.hy("insert"))},
dT(d,e,f){return B.I(this.hy("insertAll"))},
A(d,e){return B.I(this.hy("remove"))},
cz(d,e){return B.I(this.hy("sort"))},
bN(d,e){return B.I(this.hy("removeAt"))},
d2(d){return B.I(this.hy("removeLast"))},
b4(d,e,f,g,h){return B.I(this.hy("setRange"))},
cl(d,e,f,g){return this.b4(d,e,f,g,0)},
dV(d,e,f){return B.I(this.hy("removeRange"))}}
A.vl.prototype={
w4(){return new A.pM(this.a,A.aDW(),this.$ti.h("pM<1>"))},
D(d,e){this.b.$1(e)
this.a.push(e)},
I(d,e){J.ek(e,this.b)
C.b.I(this.a,e)},
cz(d,e){return C.b.cz(this.a,e)},
dI(d,e,f){this.b.$1(f)
C.b.dI(this.a,e,f)},
dT(d,e,f){J.ek(f,this.b)
C.b.dT(this.a,e,f)},
dY(d,e,f){J.ek(f,this.b)
C.b.dY(this.a,e,f)},
A(d,e){return C.b.A(this.a,e)},
bN(d,e){return C.b.bN(this.a,e)},
d2(d){return this.a.pop()},
b4(d,e,f,g,h){J.Ju(g,h).kg(0,f-e).O(0,this.b)
C.b.b4(this.a,e,f,g,h)},
cl(d,e,f,g){return this.b4(d,e,f,g,0)},
dV(d,e,f){return C.b.dV(this.a,e,f)}}
A.o1.prototype={
k(d,e){if(e==null)return!1
return e instanceof A.o1&&A.xQ(e,this)},
gC(d){return A.aCJ(this.a)},
ga3(d){var w=this.a
return new J.hx(w,w.length)},
dm(d,e,f){var w=this.a
return new B.a6(w,e,B.a7(w).h("@<1>").ab(f).h("a6<1,2>"))},
eH(d,e){return this.dm(d,e,x.z)},
p(d,e){return C.b.p(this.a,e)},
O(d,e){C.b.O(this.a,e)},
hL(d,e,f){return C.b.iz(this.a,e,f)},
iz(d,e,f){return this.hL(d,e,f,x.z)},
j8(d,e){return C.b.j8(this.a,e)},
bf(d,e){return C.b.bf(this.a,e)},
o6(d){return this.bf(d,"")},
eh(d,e){return C.b.eh(this.a,e)},
dX(d,e){var w=this.a,v=B.a7(w)
return e?B.b(w.slice(0),v):J.q8(w.slice(0),v.c)},
dW(d){return this.dX(d,!0)},
hV(d){var w=this.a
return B.kr(w,B.a7(w).c)},
ga0(d){return this.a.length===0},
gbC(d){return this.a.length!==0},
kg(d,e){var w=this.a
return B.dR(w,0,B.dv(e,"count",x.S),B.a7(w).c)},
hZ(d,e){var w=this.a
return B.dR(w,e,null,B.a7(w).c)},
gL(d){return C.b.gL(this.a)},
gS(d){return C.b.gS(this.a)},
b_(d,e){return this.a[e]},
j(d){return B.q7(this.a,"[","]")},
i(d,e){return this.a[e]},
gq(d){return this.a.length},
bx(d,e,f){return C.b.bx(this.a,e,f)},
ec(d,e){return this.bx(d,e,null)},
rp(d,e,f){var w=this.a
B.d5(e,f,w.length,null,null)
return B.dR(w,e,f,B.a7(w).c)},
m(d,e,f){this.b.$1(f)
this.a[e]=f},
sq(d,e){var w=this.a
if(e>w.length)throw B.d(B.U("Extending protobuf lists is not supported"))
C.b.sq(w,e)}}
A.fq.prototype={
i(d,e){return this.c.i(0,e)},
m(d,e,f){var w="Can't add a null to a map field"
if(this.d)throw B.d(B.U(y.a))
if(e==null)B.I(B.bg(w,null))
if(f==null)B.I(B.bg(w,null))
this.c.m(0,e,f)},
k(d,e){var w,v,u,t,s=this
if(e==null)return!1
if(e===s)return!0
if(!(e instanceof A.fq))return!1
if(J.b_(e.gbc(e))!==J.b_(s.gbc(s)))return!1
for(w=s.c,v=J.af(w.gbc(w)),u=e.c;v.t();){t=v.gG(v)
if(!J.f(u.i(0,t),w.i(0,t)))return!1}return!0},
gC(d){var w=this.c
w=w.gdg(w)
return w.iz(w,0,new A.afU(this))},
gbc(d){var w=this.c
return w.gbc(w)},
A(d,e){if(this.d)throw B.d(B.U(y.a))
return this.c.A(0,e)},
al1(){var w,v,u,t=this
t.d=!0
if((t.b&2098176)!==0)for(w=t.$ti,x.U.a(new B.rX(t,w.h("@<ay.K>").ab(w.h("ay.V")).h("rX<1,2>"))),w=new B.Ge(J.af(t.gbc(t)),t),v=B.p(w).z[1];w.t();){u=w.c;(u==null?v.a(u):u).a.hu()}return t}}
A.PW.prototype={
gC(d){return this.a},
j(d){var w=this.b
return w===""?C.e.j(this.a):w},
gl(d){return this.a}}
A.kV.prototype={
VS(d,e){var w,v,u,t=this,s="UnknownFieldSet"
if(t.b)A.ig(s,"mergeFieldFromBuffer")
w=C.e.cH(d,3)
switch(d&7){case 0:v=e.nc()
if(t.b)A.ig(s,"mergeVarintField")
C.b.D(t.lH(w).b,v)
return!0
case 1:v=e.Jf()
if(t.b)A.ig(s,"mergeFixed64Field")
C.b.D(t.lH(w).d,v)
return!0
case 2:v=e.vU()
if(t.b)A.ig(s,"mergeLengthDelimitedField")
C.b.D(t.lH(w).a,v)
return!0
case 3:v=e.e
if(v>=64)B.I(A.aBn())
e.e=v+1
u=new A.kV(B.k(x.S,x.k))
u.anM(e)
if(e.d!==(w<<3|4)>>>0)B.I(A.Nz());--e.e
if(t.b)A.ig(s,"mergeGroupField")
C.b.D(t.lH(w).e,u)
return!0
case 4:return!1
case 5:v=e.pj(4).getUint32(0,!0)
if(t.b)A.ig(s,"mergeFixed32Field")
C.b.D(t.lH(w).c,v)
return!0
default:throw B.d(new A.lN("Protocol message tag had invalid wire type."))}},
anM(d){var w
if(this.b)A.ig("UnknownFieldSet","mergeFromCodedBufferReader")
for(;!0;){w=d.WL()
if(w===0||!this.VS(w,d))break}},
anN(d){var w,v,u,t,s="UnknownFieldSet"
if(this.b)A.ig(s,"mergeFromUnknownFieldSet")
for(w=d.a,v=B.fN(w,w.r);v.t();){u=v.d
t=w.i(0,u)
t.toString
if(this.b)A.ig(s,"mergeField")
u=this.lH(u)
C.b.I(u.b,t.b)
C.b.I(u.c,t.c)
C.b.I(u.d,t.d)
C.b.I(u.a,t.a)
C.b.I(u.e,t.e)}},
lH(d){if(d===0)B.I(B.bg("Zero is not a valid field number.",null))
return this.a.bq(0,d,new A.amQ())},
k(d,e){if(e==null)return!1
if(!(e instanceof A.kV))return!1
return A.aD5(e.a,this.a)},
gC(d){var w={}
w.a=0
this.a.O(0,new A.amR(w))
return w.a},
j(d){return this.ET("")},
ET(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=new B.bW("")
for(w=this.a,v=A.aL8(new B.bf(w,B.p(w).h("bf<1>")),x.S),u=v.length,t=d+"  ",s=d+"}\n",r=0;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
p=w.i(0,q)
p.toString
for(p=p.gaz(p),o=p.length,n=0;n<p.length;p.length===o||(0,B.J)(p),++n){m=p[n]
if(m instanceof A.kV){l=k.a+=d+B.j(q)+": {\n"
l+=m.ET(t)
k.a=l
k.a=l+s}else k.a+=d+B.j(q)+": "+B.j(m)+"\n"}}w=k.a
return w.charCodeAt(0)==0?w:w},
hu(){var w,v,u
if(this.b)return
for(w=this.a,w=w.gaz(w),w=new B.cI(J.af(w.a),w.b),v=B.p(w).z[1];w.t();){u=w.a;(u==null?v.a(u):u).hu()}this.b=!0}}
A.rG.prototype={
hu(){var w,v=this
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
if(!(e instanceof A.rG))return!1
if(u.a.length!==e.a.length)return!1
for(w=0;v=u.a,w<v.length;++w)if(!A.xQ(e.a[w],v[w]))return!1
if(!A.xQ(e.b,u.b))return!1
if(!A.xQ(e.c,u.c))return!1
if(!A.xQ(e.d,u.d))return!1
if(!A.xQ(e.e,u.e))return!1
return!0},
gC(d){var w,v,u,t,s,r,q,p=this
for(w=p.a,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
for(r=J.ar(s),q=0;q<r.gq(s);++q){u=u+r.i(s,q)&536870911
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
A.aic.prototype={}
A.aid.prototype={
zn(d){return this.ajJ(d)},
ajJ(d){var w=0,v=B.T(x.H),u,t=this,s
var $async$zn=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:s=B
w=3
return B.M($.tc().ha(0,d),$async$zn)
case 3:u=t.ajK(s.c6(f.buffer,0,null))
w=1
break
case 1:return B.R(u,v)}})
return B.S($async$zn,v)},
ajK(d){var w,v,u,t,s,r,q,p=A.aGZ(d,1,null,0),o=p.WG(),n=p.WG(),m=o&8
C.e.cH(o,3)
if(m!==8)B.I(A.aAr("Only DEFLATE compression supported: "+m))
if(C.e.cw((o<<8>>>0)+n,31)!==0)B.I(A.aAr("Invalid FCHECK"))
if((n>>>5&1)!==0){p.AZ()
B.I(A.aAr("FDICT Encoding not currently supported"))}w=A.Nj(D.GS)
v=A.Nj(D.Hi)
u=new A.afu(new Uint8Array(32768))
v=new A.acj(p,u,w,v)
v.b=!0
v.aax()
t=x.L.a(B.c6(u.c.buffer,0,u.a))
p.AZ()
s=A.aHs()
p=Math.min(67108864,t.length)
r=new A.KQ(t,p)
r.c=p
q=s.a.a.gbz()
p=s.a
p.toString
A.aDo(q,p,r,D.Bh)
if(r.d!==0)B.I(A.Nz())
return this.adJ(this.adM(s),null).fQ(new A.aii(null))},
adM(d){J.ek(d.a.oU(3,x.m),new A.aih())
return d},
adJ(d,e){var w=d.Y3(2,x.N,x.L),v=J.ar(w)
if(v.ga0(w))return B.cd(d,x.H)
v=v.gdg(w)
return B.lE(v.dm(v,new A.aie(this,e,d),x.K),x.P).b1(new A.aif(d),x.H)},
xf(d,e,f){return this.a5I(d,e,f)},
a5I(d,e,f){var w=0,v=B.T(x.o),u,t=2,s,r,q,p,o,n,m,l
var $async$xf=B.P(function(g,h){if(g===1){s=h
w=t}while(true)switch(w){case 0:m=null
t=4
w=7
return B.M(A.a21(e),$async$xf)
case 7:r=h
if(m!=null){o=x.z
J.aEY(m,B.m(["imageSize",""+J.aTk(r)+"x"+J.aTc(r)],o,o))}u=r
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
J.aEY(m,B.m(["error",B.j(q),"stack",B.j(p)],o,o))}u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.R(u,v)
case 2:return B.Q(s,v)}})
return B.S($async$xf,v)}}
A.Ze.prototype={
aB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.c
if(j.ch){j.ch=!1
return}if(e.ga0(e)||j.ay==null)return
j=j.ay.a.aj(1)
w=new B.L(j.a.aj(0),j.a.aj(1))
if(J.f1(w))return
d.c8(0)
try{v=new B.C(0,0,0+e.a,0+e.b)
if(k.e)d.kK(v)
j=v
u=w
t=0+u.a-0
u=0+u.b-0
s=j.c-j.a
j=j.d-j.b
r=B.aLi(k.b,new B.L(t,u),new B.L(s,j))
q=r.b
p=r.a
o=q.a/p.a
n=q.b/p.b
m=new B.L(t*o,u*n).du(0,2)
l=new B.L(s,j).du(0,2)
j=l.a-m.a
s=l.b-m.b
if(!new B.o(j,s).k(0,C.h))d.aC(0,j,s)
if(o!==1&&n!==1)d.e8(0,o,n)
k.akh(d,e)}finally{d.bS(0)}},
akh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.c,v=J.af(w.ay.a.oU(3,x.m)),u=x.p,t=x.n,s=x.Y;v.t();){r=v.gG(v)
q=r.a.CB(0)
if(q.length!==0){w.ay.c.a.i(0,q)
p=!1}else p=!0
if(p)continue
o=J.aK(r.a.oU(1,u),w.gajD())
n=o.a.rQ(2)
m=o.a.rQ(3)
if(n){d.c8(0)
d.a8(0,new Float64Array(B.eG(B.b([o.a.aj(2).a.aj(0),o.a.aj(2).a.aj(1),0,0,o.a.aj(2).a.aj(2),o.a.aj(2).a.aj(3),0,0,0,0,1,0,o.a.aj(2).a.aj(4),o.a.aj(2).a.aj(5),0,1],t))))}if(m){d.c8(0)
d.hE(0,k.ai4(o.a.CB(3)))}r=o.a.aj(1).a.aj(2)
p=o.a.aj(1).a.aj(3)
l=o.a.rQ(0)?C.d.Y(o.a.aj(0)*255):255
k.akf(d,q,new B.C(0,0,r,p),l)
r=o.b
k.akg(d,r==null?o.a.oU(4,s):r,l)
w.ay.c.d.i(0,q)
if(m)d.bS(0)
if(n)d.bS(0)}},
akf(d,e,f,g){var w,v,u=this.c
u.ay.c.b.i(0,e)
w=u.ay.d.i(0,e)
if(w==null)return
v=$.ad().b5()
v.smg(this.d)
v.sqG(!0)
v.sao(0,B.W(g,0,0,0))
d.jO(w,new B.C(0,0,w.gcv(w),w.gck(w)),f,v)
this.aki(d,e,f,g)},
akg(d,e,f){var w,v,u,t,s,r,q,p=J.ar(e)
if(p.ga0(e))return
for(p=p.ga3(e),w=x.n;p.t();){v=p.gG(p)
u=this.ai8(v)
if(v.a.rQ(5)){d.c8(0)
d.a8(0,new Float64Array(B.eG(B.b([v.a.aj(5).a.aj(0),v.a.aj(5).a.aj(1),0,0,v.a.aj(5).a.aj(2),v.a.aj(5).a.aj(3),0,0,0,0,1,0,v.a.aj(5).a.aj(4),v.a.aj(5).a.aj(5),0,1],w))))}t=v.a.aj(4).a.aj(0)
if(t.a.tj()){s=$.ad().b5()
s.sqG(!0)
s.saf(0,C.aH)
s.sao(0,B.W(C.d.Y(t.a.aj(3)*f),C.d.Y(t.a.aj(0)*255),C.d.Y(t.a.aj(1)*255),C.d.Y(t.a.aj(2)*255)))
d.cZ(u,s)}t=v.a.aj(4).a.aj(2)
if(t>0){s=$.ad().b5()
s.saf(0,C.W)
if(v.a.aj(4).a.aj(1).a.tj())s.sao(0,B.W(C.d.Y(v.a.aj(4).a.aj(1).a.aj(3)*f),C.d.Y(v.a.aj(4).a.aj(1).a.aj(0)*255),C.d.Y(v.a.aj(4).a.aj(1).a.aj(1)*255),C.d.Y(v.a.aj(4).a.aj(1).a.aj(2)*255)))
s.sf3(t)
switch(v.a.aj(4).a.aj(3)){case D.jC:s.smQ(C.bW)
break
case D.xP:s.smQ(C.jO)
break
case D.xQ:s.smQ(C.yq)
break}switch(v.a.aj(4).a.aj(4)){case D.jD:s.soK(C.el)
break
case D.xR:s.soK(C.jP)
break
case D.xS:s.soK(C.OS)
break}s.sKN(v.a.aj(4).a.aj(5))
r=[v.a.aj(4).a.aj(6),v.a.aj(4).a.aj(7),v.a.aj(4).a.aj(8)]
t=r[0]
if(t>0||r[1]>0){if(t<1)t=1
q=r[1]
d.cZ(A.b43(u,new A.Kt(B.b([t,q<0.1?0.1:q],w)),new A.Lk(r[2])),s)}else d.cZ(u,s)}if(v.a.rQ(5))d.bS(0)}},
ai8(d){var w,v,u,t,s,r,q,p=$.ad().bJ()
if(d.a.aj(0)===D.jE)return this.Sy(d.a.aj(1).a.CB(0),p)
else if(d.a.aj(0)===D.xU){w=d.a.aj(3)
v=w.a.aj(0)
u=w.a.aj(1)
t=w.a.aj(2)
w=w.a.aj(3)
v-=t
u-=w
s=new B.C(v,u,v+t*2,u+w*2)
if(!s.ga0(s))p.lV(s)}else if(d.a.aj(0)===D.xT){w=d.a.aj(2)
v=w.a.aj(0)
u=w.a.aj(1)
t=w.a.aj(2)
r=w.a.aj(3)
w=w.a.aj(4)
q=B.ma(new B.C(v,u,v+t,u+r),new B.aV(w,w))
if(!q.ga0(q))p.dP(q)}return p},
Sy(d,e){var w,v,u,t={}
t.a=e
w=this.c
if(w.ay.e.i(0,d)!=null){t=w.ay.e.i(0,d)
t.toString
return t}if(e==null)t.a=$.ad().bJ()
w=B.y3(d,B.az("([a-df-zA-Z])",!0,!1,!1),new A.ave(),null)
v=B.az(",",!0,!1,!1)
u=B.fg(w,v," ")
t.b=t.c=0
t.d=t.e=t.f=t.r=null
C.b.O(B.b(u.split("|||"),x.s),new A.avf(t,this,d))
return t.a},
ai4(d){return this.Sy(d,null)},
aki(d,e,f,g){var w=this.c.ay.c.c
if(w.a===0)return
w.i(0,e)
return},
fS(d){var w,v=this,u=v.c
if(u.ch)return!0
w=d.c
return!(w===u&&J.f(w.ay,u.ay)&&d.b===v.b&&d.d===v.d&&d.e===v.e)}}
A.D6.prototype={
ae(){return new A.Hf(C.i)}}
A.QW.prototype={
sJK(d){var w,v,u,t=this
if(t.CW)return
w=t.r
if(w!=null&&w.a!=null)t.eb(0)
w=d==null
if(w)t.P(0)
v=t.ay
if(v!=null&&!0)v.n()
t.ay=d
if(!w){w=d.a.aj(1)
u=w.a.wY(2)
if(u===0)u=20
t.e=B.cg(0,C.d.Y(w.a.wY(3)/u*1000),0)}else t.e=C.o
t.sl(0,t.a)},
gajD(){var w,v,u,t=this.ay
if(t==null)return 0
w=t.a.aj(1).a.wY(3)
v=t.a.aj(1).a.wY(3)
u=this.x
u===$&&B.c()
return Math.min(w-1,Math.max(0,C.d.Y(v*u)))},
P(d){this.ch=!0
if(!this.CW)this.ad()}}
A.Hf.prototype={
au(){var w,v=this
v.aH()
w=v.a.c
v.d=w.ay
w.bi()
w=w.cb$
w.b=!0
w.a.push(v.gEP())
w=v.a.c
w.bi()
w=w.cB$
w.b=!0
w.a.push(v.gEa())},
aK(d){var w,v,u,t=this
t.aV(d)
w=d.c
if(w!==t.a.c){v=t.gEP()
w.K(0,v)
u=t.gEa()
w.cu(u)
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
adz(){var w,v=this
if(v.c!=null){w=v.a.c
w=!w.CW&&!J.f(v.d,w.ay)}else w=!1
if(w)v.al(new A.avd(v))},
a9V(d){var w
if(d===C.T){this.a.toString
w=!0}else w=!1
if(w)this.a.c.P(0)},
n(){var w=this
w.d=null
w.a.c.K(0,w.gEP())
w.a.c.cu(w.gEa())
w.aG()},
H(d){var w,v=null,u=this.d,t=u==null||!u.a.tj()?C.C:new B.L(u.a.aj(1).a.aj(0),u.a.aj(1).a.aj(1))
if(t.ga0(t))return C.aK
w=this.a
w=w.c
return B.AC(B.lk(v,v,v,new A.Ze(C.zS,w,C.bQ,!1,w),t),!0,v)}}
A.qy.prototype={
gbz(){return $.aNr()}}
A.mp.prototype={
gbz(){return $.aNP()}}
A.pc.prototype={
gbz(){return $.aMR()}}
A.qd.prototype={
gbz(){return $.aNo()}}
A.ou.prototype={
gbz(){return $.aNV()}}
A.rj.prototype={
gbz(){return $.aNG()}}
A.ri.prototype={
gbz(){return $.aNF()}}
A.rh.prototype={
gbz(){return $.aNE()}}
A.rl.prototype={
gbz(){return $.aNJ()}}
A.rk.prototype={
gbz(){return $.aNK()}}
A.rg.prototype={
gbz(){return $.aNM()}}
A.lD.prototype={
gbz(){return $.aNc()},
grz(){var w=this.b
return w==null?this.a.oU(4,x.Y):w}}
A.lX.prototype={
gbz(){return $.aNq()},
n(){var w=this.d
w.gaz(w).O(0,new A.aeN())
w.P(0)
this.e.P(0)}}
A.jA.prototype={}
A.kH.prototype={}
A.kI.prototype={}
var z=a.updateTypes(["n()","dN()","O()","om(a1)","B()","lX(w<aD>)","n(d2<@>,d2<@>)","B(cZ)","rG()","~(mp)","~(lD)","qn()","~()","~(fh)","~(H?)","~(l[l?])","l()","w<n>()","qy()","mp()","pc()","kI?(n)","ou()","rj()","ri()","rh()","rl()","rk()","rg()","lD()","lX()","jA?(n)","kH?(n)","qd()"])
A.azD.prototype={
$0(){return D.Ij},
$S:z+11}
A.asv.prototype={
$0(){return this.a.Z2(this.b)},
$S:0}
A.asw.prototype={
$0(){return this.a.Z5(this.b)},
$S:0}
A.asA.prototype={
$1(d){return new A.om(new A.asz(this.a),"md/rocket.svga",null)},
$S:z+3}
A.asz.prototype={
$0(){return this.a.d.dq(0)},
$S:0}
A.asy.prototype={
$1(d){return new A.om(new A.asx(this.a),"md/angle.svga",null)},
$S:z+3}
A.asx.prototype={
$0(){return this.a.d.dq(0)},
$S:0}
A.avX.prototype={
$0(){var w=this.a,v=w.d
v===$&&B.c()
v.sJK(null)
w.a.akO()},
$S:9}
A.a41.prototype={
$2(d,e){return C.e.aU(d.d,e.d)},
$S:z+6}
A.ayt.prototype={
$1(d){return J.cV(d,this.a.$0())},
$S:120}
A.ayr.prototype={
$1(d){var w,v,u=this,t=u.a.fp(!0),s=u.c,r=u.b.a5H(s,u.d,t)
if(r==null){w=u.e.tb()
v=A.acC(t)
if(w.b)A.ig("UnknownFieldSet","mergeVarintField")
C.b.D(w.lH(s).b,v)}else J.cV(d,r)},
$S:120}
A.ays.prototype={
$0(){var w,v,u
for(w=this.a,v=this.b,u=this.c;w.b<w.c;)v.$1(u)},
$S:9}
A.a8l.prototype={
$0(){return A.aHP(this.a,this.b)},
$S(){return this.b.h("vl<0>()")}}
A.a8n.prototype={
$0(){return this.a},
$S:46}
A.a8m.prototype={
$1(d){return d.a.tj()},
$S:z+7}
A.adV.prototype={
$0(){var w=this,v=w.d,u=w.e
return new A.fq(w.a,w.b,B.k(v,u),!1,v.h("@<0>").ab(u).h("fq<1,2>"))},
$S(){return this.d.h("@<0>").ab(this.e).h("fq<1,2>()")}}
A.aqh.prototype={
$1(d){return J.hv(d)},
$S:68}
A.aqj.prototype={
$2(d,e){var w,v,u=this
if(e instanceof A.cZ){w=u.a
v=u.b
w.a+=v+d+": {\n"
e.a.Y0(w,v+"  ")
w.a+=v+"}\n"}else{w=u.a
v=u.b+d
if(e instanceof B.aP)w.a+=v+": {"+B.j(e.a)+" : "+B.j(e.b)+"} \n"
else w.a+=v+": "+B.j(e)+"\n"}},
$S:59}
A.aqk.prototype={
$2(d,e){var w,v,u,t
if(d==null)return
if(d instanceof A.o1)for(w=d.a,w=new J.hx(w,w.length),v=this.a,u=B.p(w).c;w.t();){t=w.d
v.$2(e,t==null?u.a(t):t)}else if(d instanceof A.fq)for(w=d.gdg(d),w=w.ga3(w),v=this.a;w.t();)v.$2(e,w.gG(w))
else this.a.$2(e,d)},
$S:155}
A.aqi.prototype={
$1(d){var w=this.a,v=w.d.c.i(0,d)
w=w.d.b.i(0,d)
return this.b.$2(v,"["+B.j(w.gAz(w))+"]")},
$S:23}
A.avG.prototype={
$0(){var w,v=this.a,u=v.b
if(u===$){w=v.a.$0()
w.a.hu()
v.b!==$&&B.aB()
v.b=w
u=w}return u},
$S(){return this.a.$ti.h("1()")}}
A.afU.prototype={
$2(d,e){return(d^A.aJx(A.mF(A.mF(0,J.z(e.a)),J.z(e.b))))>>>0},
$S(){return this.a.$ti.h("n(n,aP<1,2>)")}}
A.amQ.prototype={
$0(){var w=x.X
return new A.rG(B.b([],x.r),B.b([],w),B.b([],x.t),B.b([],w),B.b([],x.A))},
$S:z+8}
A.amR.prototype={
$2(d,e){var w=this.a,v=37*w.a+d&536870911
w.a=v
w.a=53*v+J.z(e)&536870911},
$S:617}
A.axr.prototype={
$1(d){return A.aDa(J.aK(this.a,d),J.aK(this.b,d))},
$S:80}
A.arC.prototype={
$2(d,e){return A.mF(d,J.z(e))},
$S:618}
A.aii.prototype={
$0(){},
$S:9}
A.aih.prototype={
$1(d){var w={}
w.a=null
J.ek(d.a.oU(1,x.p),new A.aig(w))},
$S:z+9}
A.aig.prototype={
$1(d){if(J.k_(d.grz())&&J.b_(d.grz())>0)if(J.aK(d.grz(),0).a.aj(0)===D.xV&&this.a.a!=null)d.b=this.a.a
else if(J.k_(d.grz()))this.a.a=d.grz()},
$S:z+10}
A.aie.prototype={
$1(d){return this.Yf(d)},
Yf(d){var w=0,v=B.T(x.P),u=this,t,s
var $async$$1=B.P(function(e,f){if(e===1)return B.Q(f,v)
while(true)switch(w){case 0:t=d.a
w=2
return B.M(u.a.xf(t,new Uint8Array(B.eG(d.b)),u.b),$async$$1)
case 2:s=f
if(s!=null)u.c.d.m(0,t,s)
return B.R(null,v)}})
return B.S($async$$1,v)},
$S:619}
A.aif.prototype={
$1(d){return this.a},
$S:z+5}
A.ave.prototype={
$1(d){return"|||"+B.j(d.K7(1))+" "},
$S:54}
A.avf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(d.length===0)return
w=C.c.Z(d,0,1)
if(C.c.p("MLHVCSQRZmlhvcsqrz",w)){v=C.c.dt(C.c.br(d,1)).split(" ")
if(w==="M"){u=m.a
u.c=B.bn(v[0])
t=B.bn(v[1])
u.b=t
u.a.f0(0,u.c,t)}else if(w==="m"){u=m.a
u.c=u.c+B.bn(v[0])
t=u.b+B.bn(v[1])
u.b=t
u.a.f0(0,u.c,t)}else if(w==="L"){u=m.a
u.c=B.bn(v[0])
t=B.bn(v[1])
u.b=t
u.a.c5(0,u.c,t)}else if(w==="l"){u=m.a
u.c=u.c+B.bn(v[0])
t=u.b+B.bn(v[1])
u.b=t
u.a.c5(0,u.c,t)}else if(w==="H"){s=B.bn(v[0])
u=m.a
u.c=s
u.a.c5(0,s,u.b)}else if(w==="h"){u=m.a
s=u.c+B.bn(v[0])
u.c=s
u.a.c5(0,s,u.b)}else if(w==="V"){t=B.bn(v[0])
u=m.a
u.b=t
u.a.c5(0,u.c,t)}else if(w==="v"){u=m.a
t=u.b+B.bn(v[0])
u.b=t
u.a.c5(0,u.c,t)}else if(w==="C"){u=m.a
u.r=B.bn(v[0])
u.f=B.bn(v[1])
u.e=B.bn(v[2])
u.d=B.bn(v[3])
u.c=B.bn(v[4])
t=B.bn(v[5])
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
r.nA(q,p,o,n,u.c,t)}else if(w==="c"){u=m.a
u.r=u.c+B.bn(v[0])
u.f=u.b+B.bn(v[1])
u.e=u.c+B.bn(v[2])
u.d=u.b+B.bn(v[3])
u.c=u.c+B.bn(v[4])
t=u.b+B.bn(v[5])
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
r.nA(q,p,o,n,u.c,t)}else if(w==="S"){u=m.a
if(u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null){r=u.c
q=u.e
q.toString
u.r=r-q+r
r=u.b
q=u.d
q.toString
u.f=r-q+r
u.e=B.bn(v[0])
u.d=B.bn(v[1])
u.c=B.bn(v[2])
t=B.bn(v[3])
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
r.nA(q,p,o,n,u.c,t)}else{u.r=B.bn(v[0])
u.f=B.bn(v[1])
u.c=B.bn(v[2])
t=B.bn(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r1(q,p,u.c,t)}}else if(w==="s"){u=m.a
r=u.r!=null&&u.f!=null&&u.e!=null&&u.d!=null
q=u.c
if(r){r=u.e
r.toString
u.r=q-r+q
r=u.b
p=u.d
p.toString
u.f=r-p+r
u.e=q+B.bn(v[0])
u.d=u.b+B.bn(v[1])
u.c=u.c+B.bn(v[2])
t=u.b+B.bn(v[3])
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
q.nA(r,p,o,n,u.c,t)}else{u.r=q+B.bn(v[0])
u.f=u.b+B.bn(v[1])
u.c=u.c+B.bn(v[2])
t=u.b+B.bn(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r1(q,p,u.c,t)}}else if(w==="Q"){u=m.a
u.r=B.bn(v[0])
u.f=B.bn(v[1])
u.c=B.bn(v[2])
t=B.bn(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r1(q,p,u.c,t)}else if(w==="q"){u=m.a
u.r=u.c+B.bn(v[0])
u.f=u.b+B.bn(v[1])
u.c=u.c+B.bn(v[2])
t=u.b+B.bn(v[3])
u.b=t
r=u.a
r.toString
q=u.r
q.toString
p=u.f
p.toString
r.r1(q,p,u.c,t)}else if(w==="Z"||w==="z")m.a.a.aA(0)}u=m.b.c.ay.e
r=m.a.a
r.toString
u.m(0,m.c,r)},
$S:36}
A.avd.prototype={
$0(){var w=this.a
w.d=w.a.c.ay},
$S:0}
A.aeN.prototype={
$1(d){d.n()},
$S:620};(function aliases(){var w=A.IS.prototype
w.a2I=w.n})();(function installTearOffs(){var w=a._static_1,v=a.installStaticTearOff,u=a._static_0,t=a._instance_0u,s=a._instance_1u
w(A,"aDW","b1C",14)
v(A,"azN",1,null,["$2","$1"],["ig",function(d){return A.ig(d,null)}],15,0)
u(A,"b5l","aY6",16)
u(A,"b5i","aY3",17)
u(A,"b5h","aY2",4)
u(A,"b5k","aY5",0)
u(A,"b5j","aY4",2)
var r
t(r=A.KQ.prototype,"gaoV","aoW",0)
t(r,"gaoX","aoY",1)
t(r,"gap8","AZ",0)
t(r,"gap9","apa",1)
t(r,"gap4","ap5",0)
t(r,"gap6","ap7",1)
t(r,"gaoO","aoP",0)
t(r,"gaoQ","aoR",1)
t(r,"gap1","ap2",0)
t(r,"gap3","Jf",1)
t(r,"gaoJ","aoK",4)
t(r,"gaoS","aoT",2)
t(r,"gaoL","aoM",2)
t(r=A.Hf.prototype,"gEP","adz",12)
s(r,"gEa","a9V",13)
u(A,"aMF","aXH",18)
u(A,"aML","aZU",19)
u(A,"aMC","aU_",20)
u(A,"aME","aXb",33)
u(A,"aE3","b_D",22)
u(A,"aMI","aZE",23)
u(A,"aMH","aZD",24)
u(A,"aMG","aZC",25)
u(A,"aE2","aZH",26)
u(A,"aMJ","aZI",27)
u(A,"aMK","aZK",28)
u(A,"aMD","aWx",29)
u(A,"b5D","aHs",30)
w(A,"b5G","aZJ",31)
w(A,"b5E","aZF",32)
w(A,"b5F","aZG",21)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.JL,B.h7)
u(B.H,[A.acz,A.afv,A.abA,A.acj,A.dN,A.Lk,A.Kt,A.a40,A.KQ,A.lN,A.aqc,A.aq7,A.d2,A.Vt,A.cZ,A.HC,A.OY,A.PW,A.kV,A.rG,A.aic,A.aid])
v(A.acy,A.acz)
v(A.afu,A.afv)
u(B.li,[A.azD,A.asv,A.asw,A.asz,A.asx,A.avX,A.ays,A.a8l,A.a8n,A.adV,A.avG,A.amQ,A.aii,A.avd])
u(B.a3,[A.qn,A.om,A.D6])
u(B.aa,[A.WP,A.IS,A.Hf])
u(B.ir,[A.asA,A.asy,A.ayt,A.ayr,A.a8m,A.aqh,A.aqi,A.axr,A.aih,A.aig,A.aie,A.aif,A.ave,A.avf,A.aeN])
v(A.a_c,A.IS)
v(A.apG,B.Fz)
u(B.tE,[A.a41,A.aqj,A.aqk,A.afU,A.amR,A.arC])
v(A.qp,A.d2)
v(A.o1,B.a2)
u(A.o1,[A.pM,A.vl])
v(A.fq,B.ay)
v(A.Ze,B.zl)
v(A.QW,B.k1)
u(A.cZ,[A.qy,A.mp,A.pc,A.qd,A.ou,A.rj,A.ri,A.rh,A.rl,A.rk,A.rg,A.lD,A.lX])
u(A.PW,[A.jA,A.kH,A.kI])
w(A.IS,B.ft)})()
B.xL(b.typeUniverse,JSON.parse('{"JL":{"h7":[],"bJ":[]},"dN":{"bO":["H"]},"qn":{"a3":[],"i":[]},"WP":{"aa":["qn"]},"om":{"a3":[],"i":[]},"a_c":{"aa":["om"]},"aWc":{"d2":["1"]},"d2":{"d2.T":"1"},"vl":{"o1":["1"],"a2":["1"],"w":["1"],"a4":["1"],"q":["1"],"q.E":"1","a2.E":"1"},"fq":{"ay":["1","2"],"aH":["1","2"],"ay.V":"2","ay.K":"1"},"lN":{"bJ":[]},"qp":{"d2":["fq<1,2>?"],"d2.T":"fq<1,2>?"},"pM":{"o1":["1"],"a2":["1"],"w":["1"],"a4":["1"],"q":["1"],"q.E":"1","a2.E":"1"},"o1":{"a2":["1"],"w":["1"],"a4":["1"],"q":["1"]},"D6":{"a3":[],"i":[]},"Ze":{"ab":[]},"QW":{"k1":[],"bz":["O"],"ab":[]},"Hf":{"aa":["D6"]},"qy":{"cZ":[]},"mp":{"cZ":[]},"pc":{"cZ":[]},"qd":{"cZ":[]},"ou":{"cZ":[]},"rj":{"cZ":[]},"ri":{"cZ":[]},"rh":{"cZ":[]},"rl":{"cZ":[]},"rk":{"cZ":[]},"rg":{"cZ":[]},"lD":{"cZ":[]},"lX":{"cZ":[]}}'))
B.aCZ(b.typeUniverse,JSON.parse('{"Kt":1}'))
var y={a:"Attempted to change a read-only map field",e:"CodedBufferReader encountered an embedded string or message which claimed to have negative size."}
var x=(function rtii(){var w=B.Y
return{G:w("aWc<@>"),q:w("d2<@>"),p:w("lD"),K:w("ah<aD>"),J:w("cZ"),I:w("uy"),w:w("dN"),U:w("q<cZ>"),M:w("u<d2<@>>"),X:w("u<dN>"),r:w("u<w<n>>"),s:w("u<l>"),A:w("u<kV>"),D:w("u<i>"),n:w("u<O>"),t:w("u<n>"),b:w("u<~()>"),F:w("u<~(fh)>"),d:w("w<cZ>"),j:w("w<@>"),L:w("w<n>"),T:w("qp<@,@>"),f:w("aH<@,@>"),H:w("lX"),P:w("aD"),R:w("aX<~()>"),V:w("aX<~(fh)>"),u:w("qD"),W:w("qH"),Y:w("rg"),m:w("mp"),N:w("l"),l:w("Ek"),Q:w("ds"),B:w("kV"),k:w("rG"),y:w("B"),i:w("O"),z:w("@"),O:w("@()"),_:w("@(a4u,n)"),S:w("n"),o:w("uy?")}})();(function constants(){var w=a.makeConstList
D.AV=new A.aid()
D.Bh=new A.aq7()
D.FP=new A.dN(0,0,0)
D.FQ=new A.dN(4194303,4194303,1048575)
D.GR=B.b(w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0]),x.t)
D.GS=B.b(w([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]),x.t)
D.GV=B.b(w([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]),x.t)
D.jE=new A.jA(0,"SHAPE")
D.xT=new A.jA(1,"RECT")
D.xU=new A.jA(2,"ELLIPSE")
D.xV=new A.jA(3,"KEEP")
D.mT=B.b(w([D.jE,D.xT,D.xU,D.xV]),B.Y("u<jA>"))
D.H5=B.b(w([0,0,1048576,531441,1048576,390625,279936,823543,262144,531441,1e6,161051,248832,371293,537824,759375,1048576,83521,104976,130321,16e4,194481,234256,279841,331776,390625,456976,531441,614656,707281,81e4,923521,1048576,35937,39304,42875,46656]),x.t)
D.Hh=B.b(w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x.t)
D.Hj=B.b(w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),x.t)
D.Hi=B.b(w([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]),x.t)
D.Ht=B.b(w([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258]),x.t)
D.jD=new A.kI(0,"LineJoin_MITER")
D.xR=new A.kI(1,"LineJoin_ROUND")
D.xS=new A.kI(2,"LineJoin_BEVEL")
D.n7=B.b(w([D.jD,D.xR,D.xS]),B.Y("u<kI>"))
D.jC=new A.kH(0,"LineCap_BUTT")
D.xP=new A.kH(1,"LineCap_ROUND")
D.xQ=new A.kH(2,"LineCap_SQUARE")
D.n8=B.b(w([D.jC,D.xP,D.xQ]),B.Y("u<kH>"))
D.Ij=new A.qn(null)
D.ay=new A.OY("com.opensource.svga")
D.X9=new A.OY("")
D.U7=new B.cM("\u9001\u51fa\u4e00\u53d1\u706b\u7bad",null,null,null,null,null,null)
D.Uj=new B.cM("\u9001\u51fa\u4e00\u4e2a\u5929\u4f7f",null,null,null,null,null,null)
D.VU=new A.apG(0,"Absolute")})();(function staticFields(){$.b0f=[]
$.aGH=B.k(B.Y("hK?"),B.Y("HC<cZ>"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"bdl","aRy",()=>new A.azD())
v($,"b8I","aO5",()=>{var u=A.b_L()
u.hu()
return u})
v($,"b7A","aNr",()=>{var u="viewBoxWidth",t="viewBoxHeight",s=A.hy("MovieParams",A.aMF(),D.ay),r=x.i
s.ft(0,1,u,256,u,r)
s.ft(0,2,t,256,t,r)
r=x.S
s.dw(0,3,"fps",2048,r)
s.dw(0,4,"frames",2048,r)
s.w=!1
return s})
v($,"b8h","aNP",()=>{var u="imageKey",t="matteKey",s=A.hy("SpriteEntity",A.aML(),D.ay)
s.tX(1,u,u)
s.AN(0,2,"frames",2097154,A.aMD(),x.p)
s.tX(3,t,t)
s.w=!1
return s})
v($,"b67","aMR",()=>{var u,t="audioKey",s="startFrame",r=2048,q="endFrame",p="startTime",o="totalTime",n=A.hy("AudioEntity",A.aMC(),D.ay)
n.tX(1,t,t)
u=x.S
n.ft(0,2,s,r,s,u)
n.ft(0,3,q,r,q,u)
n.ft(0,4,p,r,p,u)
n.ft(0,5,o,r,o,u)
n.w=!1
return n})
v($,"b7r","aNo",()=>{var u=A.hy("Layout",A.aME(),D.ay),t=x.i
u.dw(0,1,"x",256,t)
u.dw(0,2,"y",256,t)
u.dw(0,3,"width",256,t)
u.dw(0,4,"height",256,t)
u.w=!1
return u})
v($,"b8w","aNV",()=>{var u=A.hy("Transform",A.aE3(),D.ay),t=x.i
u.dw(0,1,"a",256,t)
u.dw(0,2,"b",256,t)
u.dw(0,3,"c",256,t)
u.dw(0,4,"d",256,t)
u.dw(0,5,"tx",256,t)
u.dw(0,6,"ty",256,t)
u.w=!1
return u})
v($,"b85","aNG",()=>{var u=A.hy("ShapeEntity.ShapeArgs",A.aMI(),D.ay)
u.RZ(1,"d")
u.w=!1
return u})
v($,"b84","aNF",()=>{var u="cornerRadius",t=A.hy("ShapeEntity.RectArgs",A.aMH(),D.ay),s=x.i
t.dw(0,1,"x",256,s)
t.dw(0,2,"y",256,s)
t.dw(0,3,"width",256,s)
t.dw(0,4,"height",256,s)
t.ft(0,5,u,256,u,s)
t.w=!1
return t})
v($,"b83","aNE",()=>{var u=A.hy("ShapeEntity.EllipseArgs",A.aMG(),D.ay),t=x.i
u.dw(0,1,"x",256,t)
u.dw(0,2,"y",256,t)
u.ft(0,3,"radiusX",256,"radiusX",t)
u.ft(0,4,"radiusY",256,"radiusY",t)
u.w=!1
return u})
v($,"b88","aNJ",()=>{var u=A.hy("ShapeEntity.ShapeStyle.RGBAColor",A.aE2(),D.ay),t=x.i
u.dw(0,1,"r",256,t)
u.dw(0,2,"g",256,t)
u.dw(0,3,"b",256,t)
u.dw(0,4,"a",256,t)
u.w=!1
return u})
v($,"b89","aNK",()=>{var u="strokeWidth",t="lineJoin",s="miterLimit",r="lineDashI",q="lineDashII",p="lineDashIII",o=A.hy("ShapeEntity.ShapeStyle",A.aMJ(),D.ay),n=B.Y("rl")
o.jF(1,"fill",A.aE2(),n)
o.jF(2,"stroke",A.aE2(),n)
n=x.i
o.ft(0,3,u,256,u,n)
o.He(0,4,"lineCap",512,D.jC,D.n8,"lineCap",A.b5E(),B.Y("kH"))
o.He(0,5,t,512,D.jD,D.n7,t,A.b5F(),B.Y("kI"))
o.ft(0,6,s,256,s,n)
o.ft(0,7,r,256,r,n)
o.ft(0,8,q,256,q,n)
o.ft(0,9,p,256,p,n)
o.w=!1
return o})
v($,"b8b","aNM",()=>{var u=A.hy("ShapeEntity",A.aMK(),D.ay)
u.ao7(0,B.b([2,3,4],x.t))
u.akk(0,1,"type",512,D.jE,D.mT,A.b5G(),B.Y("jA"))
u.jF(2,"shape",A.aMI(),B.Y("rj"))
u.jF(3,"rect",A.aMH(),B.Y("ri"))
u.jF(4,"ellipse",A.aMG(),B.Y("rh"))
u.jF(10,"styles",A.aMJ(),B.Y("rk"))
u.jF(11,"transform",A.aE3(),B.Y("ou"))
u.w=!1
return u})
v($,"b72","aNc",()=>{var u="clipPath",t=A.hy("FrameEntity",A.aMD(),D.ay)
t.dw(0,1,"alpha",256,x.i)
t.jF(2,"layout",A.aME(),B.Y("qd"))
t.jF(3,"transform",A.aE3(),B.Y("ou"))
t.tX(4,u,u)
t.AN(0,5,"shapes",2097154,A.aMK(),x.Y)
t.w=!1
return t})
v($,"b7z","aNq",()=>{var u,t,s=null,r=A.hy("MovieEntity",A.b5D(),D.ay)
r.RZ(1,"version")
r.jF(2,"params",A.aMF(),B.Y("qy"))
u=A.hy("MovieEntity.ImagesEntry",s,D.ay)
t=x.z
u.S1(0,1,"key",64,s,s,s,s,t)
u.S1(0,2,"value",32,s,s,s,s,t)
r.CE(A.aXr("images",3,r.b.length,6291456,64,32,u,s,s,s,x.N,x.L))
r.AN(0,4,"sprites",2097154,A.aML(),x.m)
r.AN(0,5,"audios",2097154,A.aMC(),B.Y("pc"))
r.w=!1
return r})
v($,"b8a","aNL",()=>A.aBZ(D.mT,B.Y("jA")))
v($,"b86","aNH",()=>A.aBZ(D.n8,B.Y("kH")))
v($,"b87","aNI",()=>A.aBZ(D.n7,B.Y("kI")))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_7",e:"endPart",h:b})})($__dart_deferred_initializers__,"KDEd0cJBUuUWy4EE0wy9uPRTtGU=");