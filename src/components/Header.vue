<template>
	<v-app-bar 
		app 
		dense
		flat
	>
		<router-link :to="{ name: 'home' }" >
			<div 
				class="d-flex align-center"
			>
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://thumb.ac-illust.com/t/27/2721401805ba6a02e3788459b8eff97a_t.jpeg"
					transition="scale-transition"
					width="40"
				/>
			</div>
		</router-link>

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
</template>

<script>
export default {

}
</script>

<style>

</style>