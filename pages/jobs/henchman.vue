<template>
  <div class="job-page">
    <h1>Stellenangebot: Handlanger</h1>
    <p>
      Werde Teil der Elite – als treuer Handlanger eines Bösewichts im 007‑Universum.
      Deine Aufgabe: Loyalität, Muskelkraft und absolute Diskretion.
    </p>

    <section class="requirements">
      <h2>Anforderungen</h2>
      <ul>
        <li>Körperlich fit und belastbar</li>
        <li>Uneingeschränkte Loyalität gegenüber dem Bösewicht</li>
        <li>Bereitschaft für gefährliche Missionen</li>
        <li>Schweigsamkeit und Diskretion</li>
      </ul>
    </section>

    <section class="benefits">
      <h2>Benefits</h2>
      <ul>
        <li>Kostenlose Uniform mit stilvollem Logo</li>
        <li>Zugang zu geheimen Basen und luxuriösen Verstecken</li>
        <li>Bonuszahlungen bei erfolgreicher Mission</li>
        <li>Exklusive Trainingsprogramme (Nahkampf, Waffen, Einschüchterung)</li>
      </ul>
    </section>

    <NuxtLink to="/apply" class="apply-btn">Jetzt bewerben</NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Hier könnte später Logik eingebaut werden, z. B. Supabase-Abfragen
</script>

<style scoped>
.job-page {
  max-width: 800px;
  margin: 3rem auto;
  background: #111;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}
h1, h2 {
  color: crimson;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
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
