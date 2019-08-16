export default function anonymous(input
) {
  var net = {"layers":[{"Monday":{},"Tuesday":{},"Wednesday":{},"Thursday":{},"Friday":{},"Saturday":{},"Sunday":{}},{"0":{"bias":0.10353495157182104,"weights":{"Monday":3.338523397443909,"Tuesday":-3.981290489458842,"Wednesday":0.8556713127182259,"Thursday":-3.7439122655720594,"Friday":3.944154325152766,"Saturday":-3.146202335482901,"Sunday":3.045742560787544}},"1":{"bias":-0.308023144581955,"weights":{"Monday":-3.4076863178686567,"Tuesday":3.2373078229740644,"Wednesday":1.4214606873477917,"Thursday":0.7876082453933683,"Friday":4.450770695094798,"Saturday":-3.656524733715032,"Sunday":-3.0033930295134375}},"2":{"bias":0.5774106352166336,"weights":{"Monday":-1.7825900158909398,"Tuesday":-1.025870181054662,"Wednesday":-4.561894429090691,"Thursday":4.12236108249187,"Friday":1.5316884032850828,"Saturday":-2.00648392140364,"Sunday":4.178195230239247}}},{"Brilliant Yellow Corral":{"bias":-2.13645713639684,"weights":{"0":5.850256158828716,"1":-5.902806400010219,"2":-5.864201078686351}},"Penny’s":{"bias":-1.9820704253512458,"weights":{"0":-6.805054981064932,"1":6.186732681638899,"2":-4.389519905469737}},"Right Coast Wings":{"bias":-2.235434076208827,"weights":{"0":1.9459835445860123,"1":3.1175978468130094,"2":-6.564547709819842}},"The Delusion Last Railway Car":{"bias":-3.8659742491412037,"weights":{"0":-6.373058841867293,"1":-0.8564214806360548,"2":6.724537704509501}},"Fun Day Inn":{"bias":-8.897771606220985,"weights":{"0":4.493868292242958,"1":4.994313288275873,"2":1.682304877578446}},"JHOP":{"bias":3.1647034293931284,"weights":{"0":-5.660553706961032,"1":-5.935055772042067,"2":-2.2685060761600426}},"Owls":{"bias":-5.564164424706559,"weights":{"0":2.204131185017247,"1":-4.919689877869619,"2":5.7790721963753375}}}],"outputLookup":true,"inputLookup":true};

  for (var i = 1; i < net.layers.length; i++) {
    var layer = net.layers[i];
    var output = {};
    
    for (var id in layer) {
      var node = layer[id];
      var sum = node.bias;
      
      for (var iid in node.weights) {
        sum += node.weights[iid] * input[iid];
      }
      output[id] = (1 / (1 + Math.exp(-sum)));
    }
    input = output;
  }
  return output;
};