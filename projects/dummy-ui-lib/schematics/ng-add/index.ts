import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Observable } from 'rxjs';
import { applyToUpdateRecorder } from '@schematics/angular/utility/change';
import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import * as ts from 'typescript';

export function ngAdd(): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ): Tree | Observable<Tree> | Rule | Promise<void | Rule> | void => {
    context.logger.info('Adding Modules to the App');
    const modulePath = '/src/app/app.module.ts';

    if (!tree.exists(modulePath)) {
      throw new SchematicsException(`The file ${modulePath} doesn't exists`);
    }

    const text = tree.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`The file ${modulePath} doesn't exists`);
    }

    const sourceFile = ts.createSourceFile(
      modulePath,
      text.toString(),
      ts.ScriptTarget.Latest,
      true
    );

    const recorder = tree.beginUpdate(modulePath);
    applyToUpdateRecorder(
      recorder,
      addImportToModule(
        sourceFile,
        modulePath,
        'DummyUiLibModule',
        'dummy-ui-lib'
      )
    );
    tree.commitUpdate(recorder);

    context.logger.info('Installing dependencies..');
    context.addTask(new NodePackageInstallTask({}));
    return tree;
  };
}
