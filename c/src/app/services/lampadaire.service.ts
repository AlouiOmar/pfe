import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import { Lampadaire } from '../models/lampadaire.model';

@Injectable()
export class LampadaireService {



    lampa = [{
        'id': 1,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Minnesota',
        'latitude': '45.0159',
        'longitude': '-93.4719',
        'consommation': '583',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '27/6/2018'
      }, {
        'id': 2,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Kentucky',
        'latitude': '38.189',
        'longitude': '-85.6768',
        'consommation': '595',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '30/9/2018'
      }, {
        'id': 3,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Ohio',
        'latitude': '39.969',
        'longitude': '-83.0114',
        'consommation': '668',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '4/5/2018'
      }, {
        'id': 4,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'North Carolina',
        'latitude': '35.26',
        'longitude': '-80.8042',
        'consommation': '541',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '7/9/2018'
      }, {
        'id': 5,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Ohio',
        'latitude': '39.7395',
        'longitude': '-84.229',
        'consommation': '974',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '17/2/2019'
      }, {
        'id': 6,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Pennsylvania',
        'latitude': '40.2944',
        'longitude': '-76.8938',
        'consommation': '545',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '12/12/2018'
      }, {
        'id': 7,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Texas',
        'latitude': '31.6948',
        'longitude': '-106.3',
        'consommation': '914',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '9/8/2018'
      }, {
        'id': 8,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'California',
        'latitude': '38.6026',
        'longitude': '-121.4475',
        'consommation': '861',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '6/9/2018'
      }, {
        'id': 9,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Illinois',
        'latitude': '41.8119',
        'longitude': '-87.6873',
        'consommation': '645',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '27/2/2019'
      }, {
        'id': 10,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Ohio',
        'latitude': '40.081',
        'longitude': '-82.9383',
        'consommation': '919',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '8/2/2019'
      }, {
        'id': 11,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Mississippi',
        'latitude': '33.5508',
        'longitude': '-88.4865',
        'consommation': '792',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '27/10/2018'
      }, {
        'id': 12,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Michigan',
        'latitude': '42.2166',
        'longitude': '-83.3532',
        'consommation': '868',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '9/5/2018'
      }, {
        'id': 13,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Ohio',
        'latitude': '41.6492',
        'longitude': '-83.6706',
        'consommation': '848',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '17/2/2019'
      }, {
        'id': 14,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Ohio',
        'latitude': '39.7155',
        'longitude': '-84.1637',
        'consommation': '809',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '8/6/2018'
      }, {
        'id': 15,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'District of Columbia',
        'latitude': '38.8933',
        'longitude': '-77.0146',
        'consommation': '952',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '19/6/2018'
      }, {
        'id': 16,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'California',
        'latitude': '34.6019',
        'longitude': '-117.8123',
        'consommation': '921',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '24/12/2018'
      }, {
        'id': 17,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Georgia',
        'latitude': '33.8444',
        'longitude': '-84.474',
        'consommation': '723',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '17/12/2018'
      }, {
        'id': 18,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Louisiana',
        'latitude': '32.6076',
        'longitude': '-93.7526',
        'consommation': '863',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '17/8/2018'
      }, {
        'id': 19,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'New Hampshire',
        'latitude': '43.0059',
        'longitude': '-71.0132',
        'consommation': '586',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '7/11/2018'
      }, {
        'id': 20,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Texas',
        'latitude': '35.216',
        'longitude': '-102.0714',
        'consommation': '567',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '5/3/2019'
      }, {
        'id': 21,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Tennessee',
        'latitude': '35.2017',
        'longitude': '-89.9715',
        'consommation': '547',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '19/2/2019'
      }, {
        'id': 22,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Ohio',
        'latitude': '39.9106',
        'longitude': '-83.7856',
        'consommation': '770',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '25/10/2018'
      }, {
        'id': 23,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Tennessee',
        'latitude': '35.2211',
        'longitude': '-85.2091',
        'consommation': '583',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '21/8/2018'
      }, {
        'id': 24,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'North Carolina',
        'latitude': '36.0218',
        'longitude': '-78.9478',
        'consommation': '600',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '7/1/2019'
      }, {
        'id': 25,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Colorado',
        'latitude': '39.7388',
        'longitude': '-104.4083',
        'consommation': '638',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '27/10/2018'
      }, {
        'id': 26,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'New York',
        'latitude': '42.6853',
        'longitude': '-73.8253',
        'consommation': '884',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '14/1/2019'
      }, {
        'id': 27,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Texas',
        'latitude': '29.7629',
        'longitude': '-95.3629',
        'consommation': '685',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '12/5/2018'
      }, {
        'id': 28,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Virginia',
        'latitude': '37.5498',
        'longitude': '-77.4588',
        'consommation': '686',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '29/3/2018'
      }, {
        'id': 29,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Ohio',
        'latitude': '39.7505',
        'longitude': '-84.2686',
        'consommation': '851',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '29/6/2018'
      }, {
        'id': 30,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Arkansas',
        'latitude': '34.8337',
        'longitude': '-92.3289',
        'consommation': '847',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '26/9/2018'
      }, {
        'id': 31,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'California',
        'latitude': '38.4386',
        'longitude': '-122.6727',
        'consommation': '581',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '20/11/2018'
      }, {
        'id': 32,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Alabama',
        'latitude': '30.6589',
        'longitude': '-88.178',
        'consommation': '916',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '27/5/2018'
      }, {
        'id': 33,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Nevada',
        'latitude': '35.9279',
        'longitude': '-114.9721',
        'consommation': '565',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '10/12/2018'
      }, {
        'id': 34,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Delaware',
        'latitude': '39.8188',
        'longitude': '-75.5064',
        'consommation': '877',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '30/9/2018'
      }, {
        'id': 35,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'North Carolina',
        'latitude': '35.7977',
        'longitude': '-78.6253',
        'consommation': '785',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '11/6/2018'
      }, {
        'id': 36,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Texas',
        'latitude': '35.2454',
        'longitude': '-101.999',
        'consommation': '600',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '7/10/2018'
      }, {
        'id': 37,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'California',
        'latitude': '33.7465',
        'longitude': '-117.8662',
        'consommation': '789',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '27/4/2018'
      }, {
        'id': 38,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Missouri',
        'latitude': '39.035',
        'longitude': '-94.3567',
        'consommation': '781',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '29/11/2018'
      }, {
        'id': 39,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'New York',
        'latitude': '42.6149',
        'longitude': '-73.9708',
        'consommation': '696',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '7/6/2018'
      }, {
        'id': 40,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Virginia',
        'latitude': '37.5242',
        'longitude': '-77.4932',
        'consommation': '736',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '15/10/2018'
      }, {
        'id': 41,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Massachusetts',
        'latitude': '42.3319',
        'longitude': '-71.254',
        'consommation': '834',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '8/8/2018'
      }, {
        'id': 42,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Maryland',
        'latitude': '39.361',
        'longitude': '-76.5891',
        'consommation': '845',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '5/8/2018'
      }, {
        'id': 43,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Florida',
        'latitude': '26.2626',
        'longitude': '-81.8071',
        'consommation': '907',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '26/1/2019'
      }, {
        'id': 44,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Minnesota',
        'latitude': '45.0803',
        'longitude': '-93.0875',
        'consommation': '674',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '27/6/2018'
      }, {
        'id': 45,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Florida',
        'latitude': '28.072',
        'longitude': '-81.9609',
        'consommation': '906',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '23/10/2018'
      }, {
        'id': 46,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Arizona',
        'latitude': '33.2765',
        'longitude': '-112.1872',
        'consommation': '570',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '16/1/2019'
      }, {
        'id': 47,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Arizona',
        'latitude': '33.5082',
        'longitude': '-112.1011',
        'consommation': '546',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '2/7/2018'
      }, {
        'id': 48,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Florida',
        'latitude': '27.8546',
        'longitude': '-82.7545',
        'consommation': '654',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '27/10/2018'
      }, {
        'id': 49,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Florida',
        'latitude': '29.1565',
        'longitude': '-82.2095',
        'consommation': '731',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '20/4/2018'
      }, {
        'id': 50,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Texas',
        'latitude': '32.7714',
        'longitude': '-97.2915',
        'consommation': '790',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '9/10/2018'
      }, {
        'id': 51,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Texas',
        'latitude': '30.2166',
        'longitude': '-97.8508',
        'consommation': '544',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '17/3/2019'
      }, {
        'id': 52,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Ohio',
        'latitude': '40.081',
        'longitude': '-82.9383',
        'consommation': '947',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '28/3/2018'
      }, {
        'id': 53,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Missouri',
        'latitude': '38.5814',
        'longitude': '-90.2625',
        'consommation': '830',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '7/1/2019'
      }, {
        'id': 54,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Connecticut',
        'latitude': '41.786',
        'longitude': '-72.6758',
        'consommation': '842',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '10/5/2018'
      }, {
        'id': 55,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Pennsylvania',
        'latitude': '40.0018',
        'longitude': '-75.1179',
        'consommation': '548',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '3/1/2019'
      }, {
        'id': 56,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Texas',
        'latitude': '29.9335',
        'longitude': '-95.3981',
        'consommation': '609',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '30/1/2019'
      }, {
        'id': 57,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'New York',
        'latitude': '40.6794',
        'longitude': '-74.0014',
        'consommation': '864',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '25/7/2018'
      }, {
        'id': 58,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Nevada',
        'latitude': '39.2025',
        'longitude': '-119.7526',
        'consommation': '550',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '16/1/2019'
      }, {
        'id': 59,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Indiana',
        'latitude': '39.1682',
        'longitude': '-86.5186',
        'consommation': '741',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '20/5/2018'
      }, {
        'id': 60,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Missouri',
        'latitude': '38.6531',
        'longitude': '-90.2435',
        'consommation': '747',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '13/9/2018'
      }, {
        'id': 61,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Missouri',
        'latitude': '39.035',
        'longitude': '-94.3567',
        'consommation': '662',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '25/7/2018'
      }, {
        'id': 62,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Virginia',
        'latitude': '36.9312',
        'longitude': '-76.2397',
        'consommation': '745',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '12/3/2019'
      }, {
        'id': 63,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Delaware',
        'latitude': '39.5645',
        'longitude': '-75.597',
        'consommation': '792',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '29/1/2019'
      }, {
        'id': 64,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'California',
        'latitude': '37.7864',
        'longitude': '-122.3892',
        'consommation': '512',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '2/12/2018'
      }, {
        'id': 65,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'New York',
        'latitude': '40.7918',
        'longitude': '-73.9448',
        'consommation': '730',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '21/7/2018'
      }, {
        'id': 66,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Utah',
        'latitude': '40.5927',
        'longitude': '-111.831',
        'consommation': '763',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '21/5/2018'
      }, {
        'id': 67,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Nebraska',
        'latitude': '40.8247',
        'longitude': '-96.6252',
        'consommation': '979',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '22/5/2018'
      }, {
        'id': 68,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Maryland',
        'latitude': '38.9982',
        'longitude': '-77.0338',
        'consommation': '520',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '26/1/2019'
      }, {
        'id': 69,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Ohio',
        'latitude': '41.4335',
        'longitude': '-81.6323',
        'consommation': '856',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '3/3/2019'
      }, {
        'id': 70,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Arizona',
        'latitude': '32.3366',
        'longitude': '-111.1771',
        'consommation': '547',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '29/9/2018'
      }, {
        'id': 71,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Illinois',
        'latitude': '42.3254',
        'longitude': '-89.1705',
        'consommation': '910',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '11/5/2018'
      }, {
        'id': 72,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Texas',
        'latitude': '33.1428',
        'longitude': '-97.0727',
        'consommation': '812',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '25/3/2018'
      }, {
        'id': 73,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Wisconsin',
        'latitude': '43.0696',
        'longitude': '-89.4239',
        'consommation': '826',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '15/8/2018'
      }, {
        'id': 74,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Florida',
        'latitude': '26.1457',
        'longitude': '-80.4483',
        'consommation': '780',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '22/10/2018'
      }, {
        'id': 75,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Idaho',
        'latitude': '43.4599',
        'longitude': '-116.244',
        'consommation': '726',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '4/10/2018'
      }, {
        'id': 76,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Texas',
        'latitude': '31.1282',
        'longitude': '-97.7469',
        'consommation': '710',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '22/5/2018'
      }, {
        'id': 77,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Louisiana',
        'latitude': '32.6076',
        'longitude': '-93.7526',
        'consommation': '589',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '11/8/2018'
      }, {
        'id': 78,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'District of Columbia',
        'latitude': '38.8933',
        'longitude': '-77.0146',
        'consommation': '548',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '3/9/2018'
      }, {
        'id': 79,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Pennsylvania',
        'latitude': '40.0018',
        'longitude': '-75.1179',
        'consommation': '534',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '14/6/2018'
      }, {
        'id': 80,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Florida',
        'latitude': '28.5663',
        'longitude': '-81.2608',
        'consommation': '892',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '2/2/2019'
      }, {
        'id': 81,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Indiana',
        'latitude': '40.2023',
        'longitude': '-85.4082',
        'consommation': '801',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '22/1/2019'
      }, {
        'id': 82,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Illinois',
        'latitude': '41.8119',
        'longitude': '-87.6873',
        'consommation': '764',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '17/7/2018'
      }, {
        'id': 83,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Oklahoma',
        'latitude': '35.4794',
        'longitude': '-97.5017',
        'consommation': '740',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '10/2/2019'
      }, {
        'id': 84,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Alabama',
        'latitude': '33.6493',
        'longitude': '-86.7057',
        'consommation': '619',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '17/4/2018'
      }, {
        'id': 85,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'North Carolina',
        'latitude': '36.1824',
        'longitude': '-79.806',
        'consommation': '600',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '10/2/2019'
      }, {
        'id': 86,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Texas',
        'latitude': '29.834',
        'longitude': '-95.4342',
        'consommation': '565',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '21/1/2019'
      }, {
        'id': 87,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Utah',
        'latitude': '40.6681',
        'longitude': '-111.9083',
        'consommation': '632',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '8/5/2018'
      }, {
        'id': 88,
        'typeLampadaire': 'lampadaire double',
        'status': 'allumé',
        'region': 'Oregon',
        'latitude': '45.5806',
        'longitude': '-122.3748',
        'consommation': '656',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '1/11/2018'
      }, {
        'id': 89,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Illinois',
        'latitude': '39.854',
        'longitude': '-88.9815',
        'consommation': '644',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '31/1/2019'
      }, {
        'id': 90,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Massachusetts',
        'latitude': '42.3389',
        'longitude': '-70.9196',
        'consommation': '723',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '24/6/2018'
      }, {
        'id': 91,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'Washington',
        'latitude': '47.6849',
        'longitude': '-122.2968',
        'consommation': '964',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '29/10/2018'
      }, {
        'id': 92,
        'typeLampadaire': 'lampadaire double',
        'status': 'en panne',
        'region': 'California',
        'latitude': '33.0169',
        'longitude': '-116.846',
        'consommation': '866',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '15/12/2018'
      }, {
        'id': 93,
        'typeLampadaire': 'lampadaire double',
        'status': 'éteint',
        'region': 'Texas',
        'latitude': '31.6948',
        'longitude': '-106.3',
        'consommation': '582',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '9/1/2019'
      }, {
        'id': 94,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'New Mexico',
        'latitude': '35.0448',
        'longitude': '-106.6893',
        'consommation': '658',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '27/5/2018'
      }, {
        'id': 95,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Texas',
        'latitude': '32.7673',
        'longitude': '-96.7776',
        'consommation': '993',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '24/1/2019'
      }, {
        'id': 96,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Georgia',
        'latitude': '33.786',
        'longitude': '-84.3514',
        'consommation': '883',
        'typeCapteur': 'capteur luminosité',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '25/11/2018'
      }, {
        'id': 97,
        'typeLampadaire': 'lampadaire solo',
        'status': 'en panne',
        'region': 'Kentucky',
        'latitude': '38.2149',
        'longitude': '-85.6245',
        'consommation': '814',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule led',
        'dateAjout': '27/3/2018'
      }, {
        'id': 98,
        'typeLampadaire': 'lampadaire solo',
        'status': 'allumé',
        'region': 'Michigan',
        'latitude': '42.3749',
        'longitude': '-83.1087',
        'consommation': '929',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '8/10/2018'
      }, {
        'id': 99,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Arizona',
        'latitude': '33.2765',
        'longitude': '-112.1872',
        'consommation': '802',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '11/2/2019'
      }, {
        'id': 100,
        'typeLampadaire': 'lampadaire solo',
        'status': 'éteint',
        'region': 'Pennsylvania',
        'latitude': '40.0418',
        'longitude': '-76.3012',
        'consommation': '837',
        'typeCapteur': 'capteur consommation',
        'typeAmpoule': 'ampoule économique',
        'dateAjout': '13/4/2018'
      }];
constructor(private http: HttpClient) {}


saveAll() {

this.http.put<any[]>('https://lampadaire-d5b20.firebaseio.com/lampadaire.json', this.lampa).subscribe(
    () => {
        console.log('save complete');
    },
    (error) => {
            console.log(error);
    }
);


}

getDataSource() {
//http://www.mocky.io/v2/5c90e1d73300005024649994              mocky
//https://lampadaire-d5b20.firebaseio.com/lampadaire.json      firebase
    return this.http.get<any[]>('/api/profile');


  }


  getPosition() {
    //http://www.mocky.io/v2/5c90e1d73300005024649994              mocky
    //https://lampadaire-d5b20.firebaseio.com/lampadaire.json      firebase
        return this.http.get<any[]>('/api/position');


      }



deleteLampadaire(id) {
  console.log('id:  ' + id);
  const url = `api/delete/${id}`;

  return this.http.delete(url);

}

insertLampadaire(data) {
  return this.http.post('http://localhost:3000/api/register', data);

}

updateLampadaire(data) {

  return this.http.post('api/update', data);

}

addLampadaire(lampad: Lampadaire) {
    let lamp: any[] = [];
    this.getDataSource().subscribe(data => {
         lamp = data;
        console.log(data);
        const lampadaireObject = {
            id: 0,
            typeLampadaire: '',
            status: '',
            region: '',
            consommation: '',
            latitude: '',
            longitude: '',
            typeCapteur: '',
            typeAmpoule: '',
            dateAjout: ''
        };

        lampadaireObject.id = lamp[lamp.length - 1].id + 1;
        lampadaireObject.typeLampadaire = lampad.typeLampadaire;
        lampadaireObject.status = lampad.status;
        lampadaireObject.region = lampad.region;
        lampadaireObject.consommation = lampad.consommation;
        lampadaireObject.latitude = lampad.latitude;
        lampadaireObject.longitude = lampad.longitude;
        lampadaireObject.typeCapteur = lampad.typeCapteur;
        lampadaireObject.typeAmpoule = lampad.typeAmpoule;
        lampadaireObject.dateAjout = lampad.dateAjout;

        lamp.push(lampadaireObject);
        console.log(lamp);

        this.http.put('https://lampadaire-d5b20.firebaseio.com/lampadaire.json', lamp).subscribe(
          () => {
              console.log('save lampadaire complete');
          },
          (error) => {
                  console.log(error);
          }
      );
      });











}




}
