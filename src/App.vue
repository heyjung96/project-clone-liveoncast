<template>
<v-app>
	<!-- Hedader 영역 START -->
	<v-app-bar app >
		<div class="d-flex align-center">
		<v-img
		alt="Vuetify Logo"
		class="shrink mr-2"
		contain
		src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
		transition="scale-transition"
		width="40"
		/>

		<v-img
		alt="Vuetify Name"
		class="shrink mt-1 hidden-sm-and-down"
		contain
		min-width="100"
		src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
		width="100"
		/>
	</div>

	<!-- title 영역 -->
	<v-toolbar-title>Page title</v-toolbar-title>

	<v-spacer></v-spacer>

	<!-- 도구 모음 영역 [theme , translate] -->
		<v-btn text> 
			<v-icon>mdi-theme-light-dark</v-icon>
		</v-btn>
		
		<v-menu
			left
			bottom
			text
		>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				text
				v-bind="attrs"
				v-on="on"
			>
				<v-icon>mdi-translate</v-icon>
			</v-btn>
		</template>

		<v-list>
			<v-list-item
				v-for="lang in language"
				:key="lang"
				@click="() => {}"
			>
				<v-list-item-title>{{ lang }}</v-list-item-title>
			</v-list-item>
		</v-list>
      </v-menu>
	</v-app-bar>
	<!-- Hedader 영역 END -->

	<!-- MAIN 영역 START -->
	<v-main>
		<router-view/>
	</v-main>
	<!-- MAIN 영역 END -->
</v-app>
</template>

<script>
// import Header from './components/Header'

export default {
	name: 'App',
	components: {
		// Header,
	},
	data: () => ({
		language:['한국어','english','日本語']
	}),
};
</script>
