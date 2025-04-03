<!--datocms-autoinclude-header start-->

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

<!--datocms-autoinclude-header end-->

# Verkefni 5: Next.js og CMS kerfi

## Um verkefnið

Þetta verkefni er unnið sem hluti af áfanganum Vefforritun 2, 2025. Verkefnið notast við Next.js framenda fyrir DatoCMS sem er headless CMS kerfi.

## Uppsetning

### Tæknileg atriði

- **Next.js**: Framework sem byggir á React
- **TypeScript**: Týpaðar skrár til að minnka líkur á villum
- **App router**: Notað til að setja upp leiðarkerfi
- **Sass**: Fyrir CSS stílana
- **DatoCMS**: Headless CMS kerfi til að halda utan um og breyta efni

### Virkni síðunnar

- Forsíða með efni sem er hægt að breyta í DatoCMS
- Spurningalisti sem tekur gögn úr CMS
- Stök síða fyrir hverja spurningu

## Skipulag verkefnis

- **/src/app**: Next.js framenda uppbygging
- **/src/styles**: Sass skrár fyrir stílana
- **/src/lib/datocms**: API tengingar við DatoCMS

## Hvernig á að keyra verkefnið

1. Klóna verkefnið:
   ```
   git clone [GitHub repo URL]
   ```

2. Setja upp pakkana:
   ```
   npm install
   ```

3. Búa til `.env.local` skrá með DatoCMS aðgangslyklunum:
   ```
   DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN=[your-api-token]
   ```

4. Keyra verkefnið:
   ```
   npm run dev
   ```

## DatoCMS uppsetning

Í DatoCMS þarf að búa til eftirfarandi líkön:

1. **HomePage** með:
   - title (Single-line string)
   - description (Markdown)
   - welcomeMessage (Markdown)

2. **Question** með:
   - questionTitle (Single-line string)
   - spurning (Markdown)
   - authors (Tengingar við höfunda)

3. **Author** með:
   - name (Single-line string)
   - uppahaldsspurningaflokkur (Tengingar við flokka)

## Hýsing

Verkefnið er hýst á Vercel og tengist við GitHub repository verkefnisins.

## Á að gera

- [x] Next.js uppsetning með TypeScript, app router og Sass
- [x] Forsíða með breytanlegu efni
- [x] Spurningakerfi með lista og stökum síðum
- [x] Tengingar við DatoCMS
- [x] Stílar með Sass
- [x] Hýsing á Vercel

## Höfundur

[Þitt nafn]

## <!--datocms-autoinclude-footer start-->

---

# What is DatoCMS?

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60" alt="DatoCMS - The Headless CMS for the Modern Web"></a>

[DatoCMS](https://www.datocms.com/) is the REST & GraphQL Headless CMS for the modern web.

Trusted by over 25,000 enterprise businesses, agencies, and individuals across the world, DatoCMS users create online content at scale from a central hub and distribute it via API. We ❤️ our [developers](https://www.datocms.com/team/best-cms-for-developers), [content editors](https://www.datocms.com/team/content-creators) and [marketers](https://www.datocms.com/team/cms-digital-marketing)!

**Why DatoCMS?**

- **API-First Architecture**: Built for both REST and GraphQL, enabling flexible content delivery
- **Just Enough Features**: We believe in keeping things simple, and giving you [the right feature-set tools](https://www.datocms.com/features) to get the job done
- **Developer Experience**: First-class TypeScript support with powerful developer tools

**Getting Started:**

- ⚡️ [Create Free Account](https://dashboard.datocms.com/signup) - Get started with DatoCMS in minutes
- 🔖 [Documentation](https://www.datocms.com/docs) - Comprehensive guides and API references
- ⚙️ [Community Support](https://community.datocms.com/) - Get help from our team and community
- 🆕 [Changelog](https://www.datocms.com/product-updates) - Latest features and improvements

**Official Libraries:**

- [**Content Delivery Client**](https://github.com/datocms/cda-client) - TypeScript GraphQL client for content fetching
- [**REST API Clients**](https://github.com/datocms/js-rest-api-clients) - Node.js/Browser clients for content management
- [**CLI Tools**](https://github.com/datocms/cli) - Command-line utilities for schema migrations (includes [Contentful](https://github.com/datocms/cli/tree/main/packages/cli-plugin-contentful) and [WordPress](https://github.com/datocms/cli/tree/main/packages/cli-plugin-wordpress) importers)

**Official Framework Integrations**

Helpers to manage SEO, images, video and Structured Text coming from your DatoCMS projects:

- [**React Components**](https://github.com/datocms/react-datocms)
- [**Vue Components**](https://github.com/datocms/vue-datocms)
- [**Svelte Components**](https://github.com/datocms/datocms-svelte)
- [**Astro Components**](https://github.com/datocms/astro-datocms)

**Additional Resources:**

- [**Plugin Examples**](https://github.com/datocms/plugins) - Example plugins we've made that extend the editor/admin dashboard
- [**Starter Projects**](https://www.datocms.com/marketplace/starters) - Example website implementations for popular frameworks
- [**All Public Repositories**](https://github.com/orgs/datocms/repositories?q=&type=public&language=&sort=stargazers)

<!--datocms-autoinclude-footer end-->
