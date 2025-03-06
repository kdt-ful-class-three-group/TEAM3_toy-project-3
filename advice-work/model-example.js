const EXAMPLE_GAMESET = {
  isGameReady : true,
  redTeam: {
    positionCondition: [true, true, true, true, true],
    position: {
      top : {
        playerName : "이상해씨",
        championName : "다리우스",
      },
      jungle : {
        playerName : "푸린",
        championName : "녹턴",
      },
      mid : {
        playerName : "잉어킹",
        championName : "아리",
      },
      adc : {
        playerName : "야도란",
        championName : "케이틀린",
      },
      support : {
        playerName : "고라파덕",
        championName : "소라카",
      },
    },
    benChampion: {
      condition : [true, true, true, true, true],
      championName : ["티모", "티모", "티모", "티모", "티모"]
    },
    isProvideState : true,
  },
  blueTeam: {
    positionCondition: [true, true, true, true, true],
    position: {
      top : {
        playerName : "리자몽",
        championName : "아트록스",
      },
      jungle : {
        playerName : "망나뇽",
        championName : "리신",
      },
      mid : {
        playerName : "뮤츠",
        championName : "제드",
      },
      adc : {
        playerName : "팬텀",
        championName : "진",
      },
      support : {
        playerName : "루기아",
        championName : "룰루",
      },
    },
    benChampion: {
      condition : [true, true, true, true, true],
      championName : ["마스터이", "마스터이","마스터이","마스터이","마스터이"]
    },
    isProvideState : true,
  },

  // method

  // redTeam, blueTeam은 각각의 다섯개의 포지션에 대한 정보를 가지고 있다.
  // 하나의 포지션이 모두 결정되면 positionCondition은 true로 변경된다.

  // benChampion은 각 팀이 선택한 벤챔피언에 대한 정보를 가지고 있다.
  // 벤챔피언이 모두 결정되면 condition은 true로 변경된다.

  // 각팀의 isProvideState의 항목은 positionCondition과 benChampion이 모두 true이여야만 true로 변경된다.

  // isGameReady는 두 팀의 isProvideState가 모두 true이여야만 true로 변경된다.




}