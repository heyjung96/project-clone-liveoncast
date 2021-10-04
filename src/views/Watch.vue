<template>
	<v-main>
		<v-row > 
			<!-- 플레이어 영역 START :height="height" -->
			<v-card 
				:height="heightPlayer"
				:width="widthPlayer"
			>
				<v-card-title>
					Player
				</v-card-title>
				<v-card-subtitle>
					안녕, {{ $route.params.castCode }}
				</v-card-subtitle>
			</v-card>
			<!-- 플레이어 영역 END -->

		
			<!-- 채팅 영역 START :width="height" -->
			<v-card 
				:height="heightChat"
				:width="widthChat"
			>
				<v-card-title>
					chat
				</v-card-title>
			</v-card>
			<!-- 채팅 영역 END -->
		</v-row>
	</v-main>
</template>

<script>
export default {
	computed: {
		widthPlayer () {	//플레이어 가로
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return '100%'
				case 'sm': return '100%'
				case 'md': return '70%'
				case 'lg': return '70%'
				case 'xl': return '70%'
				default : return '70%'
			}
		},
		heightPlayer () { //플레이어 세로
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return 220
				case 'sm': return 400
				case 'md': return 500
				case 'lg': return 600
				case 'xl': return 800
				default : return 500
			}
		},
		widthChat () {	//채팅 가로
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return '100%'
				case 'sm': return '100%'
				case 'md': return '25%'
				case 'lg': return '25%'
				case 'xl': return '25%'
				default : return '25%'
			}
		},
		heightChat () { //채팅 세로
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return 220
				case 'sm': return 400
				case 'md': return 500
				case 'lg': return 600
				case 'xl': return 800
				default : return 500
			}
		},
	},
	mounted () {
		console.log(this.$vuetify.breakpoint.name)
		console.log(this.$vuetify.breakpoint.width)
	}
}
</script>

<style>

</style>