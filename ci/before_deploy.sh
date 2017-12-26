# This script takes care of building your crate and packaging it for release

set -ex

main() {
    local src=$(pwd) \
          stage=

    case $TRAVIS_OS_NAME in
        linux)
            stage=$(mktemp -d)
            ;;
        osx)
            stage=$(mktemp -d -t tmp)
            ;;
    esac

    test -f Cargo.lock || cargo --manifest-path ./packages/validator-cli/Cargo.toml generate-lockfile

    # TODO Update this to build the artifacts that matter to you
    cross rustc --manifest-path ./packages/validator-cli/Cargo.toml --bin validator-cli --target $TARGET --release -- -C lto

    # TODO Update this to package the right artifacts
    cp packages/validator-cli/target/$TARGET/release/validator-cli $stage/

    cd $stage
    tar czf $src/$CRATE_NAME-$TRAVIS_TAG-$TARGET.tar.gz *
    cd $src

    rm -rf $stage
}

main
