<template>
  <div class="jobs-index">
    <h1>Offene Stellen im Bösewicht-Universum</h1>
    <p>Wähle deine Rolle und werde Teil der Organisation.</p>

    <ul class="job-list">
      <li><NuxtLink to="/jobs/henchman">👊 Handlanger</NuxtLink></li>
      <li><NuxtLink to="/jobs/hacker">💻 Hacker</NuxtLink></li>
      <li><NuxtLink to="/jobs/chemist">⚗️ Chemiker</NuxtLink></li>
      <li><NuxtLink to="/jobs/pr-agent">📢 PR-Agent</NuxtLink></li>
      <li><NuxtLink to="/jobs/driver">🚗 Fluchtfahrer</NuxtLink></li>
    </ul>

    <NuxtLink to="/apply" class="apply-btn">Jetzt bewerben</NuxtLink>
  </div>
</template>

<script setup lang="ts">
// keine spezielle Logik nötig, NuxtLink reicht
</script>

<style scoped>
.jobs-index {
  max-width: 800px;
  margin: 3rem auto;
  background: #111;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}
h1 {
  color: crimson;
}
.job-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}
.job-list li {
  margin: 0.8rem 0;
}
.job-list a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
.job-list a:hover {
  text-decoration: underline;
}
.apply-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: crimson;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 8px;
}
.apply-btn:hover {
  background: darkred;
}
</style>
