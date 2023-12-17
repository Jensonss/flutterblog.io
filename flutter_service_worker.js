'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f6cd2e0669e5291d4f9aee15a303b4f0",
"main.dart.js_7.part.js": "56d26d4b16058f47365502d1655e15f4",
"main.dart.js_6.part.js": "88694e0a62c380bdb5a0fc66a47eea3c",
"index.html": "b68ce3e41a2c055a9d225dff730bcbd6",
"/": "b68ce3e41a2c055a9d225dff730bcbd6",
"file/%E7%BD%91%E7%BB%9C/%E4%BA%86%E8%A7%A3Http.md": "a1f229c1edfe590250ace4147cfcb2e0",
"file/%E7%BD%91%E7%BB%9C/WireShark%20the%20capture%20session%20could%20not%20be%20initiated%20(you%20don't%20have.md": "d05f15d9808960254145952938c8e410",
"file/%E5%85%B6%E4%BB%96/%E5%90%91%E4%B8%8A%E5%8F%96%E6%95%B4%E3%80%81%E5%90%91%E4%B8%8B%E5%8F%96%E6%95%B4%E5%92%8C%E7%B4%A0%E6%95%B0.md": "be3dde97d9630ea8a3e77f777304f281",
"file/%E5%85%B6%E4%BB%96/%E5%85%B3%E4%BA%8E%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F%E4%BB%8B%E7%BB%8D.md": "077288b5f35760f898a72dd70550bedf",
"file/%E5%85%B6%E4%BB%96/%E8%AF%A6%E8%A7%A3%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.md": "6539a7ab9297719e04dfbff2744f7565",
"file/%E5%85%B6%E4%BB%96/%E8%AF%A6%E8%A7%A3%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.md": "923299f9f14f5d2b104761e587c666f0",
"file/%E5%85%B6%E4%BB%96/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6~%E5%85%B3%E4%BA%8EGC.md": "53f3427ab26ca6591cc15f56eb255e35",
"file/%E5%85%B6%E4%BB%96/Mac%E7%89%88eclipse%E4%B8%AD%E6%AF%8F%E6%AC%A1%E9%87%8D%E5%90%AF%E7%94%B5%E8%84%91%E5%90%8E%E5%AD%97%E4%BD%93%E8%87%AA%E5%8A%A8%E5%8F%98%E5%B0%8F.md": "10f049c13f9c442249f1cf97ac8a5a5b",
"file/%E5%85%B6%E4%BB%96/Linux%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%A4%A7%E5%85%A8%E7%AC%94%E8%AE%B0.md": "0cd73ce442fb54d49bbe1727fb62fc1b",
"file/%E5%85%B6%E4%BB%96/%E5%9B%BE%E7%89%87%E6%9C%AC%E5%9C%B0%E6%89%93%E5%BC%80%E6%98%BE%E7%A4%BA%E6%AD%A3%E5%B8%B8%E4%BD%86%E9%A1%B5%E9%9D%A2%E6%89%93%E5%BC%80%E6%98%AF%E5%80%92%E4%BA%86%E7%9A%84.md": "e64e4288a27907c14b07fb81ad84f8bb",
"file/%E5%85%B6%E4%BB%96/%E8%AF%A6%E8%A7%A3%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B9%8B%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F.md": "ce8299a6c7cf50299f5a9f6b78853c8e",
"file/%E5%85%B6%E4%BB%96/bytes%E5%92%8Cstr%E8%BD%AC%E6%8D%A2.md": "af02eb0ab7362f53cb27151baa5411fa",
"file/%E5%85%B6%E4%BB%96/%E8%AE%BE%E8%AE%A1%E4%B8%80%E4%B8%AA%E6%9C%89%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0%E6%9C%80%E5%B0%8F%E5%80%BCgetMin%E7%9A%84%E6%A0%88.md": "43bc7ed4ef990584440ab7bf034484a1",
"file/%E5%85%B6%E4%BB%96/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%89%8D%E7%9A%84r%E5%92%8Cu.md": "5e125ae9317950fb8852f9c44d242632",
"file/%E5%85%B6%E4%BB%96/Groovy%E9%97%AD%E5%8C%85%E5%A7%94%E6%89%98.md": "16f5edd9fd633c77780525478940f769",
"file/%E5%85%B6%E4%BB%96/CSS%E6%B5%AE%E5%8A%A8float%E5%BC%95%E8%B5%B7%E5%B8%83%E5%B1%80%E9%94%99%E4%B9%B1.md": "94aca405f5a52c5df8edcb99a120d514",
"file/%E5%85%B6%E4%BB%96/osx%E4%B8%8B%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8SublimeText%E9%98%85%E8%AF%BBAndroid%E7%B3%BB%E7%BB%9F%E6%BA%90%E7%A0%81.md": "b43df140f6303b8970ff7cf40f869ede",
"file/%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E6%8E%92%E5%BA%8F%E4%B9%8B%E4%BA%A4%E6%8D%A2%E6%8E%92%E5%BA%8F.md": "e24da666656e4ad818ee65f41d763584",
"file/%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E6%9F%A5%E6%89%BE%E4%B9%8B%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.md": "a0c37b63fec39f16167c2b3222925667",
"file/%E7%AE%97%E6%B3%95/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86.md": "d86eeee78430c76b57fb678b09b8a26e",
"file/%E7%AE%97%E6%B3%95/%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.md": "79818512d37f5430ba37e2b0991f0233",
"file/%E7%AE%97%E6%B3%95/%E6%B1%82%E8%A7%A31%E5%88%B0n%E4%B8%AD1%E7%9A%84%E4%B8%AA%E6%95%B0.md": "454ad7697ba767d3c35ec28f0efbfdd1",
"file/%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E4%B9%8B%E6%9C%B4%E7%B4%A0%E6%A8%A1%E5%BC%8F%E5%8C%B9%E9%85%8D.md": "df2a0f99572327a8287629a009647d8e",
"file/%E7%AE%97%E6%B3%95/%E5%9B%9B%E4%B8%AA%E4%BA%BA%E8%BF%87%E6%A1%A5%E9%97%AE%E9%A2%98.md": "df2ad6226ee37f32f94d3f5f7c5e2e70",
"file/%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E6%8E%92%E5%BA%8F%E4%B9%8B%E5%BD%92%E5%B9%B6.md": "680bcf2b045cf4f5ccd1c1dd2ed32da4",
"file/%E7%AE%97%E6%B3%95/%E6%95%B0%E5%AD%A6%E5%BD%92%E7%BA%B3%E6%B3%95.md": "fab9caa5662cf53514e8220989e15ebb",
"file/%E7%AE%97%E6%B3%95/%E4%B8%A4%E4%B8%AA%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%E5%8A%9F%E8%83%BD.md": "2af6dd22c54d0880ef388e82cbb2c14f",
"file/%E7%AE%97%E6%B3%95/%E5%86%9C%E5%A4%AB%E5%B8%A6%E7%9D%80%E7%8B%BC%E3%80%81%E7%BE%8A%E5%92%8C%E7%99%BD%E8%8F%9C%E8%BF%87%E6%B2%B3%E9%97%AE%E9%A2%98.md": "93e6400fc631f1db8df35b1bd7ae4617",
"file/%E7%AE%97%E6%B3%95/Java%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8E%8B%E7%BC%A9%E5%8E%BB%E9%87%8D.md": "0c03c27a8e6759f8123be21f497394fd",
"file/%E7%AE%97%E6%B3%95/5L%E6%9D%AF%E5%AD%90%E5%92%8C3L%E6%9D%AF%E5%AD%90%E5%8F%96%E5%87%BA4L%E6%B0%B4%E7%9A%84%E9%97%AE%E9%A2%98.md": "f29d82fb9e8d6c65d7194d75046ea07d",
"file/%E7%AE%97%E6%B3%95/%E7%8C%AB%E6%89%91%E7%B4%A0%E6%95%B0.md": "0ec63387320b94440d7c046cfab093a3",
"file/%E7%AE%97%E6%B3%95/%E7%AE%97%E6%B3%95%E6%8E%92%E5%BA%8F%E4%B9%8B%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.md": "916b2717ea20bf87ffc186c3a499e49f",
"file/java/%E4%BD%BF%E7%94%A8sychronized%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9.md": "fcc15cbec6136e5451a22947893e9d38",
"file/java/%E5%85%B3%E4%BA%8E%E5%8F%8D%E5%B0%84%E5%85%A5%E9%97%A8.md": "1495e329e09f7118e808181cff3c8f6f",
"file/java/Java%E5%8F%82%E6%95%B0%E5%88%B0%E5%BA%95%E6%98%AF%E5%80%BC%E4%BC%A0%E9%80%92%E8%BF%98%E6%98%AF%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92.md": "a090e58b085e3699b1e8056bff038bf8",
"file/java/Jar%E5%8C%85%E4%BF%AE%E6%94%B9%E5%B9%B6%E4%BB%8E%E6%96%B0%E6%89%93%E5%8C%85.md": "935d40a05a82ea1b7478e5ea77213aa5",
"file/java/%E6%B5%85%E8%B0%88Java%E6%B3%A8%E8%A7%A3(%E4%B8%80).md": "4528497493c0e4be121806c182d5508b",
"file/java/Java%20wait%EF%BC%8Cnotify%E5%92%8CnotifyAll%E4%BD%BF%E7%94%A8%E5%88%86%E6%9E%90.md": "428e321adc7460c3d42246c71479398d",
"file/java/CompletableFuture%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.md": "3f9e1651626b770ed9b1193a300c0188",
"file/kotlin/Kotlin%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86method.invoke%E5%BC%82%E5%B8%B8.md": "5b934cb0d134319ff3c91be952503f4f",
"file/kotlin/Kotlin%E5%8D%8F%E7%A8%8B%E5%85%A5%E9%97%A8.md": "eae128b049c4f9ffe5a190d3f6fcafbc",
"file/flutter/Provider%E4%BC%98%E5%8C%96Widget%E5%88%B7%E6%96%B0.md": "d55230b90fe5630dc656b5d265846698",
"file/flutter/Dio%E4%B8%8D%E6%89%93%E5%8D%B0%E8%AF%B7%E6%B1%82%E5%A4%B4%E4%BF%A1%E6%81%AF.md": "9f4a5bc3ff7b06c327d0fd69132747a1",
"file/flutter/Channel%E9%80%9A%E4%BF%A1%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.md": "9a54dcb5ceb79a815d377d38c6a6bc12",
"file/flutter/Flutter%E5%85%A5%E9%97%A8%E4%B9%8BLoading%E4%BD%BF%E7%94%A8.md": "4dfd028011450d625266b51c95b207a2",
"file/flutter/Flutter%E5%85%A5%E9%97%A8%E4%B9%8B%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%ADdialog%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA.md": "d071f24f72e13672b5ec87e1776bfd8d",
"file/flutter/Flutter%20InheritedWidget%E5%8E%9F%E7%90%86(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "7b7d6f6cb48d9f0b02cccd495d6ba242",
"file/flutter/Flutter%20project%E8%BF%90%E8%A1%8C%E6%97%B6%E4%B8%80%E7%9B%B4%E5%8D%A1%E5%9C%A8assembleDebug.md": "808408d4d57e49e8adc3350b5ddc7ec2",
"file/flutter/Flutter%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E4%B9%8BProvider%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.md": "1de1c00f29ef71f698b6ecb2b81d2bb3",
"file/flutter/Get%E6%98%AF%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87parameter%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0%E7%9A%84(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "fe4007b6820355766cd6b2430411bbd6",
"file/flutter/Flutter%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.md": "97a027a7a9ebe0a9b3da33d27b74eca3",
"file/flutter/%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91%E4%B9%8Bflutter_thrio(%E4%B8%80)%E9%85%8D%E7%BD%AE.md": "6e03231b6d82ac1adadeea7bd62432c6",
"file/flutter/Flutter%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E4%B9%8BRedux%E4%BD%BF%E7%94%A8.md": "cabb9ba66986ff0bf60a64d5ba123885",
"file/flutter/Flutter%20setState%E4%B9%8B%E5%90%8E%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "683c519c211e14e6d2ccd3ed43e2e019",
"file/flutter/flutter.minSdkVersion%E5%9C%A8%E5%93%AA%E8%AE%BE%E7%BD%AE.md": "423561a087b947bace3b568cc44f335f",
"file/flutter/Flutter%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E4%B9%8Bsetstate%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F%E9%97%AE%E9%A2%98.md": "998737da8d83639bed3b2696b64f8b73",
"file/flutter/Flutter%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%B8%8E%E5%B4%A9%E6%BA%83%E6%94%B6%E9%9B%86.md": "c6e75f9af8fbf0f0f19e9e124c0de522",
"file/flutter/Flutter%E6%96%B0%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E5%BA%93%E4%BB%A3%E7%90%86%E8%AE%BE%E7%BD%AE.md": "5540162816d2a477f127a9bffc367427",
"file/flutter/Flutter%E5%85%A5%E9%97%A8%E4%B9%8BDialog%E4%BD%BF%E7%94%A8.md": "81bce59e6ea0f69d625ac4306cbf2983",
"file/flutter/Flutter%E6%A1%86%E6%9E%B6%E4%B9%8BCachedNetworkImage%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.md": "b35153146e6137daa2aab6a77b4d9155",
"file/flutter/Flutter%E5%85%A5%E9%97%A8%E4%B9%8B%E5%AE%9E%E7%8E%B0%E5%8F%AF%E7%BC%A9%E6%94%BE%E7%A7%BB%E5%8A%A8%E7%9A%84%E5%9B%BE%E7%89%87%E6%A1%86%E6%9E%B6.md": "6b8f8f42d0f6aa1fe5523cd65d0c333b",
"file/flutter/%E5%85%B3%E4%BA%8EFlutter%E8%BF%90%E8%A1%8C%E5%9C%A8windows%E6%A1%8C%E9%9D%A2%E7%AB%AF.md": "71c5b6f5fdebc4240f2a66869a548f6b",
"file/flutter/%E5%8F%A6%E4%B8%80%E7%A7%8D%E6%96%B9%E5%BC%8F%E5%AE%9E%E7%8E%B0Flutter%E5%9B%BD%E9%99%85%E5%8C%96.md": "d5a62d2d8cd097238e2b90457dae0142",
"file/flutter/%E6%B7%B7%E5%90%88%E5%BC%80%E5%8F%91%E4%B9%8Bflutter_boost(%E4%B8%80)%E9%85%8D%E7%BD%AE.md": "b718f379a71811ece6a81d9d2874410b",
"file/flutter/%E5%8F%A6%E4%B8%80%E7%A7%8D%E6%96%B9%E5%BC%8F%E5%AE%9E%E7%8E%B0Flutter%E5%9B%BD%E9%99%85%E5%8C%96(%E4%BA%8C)%E4%B9%8BApp%E5%86%85%E9%83%A8%E8%AF%AD%E8%A8%80%E5%88%87%E6%8D%A2.md": "84080926d80244b27b3ed03132eba5b9",
"file/flutter/%E4%B8%BA%E4%BD%95Flutter%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%A1%86%E6%9E%B6%E5%8F%AA%E8%83%BD%E7%94%A8%E5%9C%A8root%20widget(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "88def35874d6fed81087db51becd12af",
"file/flutter/Flutter%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E4%B9%8B%E8%BD%AF%E9%94%AE%E7%9B%98%E6%98%BE%E7%A4%BA%E9%9A%90%E8%97%8F.md": "fce44add44c62f0b1eb1c5d307f5e73a",
"file/flutter/Dart%E5%85%A5%E9%97%A8%E4%B9%8B%E6%89%A9%E5%B1%95%E5%87%BD%E6%95%B0.md": "97f7644fea630598c17d93e7193ce80d",
"file/flutter/Android%20Studio%E5%88%9B%E5%BB%BAFlutter%E9%A1%B9%E7%9B%AE%E5%8D%A1%E4%BD%8F%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.md": "b8554cb9f37a4c1e3770ad83eea14d1d",
"file/flutter/Flutter%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md": "f5da1f3caeaf5db9cbf3dd398e7ffd4c",
"file/flutter/Get.put%E5%AF%B9%E8%B1%A1%E5%A6%82%E4%BD%95%E8%87%AA%E5%8A%A8%E8%A2%AB%E5%9B%9E%E6%94%B6%E7%9A%84(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "0053757f0d3f12a72b58a610f3acd6f2",
"file/flutter/Flutter%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E4%B9%8B%E8%BD%AF%E9%94%AE%E7%9B%98%E9%A1%B6%E8%B5%B7%E5%B8%83%E5%B1%80%E9%97%AE%E9%A2%98.md": "c764d1fd60d1d80d4c16a9f1f83adb73",
"file/flutter/Flutter%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E4%B9%8Bscoped_model%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90.md": "b2106ab49bb85a0c5e920004c57c2147",
"file/flutter/Get%E5%A6%82%E4%BD%95%E9%80%9A%E8%BF%87arguments%E4%BC%A0%E9%80%92%E5%8F%82%E6%95%B0%E7%9A%84(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "ca7da301f424417c7583003f5e3d8bfb",
"file/flutter/Flutter%20web%E9%83%A8%E7%BD%B2%E5%90%8E%E6%98%BE%E7%A4%BA%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81.md": "aad811898567d1121fc724aa71765e62",
"file/flutter/Flutter%E5%85%A5%E9%97%A8%E4%B9%8B%E6%90%9C%E7%B4%A2%E8%BE%93%E5%85%A5%E6%A1%86%E5%88%86%E6%9E%90%E5%AE%9E%E7%8E%B0.md": "6f873b17483a8977c24c8cb731b77334",
"file/flutter/Flutter%E4%BA%8B%E4%BB%B6%E5%88%86%E6%9E%90(%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90).md": "4959addbb5846ed0a3751029c78c5bee",
"file/flutter/%E5%85%B3%E4%BA%8Ecouldn't%20find%20%22libflutter.so%E5%BC%82%E5%B8%B8%E8%A7%A3%E5%86%B3.md": "8f88341b5a8ccfa510050e405541ec47",
"file/android/Android%E7%BD%91%E7%BB%9C%E6%A1%86%E6%9E%B6okhttp%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%88%86%E6%9E%90.md": "c0b0b81c533abf0a9d0ef95fa026e7e1",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(1)%E4%B9%8B%E5%AE%89%E8%A3%85%E5%8C%85%E5%A4%A7%E5%B0%8F%E4%BC%98%E5%8C%96.md": "96d1eaa38ebd4d01ce8c4660c2c299f3",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97%E5%B7%A5%E5%85%B7%E7%AF%87%E4%B9%8BMAT%E4%BD%BF%E7%94%A8.md": "38f148bc44734399ca35a73ceb0dd658",
"file/android/%E5%85%B3%E4%BA%8EFileMonitor%E7%9A%84%E6%83%B3%E6%B3%95%E5%92%8C%E5%AE%9E%E7%8E%B0.md": "3af8a58e194dbb38599e3758a47bb096",
"file/android/Android%E5%90%84%E7%89%88%E6%9C%AC%E6%96%B0%E5%8A%9F%E8%83%BD%E5%8F%8A%E5%8C%BA%E5%88%AB.md": "54c96f3d55d7f9c5e06da91cf6579cc1",
"file/android/%E4%B8%BA%E4%BB%80%E4%B9%88Android%E4%B8%AD%E5%BE%88%E5%A4%9Aint%E5%B8%B8%E9%87%8F%E4%BD%BF%E7%94%A8%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA.md": "27fee08d20d32f5c0c76f3e637234a80",
"file/android/Android%E6%BA%90%E7%A0%81%E4%B8%8B%E8%BD%BD.md": "ae92bad4dc4ab0b6fbc449ca508afb78",
"file/android/Android%E5%85%B3%E4%BA%8EActivity%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E8%AF%AF%E8%A7%A3.md": "80413d8b299990590be3b0dd2bc1f275",
"file/android/%E5%85%B3%E4%BA%8EAndroid%E6%97%A7%E9%A1%B9%E7%9B%AE%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BB%84%E4%BB%B6%E5%8C%96%E5%AE%9E%E7%8E%B0--%E7%BB%AD%E7%AF%87.md": "f9c066dfa2a958cccfc507d75c294c96",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(2)%E4%B9%8B%E7%A8%B3%E5%AE%9A%E6%80%A7%E4%BC%98%E5%8C%96.md": "c7bcff0e8b5663cac35efafe838634d3",
"file/android/%E5%85%B3%E4%BA%8ECanvas%E7%9A%84%E4%B8%80%E4%BA%9B%E6%A6%82%E5%BF%B5.md": "bdfe382dacc434e74cc3985f5fa23597",
"file/android/%E3%80%8AAndroid%E7%A7%BB%E5%8A%A8%E6%80%A7%E8%83%BD%E5%AE%9E%E6%88%98%E3%80%8B%E4%BC%98%E5%8C%96%E7%82%B9%E6%80%BB%E7%BB%93.md": "34041a1a1b5e2f18c72628098f28e0dd",
"file/android/No%20resource%20identifier%20found%20for%20attribute%20'roundIcon'%20in%20package%20'and.md": "d81a649c6d7180b6064255f4f0264637",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(3)%E4%B9%8B%E7%BD%91%E7%BB%9C%E4%BC%98%E5%8C%96.md": "fa6ab343f34e2fde076916400e610918",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(6)%E4%B9%8B%E5%86%85%E5%AD%98%E4%BC%98%E5%8C%96.md": "c923bc026a2a0971b6c18000504a95d4",
"file/android/Android%E8%8E%B7%E5%8F%96IP.md": "6cef4ec3e7900045c80e115a702595c5",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(4)%E4%B9%8B%E8%80%97%E7%94%B5%E4%BC%98%E5%8C%96.md": "f94a39c773b14b8fcfa6ba3235c9f187",
"file/android/Android%20JNI%E7%9F%A5%E8%AF%86%E7%82%B9.md": "507d864a9781625dd928000d79a14970",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(5)%E4%B9%8BUI%E4%BC%98%E5%8C%96.md": "8ea61c698b572e9bb507bf8bf07a3e02",
"file/android/Android%E6%9C%AC%E5%9C%B0%E5%B9%BF%E6%92%AD.md": "109358ae5e6d3ca7da63bd55cf8c70ba",
"file/android/%E4%B8%BA%E4%BB%80%E4%B9%88%E7%9B%B8%E5%AF%B9%E5%B8%83%E5%B1%80%E6%AF%94%E7%BA%BF%E6%80%A7%E5%B8%83%E5%B1%80%E6%80%A7%E8%83%BD%E4%BD%8E.md": "89c4a55a11dee48cf4a3b2032a9aa8cf",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97(0)%E4%B9%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md": "cd38ead9812214c222fadedade13bf86",
"file/android/%E5%85%B3%E4%BA%8EIntent%E9%82%A3%E4%BA%9B%E4%BA%8B.md": "583080544ccb4653f850ab5ba5d4699a",
"file/android/Log%E5%B7%A5%E5%85%B7%E5%B0%81%E8%A3%85Tag%E6%98%BE%E7%A4%BA%E7%B1%BB%E6%96%B9%E6%B3%95%E5%92%8C%E8%A1%8C%E6%95%B0.md": "1c8f7201f3833284964f64db44ea44dc",
"file/android/Android%E4%BF%AE%E6%94%B9%E7%B3%BB%E7%BB%9F%E8%BF%94%E5%9B%9E%E9%94%AE%E9%A2%9C%E8%89%B2.md": "3bed1c33bfc9d2873a64ac5496e61ab5",
"file/android/%E6%B5%85%E8%B0%88Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%B3%BB%E5%88%97%E5%B7%A5%E5%85%B7%E7%AF%87%E4%B9%8BBatteryHistorian%E7%94%B5%E9%87%8F%E6%A3%80%E6%B5%8B%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8.md": "0e4f03c48f2de82d64229262811f404e",
"file/android/%E5%A6%82%E4%BD%95%E7%9F%A5%E9%81%93%E4%B8%8B%E8%BD%BD%E5%A5%BD%E7%9A%84aosp%E7%89%88%E6%9C%AC%EF%BC%9F.md": "8d48e7e2027056daa8cada1184f673dc",
"file/android/%E5%85%B3%E4%BA%8EAndroid%E6%97%A7%E9%A1%B9%E7%9B%AE%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BB%84%E4%BB%B6%E5%8C%96%E5%AE%9E%E7%8E%B0(%E4%B8%89).md": "5558b080f3b9f0df63858da2232e01d0",
"file/android/%E5%85%B3%E4%BA%8EAndroid%E6%97%A7%E9%A1%B9%E7%9B%AE%E6%A8%A1%E5%9D%97%E5%8C%96%E7%BB%84%E4%BB%B6%E5%8C%96%E5%AE%9E%E7%8E%B0.md": "97a62892c5b0035aa07b42a462ff6d40",
"file/android/%E6%88%91%E6%98%AF%E5%A6%82%E4%BD%95%E7%A0%B4%E8%A7%A3%E4%B8%80%E4%B8%AA%E5%B0%8F%E8%A7%86%E9%A2%91app%E7%9A%84.md": "0d2bf3ffd0fc3135ec77fc4bbc60b76a",
"file/android/%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%BA%BF%E7%A8%8B%E5%88%B7%E6%96%B0UI%E6%B2%A1%E6%8A%A5%E9%94%99%EF%BC%9F.md": "4d67f30e56316ec5e8d1a2ac0335618d",
"file/android/Android%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%95%B4%E7%90%86.md": "6d2e9e6dc18d082a5c7210a79e3d568e",
"file/android/%E6%B5%85%E8%B0%88Android%E4%BA%8B%E4%BB%B6%E4%BC%A0%E9%80%92%E6%9C%BA%E5%88%B6.md": "9017bfbf252974d1d438949a11c5c2de",
"main.dart.js_11.part.js": "26b54e7e20011810674d45831b3ebcdc",
"main.dart.js_4.part.js": "5c94ea01b09d85b535ed9612c2e23456",
"main.dart.js": "084cea2b7e984817524c993949c7de62",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart.js_10.part.js": "4c594e452a34d459353f7de3b7aac3e8",
"main.dart.js_5.part.js": "acb08ac440dc5433c8b1432259fa03fc",
"favicon.png": "518450251fec6a085ecef1475289fbb7",
"main.dart.js_8.part.js": "d6266b8e697c6174c2d477f586a5e2e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8440f19c2f088ec0d442396f162b4253",
"main.dart.js_1.part.js": "6496c931a31dcc896ce932a3747db9fe",
"main.dart.js_3.part.js": "157731e2777c918ddcc8c8a519d62711",
"assets/AssetManifest.json": "90a50013cc518e81adc908be00f18451",
"assets/NOTICES": "074a7aceaa685086e1043c1b52727e16",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/md/catelog.json": "be1335be49ba310b000bff2dfe05d82f",
"assets/md/rocket.svga": "8c43c5a79d4a06689bcc6777bde04b9b",
"assets/md/android.json": "e40ef2e0bfe59c79f26d414a55ed409b",
"assets/md/flutter.json": "f324dc6788ee95db8740baa27292ca4d",
"assets/md/other.json": "25ac382822b27f4261b5743791a749cc",
"assets/md/cy.json": "faa54faff49d42113f427695f738ce13",
"assets/md/favicon.png": "518450251fec6a085ecef1475289fbb7",
"assets/md/angle.svga": "a9265981485f1130c7e7fd2f2be1252a",
"assets/md/live.jpg": "697c5c25d46d3dbb8b81e1dc9af81917",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1b07a8ee0cb8d1fd476cb812affb6665",
"assets/fonts/MaterialIcons-Regular.otf": "1b18891d2fa531ca8de5b31240a2ea62",
"main.dart.js_2.part.js": "2c629883900e4df67ca49ed70845ef2e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
