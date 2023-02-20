<script lang="ts">
	import '../app.postcss';
	import Main from '../components/layout/Main.svelte';
	import NavBar from '../components/layout/NavBar.svelte';
	import SideBar from '../components/layout/SideBar.svelte';
</script>

<NavBar />
<SideBar />
<Main><slot /></Main>
