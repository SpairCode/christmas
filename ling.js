// 动画设置时间为三秒

//  创建雪花
function createFlower() {
  //定义一片雪花模板
  var flake = document.createElement("div");
  // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
  flake.innerHTML = "❆";
  flake.style.cssText = "position:absolute;color:#fff;";

  //获取页面的高度 相当于雪花下落结束时Y轴的位置
  var documentHieght = window.innerHeight;
  //获取页面的宽度，利用这个数来算出，雪花开始时left的值
  var documentWidth = window.innerWidth;

  //定义生成一片雪花的毫秒数
  var millisec = 1;
  //设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
  setInterval(function () {
    //页面加载之后，定时器就开始工作
    //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * documentWidth;

    //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
    var endLeft = Math.random() * documentWidth;

    //随机生成雪花大小
    var flakeSize = 5 + 20 * Math.random();

    //随机生成雪花下落持续时间
    var durationTime = 3000 + 7000 * Math.random();

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //克隆一个雪花模板
    var cloneFlake = flake.cloneNode(true);

    //第一次修改样式，定义克隆出来的雪花的样式
    cloneFlake.style.cssText += `
                        left: ${startLeft}px;
                        opacity: ${startOpacity};
                        font-size:${flakeSize}px;
                        top:-25px;
                              transition:${durationTime}ms;
                      `;

    //拼接到页面中
    document.querySelector(".ling-box").append(cloneFlake);

    //设置第二个定时器，一次性定时器，
    //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
    setTimeout(function () {
      //第二次修改样式
      cloneFlake.style.cssText += `
                                left: ${endLeft}px;
                                top:${documentHieght}px;
                                opacity:${endOpacity};
                            `;

      //设置第三个定时器，当雪花落下后，删除雪花。
      setTimeout(function () {
        cloneFlake.remove();
      }, durationTime);
    }, 0);
  }, millisec);
}

// 创建圣诞老人
function createSantaClaus() {
  let santaDiv = document.createElement('div')
  santaDiv.className = 'santaClaus'
  document.querySelector(".ling-box").append(santaDiv);
  setTimeout(function () {
    santaDiv.className = 'santaClausGift'
    santaDiv.onclick = function () {
      let audio = document.querySelector("#christmas");
      audio.src = 'good.mp3'
      audio.play()
      let message = document.createElement('div')
      message.className = 'message'
      message.innerText = '好好 - 五月天'
      document.querySelector(".ling-box").append(message);
      playSongText()
    }
  }, 12000)
}

// 播放五月天好好歌词文字
function playSongText() {
  let songArray = [{
      text: '...',
      time: 12000
    },
    {
      text: '想把你写成一首歌（我们的歌还没写完呢）',
      time: 3200

    },
    {
      text: '想养一只猫 （嗷嗷嗷）',
      time: 3000
    },
    {
      text: '想要回到每个场景 （吧唧）',
      time: 3200
    },
    {
      text: '拨慢每只表（啪嗒啪嗒啪嗒）',
      time: 3000
    },
    {
      text: '我们在小孩和大人的转角',
      time: 4500
    },
    {
      text: '盖一座城堡',
      time: 3000
    },
    {
      text: '我们好好好到疯掉',
      time: 2600
    },
    {
      text: '像找回失散多年双胞',
      time: 3600
    }, {
      text: '生命再长不过',
      time: 4000
    }, {
      text: '烟火落下了眼角',
      time: 3600
    },
    {
      text: '世界再大不过',
      time: 3000
    },
    {
      text: '你我凝视的微笑',
      time: 3500
    }, {
      text: '在所有流逝风景与人群中',
      time: 3600
    }, {
      text: '你对我最好',
      time: 3000
    }, {
      text: '一切好好是否太好',
      time: 2600
    }, {
      text: '没有人知道',
      time: 3000
    }, {
      text: '你和我背着空空的书包',
      time: 4600
    }, {
      text: '逃出名为日常的监牢',
      time: 3600
    }, {
      text: '忘了要长大',
      time: 2200
    }, {
      text: '忘了要变老(我陪你哇)',
      time: 2600
    }, {
      text: '忘了时间有脚',
      time: 9000
    }, {
      text: '最安静的时刻',
      time: 3600
    }, {
      text: '回忆总是最喧嚣',
      time: 2600
    }, {
      text: '最喧嚣的狂欢',
      time: 3600
    }, {
      text: '寂寞包围着孤岛',
      time: 2600
    }, {
      text: '还以为驯服想念能陪伴我',
      time: 3600
    }, 
    {
      text: '像一只家猫（嗷嗷嗷）',
      time: 3600
    },
    {
      text: '它就窝在沙发一角',
      time: 3000
    },
    {
      text: '却不肯睡着',
      time: 3000
    },
    {
      text: '你和我曾有满满的羽毛',
      time: 3000
    },
    {
      text: '跳着名为青春的舞蹈',
      time: 3000
    },
    {
      text: '不知道未来',
      time: 2600
    },
    {
      text: '不知道烦恼',
      time: 2600
    },
    {
      text: '不知那些日子 会是那么少',
      time: 8600
    },
    {
      text: '时间的电影 结局才知道',
      time: 4600
    },
    {
      text: '原来大人已没有童谣',
      time: 3500
    },
    {
      text: '最后的叮咛',
      time: 2600
    },
    {
      text: '最后的拥抱',
      time: 2600
    },
    {
      text: '我们红着眼笑',
      time: 2600
    },
    {
      text: '我们都要把自己照顾好',
      time: 4600
    },
    {
      text: '好到遗憾无法打扰',
      time: 3600
    },
    {
      text: '... 就这？就这？就这？',
      time: 3600
    }, {
      text: '怎么能少了我们的歌呢[狗头]',
      time: 3600
    }, {
      text: '期待 夏天',
      time: 3600
    }, {
      text: '老笨蛋<狗头',
      time: 3600
    }, {
      text: 'how long will I love you',
      time: 3600
    }, {
      text: '虹 🌈',
      time: 3600
    }, {
      text: 'long ',
      time: 3600
    }, {
      text: '七里香time long time （批注为啥这里要加七里香呀，疑惑🤔） ',
      time: 3600
    }, {
      text: '期待 秋天',
      time: 3600
    }, {
      text: '我捧着金黄麦穗',
      time: 3600
    }, {
      text: '旁晚 风儿轻轻地为我们歌唱（我们是不是在写诗了，疑惑🤔）',
      time: 3600
    }, {
      text: '老笨蛋<狗头',
      time: 3600
    }, {
      text: '桂花香飘散在风里',
      time: 3600
    }, {
      text: '想你 想你 想你 爱你哦',
      time: 3600
    }, {
      text: '播放完咯',
      time: 3600
    },
  ]
  let index = 0
  let time = 2600
  let playSong = function () {
    setTimeout(function() {
      if (index < songArray.length) {
        document.querySelector('.message').innerText = songArray[index].text
        time = songArray[index].time
        index++
        playSong()
      } else {
        playSong = null
        let message = document.querySelector('.message')
        message.innerText = '点点左边的👈小狮子吧（嗷嗷嗷）'

        message.onclick = function (ele) {
          message.className += ' messages'
          message.innerText = '圣诞快乐，喜欢长安'
          let lion = document.querySelector('.lion')
          lion.style.opacity = 1
          lion.className += ' wobble-hor-bottom'
          document.querySelector('.santaClausGift').style.opacity = 0
          document.querySelector('.plays').className = 'playTree'
        }
      }
    }, time)
  }
  playSong()

}

window.addEventListener("load", function () {
  // 设置动画定时器
  this.setTimeout(function () {
    // 清除开场元素
    document.querySelectorAll(".remove")[0].remove();
    document.querySelectorAll(".remove")[0].remove();
    document.querySelectorAll(".remove")[0].remove();
    document.querySelectorAll(".remove")[0].remove();

    let playDiv = document.createElement("div");
    playDiv.className = "play";
    playDiv.onclick = function () {
      playDiv.className = "plays";
      // 获取当前媒体元素
      let audio = document.querySelector("#christmas");
      audio.play();

      // 创建雪花飘落
      createFlower();

      // 创建圣诞老人
      createSantaClaus()

    };
    document.querySelector(".ling-box").append(playDiv);
  }, 3000);
});


// 结束的时候 将五月天的视频作为背景进行播放

// 最初想播放五月天的温柔，好好是不是更好一点呢，思考ing [狗头]