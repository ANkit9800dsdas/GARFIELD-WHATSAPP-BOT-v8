//Coded by Tharindu Liyanage              
const _0x1946f4=_0x21c7;(function(_0x45b756,_0x303363){const _0x31b11c=_0x21c7,_0x7c83ab=_0x45b756();while(!![]){try{const _0x38b02d=parseInt(_0x31b11c(0x3ae))/0x1*(-parseInt(_0x31b11c(0x4d1))/0x2)+-parseInt(_0x31b11c(0x595))/0x3+-parseInt(_0x31b11c(0x182))/0x4+-parseInt(_0x31b11c(0x32c))/0x5+-parseInt(_0x31b11c(0x656))/0x6*(parseInt(_0x31b11c(0x56b))/0x7)+-parseInt(_0x31b11c(0x412))/0x8+parseInt(_0x31b11c(0x5e4))/0x9;if(_0x38b02d===_0x303363)break;else _0x7c83ab['push'](_0x7c83ab['shift']());}catch(_0x2cab8a){_0x7c83ab['push'](_0x7c83ab['shift']());}}}(_0x6fcc,0x240a6),process['on'](_0x1946f4(0x60e),console[_0x1946f4(0x39d)]),require(_0x1946f4(0x416)));const {BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require('@adiwajshing/baileys'),fs=require('fs'),util=require(_0x1946f4(0x678)),chalk=require('chalk'),{exec,spawn,execSync}=require(_0x1946f4(0x384)),axios=require(_0x1946f4(0x488)),path=require(_0x1946f4(0x455)),os=require('os'),fetch=require('node-fetch'),google=require(_0x1946f4(0x153)),mel=require(_0x1946f4(0x246)),xa=require('xfarr-api'),hx=require('hxz-api'),moment=require(_0x1946f4(0x1f3)),{JSDOM}=require(_0x1946f4(0x58f)),speed=require(_0x1946f4(0x2fb)),{performance}=require(_0x1946f4(0x666)),{mediafireDl}=require(_0x1946f4(0x5ac)),{Primbon}=require(_0x1946f4(0x229)),primbon=new Primbon(),{smsg,formatp,tanggal,formatDate,getTime,isUrl,sleep,clockString,runtime,fetchJson,getBuffer,jsonformat,format,parseMention,getRandom}=require(_0x1946f4(0x289)),xmodules=require('xfarr-api'),{addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah,getDarah}=require(_0x1946f4(0x252)),{cekInventoryAdaAtauGak,addInventori,addBesi,addEmas,addEmerald,addUmpan,addPotion,kurangBesi,kurangEmas,kurangEmerald,kurangUmpan,kurangPotion,getBesi,getEmas,getEmerald,getUmpan,getPotion}=require(_0x1946f4(0x291)),{addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay,getMonay}=require(_0x1946f4(0x2d9)),{addInventoriLimit,cekDuluJoinAdaApaKagaLimitnyaDiJson,addLimit,kurangLimit,getLimit}=require(_0x1946f4(0x638)),{cekDuluHasilBuruanNya,addInventoriBuruan,addIkan,addAyam,addKelinci,addDomba,addSapi,addGajah,kurangIkan,kurangAyam,kurangKelinci,kurangDomba,kurangSapi,kurangGajah,getIkan,getAyam,getKelinci,getDomba,getSapi,getGajah}=require(_0x1946f4(0x3bd));let DarahAwal=global['rpg'][_0x1946f4(0x243)];const isDarah=cekDuluJoinAdaApaKagaDiJson(m['sender']),isCekDarah=getDarah(m[_0x1946f4(0x224)]),isUmpan=getUmpan(m[_0x1946f4(0x224)]),isPotion=getPotion(m[_0x1946f4(0x224)]),isIkan=getIkan(m[_0x1946f4(0x224)]),isAyam=getAyam(m[_0x1946f4(0x224)]),isKelinci=getKelinci(m[_0x1946f4(0x224)]),isDomba=getDomba(m[_0x1946f4(0x224)]),isSapi=getSapi(m[_0x1946f4(0x224)]),isGajah=getGajah(m[_0x1946f4(0x224)]),isMonay=getMonay(m[_0x1946f4(0x224)]),isLimit=getLimit(m['sender']),isBesi=getBesi(m[_0x1946f4(0x224)]),isEmas=getEmas(m[_0x1946f4(0x224)]),isEmerald=getEmerald(m[_0x1946f4(0x224)]),isInventory=cekInventoryAdaAtauGak(m[_0x1946f4(0x224)]),isInventoriBuruan=cekDuluHasilBuruanNya(m[_0x1946f4(0x224)]),isInventoryLimit=cekDuluJoinAdaApaKagaLimitnyaDiJson(m[_0x1946f4(0x224)]),isInventoryMonay=cekDuluJoinAdaApaKagaMonaynyaDiJson(m[_0x1946f4(0x224)]),ikan=['🐼','🦋'];let _limit=JSON[_0x1946f4(0x163)](fs['readFileSync'](_0x1946f4(0x2f5))),_buruan=JSON[_0x1946f4(0x163)](fs[_0x1946f4(0x5ec)](_0x1946f4(0x3ed))),_darahOrg=JSON[_0x1946f4(0x163)](fs[_0x1946f4(0x5ec)]('./IMGDesc/user/darah.json')),setik=JSON[_0x1946f4(0x163)](fs[_0x1946f4(0x5ec)]('./database/setik.json')),vien=JSON[_0x1946f4(0x163)](fs['readFileSync']('./database/vien.json')),imagi=JSON[_0x1946f4(0x163)](fs['readFileSync']('./database/imagi.json')),videox=JSON[_0x1946f4(0x163)](fs['readFileSync'](_0x1946f4(0x56d))),tebaklagu=db[_0x1946f4(0x746)][_0x1946f4(0x51e)][_0x1946f4(0x5fb)]=[],_family100=db[_0x1946f4(0x746)][_0x1946f4(0x51e)]['family100']=[],kuismath=db[_0x1946f4(0x746)][_0x1946f4(0x51e)][_0x1946f4(0x4bb)]=[],tebakgambar=db[_0x1946f4(0x746)]['game'][_0x1946f4(0x142)]=[],tebakkata=db['data'][_0x1946f4(0x51e)][_0x1946f4(0x1b1)]=[],caklontong=db[_0x1946f4(0x746)]['game']['lontong']=[],caklontong_desk=db[_0x1946f4(0x746)][_0x1946f4(0x51e)][_0x1946f4(0x37c)]=[],tebakkalimat=db[_0x1946f4(0x746)][_0x1946f4(0x51e)][_0x1946f4(0x21f)]=[],tebaklirik=db[_0x1946f4(0x746)]['game']['lirik']=[],tebaktebakan=db[_0x1946f4(0x746)]['game'][_0x1946f4(0x3c1)]=[],vote=db['data'][_0x1946f4(0x386)][_0x1946f4(0x470)]=[];module[_0x1946f4(0x5aa)]=GarfieldAdd=async(_0x56eed5,_0x522605,_0x2202fc,_0x172e89)=>{const _0x2e6a35=_0x1946f4;try{var _0x28054b=_0x522605[_0x2e6a35(0x13c)]===_0x2e6a35(0x305)?_0x522605[_0x2e6a35(0x6f5)][_0x2e6a35(0x305)]:_0x522605[_0x2e6a35(0x13c)]==_0x2e6a35(0x2d7)?_0x522605[_0x2e6a35(0x6f5)][_0x2e6a35(0x2d7)][_0x2e6a35(0x5ef)]:_0x522605[_0x2e6a35(0x13c)]==_0x2e6a35(0x1c4)?_0x522605[_0x2e6a35(0x6f5)][_0x2e6a35(0x1c4)][_0x2e6a35(0x5ef)]:_0x522605['mtype']==_0x2e6a35(0x222)?_0x522605[_0x2e6a35(0x6f5)]['extendedTextMessage'][_0x2e6a35(0x3e9)]:_0x522605[_0x2e6a35(0x13c)]==_0x2e6a35(0x3cb)?_0x522605['message'][_0x2e6a35(0x3cb)][_0x2e6a35(0x498)]:_0x522605[_0x2e6a35(0x13c)]==_0x2e6a35(0x284)?_0x522605[_0x2e6a35(0x6f5)]['listResponseMessage'][_0x2e6a35(0x326)]['selectedRowId']:_0x522605[_0x2e6a35(0x13c)]==_0x2e6a35(0x6ad)?_0x522605[_0x2e6a35(0x6f5)][_0x2e6a35(0x6ad)]['selectedId']:_0x522605['mtype']===_0x2e6a35(0x2d2)?_0x522605[_0x2e6a35(0x6f5)][_0x2e6a35(0x3cb)]?.[_0x2e6a35(0x498)]||_0x522605[_0x2e6a35(0x6f5)][_0x2e6a35(0x284)]?.['singleSelectReply'][_0x2e6a35(0x344)]||_0x522605[_0x2e6a35(0x3e9)]:'',_0x42e8f6=typeof _0x522605[_0x2e6a35(0x3e9)]==_0x2e6a35(0x69f)?_0x522605[_0x2e6a35(0x3e9)]:'',_0x4cf957=prefa?/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi[_0x2e6a35(0x19d)](_0x28054b)?_0x28054b[_0x2e6a35(0x2db)](/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0]:'':prefa??global[_0x2e6a35(0x3e1)];const _0x215764=_0x28054b[_0x2e6a35(0x2a6)](_0x4cf957),_0x24546f=_0x28054b[_0x2e6a35(0x33b)](_0x4cf957,'')['trim']()['split'](/ +/)[_0x2e6a35(0x17a)]()['toLowerCase'](),_0x44e215=_0x28054b[_0x2e6a35(0x308)]()['split'](/ +/)[_0x2e6a35(0x195)](0x1),_0x2eb711=_0x522605['pushName']||_0x2e6a35(0x356),_0x282780=await _0x56eed5[_0x2e6a35(0x538)](_0x56eed5[_0x2e6a35(0x26f)]['id']),_0x3e9927=[_0x282780,...global['owner']][_0x2e6a35(0x320)](_0x5e6705=>_0x5e6705[_0x2e6a35(0x33b)](/[^0-9]/g,'')+_0x2e6a35(0x3a7))[_0x2e6a35(0x34b)](_0x522605['sender']),_0x3668c8=_0x522605[_0x2e6a35(0x224)]==_0x282780?!![]:![],_0x203e2a=q=_0x44e215[_0x2e6a35(0x3da)]('\x20'),_0x22b23c=_0x522605['quoted']?_0x522605['quoted']:_0x522605,_0x56a534=(_0x22b23c[_0x2e6a35(0x72c)]||_0x22b23c)[_0x2e6a35(0x6f6)]||'',_0xd34329=/image|video|sticker|audio/[_0x2e6a35(0x19d)](_0x56a534),_0x36c0bf=mek[_0x2e6a35(0x6bc)]['remoteJid'],_0x3a4d5a=Object['keys'](mek['message'])[0x0],_0x2467f3=JSON[_0x2e6a35(0x5e8)](mek[_0x2e6a35(0x6f5)]),_0x2c154e=_0x522605['isGroup']?await _0x56eed5[_0x2e6a35(0x4fa)](_0x522605[_0x2e6a35(0x687)])[_0x2e6a35(0x4c7)](_0x3d4539=>{}):'',_0xe28281=_0x522605[_0x2e6a35(0x555)]?_0x2c154e['subject']:'',_0x5819fe=_0x522605[_0x2e6a35(0x555)]?await _0x2c154e[_0x2e6a35(0x3bb)]:'',_0x16703c=_0x522605[_0x2e6a35(0x555)]?await _0x5819fe[_0x2e6a35(0x280)](_0x28a4aa=>_0x28a4aa[_0x2e6a35(0x42f)]!==null)['map'](_0x3e6aa5=>_0x3e6aa5['id']):'',_0x7de514=_0x522605[_0x2e6a35(0x555)]?_0x2c154e[_0x2e6a35(0x35e)]:'',_0x1c44c5=_0x522605[_0x2e6a35(0x555)]?_0x16703c[_0x2e6a35(0x34b)](_0x282780):![],_0xdbf061=_0x522605[_0x2e6a35(0x555)]?_0x16703c['includes'](_0x522605[_0x2e6a35(0x224)]):![],_0xfb07a=_0x3e9927||global[_0x2e6a35(0x6c1)][_0x2e6a35(0x320)](_0x4791ba=>_0x4791ba['replace'](/[^0-9]/g,'')+_0x2e6a35(0x3a7))[_0x2e6a35(0x34b)](_0x522605[_0x2e6a35(0x224)])||![];let _0x4f624a=[flaming,fluming,flarun,flasmurf],_0x1442c9=_0x4f624a[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x4f624a[_0x2e6a35(0x25e)])];try{let _0x3a3101=_0x2bf00a=>typeof _0x2bf00a===_0x2e6a35(0x739)&&!isNaN(_0x2bf00a),_0x593e8d=_0xfb07a?global['limitawal'][_0x2e6a35(0x6c1)]:global[_0x2e6a35(0x5e0)][_0x2e6a35(0x2b3)],_0x779bb5=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]];if(typeof _0x779bb5!=='object')global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]]={};if(_0x779bb5){if(!_0x3a3101(_0x779bb5[_0x2e6a35(0x513)]))_0x779bb5[_0x2e6a35(0x513)]=-0x1;if(!(_0x2e6a35(0x67e)in _0x779bb5))_0x779bb5[_0x2e6a35(0x67e)]='';if(!_0x3a3101(_0x779bb5[_0x2e6a35(0x60f)]))_0x779bb5[_0x2e6a35(0x60f)]=_0x593e8d;}else global['db'][_0x2e6a35(0x746)]['users'][_0x522605[_0x2e6a35(0x224)]]={'afkTime':-0x1,'afkReason':'','limit':_0x593e8d};let _0x258e56=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]];if(typeof _0x258e56!==_0x2e6a35(0x65a))global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605['chat']]={};if(_0x258e56){if(!(_0x2e6a35(0x585)in _0x258e56))_0x258e56[_0x2e6a35(0x585)]=![];if(!(_0x2e6a35(0x389)in _0x258e56))_0x258e56['antilink']=![];}else global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]]={'mute':![],'antilink':![]};let _0x37fae1=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x6e9)][_0x282780];if(typeof _0x37fae1!=='object')global['db'][_0x2e6a35(0x746)]['settings'][_0x282780]={};if(_0x37fae1){if(!_0x3a3101(_0x37fae1['status']))_0x37fae1[_0x2e6a35(0x67c)]=0x0;if(!(_0x2e6a35(0x196)in _0x37fae1))_0x37fae1[_0x2e6a35(0x196)]=![];}else global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x6e9)][_0x282780]={'status':0x0,'autobio':![]};}catch(_0x50380d){console[_0x2e6a35(0x39d)](_0x50380d);}const _0x58f545=_0xf601d5=>{const _0x12384c=_0x2e6a35;_0x56eed5['sendMessage'](_0x522605['chat'],{'text':_0xf601d5,'contextInfo':{'externalAdReply':{'title':_0x12384c(0x51f),'body':_0x12384c(0x4cf),'previewType':_0x12384c(0x39a),'thumbnailUrl':'','thumbnail':fs[_0x12384c(0x5ec)](_0x12384c(0x2fd)),'sourceUrl':_0x12384c(0x5d6)+global['owner']+_0x12384c(0x1d6)}}},{'quoted':_0x522605});},_0x46a476=_0x3f98a8=>{const _0x2797ba=_0x2e6a35;_0x56eed5[_0x2797ba(0x371)](_0x522605[_0x2797ba(0x687)],{'text':_0x3f98a8,'contextInfo':{'externalAdReply':{'title':'\x20𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣\x20𝖡𝖮Т\x20','body':'ＸＮＯＤＥＳ','previewType':'PHOTO','thumbnailUrl':'','thumbnail':fs[_0x2797ba(0x5ec)](_0x2797ba(0x2fd)),'sourceUrl':'http://Wa.me//'+global['owner']+'?text=*Hello🦋*'}}},{'quoted':_0x522605});};if(!_0x56eed5[_0x2e6a35(0x5fe)]){if(!_0x522605[_0x2e6a35(0x6bc)]['fromMe'])return;}_0x522605['message']&&(_0x56eed5[_0x2e6a35(0x749)](_0x522605[_0x2e6a35(0x687)],_0x522605[_0x2e6a35(0x224)],[_0x522605[_0x2e6a35(0x6bc)]['id']]),console[_0x2e6a35(0x34d)](chalk[_0x2e6a35(0x393)](chalk[_0x2e6a35(0x49e)]('[\x20MESSAGE\x20]')),chalk['black'](chalk[_0x2e6a35(0x4a5)](new Date())),chalk['black'](chalk[_0x2e6a35(0x1a1)](_0x42e8f6||_0x522605['mtype']))+'\x0a'+chalk[_0x2e6a35(0x16f)](_0x2e6a35(0x230)),chalk['green'](_0x2eb711),chalk['yellow'](_0x522605['sender'])+'\x0a'+chalk[_0x2e6a35(0x62d)](_0x2e6a35(0x33e)),chalk[_0x2e6a35(0x33f)](_0x522605['isGroup']?_0x2eb711:_0x2e6a35(0x361),_0x522605[_0x2e6a35(0x687)])));let _0x1f6f39=require('node-cron');_0x1f6f39[_0x2e6a35(0x6e6)](_0x2e6a35(0x1dd),()=>{const _0x71b6b5=_0x2e6a35;let _0x1250c7=Object[_0x71b6b5(0x253)](global['db'][_0x71b6b5(0x746)][_0x71b6b5(0x2d4)]),_0x19caec=_0xfb07a?global['limitawal']['premium']:global[_0x71b6b5(0x5e0)][_0x71b6b5(0x2b3)];for(let _0x5d7023 of _0x1250c7)global['db']['data'][_0x71b6b5(0x2d4)][_0x5d7023][_0x71b6b5(0x60f)]=_0x19caec;console['log'](_0x71b6b5(0x257));},{'scheduled':!![],'timezone':_0x2e6a35(0x5a6)});const _0x15317c=moment()['tz'](_0x2e6a35(0x5d3))[_0x2e6a35(0x3b5)]('HH:mm:ss');if(_0x15317c<'23:59:00')var _0xe3bd99=_0x2e6a35(0x1a6);if(_0x15317c<_0x2e6a35(0x1e6))var _0xe3bd99='Good\x20night🌙';if(_0x15317c<_0x2e6a35(0x3d4))var _0xe3bd99=_0x2e6a35(0x188);if(_0x15317c<'15:00:00')var _0xe3bd99=_0x2e6a35(0x3e0);if(_0x15317c<_0x2e6a35(0x522))var _0xe3bd99='Good\x20morning\x20🌄';if(_0x15317c<_0x2e6a35(0x5d1))var _0xe3bd99='Good\x20morning\x20🌅';if(db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]][_0x2e6a35(0x389)]){if(_0x42e8f6[_0x2e6a35(0x2db)]('chat.whatsapp.com')){_0x58f545(_0x2e6a35(0x592));if(!_0x1c44c5)return _0x58f545(_0x2e6a35(0x5b4));let _0x16cc7a=_0x2e6a35(0x564)+await _0x56eed5['groupInviteCode'](_0x522605['chat']),_0xd7e9d2=new RegExp(_0x16cc7a,'i'),_0x1bb99d=_0xd7e9d2[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)]);if(_0x1bb99d)return _0x58f545(_0x2e6a35(0x2ef));if(_0xdbf061)return _0x58f545(_0x2e6a35(0x20b));if(_0x3e9927)return _0x58f545(_0x2e6a35(0x401)+global['emoji01']+'\x20');_0x56eed5[_0x2e6a35(0x29c)](_0x522605[_0x2e6a35(0x687)],[_0x522605[_0x2e6a35(0x224)]],_0x2e6a35(0x14f));}}for(let _0x3bb42a of setik){_0x42e8f6===_0x3bb42a&&(result=fs[_0x2e6a35(0x5ec)]('./TempCloud/sticker/'+_0x3bb42a+_0x2e6a35(0x175)),_0x56eed5['sendMessage'](_0x522605['chat'],{'sticker':result},{'quoted':_0x522605}));}for(let _0x3210eb of vien){_0x42e8f6===_0x3210eb&&(result=fs[_0x2e6a35(0x5ec)](_0x2e6a35(0x1fa)),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'audio':result,'mimetype':_0x2e6a35(0x376),'ptt':!![]},{'quoted':_0x522605}));}for(let _0x1d3ccb of imagi){_0x42e8f6===_0x1d3ccb&&(result=fs[_0x2e6a35(0x5ec)]('./TempCloud/image/'+_0x1d3ccb+_0x2e6a35(0x32f)),_0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'image':result},{'quoted':_0x522605}));}for(let _0x37d172 of videox){_0x42e8f6===_0x37d172&&(result=fs[_0x2e6a35(0x5ec)](_0x2e6a35(0x4ec)+_0x37d172+_0x2e6a35(0x1d7)),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'video':result},{'quoted':_0x522605}));}if(db['data']['chats'][_0x522605['chat']][_0x2e6a35(0x585)]&&!_0xdbf061&&!_0x3e9927)return;const _0x27cbdb=_0x3a4d5a===_0x2e6a35(0x222)&&_0x2467f3[_0x2e6a35(0x34b)]('imageMessage'),_0xa7988f=_0x3a4d5a==='extendedTextMessage'&&_0x2467f3[_0x2e6a35(0x34b)](_0x2e6a35(0x1c4)),_0x268935=_0x3a4d5a==='extendedTextMessage'&&_0x2467f3[_0x2e6a35(0x34b)](_0x2e6a35(0x4a9)),_0x3b98eb=_0x3a4d5a===_0x2e6a35(0x222)&&_0x2467f3[_0x2e6a35(0x34b)]('stickerMessage');if(_0xd34329&&_0x522605['msg']['fileSha256']&&_0x522605[_0x2e6a35(0x72c)][_0x2e6a35(0x2b6)]['toString'](_0x2e6a35(0x21a))in global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)]){let _0x5233cf=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)][_0x522605[_0x2e6a35(0x72c)][_0x2e6a35(0x2b6)][_0x2e6a35(0x27a)]('base64')],{text:_0x4b5a8f,mentionedJid:_0x24dece}=_0x5233cf,_0x534b1a=await generateWAMessage(_0x522605['chat'],{'text':_0x4b5a8f,'mentions':_0x24dece},{'userJid':_0x56eed5[_0x2e6a35(0x26f)]['id'],'quoted':_0x522605[_0x2e6a35(0x640)]&&_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x57c)]});_0x534b1a[_0x2e6a35(0x6bc)][_0x2e6a35(0x6de)]=areJidsSameUser(_0x522605['sender'],_0x56eed5[_0x2e6a35(0x26f)]['id']),_0x534b1a['key']['id']=_0x522605[_0x2e6a35(0x6bc)]['id'],_0x534b1a[_0x2e6a35(0x1f5)]=_0x522605[_0x2e6a35(0x1f5)];if(_0x522605[_0x2e6a35(0x555)])_0x534b1a[_0x2e6a35(0x1fb)]=_0x522605['sender'];let _0x454129={..._0x2202fc,'messages':[proto[_0x2e6a35(0x733)][_0x2e6a35(0x696)](_0x534b1a)],'type':_0x2e6a35(0x440)};_0x56eed5['ev']['emit'](_0x2e6a35(0x3f8),_0x454129);}if('family100'+_0x522605[_0x2e6a35(0x687)]in _family100&&_0x215764){kuis=!![];let _0xc4351c=_family100[_0x2e6a35(0x23d)+_0x522605[_0x2e6a35(0x687)]],_0x3f57d7=_0x42e8f6[_0x2e6a35(0x248)]()[_0x2e6a35(0x33b)](/[^\w\s\-]+/,''),_0x36ce5e=/^((me)?give up|surr?ender)$/i[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)]);if(!_0x36ce5e){let _0x5f5877=_0xc4351c[_0x2e6a35(0x509)]['findIndex'](_0x206a30=>_0x206a30[_0x2e6a35(0x248)]()['replace'](/[^\w\s\-]+/,'')===_0x3f57d7);if(_0xc4351c[_0x2e6a35(0x3f0)][_0x5f5877])return!0x0;_0xc4351c[_0x2e6a35(0x3f0)][_0x5f5877]=_0x522605[_0x2e6a35(0x224)];}let _0x84037a=_0xc4351c[_0x2e6a35(0x3f0)][_0x2e6a35(0x25e)]===_0xc4351c[_0x2e6a35(0x3f0)][_0x2e6a35(0x280)](_0x39f0b8=>_0x39f0b8)[_0x2e6a35(0x25e)],_0x3e73bb=('\x0aAnswer\x20The\x20Following\x20Questions\x20:\x0a'+_0xc4351c[_0x2e6a35(0x41c)]+'\x0a\x0a\x0aThere\x20Is\x20'+_0xc4351c[_0x2e6a35(0x509)][_0x2e6a35(0x25e)]+_0x2e6a35(0x37e)+(_0xc4351c[_0x2e6a35(0x509)][_0x2e6a35(0x6e5)](_0x1ede3c=>_0x1ede3c[_0x2e6a35(0x34b)]('\x20'))?_0x2e6a35(0x2ec):'')+'\x0a'+(_0x84037a?_0x2e6a35(0x215):_0x36ce5e?_0x2e6a35(0x42d):'')+'\x0a'+Array[_0x2e6a35(0x365)](_0xc4351c[_0x2e6a35(0x509)],(_0x4b1d3a,_0x2df1cd)=>{const _0x40eb75=_0x2e6a35;return _0x36ce5e||_0xc4351c[_0x40eb75(0x3f0)][_0x2df1cd]?('('+(_0x2df1cd+0x1)+')\x20'+_0x4b1d3a+'\x20'+(_0xc4351c['terjawab'][_0x2df1cd]?'@'+_0xc4351c[_0x40eb75(0x3f0)][_0x2df1cd]['split']('@')[0x0]:''))[_0x40eb75(0x308)]():![];})['filter'](_0x30e9e8=>_0x30e9e8)['join']('\x0a')+'\x0a\x20\x20\x20\x20'+(_0x36ce5e?'':_0x2e6a35(0x25d)))['trim']();_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x3e73bb,_0x522605,{'contextInfo':{'mentionedJid':parseMention(_0x3e73bb)}})[_0x2e6a35(0x446)](_0x6ea32e=>{const _0x5b9ffb=_0x2e6a35;return _family100[_0x5b9ffb(0x23d)+_0x522605[_0x5b9ffb(0x687)]]['pesan']=mesg;})[_0x2e6a35(0x4c7)](_0x26c6fe=>_0x26c6fe);if(_0x84037a||_0x36ce5e)delete _family100[_0x2e6a35(0x23d)+_0x522605[_0x2e6a35(0x687)]];}if(tebaklagu[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&_0x215764){kuis=!![],jawaban=tebaklagu[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],[{'buttonId':_0x2e6a35(0x6d1),'buttonText':{'displayText':_0x2e6a35(0x414)},'type':0x1}],_0x2e6a35(0x30a),'\x20'+global['botname']+'\x20',_0x522605),delete tebaklagu[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];else _0x58f545(_0x2e6a35(0x40e));}if(kuismath[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0])&&_0x215764){kuis=!![],jawaban=kuismath[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x58f545(_0x2e6a35(0x1c5)+_0x4cf957+_0x2e6a35(0x433)),delete kuismath[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];else _0x58f545(_0x2e6a35(0x40e));}if(tebakgambar[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&_0x215764){kuis=!![],jawaban=tebakgambar[_0x522605['sender']['split']('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],[{'buttonId':'guess\x20picture','buttonText':{'displayText':_0x2e6a35(0x20c)},'type':0x1}],_0x2e6a35(0x608),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebakgambar[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]];else _0x58f545(_0x2e6a35(0x40e));}if(tebakkata['hasOwnProperty'](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&_0x215764){kuis=!![],jawaban=tebakkata[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x56eed5['sendButtonText'](_0x522605[_0x2e6a35(0x687)],[{'buttonId':_0x2e6a35(0x319),'buttonText':{'displayText':_0x2e6a35(0x73a)},'type':0x1}],_0x2e6a35(0x5ad),'\x20'+global['botname']+'\x20',_0x522605),delete tebakkata[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];else _0x58f545('*Wrong\x20Answer!*');}if(caklontong[_0x2e6a35(0x5b1)](_0x522605['sender'][_0x2e6a35(0x3a8)]('@')[0x0])&&_0x215764){kuis=!![],jawaban=caklontong[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]],deskripsi=caklontong_desk[_0x522605['sender']['split']('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x56eed5['sendButtonText'](_0x522605['chat'],[{'buttonId':_0x2e6a35(0x2c6),'buttonText':{'displayText':_0x2e6a35(0x541)},'type':0x1}],_0x2e6a35(0x1c9)+deskripsi+'*\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete caklontong[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]],delete caklontong_desk[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];else _0x58f545('*Wrong\x20Answer!*');}if(tebakkalimat[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0])&&_0x215764){kuis=!![],jawaban=tebakkalimat[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x56eed5[_0x2e6a35(0x35c)](_0x522605['chat'],[{'buttonId':'guess\x20sentence','buttonText':{'displayText':_0x2e6a35(0x3e3)},'type':0x1}],_0x2e6a35(0x62e),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebakkalimat[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]];else _0x58f545(_0x2e6a35(0x40e));}if(tebaklirik[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&_0x215764){kuis=!![],jawaban=tebaklirik[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];if(_0x42e8f6[_0x2e6a35(0x248)]()==jawaban)await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],[{'buttonId':_0x2e6a35(0x5df),'buttonText':{'displayText':_0x2e6a35(0x6df)},'type':0x1}],_0x2e6a35(0x593),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebaklirik[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];else _0x58f545(_0x2e6a35(0x40e));}if(tebaktebakan[_0x2e6a35(0x5b1)](_0x522605['sender'][_0x2e6a35(0x3a8)]('@')[0x0])&&_0x215764){kuis=!![],jawaban=tebaktebakan[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]];if(_0x42e8f6['toLowerCase']()==jawaban)await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],[{'buttonId':'guess\x20riddle','buttonText':{'displayText':_0x2e6a35(0x2df)},'type':0x1}],_0x2e6a35(0x633),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebaktebakan[_0x522605['sender']['split']('@')[0x0]];else _0x58f545(_0x2e6a35(0x40e));}this['game']=this[_0x2e6a35(0x51e)]?this[_0x2e6a35(0x51e)]:{};let _0x26816a=Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x51e)])[_0x2e6a35(0x6e5)](_0x119851=>_0x119851['id']&&_0x119851['game']&&_0x119851['state']&&_0x119851['id']['startsWith'](_0x2e6a35(0x58e))&&[_0x119851[_0x2e6a35(0x51e)][_0x2e6a35(0x145)],_0x119851[_0x2e6a35(0x51e)][_0x2e6a35(0x1ac)]][_0x2e6a35(0x34b)](_0x522605[_0x2e6a35(0x224)])&&_0x119851[_0x2e6a35(0x461)]==_0x2e6a35(0x29f));if(_0x26816a){let _0x2980d9,_0x18bc11=!0x1,_0x544743=!0x1,_0x39d989=!0x1;if(!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)]))return;_0x39d989=!/^[1-9]$/['test'](_0x522605[_0x2e6a35(0x3e9)]);if(_0x522605['sender']!==_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x161)]){if(!_0x39d989)return!0x0;}if(!_0x39d989&&0x1>(_0x2980d9=_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x59f)](_0x522605[_0x2e6a35(0x224)]===_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x1ac)],parseInt(_0x522605[_0x2e6a35(0x3e9)])-0x1)))return _0x58f545({'-3':_0x2e6a35(0x177),'-2':_0x2e6a35(0x514),'-1':_0x2e6a35(0x48b),0x0:'Invalid\x20Position'}[_0x2980d9]),!0x0;if(_0x522605['sender']===_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x568)])_0x18bc11=!![];else{if(_0x26816a[_0x2e6a35(0x51e)]['board']===0x1ff)_0x544743=!![];}let _0x78182f=_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x4b5)]()['map'](_0x439880=>{const _0x448f27=_0x2e6a35;return{'X':'❌','O':'⭕',0x1:_0x448f27(0x535),0x2:_0x448f27(0x395),0x3:_0x448f27(0x5bc),0x4:_0x448f27(0x3c8),0x5:_0x448f27(0x2a9),0x6:_0x448f27(0x390),0x7:_0x448f27(0x688),0x8:'8️⃣',0x9:_0x448f27(0x197)}[_0x439880];});_0x39d989&&(_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x2cf)]=_0x522605[_0x2e6a35(0x224)]===_0x26816a['game'][_0x2e6a35(0x145)],_0x18bc11=!![]);let _0x3c2d47=_0x39d989?_0x26816a['game']['currentTurn']:_0x26816a['game'][_0x2e6a35(0x568)],_0x821eee=_0x2e6a35(0x4de)+_0x26816a['id']+'\x0a\x0a'+_0x78182f[_0x2e6a35(0x195)](0x0,0x3)['join']('')+'\x0a'+_0x78182f[_0x2e6a35(0x195)](0x3,0x6)[_0x2e6a35(0x3da)]('')+'\x0a'+_0x78182f[_0x2e6a35(0x195)](0x6)[_0x2e6a35(0x3da)]('')+'\x0a\x0a'+(_0x18bc11?'@'+_0x3c2d47['split']('@')[0x0]+_0x2e6a35(0x573):_0x544743?'Game\x20Over':_0x2e6a35(0x51d)+['❌','⭕'][0x1*_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x2cf)]]+_0x2e6a35(0x566)+_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x161)][_0x2e6a35(0x3a8)]('@')[0x0]+')')+_0x2e6a35(0x1c7)+_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x145)][_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x52b)+_0x26816a[_0x2e6a35(0x51e)]['playerO']['split']('@')[0x0]+_0x2e6a35(0x63a);if((_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x2cf)]^_0x39d989?_0x26816a['x']:_0x26816a['o'])!==_0x522605[_0x2e6a35(0x687)])_0x26816a[_0x26816a[_0x2e6a35(0x51e)][_0x2e6a35(0x2cf)]^_0x39d989?'x':'o']=_0x522605[_0x2e6a35(0x687)];if(_0x26816a['x']!==_0x26816a['o'])await _0x56eed5[_0x2e6a35(0x5ed)](_0x26816a['x'],_0x821eee,_0x522605,{'mentions':parseMention(_0x821eee)});await _0x56eed5['sendText'](_0x26816a['o'],_0x821eee,_0x522605,{'mentions':parseMention(_0x821eee)}),(_0x544743||_0x18bc11)&&delete this['game'][_0x26816a['id']];}this[_0x2e6a35(0x3f6)]=this['suit']?this[_0x2e6a35(0x3f6)]:{};let _0x2c7b71=Object[_0x2e6a35(0x562)](this['suit'])[_0x2e6a35(0x6e5)](_0x273e48=>_0x273e48['id']&&_0x273e48['status']&&[_0x273e48['p'],_0x273e48['p2']][_0x2e6a35(0x34b)](_0x522605[_0x2e6a35(0x224)]));if(_0x2c7b71){let _0x301ff5='',_0x46eef1=![];if(_0x522605[_0x2e6a35(0x224)]==_0x2c7b71['p2']&&/^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)])&&_0x522605[_0x2e6a35(0x555)]&&_0x2c7b71['status']==_0x2e6a35(0x4eb)){if(/^(reject|no|later|n|nope(k.)?yes)/i[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)]))return _0x56eed5['sendTextWithMentions'](_0x522605[_0x2e6a35(0x687)],'@'+_0x2c7b71['p2'][_0x2e6a35(0x3a8)]`@`[0x0]+_0x2e6a35(0x2a5),_0x522605),delete this['suit'][_0x2c7b71['id']],!0x0;_0x2c7b71[_0x2e6a35(0x67c)]=_0x2e6a35(0x2a2),_0x2c7b71[_0x2e6a35(0x581)]=_0x522605[_0x2e6a35(0x687)],clearTimeout(_0x2c7b71[_0x2e6a35(0x576)]),_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x5de)+_0x2c7b71['p'][_0x2e6a35(0x3a8)]`@`[0x0]+_0x2e6a35(0x4c3)+_0x2c7b71['p2'][_0x2e6a35(0x3a8)]`@`[0x0]+'\x0a\x0aPlease\x20Choose\x20A\x20Suit\x20In\x20The\x20Respective\x20Chat\x22\x0aClick\x20https://wa.me/'+_0x282780['split']`@`[0x0],_0x522605,{'mentions':[_0x2c7b71['p'],_0x2c7b71['p2']]});if(!_0x2c7b71[_0x2e6a35(0x561)])_0x56eed5[_0x2e6a35(0x5ed)](_0x2c7b71['p'],_0x2e6a35(0x1a9),_0x522605);if(!_0x2c7b71['pilih2'])_0x56eed5['sendText'](_0x2c7b71['p2'],_0x2e6a35(0x5ce),_0x522605);_0x2c7b71[_0x2e6a35(0x340)]=setTimeout(()=>{const _0x1092d1=_0x2e6a35;if(!_0x2c7b71[_0x1092d1(0x561)]&&!_0x2c7b71[_0x1092d1(0x20e)])_0x56eed5['sendText'](_0x522605[_0x1092d1(0x687)],_0x1092d1(0x189));else(!_0x2c7b71[_0x1092d1(0x561)]||!_0x2c7b71['pilih2'])&&(_0x301ff5=!_0x2c7b71[_0x1092d1(0x561)]?_0x2c7b71['p2']:_0x2c7b71['p'],_0x56eed5[_0x1092d1(0x4e3)](_0x522605['chat'],'@'+(_0x2c7b71[_0x1092d1(0x561)]?_0x2c7b71['p2']:_0x2c7b71['p'])[_0x1092d1(0x3a8)]`@`[0x0]+_0x1092d1(0x5f9),_0x522605));return delete this[_0x1092d1(0x3f6)][_0x2c7b71['id']],!0x0;},_0x2c7b71[_0x2e6a35(0x4ee)]);}let _0x2621c3=_0x522605['sender']==_0x2c7b71['p'],_0xbb146d=_0x522605[_0x2e6a35(0x224)]==_0x2c7b71['p2'],_0x26d52f=/scissors/i,_0xa9e799=/rock/i,_0x5bf06e=/paper/i,_0x267cae=/^(scissors|rock|paper)/i;if(_0x2621c3&&_0x267cae[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)])&&!_0x2c7b71[_0x2e6a35(0x561)]&&!_0x522605[_0x2e6a35(0x555)]){_0x2c7b71['pilih']=_0x267cae[_0x2e6a35(0x424)](_0x522605[_0x2e6a35(0x3e9)][_0x2e6a35(0x248)]())[0x0],_0x2c7b71['text']=_0x522605[_0x2e6a35(0x3e9)],_0x58f545(_0x2e6a35(0x439)+_0x522605[_0x2e6a35(0x3e9)]+'\x20'+(!_0x2c7b71[_0x2e6a35(0x20e)]?'\x0a\x0aWaiting\x20For\x20The\x20Opponent\x20To\x20Choose':''));if(!_0x2c7b71[_0x2e6a35(0x20e)])_0x56eed5[_0x2e6a35(0x5ed)](_0x2c7b71['p2'],_0x2e6a35(0x436),0x0);}if(_0xbb146d&&_0x267cae[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)])&&!_0x2c7b71[_0x2e6a35(0x20e)]&&!_0x522605[_0x2e6a35(0x555)]){_0x2c7b71['pilih2']=_0x267cae[_0x2e6a35(0x424)](_0x522605[_0x2e6a35(0x3e9)][_0x2e6a35(0x248)]())[0x0],_0x2c7b71[_0x2e6a35(0x4ff)]=_0x522605[_0x2e6a35(0x3e9)],_0x58f545(_0x2e6a35(0x439)+_0x522605[_0x2e6a35(0x3e9)]+'\x20'+(!_0x2c7b71[_0x2e6a35(0x561)]?_0x2e6a35(0x238):''));if(!_0x2c7b71[_0x2e6a35(0x561)])_0x56eed5[_0x2e6a35(0x5ed)](_0x2c7b71['p'],_0x2e6a35(0x436),0x0);}let _0xf54ce8=_0x2c7b71['pilih'],_0x106601=_0x2c7b71[_0x2e6a35(0x20e)];if(_0x2c7b71[_0x2e6a35(0x561)]&&_0x2c7b71[_0x2e6a35(0x20e)]){clearTimeout(_0x2c7b71['waktu_milih']);if(_0xa9e799['test'](_0xf54ce8)&&_0x26d52f[_0x2e6a35(0x19d)](_0x106601))_0x301ff5=_0x2c7b71['p'];else{if(_0xa9e799[_0x2e6a35(0x19d)](_0xf54ce8)&&_0x5bf06e[_0x2e6a35(0x19d)](_0x106601))_0x301ff5=_0x2c7b71['p2'];else{if(_0x26d52f[_0x2e6a35(0x19d)](_0xf54ce8)&&_0x5bf06e['test'](_0x106601))_0x301ff5=_0x2c7b71['p'];else{if(_0x26d52f[_0x2e6a35(0x19d)](_0xf54ce8)&&_0xa9e799[_0x2e6a35(0x19d)](_0x106601))_0x301ff5=_0x2c7b71['p2'];else{if(_0x5bf06e[_0x2e6a35(0x19d)](_0xf54ce8)&&_0xa9e799[_0x2e6a35(0x19d)](_0x106601))_0x301ff5=_0x2c7b71['p'];else{if(_0x5bf06e[_0x2e6a35(0x19d)](_0xf54ce8)&&_0x26d52f[_0x2e6a35(0x19d)](_0x106601))_0x301ff5=_0x2c7b71['p2'];else{if(_0xf54ce8==_0x106601)_0x46eef1=!![];}}}}}}_0x56eed5[_0x2e6a35(0x5ed)](_0x2c7b71[_0x2e6a35(0x581)],(_0x2e6a35(0x3fd)+(_0x46eef1?'\x0aSERIES':'')+_0x2e6a35(0x1c3)+_0x2c7b71['p']['split']`@`[0x0]+'\x20('+_0x2c7b71['text']+')\x20'+(_0x46eef1?'':_0x2c7b71['p']==_0x301ff5?'\x20Win\x20\x0a':_0x2e6a35(0x491))+'\x0a@'+_0x2c7b71['p2']['split']`@`[0x0]+'\x20('+_0x2c7b71['text2']+')\x20'+(_0x46eef1?'':_0x2c7b71['p2']==_0x301ff5?_0x2e6a35(0x240):_0x2e6a35(0x491))+'\x0a')[_0x2e6a35(0x308)](),_0x522605,{'mentions':[_0x2c7b71['p'],_0x2c7b71['p2']]}),delete this[_0x2e6a35(0x3f6)][_0x2c7b71['id']];}}let _0x52764d=[...new Set([..._0x522605['mentionedJid']||[],..._0x522605[_0x2e6a35(0x640)]?[_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x224)]]:[]])];for(let _0x1bf6bc of _0x52764d){let _0x309d3c=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x1bf6bc];if(!_0x309d3c)continue;let _0x495a8f=_0x309d3c[_0x2e6a35(0x513)];if(!_0x495a8f||_0x495a8f<0x0)continue;let _0x3e08d3=_0x309d3c[_0x2e6a35(0x67e)]||'';_0x58f545((_0x2e6a35(0x4c8)+(_0x3e08d3?'dengan\x20alasan\x20'+_0x3e08d3:_0x2e6a35(0x617))+_0x2e6a35(0x3f5)+clockString(new Date()-_0x495a8f)+'\x0a')['trim']());}if(db['data']['users'][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x513)]>-0x1){let _0x304919=global['db'][_0x2e6a35(0x746)]['users'][_0x522605[_0x2e6a35(0x224)]];_0x58f545((_0x2e6a35(0x342)+(_0x304919[_0x2e6a35(0x67e)]?_0x2e6a35(0x332)+_0x304919[_0x2e6a35(0x67e)]:'')+_0x2e6a35(0x2e0)+clockString(new Date()-_0x304919[_0x2e6a35(0x513)])+'\x0a')['trim']()),_0x304919[_0x2e6a35(0x513)]=-0x1,_0x304919[_0x2e6a35(0x67e)]='';}switch(_0x24546f){case _0x2e6a35(0x200):case'inventory':case'profile':{if(q[_0x2e6a35(0x34b)](_0x2e6a35(0x737)))return _0x58f545(examkosong);!isDarah&&addInventoriDarah(_0x522605[_0x2e6a35(0x224)],DarahAwal);!isInventory&&addInventori(_0x522605[_0x2e6a35(0x224)]);!isInventoriBuruan&&addInventoriBuruan(_0x522605['sender']);var _0x56eed5=await getBuffer(_0x1442c9+_0x2e6a35(0x72a));let _0x1c2c83=_0x2e6a35(0x375);_0x1c2c83+=_0x2e6a35(0x38f)+getDarah(_0x522605['sender'])+'\x0a',_0x1c2c83+=_0x2e6a35(0x2c9)+getBesi(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+=_0x2e6a35(0x22c)+getEmas(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+=_0x2e6a35(0x748)+getEmerald(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+='*⏺️Your\x20Limit*\x20:\x20'+getLimit(_0x522605['sender'])+'\x0a',_0x1c2c83+='*🧪Your\x20Potion*\x20:\x20'+getPotion(_0x522605[_0x2e6a35(0x224)])+'\x0a\x0a',_0x1c2c83+='_[\x20🐺HUNT\x20RESULT🐺\x20]_\x0a',_0x1c2c83+=_0x2e6a35(0x662)+getIkan(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+=_0x2e6a35(0x179)+getAyam(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+=_0x2e6a35(0x4f9)+getKelinci(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+='*🐑Sheep*\x20:\x20'+getDomba(_0x522605['sender'])+'\x0a',_0x1c2c83+='*🐄Cow*\x20:\x20'+getSapi(_0x522605[_0x2e6a35(0x224)])+'\x0a',_0x1c2c83+=_0x2e6a35(0x30e)+getGajah(_0x522605[_0x2e6a35(0x224)])+'\x0a\x0a',_0x1c2c83+='_*'+_0x2eb711+'*_',await _0x56eed5['send5ButImg'](_0x36c0bf,''+''+_0x1c2c83,'©\x20'+footer,_0x56eed5,[{'urlButton':{'displayText':_0x2e6a35(0x430),'url':''+myweb}}]);}break;case _0x2e6a35(0x655):{let _0x4fc2db=_0x2e6a35(0x2bc);for(let _0x23acae of _limit){_0x4fc2db+=_0x2e6a35(0x58c)+_0x23acae['id'][_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x35a)+_0x23acae[_0x2e6a35(0x60f)]+'\x0a';}_0x58f545(_0x4fc2db);}break;case _0x2e6a35(0x5eb):{let _0x1410b5=_0x2e6a35(0x336);for(let _0xa896d5 of _buruan){_0x1410b5+=_0x2e6a35(0x444)+_0xa896d5['id']+'\x0a',_0x1410b5+=_0x2e6a35(0x662)+_0xa896d5[_0x2e6a35(0x2eb)]+'\x0a',_0x1410b5+=_0x2e6a35(0x179)+_0xa896d5[_0x2e6a35(0x5cb)]+'\x0a',_0x1410b5+=_0x2e6a35(0x4f9)+_0xa896d5[_0x2e6a35(0x1e5)]+'\x0a',_0x1410b5+=_0x2e6a35(0x2ea)+_0xa896d5[_0x2e6a35(0x43b)]+'\x0a',_0x1410b5+=_0x2e6a35(0x699)+_0xa896d5[_0x2e6a35(0x1e3)]+'\x0a',_0x1410b5+=_0x2e6a35(0x30e)+_0xa896d5[_0x2e6a35(0x218)]+'\x0a\x0a';}_0x58f545(_0x1410b5);}break;case _0x2e6a35(0x19a):case _0x2e6a35(0x1bf):{if(q[_0x2e6a35(0x34b)]('--help'))return _0x58f545(examkosong);!isInventory&&addInventori(_0x522605[_0x2e6a35(0x224)]);if(isCekDarah<0x1)return _0x58f545('You\x27re\x20Tired!,\x20Try\x20To\x20Heal\x20Using\x20Potions');let _0x483686=[0x1,0x2,0x5,0x0,0x3,0x0,0x1,0x1,0x4,0x1,0x5,0x0,0x0],_0x5175d0=[0x0,0x1,0x2,0x3,0x0,0x0,0x0,0x1,0x1,0x0,0x0,0x2],_0x1796a6=[0x0,0x0,0x1,0x0,0x0,0x1,0x0,0x2,0x1,0x0,0x0,0x1];var _0x2b5c32=_0x483686[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x483686['length'])],_0x61c644=_0x5175d0[Math['floor'](Math[_0x2e6a35(0x3d8)]()*_0x5175d0[_0x2e6a35(0x25e)])],_0x3086c3=_0x1796a6[Math['floor'](Math['random']()*_0x1796a6[_0x2e6a35(0x25e)])];setTimeout(()=>{const _0x11f528=_0x2e6a35;let _0x25d048=_0x11f528(0x26e)+_0x2b5c32+_0x11f528(0x4cb)+_0x61c644+_0x11f528(0x234)+_0x3086c3,_0x68bb7a=[{'buttonId':''+(_0x4cf957+_0x24546f),'buttonText':{'displayText':'Mine\x20Again⛏️'},'type':0x1}],_0x29e3ca={'image':{'url':_0x11f528(0x5c7)},'caption':_0x25d048,'footer':_0x2eb711,'buttons':_0x68bb7a,'headerType':0x4};_0x56eed5[_0x11f528(0x371)](_0x36c0bf,_0x29e3ca,{'quoted':_0x522605});},0x1b58),setTimeout(()=>{const _0x46c3be=_0x2e6a35;_0x58f545('@'+_0x522605[_0x46c3be(0x224)][_0x46c3be(0x3a8)]('@')[0x0]+_0x46c3be(0x2c4));},0x5dc),kurangDarah(_0x522605[_0x2e6a35(0x224)],0xa),addBesi(_0x522605['sender'],_0x2b5c32),addEmas(_0x522605['sended'],_0x61c644),addEmerald(_0x522605[_0x2e6a35(0x224)],_0x3086c3);}break;case'beli':case _0x2e6a35(0x2bf):{if(q['includes'](_0x2e6a35(0x737)))return _0x58f545(examkosong);!isInventoriBuruan&&addInventoriBuruan(_0x522605[_0x2e6a35(0x224)]);!isInventoryMonay&&addInventoriMonay(_0x522605[_0x2e6a35(0x224)]);!isInventory&&addInventori(_0x522605[_0x2e6a35(0x224)]);if(!q)return _0x58f545('What\x20Do\x20You\x20Want\x20To\x20Buy?\x0a\x0a1.potion\x0a2.baitfood\x0a3.limit\x0a\x0aExample:\x20'+(_0x4cf957+_0x24546f)+'\x20baitfood');var _0x1cd3a2=_0x44e215[0x1];if(_0x44e215[0x0]===_0x2e6a35(0x5e2)){let _0x7c0933=0x186a0*_0x1cd3a2;if(!_0x44e215[0x1])return _0x58f545('Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x68d));if(isMonay<_0x7c0933)return _0x58f545(_0x2e6a35(0x15f));kurangMonay(_0x522605['sender'],_0x7c0933);var _0x2f2846=_0x1cd3a2*0x1;addPotion(_0x522605[_0x2e6a35(0x224)],_0x2f2846),setTimeout(()=>{const _0x4ba6de=_0x2e6a35;_0x58f545('Transaction\x20Successful\x20✔️\x0a*Your\x20Remaining\x20Money*\x20:\x20'+getMonay(_0x522605['sender'])+_0x4ba6de(0x60c)+getPotion(_0x522605[_0x4ba6de(0x224)]));},0x7d0);}else{if(_0x44e215[0x0]===_0x2e6a35(0x4ad)){let _0x23c240=0x1388*_0x1cd3a2;if(!_0x44e215[0x1])return _0x58f545('Example\x20:\x20'+(_0x4cf957+_0x24546f)+'\x20baitfood\x202\x0a\x201\x20Bait\x20Food\x20=\x202500\x20Money');if(isMonay<_0x23c240)return _0x58f545(_0x2e6a35(0x15f));kurangMonay(_0x522605[_0x2e6a35(0x224)],_0x23c240);var _0x2f2846=_0x1cd3a2*0x1;addUmpan(_0x522605[_0x2e6a35(0x224)],_0x2f2846),setTimeout(()=>{const _0x3c1a16=_0x2e6a35;_0x58f545('Transaction\x20Successful\x20✔️\x0a*Your\x20Remaining\x20Money*\x20:\x20'+getMonay(_0x522605[_0x3c1a16(0x224)])+'\x0a*Your\x20Bait\x20Food*\x20:\x20'+getUmpan(_0x522605[_0x3c1a16(0x224)]));},0x7d0);}else{if(_0x44e215[0x0]===_0x2e6a35(0x60f)){let _0xe7ebb1=0x88b8*_0x1cd3a2;if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x417));if(isMonay<_0xe7ebb1)return _0x58f545(_0x2e6a35(0x15f));kurangMonay(_0x522605['sender'],_0xe7ebb1);var _0x2f2846=_0x1cd3a2*0x1;addLimit(_0x522605[_0x2e6a35(0x224)],_0x2f2846),setTimeout(()=>{const _0x159bbf=_0x2e6a35;_0x58f545(_0x159bbf(0x176)+getMonay(_0x522605[_0x159bbf(0x224)])+'\x0a*Your\x20Limit*\x20:\x20'+getLimit(_0x522605[_0x159bbf(0x224)]));},0x7d0);}else _0x58f545(_0x2e6a35(0x41b));}}}break;case _0x2e6a35(0x26b):case _0x2e6a35(0x54b):{if(!q)return _0x58f545(_0x2e6a35(0x303)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x61f));!isInventoriBuruan&&addInventoriBuruan(_0x522605[_0x2e6a35(0x224)]);!isInventoryMonay&&addInventoriMonay(_0x522605[_0x2e6a35(0x224)]);!isInventory&&addInventori(_0x522605[_0x2e6a35(0x224)]);var _0x1cd3a2=_0x44e215[0x1];if(_0x44e215[0x0]===_0x2e6a35(0x708)){if(isIkan<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x5bd));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x45a));kurangIkan(_0x522605['sender'],_0x1cd3a2);let _0x2df7c5=0x5dc*_0x1cd3a2;addMonay(_0x522605[_0x2e6a35(0x224)],_0x2df7c5),setTimeout(()=>{const _0x1b1af1=_0x2e6a35;_0x58f545(_0x1b1af1(0x176)+getMonay(_0x522605[_0x1b1af1(0x224)])+'\x0a*Your\x20Remaining\x20Fish(es)*\x20:\x20'+getIkan(_0x522605[_0x1b1af1(0x224)]));},0x7d0);}else{if(_0x44e215[0x0]===_0x2e6a35(0x333)){if(isAyam<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x2f3));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x2be));kurangAyam(_0x522605[_0x2e6a35(0x224)],_0x1cd3a2);let _0x448298=0x9c4*_0x1cd3a2;addMonay(_0x522605['sender'],_0x448298),setTimeout(()=>{const _0x979f2b=_0x2e6a35;_0x58f545(_0x979f2b(0x176)+getMonay(_0x522605[_0x979f2b(0x224)])+_0x979f2b(0x6aa)+getAyam(_0x522605[_0x979f2b(0x224)]));},0x7d0);}else{if(_0x44e215[0x0]==='rabbit'){if(isKelinci<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x58d));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x3f1));kurangKelinci(_0x522605['sender'],_0x1cd3a2);let _0x411222=0xbb8*_0x1cd3a2;addMonay(_0x522605[_0x2e6a35(0x224)],_0x411222),setTimeout(()=>{const _0x56ecb1=_0x2e6a35;_0x58f545('Transaction\x20Successful\x20✔️\x0a*Your\x20Remaining\x20Money*\x20:\x20'+getMonay(_0x522605['sender'])+_0x56ecb1(0x6ab)+getKelinci(_0x522605[_0x56ecb1(0x224)]));},0x7d0);}else{if(_0x44e215[0x0]==='sheep'){if(isDomba<_0x1cd3a2)return _0x58f545('You\x20Don\x27t\x20Have\x20Enough\x20Sheep(s)\x20For\x20This\x20Transaction');if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x641));kurangDomba(_0x522605[_0x2e6a35(0x224)],_0x1cd3a2);let _0x63171d=0x1388*_0x1cd3a2;addMonay(_0x522605['sender'],_0x63171d),setTimeout(()=>{const _0xcf10be=_0x2e6a35;_0x58f545(_0xcf10be(0x176)+getMonay(_0x522605[_0xcf10be(0x224)])+_0xcf10be(0x38c)+getDomba(_0x522605[_0xcf10be(0x224)]));},0x7d0);}else{if(_0x44e215[0x0]==='cow'){if(isSapi<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x6ce));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4e1));kurangSapi(_0x522605[_0x2e6a35(0x224)],_0x1cd3a2);let _0x3140a4=0x2710*_0x1cd3a2;addMonay(_0x522605[_0x2e6a35(0x224)],_0x3140a4),setTimeout(()=>{const _0x3440d8=_0x2e6a35;_0x58f545(_0x3440d8(0x176)+getMonay(_0x522605[_0x3440d8(0x224)])+_0x3440d8(0x421)+getSapi(_0x522605['sender']));},0x7d0);}else{if(_0x44e215[0x0]===_0x2e6a35(0x1a5)){if(isGajah<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x4d8));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x3ea));kurangGajah(_0x522605[_0x2e6a35(0x224)],_0x1cd3a2);let _0x4d6599=0x3a98*_0x1cd3a2;addMonay(_0x522605[_0x2e6a35(0x224)],_0x4d6599),setTimeout(()=>{_0x58f545('Transaction\x20Successful\x20✔️\x0a*Your\x20Remaining\x20Money*\x20:\x20'+getMonay(_0x522605['sender'])+'\x0a*Your\x20Remaining\x20Elephant(s)*\x20:\x20'+getGajah(_0x522605['sender']));},0x7d0);}else{if(_0x44e215[0x0]==='iron'){if(isBesi<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x55e));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x1de));kurangBesi(_0x522605[_0x2e6a35(0x224)],_0x1cd3a2);let _0x19de20=0x3e80*_0x1cd3a2;addMonay(_0x522605[_0x2e6a35(0x224)],_0x19de20),setTimeout(()=>{const _0x16ceaa=_0x2e6a35;_0x58f545(_0x16ceaa(0x176)+getMonay(_0x522605['sender'])+_0x16ceaa(0x394)+getBesi(_0x522605['sender']));},0x7d0);}else{if(_0x44e215[0x0]===_0x2e6a35(0x64b)){if(isEmas<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x650));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x6e7));kurangEmas(_0x522605[_0x2e6a35(0x224)],_0x1cd3a2);let _0x1579ed=0xc350*_0x1cd3a2;addMonay(_0x522605['sender'],_0x1579ed),setTimeout(()=>{const _0x10d28e=_0x2e6a35;_0x58f545(_0x10d28e(0x14e)+getMonay(_0x522605[_0x10d28e(0x224)])+_0x10d28e(0x1c0)+getEmas(_0x522605['sender']));},0x7d0);}else{if(_0x44e215[0x0]===_0x2e6a35(0x68f)){if(isEmerald<_0x1cd3a2)return _0x58f545(_0x2e6a35(0x263));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x2aa));kurangEmerald(_0x522605['sender'],_0x1cd3a2);let _0x494cd3=0x186a0*_0x1cd3a2;addMonay(_0x522605['sender'],_0x494cd3),setTimeout(()=>{const _0x44533a=_0x2e6a35;_0x58f545(_0x44533a(0x176)+getMonay(_0x522605[_0x44533a(0x224)])+_0x44533a(0x2ce)+getEmerald(_0x522605[_0x44533a(0x224)]));},0x7d0);}else _0x58f545(_0x2e6a35(0x41b));}}}}}}}}}break;case _0x2e6a35(0x6cd):{if(q[_0x2e6a35(0x34b)](_0x2e6a35(0x737)))return _0x58f545(examkosong);if(!isCekDarah<0x1)return _0x58f545(_0x2e6a35(0x528));if(isCekDarah>0x64)return _0x58f545('Your\x20Blood\x20Is\x20Full');if(isPotion<0x1)return _0x58f545(_0x2e6a35(0x643));addDarah(_0x522605[_0x2e6a35(0x224)],0x64),kurangPotion(_0x522605[_0x2e6a35(0x224)],0x1),_0x58f545(_0x2e6a35(0x6bd));}break;case'hunt':case _0x2e6a35(0x1bb):{if(q[_0x2e6a35(0x34b)](_0x2e6a35(0x737)))return _0x58f545(examkosong);!isDarah&&addInventoriDarah(_0x522605[_0x2e6a35(0x224)],DarahAwal);if(isCekDarah<0x1)return _0x58f545(_0x2e6a35(0x6ec));!isInventoriBuruan&&addInventoriBuruan(_0x522605['sender']);let _0x18c54d=[_0x2e6a35(0x484),_0x2e6a35(0x5cf),_0x2e6a35(0x501),_0x2e6a35(0x711),'Entangled\x20in\x20roots',_0x2e6a35(0x170)],_0x533b7d=[_0x2e6a35(0x1d4),_0x2e6a35(0x378),_0x2e6a35(0x5c6),_0x2e6a35(0x225),_0x2e6a35(0x3ab),'Mountains'];var _0x5cd670=Math[_0x2e6a35(0x70e)](Math[_0x2e6a35(0x3d8)]()*0xa),_0x315b19=Math[_0x2e6a35(0x70e)](Math['random']()*0x8),_0x1f2fb4=Math[_0x2e6a35(0x70e)](Math[_0x2e6a35(0x3d8)]()*0x7),_0x4fd31c=[0x3,0x0,0x4,0x0,0x5,0x4,0x6,0x0,0x1,0x0,0x2,0x3,0x0,0x3,0x0,0x1],_0x1d7259=[0x2,0x0,0x3,0x0,0x4,0x0,0x5,0x0,0x1,0x0,0x2,0x0,0x3,0x0,0x1],_0x38008c=[0x1,0x0,0x4,0x0,0x2,0x0,0x1,0x0,0x2,0x1,0x3,0x0,0x1],_0x41b050=_0x4fd31c[Math['floor'](Math[_0x2e6a35(0x3d8)]()*_0x4fd31c[_0x2e6a35(0x25e)])],_0x232938=_0x1d7259[Math['floor'](Math[_0x2e6a35(0x3d8)]()*_0x1d7259[_0x2e6a35(0x25e)])],_0x2d0ca5=_0x38008c[Math[_0x2e6a35(0x51a)](Math['random']()*_0x38008c['length'])],_0x580cf2=_0x18c54d[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x18c54d[_0x2e6a35(0x25e)])],_0x4a22bf=_0x533b7d[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x533b7d[_0x2e6a35(0x25e)])];if(_0x4a22bf===_0x2e6a35(0x1d4))var _0x463845=_0x2e6a35(0x16a);else{if(_0x4a22bf===_0x2e6a35(0x378))var _0x463845=_0x2e6a35(0x584);else{if(_0x4a22bf==='Tropical\x20forest')var _0x463845=_0x2e6a35(0x716);else{if(_0x4a22bf===_0x2e6a35(0x225))var _0x463845=_0x2e6a35(0x173);else{if(_0x4a22bf===_0x2e6a35(0x3ab))var _0x463845=_0x2e6a35(0x493);else{if(_0x4a22bf===_0x2e6a35(0x532))var _0x463845=_0x2e6a35(0x4b0);}}}}}setTimeout(()=>{const _0x56657f=_0x2e6a35;let _0x1961ee=_0x56657f(0x49a);_0x1961ee+=_0x56657f(0x662)+_0x5cd670+'\x0a',_0x1961ee+=_0x56657f(0x179)+_0x315b19+'\x0a',_0x1961ee+=_0x56657f(0x4f9)+_0x1f2fb4+'\x0a',_0x1961ee+='*🐑Sheep*\x20:\x20'+_0x41b050+'\x0a',_0x1961ee+='*🐄Cow*\x20:\x20'+_0x232938+'\x0a',_0x1961ee+=_0x56657f(0x30e)+_0x2d0ca5+'\x0a\x0a',_0x1961ee+=_0x56657f(0x6dc),_0x1961ee+=_0x56657f(0x2fc)+_0x4a22bf+'\x0a',_0x1961ee+=_0x56657f(0x1ec)+_0x580cf2+_0x56657f(0x6a5),_0x1961ee+=_0x56657f(0x22a)+getDarah(_0x522605[_0x56657f(0x224)])+'\x0a';let _0x4bbf66=[{'buttonId':''+(_0x4cf957+_0x24546f),'buttonText':{'displayText':_0x56657f(0x2f6)},'type':0x1}],_0x6233f7={'image':{'url':_0x463845},'caption':_0x1961ee,'footer':_0x2eb711,'buttons':_0x4bbf66,'headerType':0x4};_0x56eed5[_0x56657f(0x371)](_0x36c0bf,_0x6233f7,{'quoted':_0x522605});},0x1388),setTimeout(()=>{const _0x1d2272=_0x2e6a35;_0x58f545('@'+_0x522605['sender']['split']('@')[0x0]+_0x1d2272(0x4df)+_0x4a22bf);},0x3e8),addIkan(_0x522605[_0x2e6a35(0x224)],_0x5cd670),addAyam(_0x522605[_0x2e6a35(0x224)],_0x315b19),addKelinci(_0x522605[_0x2e6a35(0x224)],_0x1f2fb4),addDomba(_0x522605[_0x2e6a35(0x224)],_0x41b050),addSapi(_0x522605[_0x2e6a35(0x224)],_0x232938),addGajah(_0x522605[_0x2e6a35(0x224)],_0x2d0ca5),kurangDarah(_0x522605[_0x2e6a35(0x224)],0xa);}break;case'afk':{let _0x4770f6=global['db'][_0x2e6a35(0x746)]['users'][_0x522605[_0x2e6a35(0x224)]];_0x4770f6[_0x2e6a35(0x513)]=+new Date(),_0x4770f6[_0x2e6a35(0x67e)]=_0x203e2a,_0x58f545(_0x522605[_0x2e6a35(0x1f5)]+_0x2e6a35(0x66d)+(_0x203e2a?':\x20'+_0x203e2a:''));}break;case _0x2e6a35(0x615):case'ttt':case'tictactoe':{let _0x14c8b4=require(_0x2e6a35(0x5f6));this[_0x2e6a35(0x51e)]=this[_0x2e6a35(0x51e)]?this[_0x2e6a35(0x51e)]:{};if(Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x51e)])[_0x2e6a35(0x6e5)](_0x2958d8=>_0x2958d8['id']['startsWith'](_0x2e6a35(0x58e))&&[_0x2958d8[_0x2e6a35(0x51e)][_0x2e6a35(0x145)],_0x2958d8[_0x2e6a35(0x51e)][_0x2e6a35(0x1ac)]][_0x2e6a35(0x34b)](_0x522605[_0x2e6a35(0x224)])))return _0x46a476(_0x2e6a35(0x48d));let _0xa4ceda=Object['values'](this[_0x2e6a35(0x51e)])['find'](_0x3ddf8c=>_0x3ddf8c['state']===_0x2e6a35(0x6a8)&&(_0x203e2a?_0x3ddf8c['name']===_0x203e2a:!![]));if(_0xa4ceda){_0x58f545('Partner\x20found!'),_0xa4ceda['o']=_0x522605[_0x2e6a35(0x687)],_0xa4ceda[_0x2e6a35(0x51e)][_0x2e6a35(0x1ac)]=_0x522605[_0x2e6a35(0x224)],_0xa4ceda['state']=_0x2e6a35(0x29f);let _0x4dca31=_0xa4ceda[_0x2e6a35(0x51e)][_0x2e6a35(0x4b5)]()['map'](_0xe20b4=>{const _0x342870=_0x2e6a35;return{'X':'❌','O':'⭕',0x1:'1️⃣',0x2:'2️⃣',0x3:'3️⃣',0x4:'4️⃣',0x5:_0x342870(0x2a9),0x6:_0x342870(0x390),0x7:_0x342870(0x688),0x8:'8️⃣',0x9:_0x342870(0x197)}[_0xe20b4];}),_0x3538ec=_0x2e6a35(0x4de)+_0xa4ceda['id']+'\x0a\x0a'+_0x4dca31[_0x2e6a35(0x195)](0x0,0x3)[_0x2e6a35(0x3da)]('')+'\x0a'+_0x4dca31[_0x2e6a35(0x195)](0x3,0x6)[_0x2e6a35(0x3da)]('')+'\x0a'+_0x4dca31['slice'](0x6)[_0x2e6a35(0x3da)]('')+_0x2e6a35(0x3c9)+_0xa4ceda[_0x2e6a35(0x51e)][_0x2e6a35(0x161)]['split']('@')[0x0]+'\x0a\x0aType\x20*surrender*\x20to\x20surrender\x20and\x20admit\x20defeat';if(_0xa4ceda['x']!==_0xa4ceda['o'])await _0x56eed5[_0x2e6a35(0x5ed)](_0xa4ceda['x'],_0x3538ec,_0x522605,{'mentions':parseMention(_0x3538ec)});await _0x56eed5['sendText'](_0xa4ceda['o'],_0x3538ec,_0x522605,{'mentions':parseMention(_0x3538ec)});}else{_0xa4ceda={'id':_0x2e6a35(0x164)+ +new Date(),'x':_0x522605[_0x2e6a35(0x687)],'o':'','game':new _0x14c8b4(_0x522605[_0x2e6a35(0x224)],'o'),'state':_0x2e6a35(0x6a8)};if(_0x203e2a)_0xa4ceda[_0x2e6a35(0x37b)]=_0x203e2a;_0x58f545(_0x2e6a35(0x6a0)+(_0x203e2a?'\x20Type\x20The\x20Command\x20Below\x20'+_0x4cf957+_0x24546f+'\x20'+_0x203e2a:'')),this['game'][_0xa4ceda['id']]=_0xa4ceda;}}break;case _0x2e6a35(0x3b1):case _0x2e6a35(0x66b):{this[_0x2e6a35(0x51e)]=this[_0x2e6a35(0x51e)]?this[_0x2e6a35(0x51e)]:{};try{if(this[_0x2e6a35(0x51e)])delete this[_0x2e6a35(0x51e)],_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'Successfully\x20Deleted\x20The\x20TicTacToe\x20Session',_0x522605);else{if(!this[_0x2e6a35(0x51e)])_0x58f545(_0x2e6a35(0x27d));else _0x58f545('?');}}catch(_0xfe0e46){_0x58f545('Damaged');}}break;case _0x2e6a35(0x372):case _0x2e6a35(0x3f6):{this['suit']=this[_0x2e6a35(0x3f6)]?this[_0x2e6a35(0x3f6)]:{};let _0x35afda=0xa,_0x83c3fb=0xa,_0x356fc7=0xea60;if(Object['values'](this[_0x2e6a35(0x3f6)])[_0x2e6a35(0x6e5)](_0x2b9144=>_0x2b9144['id'][_0x2e6a35(0x2a6)]('suit')&&[_0x2b9144['p'],_0x2b9144['p2']][_0x2e6a35(0x34b)](_0x522605['sender'])))return _0x46a476(_0x2e6a35(0x6fb));if(_0x522605[_0x2e6a35(0x571)][0x0]===_0x522605['sender'])return _0x58f545('Can\x27t\x20Play\x20With\x20Myself\x20!');if(!_0x522605['mentionedJid'][0x0])return _0x58f545(_0x2e6a35(0x311)+_0x4cf957+_0x2e6a35(0x6d5)+owner[0x1],_0x522605[_0x2e6a35(0x687)],{'mentions':[owner[0x1]+'@s.whatsapp.net']});if(Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x3f6)])['find'](_0x19e3ae=>_0x19e3ae['id'][_0x2e6a35(0x2a6)](_0x2e6a35(0x3f6))&&[_0x19e3ae['p'],_0x19e3ae['p2']]['includes'](_0x522605[_0x2e6a35(0x571)][0x0])))_0x58f545('The\x20Person\x20You\x20Are\x20Challenging\x20Is\x20Playing\x20Suit\x20With\x20Someone\x20Else\x20:(');let _0x3a669a='suit_'+new Date()*0x1,_0x2dbe0f=_0x2e6a35(0x689)+_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]`@`[0x0]+'\x20menantang\x20@'+_0x522605[_0x2e6a35(0x571)][0x0][_0x2e6a35(0x3a8)]`@`[0x0]+_0x2e6a35(0x2b4)+_0x522605[_0x2e6a35(0x571)][0x0][_0x2e6a35(0x3a8)]`@`[0x0]+_0x2e6a35(0x413);this[_0x2e6a35(0x3f6)][_0x3a669a]={'chat':await _0x56eed5['sendText'](_0x522605[_0x2e6a35(0x687)],_0x2dbe0f,_0x522605,{'mentions':parseMention(_0x2dbe0f)}),'id':_0x3a669a,'p':_0x522605[_0x2e6a35(0x224)],'p2':_0x522605['mentionedJid'][0x0],'status':_0x2e6a35(0x4eb),'waktu':setTimeout(()=>{const _0x3234d4=_0x2e6a35;if(this[_0x3234d4(0x3f6)][_0x3a669a])_0x56eed5[_0x3234d4(0x5ed)](_0x522605[_0x3234d4(0x687)],_0x3234d4(0x45b),_0x522605);delete this['suit'][_0x3a669a];},0xea60),'poin':_0x35afda,'poin_lose':_0x83c3fb,'timeout':_0x356fc7};}break;case _0x2e6a35(0x687):{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);if(!q)return _0x46a476('Option\x20:\x201.\x20mute\x0a2.\x20unmute\x0a3.\x20archive\x0a4.\x20unarchive\x0a5.\x20read\x0a6.\x20unread\x0a7.\x20delete');if(_0x44e215[0x0]===_0x2e6a35(0x585))_0x56eed5['chatModify']({'mute':_0x2e6a35(0x223)},_0x522605[_0x2e6a35(0x687)],[])[_0x2e6a35(0x446)](_0x457e16=>_0x58f545(jsonformat(_0x457e16)))[_0x2e6a35(0x4c7)](_0x4bb3f6=>_0x58f545(jsonformat(_0x4bb3f6)));else{if(_0x44e215[0x0]===_0x2e6a35(0x250))_0x56eed5[_0x2e6a35(0x728)]({'mute':null},_0x522605[_0x2e6a35(0x687)],[])[_0x2e6a35(0x446)](_0x1b1efc=>_0x58f545(jsonformat(_0x1b1efc)))[_0x2e6a35(0x4c7)](_0x29c760=>_0x58f545(jsonformat(_0x29c760)));else{if(_0x44e215[0x0]==='archive')_0x56eed5[_0x2e6a35(0x728)]({'archive':!![]},_0x522605['chat'],[])[_0x2e6a35(0x446)](_0x3e24d7=>_0x58f545(jsonformat(_0x3e24d7)))[_0x2e6a35(0x4c7)](_0x15332e=>_0x58f545(jsonformat(_0x15332e)));else{if(_0x44e215[0x0]==='unarchive')_0x56eed5[_0x2e6a35(0x728)]({'archive':![]},_0x522605['chat'],[])['then'](_0x384120=>_0x58f545(jsonformat(_0x384120)))['catch'](_0x1bee44=>_0x58f545(jsonformat(_0x1bee44)));else{if(_0x44e215[0x0]==='read')_0x56eed5[_0x2e6a35(0x728)]({'markRead':!![]},_0x522605[_0x2e6a35(0x687)],[])[_0x2e6a35(0x446)](_0x22b28a=>_0x58f545(jsonformat(_0x22b28a)))[_0x2e6a35(0x4c7)](_0x3db878=>_0x58f545(jsonformat(_0x3db878)));else{if(_0x44e215[0x0]==='unread')_0x56eed5[_0x2e6a35(0x728)]({'markRead':![]},_0x522605['chat'],[])['then'](_0x1b307c=>_0x58f545(jsonformat(_0x1b307c)))[_0x2e6a35(0x4c7)](_0xcc2c1b=>_0x58f545(jsonformat(_0xcc2c1b)));else _0x44e215[0x0]===_0x2e6a35(0x42c)&&_0x56eed5[_0x2e6a35(0x728)]({'clear':{'message':{'id':_0x522605[_0x2e6a35(0x640)]['id'],'fromMe':!![]}}},_0x522605[_0x2e6a35(0x687)],[])['then'](_0x517433=>_0x58f545(jsonformat(_0x517433)))[_0x2e6a35(0x4c7)](_0x163ab2=>_0x58f545(jsonformat(_0x163ab2)));}}}}}}break;case _0x2e6a35(0x23d):{_0x2e6a35(0x23d)+_0x522605[_0x2e6a35(0x687)]in _family100&&(_0x58f545(_0x2e6a35(0x5a4)),_0x58f545(![]));let _0x203be6=await fetchJson(_0x2e6a35(0x5d2)),_0x514e92=_0x203be6[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x203be6[_0x2e6a35(0x25e)])],_0x4e3fa7=(_0x2e6a35(0x520)+_0x514e92[_0x2e6a35(0x41c)]+'\x0a\x0aThere\x20Is\x20*'+_0x514e92[_0x2e6a35(0x509)][_0x2e6a35(0x25e)]+_0x2e6a35(0x358)+(_0x514e92[_0x2e6a35(0x509)]['find'](_0xc66f27=>_0xc66f27[_0x2e6a35(0x34b)]('\x20'))?'(Some\x20Answers\x20Have\x20Spaces)':''))[_0x2e6a35(0x308)]();_family100[_0x2e6a35(0x23d)+_0x522605['chat']]={'id':_0x2e6a35(0x23d)+_0x522605[_0x2e6a35(0x687)],'pesan':await _0x56eed5[_0x2e6a35(0x5ed)](_0x522605['chat'],_0x4e3fa7,_0x522605),..._0x514e92,'terjawab':Array[_0x2e6a35(0x365)](_0x514e92['jawaban'],()=>![]),'hadiah':0x6};}break;case'halah':case _0x2e6a35(0x703):case _0x2e6a35(0x355):case _0x2e6a35(0x524):case _0x2e6a35(0x693):if(!_0x522605[_0x2e6a35(0x640)]&&!_0x203e2a)return _0x46a476(_0x2e6a35(0x5be)+(_0x4cf957+_0x24546f));ter=_0x24546f[0x1][_0x2e6a35(0x248)](),tex=_0x522605[_0x2e6a35(0x640)]?_0x522605['quoted'][_0x2e6a35(0x3e9)]?_0x522605['quoted']['text']:q?q:_0x522605[_0x2e6a35(0x3e9)]:q?q:_0x522605[_0x2e6a35(0x3e9)],_0x58f545(tex[_0x2e6a35(0x33b)](/[aiueo]/g,ter)['replace'](/[AIUEO]/g,ter[_0x2e6a35(0x1b2)]()));break;case _0x2e6a35(0x17c):{if(!_0x203e2a)return _0x46a476('Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4c4));if(_0x44e215[0x0]==='song'){if(tebaklagu[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]))return _0x46a476(_0x2e6a35(0x6b4));let _0x15048f=await fetchJson(_0x2e6a35(0x665)),_0x1ab17c=_0x15048f[Math[_0x2e6a35(0x51a)](Math['random']()*_0x15048f[_0x2e6a35(0x25e)])],_0x2a96ca=await _0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'audio':{'url':_0x1ab17c['link_song']},'mimetype':_0x2e6a35(0x42b)},{'quoted':_0x522605});_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x691)+_0x1ab17c[_0x2e6a35(0x249)]+_0x2e6a35(0x4ca),_0x2a96ca)[_0x2e6a35(0x446)](()=>{const _0x212f3f=_0x2e6a35;tebaklagu[_0x522605[_0x212f3f(0x224)][_0x212f3f(0x3a8)]('@')[0x0]]=_0x1ab17c['jawaban']['toLowerCase']();}),await sleep(0xea60),tebaklagu[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&(console[_0x2e6a35(0x34d)](_0x2e6a35(0x347)+_0x1ab17c[_0x2e6a35(0x509)]),_0x56eed5['sendButtonText'](_0x522605[_0x2e6a35(0x687)],[{'buttonId':'guess\x20song','buttonText':{'displayText':_0x2e6a35(0x414)},'type':0x1}],_0x2e6a35(0x639)+tebaklagu[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]]+_0x2e6a35(0x256),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebaklagu[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]);}else{if(_0x44e215[0x0]===_0x2e6a35(0x5ea)){if(tebakgambar[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]))return _0x46a476(_0x2e6a35(0x5a4));let _0x3757f2=await fetchJson(_0x2e6a35(0x420)),_0x574f60=_0x3757f2[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x3757f2['length'])];_0x56eed5['sendImage'](_0x522605['chat'],_0x574f60[_0x2e6a35(0x597)],_0x2e6a35(0x201)+_0x574f60[_0x2e6a35(0x278)]+_0x2e6a35(0x4ca),_0x522605)[_0x2e6a35(0x446)](()=>{const _0x4279ff=_0x2e6a35;tebakgambar[_0x522605[_0x4279ff(0x224)][_0x4279ff(0x3a8)]('@')[0x0]]=_0x574f60['jawaban'][_0x4279ff(0x248)]();}),await sleep(0xea60),tebakgambar['hasOwnProperty'](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&(console[_0x2e6a35(0x34d)](_0x2e6a35(0x347)+_0x574f60[_0x2e6a35(0x509)]),_0x56eed5['sendButtonText'](_0x522605['chat'],[{'buttonId':_0x2e6a35(0x17f),'buttonText':{'displayText':_0x2e6a35(0x20c)},'type':0x1}],'Time\x20Has\x20Run\x20Out\x0aAnswer:\x20\x20'+tebakgambar[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]+_0x2e6a35(0x227),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebakgambar[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]);}else{if(_0x44e215[0x0]===_0x2e6a35(0x53d)){if(tebakkata[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]))return _0x46a476(_0x2e6a35(0x5a4));let _0x5e69f7=await fetchJson('https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheWord.js'),_0x1dea2a=_0x5e69f7[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x5e69f7[_0x2e6a35(0x25e)])];_0x56eed5['sendText'](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x357)+_0x1dea2a[_0x2e6a35(0x41c)]+'\x0aTime\x20:\x2060\x20seconds',_0x522605)[_0x2e6a35(0x446)](()=>{const _0x27734c=_0x2e6a35;tebakkata[_0x522605[_0x27734c(0x224)][_0x27734c(0x3a8)]('@')[0x0]]=_0x1dea2a[_0x27734c(0x509)][_0x27734c(0x248)]();}),await sleep(0xea60),tebakkata[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&(console[_0x2e6a35(0x34d)](_0x2e6a35(0x347)+_0x1dea2a['jawaban']),_0x56eed5['sendButtonText'](_0x522605[_0x2e6a35(0x687)],[{'buttonId':_0x2e6a35(0x319),'buttonText':{'displayText':_0x2e6a35(0x73a)},'type':0x1}],_0x2e6a35(0x2d0)+tebakkata[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]]+_0x2e6a35(0x227),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebakkata[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]);}else{if(_0x44e215[0x0]===_0x2e6a35(0x169)){if(tebakkalimat['hasOwnProperty'](_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]))return _0x46a476('There\x20Are\x20Still\x20Unfinished\x20Sessions!');let _0x1a2f8a=await fetchJson(_0x2e6a35(0x41d)),_0x233fca=_0x1a2f8a[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x1a2f8a[_0x2e6a35(0x25e)])];_0x56eed5['sendText'](_0x522605['chat'],_0x2e6a35(0x357)+_0x233fca['soal']+_0x2e6a35(0x4ca),_0x522605)['then'](()=>{const _0x12213c=_0x2e6a35;tebakkalimat[_0x522605[_0x12213c(0x224)][_0x12213c(0x3a8)]('@')[0x0]]=_0x233fca[_0x12213c(0x509)][_0x12213c(0x248)]();}),await sleep(0xea60),tebakkalimat[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&(console['log'](_0x2e6a35(0x347)+_0x233fca[_0x2e6a35(0x509)]),_0x56eed5[_0x2e6a35(0x35c)](_0x522605['chat'],[{'buttonId':_0x2e6a35(0x431),'buttonText':{'displayText':'Guess\x20The\x20Sentence'},'type':0x1}],'Time\x20Out\x0aAnswer:\x20\x20'+tebakkalimat[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]+'\x0a\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebakkalimat[_0x522605['sender']['split']('@')[0x0]]);}else{if(_0x44e215[0x0]==='lyrics'){if(tebaklirik[_0x2e6a35(0x5b1)](_0x522605['sender']['split']('@')[0x0]))return _0x46a476('There\x20Are\x20Still\x20Unfinished\x20Sessions!');let _0x596d16=await fetchJson(_0x2e6a35(0x557)),_0x121697=_0x596d16[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x596d16[_0x2e6a35(0x25e)])];_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x64d)+_0x121697[_0x2e6a35(0x41c)]+_0x2e6a35(0x2a3),_0x522605)[_0x2e6a35(0x446)](()=>{const _0x38e4a1=_0x2e6a35;tebaklirik[_0x522605[_0x38e4a1(0x224)][_0x38e4a1(0x3a8)]('@')[0x0]]=_0x121697[_0x38e4a1(0x509)][_0x38e4a1(0x248)]();}),await sleep(0xea60),tebaklirik[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0])&&(console[_0x2e6a35(0x34d)](_0x2e6a35(0x347)+_0x121697['jawaban']),_0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],[{'buttonId':'guess\x20lyrics','buttonText':{'displayText':_0x2e6a35(0x6df)},'type':0x1}],_0x2e6a35(0x2d0)+tebaklirik[_0x522605['sender'][_0x2e6a35(0x3a8)]('@')[0x0]]+_0x2e6a35(0x478),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete tebaklirik[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]]);}else{if(_0x44e215[0x0]===_0x2e6a35(0x663)){if(caklontong[_0x2e6a35(0x5b1)](_0x522605['sender']['split']('@')[0x0]))return _0x46a476(_0x2e6a35(0x5a4));let _0x246e99=await fetchJson(_0x2e6a35(0x46f)),_0x3c72ca=_0x246e99[Math[_0x2e6a35(0x51a)](Math['random']()*_0x246e99['length'])];_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'*Answer\x20The\x20Following\x20Questions\x20:*\x0a'+_0x3c72ca[_0x2e6a35(0x41c)]+'*\x0aTime\x20:\x2060\x20seconds',_0x522605)[_0x2e6a35(0x446)](()=>{const _0x36532b=_0x2e6a35;caklontong[_0x522605[_0x36532b(0x224)][_0x36532b(0x3a8)]('@')[0x0]]=_0x3c72ca[_0x36532b(0x509)][_0x36532b(0x248)](),caklontong_desk[_0x522605['sender'][_0x36532b(0x3a8)]('@')[0x0]]=_0x3c72ca['deskripsi'];}),await sleep(0xea60),caklontong['hasOwnProperty'](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&(console[_0x2e6a35(0x34d)](_0x2e6a35(0x347)+_0x3c72ca['jawaban']),_0x56eed5[_0x2e6a35(0x35c)](_0x522605['chat'],[{'buttonId':'guess\x20blank','buttonText':{'displayText':_0x2e6a35(0x541)},'type':0x1}],_0x2e6a35(0x2d0)+caklontong[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]]+_0x2e6a35(0x5f2)+caklontong_desk[_0x522605[_0x2e6a35(0x224)]['split']('@')[0x0]]+'\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),delete caklontong[_0x522605['sender'][_0x2e6a35(0x3a8)]('@')[0x0]],delete caklontong_desk[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]);}}}}}}}break;case _0x2e6a35(0x73c):{if(!_0x3e9927)throw mess[_0x2e6a35(0x35e)];reactionMessage={'react':{'text':_0x44e215[0x0],'key':{'remoteJid':_0x522605[_0x2e6a35(0x687)],'fromMe':!![],'id':_0x22b23c['id']}}},_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],reactionMessage);}break;case _0x2e6a35(0x411):case _0x2e6a35(0x4bb):{if(kuismath[_0x2e6a35(0x5b1)](_0x522605['sender']['split']('@')[0x0]))return _0x46a476('There\x20Are\x20Still\x20Unfinished\x20Sessions!');let {genMath:_0x9bfd3,modes:_0x475b95}=require('./lib/math');if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x6d2)+Object[_0x2e6a35(0x253)](_0x475b95)[_0x2e6a35(0x3da)]('\x20|\x20')+'\x0aFor\x20Examples:\x20'+_0x4cf957+'math\x20medium');let _0x4bd714=await _0x9bfd3(_0x203e2a['toLowerCase']());_0x56eed5[_0x2e6a35(0x5ed)](_0x522605['chat'],_0x2e6a35(0x1ed)+_0x4bd714['soal']['toLowerCase']()+_0x2e6a35(0x2af)+(_0x4bd714[_0x2e6a35(0x576)]/0x3e8)[_0x2e6a35(0x4b9)](0x2)+_0x2e6a35(0x441),_0x522605)[_0x2e6a35(0x446)](()=>{const _0x40e9c9=_0x2e6a35;kuismath[_0x522605[_0x40e9c9(0x224)][_0x40e9c9(0x3a8)]('@')[0x0]]=_0x4bd714[_0x40e9c9(0x509)];}),await sleep(_0x4bd714[_0x2e6a35(0x576)]),kuismath[_0x2e6a35(0x5b1)](_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0])&&(console[_0x2e6a35(0x34d)](_0x2e6a35(0x347)+_0x4bd714['jawaban']),_0x58f545(_0x2e6a35(0x422)+kuismath[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]),delete kuismath[_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]]);}break;case _0x2e6a35(0x50e):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);let _0x5e74e6=_0x5819fe['map'](_0x517060=>_0x517060['id']),_0x36f4c6=_0x522605[_0x2e6a35(0x224)],_0x4290c9=_0x5e74e6[Math[_0x2e6a35(0x51a)](Math['random']()*_0x5e74e6[_0x2e6a35(0x25e)])],_0x588858='👫Your\x20Match\x20Is\x0a\x0a@'+_0x36f4c6[_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x294)+_0x4290c9[_0x2e6a35(0x3a8)]('@')[0x0],_0x5b3942=[_0x36f4c6,_0x4290c9],_0x1234f6=[{'buttonId':'❤️','buttonText':{'displayText':'❤️'},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],_0x1234f6,_0x588858,'\x20'+global['botname']+'\x20',_0x522605,{'mentions':_0x5b3942});}break;case _0x2e6a35(0x6b0):{if(!_0x522605['isGroup'])return _0x46a476(''+mess[_0x2e6a35(0x301)]);let _0x41eee0=_0x5819fe[_0x2e6a35(0x320)](_0x1c17b2=>_0x1c17b2['id']),_0x323e3c=_0x41eee0[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x41eee0[_0x2e6a35(0x25e)])],_0x436731=_0x41eee0[Math['floor'](Math[_0x2e6a35(0x3d8)]()*_0x41eee0[_0x2e6a35(0x25e)])],_0x21a4bc='@'+_0x323e3c[_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x294)+_0x436731['split']('@')[0x0]+_0x2e6a35(0x1e1),_0x4fd3aa=[_0x323e3c,_0x436731],_0x42f00b=[{'buttonId':'❤️','buttonText':{'displayText':'❤️'},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],_0x42f00b,_0x21a4bc,'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605,{'mentions':_0x4fd3aa});}break;case'is':if(!_0x203e2a)return _0x46a476('Use\x20Text,\x20Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x66e));const _0xfcee84=['Yes','No','It\x20Could\x20Be','Thats\x20right'],_0x3ae5b6=_0xfcee84[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0xfcee84[_0x2e6a35(0x25e)])];_0x56eed5['sendMessage'](_0x36c0bf,{'text':_0x2e6a35(0x587)+q+_0x2e6a35(0x325)+_0x3ae5b6},{'quoted':_0x522605});break;case _0x2e6a35(0x5dc):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x34e)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x66e));const _0x457845=['Ask\x20Your\x20Gf',_0x2e6a35(0x2e9),_0x2e6a35(0x1dc)],_0x3037f9=_0x457845[Math[_0x2e6a35(0x51a)](Math['random']()*_0x457845[_0x2e6a35(0x25e)])];_0x56eed5['sendMessage'](_0x36c0bf,{'text':'Question\x20:\x20What\x20'+q+_0x2e6a35(0x325)+_0x3037f9},{'quoted':_0x522605});break;case _0x2e6a35(0x155):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x34e)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x1f4));const _0x575ba1=[_0x2e6a35(0x42e),'Can\x27t',_0x2e6a35(0x1af),_0x2e6a35(0x331)],_0x4117b2=_0x575ba1[Math['floor'](Math['random']()*_0x575ba1['length'])];_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'text':_0x2e6a35(0x28b)+q+'\x0aAnswer\x20:\x20'+_0x4117b2},{'quoted':_0x522605});break;case _0x2e6a35(0x657):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x34e)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x57b));const _0x140a77=[_0x2e6a35(0x20d),_0x2e6a35(0x4b3),'Sorry\x20Bot\x20Can\x27t\x20Answer',_0x2e6a35(0x610),_0x2e6a35(0x21b),_0x2e6a35(0x15c),_0x2e6a35(0x1a2),_0x2e6a35(0x391),_0x2e6a35(0x5d5)],_0x35b0f2=_0x140a77[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x140a77[_0x2e6a35(0x25e)])];_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'text':'Question\x20:\x20'+q+_0x2e6a35(0x1cc)+_0x35b0f2},{'quoted':_0x522605});break;case _0x2e6a35(0x186):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x34e)+(_0x4cf957+_0x24546f)+'\x20My\x20Dp');const _0x3dbfe3=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99',_0x2e6a35(0x31d)],_0x3e5e1f=_0x3dbfe3[Math[_0x2e6a35(0x51a)](Math['random']()*_0x3dbfe3[_0x2e6a35(0x25e)])];_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'text':_0x2e6a35(0x4a2)+q+'\x0aAnswer\x20:\x20*'+_0x3e5e1f+'%*'},{'quoted':_0x522605});break;case'handsomecheck':if(!_0x203e2a)return _0x46a476('Tag\x20Someone,\x20Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x1df));const _0x5819e5=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'],_0x3b9a47=_0x5819e5[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x5819e5[_0x2e6a35(0x25e)])];_0x56eed5['sendMessage'](_0x36c0bf,{'text':'*'+_0x24546f+_0x2e6a35(0x435)+q+_0x2e6a35(0x359)+_0x3b9a47+'%*'},{'quoted':_0x522605});break;case _0x2e6a35(0x3ce):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x69a)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x1df));const _0x2ab2df=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99',_0x2e6a35(0x31d)],_0x339b6a=_0x2ab2df[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x2ab2df[_0x2e6a35(0x25e)])];_0x56eed5['sendMessage'](_0x36c0bf,{'text':'*'+_0x24546f+'*\x0a\x0aNama\x20:\x20'+q+_0x2e6a35(0x359)+_0x339b6a+'%*'},{'quoted':_0x522605});break;case _0x2e6a35(0x1cd):case _0x2e6a35(0x5ff):case _0x2e6a35(0x677):case _0x2e6a35(0x621):case _0x2e6a35(0x613):case _0x2e6a35(0x594):case _0x2e6a35(0x32b):case'prettycheck':case _0x2e6a35(0x3ac):case _0x2e6a35(0x4c2):if(!_0x203e2a)return _0x46a476('Tag\x20Someone,\x20Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x1df));const _0x17f82d=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99',_0x2e6a35(0x31d)],_0x379551=_0x17f82d[Math['floor'](Math[_0x2e6a35(0x3d8)]()*_0x17f82d['length'])];_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'text':'*'+_0x24546f+'*\x0a\x0aName\x20:\x20'+q+_0x2e6a35(0x359)+_0x379551+'%*'},{'quoted':_0x522605});break;break;case'when':if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x34e)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5c5));const _0x2439f6=[_0x2e6a35(0x2cd),_0x2e6a35(0x6db),_0x2e6a35(0x287),_0x2e6a35(0x6bf),_0x2e6a35(0x192),_0x2e6a35(0x1d1),_0x2e6a35(0x533),'40\x20More\x20Days',_0x2e6a35(0x46c),_0x2e6a35(0x36a),_0x2e6a35(0x3d0),'60\x20More\x20Days',_0x2e6a35(0x6ee),'70\x20More\x20Days','75\x20More\x20Days','80\x20More\x20Days','85\x20More\x20Days','90\x20More\x20Days',_0x2e6a35(0x4a1),'5\x20Months\x20More','10\x20Months\x20More','15\x20Months\x20More',_0x2e6a35(0x154),_0x2e6a35(0x505),'30\x20Months\x20More','35\x20Months\x20More','40\x20Months\x20More',_0x2e6a35(0x6e4),_0x2e6a35(0x2da),_0x2e6a35(0x4c6),'60\x20Months\x20More',_0x2e6a35(0x14c),'70\x20Months\x20More',_0x2e6a35(0x2f7),_0x2e6a35(0x5c2),'85\x20Months\x20More',_0x2e6a35(0x36c),'100\x20Months\x20More',_0x2e6a35(0x237),'2\x20More\x20Years',_0x2e6a35(0x4f3),_0x2e6a35(0x276),_0x2e6a35(0x449),_0x2e6a35(0x207),_0x2e6a35(0x39e),_0x2e6a35(0x736)+q],_0x21edf0=_0x2439f6[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x2439f6[_0x2e6a35(0x25e)])];_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'text':_0x2e6a35(0x5f7)+q+_0x2e6a35(0x359)+_0x21edf0+'*'},{'quoted':_0x522605});break;case _0x2e6a35(0x4f2):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x34e)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x41a));qq=q[_0x2e6a35(0x1b2)](),awikwok=qq+'\x20'+qq+'\x20'+qq+_0x2e6a35(0x55f)+qq+'\x20smelly\x20i\x20want\x20to\x20smell\x20the\x20fragrance\x20'+qq+'\x20AAAAAAAAH\x20~\x20Her\x20hair....\x20aaah\x20i\x20want\x20to\x20stroke\x20her\x20hair\x20too\x20~~\x20AAAAAH\x20'+qq+_0x2e6a35(0x20f)+qq+'\x20AAAAAA\x20LUCCUUUUUUUUUUUUU............\x20'+qq+'\x20AAAAAAAAAAAAAAAAAAAAGH\x20❤️\x20❤️\x20❤️what\x20?\x20'+qq+'\x20it\x27s\x20not\x20real\x20?\x20Just\x20HELL\x20you\x20say\x20?\x20no,\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20no\x20!!\x20I\x20DON\x27T\x20CARE\x20ABOUT\x20THE\x20REALITY,\x20I\x20DON\x27T\x20CARE.\x20❤️\x20❤️\x20❤️\x20'+qq+_0x2e6a35(0x60a)+qq+'\x20on\x20the\x20laptop\x20watching\x20me,\x20'+qq+_0x2e6a35(0x4ef)+q+_0x2e6a35(0x335)+qq+_0x2e6a35(0x323)+qq+_0x2e6a35(0x3aa),_0x58f545(awikwok);break;case _0x2e6a35(0x432):if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x63b)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x404));predea=await axios['get'](_0x2e6a35(0x637)+q),_0x58f545(_0x2e6a35(0x1fc)+predea[_0x2e6a35(0x746)][_0x2e6a35(0x37b)]+_0x2e6a35(0x3e2)+predea[_0x2e6a35(0x746)][_0x2e6a35(0x199)]+_0x2e6a35(0x2a8));break;case _0x2e6a35(0x586):case'hilih':case _0x2e6a35(0x355):case _0x2e6a35(0x524):case _0x2e6a35(0x693):if(!_0x522605[_0x2e6a35(0x640)]&&!_0x203e2a)return _0x46a476(_0x2e6a35(0x5be)+(_0x4cf957+_0x24546f));ter=_0x24546f[0x1][_0x2e6a35(0x248)](),tex=_0x522605[_0x2e6a35(0x640)]?_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x3e9)]?_0x522605['quoted'][_0x2e6a35(0x3e9)]:q?q:_0x522605[_0x2e6a35(0x3e9)]:q?q:_0x522605[_0x2e6a35(0x3e9)],_0x58f545(tex[_0x2e6a35(0x33b)](/[aiueo]/g,ter)[_0x2e6a35(0x33b)](/[AIUEO]/g,ter['toUpperCase']()));break;case _0x2e6a35(0x73c):{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);reactionMessage={'react':{'text':_0x44e215[0x0],'key':{'remoteJid':_0x522605[_0x2e6a35(0x687)],'fromMe':!![],'id':_0x22b23c['id']}}},_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],reactionMessage);}break;case'restart':{if(!_0x3e9927)throw mess['owner'];exec(_0x2e6a35(0x4ed)),_0x522605['reply']('*Restarting\x20Garfield\x20bot\x20v8.2....*');}break;case _0x2e6a35(0x3da):{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x3c0));if(!isUrl(_0x44e215[0x0])&&!_0x44e215[0x0][_0x2e6a35(0x34b)](_0x2e6a35(0x631)))return _0x46a476(_0x2e6a35(0x233));_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x34e04b=_0x44e215[0x0][_0x2e6a35(0x3a8)](_0x2e6a35(0x564))[0x1];await _0x56eed5[_0x2e6a35(0x2dd)](_0x34e04b)[_0x2e6a35(0x446)](_0x384fef=>_0x58f545(jsonformat(_0x384fef)))[_0x2e6a35(0x4c7)](_0x5d76a7=>_0x58f545(jsonformat(_0x5d76a7)));}break;case _0x2e6a35(0x3b4):{if(!_0x3e9927)return _0x46a476(''+mess['owner']);await _0x56eed5['groupLeave'](_0x522605[_0x2e6a35(0x687)])[_0x2e6a35(0x446)](_0x3f6f56=>_0x58f545(jsonformat(_0x3f6f56)))['catch'](_0x2aaf75=>_0x58f545(jsonformat(_0x2aaf75)));}break;case _0x2e6a35(0x368):{if(!_0x3e9927)return _0x46a476(''+mess['owner']);if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x6ea));global[_0x2e6a35(0x40c)]=_0x203e2a[_0x2e6a35(0x3a8)]('|')[0x0],global[_0x2e6a35(0x30f)]=_0x203e2a['split']('|')[0x1],_0x58f545('Exif\x20Has\x20Been\x20Successfully\x20Changed\x20to\x0a\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x1e8)+global[_0x2e6a35(0x40c)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x377)+global['author']);}break;case'kick':{if(!_0x522605['isGroup'])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess[_0x2e6a35(0x42f)]);let _0x2ded60=_0x522605[_0x2e6a35(0x571)][0x0]?_0x522605[_0x2e6a35(0x571)][0x0]:_0x522605['quoted']?_0x522605['quoted']['sender']:_0x203e2a[_0x2e6a35(0x33b)](/[^0-9]/g,'')+_0x2e6a35(0x3a7);await _0x56eed5[_0x2e6a35(0x29c)](_0x522605['chat'],[_0x2ded60],_0x2e6a35(0x14f))['then'](_0x4b5bf9=>_0x58f545(jsonformat(_0x4b5bf9)))[_0x2e6a35(0x4c7)](_0x4c4dfb=>_0x58f545(jsonformat(_0x4c4dfb)));}break;case _0x2e6a35(0x709):{if(!_0x522605['isGroup'])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess['admin']);let _0x42b5ff=_0x522605[_0x2e6a35(0x640)]?_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x224)]:_0x203e2a[_0x2e6a35(0x33b)](/[^0-9]/g,'')+_0x2e6a35(0x3a7);await _0x56eed5['groupParticipantsUpdate'](_0x522605['chat'],[_0x42b5ff],_0x2e6a35(0x709))[_0x2e6a35(0x446)](_0x35a974=>_0x58f545(jsonformat(_0x35a974)))[_0x2e6a35(0x4c7)](_0x11a7b1=>_0x58f545(jsonformat(_0x11a7b1)));}break;case'promote':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!_0x1c44c5)return _0x46a476(''+mess['botAdmin']);if(!_0xdbf061)return _0x46a476(''+mess[_0x2e6a35(0x42f)]);let _0xee4a00=_0x522605[_0x2e6a35(0x571)][0x0]?_0x522605[_0x2e6a35(0x571)][0x0]:_0x522605[_0x2e6a35(0x640)]?_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x224)]:_0x203e2a[_0x2e6a35(0x33b)](/[^0-9]/g,'')+_0x2e6a35(0x3a7);await _0x56eed5[_0x2e6a35(0x29c)](_0x522605[_0x2e6a35(0x687)],[_0xee4a00],_0x2e6a35(0x15e))[_0x2e6a35(0x446)](_0x52f6d8=>_0x58f545(jsonformat(_0x52f6d8)))[_0x2e6a35(0x4c7)](_0x53a89e=>_0x58f545(jsonformat(_0x53a89e)));}break;case'demote':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!_0x1c44c5)return _0x46a476(''+mess['botAdmin']);if(!_0xdbf061)return _0x46a476(''+mess[_0x2e6a35(0x42f)]);let _0x40bffc=_0x522605[_0x2e6a35(0x571)][0x0]?_0x522605['mentionedJid'][0x0]:_0x522605[_0x2e6a35(0x640)]?_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x224)]:_0x203e2a['replace'](/[^0-9]/g,'')+_0x2e6a35(0x3a7);await _0x56eed5[_0x2e6a35(0x29c)](_0x522605['chat'],[_0x40bffc],_0x2e6a35(0x24e))[_0x2e6a35(0x446)](_0x3b9e10=>_0x58f545(jsonformat(_0x3b9e10)))[_0x2e6a35(0x4c7)](_0x2dcf60=>_0x58f545(jsonformat(_0x2dcf60)));}break;case _0x2e6a35(0x448):{if(!_0x3e9927)return _0x46a476(''+mess['owner']);let _0x49b276=_0x522605[_0x2e6a35(0x571)][0x0]?_0x522605[_0x2e6a35(0x571)][0x0]:_0x522605[_0x2e6a35(0x640)]?_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x224)]:_0x203e2a[_0x2e6a35(0x33b)](/[^0-9]/g,'')+'@s.whatsapp.net';await _0x56eed5[_0x2e6a35(0x147)](_0x49b276,_0x2e6a35(0x448))[_0x2e6a35(0x446)](_0x2c43f1=>_0x58f545(jsonformat(_0x2c43f1)))[_0x2e6a35(0x4c7)](_0x439c22=>_0x58f545(jsonformat(_0x439c22)));}break;case _0x2e6a35(0x363):{if(!_0x3e9927)return _0x46a476(''+mess['owner']);let _0x5918a4=_0x522605[_0x2e6a35(0x571)][0x0]?_0x522605['mentionedJid'][0x0]:_0x522605['quoted']?_0x522605[_0x2e6a35(0x640)]['sender']:_0x203e2a[_0x2e6a35(0x33b)](/[^0-9]/g,'')+_0x2e6a35(0x3a7);await _0x56eed5[_0x2e6a35(0x147)](_0x5918a4,'unblock')[_0x2e6a35(0x446)](_0x111008=>_0x58f545(jsonformat(_0x111008)))[_0x2e6a35(0x4c7)](_0x4c746d=>_0x58f545(jsonformat(_0x4c746d)));}break;case _0x2e6a35(0x47d):case _0x2e6a35(0x351):case'setsubject':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!_0x1c44c5)return _0x46a476(''+mess['botAdmin']);if(!_0xdbf061)_0x46a476(''+mess[_0x2e6a35(0x42f)]);if(!_0x203e2a)_0x46a476(_0x2e6a35(0x138));await _0x56eed5[_0x2e6a35(0x492)](_0x522605['chat'],_0x203e2a)[_0x2e6a35(0x446)](_0x2d71a=>_0x58f545(mess[_0x2e6a35(0x56a)]))[_0x2e6a35(0x4c7)](_0x17c66e=>_0x58f545(jsonformat(_0x17c66e)));}break;case _0x2e6a35(0x67a):case _0x2e6a35(0x6a7):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess['botAdmin']);if(!_0xdbf061)_0x46a476(''+mess[_0x2e6a35(0x42f)]);if(!_0x203e2a)_0x46a476(_0x2e6a35(0x138));await _0x56eed5[_0x2e6a35(0x304)](_0x522605['chat'],_0x203e2a)[_0x2e6a35(0x446)](_0x31889d=>_0x58f545(mess[_0x2e6a35(0x56a)]))[_0x2e6a35(0x4c7)](_0x50019b=>_0x58f545(jsonformat(_0x50019b)));}break;case'setbotpp':{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);if(!_0x22b23c)return _0x46a476(_0x2e6a35(0x71c)+(_0x4cf957+_0x24546f));if(!/image/[_0x2e6a35(0x19d)](_0x56a534))return _0x46a476('Send/Reply\x20Image\x20With\x20Caption\x20'+(_0x4cf957+_0x24546f));if(/webp/[_0x2e6a35(0x19d)](_0x56a534))return _0x46a476(_0x2e6a35(0x71c)+(_0x4cf957+_0x24546f));let _0x32b294=await _0x56eed5[_0x2e6a35(0x483)](_0x22b23c);await _0x56eed5[_0x2e6a35(0x3cc)](_0x282780,{'url':_0x32b294})['catch'](_0x69877e=>fs[_0x2e6a35(0x6a4)](_0x32b294)),_0x58f545(mess['success']);}break;case _0x2e6a35(0x59e):case _0x2e6a35(0x611):case'setgcpp':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!_0xdbf061)return _0x46a476(''+mess['admin']);if(!_0x22b23c)return _0x46a476(_0x2e6a35(0x71c)+(_0x4cf957+_0x24546f));if(!/image/[_0x2e6a35(0x19d)](_0x56a534))return _0x46a476(_0x2e6a35(0x71c)+(_0x4cf957+_0x24546f));if(/webp/[_0x2e6a35(0x19d)](_0x56a534))return _0x46a476(_0x2e6a35(0x71c)+(_0x4cf957+_0x24546f));let _0x8ec2e1=await _0x56eed5['downloadAndSaveMediaMessage'](_0x22b23c);await _0x56eed5[_0x2e6a35(0x3cc)](_0x522605['chat'],{'url':_0x8ec2e1})['catch'](_0x281274=>fs[_0x2e6a35(0x6a4)](_0x8ec2e1)),_0x58f545(mess[_0x2e6a35(0x56a)]);}break;case _0x2e6a35(0x3cf):{if(!_0x522605['isGroup'])return _0x46a476(''+mess['group']);if(!_0x1c44c5)return _0x46a476(''+mess['botAdmin']);if(!_0xdbf061)return _0x46a476(''+mess['admin']);let _0x2215c8=_0x2e6a35(0x165)+global[_0x2e6a35(0x2c3)]+'\x20Tag\x20All\x20\x20'+global[_0x2e6a35(0x2c3)]+_0x2e6a35(0x545)+(q?q:'no\x20message')+_0x2e6a35(0x512);for(let _0x273a68 of _0x5819fe){_0x2215c8+='\x20'+global[_0x2e6a35(0x34c)]+'\x20@'+_0x273a68['id'][_0x2e6a35(0x3a8)]('@')[0x0]+'\x0a';}_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'text':_0x2215c8,'mentions':_0x5819fe['map'](_0x28caa7=>_0x28caa7['id'])},{'quoted':_0x522605});}break;case _0x2e6a35(0x2ae):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess[_0x2e6a35(0x42f)]);_0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'text':q?q:'','mentions':_0x5819fe[_0x2e6a35(0x320)](_0xffa754=>_0xffa754['id'])},{'quoted':_0x522605});}break;case _0x2e6a35(0x235):case _0x2e6a35(0x450):{if(!_0xfb07a&&global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]<0x1)return _0x58f545(mess[_0x2e6a35(0x3e6)]);db[_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]-=0x1;let {styletext:_0x4556ed}=require(_0x2e6a35(0x57e));if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x314));let _0x4f0104=await _0x4556ed(_0x203e2a),_0x17056d=_0x2e6a35(0x642)+_0x203e2a+'\x0a\x0a';for(let _0x4b485d of _0x4f0104){_0x17056d+='\x20'+global['emoji01']+'\x20*'+_0x4b485d['name']+_0x2e6a35(0x61e)+_0x4b485d['result']+'\x0a\x0a';}_0x58f545(_0x17056d);}break;case _0x2e6a35(0x470):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(_0x522605[_0x2e6a35(0x687)]in vote)_0x46a476(_0x2e6a35(0x459)+_0x4cf957+_0x2e6a35(0x4a4));if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x426)+(_0x4cf957+_0x24546f)+'\x20Handsome\x20Owner*');_0x58f545(_0x2e6a35(0x52a)+_0x4cf957+_0x2e6a35(0x5e3)+_0x4cf957+_0x2e6a35(0x26c)+_0x4cf957+'checkvote*\x20-\x20To\x20Check\x20The\x20Vote\x0a*'+_0x4cf957+_0x2e6a35(0x73d)),vote[_0x522605[_0x2e6a35(0x687)]]=[q,[],[]],await sleep(0x3e8),upvote=vote[_0x522605[_0x2e6a35(0x687)]][0x1],devote=vote[_0x522605[_0x2e6a35(0x687)]][0x2],teks_vote=_0x2e6a35(0x50a)+vote[_0x522605['chat']][0x0]+'\x0a\x0a┌〔\x20UPVOTE\x20❇️\x20〕\x0a│\x20\x0a┃╠\x20Total:\x20'+vote[_0x522605['chat']][0x1][_0x2e6a35(0x25e)]+'\x0a│\x0a│\x20\x0a└────\x0a\x0a┌〔\x20DEVOTE\x20⛔〕\x0a│\x20\x0a┃╠\x20Total:\x20'+vote[_0x522605[_0x2e6a35(0x687)]][0x2]['length']+_0x2e6a35(0x299)+_0x4cf957+_0x2e6a35(0x4a4);let _0x55202e=[{'buttonId':_0x4cf957+_0x2e6a35(0x1f1),'buttonText':{'displayText':'Upvote'},'type':0x1},{'buttonId':_0x4cf957+'devote','buttonText':{'displayText':_0x2e6a35(0x258)},'type':0x1}],_0x4ca3d1={'text':teks_vote,'footer':'©\x20Coded\x20by\x20Tharindu\x20Liyanage','buttons':_0x55202e,'headerType':0x1};_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],_0x4ca3d1);}break;case'upvote':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!(_0x522605[_0x2e6a35(0x687)]in vote))return _0x46a476('_*No\x20Voting\x20In\x20This\x20Group!*_\x0a\x0a*'+_0x4cf957+_0x2e6a35(0x38a));isVote=vote[_0x522605[_0x2e6a35(0x687)]][0x1][_0x2e6a35(0x4a0)](vote[_0x522605['chat']][0x2]),wasVote=isVote['includes'](_0x522605['sender']);if(wasVote)_0x46a476(_0x2e6a35(0x5a9));vote[_0x522605[_0x2e6a35(0x687)]][0x1]['push'](_0x522605['sender']),menvote=vote[_0x522605[_0x2e6a35(0x687)]][0x1][_0x2e6a35(0x4a0)](vote[_0x522605[_0x2e6a35(0x687)]][0x2]),teks_vote=_0x2e6a35(0x50a)+vote[_0x522605[_0x2e6a35(0x687)]][0x0]+_0x2e6a35(0x22d)+vote[_0x522605['chat']][0x1][_0x2e6a35(0x25e)]+'\x0a'+vote[_0x522605[_0x2e6a35(0x687)]][0x1][_0x2e6a35(0x320)]((_0x323951,_0x3aa83b)=>_0x2e6a35(0x5dd)+(_0x3aa83b+0x1)+_0x2e6a35(0x277)+_0x323951['split']`@`[0x0])[_0x2e6a35(0x3da)]('\x0a')+_0x2e6a35(0x2b8)+vote[_0x522605[_0x2e6a35(0x687)]][0x2]['length']+'\x0a'+vote[_0x522605['chat']][0x2][_0x2e6a35(0x320)]((_0x3680a1,_0x819ae1)=>_0x2e6a35(0x5dd)+(_0x819ae1+0x1)+'.\x20@'+_0x3680a1[_0x2e6a35(0x3a8)]`@`[0x0])[_0x2e6a35(0x3da)]('\x0a')+'\x0a│\x20\x0a└────\x0a\x0a*'+_0x4cf957+_0x2e6a35(0x4a4);let _0x28789a=[{'buttonId':_0x4cf957+'upvote','buttonText':{'displayText':'Upvote'},'type':0x1},{'buttonId':_0x4cf957+_0x2e6a35(0x245),'buttonText':{'displayText':_0x2e6a35(0x258)},'type':0x1}],_0x482c06={'text':teks_vote,'footer':'©\x20Coded\x20by\x20Tharindu\x20Liyanage','buttons':_0x28789a,'headerType':0x1,'mentions':menvote};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x482c06);}break;case _0x2e6a35(0x245):{if(!_0x522605['isGroup'])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!(_0x522605[_0x2e6a35(0x687)]in vote))return _0x46a476('_*No\x20Voting\x20In\x20This\x20Group!*_\x0a\x0a*'+_0x4cf957+_0x2e6a35(0x38a));isVote=vote[_0x522605[_0x2e6a35(0x687)]][0x1][_0x2e6a35(0x4a0)](vote[_0x522605[_0x2e6a35(0x687)]][0x2]),wasVote=isVote[_0x2e6a35(0x34b)](_0x522605['sender']);if(wasVote)return _0x46a476(_0x2e6a35(0x5a9));vote[_0x522605[_0x2e6a35(0x687)]][0x2][_0x2e6a35(0x282)](_0x522605['sender']),menvote=vote[_0x522605[_0x2e6a35(0x687)]][0x1]['concat'](vote[_0x522605[_0x2e6a35(0x687)]][0x2]),teks_vote=_0x2e6a35(0x50a)+vote[_0x522605['chat']][0x0]+_0x2e6a35(0x22d)+vote[_0x522605['chat']][0x1]['length']+'\x0a'+vote[_0x522605[_0x2e6a35(0x687)]][0x1]['map']((_0x3be0b1,_0x4cf1f5)=>_0x2e6a35(0x5dd)+(_0x4cf1f5+0x1)+_0x2e6a35(0x277)+_0x3be0b1['split']`@`[0x0])[_0x2e6a35(0x3da)]('\x0a')+_0x2e6a35(0x2b8)+vote[_0x522605['chat']][0x2][_0x2e6a35(0x25e)]+'\x0a'+vote[_0x522605['chat']][0x2]['map']((_0x383cf6,_0x456c81)=>_0x2e6a35(0x5dd)+(_0x456c81+0x1)+_0x2e6a35(0x277)+_0x383cf6[_0x2e6a35(0x3a8)]`@`[0x0])['join']('\x0a')+_0x2e6a35(0x191)+_0x4cf957+'delvote*\x20-\x20To\x20Delete\x20Vote\x20Session';let _0x51d22b=[{'buttonId':_0x4cf957+'upvote','buttonText':{'displayText':_0x2e6a35(0x5b6)},'type':0x1},{'buttonId':_0x4cf957+_0x2e6a35(0x245),'buttonText':{'displayText':'Devote'},'type':0x1}],_0x238111={'text':teks_vote,'footer':_0x2e6a35(0x526),'buttons':_0x51d22b,'headerType':0x1,'mentions':menvote};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x238111);}break;case _0x2e6a35(0x373):if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess['group']);if(!(_0x522605['chat']in vote))return _0x46a476(_0x2e6a35(0x162)+_0x4cf957+_0x2e6a35(0x38a));teks_vote=_0x2e6a35(0x50a)+vote[_0x522605[_0x2e6a35(0x687)]][0x0]+_0x2e6a35(0x22d)+upvote[_0x2e6a35(0x25e)]+'\x0a'+vote[_0x522605[_0x2e6a35(0x687)]][0x1]['map']((_0x26013b,_0x362e95)=>_0x2e6a35(0x5dd)+(_0x362e95+0x1)+_0x2e6a35(0x277)+_0x26013b[_0x2e6a35(0x3a8)]`@`[0x0])[_0x2e6a35(0x3da)]('\x0a')+_0x2e6a35(0x2b8)+devote['length']+'\x0a'+vote[_0x522605[_0x2e6a35(0x687)]][0x2]['map']((_0x2129fc,_0x48919a)=>'┃╠\x20'+(_0x48919a+0x1)+_0x2e6a35(0x277)+_0x2129fc[_0x2e6a35(0x3a8)]`@`[0x0])[_0x2e6a35(0x3da)]('\x0a')+_0x2e6a35(0x191)+_0x4cf957+'delvote*\x20-\x20To\x20Delete\x20Vote\x20Session\x0a\x0a\x0a©'+_0x56eed5[_0x2e6a35(0x26f)]['id']+'\x0a',_0x56eed5['sendTextWithMentions'](_0x522605[_0x2e6a35(0x687)],teks_vote,_0x522605);break;case _0x2e6a35(0x30c):case _0x2e6a35(0x399):case _0x2e6a35(0x39c):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!(_0x522605[_0x2e6a35(0x687)]in vote))return _0x46a476(_0x2e6a35(0x162)+_0x4cf957+_0x2e6a35(0x38a));delete vote[_0x522605['chat']],_0x58f545(_0x2e6a35(0x419));}break;case _0x2e6a35(0x6af):case'fb':case'facebook':case'getfb':{if(!_0x203e2a)throw _0x2e6a35(0x741);if(!isUrl(_0x44e215[0x0])&&!_0x44e215[0x0][_0x2e6a35(0x34b)]('facebook.com'))throw _0x2e6a35(0x653);let _0xbe9394=require('@bochilteam/scraper');_0xbe9394['facebookdlv2'](''+_0x203e2a)['then'](async _0x38638b=>{const _0x14de84=_0x2e6a35;let _0x5b4e66=_0x14de84(0x2d3);_0x5b4e66+='*'+global[_0x14de84(0x2c3)]+_0x14de84(0x649)+_0x38638b['title']+'\x0a',_0x5b4e66+='*'+global[_0x14de84(0x2c3)]+'\x20QUALITY\x20:*\x20'+_0x38638b[_0x14de84(0x1ca)][0x0][_0x14de84(0x3d3)]+'\x0a',_0x5b4e66+='*'+global['emoji02']+_0x14de84(0x22b)+_0x38638b[_0x14de84(0x151)]+'\x0a',_0x5b4e66+='*'+global[_0x14de84(0x2c3)]+_0x14de84(0x4d9)+_0x203e2a+'\x0a\x0a',buf=await getBuffer(_0x38638b[_0x14de84(0x22f)]),_0x56eed5[_0x14de84(0x371)](_0x522605['chat'],{'image':{'url':_0x38638b[_0x14de84(0x22f)]},'jpegThumbnail':buf,'caption':''+_0x5b4e66},{'quoted':_0x522605});for(let _0x219f0e of _0x38638b[_0x14de84(0x1ca)]){_0x56eed5[_0x14de84(0x371)](_0x522605[_0x14de84(0x687)],{'video':{'url':_0x219f0e['url']},'jpegThumbnail':buf,'caption':_0x14de84(0x553)+_0x219f0e[_0x14de84(0x3d3)]},{'quoted':_0x522605});}})[_0x2e6a35(0x4c7)](_0x5c4bd9=>{const _0x1f88ea=_0x2e6a35;_0x522605['reply'](_0x1f88ea(0x6d0));});}break;case'lyrics':{if(!_0x203e2a)return _0x58f545('Use\x20example\x20'+_0x4cf957+_0x2e6a35(0x723));_0x522605[_0x2e6a35(0x4b7)](mess['wait']);const {lyrics:_0x4b7ac8,lyricsv2:_0x3242c1}=require(_0x2e6a35(0x3e5)),_0x42da3a=await _0x3242c1(_0x203e2a)[_0x2e6a35(0x4c7)](async _0x5678ee=>await _0x4b7ac8(_0x203e2a));_0x522605['reply']((_0x2e6a35(0x3b6)+_0x42da3a['title']+'*\x0a\x20*AUTHOR\x20:*\x20'+_0x42da3a[_0x2e6a35(0x30f)]+_0x2e6a35(0x3a5)+_0x42da3a[_0x2e6a35(0x72f)]+'\x0a\x20\x0a')[_0x2e6a35(0x308)]());}break;case _0x2e6a35(0x301):case _0x2e6a35(0x701):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess[_0x2e6a35(0x42f)]);if(_0x44e215[0x0]===_0x2e6a35(0x28f))await _0x56eed5[_0x2e6a35(0x63d)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x6fa))['then'](_0x2dca04=>_0x58f545(_0x2e6a35(0x671)))[_0x2e6a35(0x4c7)](_0x16bf0a=>_0x58f545(jsonformat(_0x16bf0a)));else{if(_0x44e215[0x0]===_0x2e6a35(0x302))await _0x56eed5[_0x2e6a35(0x63d)](_0x522605['chat'],'not_announcement')[_0x2e6a35(0x446)](_0x1ee53b=>_0x58f545('Successful\x20Opening\x20The\x20Group'))[_0x2e6a35(0x4c7)](_0x1cf5bd=>_0x58f545(jsonformat(_0x1cf5bd)));else{let _0x1afae1=[{'buttonId':_0x2e6a35(0x500),'buttonText':{'displayText':'Open'},'type':0x1},{'buttonId':_0x2e6a35(0x454),'buttonText':{'displayText':_0x2e6a35(0x1b3)},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],_0x1afae1,_0x2e6a35(0x602),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}}}break;case'editinfo':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess['admin']);if(_0x44e215[0x0]===_0x2e6a35(0x302))await _0x56eed5[_0x2e6a35(0x63d)](_0x522605['chat'],_0x2e6a35(0x1f9))['then'](_0x4ca587=>_0x58f545(_0x2e6a35(0x3b3)))['catch'](_0x27f9cb=>_0x58f545(jsonformat(_0x27f9cb)));else{if(_0x44e215[0x0]===_0x2e6a35(0x28f))await _0x56eed5[_0x2e6a35(0x63d)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x5c1))[_0x2e6a35(0x446)](_0x42a427=>_0x58f545(_0x2e6a35(0x47e)))[_0x2e6a35(0x4c7)](_0x4e178c=>_0x58f545(jsonformat(_0x4e178c)));else{let _0x54b4f2=[{'buttonId':'editinfo\x20open','buttonText':{'displayText':_0x2e6a35(0x1b5)},'type':0x1},{'buttonId':_0x2e6a35(0x2f4),'buttonText':{'displayText':_0x2e6a35(0x1b3)},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605['chat'],_0x54b4f2,_0x2e6a35(0x68a),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}}}break;case _0x2e6a35(0x38d):case'gitclone':let _0x5026b7=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!_0x44e215[0x0])throw _0x2e6a35(0x3b9);if(!_0x5026b7['test'](_0x44e215[0x0]))throw'link!';let [,_0x21291a,_0x4f86b5]=_0x44e215[0x0][_0x2e6a35(0x2db)](_0x5026b7)||[];_0x4f86b5=_0x4f86b5[_0x2e6a35(0x33b)](/.git$/,'');let _0x539826='https://api.github.com/repos/'+_0x21291a+'/'+_0x4f86b5+_0x2e6a35(0x3fc),_0xe04541=(await fetch(_0x539826,{'method':_0x2e6a35(0x6e3)}))[_0x2e6a35(0x212)]['get'](_0x2e6a35(0x5e6))['match'](/attachment; filename=(.*)/)[0x1];_0x522605['reply'](_0x2e6a35(0x18e)),_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'document':{'url':_0x539826},'fileName':_0xe04541+_0x2e6a35(0x56f),'mimetype':_0x2e6a35(0x406)},{'quoted':_0x522605})[_0x2e6a35(0x4c7)](_0xae951b=>_0x522605[_0x2e6a35(0x4b7)]('*Sorry,\x20the\x20github\x20link\x20you\x20provided\x20is\x20private,\x20and\x20cant\x20be\x20made\x20into\x20a\x20file*'));break;case _0x2e6a35(0x389):{if(!_0x522605['isGroup'])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess[_0x2e6a35(0x42f)]);if(_0x44e215[0x0]==='on'){if(db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]][_0x2e6a35(0x389)])return _0x58f545(_0x2e6a35(0x1cb));db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605['chat']][_0x2e6a35(0x389)]=!![],_0x58f545(_0x2e6a35(0x2e1));}else{if(_0x44e215[0x0]===_0x2e6a35(0x209)){if(!db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605['chat']][_0x2e6a35(0x389)])return _0x58f545(_0x2e6a35(0x281));db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]][_0x2e6a35(0x389)]=![],_0x58f545(_0x2e6a35(0x17b));}else{let _0x4de121=[{'buttonId':_0x2e6a35(0x5c0),'buttonText':{'displayText':'On'},'type':0x1},{'buttonId':_0x2e6a35(0x52e),'buttonText':{'displayText':_0x2e6a35(0x38e)},'type':0x1}];await _0x56eed5['sendButtonText'](_0x522605[_0x2e6a35(0x687)],_0x4de121,_0x2e6a35(0x1ba),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}}}break;case'mute':{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess['admin']);if(_0x44e215[0x0]==='on'){if(db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605['chat']]['mute'])return _0x58f545(_0x2e6a35(0x534));db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]][_0x2e6a35(0x585)]=!![],_0x58f545('\x20'+global['botname']+'\x20'+_0x2e6a35(0x310));}else{if(_0x44e215[0x0]===_0x2e6a35(0x209)){if(!db[_0x2e6a35(0x746)][_0x2e6a35(0x515)][_0x522605[_0x2e6a35(0x687)]][_0x2e6a35(0x585)])return _0x58f545('Previously\x20Inactive');db[_0x2e6a35(0x746)]['chats'][_0x522605[_0x2e6a35(0x687)]]['mute']=![],_0x58f545('\x20'+global[_0x2e6a35(0x295)]+'\x20'+_0x2e6a35(0x632));}else{let _0xdd274a=[{'buttonId':_0x2e6a35(0x418),'buttonText':{'displayText':'On'},'type':0x1},{'buttonId':_0x2e6a35(0x607),'buttonText':{'displayText':'Off'},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605['chat'],_0xdd274a,'Mute\x20Bot','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}}}break;case _0x2e6a35(0x23c):case _0x2e6a35(0x496):case _0x2e6a35(0x725):case _0x2e6a35(0x698):{if(!_0x522605[_0x2e6a35(0x555)])return _0x46a476(''+mess[_0x2e6a35(0x301)]);let _0x402d9c=await _0x56eed5[_0x2e6a35(0x2e4)](_0x522605['chat']);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x564)+_0x402d9c+'\x0a\x0a'+_0x2c154e['subject']+_0x2e6a35(0x442),_0x522605,{'detectLink':!![]});}break;case _0x2e6a35(0x65c):{if(!_0x522605['isGroup'])_0x46a476(''+mess[_0x2e6a35(0x301)]);if(!_0x1c44c5)return _0x46a476(''+mess[_0x2e6a35(0x2c7)]);if(!_0xdbf061)return _0x46a476(''+mess['admin']);if(!_0x203e2a)return _0x46a476(_0x2e6a35(0x3e7));if(_0x44e215[0x0]===_0x2e6a35(0x714))await _0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'disappearingMessagesInChat':WA_DEFAULT_EPHEMERAL})['then'](_0x192e5d=>_0x58f545(jsonformat(_0x192e5d)))[_0x2e6a35(0x4c7)](_0x33c434=>_0x58f545(jsonformat(_0x33c434)));else _0x44e215[0x0]===_0x2e6a35(0x267)&&await _0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'disappearingMessagesInChat':![]})[_0x2e6a35(0x446)](_0x2a65d3=>_0x58f545(jsonformat(_0x2a65d3)))[_0x2e6a35(0x4c7)](_0x536d00=>_0x58f545(jsonformat(_0x536d00)));}break;case'tiktok':case'tiktoknowm':case'tiktokwm':case'tt':case _0x2e6a35(0x614):case _0x2e6a35(0x322):{if(!_0x203e2a)throw _0x2e6a35(0x741);let _0x5f2914=require('@bochilteam/scraper');if(!isUrl(_0x44e215[0x0])&&!_0x44e215[0x0]['includes'](_0x2e6a35(0x2b5)))throw _0x2e6a35(0x653);_0x5f2914[_0x2e6a35(0x1a7)](''+_0x203e2a)[_0x2e6a35(0x446)](async _0x353b31=>{const _0xaa2cd1=_0x2e6a35;var _0x195136=randomNomor(0x64),_0x176b54=randomNomor(0xc8),_0x5e907a=randomNomor(0x12c),_0x24aee0=randomNomor(0x3e8);let _0xef8118=_0xaa2cd1(0x21e)+_0x353b31[_0xaa2cd1(0x30f)][_0xaa2cd1(0x214)]+_0xaa2cd1(0x44b)+_0x353b31[_0xaa2cd1(0x151)]+_0xaa2cd1(0x428)+_0x24aee0+_0xaa2cd1(0x42a)+_0x5e907a+_0xaa2cd1(0x582)+_0x195136+_0xaa2cd1(0x273)+_0x176b54+_0xaa2cd1(0x1ab)+_0x203e2a+'\x0a';buf=await getBuffer(_0x353b31[_0xaa2cd1(0x30f)][_0xaa2cd1(0x60b)]),_0x56eed5['sendMessage'](_0x522605[_0xaa2cd1(0x687)],{'image':{'url':_0x353b31[_0xaa2cd1(0x30f)]['avatar']},'jpegThumbnail':buf,'caption':''+_0xef8118},{'quoted':_0x522605}),_0x56eed5[_0xaa2cd1(0x371)](_0x522605[_0xaa2cd1(0x687)],{'video':{'url':_0x353b31['video'][_0xaa2cd1(0x72b)]},'jpegThumbnail':buf,'mimetype':_0xaa2cd1(0x2ad),'caption':_0xaa2cd1(0x3d6)+_0x203e2a+'*'},{'quoted':_0x522605});})[_0x2e6a35(0x4c7)](_0x38a980=>{_0x522605['reply']('*Failed\x20to\x20download\x20media\x20and\x20send\x20videos*');});}break;case _0x2e6a35(0x42c):case _0x2e6a35(0x5e9):{if(!_0x522605['quoted'])_0x58f545(![]);let {chat:_0x133592,fromMe:_0x4e160a,id:_0x21a216,isBaileys:_0x537bc4}=_0x522605['quoted'];if(!_0x537bc4)return _0x46a476('The\x20Message\x20Was\x20Not\x20Sent\x20By\x20A\x20Bot!');_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'delete':{'remoteJid':_0x522605[_0x2e6a35(0x687)],'fromMe':!![],'id':_0x522605[_0x2e6a35(0x640)]['id'],'participant':_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x224)]}});}break;case _0x2e6a35(0x18d):case _0x2e6a35(0x596):{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);if(!_0x203e2a)return _0x46a476('Where\x20Is\x20The\x20Text?\x0a\x0aExample\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x18a));let _0x41a930=await _0x56eed5[_0x2e6a35(0x463)](),_0x26b1f9=Object[_0x2e6a35(0x3a0)](_0x41a930)[_0x2e6a35(0x195)](0x0)[_0x2e6a35(0x320)](_0x2f39ad=>_0x2f39ad[0x1]),_0x53bc1f=_0x26b1f9[_0x2e6a35(0x320)](_0x1fe726=>_0x1fe726['id']);_0x58f545(_0x2e6a35(0x45f)+_0x53bc1f[_0x2e6a35(0x25e)]+_0x2e6a35(0x4ea)+_0x53bc1f['length']*1.5+'\x20Seconds');for(let _0x2b5a35 of _0x53bc1f){await sleep(0x5dc);let _0x195427=[{'urlButton':{'displayText':'Script\x20🌈','url':''+sc}},{'urlButton':{'displayText':'Follow\x20Us\x20ℹ️\x20','url':''+myweb}},{'quickReplyButton':{'displayText':_0x2e6a35(0x4e0),'id':_0x2e6a35(0x66c)}},{'quickReplyButton':{'displayText':_0x2e6a35(0x680),'id':_0x2e6a35(0x35e)}}],_0x3a0da2=_0x2e6a35(0x726)+global[_0x2e6a35(0x295)]+_0x2e6a35(0x47f)+_0x203e2a;_0x56eed5['send5ButImg'](_0x2b5a35,_0x3a0da2,'\x20'+global[_0x2e6a35(0x295)]+'\x20',global[_0x2e6a35(0x2e6)],_0x195427);}_0x58f545(_0x2e6a35(0x5d0)+_0x53bc1f[_0x2e6a35(0x25e)]+'\x20Group(s)');}break;case'wp':case _0x2e6a35(0x717):case _0x2e6a35(0x4a3):{if(!_0x203e2a)throw _0x2e6a35(0x635);let _0xf20e3d=_0x203e2a;xa[_0x2e6a35(0x31a)](_0xf20e3d)[_0x2e6a35(0x446)](async _0x2f1fbc=>{const _0x572131=_0x2e6a35;let _0x1bb730=await getBuffer(_0x2f1fbc[0x0][_0x572131(0x2e6)]);_0x56eed5['sendMessage'](_0x522605['chat'],{'image':_0x1bb730,'caption':_0x2f1fbc[0x0]['description']+'\x0aTitle:\x20'+_0x2f1fbc[0x0][_0x572131(0x66a)]+_0x572131(0x69e)+_0x2f1fbc[0x0][_0x572131(0x309)]+_0x572131(0x52c)+_0x2f1fbc[0x0]['divote']+_0x572131(0x599)+_0x2f1fbc[0x0][_0x572131(0x2f2)]+'\x0aWaktu:\x20'+_0x2f1fbc[0x0]['waktu']+_0x572131(0x402)+_0x2f1fbc[0x0][_0x572131(0x667)]},{'quoted':_0x522605});})[_0x2e6a35(0x4c7)](_0x2101e1=>_0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x6a2)));}break;case'attp':{if(!_0x203e2a)throw _0x2e6a35(0x2fe)+(_0x4cf957+_0x24546f)+'\x20drips\x20hi*';await _0x56eed5[_0x2e6a35(0x707)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x2e8)+_0x203e2a,_0x2e6a35(0x387),_0x522605,{'asSticker':!![]})['catch'](_0xa25e86=>_0x522605['reply'](_0x2e6a35(0x5ee)));}break;case _0x2e6a35(0x283):{if(!_0x203e2a)throw _0x2e6a35(0x2fe)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x348);await _0x56eed5[_0x2e6a35(0x707)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x6e1)+_0x203e2a,_0x2e6a35(0x387),_0x522605,{'asSticker':!![]})['catch'](_0x475d18=>_0x522605['reply'](_0x2e6a35(0x5ee)));}break;case _0x2e6a35(0x5a0):{if(!_0x203e2a)return _0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x73e));_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'sticker':{'url':_0x2e6a35(0x44f)+_0x203e2a},'quoted':_0x522605})[_0x2e6a35(0x4c7)](_0x199118=>_0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x5ee)));}break;case'ttp2':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x20text';await _0x56eed5[_0x2e6a35(0x707)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x44c)+_0x203e2a,_0x2e6a35(0x49f),_0x522605,{'asSticker':!![]});}break;case'bc':case _0x2e6a35(0x5cd):case _0x2e6a35(0x72e):{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);if(!_0x203e2a)return _0x46a476('Where\x20Is\x20The\x20Text?\x0a\x0aExample\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x404));let _0xfb1929=await _0x172e89[_0x2e6a35(0x515)][_0x2e6a35(0x1a8)]()['map'](_0x31ea82=>_0x31ea82['id']);_0x58f545(_0x2e6a35(0x5fc)+_0xfb1929[_0x2e6a35(0x25e)]+_0x2e6a35(0x345)+_0xfb1929[_0x2e6a35(0x25e)]*1.5+_0x2e6a35(0x5ca));for(let _0x18faf2 of _0xfb1929){await sleep(0x5dc);let _0x21f8f4=[{'urlButton':{'displayText':_0x2e6a35(0x2a4),'url':''+sc}},{'urlButton':{'displayText':_0x2e6a35(0x430),'url':''+myweb}},{'quickReplyButton':{'displayText':_0x2e6a35(0x4e0),'id':_0x2e6a35(0x66c)}},{'quickReplyButton':{'displayText':_0x2e6a35(0x680),'id':_0x2e6a35(0x35e)}}],_0x31cb8c='「\x20\x20'+global[_0x2e6a35(0x295)]+_0x2e6a35(0x472)+_0x203e2a;_0x56eed5[_0x2e6a35(0x5ba)](_0x18faf2,_0x31cb8c,'\x20'+global[_0x2e6a35(0x295)]+'\x20',global['thumb'],_0x21f8f4);}_0x58f545(_0x2e6a35(0x148));}break;case _0x2e6a35(0x14b):case _0x2e6a35(0x46b):{if(!_0x522605[_0x2e6a35(0x640)])return _0x58f545('Reply\x20Message');let _0x28dc7f=await _0x522605['getQuotedObj']();if(!_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x4a7)])return _0x46a476(_0x2e6a35(0x35b));let _0x8d015a='';for(let _0x52f56f of _0x28dc7f[_0x2e6a35(0x5cc)]){let _0x11e9a5=_0x52f56f[_0x2e6a35(0x2f1)],_0x2f9663=_0x52f56f['receiptTimestamp'],_0x48525e=_0x11e9a5?_0x11e9a5:_0x2f9663;_0x8d015a+='\x20'+global[_0x2e6a35(0x34c)]+'\x20@'+_0x52f56f['userJid']['split']('@')[0x0]+'\x0a',_0x8d015a+=_0x2e6a35(0x33c)+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x259)+moment(_0x48525e*0x3e8)[_0x2e6a35(0x3b5)]('DD/MM/YY\x20HH:mm:ss')+'\x20\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x589)+(_0x11e9a5?'Read':_0x2e6a35(0x712))+'\x0a\x0a';}_0x56eed5[_0x2e6a35(0x4e3)](_0x522605[_0x2e6a35(0x687)],_0x8d015a,_0x522605);}break;case'q':case _0x2e6a35(0x640):{if(!_0x522605['quoted'])return _0x58f545(_0x2e6a35(0x16e));let _0x5d4167=await _0x56eed5['serializeM'](await _0x522605[_0x2e6a35(0x6b6)]());if(!_0x5d4167['quoted'])return _0x58f545('The\x20Message\x20You\x20Replied\x20To\x20Does\x20Not\x20Contain\x20A\x20Reply');await _0x5d4167[_0x2e6a35(0x640)][_0x2e6a35(0x27b)](_0x522605[_0x2e6a35(0x687)],!![]);}break;case _0x2e6a35(0x403):case _0x2e6a35(0x2ff):{let _0x629281=await _0x172e89['chats']['all']()['filter'](_0x364455=>_0x364455['id'][_0x2e6a35(0x471)](_0x2e6a35(0x211)))[_0x2e6a35(0x320)](_0x1e09e2=>_0x1e09e2['id']),_0xe4fba5='⬣\x20*PERSONAL\x20CHAT\x20LIST*\x0a\x0aTotal\x20Chat\x20:\x20'+_0x629281[_0x2e6a35(0x25e)]+_0x2e6a35(0x59c);for(let _0x1b1d60 of _0x629281){let _0x4ba6d6=_0x172e89[_0x2e6a35(0x43a)][_0x1b1d60]['array'][0x0][_0x2e6a35(0x1f5)];_0xe4fba5+=_0x2e6a35(0x629)+_0x4ba6d6+_0x2e6a35(0x1a3)+_0x1b1d60[_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x17e)+_0x1b1d60[_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x370);}_0x56eed5[_0x2e6a35(0x4e3)](_0x522605[_0x2e6a35(0x687)],_0xe4fba5,_0x522605);}break;case _0x2e6a35(0x65d):case _0x2e6a35(0x558):{let _0x1e42aa=await _0x172e89[_0x2e6a35(0x515)]['all']()[_0x2e6a35(0x280)](_0x4c6170=>_0x4c6170['id'][_0x2e6a35(0x471)](_0x2e6a35(0x6b7)))[_0x2e6a35(0x320)](_0x48f171=>_0x48f171['id']),_0x23522d='⬣\x20*GROUP\x20CHAT\x20LIST*\x0a\x0aTotal\x20Group\x20:\x20'+_0x1e42aa[_0x2e6a35(0x25e)]+_0x2e6a35(0x157);for(let _0x2cad0a of _0x1e42aa){let _0x410b6b=await _0x56eed5[_0x2e6a35(0x4fa)](_0x2cad0a);_0x23522d+=_0x2e6a35(0x629)+_0x410b6b[_0x2e6a35(0x1d3)]+_0x2e6a35(0x150)+_0x410b6b[_0x2e6a35(0x35e)]['split']('@')[0x0]+'\x0a🐤\x20*ID\x20:*\x20'+_0x410b6b['id']+_0x2e6a35(0x5b0)+moment(_0x410b6b[_0x2e6a35(0x1f6)]*0x3e8)['tz'](_0x2e6a35(0x5a6))[_0x2e6a35(0x3b5)](_0x2e6a35(0x408))+_0x2e6a35(0x2d6)+_0x410b6b[_0x2e6a35(0x3bb)]['length']+'\x0a\x0a────────────────────────\x0a\x0a';}_0x56eed5[_0x2e6a35(0x4e3)](_0x522605[_0x2e6a35(0x687)],_0x23522d,_0x522605);}break;case _0x2e6a35(0x477):case _0x2e6a35(0x2ca):{let _0x1efcb4=_0x44e215&&/\d+\-\d+@g.us/['test'](_0x44e215[0x0])?_0x44e215[0x0]:_0x522605[_0x2e6a35(0x687)],_0x4aaa1a=[...Object['keys'](_0x172e89[_0x2e6a35(0x43f)][_0x1efcb4]),_0x282780];_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x2e6a35(0x700)+_0x4aaa1a[_0x2e6a35(0x320)](_0x2bfc2f=>'\x20@'+_0x2bfc2f[_0x2e6a35(0x33b)](/@.+/,''))[_0x2e6a35(0x3da)]`\n`,_0x522605,{'mentions':_0x4aaa1a});}break;case'sticker':case's':case _0x2e6a35(0x3b7):case _0x2e6a35(0x228):{if(!_0x22b23c)return _0x46a476(_0x2e6a35(0x3c7)+(_0x4cf957+_0x24546f));_0x58f545(mess[_0x2e6a35(0x4eb)]);if(/image/[_0x2e6a35(0x19d)](_0x56a534)){let _0x3a2207=await _0x22b23c['download'](),_0x57a2b4=await _0x56eed5[_0x2e6a35(0x603)](_0x522605[_0x2e6a35(0x687)],_0x3a2207,_0x522605,{'packname':global[_0x2e6a35(0x40c)],'author':global[_0x2e6a35(0x30f)]});await fs[_0x2e6a35(0x6a4)](_0x57a2b4);}else{if(/video/[_0x2e6a35(0x19d)](_0x56a534)){if((_0x22b23c[_0x2e6a35(0x72c)]||_0x22b23c)[_0x2e6a35(0x221)]>0x1e)return _0x58f545('Maximum\x2030\x20Seconds!');let _0x22f573=await _0x22b23c[_0x2e6a35(0x69c)](),_0x4a27d2=await _0x56eed5[_0x2e6a35(0x297)](_0x522605[_0x2e6a35(0x687)],_0x22f573,_0x522605,{'packname':global['packname'],'author':global[_0x2e6a35(0x30f)]});await fs[_0x2e6a35(0x6a4)](_0x4a27d2);}else _0x58f545(_0x2e6a35(0x540)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x61d));}}break;case _0x2e6a35(0x64a):case _0x2e6a35(0x50b):case _0x2e6a35(0x556):{let {TelegraPh:_0x508942}=require(_0x2e6a35(0x661));if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x606)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x550));if(_0x203e2a[_0x2e6a35(0x34b)]('|'))return _0x58f545(_0x2e6a35(0x606)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x550));if(!/image/[_0x2e6a35(0x19d)](_0x56a534))return _0x58f545(_0x2e6a35(0x606)+(_0x4cf957+_0x24546f)+'\x20*Text*');_0x58f545(mess['wait']),mee=await _0x56eed5[_0x2e6a35(0x483)](_0x22b23c),mem=await _0x508942(mee),meme=_0x2e6a35(0x5e5)+_0x203e2a+_0x2e6a35(0x143)+mem,memek=await _0x56eed5['sendImageAsSticker'](_0x522605[_0x2e6a35(0x687)],meme,_0x522605,{'packname':global['packname'],'author':global[_0x2e6a35(0x30f)]}),await fs[_0x2e6a35(0x6a4)](memek);}break;case _0x2e6a35(0x31c):{if(!_0x522605['quoted'][_0x2e6a35(0x3e9)]&&!_0x203e2a)return _0x46a476(_0x2e6a35(0x70c)+(_0x4cf957+_0x24546f));let {eBinary:_0x4f11f5}=require(_0x2e6a35(0x68c)),_0x4f30af=_0x203e2a?_0x203e2a:_0x522605[_0x2e6a35(0x640)]&&_0x522605['quoted'][_0x2e6a35(0x3e9)]?_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x3e9)]:_0x522605[_0x2e6a35(0x3e9)],_0x21cbd7=await _0x4f11f5(_0x4f30af);_0x58f545(_0x21cbd7);}break;case _0x2e6a35(0x67f):{if(!_0x522605['quoted'][_0x2e6a35(0x3e9)]&&!_0x203e2a)return _0x46a476(_0x2e6a35(0x70c)+(_0x4cf957+_0x24546f));let {dBinary:_0x36f91c}=require(_0x2e6a35(0x68c)),_0x1d26a7=_0x203e2a?_0x203e2a:_0x522605[_0x2e6a35(0x640)]&&_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x3e9)]?_0x522605['quoted'][_0x2e6a35(0x3e9)]:_0x522605['text'],_0x5d9bc4=await _0x36f91c(_0x1d26a7);_0x58f545(_0x5d9bc4);}break;case _0x2e6a35(0x1c8):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x20google\x20Sri\x20Lanka');let _0x20e991=require(_0x2e6a35(0x153));_0x20e991({'query':_0x203e2a})['then'](_0x149bba=>{const _0x2280c3=_0x2e6a35;let _0x329706=_0x2280c3(0x5fd)+_0x203e2a+'\x0a\x0a';for(let _0x5e563f of _0x149bba){_0x329706+='\x20*Title*\x20:\x20'+_0x5e563f[_0x2280c3(0x5a1)]+'\x0a',_0x329706+='\x20*Description*\x20:\x20'+_0x5e563f[_0x2280c3(0x241)]+'\x0a',_0x329706+=_0x2280c3(0x54e)+_0x5e563f[_0x2280c3(0x451)]+_0x2280c3(0x370);}_0x58f545(_0x329706);});}case'needaudio':{let {yta:_0x2368c7}=require('./lib/y2mate'),_0x4aed19=_0x22b23c[_0x2e6a35(0x3e9)][_0x2e6a35(0x2db)](new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/,'gi')),_0x124a67=_0x44e215[0x1]?_0x44e215[0x1]:'320kbps',_0x2e9552=await _0x2368c7(_0x4aed19[_0x203e2a-0x1],_0x124a67);if(_0x2e9552['filesize']>=0x186a0)return _0x58f545(_0x2e6a35(0x41f)+util[_0x2e6a35(0x3b5)](_0x2e9552));_0x56eed5[_0x2e6a35(0x32a)](_0x522605[_0x2e6a35(0x687)],_0x2e9552[_0x2e6a35(0x2e6)],_0x2e6a35(0x4dd)+_0x2e9552[_0x2e6a35(0x5a1)]+'*\x0a\x20```File\x20Size```\x20:\x20*'+_0x2e9552[_0x2e6a35(0x23e)]+_0x2e6a35(0x619)+isUrl(_0x203e2a)+'*\x0a```Quality```\x20:\x20*High*\x0a',_0x522605),_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'audio':{'url':_0x2e9552[_0x2e6a35(0x3fe)]},'mimetype':_0x2e6a35(0x42b),'fileName':_0x2e9552['title']+_0x2e6a35(0x3d5)},{'quoted':_0x522605});}break;case _0x2e6a35(0x2e3):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+'\x20*නාකි\x20මයින\x20මැරි*';_0x1cd3a2=await fetchJson(_0x2e6a35(0x647)+_0x203e2a),_0x522605['reply'](''+_0x1cd3a2[_0x2e6a35(0x1ca)]);}break;case'needvideo':{let {ytv:_0x43f9b3}=require(_0x2e6a35(0x67d));if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x201';if(!_0x522605[_0x2e6a35(0x640)])throw _0x2e6a35(0x620);if(!_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x4a7)])throw _0x2e6a35(0x5a2);let _0x4ef45=_0x22b23c[_0x2e6a35(0x3e9)]['match'](new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/,'gi'));if(!_0x4ef45)throw _0x2e6a35(0x43e);let _0x19bb72=_0x44e215[0x1]?_0x44e215[0x1]:_0x2e6a35(0x5a8),_0x354fdd=await _0x43f9b3(_0x4ef45[_0x203e2a-0x1],_0x19bb72);if(_0x354fdd[_0x2e6a35(0x34f)]>=0x186a0)return _0x58f545(_0x2e6a35(0x41f)+util[_0x2e6a35(0x3b5)](_0x354fdd));_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'video':{'url':_0x354fdd['dl_link']},'mimetype':_0x2e6a35(0x2ad),'fileName':_0x354fdd['title']+'.mp4','caption':_0x2e6a35(0x4dd)+_0x354fdd['title']+_0x2e6a35(0x360)+_0x354fdd[_0x2e6a35(0x23e)]+'*\x0a```URL```\x20:\x20*'+isUrl(_0x203e2a)+_0x2e6a35(0x499)},{'quoted':_0x522605});}break;case _0x2e6a35(0x185):case _0x2e6a35(0x5d4):case _0x2e6a35(0x6ca):{if(!_0x203e2a)return _0x522605['reply']('Use'+(_0x4cf957+_0x24546f)+'\x20vpn');let _0x3a3863=require(_0x2e6a35(0x198));_0x3a3863['rexdl'](''+_0x203e2a)[_0x2e6a35(0x446)](async _0x8884ad=>{const _0x1fb73b=_0x2e6a35;let _0x2c48c3=[];for(let _0x4c92be of _0x8884ad){const _0x599745={'title':''+_0x4c92be[_0x1fb73b(0x66a)],'rows':[{'title':''+_0x4c92be[_0x1fb73b(0x66a)],'rowId':_0x4cf957+_0x1fb73b(0x37d)+_0x4c92be['link'],'description':_0x1fb73b(0x2c5)+_0x4c92be[_0x1fb73b(0x1cf)]+'\x0aPUBLISH:\x20'+_0x4c92be[_0x1fb73b(0x609)]+_0x1fb73b(0x476)+_0x4c92be[_0x1fb73b(0x278)]}]};_0x2c48c3['push'](_0x599745);}const _0x33cf24=_0x56eed5[_0x1fb73b(0x371)](_0x522605['chat'],{'text':_0xe3bd99+'\x20'+_0x2eb711+_0x1fb73b(0x72d)+_0x203e2a+_0x1fb73b(0x46d),'footer':_0x1fb73b(0x15b),'title':_0x1fb73b(0x50d),'buttonText':_0x1fb73b(0x4ac),'sections':_0x2c48c3},{'quoted':_0x522605});})['catch'](_0x8f23e5=>{const _0x22bd67=_0x2e6a35;_0x522605[_0x22bd67(0x4b7)]('*'+_0x203e2a+_0x22bd67(0x13a));});}break;case _0x2e6a35(0x30d):{if(!_0x203e2a)return _0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x730)+(_0x4cf957+_0x24546f)+'\x20whatsapp');if(!isUrl(_0x44e215[0x0])&&!_0x44e215[0x0][_0x2e6a35(0x34b)]('rexdl.com'))throw _0x2e6a35(0x653);let _0x352fcf=require(_0x2e6a35(0x521));_0x352fcf[_0x2e6a35(0x146)](''+_0x203e2a)[_0x2e6a35(0x446)](async _0x90ffab=>{const _0x4f1e32=_0x2e6a35;if(_0x90ffab[0x0]['size'][_0x4f1e32(0x3a8)]('MB')[0x0]>=0x96)return _0x522605[_0x4f1e32(0x4b7)](_0x4f1e32(0x346)+util[_0x4f1e32(0x3b5)](_0x90ffab));for(let _0x274633 of _0x90ffab){linkye=_0x4f1e32(0x3f7)+global[_0x4f1e32(0x2c3)]+_0x4f1e32(0x462)+_0x274633[_0x4f1e32(0x5a1)]+'\x0a*\x20'+global['emoji02']+_0x4f1e32(0x3ec)+_0x274633['up']+_0x4f1e32(0x2d8)+global[_0x4f1e32(0x2c3)]+_0x4f1e32(0x706)+_0x274633['vers']+_0x4f1e32(0x2d8)+global[_0x4f1e32(0x2c3)]+_0x4f1e32(0x337)+_0x274633[_0x4f1e32(0x231)]+_0x4f1e32(0x2d8)+global[_0x4f1e32(0x2c3)]+_0x4f1e32(0x16d)+global[_0x4f1e32(0x2c3)]+_0x4f1e32(0x588)+_0x274633[_0x4f1e32(0x37a)]+_0x4f1e32(0x6cc),_0x56eed5['sendMessage'](_0x522605[_0x4f1e32(0x687)],{'image':await getBuffer(_0x274633[_0x4f1e32(0x2e6)]),'jpegThumbnail':await getBuffer(_0x274633[_0x4f1e32(0x2e6)]),'caption':''+linkye},{'quoted':_0x522605}),_0x56eed5[_0x4f1e32(0x371)](_0x522605[_0x4f1e32(0x687)],{'document':await getBuffer(_0x274633[_0x4f1e32(0x451)]),'mimetype':_0x4f1e32(0x63e),'fileName':''+_0x274633['title']},{'quoted':_0x522605});}})[_0x2e6a35(0x4c7)](_0x59fc27=>{_0x522605['reply']('*Failed\x20When\x20Downloading\x20Media\x20and\x20Sending\x20Files*');});}break;case _0x2e6a35(0x19e):{_0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'text':'@'+_0x522605['sender']['split']('@')[0x0],'contextInfo':{'mentionedJid':[_0x522605['sender']]}},{'quoted':_0x522605});}break;case _0x2e6a35(0x271):case _0x2e6a35(0x400):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x20Sri\x20Lanka';_0x1cd3a2=await fetchJson(_0x2e6a35(0x71d)+global[_0x2e6a35(0x669)]+_0x2e6a35(0x21d)+_0x203e2a),_0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x447)+_0x1cd3a2['result']);}break;case _0x2e6a35(0x452):{ngtod=await fetchJson(_0x2e6a35(0x2ac)+global[_0x2e6a35(0x669)]),_0x522605['reply']('*Total\x20corona\x20global*\x0a*Positif*\x20:\x20'+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x6c6)]+_0x2e6a35(0x57d)+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x745)]+_0x2e6a35(0x285)+ngtod[_0x2e6a35(0x1ca)]['dirawat']+'\x0a*Meninggal*\x20:\x20'+ngtod[_0x2e6a35(0x1ca)]['meninggal']);}break;case _0x2e6a35(0x684):{ngtod=await fetchJson(_0x2e6a35(0x48a)+global[_0x2e6a35(0x669)]),_0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x1bc)+ngtod['result'][_0x2e6a35(0x2b9)]+'\x0a*GTV*\x20:\x20'+ngtod['result'][_0x2e6a35(0x3c5)]+_0x2e6a35(0x61c)+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x3d2)]+_0x2e6a35(0x316)+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x49c)]+_0x2e6a35(0x6c5)+ngtod['result'][_0x2e6a35(0x4e5)]+_0x2e6a35(0x466)+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x5f0)]+_0x2e6a35(0x4b8)+ngtod['result'][_0x2e6a35(0x63c)]+'\x0a*SCTV*\x20:\x20'+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x33d)]+_0x2e6a35(0x392)+ngtod['result'][_0x2e6a35(0x6b8)]+_0x2e6a35(0x180)+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x56e)]+_0x2e6a35(0x1ae)+ngtod[_0x2e6a35(0x1ca)]['trans7']+'\x0a*NETTV*\x20:\x20'+ngtod[_0x2e6a35(0x1ca)][_0x2e6a35(0x268)]);}break;case _0x2e6a35(0x254):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x59d);_0x1cd3a2=await fetchJson(_0x2e6a35(0x286)+_0x203e2a+_0x2e6a35(0x30b)+global[_0x2e6a35(0x669)]),_0x522605[_0x2e6a35(0x4b7)]('*Tempat*\x20:\x20'+_0x1cd3a2[_0x2e6a35(0x1ca)]['tempat']+_0x2e6a35(0x140)+_0x1cd3a2[_0x2e6a35(0x1ca)][_0x2e6a35(0x254)]+_0x2e6a35(0x548)+_0x1cd3a2[_0x2e6a35(0x1ca)][_0x2e6a35(0x460)]+_0x2e6a35(0x697)+_0x1cd3a2[_0x2e6a35(0x1ca)]['kelembapan']+'\x0a*Suhu*\x20'+_0x1cd3a2[_0x2e6a35(0x1ca)]['suhu']+_0x2e6a35(0x64e)+_0x1cd3a2[_0x2e6a35(0x1ca)][_0x2e6a35(0x3af)]+_0x2e6a35(0x3eb)+_0x1cd3a2[_0x2e6a35(0x1ca)][_0x2e6a35(0x598)]+_0x2e6a35(0x18b)+_0x1cd3a2[_0x2e6a35(0x1ca)]['longitude']);}break;case _0x2e6a35(0x2ba):{_0x58f545(mess[_0x2e6a35(0x4eb)]);let {pinterest:_0x18c7bc}=require('./lib/scraper');_0x1cd3a2=await _0x18c7bc(_0x203e2a),result=_0x1cd3a2[Math['floor'](Math['random']()*_0x1cd3a2['length'])],_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'image':{'url':result},'caption':_0x2e6a35(0x23b)+result},{'quoted':_0x522605});}break;case _0x2e6a35(0x46e):case _0x2e6a35(0x380):if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x6c3));await _0x58f545(mess[_0x2e6a35(0x4eb)]),xmodules[_0x2e6a35(0x672)](q)[_0x2e6a35(0x446)](async _0x57d0ba=>{const _0x373005=_0x2e6a35;let _0x433df9=_0x373005(0x23f);for(let _0x4a914d of _0x57d0ba){_0x433df9+='*📫\x20Title\x20:*\x20'+_0x4a914d[_0x373005(0x66a)]+'\x0a',_0x433df9+=_0x373005(0x139)+_0x4a914d[_0x373005(0x31e)]+'\x0a',_0x433df9+=_0x373005(0x490)+_0x4a914d[_0x373005(0x727)]+'\x0a',_0x433df9+='*🎥\x20Genre\x20:*\x20'+_0x4a914d[_0x373005(0x3c3)]+'\x0a',_0x433df9+=_0x373005(0x5bb)+_0x4a914d[_0x373005(0x667)]+_0x373005(0x62f);}await _0x58f545(_0x433df9);})['catch'](_0x1c3a29=>{const _0x45d146=_0x2e6a35;_0x58f545(mess[_0x45d146(0x39d)]);});break;case _0x2e6a35(0x1fe):if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x612));await _0x58f545(mess[_0x2e6a35(0x4eb)]),xmodules[_0x2e6a35(0x1ee)](''+_0x203e2a)['then'](async _0x3867ff=>{const _0x2794db=_0x2e6a35;let _0x508f2d=_0x2794db(0x6f9);for(let _0x6b5dae of _0x3867ff){_0x508f2d+=_0x2794db(0x3d1)+_0x6b5dae[_0x2794db(0x66a)]+'\x0a',_0x508f2d+=_0x2794db(0x74a)+_0x6b5dae[_0x2794db(0x352)]+'\x0a',_0x508f2d+=_0x2794db(0x1da)+_0x6b5dae[_0x2794db(0x3c3)]+'\x0a',_0x508f2d+=_0x2794db(0x5bb)+_0x6b5dae[_0x2794db(0x667)]+'\x0a-----------------------------------------------------\x0a';}await sendFileFromUrl(_0x36c0bf,_0x3867ff[0x0]['thumbnail'],_0x508f2d,_0x522605);})['catch'](_0x126e8e=>{_0x58f545(mess['error']);});break;case _0x2e6a35(0x664):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x313));await _0x58f545(mess[_0x2e6a35(0x4eb)]),xmodules[_0x2e6a35(0x27c)](q)['then'](async _0x4944fd=>{const _0xad7581=_0x2e6a35;let _0x47789f=_0xad7581(0x3a1);for(let _0x14e0a5 of _0x4944fd){_0x47789f+=_0xad7581(0x3d1)+_0x14e0a5['judul']+'\x0a',_0x47789f+=_0xad7581(0x5bb)+_0x14e0a5[_0xad7581(0x451)]+_0xad7581(0x554);}let _0x4a46cd=await getBuffer(_0x4944fd[0x0][_0xad7581(0x22f)][_0xad7581(0x33b)]('https://www.anime-planet.com',''));var _0x1876cb=[{'urlButton':{'displayText':_0xad7581(0x6fe),'url':''+myweb}}];await _0x56eed5['send5ButLoc'](_0x36c0bf,_0x47789f,'©\x20'+ownername,_0x4a46cd,_0x1876cb,{'userJid':_0x522605[_0xad7581(0x687)],'quoted':_0x522605});})[_0x2e6a35(0x4c7)](_0x4c8309=>{const _0x1bd80b=_0x2e6a35;_0x58f545(mess[_0x1bd80b(0x39d)]);});}break;case _0x2e6a35(0x62a):case _0x2e6a35(0x1c6):if(!_0x203e2a)return _0x58f545('What\x20Anime\x20Character\x20Are\x20You\x20Looking\x20For??');await _0x58f545(mess[_0x2e6a35(0x4eb)]),xmodules[_0x2e6a35(0x2de)](q)[_0x2e6a35(0x446)](async _0xfff5ee=>{const _0x2e33e3=_0x2e6a35;let _0x469d6d=_0x2e33e3(0x1aa);for(let _0x268ff8 of _0xfff5ee){_0x469d6d+='*📫\x20Character\x20:*\x20'+_0x268ff8['character']+'\x0a',_0x469d6d+=_0x2e33e3(0x5bb)+_0x268ff8[_0x2e33e3(0x451)]+_0x2e33e3(0x554);}let _0x26a9ac=await getBuffer(_0xfff5ee[0x0][_0x2e33e3(0x22f)][_0x2e33e3(0x33b)](_0x2e33e3(0x13b),''));var _0x4ad9bb=[{'urlButton':{'displayText':'Follow\x20Us\x20ℹ️\x20','url':''+myweb}}];await _0x56eed5[_0x2e33e3(0x14a)](_0x36c0bf,_0x469d6d,'©\x20'+ownername,_0x26a9ac,_0x4ad9bb,{'userJid':_0x522605['chat'],'quoted':_0x522605});})[_0x2e6a35(0x4c7)](_0x529b4d=>{const _0x5669db=_0x2e6a35;_0x58f545(mess[_0x5669db(0x39d)]);});break;case _0x2e6a35(0x53c):if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x668));await _0x58f545(mess['wait']),xmodules[_0x2e6a35(0x427)](''+_0x203e2a)[_0x2e6a35(0x446)](async _0x12031a=>{const _0x5dc269=_0x2e6a35;let _0x5545c2=_0x5dc269(0x695);for(let _0x1685a2 of _0x12031a){_0x5545c2+=_0x5dc269(0x3d1)+_0x1685a2[_0x5dc269(0x66a)]+'\x0a',_0x5545c2+=_0x5dc269(0x5bb)+_0x1685a2[_0x5dc269(0x451)]+_0x5dc269(0x554);}let _0x27fb21=await getBuffer(_0x12031a[0x0][_0x5dc269(0x22f)][_0x5dc269(0x33b)](_0x5dc269(0x13b),''));var _0x1df67a=[{'urlButton':{'displayText':'Follow\x20Us\x20ℹ️\x20','url':''+myweb}}];await _0x56eed5[_0x5dc269(0x14a)](_0x36c0bf,_0x5545c2,'©\x20'+ownername,_0x27fb21,_0x1df67a,{'userJid':_0x522605[_0x5dc269(0x687)],'quoted':_0x522605});})[_0x2e6a35(0x4c7)](_0x5c41f3=>{const _0x27d328=_0x2e6a35;_0x58f545(mess[_0x27d328(0x39d)]);});break;case _0x2e6a35(0x1fd):case _0x2e6a35(0x6f3):case _0x2e6a35(0x3a3):case _0x2e6a35(0x565):case _0x2e6a35(0x45d):case _0x2e6a35(0x6be):case _0x2e6a35(0x5c3):case _0x2e6a35(0x5a5):case _0x2e6a35(0x35d):{_0x58f545(mess[_0x2e6a35(0x4eb)]),_0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'image':{'url':api(_0x2e6a35(0x423),_0x2e6a35(0x300)+_0x24546f,{},'apikey')},'caption':_0x2e6a35(0x4ae)+_0x24546f},{'quoted':_0x522605});}break;case _0x2e6a35(0x636):case _0x2e6a35(0x379):{_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x22d062=await fetchJson(_0x2e6a35(0x485)),_0x362f41=_0x22d062[Math['floor'](Math['random']()*_0x22d062['length'])];_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'image':{'url':_0x362f41[_0x2e6a35(0x3dc)]},'caption':_0x2e6a35(0x341)},{'quoted':_0x522605}),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'image':{'url':_0x362f41[_0x2e6a35(0x6e0)]},'caption':_0x2e6a35(0x247)},{'quoted':_0x522605});}break;case _0x2e6a35(0x1f8):case _0x2e6a35(0x644):{let _0x4df252=[{'buttonId':_0x2e6a35(0x3bf),'buttonText':{'displayText':_0x2e6a35(0x2ed)},'type':0x1}],_0xbc741={'image':{'url':_0x2e6a35(0x578)},'caption':'☕\x20Random\x20Coffee','footer':'©\x20Coded\x20by\x20Tharindu\x20Liyanage','buttons':_0x4df252,'headerType':0x4};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0xbc741,{'quoted':_0x522605});}break;case _0x2e6a35(0x34a):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x4d2));let {wallpaper:_0x42ac99}=require(_0x2e6a35(0x57e));_0x1cd3a2=await _0x42ac99(_0x203e2a),result=_0x1cd3a2[Math[_0x2e6a35(0x51a)](Math['random']()*_0x1cd3a2['length'])];let _0x579703=[{'buttonId':_0x2e6a35(0x71f)+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x2ed)},'type':0x1}],_0x201ea0={'image':{'url':result[_0x2e6a35(0x59b)][0x0]},'caption':'\x20'+global[_0x2e6a35(0x34c)]+'\x20Title\x20:\x20'+result['title']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6b9)+result['type']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20Detail\x20:\x20'+result[_0x2e6a35(0x580)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x18c)+(result[_0x2e6a35(0x59b)][0x2]||result['image'][0x1]||result[_0x2e6a35(0x59b)][0x0]),'footer':_0x2e6a35(0x526),'buttons':_0x579703,'headerType':0x4};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x201ea0,{'quoted':_0x522605});}break;case _0x2e6a35(0x25c):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x4d2));let {wikimedia:_0xa8955a}=require(_0x2e6a35(0x57e));_0x1cd3a2=await _0xa8955a(_0x203e2a),result=_0x1cd3a2[Math['floor'](Math[_0x2e6a35(0x3d8)]()*_0x1cd3a2[_0x2e6a35(0x25e)])];let _0x59b00a=[{'buttonId':'wikimedia\x20'+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x4a6)},'type':0x1}],_0x4eb0a3={'image':{'url':result[_0x2e6a35(0x59b)]},'caption':'*'+global[_0x2e6a35(0x2c3)]+_0x2e6a35(0x410)+result[_0x2e6a35(0x5a1)]+'\x0a*'+global['emoji02']+_0x2e6a35(0x6ef)+result['source']+'\x0a*'+global[_0x2e6a35(0x2c3)]+_0x2e6a35(0x6e2)+result['image'],'footer':'\x20'+global['botname']+'\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ɢᴀʀꜰɪᴇʟᴅ\x20ʙᴏᴛ\x20','buttons':_0x59b00a,'headerType':0x4};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x4eb0a3,{'quoted':_0x522605});}break;case _0x2e6a35(0x61a):case _0x2e6a35(0x29b):case _0x2e6a35(0x6f7):case _0x2e6a35(0x646):{let {quotesAnime:_0x164489}=require('./lib/scraper'),_0x570168=await _0x164489();result=_0x570168[Math[_0x2e6a35(0x51a)](Math[_0x2e6a35(0x3d8)]()*_0x570168[_0x2e6a35(0x25e)])];let _0xec517c=[{'buttonId':_0x2e6a35(0x61a),'buttonText':{'displayText':_0x2e6a35(0x43c)},'type':0x1}],_0x10ae97={'text':'~_'+result[_0x2e6a35(0x44a)]+_0x2e6a35(0x3d9)+result[_0x2e6a35(0x1c6)]+'\x27,\x20'+result[_0x2e6a35(0x664)]+_0x2e6a35(0x13f)+result[_0x2e6a35(0x32e)],'footer':_0x2e6a35(0x54d),'buttons':_0xec517c,'headerType':0x2};_0x56eed5['sendMessage'](_0x522605['chat'],_0x10ae97,{'quoted':_0x522605});}break;case _0x2e6a35(0x6d3):case'motivationalquote':case _0x2e6a35(0x292):case _0x2e6a35(0x1a0):case'puisi':{let _0x1bfd42=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x202)+_0x24546f,{},_0x2e6a35(0x547))),_0x56c6ff=[{'buttonId':_0x2e6a35(0x6d3),'buttonText':{'displayText':_0x2e6a35(0x43c)},'type':0x1}],_0x4191ff={'text':_0x1bfd42[_0x2e6a35(0x1ca)][_0x2e6a35(0x6f5)],'footer':_0x2e6a35(0x54d),'buttons':_0x56c6ff,'headerType':0x2};_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],_0x4191ff,{'quoted':_0x522605});}break;case'3dchristmas':case _0x2e6a35(0x28d):case _0x2e6a35(0x626):case _0x2e6a35(0x15d):case'3drainbow':case'3dwaterpipe':case _0x2e6a35(0x3db):case _0x2e6a35(0x206):case _0x2e6a35(0x28e):case'space':case _0x2e6a35(0x4dc):case'fiction':case _0x2e6a35(0x5ae):case _0x2e6a35(0x605):case _0x2e6a35(0x740):case _0x2e6a35(0x4f7):case _0x2e6a35(0x3fa):case _0x2e6a35(0x59a):case _0x2e6a35(0x4cc):case _0x2e6a35(0x6c2):case _0x2e6a35(0x385):case'fireworksparkle':case _0x2e6a35(0x6f1):case'dropwater':case'harrypotter':case _0x2e6a35(0x3be):case _0x2e6a35(0x569):case _0x2e6a35(0x1b9):case _0x2e6a35(0x542):case _0x2e6a35(0x590):case _0x2e6a35(0x559):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x71b)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x3f9));_0x58f545(mess[_0x2e6a35(0x4eb)]),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'image':{'url':api(_0x2e6a35(0x423),_0x2e6a35(0x328)+_0x24546f,{'text':_0x203e2a},_0x2e6a35(0x547))},'caption':_0x2e6a35(0x4b6)+_0x24546f},{'quoted':_0x522605});}break;case _0x2e6a35(0x506):case'nomorhoki':{if(!Number(_0x203e2a))return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x705));let _0x1de2ce=await primbon['nomer_hoki'](Number(_0x203e2a));if(_0x1de2ce[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x1de2ce[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x718)+_0x1de2ce[_0x2e6a35(0x6f5)]['nomer_hp']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4ba)+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x518)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x374)+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e9)][_0x2e6a35(0x350)]+_0x2e6a35(0x6fd)+_0x1de2ce['message'][_0x2e6a35(0x4e9)][_0x2e6a35(0x56c)]+'\x0a-\x20Love\x20:\x20'+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e9)][_0x2e6a35(0x3de)]+'\x0a-\x20Stability\x20:\x20'+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e9)][_0x2e6a35(0x4f1)]+_0x2e6a35(0x52f)+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e9)]['persentase']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Negative\x20Energy\x20:*\x0a-\x20Dispute\x20:\x20'+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x2fa)][_0x2e6a35(0x604)]+_0x2e6a35(0x683)+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x2fa)][_0x2e6a35(0x178)]+_0x2e6a35(0x275)+_0x1de2ce['message']['energi_negatif'][_0x2e6a35(0x3ad)]+'\x0a-\x20Destruction\x20:\x20'+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x2fa)][_0x2e6a35(0x338)]+'\x0a-\x20Percentage\x20:\x20'+_0x1de2ce[_0x2e6a35(0x6f5)][_0x2e6a35(0x2fa)][_0x2e6a35(0x583)],_0x522605);}break;case'artimimpi':case _0x2e6a35(0x25f):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4b4));let _0x1e167b=await primbon['tafsir_mimpi'](_0x203e2a);if(_0x1e167b[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x1e167b[_0x2e6a35(0x6f5)]);_0x56eed5['sendText'](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4cd)+_0x1e167b[_0x2e6a35(0x6f5)][_0x2e6a35(0x330)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x149)+_0x1e167b[_0x2e6a35(0x6f5)][_0x2e6a35(0x3b8)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x50f)+_0x1e167b['message'][_0x2e6a35(0x4bf)],_0x522605);}break;case _0x2e6a35(0x183):case _0x2e6a35(0x166):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x531);let [_0x14ea81,_0x164595,_0x4bb189,_0x57ec92,_0x5026c9,_0x1d081f,_0x5957a9,_0x1309d6]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x5bef20=await primbon[_0x2e6a35(0x1ef)](_0x14ea81,_0x164595,_0x4bb189,_0x57ec92,_0x5026c9,_0x1d081f,_0x5957a9,_0x1309d6);if(_0x5bef20['status']==![])return _0x58f545(_0x5bef20[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4d5)+_0x5bef20[_0x2e6a35(0x6f5)][_0x2e6a35(0x5b3)][_0x2e6a35(0x4e7)]+'\x0a\x20'+global['emoji01']+'\x20*Your\x20Birth\x20:*\x20'+_0x5bef20['message'][_0x2e6a35(0x5b3)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5d8)+_0x5bef20[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)]['nama']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x40f)+_0x5bef20[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Results\x20:*\x20'+_0x5bef20['message'][_0x2e6a35(0x1ca)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x217)+_0x5bef20['message'][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x575):case _0x2e6a35(0x367):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x531);let [_0x2ea52e,_0x333306,_0x4d9877,_0x4f2f3c,_0x597dc8,_0x236c58,_0x1092bd,_0xc952a9]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x48336e=await primbon[_0x2e6a35(0x50c)](_0x2ea52e,_0x333306,_0x4d9877,_0x4f2f3c,_0x597dc8,_0x236c58,_0x1092bd,_0xc952a9);if(_0x48336e['status']==![])return _0x58f545(_0x48336e[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4d5)+_0x48336e['message'][_0x2e6a35(0x5b3)]['nama']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x529)+_0x48336e[_0x2e6a35(0x6f5)][_0x2e6a35(0x5b3)][_0x2e6a35(0x729)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x5d8)+_0x48336e[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x40f)+_0x48336e[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Results\x20:*\x20'+_0x48336e[_0x2e6a35(0x6f5)][_0x2e6a35(0x1ca)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x48336e[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case'get':{if(!_0x203e2a)throw _0x2e6a35(0x25b);let _0x420ada=require(_0x2e6a35(0x3e5)),_0x532fcc=_0x203e2a;_0x420ada['savefrom'](_0x532fcc)[_0x2e6a35(0x446)](async _0x13847b=>{const _0x27475c=_0x2e6a35;for(let _0x4f3cdc of _0x13847b['url']){if(_0x4f3cdc[_0x27475c(0x667)][_0x27475c(0x34b)]('mp4')){let _0x2d9d89=await getBuffer(_0x4f3cdc['url']);_0x56eed5[_0x27475c(0x371)](_0x522605[_0x27475c(0x687)],{'video':_0x2d9d89,'caption':'*quality\x20'+_0x4f3cdc[_0x27475c(0x487)]+'*'},{'quoted':_0x522605});}}})[_0x2e6a35(0x4c7)](_0x4c699f=>_0x522605[_0x2e6a35(0x4b7)](_0x2e6a35(0x3bc)));}break;case'years':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x20X,\x2008,\x2009,\x202005,\x20Y,';let [_0x2ea920,_0x3c5621,_0xd5f8c8,_0x5e1e08,_0x4a9528,_0x309fc2,_0x1e655d,_0x41d450]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x560419=await primbon[_0x2e6a35(0x4bd)](_0x2ea920,_0x3c5621,_0xd5f8c8,_0x5e1e08,_0x4a9528,_0x309fc2,_0x1e655d,_0x41d450);if(_0x560419['status']==![])return _0x58f545(_0x560419[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x69b)+_0x560419['message']['suami'][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4c1)+_0x560419[_0x2e6a35(0x6f5)][_0x2e6a35(0x1ce)][_0x2e6a35(0x729)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x274)+_0x560419[_0x2e6a35(0x6f5)]['istri'][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x670)+_0x560419['message'][_0x2e6a35(0x4e4)][_0x2e6a35(0x729)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x702)+_0x560419['message'][_0x2e6a35(0x1ca)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x560419[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x5f4):case'ramalcinta':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x658);let [_0x47f23b,_0x13754a,_0x2f2782,_0x540223,_0x2087f1,_0x1484da,_0x4af074,_0x48891b]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x25c51f=await primbon[_0x2e6a35(0x6ae)](_0x47f23b,_0x13754a,_0x2f2782,_0x540223,_0x2087f1,_0x1484da,_0x4af074,_0x48891b);if(_0x25c51f[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x25c51f['message']);_0x56eed5['sendText'](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+_0x2e6a35(0x4d5)+_0x25c51f[_0x2e6a35(0x6f5)]['nama_anda'][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x529)+_0x25c51f[_0x2e6a35(0x6f5)][_0x2e6a35(0x5b3)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5d8)+_0x25c51f[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x40f)+_0x25c51f[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)]['tgl_lahir']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x591)+_0x25c51f['message'][_0x2e6a35(0x381)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6f0)+_0x25c51f[_0x2e6a35(0x6f5)][_0x2e6a35(0x560)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Notes\x20:*\x20'+_0x25c51f[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case'artinama':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x324);let _0x2dd6cd=await primbon[_0x2e6a35(0x1db)](_0x203e2a);if(_0x2dd6cd['status']==![])return _0x58f545(_0x2dd6cd[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6d4)+_0x2dd6cd['message'][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x149)+_0x2dd6cd[_0x2e6a35(0x6f5)][_0x2e6a35(0x3b8)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Notes\x20:*\x20'+_0x2dd6cd[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x168):case _0x2e6a35(0x2e7):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x172);let [_0x1db3c9,_0x5a54e0,_0x4d2f8d,_0x45c318]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x1335d7=await primbon['kecocokan_nama'](_0x1db3c9,_0x5a54e0,_0x4d2f8d,_0x45c318);if(_0x1335d7[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x1335d7[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+'\x20*Name\x20:*\x20'+_0x1335d7[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x1335d7['message'][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6ed)+_0x1335d7['message']['life_path']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Destiny\x20:*\x20'+_0x1335d7['message'][_0x2e6a35(0x676)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x5c4)+_0x1335d7[_0x2e6a35(0x6f5)][_0x2e6a35(0x1a4)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x675)+_0x1335d7[_0x2e6a35(0x6f5)][_0x2e6a35(0x570)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x407)+_0x1335d7[_0x2e6a35(0x6f5)][_0x2e6a35(0x46a)],_0x522605);}break;case'kecocokanpasangan':case _0x2e6a35(0x27f):case _0x2e6a35(0x64f):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x20කැමති\x20නමක්\x20|Novia';let [_0x2c59a6,_0x40b873]=_0x203e2a[_0x2e6a35(0x3a8)]`|`,_0x2d8e80=await primbon[_0x2e6a35(0x397)](_0x2c59a6,_0x40b873);if(_0x2d8e80[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x2d8e80[_0x2e6a35(0x6f5)]);_0x56eed5['sendImage'](_0x522605[_0x2e6a35(0x687)],_0x2d8e80[_0x2e6a35(0x6f5)][_0x2e6a35(0x187)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4d5)+_0x2d8e80['message'][_0x2e6a35(0x5b3)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5d8)+_0x2d8e80[_0x2e6a35(0x6f5)][_0x2e6a35(0x54a)]+'\x0a\x20'+global['emoji01']+'\x20*Positive\x20Side\x20:*\x20'+_0x2d8e80[_0x2e6a35(0x6f5)][_0x2e6a35(0x381)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6f0)+_0x2d8e80[_0x2e6a35(0x6f5)][_0x2e6a35(0x560)],_0x522605);}break;case'jadianpernikahan':case _0x2e6a35(0x51c):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x1d5);let [_0x54b75b,_0x1c49ac,_0x52ee3e]=_0x203e2a['split']`,`,_0x21248f=await primbon[_0x2e6a35(0x24c)](_0x54b75b,_0x1c49ac,_0x52ee3e);if(_0x21248f['status']==![])return _0x58f545(_0x21248f[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x527)+_0x21248f['message']['tanggal']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x3a6)+_0x21248f['message'][_0x2e6a35(0x306)],_0x522605);}break;case _0x2e6a35(0x489):{if(!ext)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x738);let [_0x3ec064,_0x554345,_0x57aff5]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x396889=await primbon[_0x2e6a35(0x16b)](_0x3ec064,_0x554345,_0x57aff5);if(_0x396889[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x396889[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x396889[_0x2e6a35(0x6f5)]['hari_lahir']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Business\x20:*\x20'+_0x396889[_0x2e6a35(0x6f5)][_0x2e6a35(0x4f6)],_0x522605);}break;case _0x2e6a35(0x645):case _0x2e6a35(0x251):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5bf);let [_0x514633,_0xd3e704,_0xabf644]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x443246=await primbon[_0x2e6a35(0x5ab)](_0x514633,_0xd3e704,_0xabf644);if(_0x443246[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x443246['message']);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x443246[_0x2e6a35(0x6f5)][_0x2e6a35(0x4ab)]+'\x0a\x20'+global['emoji01']+'\x20*Sustenance\x20:*\x20'+_0x443246[_0x2e6a35(0x6f5)]['rejeki']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x443246[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x6b3):case _0x2e6a35(0x3c4):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x207,\x207,\x202005';let [_0x18cba2,_0x4feb5d,_0x10ed3f]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x450082=await primbon[_0x2e6a35(0x625)](_0x18cba2,_0x4feb5d,_0x10ed3f);if(_0x450082['status']==![])return _0x58f545(_0x450082['message']);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+_0x2e6a35(0x2f8)+_0x450082[_0x2e6a35(0x6f5)][_0x2e6a35(0x4ab)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x339)+_0x450082['message'][_0x2e6a35(0x6b3)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x217)+_0x450082['message'][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x3df):case _0x2e6a35(0x622):case _0x2e6a35(0x1b0):{if(!_0x203e2a)throw _0x2e6a35(0x523);let [_0x18cec4,_0xf72b0a,_0x36cb4d]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x4725fa=await primbon[_0x2e6a35(0x5e7)](_0x18cec4,_0xf72b0a,_0x36cb4d);if(_0x4725fa[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x4725fa[_0x2e6a35(0x6f5)]);_0x56eed5['sendText'](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x16c)+_0x4725fa[_0x2e6a35(0x6f5)][_0x2e6a35(0x152)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Root\x20Number\x20:*\x20'+_0x4725fa[_0x2e6a35(0x6f5)][_0x2e6a35(0x47b)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Nature\x20:*\x20'+_0x4725fa[_0x2e6a35(0x6f5)][_0x2e6a35(0x6dd)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x567)+_0x4725fa[_0x2e6a35(0x6f5)][_0x2e6a35(0x4f5)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x213)+_0x4725fa[_0x2e6a35(0x6f5)][_0x2e6a35(0x55d)],_0x522605);}break;case'potensipenyakit':case'penyakit':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5bf);let [_0x194211,_0x3d57a9,_0x2b67e6]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x51a2b6=await primbon['cek_potensi_penyakit'](_0x194211,_0x3d57a9,_0x2b67e6);if(_0x51a2b6['status']==![])return _0x58f545(_0x51a2b6[_0x2e6a35(0x6f5)]);_0x56eed5['sendText'](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+'\x20*Analysis\x20:*\x20'+_0x51a2b6[_0x2e6a35(0x6f5)][_0x2e6a35(0x152)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x6f8)+_0x51a2b6[_0x2e6a35(0x6f5)][_0x2e6a35(0x742)]+_0x2e6a35(0x25a)+_0x51a2b6[_0x2e6a35(0x6f5)][_0x2e6a35(0x4f5)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x51a2b6[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x618):case'tarot':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5bf);let [_0x22521c,_0x23e5f1,_0x1782cb]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x31c4cb=await primbon[_0x2e6a35(0x574)](_0x22521c,_0x23e5f1,_0x1782cb);if(_0x31c4cb[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x31c4cb[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x32a)](_0x522605[_0x2e6a35(0x687)],_0x31c4cb[_0x2e6a35(0x6f5)]['image'],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x31c4cb[_0x2e6a35(0x6f5)][_0x2e6a35(0x729)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x353)+_0x31c4cb['message'][_0x2e6a35(0x366)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x149)+_0x31c4cb[_0x2e6a35(0x6f5)][_0x2e6a35(0x3b8)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x217)+_0x31c4cb[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x1f2):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x20කැමති\x20නමක්\x20,\x201,\x202005\x0a\x0aNote\x20:\x20'+(_0x4cf957+_0x24546f)+'\x20Name,\x20gender,\x20tahun\x20lahir\x0aGender\x20:\x201\x20untuk\x20laki-laki\x20&\x202\x20untuk\x20perempuan';let [_0x4f996f,_0x2d8afc,_0x1eddaa]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x531d4e=await primbon[_0x2e6a35(0x1d8)](_0x4f996f,_0x2d8afc,_0x1eddaa);if(_0x531d4e[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x531d4e[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6d4)+_0x531d4e[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x531d4e['message'][_0x2e6a35(0x369)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x3e8)+_0x531d4e[_0x2e6a35(0x6f5)][_0x2e6a35(0x437)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x290)+_0x531d4e['message'][_0x2e6a35(0x53b)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x20a)+_0x531d4e[_0x2e6a35(0x6f5)][_0x2e6a35(0x2ee)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6a9)+_0x531d4e['message'][_0x2e6a35(0x1c6)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x47a)+_0x531d4e[_0x2e6a35(0x6f5)]['sektor_baik']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Bad\x20Sector\x20:*\x20'+_0x531d4e[_0x2e6a35(0x6f5)][_0x2e6a35(0x36b)],_0x522605);}break;case _0x2e6a35(0x660):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5bf);let [_0x11e34a,_0x2d7c57,_0x5d307a]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x546d62=await primbon[_0x2e6a35(0x2b7)](_0x11e34a,_0x2d7c57,_0x5d307a);if(_0x546d62[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x546d62[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x546d62[_0x2e6a35(0x6f5)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x43d)+_0x546d62['message'][_0x2e6a35(0x681)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x70f)+_0x546d62['message'][_0x2e6a35(0x1e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x546d62[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x36f):case _0x2e6a35(0x627):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x207,\x207,\x202005';let [_0x55d7f3,_0x19273d,_0x2adaa2]=_0x203e2a['split']`,`,_0x597521=await primbon[_0x2e6a35(0x193)](_0x55d7f3,_0x19273d,_0x2adaa2);if(_0x597521[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x597521['message']);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+'\x20*Born\x20:*\x20'+_0x597521['message'][_0x2e6a35(0x729)]+'\x0a\x20'+global['emoji01']+'\x20*Results\x20:*\x20'+_0x597521[_0x2e6a35(0x6f5)][_0x2e6a35(0x1ca)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x70f)+_0x597521[_0x2e6a35(0x6f5)][_0x2e6a35(0x1e7)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x217)+_0x597521[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case'harinaas':case _0x2e6a35(0x22e):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x207,\x207,\x202005';let [_0xd95f9a,_0x45c021,_0x581a8b]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x5bb35e=await primbon['primbon_hari_naas'](_0xd95f9a,_0x45c021,_0x581a8b);if(_0x5bb35e[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x5bb35e[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2a0)+_0x5bb35e[_0x2e6a35(0x6f5)]['hari_lahir']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Date\x20Of\x20Birth\x20:*\x20'+_0x5bb35e[_0x2e6a35(0x6f5)][_0x2e6a35(0x729)]+'\x0a\x20'+global['emoji01']+'\x20*Fateful\x20Day\x20:*\x20'+_0x5bb35e[_0x2e6a35(0x6f5)]['hari_naas']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x70f)+_0x5bb35e[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)]+'\x0a\x20'+global['emoji01']+'\x20*Notes\x20:*\x20'+_0x5bb35e[_0x2e6a35(0x6f5)][_0x2e6a35(0x1e7)],_0x522605);}break;case _0x2e6a35(0x443):case _0x2e6a35(0x2b0):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5bf);let [_0x4e05cd,_0x360372,_0x4f16b9]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x17951b=await primbon[_0x2e6a35(0x720)](_0x4e05cd,_0x360372,_0x4f16b9);if(_0x17951b[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x17951b['message']);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2a0)+_0x17951b[_0x2e6a35(0x6f5)][_0x2e6a35(0x4ab)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x47c)+_0x17951b[_0x2e6a35(0x6f5)]['tgl_lahir']+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x6f4)+_0x17951b['message']['arah_naga_hari']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x17951b['message']['catatan'],_0x522605);}break;case'arahrejeki':case _0x2e6a35(0x4d7):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5bf);let [_0x7e083f,_0xa1686,_0x84e1e7]=_0x203e2a['split']`,`,_0x43217c=await primbon[_0x2e6a35(0x35f)](_0x7e083f,_0xa1686,_0x84e1e7);if(_0x43217c[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x43217c[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+'\x20*Day\x20Of\x20Birth\x20:*\x20'+_0x43217c[_0x2e6a35(0x6f5)][_0x2e6a35(0x4ab)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x47c)+_0x43217c['message'][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x690)+_0x43217c['message']['arah_rejeki']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Notes\x20:*\x20'+_0x43217c[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x651):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+'\x20කැමති\x20නමක්\x20,\x208,\x209,\x202005,\x202022\x0a\x0aNote\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x3f2);let [_0x5e9a69,_0x2b141a,_0x3c953f,_0x499fcf,_0x4bb601]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x4fe4c8=await primbon['ramalan_peruntungan'](_0x5e9a69,_0x2b141a,_0x3c953f,_0x499fcf,_0x4bb601);if(_0x4fe4c8['status']==![])return _0x58f545(_0x4fe4c8[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+_0x2e6a35(0x6d4)+_0x4fe4c8[_0x2e6a35(0x6f5)]['nama']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x4fe4c8['message']['tgl_lahir']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Fortune\x20Of\x20The\x20Year\x20:*\x20'+_0x4fe4c8['message'][_0x2e6a35(0x53a)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x702)+_0x4fe4c8[_0x2e6a35(0x6f5)][_0x2e6a35(0x1ca)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x4fe4c8[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x396):case _0x2e6a35(0x5b8):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+'\x207,\x207,\x202005';let [_0x1ecd4d,_0x31604d,_0x227213]=_0x203e2a['split']`,`,_0x38ae75=await primbon[_0x2e6a35(0x3c2)](_0x1ecd4d,_0x31604d,_0x227213);if(_0x38ae75[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x38ae75[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+'\x20*Date\x20:*\x20'+_0x38ae75[_0x2e6a35(0x6f5)][_0x2e6a35(0x3ee)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Number\x20Of\x20Neptune\x20:*\x20'+_0x38ae75[_0x2e6a35(0x6f5)][_0x2e6a35(0x4b2)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x220)+_0x38ae75[_0x2e6a35(0x6f5)][_0x2e6a35(0x648)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x1bd)+_0x38ae75['message'][_0x2e6a35(0x510)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20*Good\x20Hour\x20:*\x20'+_0x38ae75[_0x2e6a35(0x6f5)][_0x2e6a35(0x453)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6bb)+_0x38ae75[_0x2e6a35(0x6f5)]['watak_kelahiran'],_0x522605);}break;case _0x2e6a35(0x6dd):case'karakter':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x172);let [_0x59fbfb,_0x54b798,_0x4e7e78,_0x2ea857]=_0x203e2a['split']`,`,_0x560116=await primbon[_0x2e6a35(0x31b)](_0x59fbfb,_0x54b798,_0x4e7e78,_0x2ea857);if(_0x560116['status']==![])return _0x58f545(_0x560116[_0x2e6a35(0x6f5)]);_0x56eed5['sendText'](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+'\x20*Name\x20:*\x20'+_0x560116[_0x2e6a35(0x6f5)][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x560116[_0x2e6a35(0x6f5)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x26a)+_0x560116['message'][_0x2e6a35(0x55c)],_0x522605);}break;case'age':{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x172);let [_0x2de417,_0x41620d,_0x33a31f,_0x34da17]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x2cd48b=await primbon[_0x2e6a35(0x1e2)](_0x2de417,_0x41620d,_0x33a31f,_0x34da17);if(_0x2cd48b['status']==![])return _0x58f545(_0x2cd48b[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+_0x2e6a35(0x6d4)+_0x2cd48b['message'][_0x2e6a35(0x4e7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2f8)+_0x2cd48b[_0x2e6a35(0x6f5)][_0x2e6a35(0x729)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x702)+_0x2cd48b[_0x2e6a35(0x6f5)]['result'],_0x522605);}break;case _0x2e6a35(0x682):{if(!_0x203e2a)throw'Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x508);let [_0x5c40e0,_0x1f619a,_0x10ef8c]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0xb3f8b0=await primbon['primbon_memancing_ikan'](_0x5c40e0,_0x1f619a,_0x10ef8c);if(_0xb3f8b0['status']==![])return _0x58f545(_0xb3f8b0[_0x2e6a35(0x6f5)]);_0x56eed5['sendText'](_0x522605['chat'],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2d1)+_0xb3f8b0['message'][_0x2e6a35(0x6c4)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x702)+_0xb3f8b0[_0x2e6a35(0x6f5)]['result']+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x217)+_0xb3f8b0['message'][_0x2e6a35(0x32d)],_0x522605);}break;case'amor':{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x24d)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x425);let [_0x363643,_0x193d95,_0x3c1d9a,_0x4f9a4d]=_0x203e2a[_0x2e6a35(0x3a8)]`,`,_0x4d66e1=await primbon[_0x2e6a35(0x3ff)](_0x363643,_0x193d95,_0x3c1d9a,_0x4f9a4d);if(_0x4d66e1[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x4d66e1['message']);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+'\x20*Results\x20:*\x20'+_0x4d66e1[_0x2e6a35(0x6f5)]['result']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x217)+_0x4d66e1['message'][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x54f):case _0x2e6a35(0x2dc):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x457);let _0x33fb12=[['capricorn',new Date(0x7b2,0x0,0x1)],[_0x2e6a35(0x37f),new Date(0x7b2,0x0,0x14)],[_0x2e6a35(0x551),new Date(0x7b2,0x1,0x13)],[_0x2e6a35(0x2bd),new Date(0x7b2,0x2,0x15)],[_0x2e6a35(0x623),new Date(0x7b2,0x3,0x15)],[_0x2e6a35(0x1be),new Date(0x7b2,0x4,0x15)],[_0x2e6a35(0x719),new Date(0x7b2,0x5,0x16)],[_0x2e6a35(0x4ce),new Date(0x7b2,0x6,0x17)],[_0x2e6a35(0x3cd),new Date(0x7b2,0x7,0x17)],[_0x2e6a35(0x44e),new Date(0x7b2,0x8,0x17)],[_0x2e6a35(0x288),new Date(0x7b2,0x9,0x17)],[_0x2e6a35(0x577),new Date(0x7b2,0xa,0x16)],[_0x2e6a35(0x158),new Date(0x7b2,0xb,0x16)]][_0x2e6a35(0x66f)]();function _0x280df7(_0x3e338b,_0x50300d){const _0x2c41d0=_0x2e6a35;let _0x5f40b9=new Date(0x7b2,_0x3e338b-0x1,_0x50300d);return _0x33fb12[_0x2c41d0(0x6e5)](([_0x554fbc,_0x4f8c3d])=>_0x5f40b9>=_0x4f8c3d)[0x0];}let _0x41afb0=new Date(_0x203e2a);if(_0x41afb0==_0x2e6a35(0x5f3))throw _0x41afb0;let _0x2df232=new Date(),[_0x28a061,_0x4fecdb,_0x237849]=[_0x2df232['getFullYear'](),_0x2df232['getMonth']()+0x1,_0x2df232['getDate']()],_0x3ced10=[_0x41afb0['getFullYear'](),_0x41afb0[_0x2e6a35(0x260)]()+0x1,_0x41afb0['getDate']()],_0x521b5f=await _0x280df7(_0x3ced10[0x1],_0x3ced10[0x2]),_0x437a9e=await primbon[_0x2e6a35(0x54f)](_0x521b5f);if(_0x437a9e[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x437a9e[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global['emoji01']+_0x2e6a35(0x731)+_0x437a9e[_0x2e6a35(0x6f5)]['zodiak']+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x364)+_0x437a9e[_0x2e6a35(0x6f5)][_0x2e6a35(0x600)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x23a)+_0x437a9e[_0x2e6a35(0x6f5)]['aroma_keberuntungan']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2cb)+_0x437a9e['message'][_0x2e6a35(0x39b)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x6cb)+_0x437a9e['message']['bunga_keberuntungan']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5d7)+_0x437a9e[_0x2e6a35(0x6f5)]['warna_keberuntungan']+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x5da)+_0x437a9e[_0x2e6a35(0x6f5)][_0x2e6a35(0x5a3)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x567)+_0x437a9e[_0x2e6a35(0x6f5)]['elemen_keberuntungan']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x239)+_0x437a9e[_0x2e6a35(0x6f5)][_0x2e6a35(0x18f)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x217)+_0x437a9e[_0x2e6a35(0x6f5)][_0x2e6a35(0x32d)],_0x522605);}break;case _0x2e6a35(0x3b0):{if(!_0x203e2a)throw _0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x546);let _0x2f798b=await primbon[_0x2e6a35(0x3b0)](_0x203e2a);if(_0x2f798b['status']==![])return _0x58f545(_0x2f798b[_0x2e6a35(0x6f5)]);_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x702)+_0x2f798b[_0x2e6a35(0x6f5)],_0x522605);}break;case _0x2e6a35(0x19c):case _0x2e6a35(0x4fe):{if(!_0xfb07a&&global['db']['data'][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]<0x1)return _0x58f545(_0x2e6a35(0x317));if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5d9));let [_0xd04bc7,_0x27c115,_0xa34d0d]=_0x44e215;if(_0xd04bc7[_0x2e6a35(0x248)]()=='ff'){if(!_0x27c115)return _0x58f545('No\x20Query\x20id,\x20Example\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x2a1));let _0x1ff7cd=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x1b6),{'apikey':global[_0x2e6a35(0x19b)][global[_0x2e6a35(0x507)]['zenz']],'query':_0x27c115}));if(_0x1ff7cd[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x1ff7cd[_0x2e6a35(0x1ca)][_0x2e6a35(0x6f5)]);_0x58f545(_0x2e6a35(0x6d7)+_0x1ff7cd[_0x2e6a35(0x1ca)][_0x2e6a35(0x68e)]+_0x2e6a35(0x68b)+_0x1ff7cd[_0x2e6a35(0x1ca)][_0x2e6a35(0x458)]),db[_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605['sender']][_0x2e6a35(0x60f)]-=0x1;}else{if(_0xd04bc7['toLowerCase']()=='ml'){if(!_0x27c115)return _0x58f545('No\x20Query\x20id,\x20Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x6d9));if(!_0xa34d0d)return _0x58f545('No\x20Query\x20id,\x20Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x6d9));let _0x50bdff=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x2d5),{'apikey':global[_0x2e6a35(0x19b)][global[_0x2e6a35(0x507)][_0x2e6a35(0x423)]],'query':_0x27c115,'query2':_0xa34d0d}));if(_0x50bdff[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x50bdff[_0x2e6a35(0x1ca)][_0x2e6a35(0x6f5)]);_0x58f545(_0x2e6a35(0x6d7)+_0x50bdff[_0x2e6a35(0x1ca)][_0x2e6a35(0x68e)]+_0x2e6a35(0x4f8)+_0x50bdff[_0x2e6a35(0x1ca)][_0x2e6a35(0x272)]+'\x0aUsername\x20:\x20'+_0x50bdff[_0x2e6a35(0x1ca)][_0x2e6a35(0x458)]),db[_0x2e6a35(0x746)]['users'][_0x522605[_0x2e6a35(0x224)]]['limit']-=0x1;}else{if(_0xd04bc7['toLowerCase']()==_0x2e6a35(0x194)){if(!_0x27c115)return _0x58f545('No\x20Query\x20id,\x20Example\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x3f4));let _0x5ee82f=await fetchJson(api(_0x2e6a35(0x423),'/api/nickaov',{'apikey':global['APIKeys'][global['APIs'][_0x2e6a35(0x423)]],'query':_0x27c115}));if(_0x5ee82f[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x5ee82f[_0x2e6a35(0x1ca)][_0x2e6a35(0x6f5)]);_0x58f545('ID\x20:\x20'+_0x5ee82f[_0x2e6a35(0x1ca)][_0x2e6a35(0x68e)]+_0x2e6a35(0x68b)+_0x5ee82f['result'][_0x2e6a35(0x458)]),db[_0x2e6a35(0x746)]['users'][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]-=0x1;}else{if(_0xd04bc7[_0x2e6a35(0x248)]()==_0x2e6a35(0x456)){if(!_0x27c115)return _0x58f545(_0x2e6a35(0x269)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x479));let _0x2b9923=await fetchJson(api('zenz','/api/nickcod',{'apikey':global['APIKeys'][global[_0x2e6a35(0x507)]['zenz']],'query':_0x27c115}));if(_0x2b9923[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x2b9923[_0x2e6a35(0x1ca)][_0x2e6a35(0x6f5)]);_0x58f545(_0x2e6a35(0x6d7)+_0x2b9923[_0x2e6a35(0x1ca)]['gameId']+_0x2e6a35(0x68b)+_0x2b9923[_0x2e6a35(0x1ca)][_0x2e6a35(0x458)]),db['data'][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]-=0x1;}else{if(_0xd04bc7['toLowerCase']()=='pb'){if(!_0x27c115)return _0x58f545(_0x2e6a35(0x269)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4e2));let _0x5d59a2=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x1f7),{'apikey':global[_0x2e6a35(0x19b)][global[_0x2e6a35(0x507)][_0x2e6a35(0x423)]],'query':_0x27c115}));if(_0x5d59a2['status']==![])return _0x58f545(_0x5d59a2[_0x2e6a35(0x1ca)]['message']);_0x58f545('ID\x20:\x20'+_0x5d59a2[_0x2e6a35(0x1ca)][_0x2e6a35(0x68e)]+'\x0aUsername\x20:\x20'+_0x5d59a2[_0x2e6a35(0x1ca)][_0x2e6a35(0x458)]),db[_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]-=0x1;}else{if(_0xd04bc7[_0x2e6a35(0x248)]()=='ig'){if(!_0x27c115)return _0x58f545(_0x2e6a35(0x652)+(_0x4cf957+_0x24546f)+'\x20ig\x20josephxeon13');let {result:_0x4524fa}=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x53f),{'username':_0x27c115},_0x2e6a35(0x547)));if(_0x4524fa[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x4524fa['result']['message']);_0x56eed5['sendMedia'](_0x522605[_0x2e6a35(0x687)],_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x732)],'','\x20'+global['emoji01']+_0x2e6a35(0x480)+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x743)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x171)+_0x4524fa['caption']['user_name']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x160)+_0x4524fa['caption'][_0x2e6a35(0x204)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20Following\x20:\x20'+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x70a)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x4e8)+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x226)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5db)+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x31f)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x159)+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x519)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x57a)+_0x4524fa['caption'][_0x2e6a35(0x674)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x15a)+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x293)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20Bio\x20:\x20'+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x579)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x537)+_0x4524fa[_0x2e6a35(0x5ef)][_0x2e6a35(0x4a8)],_0x522605),db[_0x2e6a35(0x746)][_0x2e6a35(0x2d4)][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]-=0x1;}else{if(_0xd04bc7[_0x2e6a35(0x248)]()==_0x2e6a35(0x38b)){if(!_0x27c115)return _0x58f545(_0x2e6a35(0x652)+(_0x4cf957+_0x24546f)+'\x20npm\x20scrape-primbon');let {result:_0x151e0d}=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x601),{'query':_0x27c115},_0x2e6a35(0x547)));if(_0x151e0d[_0x2e6a35(0x67c)]==![])return _0x58f545(_0x151e0d[_0x2e6a35(0x1ca)][_0x2e6a35(0x6f5)]);_0x58f545('\x20'+global[_0x2e6a35(0x34c)]+'\x20Name\x20:\x20'+_0x151e0d[_0x2e6a35(0x37b)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20Version\x20:\x20'+Object['keys'](_0x151e0d[_0x2e6a35(0x70b)])+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x53e)+tanggal(_0x151e0d[_0x2e6a35(0x4fd)][_0x2e6a35(0x388)])+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x511)+tanggal(_0x151e0d[_0x2e6a35(0x4fd)][_0x2e6a35(0x312)])+'\x0a\x20'+global[_0x2e6a35(0x34c)]+'\x20Maintainers\x20:\x0a\x20'+_0x151e0d[_0x2e6a35(0x2f9)][_0x2e6a35(0x320)](_0x296835=>'-\x20'+_0x296835[_0x2e6a35(0x37b)]+'\x20:\x20'+_0x296835[_0x2e6a35(0x29a)])[_0x2e6a35(0x3da)]('\x0a')+_0x2e6a35(0x210)+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x563)+_0x151e0d['description']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5b5)+_0x151e0d[_0x2e6a35(0x6fc)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x362)+_0x151e0d['keywords']+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x377)+_0x151e0d['author']['name']+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x67b)+_0x151e0d[_0x2e6a35(0x6c8)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x71a)+_0x151e0d[_0x2e6a35(0x659)]),db[_0x2e6a35(0x746)]['users'][_0x522605[_0x2e6a35(0x224)]][_0x2e6a35(0x60f)]-=0x1;}else _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x5d9));}}}}}}}break;case'tiktokd':case _0x2e6a35(0x219):{if(!_0x203e2a)return _0x58f545('Enter\x20Query\x20Link!');_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x10ca56=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x3a9),{'url':_0x203e2a},_0x2e6a35(0x547))),_0x34ac1d=[{'buttonId':_0x2e6a35(0x2a7)+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x6da)},'type':0x1},{'buttonId':_0x2e6a35(0x54c)+_0x203e2a,'buttonText':{'displayText':'Audio\x20🎵'},'type':0x1}],_0x5b0c78={'video':{'url':_0x10ca56[_0x2e6a35(0x1ca)][_0x2e6a35(0x307)]},'caption':_0x2e6a35(0x482)+_0x203e2a,'footer':_0x2e6a35(0x54d),'buttons':_0x34ac1d,'headerType':0x5};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x5b0c78,{'quoted':_0x522605});}break;case'tiktokwm':case _0x2e6a35(0x1c2):{if(!_0x203e2a)return _0x58f545('Enter\x20Query\x20Link!');_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x471d56=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x3a9),{'url':_0x203e2a},_0x2e6a35(0x547))),_0x890829=[{'buttonId':_0x2e6a35(0x3b2)+_0x203e2a,'buttonText':{'displayText':'🥬No\x20Watermark🥬'},'type':0x1},{'buttonId':'tiktokmp3\x20'+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x516)},'type':0x1}],_0x512cc4={'video':{'url':_0x471d56[_0x2e6a35(0x1ca)]['watermark']},'caption':_0x2e6a35(0x482)+_0x203e2a,'footer':_0x2e6a35(0x54d),'buttons':_0x890829,'headerType':0x5};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x512cc4,{'quoted':_0x522605});}break;case'tiktokmp3':case _0x2e6a35(0x624):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x544));_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0xefdfba=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x262),{'url':_0x203e2a},_0x2e6a35(0x547))),_0x2dcb89=[{'buttonId':'tiktoknowm\x20'+_0x203e2a,'buttonText':{'displayText':'🥬No\x20Watermark🥬'},'type':0x1},{'buttonId':_0x2e6a35(0x2a7)+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x6da)},'type':0x1}],_0x452801={'text':'Download\x20From\x20'+_0x203e2a,'footer':_0x2e6a35(0x54d),'buttons':_0x2dcb89,'headerType':0x2},_0x485390=await _0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x452801,{'quoted':_0x522605});_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'audio':{'url':_0xefdfba[_0x2e6a35(0x1ca)][_0x2e6a35(0x4d6)]},'mimetype':_0x2e6a35(0x42b)},{'quoted':_0x485390});}break;case'instagram':case'ig':case _0x2e6a35(0x503):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x6f2));_0x58f545(mess[_0x2e6a35(0x4eb)]);if(/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/[_0x2e6a35(0x19d)](isUrl(_0x203e2a)[0x0])){let _0x528df3=await fetchJson(api('zenz',_0x2e6a35(0x1d2),{'url':isUrl(_0x203e2a)[0x0]},_0x2e6a35(0x547)));for(let _0x22c71e of _0x528df3[_0x2e6a35(0x746)])_0x56eed5[_0x2e6a35(0x707)](_0x522605[_0x2e6a35(0x687)],_0x22c71e,'',_0x2e6a35(0x58b)+isUrl(_0x203e2a)[0x0],_0x522605);}else{if(/\/stories\/([^\s&]+)/[_0x2e6a35(0x19d)](isUrl(_0x203e2a)[0x0])){let _0x4a4f54=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x1c1),{'url':isUrl(_0x203e2a)[0x0]},_0x2e6a35(0x547)));_0x56eed5[_0x2e6a35(0x707)](_0x522605[_0x2e6a35(0x687)],_0x4a4f54[_0x2e6a35(0x616)][0x0][_0x2e6a35(0x667)],'',_0x2e6a35(0x58b)+isUrl(_0x203e2a)[0x0],_0x522605);}}}break;case'igeh':case _0x2e6a35(0x266):case _0x2e6a35(0x3c6):case _0x2e6a35(0x4c0):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x544));_0x58f545(mess['wait']);let _0x46f7cc=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x1d2),{'url':_0x203e2a},_0x2e6a35(0x547)));_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'video':{'url':_0x46f7cc[_0x2e6a35(0x746)][0x0]}},{'quoted':_0x522605});}break;case _0x2e6a35(0x692):case _0x2e6a35(0x232):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x14d));_0x58f545(mess['wait']);let _0x14c4a4=await fetchJson(api(_0x2e6a35(0x423),_0x2e6a35(0x530),{'query':_0x203e2a},_0x2e6a35(0x547))),_0x4c85b6=await _0x56eed5[_0x2e6a35(0x32a)](_0x522605['chat'],_0x14c4a4[_0x2e6a35(0x1ca)][_0x2e6a35(0x597)],'\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x383)+_0x14c4a4[_0x2e6a35(0x1ca)][_0x2e6a35(0x6c7)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x382)+_0x14c4a4['result'][_0x2e6a35(0x654)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x321)+_0x14c4a4[_0x2e6a35(0x1ca)][_0x2e6a35(0x45c)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x4f4)+_0x14c4a4[_0x2e6a35(0x1ca)][_0x2e6a35(0x4af)]+'\x0a\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x5b7)+_0x14c4a4[_0x2e6a35(0x1ca)][_0x2e6a35(0x469)][_0x2e6a35(0x1ca)],_0x522605);_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'audio':{'url':_0x14c4a4[_0x2e6a35(0x1ca)]['mp4aLink']},'mimetype':_0x2e6a35(0x42b),'fileName':_0x14c4a4[_0x2e6a35(0x1ca)]['lagu']+_0x2e6a35(0x3d5)},{'quoted':_0x4c85b6});}break;case _0x2e6a35(0x710):case _0x2e6a35(0x4bc):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x14d));_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x1aa8bb=await fetchJson(api('zenz','/downloader/soundcloud',{'url':isUrl(_0x203e2a)[0x0]},_0x2e6a35(0x547))),_0x5ea773=await _0x56eed5[_0x2e6a35(0x32a)](_0x522605[_0x2e6a35(0x687)],_0x1aa8bb[_0x2e6a35(0x1ca)][_0x2e6a35(0x2e6)],'\x20'+global['emoji01']+_0x2e6a35(0x383)+_0x1aa8bb['result'][_0x2e6a35(0x5a1)]+'\x0a\x20'+global['emoji01']+_0x2e6a35(0x5af)+isUrl(_0x203e2a)[0x0]);_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'audio':{'url':_0x1aa8bb[_0x2e6a35(0x1ca)][_0x2e6a35(0x667)]},'mimetype':'audio/mpeg','fileName':_0x1aa8bb[_0x2e6a35(0x1ca)]['title']+_0x2e6a35(0x3d5)},{'quoted':_0x5ea773});}break;case _0x2e6a35(0x6ba):case _0x2e6a35(0x445):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x544));_0x58f545(mess['wait']);let _0x5e881e=await fetchJson(api('zenz',_0x2e6a35(0x203),{'url':_0x203e2a},'apikey')),_0x4b9b9f=[{'buttonId':_0x2e6a35(0x279)+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x516)},'type':0x1}],_0x585c4a={'video':{'url':_0x5e881e[_0x2e6a35(0x1ca)]['HD']||_0x5e881e[_0x2e6a35(0x1ca)]['SD']},'caption':util[_0x2e6a35(0x3b5)](_0x5e881e[_0x2e6a35(0x1ca)]),'footer':'Press\x20The\x20Button\x20Below','buttons':_0x4b9b9f,'headerType':0x5};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x585c4a,{'quoted':_0x522605});}break;case _0x2e6a35(0x5e1):case _0x2e6a35(0x494):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x544));_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x51ebff=await fetchJson(api('zenz','/api/downloader/twitter',{'url':_0x203e2a},_0x2e6a35(0x547))),_0x35ed56=[{'buttonId':_0x2e6a35(0x2e5)+_0x203e2a,'buttonText':{'displayText':_0x2e6a35(0x55b)},'type':0x1}],_0x55b750={'image':{'url':_0x51ebff[_0x2e6a35(0x1ca)]['thumb']},'caption':util[_0x2e6a35(0x3b5)](_0x51ebff['result']),'footer':_0x2e6a35(0x54d),'buttons':_0x35ed56,'headerType':0x4},_0x201dc6=await _0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x55b750,{'quoted':_0x522605});_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'audio':{'url':_0x51ebff[_0x2e6a35(0x1ca)][_0x2e6a35(0x4d6)]}},{'quoted':_0x201dc6});}break;case _0x2e6a35(0x48c):case _0x2e6a35(0x3f3):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x544));_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x12f599=await fetchJson(api(_0x2e6a35(0x423),'/api/downloader/pinterestdl',{'url':_0x203e2a},_0x2e6a35(0x547)));_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'video':{'url':_0x12f599[_0x2e6a35(0x1ca)]},'caption':_0x2e6a35(0x482)+_0x203e2a},{'quoted':_0x522605});}break;case'umma':case _0x2e6a35(0x572):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4e6));let {umma:_0x5dd35a}=require('./lib)\x20scraper'),_0x4195a5=await _0x5dd35a(isUrl(_0x203e2a)[0x0]);if(_0x4195a5[_0x2e6a35(0x6ac)]==_0x2e6a35(0x3ba)){let _0xc675f4=[{'buttonId':_0x2e6a35(0x5c8)+_0x4195a5['media'][0x0]+'\x20128kbps','buttonText':{'displayText':_0x2e6a35(0x516)},'type':0x1},{'buttonId':'ytmp4\x20'+_0x4195a5[_0x2e6a35(0x616)][0x0]+'\x20360p','buttonText':{'displayText':_0x2e6a35(0x55b)},'type':0x1}],_0x58cc93={'image':{'url':_0x4195a5[_0x2e6a35(0x30f)][_0x2e6a35(0x6b1)]},'caption':_0x2e6a35(0x2d8)+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x334)+_0x4195a5[_0x2e6a35(0x5a1)]+'\x0a*\x20'+global['emoji01']+_0x2e6a35(0x1ea)+_0x4195a5[_0x2e6a35(0x30f)][_0x2e6a35(0x37b)]+_0x2e6a35(0x2d8)+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x2c1)+_0x4195a5['like']+_0x2e6a35(0x2d8)+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x48f)+_0x4195a5['caption']+'\x0a*\x20'+global[_0x2e6a35(0x34c)]+_0x2e6a35(0x502)+_0x4195a5['media'][0x0]+_0x2e6a35(0x4f0),'footer':_0x2e6a35(0x526),'buttons':_0xc675f4,'headerType':0x4};_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],_0x58cc93,{'quoted':_0x522605});}else _0x4195a5[_0x2e6a35(0x6ac)]=='image'&&_0x4195a5['media'][_0x2e6a35(0x320)](async _0x2a84c2=>{const _0x47eb5d=_0x2e6a35;_0x56eed5[_0x47eb5d(0x371)](_0x522605[_0x47eb5d(0x687)],{'image':{'url':_0x2a84c2},'caption':'\x20'+global[_0x47eb5d(0x34c)]+'\x20Title\x20:\x20'+_0x4195a5[_0x47eb5d(0x5a1)]+'\x0a\x20'+global[_0x47eb5d(0x34c)]+_0x47eb5d(0x377)+_0x4195a5[_0x47eb5d(0x30f)][_0x47eb5d(0x37b)]+'\x0a\x20'+global[_0x47eb5d(0x34c)]+_0x47eb5d(0x24a)+_0x4195a5[_0x47eb5d(0x31e)]+'\x0a\x20'+global[_0x47eb5d(0x34c)]+'\x20Caption\x20:\x20'+_0x4195a5[_0x47eb5d(0x5ef)]},{'quoted':_0x522605});});}break;case _0x2e6a35(0x28a):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x144));let {ringtone:_0x15f958}=require('./lib/scraper'),_0x3159bd=await _0x15f958(_0x203e2a),_0x25d44b=_0x3159bd[Math[_0x2e6a35(0x51a)](Math['random']()*_0x3159bd['length'])];_0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'audio':{'url':_0x25d44b[_0x2e6a35(0x4d6)]},'fileName':_0x25d44b[_0x2e6a35(0x5a1)]+_0x2e6a35(0x27e),'mimetype':_0x2e6a35(0x42b)},{'quoted':_0x522605});}break;case _0x2e6a35(0x465):{oh=_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+'\x203\x0a\x0aIQRA\x20Which\x20Is\x20Available\x20:\x201,2,3,4,5,6';if(!_0x203e2a)return _0x58f545(oh);yy=await getBuffer(_0x2e6a35(0x41e)+_0x203e2a),_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'document':yy,'mimetype':_0x2e6a35(0x1b7),'fileName':'iqra'+_0x203e2a+_0x2e6a35(0x552)},{'quoted':_0x522605})['catch'](_0x3e5b87=>_0x58f545(oh));}break;case'juzamma':{if(_0x44e215[0x0]===_0x2e6a35(0x685))_0x58f545(mess[_0x2e6a35(0x4eb)]),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'document':{'url':_0x2e6a35(0x242)},'mimetype':'application/pdf','fileName':_0x2e6a35(0x429)},{'quoted':_0x522605});else{if(_0x44e215[0x0]===_0x2e6a35(0x64c))_0x58f545(mess['wait']),_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'document':{'url':_0x2e6a35(0x468)},'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document','fileName':_0x2e6a35(0x65e)},{'quoted':_0x522605});else{if(_0x44e215[0x0]==='pptx')_0x58f545(mess['wait']),_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'document':{'url':_0x2e6a35(0x39f)},'mimetype':'application/vnd.openxmlformats-officedocument.presentationml.presentation','fileName':_0x2e6a35(0x525)},{'quoted':_0x522605});else _0x44e215[0x0]===_0x2e6a35(0x6b5)?(_0x58f545(mess['wait']),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'document':{'url':'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'},'mimetype':_0x2e6a35(0x265),'fileName':_0x2e6a35(0x2ab)},{'quoted':_0x522605})):_0x58f545(_0x2e6a35(0x673)+(_0x4cf957+_0x24546f)+'\x20pdf\x0a\x0aAvailable\x20Formats:\x20pdf,\x20docx,\x20pptx,\x20xlsx');}}}break;case _0x2e6a35(0x36e):case _0x2e6a35(0x264):{if(!_0x44e215[0x0])return _0x58f545(_0x2e6a35(0x694)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x3ca)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x536));if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x495)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x724));try{let _0x5d87e5=await fetchJson(_0x2e6a35(0x398)+_0x44e215[0x0]),{number:_0x347911,arab:_0x237313,id:_0x59941d}=_0x5d87e5[_0x2e6a35(0x6e5)](_0xc0e1a6=>_0xc0e1a6['number']==_0x44e215[0x1]);_0x58f545('No.\x20'+_0x347911+'\x0a\x0a'+_0x237313+'\x0a\x0a'+_0x59941d);}catch(_0x3916bb){_0x58f545('Hadith\x20Not\x20Found\x20!');}}break;case _0x2e6a35(0x315):{if(!_0x44e215[0x0])return _0x58f545(_0x2e6a35(0x715)+(_0x4cf957+_0x24546f)+'\x201\x202\x0a\x0aThen\x20The\x20Result\x20Is\x20Surah\x20Al-Fatihah\x20Verse\x202\x20Along\x20With\x20The\x20Audio,\x20And\x20The\x20Verse\x20Is\x20Just\x201');if(!_0x44e215[0x1])return _0x58f545(_0x2e6a35(0x715)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4fc));let _0x1583fe=await fetchJson(_0x2e6a35(0x1ff)+_0x44e215[0x0]+_0x2e6a35(0x474)+_0x44e215[0x1]),_0x3be716='*Arab*\x20:\x20'+_0x1583fe[_0x2e6a35(0x1ca)][_0x2e6a35(0x746)][_0x2e6a35(0x3e9)]['arab']+'\x0a*English*\x20:\x20'+_0x1583fe[_0x2e6a35(0x1ca)][_0x2e6a35(0x746)][_0x2e6a35(0x26d)]['en']+_0x2e6a35(0x415)+_0x1583fe['result']['data'][_0x2e6a35(0x26d)]['id']+_0x2e6a35(0x296)+_0x1583fe[_0x2e6a35(0x1ca)]['data'][_0x2e6a35(0x40b)]['name'][_0x2e6a35(0x1b4)]['id']+_0x2e6a35(0x244)+_0x1583fe[_0x2e6a35(0x1ca)][_0x2e6a35(0x746)][_0x2e6a35(0x739)][_0x2e6a35(0x1b8)]+'\x20)';_0x58f545(_0x3be716),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'audio':{'url':_0x1583fe[_0x2e6a35(0x1ca)]['data'][_0x2e6a35(0x4d6)]['primary']},'mimetype':_0x2e6a35(0x42b)},{'quoted':_0x522605});}break;case'tafsirsurah':{if(!_0x44e215[0x0])return _0x58f545(_0x2e6a35(0x715)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x49b));if(!_0x44e215[0x1])return _0x58f545('Usage\x20Examples:\x0a'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x49b));let _0x66d613=await fetchJson(_0x2e6a35(0x1ff)+_0x44e215[0x0]+'&ayat='+_0x44e215[0x1]),_0x594130=_0x2e6a35(0x2c8)+_0x66d613[_0x2e6a35(0x1ca)][_0x2e6a35(0x746)]['tafsir']['id'][_0x2e6a35(0x255)]+_0x2e6a35(0x61b)+_0x66d613['result'][_0x2e6a35(0x746)][_0x2e6a35(0x5f5)]['id'][_0x2e6a35(0x5f8)]+_0x2e6a35(0x296)+_0x66d613[_0x2e6a35(0x1ca)][_0x2e6a35(0x746)][_0x2e6a35(0x40b)][_0x2e6a35(0x37b)][_0x2e6a35(0x1b4)]['id']+_0x2e6a35(0x244)+_0x66d613[_0x2e6a35(0x1ca)][_0x2e6a35(0x746)][_0x2e6a35(0x739)]['inSurah']+'\x20)';_0x58f545(_0x594130);}break;case'bass':case _0x2e6a35(0x4b1):case _0x2e6a35(0x4d4):case _0x2e6a35(0x481):case _0x2e6a35(0x1ad):case _0x2e6a35(0x549):case _0x2e6a35(0x24f):case _0x2e6a35(0x66f):case _0x2e6a35(0x13e):case _0x2e6a35(0x60d):case _0x2e6a35(0x2b1):case _0x2e6a35(0x141):try{let _0x4b9065;if(/bass/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x721);if(/blown/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x261);if(/deep/['test'](_0x24546f))_0x4b9065=_0x2e6a35(0x473);if(/earrape/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x6e8);if(/fast/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x504);if(/fat/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x686);if(/nightcore/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x70d);if(/reverse/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x5f1);if(/robot/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x3ef);if(/slow/['test'](_0x24546f))_0x4b9065=_0x2e6a35(0x318);if(/smooth/['test'](_0x24546f))_0x4b9065=_0x2e6a35(0x1e0);if(/tupai/[_0x2e6a35(0x19d)](_0x24546f))_0x4b9065=_0x2e6a35(0x270);if(/audio/[_0x2e6a35(0x19d)](_0x56a534)){_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x3e83a3=await _0x56eed5[_0x2e6a35(0x483)](_0x22b23c),_0x4441ee=getRandom('.mp3');exec(_0x2e6a35(0x13d)+_0x3e83a3+'\x20'+_0x4b9065+'\x20'+_0x4441ee,(_0x2ebfce,_0x3c5013,_0x2b079a)=>{const _0xdb67cc=_0x2e6a35;fs['unlinkSync'](_0x3e83a3);if(_0x2ebfce)return _0x58f545(_0x2ebfce);let _0x5bf619=fs[_0xdb67cc(0x5ec)](_0x4441ee);_0x56eed5['sendMessage'](_0x522605[_0xdb67cc(0x687)],{'audio':_0x5bf619,'mimetype':'audio/mpeg'},{'quoted':_0x522605}),fs[_0xdb67cc(0x6a4)](_0x4441ee);});}else _0x58f545(_0x2e6a35(0x735)+(_0x4cf957+_0x24546f)+'*');}catch(_0x49421e){_0x58f545(_0x49421e);}break;case'setcmd':{if(!_0x522605[_0x2e6a35(0x640)])return _0x58f545(_0x2e6a35(0x17d));if(!_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x2b6)])return _0x58f545(_0x2e6a35(0x1f0));if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x44d));let _0x23bb74=_0x522605[_0x2e6a35(0x640)]['fileSha256'][_0x2e6a35(0x27a)]('base64');if(global['db']['data'][_0x2e6a35(0x19f)][_0x23bb74]&&global['db']['data'][_0x2e6a35(0x19f)][_0x23bb74]['locked'])return _0x58f545(_0x2e6a35(0x1d9));global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)][_0x23bb74]={'text':_0x203e2a,'mentionedJid':_0x522605[_0x2e6a35(0x571)],'creator':_0x522605[_0x2e6a35(0x224)],'at':+new Date(),'locked':![]},_0x58f545(_0x2e6a35(0x205));}break;case'delcmd':{let _0x2f3beb=_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x2b6)][_0x2e6a35(0x27a)](_0x2e6a35(0x21a));if(!_0x2f3beb)return _0x58f545(_0x2e6a35(0x6eb));if(global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)][_0x2f3beb]&&global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)][_0x2f3beb][_0x2e6a35(0x5c1)])return _0x58f545(_0x2e6a35(0x6a1));delete global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)][_0x2f3beb],_0x58f545(_0x2e6a35(0x205));}break;case _0x2e6a35(0x327):{if(_0x44e215[_0x2e6a35(0x25e)]<0x1)return _0x58f545('Example\x20:\x0a'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x4da));if(_0x44e215[0x0]===_0x2e6a35(0x744)){if(_0x44e215['length']<0x2)return _0x58f545(_0x2e6a35(0x65b)+(_0x4cf957+_0x24546f+'\x20'+_0x44e215[0x0])+'\x20'+global[_0x2e6a35(0x5fa)]);let _0x1b361d=await thiccysapi[_0x2e6a35(0x21c)](_0x2e6a35(0x434),[_0x44e215[0x1]]);_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'image':{'url':_0x1b361d},'caption':'Done!'},{'quoted':_0x522605});}else{if(_0x44e215[0x0]===_0x2e6a35(0x190)){if(_0x44e215[_0x2e6a35(0x25e)]<0x2)return _0x58f545(_0x2e6a35(0x65b)+(_0x4cf957+_0x24546f+'\x20'+_0x44e215[0x0])+'\x20'+global['ownername']);let _0x2f9b33=await thiccysapi[_0x2e6a35(0x21c)](_0x2e6a35(0x630),[_0x44e215[0x1]]);_0x56eed5[_0x2e6a35(0x371)](_0x36c0bf,{'image':{'url':_0x2f9b33},'caption':_0x2e6a35(0x205)},{'quoted':_0x522605});}else _0x58f545('*Text\x20Maker\x20List\x20:*\x0a•>\x20glitch\x0a•>\x20glow');}}break;case _0x2e6a35(0x1fd):case'husbu':case _0x2e6a35(0x3a3):case _0x2e6a35(0x565):case _0x2e6a35(0x45d):case _0x2e6a35(0x6be):case'nekos':case'trap':case _0x2e6a35(0x35d):{_0x58f545(mess[_0x2e6a35(0x4eb)]),_0x56eed5[_0x2e6a35(0x371)](_0x522605['chat'],{'image':{'url':api(_0x2e6a35(0x423),'/api/random/'+_0x24546f,{},'apikey')},'caption':_0x2e6a35(0x4ae)+_0x24546f},{'quoted':_0x522605});}break;case _0x2e6a35(0x636):case _0x2e6a35(0x379):{_0x58f545(mess[_0x2e6a35(0x4eb)]);let _0x4dde49=await fetchJson(_0x2e6a35(0x485)),_0x1647bb=_0x4dde49[Math[_0x2e6a35(0x51a)](Math['random']()*_0x4dde49[_0x2e6a35(0x25e)])];_0x56eed5['sendMessage'](_0x522605[_0x2e6a35(0x687)],{'image':{'url':_0x1647bb[_0x2e6a35(0x3dc)]},'caption':_0x2e6a35(0x341)},{'quoted':_0x522605}),_0x56eed5[_0x2e6a35(0x371)](_0x522605[_0x2e6a35(0x687)],{'image':{'url':_0x1647bb['female']},'caption':'Couple\x20Female🙎🏻‍♀️'},{'quoted':_0x522605});}break;case _0x2e6a35(0x2cc):{let _0x110cba=(_0x2e6a35(0x2b2)+Object[_0x2e6a35(0x3a0)](global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)])[_0x2e6a35(0x320)](([_0x6bf9a9,_0x313d17],_0x141347)=>_0x141347+0x1+'.\x20'+(_0x313d17[_0x2e6a35(0x5c1)]?'*'+_0x6bf9a9+'*':_0x6bf9a9)+_0x2e6a35(0x244)+_0x313d17[_0x2e6a35(0x3e9)])[_0x2e6a35(0x3da)]('\x0a')+'\x0a')[_0x2e6a35(0x308)]();_0x56eed5[_0x2e6a35(0x5ed)](_0x522605[_0x2e6a35(0x687)],_0x110cba,_0x522605,{'mentions':Object[_0x2e6a35(0x562)](global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)])[_0x2e6a35(0x320)](_0x3d6686=>_0x3d6686[_0x2e6a35(0x571)])[_0x2e6a35(0x486)]((_0x129837,_0x23aed3)=>[..._0x129837,..._0x23aed3],[])});}break;case _0x2e6a35(0x73b):{if(!_0x3e9927)return _0x46a476(''+mess['owner']);if(!_0x522605[_0x2e6a35(0x640)])return _0x58f545(_0x2e6a35(0x17d));if(!_0x522605[_0x2e6a35(0x640)][_0x2e6a35(0x2b6)])return _0x58f545(_0x2e6a35(0x1f0));let _0xb303c9=_0x522605['quoted'][_0x2e6a35(0x2b6)][_0x2e6a35(0x27a)](_0x2e6a35(0x21a));if(!(_0xb303c9 in global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)]))return _0x58f545(_0x2e6a35(0x6c9));global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x19f)][_0xb303c9][_0x2e6a35(0x5c1)]=!/^un/i['test'](_0x24546f),_0x58f545(_0x2e6a35(0x205));}break;case _0x2e6a35(0x475):{if(!_0x522605[_0x2e6a35(0x640)])return _0x58f545(_0x2e6a35(0x29d));if(!_0x203e2a)return _0x58f545('Example\x20:\x20'+(_0x4cf957+_0x24546f)+_0x2e6a35(0x6ff));let _0x1bd229=global['db']['data']['database'];if(_0x203e2a[_0x2e6a35(0x248)]()in _0x1bd229)return _0x58f545('\x27'+_0x203e2a+_0x2e6a35(0x5c9));_0x1bd229[_0x203e2a['toLowerCase']()]=_0x22b23c['fakeObj'],_0x58f545(_0x2e6a35(0x71e)+_0x203e2a+'\x27\x0a\x20\x20\x20\x20\x0aAccess\x20With\x20'+_0x4cf957+_0x2e6a35(0x33a)+_0x203e2a+'\x0a\x0aView\x20List\x20Of\x20Messages\x20With\x20'+_0x4cf957+_0x2e6a35(0x4be));}break;case'getmsg':{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x634)+(_0x4cf957+_0x24546f)+_0x2e6a35(0x2c2)+_0x4cf957+'listmsg');let _0x54d4a8=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x49d)];if(!(_0x203e2a[_0x2e6a35(0x248)]()in _0x54d4a8))return _0x58f545('\x27'+_0x203e2a+_0x2e6a35(0x40d));_0x56eed5[_0x2e6a35(0x27b)](_0x522605['chat'],_0x54d4a8[_0x203e2a[_0x2e6a35(0x248)]()],!![]);}break;case _0x2e6a35(0x4be):{let _0x170f45=JSON['parse'](fs['readFileSync'](_0x2e6a35(0x6a6))),_0x3e1cd4=Object['entries'](global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x49d)])[_0x2e6a35(0x320)](([_0x805951,_0x14054f])=>{return{'nama':_0x805951,..._0x14054f};}),_0x4a1dee=_0x2e6a35(0x628);for(let _0x4a78c7 of _0x3e1cd4){_0x4a1dee+=_0x2e6a35(0x629)+_0x4a78c7['nama']+'\x0a🐤\x20*Type\x20:*\x20'+getContentType(_0x4a78c7['message'])[_0x2e6a35(0x33b)](/Message/i,'')+'\x0a────────────────────────\x0a\x0a';}_0x58f545(_0x4a1dee);}break;case _0x2e6a35(0x48e):case _0x2e6a35(0x6d6):{let _0x239178=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x49d)];if(!(_0x203e2a[_0x2e6a35(0x248)]()in _0x239178))return _0x58f545('\x27'+_0x203e2a+_0x2e6a35(0x40d));delete _0x239178[_0x203e2a[_0x2e6a35(0x248)]()],_0x58f545('Delete\x20Successfully\x20\x27'+_0x203e2a+_0x2e6a35(0x65f));}break;case _0x2e6a35(0x1d0):{if(_0x522605['isGroup'])return _0x58f545(_0x2e6a35(0x29e));this[_0x2e6a35(0x1d0)]=this[_0x2e6a35(0x1d0)]?this[_0x2e6a35(0x1d0)]:{};let _0x424c20=[{'buttonId':_0x2e6a35(0x5b2),'buttonText':{'displayText':_0x2e6a35(0x4fb)},'type':0x1}];_0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],_0x424c20,'```Hi\x20'+await _0x56eed5[_0x2e6a35(0x4c5)](_0x522605[_0x2e6a35(0x224)])+_0x2e6a35(0x167),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}break;case _0x2e6a35(0x57f):case _0x2e6a35(0x3b4):{if(_0x522605['isGroup'])return _0x58f545(_0x2e6a35(0x29e));this['anonymous']=this[_0x2e6a35(0x1d0)]?this[_0x2e6a35(0x1d0)]:{};let _0x2dc0ad=Object['values'](this[_0x2e6a35(0x1d0)])[_0x2e6a35(0x6e5)](_0x29f814=>_0x29f814[_0x2e6a35(0x4c9)](_0x522605[_0x2e6a35(0x224)]));if(!_0x2dc0ad){let _0x317664=[{'buttonId':_0x2e6a35(0x354),'buttonText':{'displayText':_0x2e6a35(0x4fb)},'type':0x1}];await _0x56eed5['sendButtonText'](_0x522605['chat'],_0x317664,_0x2e6a35(0x4db)),_0x58f545(![]);}_0x58f545('Ok');let _0x597034=_0x2dc0ad['other'](_0x522605[_0x2e6a35(0x224)]);if(_0x597034)await _0x56eed5['sendText'](_0x597034,_0x2e6a35(0x236),_0x522605);delete this[_0x2e6a35(0x1d0)][_0x2dc0ad['id']];if(_0x24546f===_0x2e6a35(0x3b4))break;}case'mulai':case _0x2e6a35(0x354):{if(_0x522605[_0x2e6a35(0x555)])return _0x58f545(_0x2e6a35(0x29e));this[_0x2e6a35(0x1d0)]=this[_0x2e6a35(0x1d0)]?this[_0x2e6a35(0x1d0)]:{};if(Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x1d0)])[_0x2e6a35(0x6e5)](_0x4b7376=>_0x4b7376[_0x2e6a35(0x4c9)](_0x522605[_0x2e6a35(0x224)]))){let _0x451a1f=[{'buttonId':_0x2e6a35(0x57f),'buttonText':{'displayText':_0x2e6a35(0x679)},'type':0x1}];await _0x56eed5['sendButtonText'](_0x522605[_0x2e6a35(0x687)],_0x451a1f,'```You\x20Are\x20Still\x20In\x20An\x20Anonymous\x20Session,\x20Press\x20The\x20Button\x20Below\x20To\x20Terminate\x20Your\x20Anonymous\x20Session```','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),_0x58f545(![]);}let _0x4db477=Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x1d0)])['find'](_0x43c0c2=>_0x43c0c2['state']===_0x2e6a35(0x6a8)&&!_0x43c0c2[_0x2e6a35(0x4c9)](_0x522605[_0x2e6a35(0x224)]));if(_0x4db477){let _0x184605=[{'buttonId':_0x2e6a35(0x51b),'buttonText':{'displayText':'Skip\x20⏩'},'type':0x1},{'buttonId':'keluar','buttonText':{'displayText':_0x2e6a35(0x679)},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x4db477['a'],_0x184605,_0x2e6a35(0x405),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),_0x4db477['b']=_0x522605[_0x2e6a35(0x224)],_0x4db477[_0x2e6a35(0x461)]='CHATTING',await _0x56eed5[_0x2e6a35(0x35c)](_0x4db477['b'],_0x184605,'```Successfully\x20Found\x20Partner,\x20Now\x20You\x20Can\x20Send\x20Message```','\x20'+global['botname']+'\x20',_0x522605);}else{let _0x5be1e5=+new Date();this[_0x2e6a35(0x1d0)][_0x5be1e5]={'id':_0x5be1e5,'a':_0x522605[_0x2e6a35(0x224)],'b':'','state':_0x2e6a35(0x6a8),'check':function(_0x5868ca=''){return[this['a'],this['b']]['includes'](_0x5868ca);},'other':function(_0x1d1414=''){return _0x1d1414===this['a']?this['b']:_0x1d1414===this['b']?this['a']:'';}};let _0xfa6fc8=[{'buttonId':_0x2e6a35(0x57f),'buttonText':{'displayText':_0x2e6a35(0x679)},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],_0xfa6fc8,_0x2e6a35(0x349),'\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}break;}case _0x2e6a35(0x51b):case _0x2e6a35(0x6c0):{if(_0x522605[_0x2e6a35(0x555)])return _0x58f545('Features\x20Cannot\x20Be\x20Used\x20For\x20Groups!');this[_0x2e6a35(0x1d0)]=this[_0x2e6a35(0x1d0)]?this['anonymous']:{};let _0x27adbd=Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x1d0)])[_0x2e6a35(0x6e5)](_0x5528f4=>_0x5528f4[_0x2e6a35(0x4c9)](_0x522605[_0x2e6a35(0x224)]));if(!_0x27adbd){let _0x59815a=[{'buttonId':_0x2e6a35(0x354),'buttonText':{'displayText':_0x2e6a35(0x4fb)},'type':0x1}];await _0x56eed5['sendButtonText'](_0x522605[_0x2e6a35(0x687)],_0x59815a,_0x2e6a35(0x1e9)),_0x58f545(![]);}let _0x58814a=_0x27adbd[_0x2e6a35(0x63f)](_0x522605[_0x2e6a35(0x224)]);if(_0x58814a)await _0x56eed5[_0x2e6a35(0x5ed)](_0x58814a,_0x2e6a35(0x236),_0x522605);delete this[_0x2e6a35(0x1d0)][_0x27adbd['id']];let _0x221365=Object[_0x2e6a35(0x562)](this[_0x2e6a35(0x1d0)])[_0x2e6a35(0x6e5)](_0x56533f=>_0x56533f[_0x2e6a35(0x461)]===_0x2e6a35(0x6a8)&&!_0x56533f[_0x2e6a35(0x4c9)](_0x522605[_0x2e6a35(0x224)]));if(_0x221365){let _0x4ffc71=[{'buttonId':_0x2e6a35(0x51b),'buttonText':{'displayText':_0x2e6a35(0x6d8)},'type':0x1},{'buttonId':_0x2e6a35(0x57f),'buttonText':{'displayText':_0x2e6a35(0x679)},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x221365['a'],_0x4ffc71,'```Successfully\x20Found\x20Partner,\x20Now\x20You\x20Can\x20Send\x20Message```','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605),_0x221365['b']=_0x522605['sender'],_0x221365['state']=_0x2e6a35(0x1e4),await _0x56eed5[_0x2e6a35(0x35c)](_0x221365['b'],_0x4ffc71,'```Successfully\x20Found\x20Partner,\x20Now\x20You\x20Can\x20Send\x20Message```','\x20'+global[_0x2e6a35(0x295)]+'\x20',_0x522605);}else{let _0xbc373e=+new Date();this[_0x2e6a35(0x1d0)][_0xbc373e]={'id':_0xbc373e,'a':_0x522605['sender'],'b':'','state':_0x2e6a35(0x6a8),'check':function(_0x1e8aa3=''){const _0x501802=_0x2e6a35;return[this['a'],this['b']][_0x501802(0x34b)](_0x1e8aa3);},'other':function(_0xb0d63a=''){return _0xb0d63a===this['a']?this['b']:_0xb0d63a===this['b']?this['a']:'';}};let _0x3703be=[{'buttonId':_0x2e6a35(0x57f),'buttonText':{'displayText':_0x2e6a35(0x679)},'type':0x1}];await _0x56eed5[_0x2e6a35(0x35c)](_0x522605[_0x2e6a35(0x687)],_0x3703be,_0x2e6a35(0x349),'\x20'+global['botname']+'\x20',_0x522605);}break;}case _0x2e6a35(0x5fe):{if(!_0x3e9927)return _0x46a476(''+mess[_0x2e6a35(0x35e)]);_0x56eed5[_0x2e6a35(0x5fe)]=!![],_0x58f545(_0x2e6a35(0x156));}break;case'self':{if(!_0x3e9927)return _0x46a476(''+mess['owner']);_0x56eed5[_0x2e6a35(0x5fe)]=![],_0x58f545(_0x2e6a35(0x73f));}break;case _0x2e6a35(0x181):case _0x2e6a35(0x174):case'hug':case _0x2e6a35(0x2f0):case _0x2e6a35(0x45e):case _0x2e6a35(0x58a):case'bite':case _0x2e6a35(0x52d):case _0x2e6a35(0x3a3):case'bully':case _0x2e6a35(0x184):case _0x2e6a35(0x28c):case _0x2e6a35(0x2bb):case _0x2e6a35(0x438):case _0x2e6a35(0x343):case _0x2e6a35(0x704):case _0x2e6a35(0x747):case _0x2e6a35(0x409):case _0x2e6a35(0x5b9):case _0x2e6a35(0x3fb):case'glomp':case _0x2e6a35(0x464):case _0x2e6a35(0x543):case _0x2e6a35(0x24b):case _0x2e6a35(0x4aa):case'highfive':case _0x2e6a35(0x565):case _0x2e6a35(0x45d):case _0x2e6a35(0x55a):_0x58f545(mess['wait']),axios['get'](_0x2e6a35(0x3d7)+_0x24546f)[_0x2e6a35(0x446)](({data:_0x19a12e})=>{const _0x279a56=_0x2e6a35;_0x56eed5[_0x279a56(0x603)](_0x522605[_0x279a56(0x687)],_0x19a12e[_0x279a56(0x667)],_0x522605,{'packname':global['packname'],'author':global['author']});});break;case'waifu':case _0x2e6a35(0x722):_0x58f545(mess[_0x2e6a35(0x4eb)]),axios[_0x2e6a35(0x2e2)](_0x2e6a35(0x6a3))['then'](({data:_0x37262c})=>{const _0x3e24a5=_0x2e6a35;_0x56eed5[_0x3e24a5(0x32a)](_0x522605['chat'],_0x37262c[_0x3e24a5(0x667)],mess['success'],_0x522605);});break;break;case'setmenuxxx':if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x4d0));if(q==_0x2e6a35(0x59b))typemenu='image',_0x58f545(_0x2e6a35(0x539)+q);else{if(q==_0x2e6a35(0x6b2))typemenu=_0x2e6a35(0x6b2),_0x58f545(_0x2e6a35(0x539)+q);else q==_0x2e6a35(0x329)&&(typemenu=_0x2e6a35(0x329),_0x58f545(_0x2e6a35(0x539)+q));}break;case _0x2e6a35(0x713):case _0x2e6a35(0x69d):{if(!_0x203e2a)return _0x58f545(_0x2e6a35(0x3a4)+_0x24546f+_0x2e6a35(0x40a));_0x56eed5[_0x2e6a35(0x371)](_0x2e6a35(0x3dd),{'text':'*Bug\x20Report\x20From:*\x20wa.me/'+_0x522605[_0x2e6a35(0x224)][_0x2e6a35(0x3a8)]('@')[0x0]+_0x2e6a35(0x62c)+_0x203e2a}),_0x58f545(_0x2e6a35(0x3e4));}break;default:if(_0x42e8f6[_0x2e6a35(0x2a6)]('=>')){if(!_0x3e9927)return _0x58f545(mess[_0x2e6a35(0x35e)]);function _0x4e1963(_0x1bca5f){const _0x140314=_0x2e6a35;sat=JSON[_0x140314(0x5e8)](_0x1bca5f,null,0x2),bang=util[_0x140314(0x3b5)](sat),sat==undefined&&(bang=util[_0x140314(0x3b5)](_0x1bca5f)),_0x58f545(bang);}try{_0x58f545(util['format'](eval(_0x2e6a35(0x6cf)+_0x42e8f6[_0x2e6a35(0x195)](0x3)+_0x2e6a35(0x298))));}catch(_0x462db6){_0x58f545(String(_0x462db6));}}if(_0x42e8f6[_0x2e6a35(0x2a6)]('>')){if(!_0x3e9927)return _0x58f545(mess[_0x2e6a35(0x35e)]);try{let _0x973b3a=await eval(_0x42e8f6[_0x2e6a35(0x195)](0x2));if(typeof _0x973b3a!==_0x2e6a35(0x69f))_0x973b3a=require(_0x2e6a35(0x678))[_0x2e6a35(0x467)](_0x973b3a);await _0x58f545(_0x973b3a);}catch(_0x4e905c){await _0x58f545(String(_0x4e905c));}}if(_0x42e8f6[_0x2e6a35(0x2a6)]('$')){if(!_0x3e9927)return _0x58f545(mess[_0x2e6a35(0x35e)]);exec(_0x42e8f6['slice'](0x2),(_0x581d6a,_0x45ba58)=>{if(_0x581d6a)return _0x58f545(_0x581d6a);if(_0x45ba58)return _0x58f545(_0x45ba58);});}if(_0x522605[_0x2e6a35(0x687)]['endsWith'](_0x2e6a35(0x3a7))&&_0x215764){this[_0x2e6a35(0x1d0)]=this[_0x2e6a35(0x1d0)]?this[_0x2e6a35(0x1d0)]:{};let _0x49852d=Object['values'](this[_0x2e6a35(0x1d0)])[_0x2e6a35(0x6e5)](_0x1eec72=>[_0x1eec72['a'],_0x1eec72['b']]['includes'](_0x522605[_0x2e6a35(0x224)])&&_0x1eec72['state']===_0x2e6a35(0x1e4));if(_0x49852d){if(/^.*(next|leave|start)/[_0x2e6a35(0x19d)](_0x522605[_0x2e6a35(0x3e9)]))return;if([_0x2e6a35(0x1eb),'.leave',_0x2e6a35(0x2c0),_0x2e6a35(0x62b),_0x2e6a35(0x497),_0x2e6a35(0x208),'Lanjut',_0x2e6a35(0x734)][_0x2e6a35(0x34b)](_0x522605[_0x2e6a35(0x3e9)]))return;let _0x71081a=[_0x49852d['a'],_0x49852d['b']][_0x2e6a35(0x6e5)](_0x7aa57e=>_0x7aa57e!==_0x522605[_0x2e6a35(0x224)]);_0x522605[_0x2e6a35(0x27b)](_0x71081a,!![],_0x522605[_0x2e6a35(0x640)]&&_0x522605[_0x2e6a35(0x640)]['fromMe']?{'contextInfo':{..._0x522605[_0x2e6a35(0x72c)][_0x2e6a35(0x517)],'forwardingScore':0x0,'isForwarded':!![],'participant':_0x71081a}}:{});}return!0x0;}if(_0x215764&&_0x42e8f6[_0x2e6a35(0x248)]()!=undefined){if(_0x522605['chat'][_0x2e6a35(0x471)](_0x2e6a35(0x5cd)))return;if(_0x522605[_0x2e6a35(0x4a7)])return;let _0x2117b6=global['db'][_0x2e6a35(0x746)][_0x2e6a35(0x49d)];if(!(_0x42e8f6['toLowerCase']()in _0x2117b6))return;_0x56eed5['copyNForward'](_0x522605[_0x2e6a35(0x687)],_0x2117b6[_0x42e8f6['toLowerCase']()],!![]);}}}catch(_0x65939f){_0x522605[_0x2e6a35(0x4b7)](util[_0x2e6a35(0x3b5)](_0x65939f));}};function _0x21c7(_0x4dfaed,_0x3d2f2c){const _0x6fcc12=_0x6fcc();return _0x21c7=function(_0x21c7b2,_0x5a50ad){_0x21c7b2=_0x21c7b2-0x138;let _0x1b5079=_0x6fcc12[_0x21c7b2];return _0x1b5079;},_0x21c7(_0x4dfaed,_0x3d2f2c);}let file=require[_0x1946f4(0x3a2)](__filename);fs[_0x1946f4(0x4d3)](file,()=>{const _0x2ee091=_0x1946f4;fs[_0x2ee091(0x216)](file),console['log'](chalk[_0x2ee091(0x36d)]('Update\x20'+__filename)),delete require[_0x2ee091(0x5a7)][file],require(file);});function _0x6fcc(){const _0xf4c34a=['transformer','Send/Reply\x20Photo\x20With\x20Caption\x20','mute\x20off','🎮\x20Guess\x20The\x20Picture\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','upload_date','\x20me\x20...\x20','avatar','\x0a*Your\x20Potion*\x20:\x20','slow','uncaughtException','limit','Try\x20Searching\x20On\x20Google','setgruppp','What\x20Are\x20You\x20Looking\x20For??','lesbicheck','ttnowm','ttc','media','no\x20reason','artitarot','*\x0a```URL```\x20:\x20*','quotesanime','\x0a\x0a*Long*\x20:\x20','\x0a*INDOSIAR*\x20:\x20','\x0aVideo\x20Duration\x201-9\x20Seconds','*\x20:\x20','\x20fish\x202','Reply\x20Message','cutecheck','ramalnasib','taurus','tiktokaudio','pekerjaan_weton_lahir','americanflag','taliwangke','「\x20DATABASE\x20LIST\x20」\x0a\x0a','🐤\x20*Name\x20:*\x20','character','.start','\x0aReport\x20Message:\x20','blueBright','🎮\x20Guess\x20The\x20Sentence\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','\x0a\x20----------------------------------------------------------\x0a','https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html','whatsapp.com','\x20Has\x20Been\x20Unmuted\x20In\x20This\x20Group!','🎮\x20Guess\x20The\x20Riddle\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','Example\x20:\x20','Masukkan\x20query','couplepp','https://api.agify.io/?name=','./IMGDesc/user/limit.js','Time\x20Has\x20Run\x20Out\x0aAnswer:\x20\x20','\x0a\x0aTyped\x20*surrender*\x20to\x20surrender\x20and\x20admited\x20defeat','Use\x20Someone\x27s\x20Name,\x20Example\x20:\x20','rcti','groupSettingUpdate','application/vnd.android.package-archive','other','quoted','\x20domba\x202\x0a\x201\x20Sheep\x20=\x205000\x20money','Entered\x20Text\x20','You\x20Don\x27t\x20Have\x20A\x20Potion,\x20Try\x20Buying\x20It\x20This\x20Way\x20#buypotion\x20_amount_','kopi','rejeki','quoteanime','https://cililitan.herokuapp.com/api/readmore?teks=','watak_hari','\x20TITLE\x20:*\x20','meme','gold','docx','These\x20Are\x20The\x20Lyrics\x20Of\x20Which\x20Song?\x20:\x20*','\x0a*Permukaan_Laut*\x20:\x20','pasangan','You\x20Don\x27t\x20Have\x20Enough\x20Gold(s)\x20For\x20This\x20Transaction','peruntungan','No\x20Query\x20username,\x20Example\x20:\x20','*The\x20link\x20you\x20provided\x20is\x20not\x20valid*','album','userlimit','844446SFVtPQ','how','\x20Zenoi\x208,\x209,\x202005,\x20කැමති\x20නමක්\x20දාන්න\x20🥲,\x2016,\x2009,\x202004','readme','object','Example\x20:\x0a','ephemeral','listgc','juz-amma-arab-latin-indonesia.docx','\x27\x20From\x20The\x20Message\x20list','haribaik','./lib/uploader','*🐟Fish*\x20:\x20','blank','anime','https://fatiharridho.github.io/tebaklagu.json','perf_hooks','url','What\x20Manga\x20Are\x20You\x20Looking\x20For??','lolkey','judul','delttt','menu','\x20Has\x20Gone\x20Afk/Offline','\x20he\x20married\x20','reverse','\x20*Born\x20Wife\x20:*\x20','Successful\x20Closing\x20The\x20Group','Webtoons','What\x20Format\x20Do\x20You\x20Want?\x20?\x20Example\x20:\x20','verified','\x20*Personality\x20:*\x20','destiny','gaycheck','util','Stop\x20🛑','setdesc','\x20License\x20:\x20','status','./lib/y2mate','afkReason','dbinary','Owner\x20🦋','kala_tinantang','memancing','\x0a-\x20Lost\x20:\x20','jadwaltv','pdf','-filter:a\x20\x22atempo=1.6,asetrate=22100\x22','chat','7️⃣','_*SUIT\x20PvP*_\x0a\x0a@','Mode\x20Edit\x20Info','\x0aUsername\x20:\x20','./lib/binary','\x20potion\x202\x0a\x201\x20Potion\x20=\x20100000\x20Money','gameId','emerald','\x20*Sustenance\x20Direction\x20:*\x20','What\x20Is\x20The\x20Name\x20Of\x20This\x20Song?\x0a\x0aArtist\x20:\x20','joo','holoh','Example:\x0a','*------「\x20MANGA-SEARCH\x20」------*\x0a\x0a','fromObject','\x0a*Kelembapan*\x20:\x20','grouplink','*🐄Cow*\x20:\x20','Tag\x20Someone,\x20Example\x20:\x20','\x20*Husband\x27s\x20Name\x20:*\x20','download','report','\x0aAuthor:\x20DRIPS\x0aDibaca:\x20','string','Waiting\x20For\x20Partner','You\x20Have\x20No\x20Permission\x20To\x20Delete\x20This\x20Sticker\x20Command','*feature\x20error*','https://api.waifu.pics/sfw/waifu','unlinkSync',',\x20blood\x20-\x2010\x0a','./database/database.json','setdesk','WAITING','\x20*Character\x20:*\x20','\x0a*Your\x20Remaining\x20Chicken*\x20:\x20','\x0a*Your\x20Remaining\x20Rabbit(s)*\x20:\x20','type','templateButtonReplyMessage','ramalan_cinta','fbdl','couple','profilePic','list','pekerjaan','There\x20Are\x20Still\x20Unfinished\x20Sessions','xlsx','getQuotedObj','@g.us','transtv','\x20Category\x20:\x20','twitdl','\x20*Birth\x20Character\x20:*\x20','key','Success!\x20Your\x20Bood\x20Is\x20Full','waifus','20\x20More\x20Days','lanjut','premium','impressiveglitch','What\x20Are\x20you\x20Looking\x20For??','tgl_memancing','\x0a*INEWSTV*\x20:\x20','positif','lagu','license','Hash\x20Not\x20Found\x20In\x20Database','apkdl','\x20*Flower\x20:*\x20','\x0a\x0a*ᴄᴏᴅᴇᴅ\x20ʙʏ\x20ᴛʜᴀʀɪɴᴅᴜ\x20ʟɪʏᴀɴᴀɢᴇ*','heal','You\x20Don\x27t\x20Have\x20Enough\x20Cow(s)\x20For\x20This\x20Transaction','(async\x20()\x20=>\x20{\x20return\x20','*Failed\x20When\x20Downloading\x20Media\x20and\x20Sending\x20Files*','guess\x20song','Mode:\x20','motivasi','\x20*Name\x20:*\x20','suit\x20@','deletemsg','ID\x20:\x20','Skip\x20⏩','\x20ml\x20214885010\x202253','🥬With\x20Watermark🥬','10\x20More\x20Days','_[\x20INFO\x20]_\x0a','sifat','fromMe','Guess\x20The\x20Lyrics','female','https://api.xteam.xyz/attp?file&teks=','\x20Media\x20URL\x20:*\x20','HEAD','45\x20Months\x20More','find','schedule','\x20gold\x202\x0a\x201\x20Gold\x20=\x2050000\x20Money','-af\x20volume=12','settings','\x20packname|author','No\x20Hashes','Your\x20Blood\x20Is\x20Gone,\x20Try\x20To\x20Heal\x20Using\x20Potions','\x20*Life\x20Path\x20:*\x20','65\x20More\x20Days','\x20Source\x20:*\x20','\x20*Negative\x20Side\x20:*\x20','matri','No\x20Query\x20Url!','husbu','\x20*Dragon\x20Day\x20Direction\x20:*\x20','message','mimetype','animequote','\x20*Sector\x20:*\x20','*-----「\x20DRAKOR-SEARCH\x20」-----*\x0a\x0a','announcement','Complete\x20Your\x20Previous\x20Suit','homepage','\x0a-\x20Health\x20:\x20','Watch\x20🎥','\x20File\x20Name','Online\x20List:\x0a\x0a','grup','\x20*Results\x20:*\x20','hilih','smile','\x2094711502119','\x20VERSION:*\x20','sendMedia','fish','add','followers','versions','Reply\x20Text\x20With\x20Caption\x20','-filter:a\x20atempo=1.06,asetrate=44100*1.25','ceil','\x20*Info\x20:*\x20','soundcloud','Not\x20careful','Sent','bug','enable','Usage\x20Examples:\x0a','./storage/image/tropis.jpg','wattpad','\x20*Phone\x20Number\x20:*\x20','cancer','\x20Readme\x20:\x20','Enter\x20Text,\x20Example\x20:\x20','Send/Reply\x20Image\x20With\x20Caption\x20','https://api.lolhuman.xyz/api/wiki?apikey=','Successfully\x20Added\x20Message\x20In\x20Message\x20List\x20As\x20\x27','wallpaper\x20','rahasia_naga_hari','-af\x20equalizer=f=54:width_type=o:width=2:g=20','loli','lyrics\x20sorry','\x20muslim\x201','gclink','「\x20\x20','creator','chatModify','tgl_lahir','User\x27s\x20Inventory','no_watermark','msg','\x20*Search\x20Results\x20From\x20','bcall','lyrics','Use','\x20*Zodiac\x20:*\x20','profile_hd','WebMessageInfo','Stop','Reply\x20To\x20The\x20Audio\x20You\x20Want\x20To\x20Change\x20With\x20Caption\x20*','After\x20This\x20Command,\x20You\x20Too\x20','--help','\x2028,\x2012,\x202021','number','Guess\x20The\x20Word','lockcmd','react','delvote*\x20-\x20To\x20Delete\x20Vote\x20Session\x20\x0a\x20\x20\x20\x20-\x20coded\x20by\x20Tharindu\x20Liyanage','*NEED\x20TEXT*','Successful\x20Change\x20To\x20Self\x20Usage','berry','*Enter\x20a\x20Link\x20Query!*','sektor','full_name','glitch','sembuh','data','wave','*💎Your\x20Emerald*\x20:\x20','sendReadReceipt','*📆\x20Years\x20:*\x20','Where\x20Is\x20The\x20Text?','*👍🏻\x20Like\x20:*\x20','\x20Not\x20found*','https://www.anime-planet.com','mtype','ffmpeg\x20-i\x20','robot','\x0a\x0a-\x20','\x0a*Cuaca*\x20:\x20','squirrel','tebakgambar','.png?background=','\x20black\x20rover','playerX','ApkDown','updateBlockStatus','Broadcast\x20Success','\x20*Meaning\x20:*\x20','send5ButLoc','chatinfo','65\x20Months\x20More','No\x20Query\x20Title','Transaction\x20Successful\x20✔️\x0a*Your\x20Money*\x20:\x20','remove','\x0a🐤\x20*Owner\x20:*\x20@','description','analisa','google-it','20\x20Months\x20More','can','Successful\x20Change\x20To\x20Public\x20Usage','\x20Group\x0a\x0a','capricorn','\x20Professional\x20:\x20','\x20Private\x20:\x20','©ɢᴀʀꜰɪᴇʟᴅ\x20ʙᴏᴛ\x20ʟᴀᴛᴇꜱᴛ','Dizzy\x20Ah','3dscifi','promote','Your\x20Remaining\x20Money\x20Is\x20Not\x20Sufficient\x20For\x20This\x20Purchase','\x20ID\x20','currentTurn','_*No\x20Voting\x20In\x20This\x20Group!*_\x0a\x0a*','parse','tictactoe-','╚»˙·٠•●\x20','ramaljodoh','\x20Welcome\x20To\x20Anonymous\x20Chat\x0a\x0aClick\x20The\x20Button\x20Below\x20To\x20Find\x20A\x20Partner```','kecocokannama','sentence','./storage/image/rimba.jpg','sifat_usaha_bisnis','\x20*Analysis\x20:*\x20','\x20URL:*\x20\x0a*\x20','Reply\x20Message!!','magenta','Fall\x20while\x20hunting','\x20User\x20Name\x20:\x20','\x20කැමති\x20නමක්\x20,\x208,\x209,\x202005','./storage/image/padang_rumput.jpg','kill','.webp','Transaction\x20Successful\x20✔️\x0a*Your\x20Remaining\x20Money*\x20:\x20','Game\x20Has\x20Ended','kehilangan','*🐔Chicken*\x20:\x20','shift','Antilink\x20Inactive\x20!','guess','Reply\x20Message!','\x0a🐤\x20*Chat\x20:*\x20https://wa.me/','guess\x20picture','\x0a*TVRI*\x20:\x20','cry','1030956TZaMFM','ramalanjodoh','bonk','apk','rate','gambar','Good\x20afternoon\x20🌅','Both\x20Players\x20Don\x27t\x20Want\x20To\x20Play,\x0aSuit\x20Canceled','\x20ZENOI\x20','\x0a*Longitude*\x20:\x20','\x20Media\x20Url\x20:\x20','bcgc','*Please\x20wait,\x20sending\x20repository..*','pasangan_zodiak','glow','\x0a│\x20\x0a└────\x0a\x0a*','25\x20More\x20Days','hari_sangar_taliwangke','aov','slice','autobio','9️⃣','./lib/myfunc2','age','mining','APIKeys','stalker','test','tagme','sticker','katasenja','bgBlue','Ohhh\x20I\x20See:(','\x0a🐤\x20*User\x20:*\x20@','destiny_desire','elephant','Good\x20Night\x20🌒','tiktokdlv3','all','Please\x20Select\x20\x0aRock🗿\x0aPaper📄\x0aScissors✂️','*---「\x20CHARACTER-SEARCH\x20」---*\x0a\x0a','\x0a*SOURCE*\x20:\x20','playerO','fast','\x0a*TRANS7*\x20:\x20','Cannot','nasib','tebakkata','toUpperCase','Close','transliteration','Open','/api/nickff','application/pdf','inSurah','christmasholiday','Antilink\x20Mode','hunting','*Jadwal\x20Tv\x20Hari\x20Ini*\x0a*ANTV*\x20:\x20','\x20*Dragon\x20Day\x20:*\x20','gemini','mine','\x0a*Your\x20Remaining\x20Gold(s)*\x20:\x20','/downloader/instastory','tiktokwatermark','\x0a\x0a@','videoMessage','🎮\x20Math\x20Quiz\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Send\x20','karakter','\x0a❌:\x20@','google','🎮\x20Guess\x20The\x20Blank\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a*','result','Activated','\x0aAnswer\x20:\x20How\x20','awesomecheck','suami','kategori','anonymous','30\x20More\x20Days','/downloader/instagram2','subject','Jungle','\x206,\x2012,\x202020','?text=*Hello🦋*','.mp4','perhitungan_feng_shui','You\x20Have\x20No\x20Permission\x20To\x20Change\x20This\x20Sticker\x20Command','*🎥\x20Genre\x20:*\x20','arti_nama','I\x20Don\x27t\x20Know,\x20Ask\x20Your\x20Father','00\x2012\x20*\x20*\x20*','\x20iron\x202\x0a\x201\x20Iron\x20=\x2015000\x20Money','\x20@ZENOI','-filter:v\x20\x22minterpolate=\x27mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\x27\x22','\x0aඕක\x20සතියයි\x20❤️🌹','potensi_keberuntungan','sapi','CHATTING','kelinci','19:00:00','info','\x20Packname\x20:\x20','```You\x20Are\x20Not\x20In\x20An\x20Anonymous\x20Session,\x20Press\x20The\x20Button\x20To\x20Find\x20A\x20Partner```','\x20Author*\x20:\x20','.next','*Wounded*\x20:\x20','*What\x20Is\x20The\x20Result\x20Of:\x20','Drakor','ramalan_jodoh','SHA256\x20Hash\x20Missing','upvote','fengshui','moment-timezone','\x20you\x20fuck\x20her\x20lol\x20','pushName','creation','/api/nickpb','coffee','unlocked','./TempCloud/vn/@94711502119.mp3','participant','Name\x20:\x20','waifu','drakor','https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=','inventori','Please\x20Answer\x20The\x20Questions\x20Above\x0a\x0aDescription\x20:\x20','/api/','/api/downloader/twitter','user_id','Done!','sketch','morrow','Keluar','off','\x20*Group\x20:*\x20','Group\x20Is\x20Installed\x20With\x20Anti-Link\x20But\x20I\x20Won\x27t\x20Kick\x20You\x20😉,\x20Because\x20You\x20Are\x20An\x20Admin\x20Of\x20The\x20Group❤️','Guess\x20The\x20Picture','It\x27s\x20Okay','pilih2','\x20first\x20time\x20out\x20in\x20anime\x20is\x20cute\x20too\x20❤️\x20❤️\x20❤️\x20so\x20AAAAAAAH\x20','\x0a\x0a\x20','.net','headers','\x20*Lucky\x20Numbers\x20:*\x20','nickname','All\x20Answers\x20Answered','unwatchFile','\x20*Notes\x20:*\x20','gajah','tiktoknowm','base64','Holy\x20Cow!\x20Really???','textpro','&query=','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*▊▊▊\x20TIKTOK\x20▊▊▊*\x0a\x0a*AUTHOR*\x20:\x20DRIPS\x0a*NICKNAME*\x20:\x20','kalimat','\x20*Day\x20Character\x20:*\x20','seconds','extendedTextMessage','Infinity','sender','Meadow','following','\x0a\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','sgif','scrape-primbon','*Remaining\x20blood*\x20:\x20','\x20DESCRIPTION\x20:*\x20','*🌟Your\x20Gold*\x20:\x20','\x0a\x0a┌〔\x20UPVOTE\x20〕\x0a│\x20\x0a┃╠\x20Total:\x20','harisial','thumbnail','=>\x20From','size','jooxdl','Invalid\x20Link!','\x0a*Emerald*\x20:\x20','style','```Partner\x20Has\x20Left\x20Anonymous\x20Session```','1\x20More\x20Year','\x0a\x0aWaiting\x20For\x20The\x20Opponent\x20To\x20Choose','\x20*Zodiac\x20Couple\x20:*\x20','\x20*Aroma\x20:*\x20','\x20${global.emoji01}\x20Media\x20Url\x20:\x20','linkgroup','family100','filesizeF','*------「\x20WEBTOONS-SEARCH\x20」------*\x0a\x0a','\x20Win\x20\x0a','snippet','https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf','darahawal','\x20:\x20','devote','kitsune-api','Couple\x20Female🙎🏻‍♀️','toLowerCase','artist','\x20Like\x20:\x20','cringe','tanggal_jadian_pernikahan','\x2012,\x201,\x202022,\x2028\x0a\x0aNote\x20:\x20','demote','nightcore','unmute','rezeki','./IMGDesc/user/darah.js','keys','cuaca','short','\x0a\x0aWant\x20To\x20Play?\x20Press\x20The\x20Button\x20Below','Limit\x20Reseted','Devote','\x20*Time\x20:*\x20','\x0a??\x20*Element\x20:*\x20','Enter\x20a\x20Link','wikimedia','Perfect\x20Player','length','tafsirmimpi','getMonth','-af\x20acrusher=.1:1:64:0:log','/downloader/musically','You\x20Don\x27t\x20Have\x20Enough\x20Emerald(s)\x20For\x20This\x20Transaction','hadist','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','instagram2','disable','nettv','No\x20Query\x20id,\x20Example\x20','\x20*Lifeline\x20:*\x20','sel','devote*\x20-\x20For\x20Devote\x0a*','translation','[\x20MINING\x20RESULT\x20]\x0a*Iron*\x20:\x20','user','-filter:a\x20\x22atempo=0.5,asetrate=65100\x22','wiki','zoneId','\x0a*DISLIKE*\x20:\x20','\x20*Wife\x27s\x20Name\x20:*\x20','\x0a-\x20Catastrophe\x20:\x20','4\x20More\x20Years','.\x20@','deskripsi','twittermp3\x20','toString','copyNForward','Anime','TicTacToe🎮\x20Session\x20Does\x20Not\x20Exist','.mp3','cocokpasangan','filter','Deactivated','push','attp4','listResponseMessage','\x0a*Dirawat*\x20:\x20','https://api.lolhuman.xyz/api/cuaca/','15\x20More\x20Days','scorpio','./lib/myfunc','ringtone','Question\x20:\x20Can\x20','wink','3ddeepsea','bluecircuit','close','\x20*Kua\x20Number\x20:*\x20','./IMGDesc/user/alat_tukar.js','bucinquote','private','\x20❤️\x20@','botname','\x0a\x0a(\x20Q.S\x20','sendVideoAsSticker','\x20})()','\x0a│\x0a│\x20\x0a└────\x0a\x0a*','email','animequotes','groupParticipantsUpdate','Reply\x20Message\x20You\x20Want\x20To\x20Save\x20In\x20Database','Features\x20Cannot\x20Be\x20Used\x20For\x20Groups!','PLAYING','\x20*Day\x20Of\x20Birth\x20:*\x20','\x20ff\x20552992060','play','*?\x0aTime\x20:\x2060\x20seconds','Script\x20🌈','\x20Refuse\x20Suit,\x20Suit\x20Canceled','startsWith','tiktokwm\x20','\x20Year.\x0a\x0a_Quick,\x20Quick,\x20Repent\x20Bro,\x20Because\x20No\x20One\x20Knows\x20About\x20Death_','5️⃣','\x20emerald\x202\x0a\x201\x20Emerald\x20=\x20100000\x20Money','juz-amma-arab-latin-indonesia.xlsx','https://api.lolhuman.xyz/api/corona/global?apikey=','video/mp4','hidetag','*?\x0a\x0aTime:\x20','harinaga','smooth','\x0a*Hash\x20List*\x0aInfo:\x20*bold*\x20hash\x20is\x20Locked\x0a','free','\x20To\x20Play\x20Suit\x0a\x0aPlease\x20@','tiktok.com','fileSha256','petung_hari_baik','\x0a│\x20\x0a└────\x0a\x0a┌〔\x20DEVOTE\x20〕\x0a│\x20\x0a┃╠\x20Total:\x20','antv','pinterest','poke','「\x20*ALL\x20LIMIT\x20USER*\x20」\x0a\x0a','aries','\x20chicken\x202\x0a\x201\x20Chicken\x20=\x202500\x20Money','buy','.stop','\x20Like*\x20:\x20','\x20file\x20name\x0a\x0aView\x20Message\x20List\x20With\x20','emoji02','\x20Started\x20Mining🎣','CATEGORY:\x20','guess\x20blank','botAdmin','「\x20*Tafsir\x20Surah*\x20\x20」\x0a\x0a*Short*\x20:\x20','*◻️️Your\x20Iron*\x20:\x20','onlinelist','\x20*Planet\x20:*\x20','listcmd','5\x20More\x20Days','\x0a*You\x20Don\x27t\x20Have\x20Enough\x20Emerald(s)\x20For\x20This\x20Transaction*\x20:\x20','_currentTurn','Time\x20Out\x0aAnswer:\x20\x20','\x20*Date\x20:*\x20','messageContextInfo','*ＦＢ\x20ＶＩＤＥＯ\x20𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝖾𝗋*\x0a\x0a','users','/api/nickml','\x0a🐤\x20*Member\x20:*\x20','imageMessage','\x0a*\x20','./IMGDesc/user/monay.js','50\x20Months\x20More','match','zodiac','groupAcceptInvite','Character','Guess\x20The\x20Riddle','\x0aIn\x20','Antilink\x20Active\x20!','get','readmore','groupInviteCode','twitter\x20','thumb','cocoknama','https://cililitan.herokuapp.com/api/attp?teks=','I\x20Dont\x20Know','*🐑Sheep*\x20:\x20','ikan','(Some\x20Answers\x20Have\x20Spaces)','Next\x20Image\x20➡️','kelompok','Group\x20Is\x20Installed\x20With\x20Anti-Link\x20But\x20I\x20Won\x27t\x20Kick\x20You\x20😉,\x20Because\x20You\x20Sent\x20This\x20Group\x20Link❤️','pat','readTimestamp','bab','You\x20Don\x27t\x20Have\x20Enough\x20Chicken(s)\x20For\x20This\x20Transaction','editinfo\x20close','./IMGDesc/user/limit.json','Hunt\x20Again️🏹','75\x20Months\x20More','\x20*Born\x20:*\x20','maintainers','energi_negatif','performance-now','*Location*\x20:\x20','./TempCloud/logo.png','*Example\x20:\x20','pclist','/api/random/','group','open','What\x20Do\x20You\x20Want\x20To\x20Sell??\x0aExample\x20:\x20','groupUpdateDescription','conversation','karakteristik','nowatermark','trim','dibaca','🎮\x20Guess\x20The\x20Music\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','?apikey=','deletevote','donlod','*🐘Elephant*\x20:\x20','author','\x20Has\x20Been\x20Muted\x20In\x20This\x20Group\x20!','_Who\x20Do\x20You\x20Want\x20To\x20Challenge?_\x0aTag\x20The\x20Person..\x0a\x0aExample\x20:\x20','modified','What\x20Anime\x20Are\x20You\x20Looking\x20For??','Enter\x20Query\x20Text!','alquran','\x0a*KOMPASTV*\x20:\x20','Your\x20Daily\x20Limit\x20Has\x20Expired','-filter:a\x20\x22atempo=0.7,asetrate=44100\x22','guess\x20word','Wattpad','sifat_karakter_tanggal_lahir','ebinary','100','like','bussines','map','\x20Singer\x20:\x20','ttwm','\x20aaaaaah\x20❤️\x20❤️\x20❤️\x20YEAAAAAAAAAAAH\x20I\x20STILL\x20HAVE\x20','\x20කැමති\x20නමක්\x20','\x0aAnswer\x20:\x20','singleSelectReply','textmaker','/textpro/','catalog','sendImage','hornycheck','830855ffWaMv','catatan','up_at','.jpg','mimpi','Of\x20Course\x20You\x20Can!!!','\x20after\x20','chicken','\x20Title*\x20:\x20','\x20I\x20don\x27t\x20want\x20to\x20give\x20up\x20','「\x20*LEADERBOARD*\x20」\x0a\x0a','\x20FILESIZE:*\x20','kehancuran','\x20*Profession\x20:*\x20','getmsg\x20','replace','\x20┗━\x20','sctv','=>\x20In','green','waktu_milih','Couple\x20Male🙎🏻‍♂️','\x0aYou\x20Came\x20Back\x20Online\x20From\x20AFK','slap','selectedRowId','\x20Chat\x0aFinish\x20Time\x20','*File\x20Over\x20Limit*\x20','Answer:\x20','\x20drips\x20hi*','```Please\x20Wait,\x20Looking\x20For\x20A\x20Partner```','wallpaper','includes','emoji01','log','Use\x20Text,\x20Example\x20:\x20','filesize','kekayaan','setgcname','years','\x20*Tarot\x20Symbol\x20:*\x20','start','huluh','No\x20Name','Please\x20Answer\x20The\x20Following\x20Question\x0a\x0a','*\x20Answer\x20','\x0aAnswer\x20:\x20*','\x0a➸\x20*Limit*\x20:\x20','The\x20Message\x20Was\x20Not\x20Sent\x20By\x20A\x20Bot!','sendButtonText','blowjob','owner','primbon_arah_rejeki','*\x0a\x20```File\x20Size```\x20:\x20*','Private\x20Chat','\x20Keywords\x20:\x20','unblock','\x20*Number\x20:*\x20','from','simbol_tarot','ramaljodohbali','setexif','tahun_lahir','50\x20More\x20Days','sektor_buruk','90\x20Months\x20More','redBright','hadis','harisangar','\x0a\x0a────────────────────────\x0a\x0a','sendMessage','suitpvp','checkvote','\x20*Positive\x20Energy\x20:*\x0a-\x20Riches\x20:\x20','_[\x20👩🏻‍💼INFO\x20USER👨🏻‍💼\x20]_\x0a\x0a','audio/mp4','\x20Author\x20:\x20','Amazon\x20forest','ppcouple','desc','name','lontong_desk','donlod\x20','\x20Answer\x20','aquarius','webtoon','sisi_positif','\x20Album\x20:\x20','\x20Title\x20:\x20','child_process','naturalleaves','others','𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣\x20𝗏8.0','created','antilink','vote*\x20-\x20To\x20Start\x20Voting','npm','\x0a*Your\x20Remaining\x20Sheep(s)*\x20:\x20','git','Off','*❤️Your\x20Blood*\x20:\x20','6️⃣','The\x20Patient,\x20Boss:(','\x0a*TRANSTV*\x20:\x20','black','\x0a*Your\x20Remaining\x20Iron(s)*\x20:\x20','2️⃣','weton','kecocokan_nama_pasangan','https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/','delvote','PHOTO','planet_yang_mengitari','hapusvote','error','The\x20Day\x20After\x20Tomorrow','https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx','entries','*-------「\x20ANIME-SEARCH\x20」-------*\x0a\x0a','resolve','neko','Enter\x20The\x20Bug\x0a\x0aExample:\x20','\x0a\x20LYRICS\x20:\x20','\x20*Characteristics\x20:*\x20','@s.whatsapp.net','split','/downloader/tiktok','\x20ALSO\x20NOT\x20THE\x20SAME\x20AAAAAAAAAAAAAAH','African\x20forest','lovelycheck','malapetaka','1UVVaBC','permukaan_laut','shio','delttc','tiktoknowm\x20','Successfully\x20Opened\x20Edit\x20Group\x20Info','leave','format','\x0a\x20*TITLE\x20:*\x20*','stickergif','arti','link\x20github\x20\x20EXAMPLE:\x20https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8','video','participants','*Sorry\x20Future\x20Error*','./IMGDesc/user/buruan.js','foggywindow','coffe','Enter\x20The\x20Group\x20Link!','tebakan','weton_jawa','genre','kerja','gtv','ig2','Reply\x20Video/Image\x20With\x20Caption\x20','4️⃣','\x0a\x0aWaiting\x20@','\x20bukhari\x201\x0a','buttonsResponseMessage','updateProfilePicture','virgo','beautifulcheck','tagall','55\x20More\x20Days','*📫\x20Title\x20:*\x20','indosiar','quality','18:00:00','.m4a','*Downloading\x20From\x20','https://api.waifu.pics/sfw/','random','_\x0a\x0aBy\x20\x27','join','halloweenskeleton','male','94711502119@s.whatsapp.net','cinta','ramalannasib','Good\x20afternoon\x20🌞','prefix','\x0a*Dead\x20At\x20Age\x20:*\x20','Guess\x20The\x20Sentence','Successfully\x20Reported\x20To\x20The\x20Owner\x0a\x0aPlease\x20Make\x20Sure\x20The\x20Bug\x20Is\x20Valid,\x20If\x20You\x20Play\x20With\x20This,\x20Use\x20This\x20Feature\x20Again\x20And\x20Again\x20For\x20No\x20Reason,\x20You\x20Will\x20Be\x20Blocked\x20For\x20Sure\x20!','@bochilteam/scraper','endLimit','Enter\x20The\x20enable/disable\x20Values','\x20*Gender\x20:*\x20','text','\x20elephant\x202\x0a\x201\x20Elephant\x20=\x2015000\x20Money','\x0a*Latitude*\x20:\x20','\x20UPDATE:*\x20','./IMGDesc/user/hasil_buruan.json','tanggal','-filter_complex\x20\x22afftfilt=real=\x27hypot(re,im)*sin(0)\x27:imag=\x27hypot(re,im)*cos(0)\x27:win_size=512:overlap=0.75\x22','terjawab','\x20rabbit\x202\x0a\x201\x20Rabbit\x20=\x203000\x20Money','\x20Name,\x20tanggal\x20lahir,\x20bulan\x20lahir,\x20tahun\x20lahir,\x20untuk\x20tahun','pinterestdl','\x20aov\x20293306941441181','\x0aIt\x27s\x20been\x20','suit','*▊▊▊APK\x20DOWNLOAD▊▊▊*\x0a\x0a*\x20','messages.upsert','\x20Xeon','magma','smug','/zipball','_*Suit\x20Results*_','dl_link','masa_subur','wikipedia','Group\x20Is\x20Installed\x20With\x20Anti-Link\x20But\x20I\x20Won\x27t\x20Kick\x20You\x20😉,\x20Because\x20You\x20Are\x20My\x20Owner\x20Hahahahah🤣😘,\x20You\x20Think\x20I\x20Will\x20Betray\x20You\x20Huh\x20','\x0aUrl:\x20','listpc','\x20Hasindu\x20','```Successfully\x20Found\x20Partner,\x20Now\x20You\x20Can\x20Send\x20Message```','application/zip','\x20*Percentage\x20:*\x20','DD/MM/YYYY\x20HH:mm:ss','awoo','\x20Menu\x20Error','surah','packname','\x27\x20Not\x20Listed\x20In\x20The\x20Message\x20List','*Wrong\x20Answer!*','\x20*Born\x20Couple\x20:*\x20','\x20Title\x20:*\x20','kuismath','1266688BBbiRU','\x20To\x20Type\x20Accept/Reject','Guess\x20The\x20Song','\x0a*Indonesia*\x20:\x20','./Config','\x20limit\x202\x0a\x201\x20Limit\x20=\x2035000\x20Money','mute\x20on','Successfully\x20Deleted\x20The\x20Vote\x20Session\x20In\x20This\x20Group','\x20hinata','Incorrect\x20Format!','soal','https://raw.githubusercontent.com/xmodules/fungames/main/GuessTheSentence.js','https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra','File\x20Over\x20Limit\x20','https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json','\x0a*Your\x20Remaining\x20Cow(s)*\x20:\x20','Time\x20Out\x0aAnswer:\x20','zenz','exec','\x20First\x20Day\x20Of\x20Menstruation\x20Cycle','Enter\x20Reason\x20For\x20Vote,\x20Example:\x20*','Manga','\x0a*QUALITY*\x20:\x20nowatermark\x0a*COMMENTS*\x20:\x20','juz-amma-arab-latin-indonesia.pdf','\x0a*CREATE*\x20','audio/mpeg','delete','Surrender!','Can','admin','Follow\x20Us\x20ℹ️\x20','guess\x20sentence','checkdeath','math\x20mode','https://textpro.me/create-impressive-glitch-text-effects-online-1027.html','*\x0a\x0aName\x20:\x20','_The\x20Opponent\x20Has\x20Chosen_\x0aNow\x20It\x20Is\x20Your\x20Turn','jenis_kelamin','nom','You\x20Have\x20Chosen\x20','messages','domba','Next\x20➡️','\x20*When\x20Challenged\x20:*\x20','Maybe\x20The\x20Message\x20You\x20Replied\x20Does\x20Not\x20Contain\x20The\x20Video\x20Search\x20Result','presences','append','\x20second','\x20Group\x20Link','nagahari','➸\x20*ID\x20:*\x20','twitter','then','*Wikipedia\x20🦋*\x0a\x0a','block','5\x20More\x20Years','quotes','\x0a*CAPTION*\x20:\x20','https://cililitan.herokuapp.com/api/texttopng2?teks=','For\x20What\x20Command?','libra','https://cililitan.herokuapp.com/api/texttopng?teks=','styletext','link','covidglobal','jam_baik','group\x20close','path','cod','\x207\x207\x202005','userName','_There\x20Are\x20Still\x20Votes\x20In\x20This\x20Chat!_\x0a\x0a*','\x20fish\x202\x0a\x201\x20Fish\x20=\x201500\x20Money','_Suit\x20Time\x20Out_','penyanyi','megumin','lick','Sent\x20Broadcast\x20To\x20','angin','state','\x20TITLE:*\x20','groupFetchAllParticipating','happy','iqra','\x0a*MNCTV*\x20:\x20','inspect','https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx','lirik','persentase_kecocokan','infochat','45\x20More\x20Days','\x20Click\x20the\x20button\x20below\x20to\x20choose*','webtonsearch','https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json','vote','endsWith','\x20\x20」\x0a\x0a','-af\x20atempo=4/4,asetrate=44500*2/3','&ayat=','addmsg','\x0aINFORMATION:\x20','listonline','\x0aWant\x20To\x20Play\x20Again?\x20PressThe\x20Button\x20Below','\x20cod\x206290150021186841472','\x20*Good\x20Sector\x20:*\x20','angka_akar','\x20*Date\x20Of\x20Birth\x20:*\x20','setname','Successfully\x20Closed\x20Edit\x20Group\x20Info','\x20\x20©\x20」\x0a\x0a','\x20Full\x20Name\x20:\x20','earrape','Download\x20From\x20','downloadAndSaveMediaMessage','Pierced\x20by\x20a\x20thorn\x20while\x20hunting','https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json','reduce','subname','axios','sifatusaha','https://api.lolhuman.xyz/api/jadwaltv/now?apikey=','Invalid\x20Position','pindl','You\x20Are\x20Still\x20In\x20The\x20Game','delmsg','\x20Caption*\x20:\x20','*🤴🏻\x20Creator\x20:*\x20','\x20Lost\x20\x0a','groupUpdateSubject','./storage/image/afrika.jpg','twitteraudio','Which\x20Hadith??\x0a\x0aExample:\x0a','linkgc','Cari\x20Partner','selectedButtonId','*\x0a```Quality```\x20:\x20*High*\x0a','_[\x20HUNT\x20RESULT\x20]_\x0a','\x201\x202\x0a\x0aThen\x20The\x20Result\x20Is\x20The\x20Interpretation\x20Of\x20Surah\x20Al-Fatihah\x20Verse\x202','kompastv','database','bgWhite','𝖦𝖠𝖱𝖥𝖨𝖤𝖫𝖣','concat','100\x20More\x20Days','Rate\x20:\x20','wattpadsearch','delvote*\x20-\x20To\x20Delete\x20Vote\x20Session','bgGreen','➡️Next\x20Image➡️','isBaileys','bio_url','audioMessage','cuddle','hari_lahir','CLICK\x20HERE','baitfood','Generated\x20Random\x20','publish','./storage/image/pegunungan.jpg','blown','jumlah_neptu','It\x27s\x20Difficult\x20Bro','\x20belanja','render','Text\x20Pro\x20','reply','*RCTI*\x20:\x20','toFixed','\x20*Shuzi\x20Angka\x20Figures\x20:*\x20','math','scdl','suami_istri','listmsg','solusi','igdl2','\x20*Husband\x20Born\x20:*\x20','uglycheck','\x20dan\x20\x0a@','\x20song\x0a\x0aOption\x20:\x20\x0a1.\x20music\x0a2.\x20picture\x20(indo)\x0a3.\x20word\x0a4.\x20sentence\x0a5.\x20lyrics\x20(indo)\x0a6.\x20blank\x20(indo)','getName','55\x20Months\x20More','catch','\x0aDon\x27t\x20tag\x20him!\x0aHe\x27s\x20in\x20AFK/Offline\x20','check','\x0aTime\x20:\x2060\x20seconds','\x0a*Gold*\x20:\x20','3dneonlight','\x20*Dream\x20:*\x20','leo','ＸＮＯＤＥＳ','1.\x20image\x0a2.\x20list\x0a3.\x20catalog\x0a\x0aExample\x20.setmenu\x20image','450876jEjmAI','Enter\x20Query\x20Title','watchFile','deep','\x20*Your\x20Name\x20:*\x20','audio','arahrezeki','You\x20Don\x27t\x20Have\x20Enough\x20Elephant(s)\x20For\x20This\x20Transaction','\x20URL\x20:*\x20','\x20Name','```You\x20Are\x20Not\x20In\x20An\x20Anonymous\x20Session,\x20Press\x20The\x20Button\x20To\x20Find\x20A\x20Partner\x20```','metallic','```Title```\x20:\x20*','Room\x20ID:\x20','\x20Started\x20Hunting\x20In\x20','Menu\x20🎉','\x20cow\x202\x0a\x201\x20Cow\x20=\x2010000\x20Money','\x20pb\x20riio46','sendTextWithMentions','istri','inewstv','\x20https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698','nama','\x20Followers\x20:\x20','energi_positif','\x20Group\x20Chat,\x20Finish\x20Time\x20','wait','./TempCloud/vid/','npm\x20i\x20-g\x20pm2\x20&&\x20pm2\x20start\x20index.js\x20&&\x20pm2\x20save\x20&&\x20pm2\x20logs','timeout','\x20..\x20you\x20believe\x20in\x20me\x20?\x20aaaaaaaaaaah\x20thanks\x20','\x0aTo\x20Download\x20Media,\x20Please\x20Click\x20One\x20Of\x20The\x20Buttons\x20Below\x20Or\x20Enter\x20The\x20ytmp3/ytmp4\x20Command\x20With\x20The\x20Url\x20Above\x0a','kestabilan','wandhdhdhdgy','3\x20More\x20Years','\x20Publish\x20:\x20','elemen','usaha','thunder','\x0aZone\x20:\x20','*🐇Rabbit*\x20:\x20','groupMetadata','Start\x20\x20${global.emoji02}','\x201\x202\x0a\x0aThen\x20The\x20Result\x20Is\x20Surah\x20Al-Fatihah\x20Verse\x202\x20Along\x20With\x20The\x20Audio,\x20And\x20The\x20Verse\x20Is\x20Just\x201','time','stalk','text2','group\x20open','Scratched\x20by\x20a\x20wild\x20animal','\x20URL*\x20:\x20','igdl','-filter:a\x20\x22atempo=1.63,asetrate=44100\x22','25\x20Months\x20More','nomerhoki','APIs','\x2012,\x201,\x202022','jawaban','*「\x20VOTE\x20」*\x0a\x0a*Reason:*\x20','stickermeme','ramalan_jodoh_bali','*▊▊▊\x20APK\x20DOWNLOAD\x20▊▊▊*','mysoulmate','\x20*Solution\x20:*\x20','naga_hari','\x20Modified\x20:\x20','*\x0a\x0a','afkTime','Invalid','chats','Audio\x20🎵','contextInfo','angka_shuzi','profesional','floor','next','jadiannikah','Turn\x20','game','\x20𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣\x20𝖡𝖮Т\x20','*Answer\x20The\x20Following\x20Questions\x20:*\x0a','./lib/ApkDown.js','10:00:00','Example\x20:\x207,\x207,\x202005','heleh','juz-amma-arab-latin-indonesia.pptx','©\x20Coded\x20by\x20Tharindu\x20Liyanage','\x20*Wedding\x20Date\x20:*\x20','You\x20Can\x20Only\x20Heal\x20When\x20Your\x20Blood\x20Is\x200','\x20*Your\x20Birth\x20:*\x20','Voting\x20Starts!\x0a\x0a*','\x0a⭕:\x20@','\x0aDivote:\x20','yeet','antilink\x20off','\x0a-\x20Percentage\x20:\x20','/downloader/joox','\x20Tharindu\x208,\x209,\x202005,\x20කැමති\x20නමක්\x20දාන්න\x20🥲,\x2016,\x2009,\x202004','Mountains','35\x20More\x20Days','Previously\x20Active','1️⃣','\x20abu-daud\x201\x0a\x0aOptions\x20Available:\x0aabu-daud\x0a1\x20-\x204590\x0aahmad\x0a1\x20-\x2026363\x0abukhari\x0a1\x20-\x207008\x0adarimi\x0a1\x20-\x203367\x0aibu-majah\x0a1\x20-\x204331\x0anasai\x0a1\x20-\x205662\x0amalik\x0a1\x20-\x201594\x0amuslim\x0a1\x20-\x205362','\x20Bio\x20Url\x20:\x20','decodeJid','Success\x20Changing\x20Menu\x20To\x20','peruntungan_tahun','angka_kua','manga','word','\x20Created\x20:\x20','/api/stalker/ig','Send\x20Image/Video\x20With\x20Caption\x20','Guess\x20The\x20Blank','3dgradient','dance','Enter\x20Query\x20Link!','●•٠·˙«╝\x20\x0a\x20\x0a\x20➲\x20*Message\x20:\x20','\x20tikus\x0a\x0aNote\x20:\x20For\x20Detail\x20https://primbon.com/shio.htm','apikey','\x0a*Angin*\x20','fat','nama_pasangan','jual','tiktokmp3\x20','Press\x20The\x20Button\x20Below','\x20*Link*\x20:\x20','zodiak','\x20*Text*','pisces','.pdf','*\x20🎼\x20\x20Quality\x20:*\x20','\x0a-----------------------------------------------------\x0a','isGroup','stickmeme','https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json','gclist','gluetext','handhold','Video\x20📽️','garis_hidup','angka_keberuntungan','You\x20Don\x27t\x20Have\x20Enough\x20Iron(s)\x20For\x20This\x20Transaction','\x20❤️\x20❤️\x20❤️\x20WANGY\x20WANGY\x20WANGY\x20WANGY\x20HU\x20HA\x20HU\x20HA\x20HU\x20HA,\x20aaah\x20the\x20smell\x20of\x20hair\x20','sisi_negatif','pilih','values','\x20Description\x20:\x20','https://chat.whatsapp.com/','shinobu','\x20(@','\x20*Element\x20:*\x20','winner','neondevils','success','7xUXeRr','kesehatan','./database/video.json','tvri','.zip','personality','mentionedJid','ummadl','\x20Won!','arti_kartu_tarot','ramalanjodohbali','waktu','sagittarius','https://coffee.alexflipnote.dev/random','biography','\x20Verified\x20:\x20','\x20is\x20my\x20face','fakeObj','\x0a*Sembuh*\x20:\x20','./lib/scraper','keluar','source','asal','\x20Ago\x0a*LIKES*\x20:\x20','persentase','./storage/image/amazon.jpg','mute','halah','Question\x20:\x20Is\x20','\x20DESCRIPTION:*\x20','\x20*Status\x20:*\x20','kiss','Download\x20Url\x20Instagram\x20From\x20','➸\x20*ID\x20:*\x20@','You\x20Don\x27t\x20Have\x20Enough\x20Rabbit(s)\x20For\x20This\x20Transaction','tictactoe','jsdom','blackpink','\x20*Positive\x20Side\x20:*\x20','「\x20ANTI\x20LINK\x20」\x0a\x0aYou\x20have\x20been\x20detected\x20sending\x20a\x20group\x20link,\x20sorry\x20you\x20will\x20be\x20kicked\x20!','🎮\x20Guess\x20The\x20Lyrics\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','lesbiancheck','423909PILtpH','bcgroup','img','latitude','\x0aBab:\x20','3dcrackedstone','image','\x20Chat\x0a\x0a','\x20Jawatimur','setgrouppp','turn','ttp1','title','Can\x20Only\x20Reply\x20To\x20Meessages\x20From\x20Bots','batu_keberuntungan','There\x20Are\x20Still\x20Unfinished\x20Sessions!','trap','Asia/Colombo','cache','360p','You\x27ve\x20Voted','exports','rejeki_hoki_weton','./lib/mediafire.js','🎮\x20Guess\x20The\x20Word\x20🎮\x0a\x0aCorrect\x20Answer\x20🎉\x0a\x0aWant\x20To\x20Play\x20Again?\x20Press\x20The\x20Button\x20Below','greenhorror','\x20Url\x20:\x20','\x0a🐤\x20*Made\x20:*\x20','hasOwnProperty','Start','nama_anda','I\x20Am\x20Not\x20An\x20Admin,\x20How\x20Could\x20I\x20Kick\x20Somebody\x20Who\x20Send\x20Link\x20😒','\x20Homepage\x20:\x20','Upvote','\x20Lyrics\x20:\x0a','wetonjawa','blush','send5ButImg','*📚\x20Url\x20:*\x20','3️⃣','You\x20Don\x27t\x20Have\x20Enough\x20Fish(es)\x20For\x20This\x20Transaction','Send/Reply\x20Text\x20With\x20Caption\x20','\x207,\x207,\x202005','antilink\x20on','locked','80\x20Months\x20More','nekos','\x20*Destiny\x20Desire\x20:*\x20','\x20will\x20i\x20get\x20married\x20','Tropical\x20forest','./storage/image/tambang.jpg','ytmp3\x20','\x27\x20Has\x20Been\x20Registered\x20In\x20The\x20Message\x20List','\x20Seconds','ayam','userReceipt','broadcast','Please\x20Select\x20\x0a\x0aRock🗿\x0aPaper📄\x0aScissors✂️','Slipped\x20into\x20the\x20abyss\x20while\x20hunting','Successful\x20Sending\x20Broadcast\x20To\x20','05:00:00','https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json','Asia/colombo','apkmod','How\x20Are\x20You?','http://Wa.me//','\x20*Color\x20:*\x20','\x20*Couple\x20Name\x20:*\x20','\x20type\x20id\x0a\x0aList\x20Type\x20:\x0a1.\x20ff\x20(Free\x20Fire)\x0a2.\x20ml\x20(Mobile\x20Legends)\x0a3.\x20aov\x20(Arena\x20Of\x20Valor)\x0a4.\x20cod\x20(Call\x20Of\x20Duty)\x0a5.\x20pb\x20(point\x20Blank)\x0a6.\x20ig\x20(Instagram)\x0a7.\x20npm\x20(https://npmjs.com)','\x20*Stone\x20:*\x20','\x20Bussines\x20:\x20','what','┃╠\x20','Suit\x20Has\x20Been\x20Sent\x20To\x20Chat\x0a\x0a@','guess\x20lyrics','limitawal','twittermp3','potion','upvote*\x20-\x20For\x20Upvote\x0a*','11136150SDFSAG','https://api.memegen.link/images/custom/-/','content-disposition','ramalan_nasib','stringify','del','picture','leaderboard','readFileSync','sendText','*error\x20while\x20sending\x20sticker*','caption','mnctv','-filter_complex\x20\x22areverse\x22','\x0aDescription\x20:\x20','Invalid\x20Date','ramalancinta','tafsir','./lib/tictactoe','Question\x20:\x20','long','\x20Didn\x27t\x20Choose\x20Suit,\x20Game\x20Over!','ownername','tebaklagu','Send\x20Broadcast\x20To\x20','Google\x20Search\x20Title\x20:\x20','public','greatcheck','nomor_keberuntungan','/api/stalker/npm','Group\x20Mode','sendImageAsSticker','perselisihan'];_0x6fcc=function(){return _0xf4c34a;};return _0x6fcc();}
//Coded by Tharindu Liyanage
case 'me':
case 'who is me':
case 'who':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command}`)
					const sarcasm = new Array ();
    sarcasm[0] = '*ලිංගික හැසිරීමකදි හෝ මුත්‍රා කිරීමේදී වේදනාවට පත්වන්නෙක් 🐖*';
    sarcasm[1] = '*HIV ආසාදිතයෙක් 🐮*'
    sarcasm[2] = '*ලිංගික ව්‍යවසායකයෙක්*'
    sarcasm[3] = '*පිස්සෙක 🌼*'
    sarcasm[4] = '*අර්බුදයට වගකිය යුත්තා 👴🏻*'
    sarcasm[5] = '*ලිංගික බෙලහීනතාවයෙන් පෙලෙන්නෙක් 🦒*'
    sarcasm[6] = '*සමලිංගිකයෙක් 🏳️‍🌈*'
    sarcasm[6] = '*කුක්කු පෙරේතයෙක් (කිරි පිටි)🐽*'
    sarcasm[7] = '*පිරිමි ගණිකාවක් 👤*'
    sarcasm[8] = '*නාකි මයිනගෙ ලඟම ඥාතියෙක් 🐧*'
    sarcasm[10] = '*හොරෙක් 🎗️*'
    sarcasm[11] = '*මුට රිලව කිව්වත් එකයි රිලවට මුගෙ නම කිව්වත් එකයි 🐒*'
    sarcasm[12] = '*මහබැංකුව හොරාකන්න රනිල්ට උදව් කරපු කෙනා 🐗*'
    sarcasm[13] = '*බෝම්බයක් 💣*'
    sarcasm[14] = '*ලිංගික ව්‍යවසායකයෙක් 💧*'
    sarcasm[15] = '*පෙට්‍රල් ජාවාරම්කාරයෙක් 🐖*'
    sarcasm[16] = '*බැසිල්ගෙ කපුට නාවන කෙනා 🦨*'
    sarcasm[17] = '*තෙල් නැවක අයිතිකාරයෙක් 🐱*'
    sarcasm[20] = '*බෝ ගහක් 🦢*'
    sarcasm[21] = '*ලිංගික ව්‍යවසායකයෙක් 💧*'
    sarcasm[22] = '*පෙට්‍රල් ජාවාරම්කාරයෙක් 🐖*'
    sarcasm[23] = '*වැඩිපුර පිහිටා ඇති ලිංගික අවයව නිසා මානසික පීඩනයෙක් පෙලෙන්නෙක් 🐎*'
    sarcasm[24] = '*HIV ආසාදිතයෙක් 💦*'
    sarcasm[25] = '*ගොනෝරියා ආසාදිතයෙක් 💧*'
    sarcasm[26] = '*සිෆිලිස් ආසාදිතයෙක් (RIP) 💐*'
    sarcasm[27] = '*ට්‍රයිකොමෝනියාසිස් ආසාදිතයෙක්(RIP) 🏳️*'
    sarcasm[28] = '*පුරුෂ යට ඇඳුම් හොරෙක් 🩳'
    sarcasm[29] = '*Zombie කෙනෙක්  🧟‍♂️*'
    sarcasm[30] = '*මම වගේ program එකක් 👽*'
    sarcasm[31] = '*මැරෙන්න හිතුනට කවදාවත් මැරෙන්න එපා 👽*'
    const refi = sarcasm[Math.floor(Math.random() * sarcasm.length)]
					GarfieldAdd.sendMessage(from, { text: `*${pushname} ඔයා* ${refi}` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @ZENOI`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','p, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					GarfieldAdd.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'stupid':
      case 'හුත්තා':
      case 'මෝඩ':
      case 'පිස්සා':
      case 'whotto':
      case 'whotta':
      case 'mf':
      case 'හුකන්නො':
      case 'ක්ක්ක්':
      case 'fuck':
      case 'පොන්නයා':
      case 'වේසිගෙ පුතා':
      case 'amor amor':
      case 'amor':
      case 'අමර':
      case 'අමර අමර':
      case 'boto':
      case 'කැරි බොටෝ':
      case 'කැරි බොටා':
      case 'whotto':
      case 'පකෝ':
      case 'හුත්තා':
      case 'වේසියෙ':
      case 'බොටා':
      case 'gandu':
      case 'madarchod':
      case 'බොටෝ':
      case 'wesiye':
      case 'pakaya':
      case 'hutta':
      case 'ponnaya':
      case 'පොන්නයා':
      case 'හුකහන්':
      case 'වේසි':
      case 'ක්ක්ක්ක්':
      case 'වේසිගෙ පුතා':
      case 'බිජ්ජා':
      case 'පකෝ':
      case 'හුත්තො':
      case 'hutto':
      case 'hukahan':
      case 'wesi':
      case 'behenchod':
      case 'behnchoda':
      case 'whotta':
      case 'kari bota':
      case 'පොන්න බොටා':
      case 'simp':
      case 'බොටෝ':
      case 'මෝඩ බොටා':
      case 'බොටා පොන්නයා':
      case 'වේස බොටා':
      case 'පිස්සු බොටා':
      case 'ගෙරි බොටා':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The *${command}* Here Is Your dad`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: `Yes ${command} +  is his father 💩`}, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, jawab,`Coded by Tharindu Liyanage` , m, {mentions: ments})
            }
            break
      case 'Thanks':
      case 'tnx':
      case 'තෑන්ක්ස්':
      case 'බොහොම ස්තූතියි':
      case 'Thank you':
      case 'tnks':{
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `*You are welcome 💙*`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '💙'}, type: 1 }
                    ]
                    await GarfieldAdd.sendButtonText(m.chat, buttons, jawab,`Coded by Tharindu Liyanage` , m, {mentions: ments})
            }
            break
             case 'alive': case 'bot':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TempCloud/logo.png')},
                            hydratedFooterText: `┌─
│ Hi ${pushname}  ${global.emoji01} 👋 
│ *INFO ℹ️ ${global.botname}*
│ ${global.emoji02} 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│ ${global.emoji02} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│ ${global.emoji02} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname} 
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│ ${global.emoji02} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│ ${global.emoji02} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│ ${global.emoji02} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
└┬──────────────
   │  ＧＡＲＦＩＥＬＤ  ＢＯＴ 2022
   └───────────────`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu 🎉',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'List Menu 🧬',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Owner 🦋',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GarfieldAdd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
            case 'list': case 'menu': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TempCloud/logo.png')}, 
                            hydratedFooterText: `
┌─
│ Hi  ${pushname} 👋 
│  *${global.botname}*
│ ${global.emoji02} 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│ ${global.emoji02} 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│ ${global.emoji02} 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname} 
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│ ${global.emoji02} 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${global.ownername}
│ ${global.emoji02} 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│ ${global.emoji02} 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│   *️${global.botname}  Created by ${global.ownername} ☘️*
│                         © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀʀꜰɪᴇʟᴅ ʙᴏᴛ
└┬──────────────
   │ Ｘ- ＮＯＤＥＳ
   └───────────────`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script 🌈',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'All Menu 🎉',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'List Menu 🧬',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Owner 🦋',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GarfieldAdd.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                break
                      break
                case 'command': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n\n`,
                    buttonText: "Menu",
                    footerText: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀʀꜰɪᴇʟᴅ`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Main Features",
								"rows": [
									{
										"title": "Main Menu 🦋",
										"description": "Displays The List Of Main Features of Garfield Bot",
										"rowId": `mainmenu`
									}
								]
							},
							{
								"title": "GarfieldBot Features 🌻",
								"rows": [
									{
										"title": "All Menu 🦁",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 🐣",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu 🐻",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "RPG Menu 🍄",
										"description": "Displays The List Of Rpg Features",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "Download Menu ⬇️",
										"description": "Displays The List Of Download Features",
										"rowId": `downloadmenu`
									},
									{
										"title": "Search Menu 🔍",
										"description": "Displays The List Of Searching Features",
										"rowId": `searchmenu`
									},
									{
											"title": "Random Menu 🎯",
										"description": "Displays The List Of Random Features",
										"rowId": `randommenu`
										},
										{
											"title": "Random Anime Menu 🥀",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `randomanimemenu`
										},
										{
											"title": "Fun Menu 🪁",
										"description": "Displays The List Of Fun Features",
										"rowId": `funmenu`
										},
										{
											"title": "Convert Menu 🔄",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu 📡",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu 🎙️",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "TXT-to-IMG Menu 📰",
										"description": "Displays The List Of Textpro Features",
										"rowId": `${prefix}textpromenu`
										},
										{
											"title": "Religious Menu 🚮",
										"description": "Displays The List Of Islamic Features",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "Horoscope Menu 🐻",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}horoscopemenu`
										}
								]
							},
							{
								"title": "Chat With Fellow Users 🦋",
								"rows": [
									{
										"title": "Anonymous Chat Menu 🐼",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Credit 🐞",
								"rows": [
									{
										"title": "Thanks To 💐",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            GarfieldAdd.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
                      case 'dev': case 'donate': case 'owner': case 'coder': {
                GarfieldAdd.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' }, caption: `- *Hi 🥰 I m*\n*ＮＯＩＺ Ξ*\n*I am 16 years old developer...*\n*From Sri Lanka 🇱🇰*\n*I am a Learning.*\n*Not more..*\n*Also I am Student*\n*Follow My Facebook - https://www.facebook.com/zenoixnoize*` }, { quoted: m })
            }
            break
            case 'sc': case 'script': {
                reply(`GitHub : https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8\n Dont Forget To Give Star\n\nFacebook : https://www.facebook.com/garfieldbots/ \nDont Forget To Like page`)
            }
            break
case 'allmenu': {
  	anu = `
┏━「 *𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮Т* 」━━ 
┃╔══「 *MAIN  ${global.emoji02}* 」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╠══ 「 *OWNER 🪁* 」 
┃╠  ${global.emoji01} chat [option]
┃╠  ${global.emoji01} join [link]
┃╠  ${global.emoji01} leave
┃╠  ${global.emoji01} block [user]
┃╠  ${global.emoji01} unblock [user]
┃╠  ${global.emoji01} bcgroup [text]
┃╠  ${global.emoji01} bcall [text]
┃╠  ${global.emoji01} setppbot [image]
┃╠  ${global.emoji01} setexif
┃╠══ 「 *GROUP ⚙️* 」       
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╠══「 *RPG 🎮* 」 
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} userlimit
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╠═ ©「 *DOWNLOADER ⬇️* 」
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [url]
┃╠══ 「 *SEARCHER 🔎* 」 
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╠══ 「 *RANDOM  ${global.emoji02}* 」
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╠═ ©「 *RANDOM ANIME 🌻* 」
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╠══ 「 *FUN 🎮* 」 
┃╠  ${global.emoji01} how [text
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} idiot
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╠═══ 「 *CONVERTER 🎳* 」 
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} url [reply img]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} meme (reply photo with text)
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╠  ${global.emoji01} styletext [text]
┃╠══ 「 *DATABASE 🧬* 」 
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╠═ ©「 *ANONYMOUS CHAT 🐥* 」
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╠═ ©「 *VOICE CHANGER 🎙️* 」
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╠══ 「 *HOROSCOPE 🔬* 」
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═══════
┗━「 *ＮＯＩＺ Ｅ 2022 ©*  」━©`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./TempCloud/logo.png')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Follow Us ℹ️ ',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner 🦋',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GarfieldAdd.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 MAIN  ${global.emoji02}*  」
┃╠  ${global.emoji01} alive
┃╠  ${global.emoji01} script
┃╠  ${global.emoji01} speedtest
┃╠  ${global.emoji01} ping
┃╠  ${global.emoji01} owner
┃╠  ${global.emoji01} menu
┃╠  ${global.emoji01} delete
┃╠  ${global.emoji01} chatinfo
┃╠  ${global.emoji01} quoted
┃╠  ${global.emoji01} listpc
┃╠  ${global.emoji01} listgc
┃╠  ${global.emoji01} donate
┃╠  ${global.emoji01} report [bug]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 GROUP 🍿 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(picak+'Rpg Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 RPG 🎮 」	        
┃╠  ${global.emoji01} hunting
┃╠  ${global.emoji01} mining
┃╠  ${global.emoji01} heal
┃╠  ${global.emoji01} limituser
┃╠  ${global.emoji01} profile
┃╠  ${global.emoji01} inventory
┃╠  ${global.emoji01} leaderboard
┃╠  ${global.emoji01} buy [option]
┃╠  ${global.emoji01} sell [option]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(picak+'Fun Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 FUN 🪁 」	        
┃╠  ${global.emoji01} how [text
┃╠  ${global.emoji01} when [text]
┃╠  ${global.emoji01} me(සිංහල)
┃╠  ${global.emoji01} who is @ (සිංහල)
┃╠  ${global.emoji01} is [text]
┃╠  ${global.emoji01} what [text]
┃╠  ${global.emoji01} can [text]
┃╠  ${global.emoji01} read more (text)
┃╠  ${global.emoji01} rate [text]
┃╠  ${global.emoji01} wangy [text]
┃╠  ${global.emoji01} beautifulcheck [tag]
┃╠  ${global.emoji01} awesomecheck [tag]
┃╠  ${global.emoji01} prettycheck [tag]
┃╠  ${global.emoji01} lesbiancheck [tag]
┃╠  ${global.emoji01} gaycheck [tag]
┃╠  ${global.emoji01} cutecheck [tag]
┃╠  ${global.emoji01} uglycheck [tag]
┃╠  ${global.emoji01} hornycheck [tag]
┃╠  ${global.emoji01} charactercheck [tag]
┃╠  ${global.emoji01} lovelycheck [tag]
┃╠  ${global.emoji01} couple
┃╠  ${global.emoji01} mysoulmate
┃╠  ${global.emoji01} hot
┃╠  ${global.emoji01} sexy
┃╠  ${global.emoji01} kind
┃╠  ${global.emoji01} handsome
┃╠  ${global.emoji01} beautiful
┃╠  ${global.emoji01} cute
┃╠  ${global.emoji01} pretty
┃╠  ${global.emoji01} lesbian
┃╠  ${global.emoji01} noob
┃╠  ${global.emoji01} bastard
┃╠  ${global.emoji01} foolish
┃╠  ${global.emoji01} nerd
┃╠  ${global.emoji01} asshole
┃╠  ${global.emoji01} gay
┃╠  ${global.emoji01} smart
┃╠  ${global.emoji01} stubble
┃╠  ${global.emoji01} dog
┃╠  ${global.emoji01} horny
┃╠  ${global.emoji01} cunt
┃╠  ${global.emoji01} wibu
┃╠  ${global.emoji01} tictactoe
┃╠  ${global.emoji01} delttt
┃╠  ${global.emoji01} guess [option]
┃╠  ${global.emoji01} math [mode]
┃╠  ${global.emoji01} suitpvp [tag]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break

case 'ownermenu':
var unicorn = await getBuffer(global.flaming)
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 OWNER 🐣 」	        
┃╠  ${global.emoji01} grouplink
┃╠  ${global.emoji01} ephemeral [option]
┃╠  ${global.emoji01} setgcpp [image]
┃╠  ${global.emoji01} setname [text]
┃╠  ${global.emoji01} setdesc [text]
┃╠  ${global.emoji01} group [text]
┃╠  ${global.emoji01} editinfo [option]
┃╠  ${global.emoji01} add [user]
┃╠  ${global.emoji01} kick [reply/tag]
┃╠  ${global.emoji01} hidetag [text]
┃╠  ${global.emoji01} tagall [text]
┃╠  ${global.emoji01} antilink [on/off]
┃╠  ${global.emoji01} mute [on/off]
┃╠  ${global.emoji01} promote [reply/tag]
┃╠  ${global.emoji01} demote [reply/tag]
┃╠  ${global.emoji01} vote
┃╠  ${global.emoji01} devote
┃╠  ${global.emoji01} upvote
┃╠  ${global.emoji01} checkvote
┃╠  ${global.emoji01} delvote
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(picak+'Downloader Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ 「 DOWNLOADER ⬇️ 」	        
┃╠  ${global.emoji01} ytmp3 [url|quality]
┃╠  ${global.emoji01} ytmp4 [url|quality]
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} apkmod (App Name)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} tiktok (Link)
┃╠  ${global.emoji01} play (Text)
┃╠  ${global.emoji01} insta (Text)
┃╠  ${global.emoji01} save (Video Link)
┃╠  ${global.emoji01} getmusic [yt link]
┃╠  ${global.emoji01} mediafire (Link)
┃╠  ${global.emoji01} fb(Link)
┃╠  ${global.emoji01} getvideo [yt link]
┃╠  ${global.emoji01} umma [Text]
┃╠  ${global.emoji01} joox [Text]
┃╠  ${global.emoji01} soundcloud [URL]
┃╠  ${global.emoji01} googledrive (URL)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 SEARCHER 🔎 」	        
┃╠  ${global.emoji01} play [Text]
┃╠  ${global.emoji01} song [Text]
┃╠  ${global.emoji01} music (Text)
┃╠  ${global.emoji01} apk (app name)
┃╠  ${global.emoji01} wattpad (Text)
┃╠  ${global.emoji01} photo (Text)
┃╠  ${global.emoji01} device (device name)
┃╠  ${global.emoji01} shorts (text YT)
┃╠  ${global.emoji01} apkmod (app name)
┃╠  ${global.emoji01} covid (Text)
┃╠  ${global.emoji01} wikipedia (Text)
┃╠  ${global.emoji01} yts [Text]
┃╠  ${global.emoji01} google [Text]
┃╠  ${global.emoji01} gimage [Text]
┃╠  ${global.emoji01} pinterest [Text]
┃╠  ${global.emoji01} wallpaper [Text]
┃╠  ${global.emoji01} wikimedia [Text]
┃╠  ${global.emoji01} ytsearch [Text]
┃╠  ${global.emoji01} ringtone [Text]
┃╠  ${global.emoji01} webtoon [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(picak+'Random Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RANDOM 🎡 」	        
┃╠  ${global.emoji01} coffee
┃╠  ${global.emoji01} animequote (Text)
┃╠  ${global.emoji01} couplepp
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(picak+'Random Anime Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔ ©「 RANDOM ANIME 🌸 」	        
┃╠  ${global.emoji01} loli
┃╠  ${global.emoji01} bully
┃╠  ${global.emoji01} cuddle
┃╠  ${global.emoji01} cry
┃╠  ${global.emoji01} hug
┃╠  ${global.emoji01} awoo
┃╠  ${global.emoji01} kiss
┃╠  ${global.emoji01} lick
┃╠  ${global.emoji01} pat
┃╠  ${global.emoji01} smug
┃╠  ${global.emoji01} bonk
┃╠  ${global.emoji01} yeet
┃╠  ${global.emoji01} blush
┃╠  ${global.emoji01} smile
┃╠  ${global.emoji01} wave
┃╠  ${global.emoji01} highfive
┃╠  ${global.emoji01} handhold
┃╠  ${global.emoji01} nom
┃╠  ${global.emoji01} glomp
┃╠  ${global.emoji01} bite
┃╠  ${global.emoji01} slap
┃╠  ${global.emoji01} kill
┃╠  ${global.emoji01} happy
┃╠  ${global.emoji01} wink
┃╠  ${global.emoji01} poke
┃╠  ${global.emoji01} dance
┃╠  ${global.emoji01} cringe
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(picak+'Text Pro Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═ ©「 LOGO MAKER 🦓 」	        
┃╠  ${global.emoji01} 3dchristmas [Text]
┃╠  ${global.emoji01} 3ddeepsea [Text]
┃╠  ${global.emoji01} americanflag [Text]
┃╠  ${global.emoji01} 3dscifi [Text]
┃╠  ${global.emoji01} 3drainbow [Text]
┃╠  ${global.emoji01} 3dwaterpipe [Text]
┃╠  ${global.emoji01} halloweenskeleton [Text]
┃╠  ${global.emoji01} sketch [Text]
┃╠  ${global.emoji01} bluecircuit [Text]
┃╠  ${global.emoji01} space [Text]
┃╠  ${global.emoji01} metallic [Text]
┃╠  ${global.emoji01} fiction [Text]
┃╠  ${global.emoji01} greenhorror [Text]
┃╠  ${global.emoji01} transformer [Text]
┃╠  ${global.emoji01} berry [Text]
┃╠  ${global.emoji01} thunder [Text]
┃╠  ${global.emoji01} magma [Text]
┃╠  ${global.emoji01} 3dcrackedstone [Text]
┃╠  ${global.emoji01} 3dneonlight [Text]
┃╠  ${global.emoji01} impressiveglitch [Text]
┃╠  ${global.emoji01} naturalleaves [Text]
┃╠  ${global.emoji01} fireworksparkle [Text]
┃╠  ${global.emoji01} matrix [Text]
┃╠  ${global.emoji01} dropwater [Text]
┃╠  ${global.emoji01} harrypotter [Text]
┃╠  ${global.emoji01} foggywindow [Text]
┃╠  ${global.emoji01} neondevils [Text]
┃╠  ${global.emoji01} christmasholiday [Text]
┃╠  ${global.emoji01} 3dgradient [Text]
┃╠  ${global.emoji01} blackpink [Text]
┃╠  ${global.emoji01} gluetext [Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 CONVERTER 🔃 」	        
┃╠  ${global.emoji01} image [reply stick]
┃╠  ${global.emoji01} sticker [reply img|gif]
┃╠  ${global.emoji01} emojimix [moji+moji]
┃╠  ${global.emoji01} emojimix2 [moji+moji]
┃╠  ${global.emoji01} video [reply img]
┃╠  ${global.emoji01} gif [reply stick]
┃╠  ${global.emoji01} url [reply media]
┃╠  ${global.emoji01} vn [reply aud]
┃╠  ${global.emoji01} mp3 [reply vn]
┃╠  ${global.emoji01} audio [reply vid]
┃╠  ${global.emoji01} meme(reply img)
┃╠  ${global.emoji01} ebinary [reply Text]
┃╠  ${global.emoji01} dbinary [reply Text]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔═══ 「 DATABASE 📎 」	        
┃╠  ${global.emoji01} setcmd
┃╠  ${global.emoji01} listcmd
┃╠  ${global.emoji01} delcmd
┃╠  ${global.emoji01} lockcmd
┃╠  ${global.emoji01} addmsg
┃╠  ${global.emoji01} listmsg
┃╠  ${global.emoji01} getmsg
┃╠  ${global.emoji01} delmsg
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 ANONYMOUS CHAT 🐋 」	        
┃╠  ${global.emoji01} anonymous
┃╠  ${global.emoji01} start
┃╠  ${global.emoji01} next
┃╠  ${global.emoji01} leave
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'islamicmenu':
var unicorn = await getBuffer(picak+'Islamic Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 RELIGIOUS 🚮 」	        
┃╠  ${global.emoji01} juzamma
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(picak+'Voice Changer Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 VOICE CHANGER 🎙️ 」	        
┃╠  ${global.emoji01} bass [reply aud]
┃╠  ${global.emoji01} blown [reply aud]
┃╠  ${global.emoji01} deep [reply aud]
┃╠  ${global.emoji01} earrape [reply aud]
┃╠  ${global.emoji01} fast [reply aud]
┃╠  ${global.emoji01} fat [reply aud]
┃╠  ${global.emoji01} nightcore [reply aud]
┃╠  ${global.emoji01} reverse [reply aud]
┃╠  ${global.emoji01} robot [reply aud]
┃╠  ${global.emoji01} slow [reply aud]
┃╠  ${global.emoji01} squirrel [reply aud]
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'horoscopemenu':
var unicorn = await getBuffer(picak+'Horoscope Menu')
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', `
┏━「 User ${pushname}  ${global.emoji01} 」━━ 
┃╔══  「 HOROSCOPE 🔬 」	        
┃╠  ${global.emoji01} nomorhoki (Text)
┃╠  ${global.emoji01} artimimpi (Text)
┃╠  ${global.emoji01} artinama (Text)
┃╠  ${global.emoji01} ramaljodoh (Text)
┃╠  ${global.emoji01} ramaljodohbali (Text)
┃╠  ${global.emoji01} suamiistri (Text)
┃╠  ${global.emoji01} ramalcinta (Text)
┃╠  ${global.emoji01} cocoknama (Text)
┃╠  ${global.emoji01} pasangan (Text)
┃╠  ${global.emoji01} jadiannikah (Text)
┃╠  ${global.emoji01} sifatusaha (Text)
┃╠  ${global.emoji01} rezeki (Text)
┃╠  ${global.emoji01} pekerjaan (Text)
┃╠  ${global.emoji01} nasib (Text)
┃╠  ${global.emoji01} penyakit (Text)
┃╠  ${global.emoji01} tarot (Text)
┃╠  ${global.emoji01} fengshui (Text)
┃╠  ${global.emoji01} haribaik (Text)
┃╠  ${global.emoji01} harisangar (Text)
┃╠  ${global.emoji01} harisial (Text)
┃╠  ${global.emoji01} nagahari (Text)
┃╠  ${global.emoji01} arahrezeki (Text)
┃╠  ${global.emoji01} peruntungan (Text)
┃╠  ${global.emoji01} weton (Text)
┃╠  ${global.emoji01} karakter (Text)
┃╠  ${global.emoji01} keberuntungan (Text)
┃╠  ${global.emoji01} memancing (Text)
┃╠  ${global.emoji01} masasubur (Text)
┃╠  ${global.emoji01} zodiak (Text)
┃╠  ${global.emoji01} shio (Text)
┃╚═════════════ 
┗━━「 User ${pushname}  ${global.emoji01} 」━©`,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
case 'helpers': case 'help': case 'project':
var unicorn = await getBuffer(picak)
await GarfieldAdd.send5ButImg(from, `` + '' + ' ', ` Garfield\nWhatsapp Bot\n From NOIZE Developers\n▰▰▰▰▰▰▰▰▰▰▰▰▰\nPowered By X Nodes\n▰▰▰▰▰▰▰▰▰▰▰▰▰\nAlways On First Whatsapp User Bot in Sri Lanka 🇱🇰 \n▰▰▰▰▰▰▰▰▰▰▰▰▰\nCoded by ZENOI 2022 ©\n▰▰▰▰▰▰▰▰▰▰▰▰▰ \nSPECIAL THANKS \n- ʜᴀꜱɪɴᴅᴜ ᴅɪɴᴜꜱʜᴀɴ , ʟᴀꜱɪɴᴅᴜ ɴᴇᴛʜꜱᴀʀᴀ, ᴍᴀʟᴇᴇꜱʜᴀ ɴᴇᴛʜꜱᴀʀᴀ , ꜱᴀʀᴀɴɪ ᴍᴇᴛʜꜱᴀᴅᴇᴇ,ꜱᴇᴡᴍɪ ᴍᴀʟᴇᴇꜱʜᴀ , ᴀꜰɴᴀ ᴘᴀʟɪᴋᴋᴀʟ , ꜰᴀʀʜᴀɴ , ᴀᴛᴛɪᴄᴜꜱ , ʙᴀɪʟᴇʏꜱ , ᴛʜɪᴄᴄʏ ,ʏᴜꜱᴜꜰᴜꜱᴛᴀ  `,unicorn, [{"urlButton": {"displayText": "Follow Us ℹ️ ","url": `${myweb}`}},{"urlButton": {"displayText": "Script 🌈","url": `${sc}`}},{"quickReplyButton": {"displayText": "Donate 🚀","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner 🦋","id": 'owner'}}] )
break
  case 'save': {

      

  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 

  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
  let noh = require('@bochilteam/scraper')                

  noh.savefrom(`${text}`).then(async (data) => {

  let sections = []   

  for (let i of data.url) {

  const list = {title: `${i.type}`,

  rows: [

	    {

	     title: `Quality ${i.subname}`, 

	     rowId: `${prefix}get ${text}`,

	     description: `${data.hosting}`	     

	    }, 

	    ]

     }

     sections.push(list)   

     }

  const sendm =  GarfieldAdd.sendMessage(

      m.chat, 

      {

       text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,

       footer: `©Coded by Tharindu Liyanage`,

       title: "*▊▊▊ SAVER ▊▊▊*",

       buttonText: "CLICK HERE",

       sections

      }, { quoted : m })                 

                }).catch((err) => {

                    m.reply(`*Sorry An Error Occurred*`)

                })

            }

            break		
case 'mediafire': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'

            
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 150) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*▊▊▊ MEDIAFIRE ▊▊▊*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait processing..._

*ＧＡＲＦＩＥＬＤ ＢＯＴ*`
m.reply(`${result4}`)
GarfieldAdd.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
case 'fb2': case 'facebook2': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'    
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${global.violkey}&url=${text}`)
                tummb = await getBuffer('https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png')    
                GarfieldAdd.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            break
case 'music': {
                if (!text) throw `Example : ${prefix + command} Ridma Weerawardena songs`
                let yts = require("yt-search")
                let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
                    let listmenuu = [`VIDEO MP4 🎼 : ${search.all[0].title}`,`SONG MP3 🎼 : ${search.all[1].title}`,`VIDEO MP4 🎼 : ${search.all[2].title}`,`SONG MP3 🎼 : ${search.all[3].title}`,`VIDEO MP4 🎼 : ${search.all[4].title}`,`SONG MP3 🎼 : ${search.all[5].title}`,`VIDEO MP4 🎼 : ${search.all[6].title}`,`SONG MP3 🎼 : ${search.all[7].title}`,`VIDEO MP4 🎼 : ${search.all[8].title}`,`SONG MP3 🎼 : ${search.all[9].title}`,`VIDEO MP4 🎼 : ${search.all[10].title}`,`SONG MP3 🎼 : ${search.all[11].title}`,`VIDEO MP4 🎼 : ${search.all[12].title}`,`SONG MP3 🎼 : ${search.all[13].title}`,`VIDEO MP4 🎼 : ${search.all[14].title}`,`SONG MP3 🎼 : ${search.all[15].title}`,`VIDEO MP4 🎼 : ${search.all[16].title}`,`SONG MP3 🎼 : ${search.all[17].title}`,`VIDEO MP4 🎼 : ${search.all[18].title}`,`SONG MP3 🎼 : ${search.all[19].title}`]
                    let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'RESULT NUMBER ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  GarfieldAdd.sendMessage(
      m.chat, 
      {
       text: "\n\n*Music Downloder 🦋*",
       footer: ` ${global.botname} `,
       title: `HERE IS YOUR RESULTS FROM *${text}* _select song or video below_`,
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
      }
     break
     break
        case 'gimage': case 'photo': {
        if (!text) return reply(`Example : ${prefix + command} Sri Lanka`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image ➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「  ${global.botname}   ＳＥＡＲＣＨ  ＥＮＧＩＮＥ」-------*
 ${global.emoji01} *Query* : ${text}
🔗 *URL* : ${images}`,
                    footer: `© Coded by Tharindu Liyanage`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        
     case 'applec': case 'applemusic': case 'zzkjnh': {
                if (!text) return reply(`Example : ${prefix + command} kuweni Ridma Weerawardena ft charitha`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons =  [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎶 Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 📽️'}, type: 1},
                    {buttonId: `applemusic ${text}`, buttonText: {displayText: 'Next ➡️'},    type: 1} 
                     ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: '```Title``` - *' + anu.title + '*\n```Duration``` - *' + anu.timestamp + '*\n```Viewes``` - *' + anu.views + '*\n```Uploaded On``` - *' + anu.ago + '*\n```Author``` - *' + anu.author.name + '*\n```Channel``` - *' + anu.author.url + '*\n```Description``` - *' + anu + '*\n```URL``` - *' + anu.url + '*',
                    footer: `© Coded by Tharindu Liyanage`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'play': case 'song': case 'video': {
                if (!text) return reply(`Example : ${prefix + command} kuweni Ridma Weerawardena ft charitha`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * 1)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎶 Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 📽️'},  type: 1},
                    {buttonId: `zzkjnh ${text}`, buttonText: {displayText: 'Next ➡️'},    type: 1}
                      ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: '```Title``` - *' + anu.title + '*\n```Duration``` - *' + anu.timestamp + '*\n```Viewes``` - *' + anu.views + '*\n```Uploaded On``` - *' + anu.ago + '*\n```Author``` - *' + anu.author.name + '*\n```Channel``` - *' + anu.author.url + '*\n```Description``` - *' + anu + '*\n```URL``` - *' + anu.url + '*',
                    footer: `© Garfield Whatsapp Bot 2022`,
                    buttons: buttons,
                    headerType: 4
                }
                GarfieldAdd.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
             case 'ytmp3':  case 'ytmusic': {	    
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
                
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
                GarfieldAdd.sendImage(m.chat, media.thumb, '```Title``` : *' + media.title + '*\n ```File Size``` : *' + media.filesizeF + '*\n```URL``` : *' + isUrl(text) + '*\n```Quality``` : *High*\n', m)
                GarfieldAdd.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.m4a` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {         
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'   
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
                GarfieldAdd.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: '```Title``` : *' + media.title + '*\n ```File Size``` : *' + media.filesizeF + '*\n```URL``` : *' + isUrl(text) + '*\n```Quality``` : *480p*\n ' }, { quoted: m })
            }
            break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                GarfieldAdd.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname} \n© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴀʀꜰɪᴇʟᴅ ʙᴏᴛ` }, { quoted: m })
             }
             break
case 'fbdl': case 'fb': case 'facebook': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                GarfieldAdd.sendMessage(m.chat, { video: { url: anu.result.url }, caption: ` ${global.emoji01} Title : ${anu.result.title}`}, { quoted: m })
            }
            break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GarfieldAdd.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'image': case 'img': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GarfieldAdd.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'googledrive': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('googledrive.com')) throw '*The link you provided is not valid*'

            
anu = await fetchJson(`https://xteam.xyz/dl/drive?url=${text}&APIKEY=${global.riy}`)
m.reply(`${util.format(anu)}`)
GarfieldAdd.sendMessage(m.chat, {document: await getBuffer(anu.result.server2), mimetype: 'application/zip', fileName: `${anu.result.title}`}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     
}
break
	        case 'mp4': case 'video': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldAdd.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'aud': case 'audio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldAdd.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'mp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GarfieldAdd.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${` ${global.botname} `}.mp3`}, { quoted : m })
            }
            break
            case 'vn': case 'ptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GarfieldAdd.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'gif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GarfieldAdd.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'url': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GarfieldAdd.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './X628/remobg-'+getRandom('')
	    localFile = await GarfieldAdd.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './X628/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GarfieldAdd.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'ytshorts': case 'shorts': {
      
  if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'               
                
                   
  xa.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
  cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*🎼 ▶━━━━━━━━━2:30*\n\n\n \n*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize} \n*🎼 DURATION* ${data.duration} \n*🎼 ID:* ${data.medias[0].cached} \n*🎼 LINK:* ${data.url}\n\n`
  buf = await getBuffer(data.thumbnail)
  GarfieldAdd.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  GarfieldAdd.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*🎼 TITLE:* ${data.title} \n*🎼 QUALITY:* ${data.medias[0].quality} \n*🎼 SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*Failed to download and send media*`)
                })
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` ${global.emoji01} No : ${no++}\n ${global.emoji01} Type : ${i.type}\n ${global.emoji01} Video ID : ${i.videoId}\n ${global.emoji01} Title : ${i.title}\n ${global.emoji01} Views : ${i.views}\n ${global.emoji01} Duration : ${i.timestamp}\n ${global.emoji01} Uploaded On : ${i.ago}\n ${global.emoji01} Author : ${i.author.name}\n ${global.emoji01} Url : ${i.url}\n\n─────────────────\n\n`
                }
                GarfieldAdd.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'device': {

                if (!text) throw '*What brand are you looking for, for example? \n device Huawei nova 5T*'   
                 anu = await fetchJson(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)				
				reply212 = `*ＤＥＶＩＣＥ 🌌*\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inches* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batteryi* : ${anu.batrai}
*Detail* : ${anu.detail}`			
//var kontoll = await getBuffer(anu.result.owner.profile_pic)	
				//sendButLocation(from, `${reply22}`,`© alyabot`, {jpegThumbnail:kontoll}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
anu = await getBuffer(anu.thumb)
GarfieldAdd.sendMessage(m.chat, { image: anu, caption: `${reply212}` }, { quoted: m}).catch((err) => m.reply('*No search results found*'))
	            }
                break

//Coded by Tharindu Liyanage
           