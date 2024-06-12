<template>
  <div>
    <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="block-wrp">
      <div class="block-info">
        <div>
          <img src="/assets/icon/infinityIcon.svg" />
        </div>
        <div>
          <p class="title">Неограниченый автопарк</p>
          <p>Можно добавить неограниченное кол-во машин и водителей</p>
        </div>
      </div>
      <div class="block-info">
        <div>
          <img src="/assets/icon/mapIcon.svg" />
        </div>
        <div>
          <p class="title">Сокращение затрат до 50%</p>
          <p>Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке</p>
        </div>
      </div>
      <div class="block-info">
        <div>
          <img src="/assets/icon/shieldIcon.svg" />
        </div>
        <div>
          <p class="title">Безопасность</p>
          <p>Данные передаются в зашифрованном виде, они доступны только получателю</p>
        </div>
      </div>
    </div>
    <div class="block-wrp">
      <div class="block-info">
        <div>
          <img src="/assets/icon/bellIcon.svg" />
        </div>
        <div>
          <p class="title">Уведомление о погашении</p>
          <p>Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП</p>
        </div>
      </div>
      <div class="block-info">
        <div>
          <img src="/assets/icon/receiptPayIcon.svg" />
        </div>
        <div>
          <p class="title">Квитанция об оплате</p>
          <p>После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.</p>
        </div>
      </div>
      <div class="block-info">
        <div>
          <img src="/assets/icon/historyCarIcon.svg" />
        </div>
        <div>
          <p class="title">Все история сохраняется по каждой машине</p>
          <p>Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .block-wrp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin: 10px 0;
  }

  .block-info {
    height: 174px;
    width: 362px;
    border-radius: 10px;
    display: flex;
    background-color: #eeeff1;
    align-items: center;
    gap: 10px;
    padding: 0 15px;
    & img {
      aspect-ratio: 1/1;
      width: 59px;
    }
  }
  .title {
    font-size: 18px;
    color: #1253a2;
  }
  h2 {
    text-align: center;
  }
</style>
