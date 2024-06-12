<script lang="ts" setup></script>
<template>
  <div class="header">
    <div class="content">
      <div>
        <NuxtLink class="logoImg" to="/"><img src="/assets/img/Logo.svg" /></NuxtLink>
        <NuxtLink to="/tariffs">Тарифы</NuxtLink>
        <NuxtLink to="/contact">Контакты</NuxtLink>
      </div>
      <div>
        <span class="phone">+7 495 118-44-22</span>
        <NuxtLink to="/login">Вход</NuxtLink>
        <NuxtLink class="registerBut" to="/register">Регистрация</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    background: linear-gradient(to right, #000 0%, #1c2734 100%);
    height: 60px;
    width: 100%;
    color: #fff;
    & .content {
      display: flex;
      justify-content: space-between;
      width: 1150px;
      & div {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px !important;
        & a {
          text-decoration: none;
          color: #fff;
          padding: 9px 18px;
          border-radius: 5px;
          &:hover {
            background-color: #0584fe;
          }
        }
      }
      & div {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px !important;
        & a {
          text-decoration: none;
          color: #fff;
          padding: 9px 18px;
          border-radius: 10px;
          &:hover {
            background-color: #0584fe;
          }
        }
      }
    }
    & .logoImg {
      background-color: transparent !important;
      padding: 0 !important;
    }
    & .registerBut {
      font-size: 15px !important;
    }
    & .phone {
      font-weight: 700;
    }
  }
</style>
