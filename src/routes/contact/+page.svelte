<script lang="ts">
	import Header from '../../lib/Header.svelte';
	import Button from '../../lib/Button.svelte';
</script>

<section class="px-4 md:px-24 lg:px-36 xl:px-72 py-10 lg:py-12 flex flex-col gap-16">
	<Header title="Kontakt" />
	<div class="contact-container">
		<div class="flex gap-8 flex-col lg:flex-row">
			<div class="left-contact flex-[2]">
				<div class="contact-info text-white">
					<div class="flex justify-between items-center">
						<div class="grid grid-cols-[40px_1fr]">
							<i class="fas fa-map-marker-alt flex items-center text-lg" />
							<span>Location</span>
						</div>
						<p>Oslo, Norway</p>
					</div>
					<div class="flex justify-between items-center">
						<div class="grid grid-cols-[40px_1fr]">
							<i class="fas fa-envelope flex items-center text-lg" />
							<span>Email</span>
						</div>
						<p>misopetrik@gmail.com</p>
					</div>
					<div class="flex justify-between items-center">
						<div class="grid grid-cols-[40px_1fr]">
							<i class="fas fa-globe flex items-center text-lg" />
							<span>Languages</span>
						</div>
						<p>
							<span>English, Norwegian, German, Slovak</span>
						</p>
					</div>
				</div>
				<div class="flex mt-8">
					<Button icon="fab fa-linkedin" link="https://github.com/vikingviolinist" />
					<Button icon="fab fa-github" link="https://github.com/vikingviolinist" />
				</div>
			</div>
			<div class="flex-[3]">
				<form action="" class="flex flex-col gap-3">
					<input
						class="w-full rounded-3xl px-5 py-3 bg-gray-5 text-white"
						type="text"
						required
						placeholder="Your name"
					/>
					<input
						class="w-full rounded-3xl px-5 py-3 bg-gray-5 text-white"
						type="text"
						required
						placeholder="Your email"
					/>
					<input
						class="w-full rounded-3xl px-5 py-3 bg-gray-5 text-white"
						type="text"
						required
						placeholder="Enter subject"
					/>
					<textarea
						class="w-full rounded-3xl bg-gray-5 px-5 py-3 resize-none"
						cols="15"
						rows="10"
						placeholder="Message here..."
					/>
				</form>
			</div>
		</div>
	</div>
</section>
