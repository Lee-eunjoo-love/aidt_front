<template>
  <div class="container text-center">
    <div class="row">
        <div class="col">
            <ul>
                <li class="header">AIDT 전시관</li>
                <li>AIDT 바로보기</li>
                <li>천재 AIDT 특장점</li>
                <li>AI 기술 소개</li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li class="header">자료실</li>
                <li>초등 자료</li>
                <li>중학 자료</li>
                <li>고등 자료</li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li class="header">AIDT 교육지원</li>
                <li>행사/연수 지원</li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ul>
                <li class="header">AIDT 소식</li>
                <li>공지사항</li>
                <li>이벤트</li>
                <li>AIDT 현장 스케치</li>
                <li>매거진</li>
            </ul>
        </div>
        <div class="col">
            <ul>
                <li class="header">고객센터</li>
                <li>FAQ</li>
                <li>1:1 문의 및 제안</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "SitemapPage",
}
</script>

<style scoped>
li {
    list-style: none;
}
li.header {
    font-weight: 800;
    padding-bottom: 20px;
    margin-top: 20px;
}
</style>