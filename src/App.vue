<template>
	<v-app>
		<!-- Hedader 영역 START -->
		<Header />
		<!-- Hedader 영역 END -->

		<!-- MAIN 컨텐츠 영역 START -->
		<v-main class='mx-5'>
			<router-view/>
		</v-main>
		<!-- MAIN 컨텐츠 영역 END -->
		
		<!-- Footer 영역 START -->
		<Footer />
		<!-- Footer 영역 END -->
	</v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	data: () => ({
		language:['한국어','english','日本語']
	}),
};
</script>
