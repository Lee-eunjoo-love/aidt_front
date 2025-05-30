<template>
  <div>
    <ul>
      <li>천재교육</li>
      <li>천재교과서</li>
      <li>이용약관</li>
      <li>개인정보처리방침침</li>
      <li>
        <select>
          <option>패밀리사이트</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped>
li {
  list-style: none;
  cursor: pointer;
  float: left;
  margin-right: 5px;
  color: #444;
  margin: 5px;
}
</style>