var APP_DATA = {
  "scenes": [
    {
      "id": "0-exteriorentrada",
      "name": "Exterior/Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1283950037610797,
        "pitch": 0.022709887717617505,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -0.1283950037610797,
          "pitch": 0.022709887717617505,
          "rotation": 0,
          "target": "1-cocinasala-de-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cocinasala-de-estar",
      "name": "Cocina/Sala de Estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4348547811738923,
        "pitch": 0.002523320857513056,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.4348547811738923,
          "pitch": 0.002523320857513056,
          "rotation": 6.283185307179586,
          "target": "6-exteriorpiscina"
        },
        {
          "yaw": 2.8438016837509608,
          "pitch": 0.06460601032528857,
          "rotation": 0,
          "target": "3-habitacin-principal"
        },
        {
          "yaw": -3.102862173647626,
          "pitch": 0.05956563772438983,
          "rotation": 0,
          "target": "2-bao"
        },
        {
          "yaw": -0.226442253444592,
          "pitch": 0.05818775475250959,
          "rotation": 0,
          "target": "4-habitacin"
        },
        {
          "yaw": 0.03449182078858115,
          "pitch": 0.06962758623490473,
          "rotation": 0,
          "target": "5-sala-de-estar"
        },
        {
          "yaw": -1.6650066208819556,
          "pitch": 0.03100987866440974,
          "rotation": 0,
          "target": "0-exteriorentrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.3300725307523535,
        "pitch": -0.012095885702898101,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -2.5879426950274507,
          "pitch": 0.1028417241240458,
          "rotation": 0,
          "target": "1-cocinasala-de-estar"
        },
        {
          "yaw": -1.6066373836751122,
          "pitch": 0.06253050125079085,
          "rotation": 0,
          "target": "3-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-habitacin-principal",
      "name": "Habitación Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.4638536421612374,
        "pitch": 0.10597625892257767,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.09106309110312161,
          "pitch": -0.011733299797199948,
          "rotation": 0,
          "target": "6-exteriorpiscina"
        },
        {
          "yaw": 2.3262461752654318,
          "pitch": 0.05874040756085641,
          "rotation": 0,
          "target": "2-bao"
        },
        {
          "yaw": 2.5913809371798866,
          "pitch": 0.07265703031158566,
          "rotation": 0,
          "target": "1-cocinasala-de-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 1.0738785108944278,
          "pitch": 0.050478015997281744,
          "rotation": 0,
          "target": "6-exteriorpiscina"
        },
        {
          "yaw": -2.006367582594466,
          "pitch": 0.03505244178829159,
          "rotation": 0,
          "target": "1-cocinasala-de-estar"
        },
        {
          "yaw": -1.341157783973724,
          "pitch": 0.04755547109185798,
          "rotation": 0,
          "target": "5-sala-de-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-de-estar",
      "name": "Sala de estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5674257684151982,
        "pitch": -0.004878069651688577,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": 0.076438092800176,
          "pitch": 0.0058740623339250675,
          "rotation": 0,
          "target": "6-exteriorpiscina"
        },
        {
          "yaw": -2.668651338841048,
          "pitch": 0.0604034725276037,
          "rotation": 0,
          "target": "1-cocinasala-de-estar"
        },
        {
          "yaw": -3.054806495603682,
          "pitch": 0.07542152018372583,
          "rotation": 0,
          "target": "4-habitacin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-exteriorpiscina",
      "name": "Exterior/Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2959776848255018
      },
      "linkHotspots": [
        {
          "yaw": -1.1459300300293869,
          "pitch": 0.007038429407852931,
          "rotation": 0,
          "target": "3-habitacin-principal"
        },
        {
          "yaw": -0.04351319501101969,
          "pitch": 0.042247175456218145,
          "rotation": 0,
          "target": "1-cocinasala-de-estar"
        },
        {
          "yaw": 0.39232298243073593,
          "pitch": 0.0459349169882195,
          "rotation": 0,
          "target": "4-habitacin"
        },
        {
          "yaw": 1.0454201427697498,
          "pitch": 0.04552110447373359,
          "rotation": 0,
          "target": "5-sala-de-estar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tour_virtual",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
