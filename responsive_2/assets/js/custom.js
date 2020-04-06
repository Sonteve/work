
// event 
let effect = {
    s1: {
        title: {
            dom: $('.sec1 .stext > div'),
            offset: [],
        }        
    },
    s2: {
        title: {
            dom: $('.sec2 .stext'),
            offset: [],
            show: false,
        },
        desc: {
            dom: $('.sec2 .desc > div'),
            offset: [],
            show: false,
        },
        character: {
            dom: $('.character li'),
            offset: [],
            show: false,
        }
    },
    s3: {
        title: {
            dom: $('.sec3 .stext > div'),
            offset: [],
            show: false,
        },
        section: {
            dom: $('.sec3 .contents > div'),
            offset: [],
            show: false,
        },
        imgTit : {
            dom : $('.sec3 .imgWrap .imgTit .effect'),
            offset: [],
            show: false,
        },
        descTit : {
            dom : $('.sec3 .desc .desc-tit'),
            offset: [],
            show: false,
        },
        descCont: {
            dom : $('.sec3 .desc .textWrap > div'),
            offset: [],
            show: false,
        },
        siteBtn: {
            dom : $('.sec3 .desc .btnWrap .btn'),
            offset: [],
            show: false,
        }
    },
    s4 : {
        title: {
            dom : $('.sec4 .stext > div'),
            offset: [],
            show: false,
        },
        ani: {
            dom: $('.sec4 .contents .animation'),
            offset: [],
            show: false,
        }
    },
    s5 : {
        title: {
            dom: $('.sec5 .stext > div'),
            offset: [],
            show: false,
        },
        js: {
            dom: $('.sec5 .js li'),
            offset: [],
            show: false,
        },
    },
    s6 : {
        title: {
            dom: $('.sec6 .stext > div'),
            offset: [],
            show: false,
        }
    },
    s7 : {
        title: {
            dom : $('.sec7 .stext > div .text'),
            offset: [],
            show: false,
        },
        talk: {
            dom: $('.sec7 .talk > div'),
            offset: [],
            show: false,
        }
    },
    s8 : {
        title: {
            dom: $('.sec8 .stext > div'),
            offset: [],
            show: false,
        }
    }

}
let curJs = 0;
const s2DescInit = () => {
    $('.sec2 .desc > div').each( index => {
        let text1 = $('.sec2 .desc > div').eq(index).html();
        text1 = '<span>' + text1 + '</span>';
        $('.sec2 .desc > div').eq(index).html(text1);
    });
}

const s3DescTitInit = () => {
    $('.sec3 .desc .desc-tit').each( index => {
        let text2 = $('.sec3 .desc .desc-tit').eq(index).text().split('').join('</span><span>');
        text2 = '<span>' + text2 + '</span>' 
        console.log('text2',text2);
        $('.sec3 .desc .desc-tit').eq(index).html(text2);
    })
}

const s3DescContInit = () => {
    $('.sec3 .desc .textWrap > div').each( index => {
        let text3 = $('.sec3 .desc .textWrap > div').eq(index).text();
        text3 = '<span>' + text3 + '</span>';
        $('.sec3 .desc .textWrap > div').eq(index).html(text3);
    })
}

const s7ISayInit = () => {
    $('.sec7 .talk > div').each( index => {
        let text7 = $('.sec7 .talk > div').eq(index).html();
        text7 = '<span>' + text7 + '</span>';
        $('.sec7 .talk > div').eq(index).html(text7);
    })
}


// 각 섹션 요소별 offset값 초기화 하는 함수
const initialize = (eventObj) => {
    const {dom,offset} = eventObj;
    offset.length = 0;
    
    if(dom.selector === '.sec2 .desc > p'){
        dom.find('.text').each( (index,element) => {
            const ele = $(element);
            const offsetTop = ele.offset().top;
            offset.push(offsetTop);
        })
    }else{
        dom.each((index, element) => {
            const ele = $(element);
            const offsetTop = ele.offset().top;
            offset.push(offsetTop);
        });
    }
    
}

// 초기값 
let gWidthSize = $(window).width();
let gHeightSize = $(window).height();
let imgWidth = $('.tit-img').width() + 1.5;
$('.tit-img .bar').css({'width': imgWidth});
initialize(effect.s1.title); // sec1 title
initialize(effect.s2.title); // sec2 title
s2DescInit(); // sec2 desc 각 단어 span으로 감싸줌.
s3DescTitInit(); // sec3 desc-tit 각 단어 span으로 감싸줌.
s3DescContInit(); // sec3 testWrap의 div 안의 내용 span으로 감싸줌.
s7ISayInit(); // sec7 talk p의 자식들인 div 안의 내용을 span으로 감싸줌.
initialize(effect.s2.desc); // sec2 desc
initialize(effect.s2.character); // sec2 character
initialize(effect.s3.title); // sec3 title
initialize(effect.s3.section); // sec3 cont
initialize(effect.s3.imgTit); // sec3 imgTit
initialize(effect.s3.descTit); // sec3 descTit
initialize(effect.s3.descCont); // sec3 descCont
initialize(effect.s3.siteBtn); // sec3 siteBtn
initialize(effect.s4.title); // sec4 title
initialize(effect.s4.ani); // sec4 ani
initialize(effect.s5.title); // sec5 title
initialize(effect.s5.js); // sec5 title
initialize(effect.s6.title); // sec6 title
initialize(effect.s7.title); // sec7 title
initialize(effect.s7.talk); // sec7 talk
initialize(effect.s8.title); // sec8 title
// console.log(effect.s3.title);

// console.log(effect.s3.title);

// 로딩완료시 클래스 추가로 변경 할 것
setTimeout(() => {
    $('.sec1 .stext .text').addClass('show');
    $('.sec1 .sub .job').addClass('show');
},500);

// window.resize
$(window).resize(() => { 
    gWidthSize = $(window).width();
    gHeightSize = $(window).height();

    s1TitleResize(); // wWidth 768 이하시 mediaquery처럼 되게
    s4AniResize();
    //window size변경으로 바뀌는 offset값 다시 저장
    initialize(effect.s1.title); // sec1 title
    initialize(effect.s2.title); // sec2 title
    initialize(effect.s2.desc); // sec2 desc
    initialize(effect.s2.character); // sec2 character
    initialize(effect.s3.title); // sec3 title
    initialize(effect.s3.section); // sec3 cont
    initialize(effect.s3.imgTit); // sec3 imgTit 
    initialize(effect.s3.descTit); // sec3 descTit   
    initialize(effect.s3.descCont); // sec3 descCont   
    initialize(effect.s3.siteBtn); // sec3 siteBtn
    initialize(effect.s4.title); // sec4 title
    initialize(effect.s5.title); // sec5 title
    initialize(effect.s5.js); // sec5 js
    initialize(effect.s6.title); // sec6 title
    initialize(effect.s7.title); // sec6 title
    initialize(effect.s7.talk); // sec7 talk
    initialize(effect.s8.title); // sec8 title

    s1BarProgress(); // s1 bar
    s3BarProgress(effect.s3.section); // s3 bar
    navProgress(); // nav responsive
});

$(window).scroll( () => {
    //sec2 character
    s1TitleScroll();
    s2TitleScroll(effect.s2.title);
    s2CharScroll(effect.s2.character);
    s2DescScroll(effect.s2.desc);
    s3TitleScroll(effect.s3.title);
    s3ImgScroll(effect.s3.section);
    s3ImgTitScroll(effect.s3.imgTit);
    s3DescTitScroll(effect.s3.descTit);
    s3DescContScroll(effect.s3.descCont);
    s3SiteBtnScroll(effect.s3.siteBtn);
    s4TitleScroll(effect.s4.title);
    s4AniScroll(effect.s4.ani);
    s5TitleScroll(effect.s5.title);
    s5JsScroll(effect.s5.js);
    s6TitleScroll(effect.s6.title);
    s7TitleScroll(effect.s7.title);
    s7TalkScroll(effect.s7.talk);
    s8TitleScroll(effect.s8.title);
    
    s1BarProgress();
    s3BarProgress(effect.s3.section);
});

const s5JsScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){            
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                    let text = dom.eq(index).find('.text'); 
                    let tl = new TimelineMax();               
                    if(index < dom.length -1 ){                    
                        let line = dom.eq(index).find('.line');
                        tl.to( line, .6, { scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                    }else{
                        let line = dom.eq(index).find('.line');
                        let bline = dom.eq(index).find('.bline');
                        let liHeight = dom.eq(0).height();
                        bline.css({ 'top': 'liHeight'});
                        tl.to( line, .6, {  scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                        tl.to( bline, .6, {  scaleX:1, ease: Power0.easeNone});
                        effect.s2.character.show = true;
                    }
                }
            }else{
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.1> 0 ){
                    let cHeight = dom.height();
                    let text = dom.eq(index).find('.text'); 
                    let tl = new TimelineMax();
                    if(index < dom.length - 1 ){                    
                        let line = dom.eq(index).find('.line');
                        tl.to( line, .6, { scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                    }else{
                        let line = dom.eq(index).find('.line');
                        let bline = dom.eq(index).find('.bline');
                        let liHeight = dom.eq(0).height();
                        bline.css({ 'top': 'liHeight'});
                        tl.to( line, .6, { scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                        tl.to( bline, .6, { scaleX:1, ease: Power0.easeNone});
                        effect.s2.character.show = true;
                    }
                }
            }
        });
    }
}



const s1TitleResize = () => {
    const sct = $(window).scrollTop();
    if(gWidthSize < 768){
        TweenMax.to('.sec1 .stext .r1', 1.5, {
            x: 0,
            ease: Power4.easeOut,
        });
        TweenMax.to('.sec1 .stext .r2', 1.5, {
            x: 0,
            ease: Power4.easeOut,
        });
        TweenMax.to('.sec1 .stext .r3', 1.5, {
            x: 0,
            ease: Power4.easeOut,
        });
        TweenMax.to('.sec1 .stext .l1', 0.8, {
            x: 0,
            ease: Power4.easeOut,
        });
    }
}

const s4AniResize = () => {
    const sct = $(window).scrollTop();
    if(gWidthSize < 768){
        TweenMax.to('.sec4 .contents .top', 0.1, {
            x: 0,
        });
        TweenMax.to('.sec4 .contents .bot', 0.1, {
            x: 0,
        });
        console.log('돌아와');
    }
}

const s1TitleScroll = () => {
    const sct = $(window).scrollTop();
    if(gWidthSize > 768){
        if(sct> 0){
            TweenMax.to('.sec1 .stext .r1', 1.5, {
                x: (sct),
                ease: Power4.easeOut,
            });
            TweenMax.to('.sec1 .stext .r2', 1.5, {
                x: (sct * 0.35),
                ease: Power4.easeOut,
            });
            TweenMax.to('.sec1 .stext .r3', 1.5, {
                x: (sct * 0.75),
                ease: Power4.easeOut,
            });
            TweenMax.to('.sec1 .stext .l1', 0.8, {
                x: -(sct * 0.4),
                ease: Power4.easeOut,
            });
        }
    }
}

const s2TitleScroll = (eventObj) => {
    const {dom,offset,show} = eventObj;
    const sct = $(window).scrollTop();
    const text1 = dom.find('.text1');
    const text2 = dom.find('.text2');
    const text3 = dom.find('.text3');
    let eleOffset = offset;
    if(!show){
        if(gWidthSize > 768){            
            if( sct - eleOffset + gHeightSize > 0 ){
                TweenMax.to( text1, 1, {  y:0 , opacity: 1, ease: Power0.easeNone}); 
                TweenMax.to( text2, 1, {  y:0 , opacity: 1, ease: Power0.easeNone}); 
                TweenMax.to( text3, 1, {  y:0 , opacity: 1, ease: Power0.easeNone});
                effect.s2.title.show = true;
            }
        }else{
            if( sct - eleOffset + gHeightSize > 0 ){
                TweenMax.to( text1, 1, {  y:0 , opacity: 1, ease: Power0.easeNone}); 
                TweenMax.to( text2, 1, {  y:0 , opacity: 1, ease: Power0.easeNone}); 
                TweenMax.to( text3, 1, {  y:0 , opacity: 1, ease: Power0.easeNone}); 
                effect.s2.title.show = true;
            }
        }
    }
    
}

const s2DescScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    const sct = $(window).scrollTop();
    const wHeight = $(window).height();
    dom.each( index => {
        let eleoffset = offset[index];
        if(gWidthSize > 768){
            if( sct - eleoffset + gHeightSize > 0){
                let text = dom.eq(index).find('span');
                TweenMax.to( text, .7, {  y:0 , opacity: 1, ease: Power0.easeNone, delay: .3});
                if(( dom.length - 1 ) === index ){
                    effect.s2.desc.show = true;
                }
            }
        }else{
            if( sct - eleoffset + gHeightSize > 0){
                let text = dom.eq(index).find('span');
                TweenMax.to( text, .7, {  y:0 , opacity: 1, ease: Power0.easeNone, delay: .3});
                if(( dom.length - 1 ) === index ){
                    effect.s2.desc.show = true;
                }
            }
        }
    })
}

const s2CharScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){            
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                    let text = dom.eq(index).find('.text'); 
                    let tl = new TimelineMax();               
                    if(index < dom.length -1 ){                    
                        let line = dom.eq(index).find('.line');
                        tl.to( line, .6, { scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                    }else{
                        let line = dom.eq(index).find('.line');
                        let bline = dom.eq(index).find('.bline');
                        let liHeight = dom.eq(0).height();
                        bline.css({ 'top': 'liHeight'});
                        tl.to( line, .6, {  scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                        tl.to( bline, .6, {  scaleX:1, ease: Power0.easeNone});
                        effect.s2.character.show = true;
                    }
                }
            }else{
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.1> 0 ){
                    let cHeight = dom.height();
                    let text = dom.eq(index).find('.text'); 
                    let tl = new TimelineMax();
                    if(index < dom.length - 1 ){                    
                        let line = dom.eq(index).find('.line');
                        tl.to( line, .6, { scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                    }else{
                        let line = dom.eq(index).find('.line');
                        let bline = dom.eq(index).find('.bline');
                        let liHeight = dom.eq(0).height();
                        bline.css({ 'top': 'liHeight'});
                        tl.to( line, .6, { scaleX:1, ease: Power0.easeNone});               
                        tl.to( text , .4, { y: 0, ease: Power0.easeNone});
                        tl.to( bline, .6, { scaleX:1, ease: Power0.easeNone});
                        effect.s2.character.show = true;
                    }
                }
            }
        });
    }
}

const s3TitleScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0 ){
                    // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                    // console.log('들어옴');
                    let text = dom.eq(index).find('.text');
                    TweenMax.to( text, .7, { y:0 , opacity: 1, ease: Power0.easeNone});
                    if(text.attr('class') === 'text text2'){
                        effect.s3.title.show = true;
                    }
                }
            }else{
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0 ){
                    // console.log('들어옴');
                    let text = dom.eq(index).find('.text');
                    TweenMax.to( text, .7, { y:0 , opacity: 1, ease: Power0.easeNone});
                    // if(text.attr('class') === 'text text2'){
                    //     effect.s3.title.show = true;
                    // }
                }
            }
            
        });
    }
}

const s3ImgScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                    // console.log('img 들어옴');
                    let imgWrap = dom.eq(index).find('.imgWrap'); 
                    TweenMax.to( imgWrap, 2, { backgroundColor: '#21252c' , ease: Expo.easeOut});
                    TweenMax.to( imgWrap.find('img'), 2.5, { opacity: 1 , ease: Power0.easeNone});
                    if(dom.eq(index).attr('class') === 'miero'){
                        effect.s3.section.show = true;
                    }
                }
            }else{
                //768 이하일때 이미지 효과 줄것
            }
        });
    }
}

const s3ImgTitScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0 ){
                    // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                    // console.log('들어옴');
                    let text = dom.eq(index);
                    TweenMax.to( text, .5, { y:0 , opacity: 1, ease: Power0.easeNone});
                    if(text.attr('class') === 'effect last'){
                        effect.s3.title.show = true;
                    }
                }
            }else{
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0 ){
                    // console.log('들어옴');
                    let text = dom.eq(index);
                    TweenMax.to( text, .5, { y:0 , opacity: 1, ease: Power0.easeNone});
                    if(text.attr('class') === 'effect last'){
                        effect.s3.title.show = true;
                    }
                }
            }
            
        });
    }
}

const s3DescTitScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0 ){
                    // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                    // console.log('들어옴');
                    let text = dom.eq(index).find('span');
                    let tl = new TimelineMax();
                    tl.staggerTo(text, 1, {ease: Back.easeOut.config(1.7), opacity:1, y: 0}, 0.05);
                    if( (dom.length - 1 ) === index){
                        effect.s3.descTit.show = true;
                    }
                }
            }else{
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.05 > 0 ){
                    // console.log('들어옴');
                    let text = dom.eq(index).find('span');
                    let tl = new TimelineMax();
                    tl.staggerTo(text, 1, {ease: Back.easeOut.config(1.7), opacity:1, y: 0}, 0.05);
                    if( (dom.length -1 ) === index){
                        effect.s3.descTit.show = true;
                    }
                }
            }
            
        });
    }
}

const s3DescContScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    const sct = $(window).scrollTop();
    const wHeight = $(window).height();
    dom.each( index => {
        let eleoffset = offset[index];
        if(gWidthSize > 768){
            if( sct - eleoffset + gHeightSize > 0){
                let text = dom.eq(index).find('span');
                TweenMax.to( text, .7, {  y:0 , opacity: 1, ease: Power0.easeNone, delay: .3});
                if(( dom.length - 1 ) === index ){
                    effect.s3.descCont.show = true;
                }
            }
        }else{
            if( sct - eleoffset + gHeightSize > 0){
                let text = dom.eq(index).find('span');
                TweenMax.to( text, .7, {  y:0 , opacity: 1, ease: Power0.easeNone, delay: .3});
                if(( dom.length - 1 ) === index ){
                    effect.s3.descCont.show = true;
                }
            }
        }
    })
}

const s3SiteBtnScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if( sct - eleOffset + gHeightSize> 0 ){
                // console.log('들어옴');
                let text = dom.eq(index); 
                TweenMax.to( text, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                setTimeout(() => {
                    text.addClass('show');
                }, 600);
                if(( dom.length - 1 ) === index ){
                    effect.s3.siteBtn.show = true;
                }
            }
        });
    }
}

const s4TitleScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                // console.log('들어옴');
                let text = dom.eq(index).find('.text1'); 
                TweenMax.to( text, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                if(( dom.length - 1 ) === index ){
                    effect.s4.title.show = true;
                }
            }
        });
    }
}

const s4AniScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    const sct = $(window).scrollTop();
    if(gWidthSize > 768){
        if(!show){
            dom.each((index, element) => {
                let ele = $(element);
                let eleOffset = offset[index];
                if( sct - eleOffset + gHeightSize -gHeightSize * 0.14 > 0 ){
                    // console.log('들어옴');
                    // let circle = ele;
                    TweenMax.to( ele, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                    if(( dom.length - 1 ) === index ){
                        effect.s4.ani.show = true;
                        console.log(effect.s4.ani.show);
                    }
                }
            });
        }else{
            //애니메이션 실행후
            let value =  ( sct - $('.sec4 .contents').offset().top) * 0.3;
            TweenMax.to('.sec4 .top',.8 ,{ x: value, ease: Power0.easeOut});
            TweenMax.to('.sec4 .bot',.8 ,{ x: -value, ease: Power0.easeOut});
        }
    }else{
        if(!show){
            dom.each((index, element) => {
                let ele = $(element);
                let eleOffset = offset[index];
                if( sct - eleOffset + gHeightSize -gHeightSize * 0.14 > 0 ){
                    // console.log('들어옴');
                    // let circle = ele;
                    TweenMax.to( ele, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                    if(( dom.length - 1 ) === index ){
                        effect.s4.ani.show = true;
                    }
                }
            });
        }
    }
}

const s5TitleScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                // console.log('들어옴');
                let text = dom.eq(index).find('.text'); 
                TweenMax.to( text, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                effect.s4.title.show = true;
            }
        });
    }
}

const s6TitleScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                // console.log('들어옴');
                let text = dom.eq(index).find('.text'); 
                TweenMax.to( text, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                if(( dom.length - 1 ) === index ){
                    effect.s6.title.show = true;
                }
            }
        });
    }
}

const s7TitleScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if(gWidthSize > 768){
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0 ){
                    // console.log(sct - eleOffset + gHeightSize - gHeightSize * 0.14);
                    // console.log('들어옴');
                    // let text = dom.eq(index);
                    TweenMax.staggerTo( dom, .7, { y:0 , opacity: 1, ease: Power0.easeNone}, 0.5);
                    
                }
            }else{
                if( sct - eleOffset + gHeightSize - gHeightSize * 0.14 > 0 ){
                    // console.log('들어옴');
                    let text = dom.eq(index).find('.text');
                    TweenMax.to( text, .7, { y:0 , opacity: 1, ease: Power0.easeNone});
                    // if(text.attr('class') === 'text text2'){
                    //     effect.s3.title.show = true;
                    // }
                }
            }
            
        });
    }
}

const s7TalkScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    const sct = $(window).scrollTop();
    const wHeight = $(window).height();
    dom.each( index => {
        let eleoffset = offset[index];
        if(gWidthSize > 768){
            if( sct - eleoffset + gHeightSize > 0){
                let text = dom.eq(index).find('span');
                TweenMax.to( text, .7, {  y:0 , opacity: 1, ease: Power0.easeNone, delay: .3});
                if(( dom.length - 1 ) === index ){
                    effect.s7.talk.show = true;
                }
            }
        }else{
            if( sct - eleoffset + gHeightSize > 0){
                let text = dom.eq(index).find('span');
                TweenMax.to( text, .7, {  y:0 , opacity: 1, ease: Power0.easeNone, delay: .3});
                if(( dom.length - 1 ) === index ){
                    effect.s7.talk.show = true;
                }
            }
        }
    })
}

const s8TitleScroll = (eventObj) => {
    const {dom, offset, show} = eventObj;
    if(!show){
        const sct = $(window).scrollTop();
        dom.each((index, element) => {
            let eleOffset = offset[index];
            if( sct - eleOffset + gHeightSize - gHeightSize * 0.14> 0 ){
                // console.log('들어옴');
                let text = dom.eq(index).find('.text'); 
                TweenMax.to( text, .6, { y:0 , opacity: 1, ease: Power0.easeNone});
                if(( dom.length - 1 ) === index ){
                    effect.s8.title.show = true;
                }
            }
        });
    }
}

const navProgress = () => {
    // 반응형
    // nav
    if(gWidthSize + 17 > 768){
        $('.nav .menu ul').css('display','block');
        $('.nav .menu').css('display','block');
    }else{
        $('.nav .menu').css('display','none');
        $('.nav .menu ul').css('display','none');
    }
}

const s1BarProgress = () => {
    let sct = $(window).scrollTop();
    let imgHeight = $('.tit-img img').height();
    let imgWidth = $('.tit-img').width();
    let imgOffsetTop = $('.tit-img').offset().top;
    $('.tit-img .bar').css({'width':imgWidth + 1.5});

    if(gWidthSize > 768){
        if(sct  >= ( imgOffsetTop + imgHeight )/2 ){
            $('.tit-img .bar').css({'display': 'none'});
        }else{
            $('.tit-img .bar').css({'display': 'block'});
        }
    }else{
        $('.tit-img .bar').css({'display': 'none'});
    }
}

const s3BarProgress = (eventObj) => {
    const {dom, offset} = eventObj;
    let sct = $(window).scrollTop();
    let sectionHeight = $('.sec3 .contents > div').height();
    let imgHeight = $('.sec3 .imgWrap img').height();
    let imgWidth = $('.sec3 .imgWrap img').width() + 1;
    let imgOffsetTop = $('.sec3 .imgWrap img').offset().top;
    $('.sec3 .imgWrap .bar').css({'width':imgWidth});

    if(gWidthSize > 768){
        $('.sec3 .imgWrap .bar').each((index,element) => {
            const ele = $(element);
            if( (sct - offset[index] + gHeightSize) > 0 && (sct - offset[index] + gHeightSize) < sectionHeight + 100){
                ele.css({'display': 'block'});
            }else if( sct >= ( offset[index] + imgHeight)/2 ){
                ele.css({'display': 'none'});
            }
        })
    }else{
        // console.log('작아짐');
        $('.standard .imgWrap .bar').css({'display': 'none'});
        $('.responsive .imgWrap .bar').css({'display': 'none'});
        $('.mega .imgWrap .bar').css({'display': 'none'});
        $('.miero .imgWrap .bar').css({'display': 'none'});
    }
    
}

//mobile menu slide
$('.m-menu a').click( e => {
    e.preventDefault();
    $('.nav .menu').slideDown(300);
    $('html').css("overflow","hidden");
    setTimeout(() => {
        $('.nav .menu ul').slideDown(400);
    },400);
});

$('.nav .menu .m-close').click( e => {
    e.preventDefault();
    $('.nav .menu').slideUp(300);
    $('html').css("overflow","visible");
    setTimeout(() => {
        $('.nav .menu ul').slideUp(400);
    },400);
});

$('.menu ul li a').click(function(e){
    e.preventDefault();
    $('.menu ul li a').removeClass('on');
    $(this).addClass('on');
    let index = $(this).parent().index();
    if(gWidthSize > 768){
        if(!(index === 0)){
            if(index === 6){
                let secOffset = $('.section').eq(index).offset().top ;
                $('body, html').animate({
                    scrollTop: secOffset
                })
            }else{
                let secOffset = $('.section').eq(index-1).offset().top ;
                $('body, html').animate({
                    scrollTop: secOffset
                })
            }
        }
    }else{
        if(!(index === 0)){
            if(index === 6){
                let secOffset = $('.section').eq(index).offset().top ;
                $('body, html').animate({
                    scrollTop: secOffset
                })
            }else{
                let secOffset = $('.section').eq(index-1).offset().top ;
                $('body, html').animate({
                    scrollTop: secOffset
                })
            }
        }
        setTimeout(() => {
            $('.nav .menu').slideUp(300);
            $('html').css("overflow","visible");
            setTimeout(() => {
                $('.nav .menu ul').slideUp(400);
            },400);
        }, 500);
        
    }
    

});


$(document).mousemove( e => {
    if(gWidthSize > 380){
        const pageX = e.pageX;
        const pageY = e.pageY;
        let imgOffsetLeft = $('.sec1-img').offset().left;
        let imgWidth = $('.sec1-img').width();
        let imgOffsetTop = $('.sec1-img').offset().top;
        if(pageX <= $('.sec1 .icon .eye-white').offset().left){
            let eyeX = -$('.sec1 .icon .eye-white').width()/2.5;
            TweenMax.to('.sec1 .icon .eye-apple',.5,{x: eyeX });
        }

        if(pageX >= $('.sec1 .icon .eye-white').offset().left + $('.sec1 .icon .eye-white').width()){
            // eyeX = pageX - $('.sec1 .icon .eye-white').offset().left - imgWidth/2;
            let eyeX = $('.sec1 .icon .eye-white').width()/6;
            TweenMax.to('.sec1 .icon .eye-apple',.5,{x: eyeX });
        }
        
        if(pageY <= $('.sec1 .icon .eye-white').offset().top){
            let eyeY = -$('.sec1 .icon .eye-white').height()/2.5;
            TweenMax.to('.sec1 .icon .eye-apple',.5,{y: eyeY});
        }

        if(pageY >= $('.sec1 .icon .eye-white').offset().top + $('.sec1 .icon .eye-white').height()){
            // eyeY = $('.sec1 .icon .eye-white').height()/10;
            // let eyeY = $('.sec1 .icon .eye-white').height()/1000000;
            let eyeY = $('.sec1 .icon .eye-white').height()/1000;
            TweenMax.to('.sec1 .icon .eye-apple',.5,{y: eyeY });
        }
        // console.log($('.sec1 .icon .eye-white').height());
        // console.log(pageY, $('.sec1 .icon .eye-white').offset().top);
        
    }
    const pageX = e.pageX;
    const pageY = e.pageY;
    const pointer = $('#pointer .circle');
    // console.log(pointer.length);
    for( let i = 0; i < pointer.length; i++){
        TweenMax.to(pointer.eq(i) ,1.5 ,{ left: pageX + i*2.5, top: pageY + i*2.5, ease: Expo.easeOut, delay: i*0.05});
    }
});


$('.sec1 .icon').mouseover(()=>{
    $('.sec1 .icon .eye-white').attr('src','./assets/img/eye-closed.png');
    $('.sec1 .icon .eye-white').css('height','0.5vw');
    $('.sec1 .icon .eye-apple').css('display','none');
}).mouseout(()=>{
    $('.sec1 .icon .eye-white').attr('src','./assets/img/eye-white.png');
    $('.sec1 .icon .eye-white').css('height','2.45vw');
    $('.sec1 .icon .eye-apple').css('display','block');
});

function counter() {
    if( $('.skill .skill-box .num').size() ){
        let count = $('.skill .skill-box .num');

        count.each(function () {
            let $this = $(this); // $ jquery 변수
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function() {
            count.each(function(i) {
                let target = $(this);
                if (!target.data('counted') && $(window).scrollTop() + $(window).height() >= target.offset().top) {
                    target.data('counted', true);
                    target.animate({
                        dummy: 1 // 한번 주겠다는 뜻
                    }, {
                        duration: 3000,
                        step: function(now) { // 하나씩 step
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        //easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#ff9900',
                        trackColor: '#fff',
                        scaleColor: false,
                        lineWidth: 7,
                        size: 270,
                        lineCap: 'round',
                        animate: { duration: 3000, enabled: true }
                    });
                }
            });
        })
    }
}
counter();