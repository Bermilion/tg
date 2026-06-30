<header {{ $attributes->class('header') }}>
    <a href="/" class="header__link">
        <x-site.partials.header.logo />
        <span class="header__tag">Выборг</span>
    </a>

    <x-site.ui.button.button icon:trailing="bars-solid" text="btn"/>

    <x-site.ui.icon name="bars-regular" />
</header>
