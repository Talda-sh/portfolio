<template>
  <div class="wrap">
    <section class="hero">
      <div class="hero-text">
        <p class="hero-greeting">Bonjour, je suis</p>
        <h1 class="hero-name">{{ profile.firstName }}<span class="dot-accent">.</span></h1>
        <p class="hero-role">{{ profile.role }}</p>
        <p class="hero-desc">{{ profile.intro }}</p>
        <div class="hero-tags">
          <span
            v-for="(tag, index) in profile.heroTags"
            :key="tag"
            class="tag"
            :class="heroTagClasses[index % heroTagClasses.length]"
          >
            {{ tag }}
          </span>
        </div>
        <div class="hero-btns">
          <router-link to="/projets" class="btn-main">Voir mes projets</router-link>
          <router-link to="/contact" class="btn-sec">Me contacter</router-link>
        </div>
      </div>
      <div class="hero-avatar">
        <img src="@/assets/photo.jpg" alt="Photo de profil" class="avatar-img" />
      </div>
    </section>

    <section class="interests">
      <h2 class="interests-title">Centres d'intérêt</h2>

      <div
        v-for="interest in profile.interests"
        :key="interest.name"
        class="interest-row"
        :class="{ reverse: interest.reverse }"
      >
        <img :src="interest.image" :alt="interest.imageAlt" class="interest-img" />
        <div class="interest-content">
          <span class="interest-tag" :class="`t-${interest.color}`">{{ interest.name }}</span>
          <h3 class="interest-name">{{ interest.title }}</h3>
          <p class="interest-desc">{{ interest.description }}</p>
        </div>
      </div>
    </section>

    <section class="about">
      <h2 class="about-title">À propos de moi</h2>

      <div class="about-cards">
        <div
          v-for="card in profile.aboutCards"
          :key="card.imageAlt"
          class="about-card"
        >
          <img :src="card.image" :alt="card.imageAlt" class="about-card-img" />
          <div class="about-card-body">
            <p class="about-desc">{{ card.description }}</p>
          </div>
        </div>
      </div>

      <div class="about-langs">
        <div
          v-for="language in profile.languages"
          :key="language.name"
          class="lang-item"
        >
          <span class="lang-name">{{ language.name }}</span>
          <span class="lang-level" :class="`t-${language.color}`">{{ language.level }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { profile } from '@/data/profile'

export default {
  name: 'HomeView',

  data() {
    return {
      profile,
      heroTagClasses: ['t-purple', 't-teal', 't-coral', 't-pink'],
    }
  },
}
</script>

<style scoped>
.wrap {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 4rem var(--content-gutter);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 360px);
  align-items: center;
  gap: 4rem;
}

.hero-greeting {
  font-size: 14px;
  color: #7f77dd;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.hero-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 1;
  color: #2c2c2a;
  margin-bottom: 0.4rem;
}

.dot-accent {
  color: #d4537e;
}

.hero-role {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #5f5e5a;
  margin-bottom: 1rem;
}

.hero-desc {
  font-size: 15px;
  color: #5f5e5a;
  max-width: 58ch;
  line-height: 1.75;
  margin-bottom: 1.4rem;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.8rem;
}

.tag {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

.t-purple { background: #eeedfe; color: #534ab7; }
.t-teal { background: #e1f5ee; color: #0f6e56; }
.t-coral { background: #faece7; color: #993c1d; }
.t-pink { background: #fbeaf0; color: #993556; }

.hero-btns {
  display: flex;
  gap: 12px;
}

.btn-main,
.btn-sec {
  display: inline-block;
  padding: 10px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-main {
  background: #7f77dd;
  color: #fff;
}

.btn-main:hover {
  opacity: 0.85;
}

.btn-sec {
  background: transparent;
  color: #7f77dd;
  border: 1.5px solid #7f77dd;
}

.btn-sec:hover {
  background: #eeedfe;
}

.hero-avatar {
  width: clamp(240px, 28vw, 320px);
  height: clamp(240px, 28vw, 320px);
  border-radius: 28px;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid #eeedfe;
  justify-self: end;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.interests {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 0.5px solid #d3d1c7;
}

.interests-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2c2c2a;
  margin-bottom: 2rem;
}

.interest-row {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 0.5px solid #d3d1c7;
}

.interest-row.reverse {
  grid-template-columns: 1fr 280px;
}

.interest-row.reverse .interest-img {
  order: 2;
}

.interest-row.reverse .interest-content {
  order: 1;
}

.interest-row:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.interest-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
}

.interest-tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.8rem;
}

.interest-name {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #2c2c2a;
  margin-bottom: 0.8rem;
}

.interest-desc {
  font-size: 14px;
  color: #5f5e5a;
  line-height: 1.75;
}

.about {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 0.5px solid #d3d1c7;
}

.about-title {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #2c2c2a;
  margin-bottom: 1.8rem;
}

.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 2rem;
}

.about-card {
  background: #fff;
  border: 0.5px solid #d3d1c7;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.about-card:hover {
  transform: translateY(-4px);
}

.about-card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.about-card-body {
  padding: 1.2rem;
}

.about-desc {
  font-size: 13px;
  color: #5f5e5a;
  line-height: 1.75;
}

.about-langs {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-name {
  font-size: 14px;
  font-weight: 500;
  color: #2c2c2a;
}

.lang-level {
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 900px) {
  .wrap {
    padding-top: 2.75rem;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-avatar {
    justify-self: start;
    width: 220px;
    height: 220px;
  }

  .interest-row,
  .interest-row.reverse {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .interest-row.reverse .interest-img,
  .interest-row.reverse .interest-content {
    order: unset;
  }
}

@media (max-width: 640px) {
  .wrap {
    padding: 2.5rem var(--content-gutter);
  }

  .hero-name {
    font-size: 2.9rem;
  }

  .hero-btns {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-main,
  .btn-sec {
    width: 100%;
    text-align: center;
  }

  .hero-avatar {
    justify-self: center;
  }

  .interest-row {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .about-cards {
    grid-template-columns: 1fr;
  }
}
</style>
