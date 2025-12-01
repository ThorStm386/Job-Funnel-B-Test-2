<template>
  <div class="landing">
    <section class="hero">
      <img src="/images/007-villain.jpg" alt="Bond Villain Atmosphere" class="hero-img" />
      <h1>Die Bösewicht Bewerberbörse</h1>
      <p>Werde Teil des exklusiven 007-Universums – als Antagonist mit Stil.</p>
      <NuxtLink to="/apply" class="apply-btn">Bewirb dich als Bösewicht</NuxtLink>
    </section>

    <section class="jobs">
      <h2>Weitere Stellenangebote</h2>
      <ul>
        <li><NuxtLink to="/jobs/henchman">Handlanger</NuxtLink></li>
        <li><NuxtLink to="/jobs/hacker">Hacker</NuxtLink></li>
        <li><NuxtLink to="/jobs/chemist">Chemiker</NuxtLink></li>
        <li><NuxtLink to="/jobs/pr-agent">PR-Agent</NuxtLink></li>
        <li><NuxtLink to="/jobs/driver">Fluchtfahrer</NuxtLink></li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  background: black;
  color: white;
  padding: 4rem;
}
.hero-img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
.apply-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: crimson;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  border-radius: 8px;
}
.jobs {
  margin: 3rem;
}
.jobs ul {
  list-style: none;
  padding: 0;
}
.jobs li {
  margin: 1rem 0;
}
</style>
