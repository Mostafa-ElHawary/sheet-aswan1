"use client";
import { useEffect } from 'react';

const PhonesComponent: React.FC = () => {
  const statuses = `+201095295198
  +201012129523
  +201273443518
  +201124072222
  +201206117533
  +201008321590
  +201004920859
  +201287877820
  +201009306826
  +201201781440
  +201013818203
  +201004577787
  +201002444521
  +201289032814
  +201025945691
  +201119303959
  +201009256578
  +201064546048
  +201021261995
  +201115190907
  +201011558783
  +201066477401
  +201111740392
  +201098388040
  +201285908629
  +201009400449
  +201009607272
  +201022158501
  +201004211226
  +201090696372
  +201200546259
  +201127190408
  +201003198287
  +201020472293
  +201121587709
  +201157366461
  +201002464680
  +201210067403
  +201028369890
  +201205288430
  +201065329890
  +201126568824
  +201006398469
  +201274207335
  +201005558457
  +201114895906
  +201060116913
  +201028648042
  +201060744924
  +201152698920
  +201122356494
  +201094505664
  +201018009363
  +201025359723
  +201062907707
  +201118418740
  +201118418740
  +201118418740
  +201118418740
  +201067116170
  +201015195000
  +201156507961
  +201274014130
  +201063883256
  +201111162437
  +201115857766
  +201028601776
  +201023614244
  +201211991058
  +201093121998
  +201120238275
  +201027678880
  +201068614537
  +201091610241
  +201007981294
  +201271131683
  +201159443740
  +201129109439
  +201029009878
  +201029009878
  +201092525202
  +201099305608
  +201099305608
  +201141379104
  +201141379104
  +201018865051
  +201096685573
  +201015374014
  +201157412209
  +201016001244
  +201018917215
  +201098412219
  +201098412219
  +201061371234
  +201093072720
  +201119417632
  +201276569658
  +201010172050
  +201208580833
  +201212823710
  +201090255788
  +201014341930
  +201099212235
  +201208965826
  +201212865536
  +201024422678
  +201062876070
  +201011533288
  +201020074353
  +201022399165
  +201129324763
  +201276857471
  +201201875650
  +201060580281
  +201092010759
  +201027430627
  +201063806607
  +201007552928
  +201003561676
  +201123720986
  +201124176135
  +201095396549
  +201019526465
  +201280551577
  +201024980495
  +201061458420
  +201061458420
  +201014112715
  +201099476361
  +201011562020
  +201006158485
  +201027808810
  +201111952464
  +201004515102
  +201021269247
  +201024913708
  +201069017065
  +201002217599
  +201023521550
  +201011054024
  +201066463527
  +201068124404
  +201228793302
  +201013615807
  +201140631212
  +201128300735
  +201021501755
  +201027993765
  +201140312215
  +201090581358
  +201018500515
  +201065153800
  +201020256112
  +201208938277
  +201093082495
  +201120502583
  +201224022155
  +201010160560
  +201140956939
  +201151945788
  +201280314581
  +201013580834
  +201069323008
  +201067200128
  +201120209339
  +201022399502
  +201126880713
  +201092818679
  +201023637123
  +201003636723
  +201097309919
  +201060251596
  +201015397896
  +201026142946
  +201066434552
  +201277880494
  +201007064445
  +201118924646
  +201207262473
  +201000767129
  +201015503107
  +201016864925
  +201019803382
  +201027298693
  +201067620569
  +201289526885
  +201064684343
  +201099388843
  +201119266198
  +201200047734
  +201004704595
  +201117720039
  +201090480643
  +201096654018
  +201119499217
  +201118042260
  +201211659504
  +201005470584
  +201114866602
  +201006227769
  `
    .split('\n')
    .filter(Boolean)
    .map((line) => line.trim());

  useEffect(() => {
    const PhonesElement = document.getElementById('p-PHONE');

    if (PhonesElement) {
      statuses.forEach((status, index) => {
        const pElement = document.createElement('p');
        pElement.innerText = `${index + 1} - ${status}`;
        PhonesElement.appendChild(pElement);
      });
    }
  }, [statuses]);

  return null;
};

export default PhonesComponent;