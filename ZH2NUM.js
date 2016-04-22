

function ZHToNUM(s){
    var NUM_ZH = "零 一 二 三 四 五 六 七 八 九".split(" ");
    var NUM_ZH_SP ="占 占 两".split(" ");
    var W_ZH = "十 百 千 万 亿".split(" "),W_NUM = [10,100,1000,10000,10000*10000];
    var index = s.length-1;  
    var result = 0;
    while(index > -1){
         var value = word2num(s[index]),_temp,weight=W_ZH.indexOf(s[index]);
        if(value > -1){
            result += value;
            index--;
        }else if(weight > -1){
            if(weight > 2){
                result +=W_NUM[weight]*ZHToNUM(s.substr(0,index));
                break;
            }else{
                 result += W_NUM[weight]*word2num(s[index - 1]);
            index = index -2;
            }
        }
    }
    return result;

function word2num(w){
    if(w == undefined){
        return 1;
    }else{
        return NUM_ZH.indexOf(w) > -1 ? NUM_ZH.indexOf(w) : NUM_ZH_SP.indexOf(w);
    }
    
}
}
